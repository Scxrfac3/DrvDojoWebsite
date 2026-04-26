import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { Mail, Lock, Loader2, CheckCircle } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  
  // Check if user just completed a purchase
  const purchasedProduct = searchParams.get('Purchased');
  
  // Get the return URL from location state or default to academy
  const from = (location.state as any)?.from?.pathname || '/academy/adi-blueprint';
  
  // Show purchase success message if redirected from checkout
  useEffect(() => {
    if (purchasedProduct) {
      setMessage({
        type: 'success',
        text: `Payment successful! Your ${purchasedProduct} account has been created. Check your email for the magic sign-in link.`
      });
    }
  }, [purchasedProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage({ type: 'error', text: 'Please enter your email address' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    const { error } = await signIn(email);

    if (error) {
      setMessage({ type: 'error', text: error.message || 'Failed to send magic link' });
      setIsLoading(false);
    } else {
      setMessage({ 
        type: 'success', 
        text: 'Check your email! We sent you a magic link to sign in.' 
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xs text-gray-500 tracking-wider">BY</span>
            <span className="text-white font-bold tracking-wider text-xl">DRIVE DOJO</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Access Your Academy</h1>
          <p className="text-gray-400">Enter your email to receive a magic sign-in link</p>
        </div>

        {/* Login Form */}
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b35] transition-colors"
                  disabled={isLoading}
                />
              </div>
            </div>

            {message && (
              <div 
                className={`p-4 rounded-xl text-sm ${
                  message.type === 'success' 
                    ? 'bg-[#4ade80]/10 border border-[#4ade80]/30 text-[#4ade80]' 
                    : 'bg-[#e63946]/10 border border-[#e63946]/30 text-[#e63946]'
                }`}
              >
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-[#ff6b35] hover:bg-[#ff8555] text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Link...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  Send Magic Link
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              Don't have access yet?{' '}
              <a href="/adi-blueprint" className="text-[#ff6b35] hover:underline">
                Purchase the ADI Blueprint
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-600">
          <p>By signing in, you agree to our terms of service.</p>
        </div>
      </div>
    </div>
  );
}
