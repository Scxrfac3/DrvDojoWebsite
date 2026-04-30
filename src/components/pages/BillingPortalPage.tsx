import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import supabase from '@/lib/supabase';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Loader2,
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export default function BillingPortalPage() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
      return;
    }

    const createPortalSession = async () => {
      if (!user) return;

      try {
        // Get user's profile to find stripe_customer_id
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('stripe_customer_id, subscription_status')
          .eq('id', user.id)
          .single();

        if (profileError) {
          console.error('Error fetching profile:', profileError);
          setError('Unable to load billing information. Please try again later.');
          setLoading(false);
          return;
        }

        if (!profile?.stripe_customer_id) {
          // No subscription found, redirect to subscribe page
          navigate('/subscribe');
          return;
        }

        setLoading(false);

        // Create billing portal session
        setRedirecting(true);
        const response = await fetch('/.netlify/functions/create-billing-portal', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            customerId: profile.stripe_customer_id
          }),
        });

        const data = await response.json();
        
        if (data.url) {
          window.location.href = data.url;
        } else {
          setError(data.error || 'Failed to create billing portal session');
          setRedirecting(false);
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Something went wrong. Please try again.');
        setLoading(false);
        setRedirecting(false);
      }
    };

    createPortalSession();
  }, [user, authLoading, navigate]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-[#ffd700] animate-spin mx-auto mb-4" />
          <p className="text-gray-400">
            {redirecting ? 'Redirecting to billing portal...' : 'Loading...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {error ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center"
          >
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Unable to Access Billing</h2>
            <p className="text-gray-400 mb-6">{error}</p>
            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all border border-white/10"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Dashboard
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
          >
            <CreditCard className="w-12 h-12 text-[#ffd700] mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Manage Your Subscription</h2>
            <p className="text-gray-400 mb-6">
              You will be redirected to the Stripe billing portal to manage your subscription, update payment methods, or cancel your subscription.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <ExternalLink className="w-4 h-4" />
              <span>Secure payment processing by Stripe</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
