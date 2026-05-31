import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { useState, useEffect, createContext, useContext, ReactNode, useCallback, useRef } from 'react';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Production site URL - must match Supabase Dashboard > Authentication > URL Configuration > Site URL
const SITE_URL = import.meta.env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : 'https://drivedojodrivingschool.com');

// Create Supabase client for auth with explicit PKCE configuration
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    detectSessionInUrl: true,
    flowType: 'pkce',
    autoRefreshToken: true,
    persistSession: true,
    storageKey: 'supabase.auth.token',
  },
});

// Key for storing the intended redirect destination across the magic link flow
const AUTH_REDIRECT_KEY = 'auth_redirect_to';

// Auth context types
interface AuthContextType {
  user: User | null;
  session: any;
  loading: boolean;
  signIn: (email: string, redirectTo?: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
  authRedirect: string | null;
  clearAuthRedirect: () => void;
}

// Create auth context
const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signIn: async () => ({ error: null }),
  signOut: async () => {},
  isAuthenticated: false,
  authRedirect: null,
  clearAuthRedirect: () => {},
});

// Auth provider component
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [authRedirect, setAuthRedirect] = useState<string | null>(null);
  const initialLoadDone = useRef(false);

  // On mount: read any stored redirect destination
  useEffect(() => {
    try {
      const stored = localStorage.getItem(AUTH_REDIRECT_KEY);
      if (stored) {
        setAuthRedirect(stored);
      }
    } catch {
      // localStorage not available (SSR or privacy mode)
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    // Get initial session — this also processes any hash fragment tokens from magic links
    supabase.auth.getSession().then(({ data: { session: currentSession }, error }) => {
      if (!isMounted) return;
      
      if (error) {
        console.error('Error getting initial session:', error.message);
      }

      setSession(currentSession);
      setUser(currentSession?.user ?? null);

      // After initial session check, if we have a user, clear the stored redirect
      // (it will be consumed by the calling component)
      if (currentSession?.user && !initialLoadDone.current) {
        initialLoadDone.current = true;
        // Don't clear here — let the consuming component handle it via clearAuthRedirect
      }

      setLoading(false);
    });

    // Listen for auth state changes (e.g., after magic link hash is processed)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        if (!isMounted) return;

        console.log('[Auth] onAuthStateChange event:', event);

        setSession(currentSession);
        setUser(currentSession?.user ?? null);

        if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
          // Read stored redirect destination
          try {
            const stored = localStorage.getItem(AUTH_REDIRECT_KEY);
            if (stored && currentSession?.user) {
              setAuthRedirect(stored);
            }
          } catch {
            // localStorage not available
          }
        }

        if (event === 'SIGNED_OUT') {
          setAuthRedirect(null);
          try {
            localStorage.removeItem(AUTH_REDIRECT_KEY);
          } catch {
            // localStorage not available
          }
        }

        setLoading(false);
      }
    );

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signIn = useCallback(async (email: string, redirectTo: string = '/dashboard') => {
    try {
      // Store the intended redirect destination so we can navigate there after auth
      try {
        localStorage.setItem(AUTH_REDIRECT_KEY, redirectTo);
      } catch {
        // localStorage not available
      }

      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          // The redirect URL must exactly match what's allowed in Supabase Dashboard
          // URL Configuration > Redirect URLs
          emailRedirectTo: `${SITE_URL}${redirectTo}`,
        },
      });

      if (error) {
        console.error('[Auth] signInWithOtp error:', error.message);
      }

      return { error };
    } catch (error) {
      console.error('[Auth] signIn exception:', error);
      return { error: error as Error };
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      await supabase.auth.signOut();
      try {
        localStorage.removeItem(AUTH_REDIRECT_KEY);
      } catch {
        // localStorage not available
      }
      setAuthRedirect(null);
    } catch (error) {
      console.error('[Auth] signOut error:', error);
    }
  }, []);

  const clearAuthRedirect = useCallback(() => {
    setAuthRedirect(null);
    try {
      localStorage.removeItem(AUTH_REDIRECT_KEY);
    } catch {
      // localStorage not available
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signIn,
        signOut,
        isAuthenticated: !!user,
        authRedirect,
        clearAuthRedirect,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use auth
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Check if user has access to ADI Blueprint
export async function checkBlueprintAccess(userId: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('has_blueprint_access')
      .eq('id', userId)
      .single();
    
    if (error) {
      console.error('Error checking blueprint access:', error);
      return false;
    }
    
    return data?.has_blueprint_access === true;
  } catch (error) {
    console.error('Error checking blueprint access:', error);
    return false;
  }
}
