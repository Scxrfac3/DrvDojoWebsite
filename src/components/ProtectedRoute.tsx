import { ReactNode, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';

interface ProtectedRouteProps {
  children: ReactNode;
  requireAuth?: boolean;
}

export default function ProtectedRoute({
  children,
  requireAuth = true
}: ProtectedRouteProps) {
  const { user, loading, isAuthenticated, authRedirect, clearAuthRedirect } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle post-auth redirect: when user just signed in via magic link
  // and we have a stored redirect destination, navigate there
  useEffect(() => {
    if (isAuthenticated && !loading && authRedirect) {
      const target = authRedirect;
      clearAuthRedirect();
      // Use setTimeout to ensure React state updates have settled
      const timer = setTimeout(() => {
        navigate(target, { replace: true });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, loading, authRedirect, clearAuthRedirect, navigate]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // If route requires auth but user is not authenticated
  if (requireAuth && !isAuthenticated) {
    // Redirect to login page, preserving the intended destination
    const redirectParam = location.pathname !== '/login' ? `?redirect=${encodeURIComponent(location.pathname)}` : '';
    return <Navigate to={`/login${redirectParam}`} state={{ from: location }} replace />;
  }

  // If user is authenticated and trying to access login page, check for stored redirect
  if (isAuthenticated && !requireAuth && location.pathname === '/login') {
    if (authRedirect) {
      const target = authRedirect;
      clearAuthRedirect();
      return <Navigate to={target} replace />;
    }
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
