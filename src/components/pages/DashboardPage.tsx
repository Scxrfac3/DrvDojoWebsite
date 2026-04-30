import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import supabase from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  Clock, 
  CreditCard, 
  X, 
  CheckCircle, 
  ArrowRight,
  Loader2,
  LayoutDashboard,
  BarChart3,
  Receipt,
  Target,
  Settings
} from 'lucide-react';

interface Profile {
  id: string;
  email: string | null;
  stripe_customer_id: string | null;
  subscription_status: string | null;
  plan_type: string | null;
  trial_ends_at: string | null;
  subscription_id: string | null;
  current_period_end: string | null;
  has_finance_access: boolean | null;
  has_blueprint_access: boolean | null;
  created_at: string | null;
  updated_at: string | null;
}

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [showTrialBanner, setShowTrialBanner] = useState(true);
  const [dismissedTrial, setDismissedTrial] = useState(false);

  const trialStarted = searchParams.get('trial') === 'started';

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('id, email, stripe_customer_id, subscription_status, plan_type, trial_ends_at, subscription_id, current_period_end, has_finance_access, has_blueprint_access, created_at, updated_at')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching profile:', error);
        } else {
          setProfile(data);
          
          // Check if trial banner should be shown
          if (data.subscription_status === 'trialing' && data.trial_ends_at) {
            const trialEnd = new Date(data.trial_ends_at);
            const now = new Date();
            if (trialEnd > now) {
              setShowTrialBanner(true);
            }
          }
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user, authLoading, navigate]);

  const getTrialDaysRemaining = () => {
    if (!profile?.trial_ends_at) return 0;
    const trialEnd = new Date(profile.trial_ends_at);
    const now = new Date();
    const diffTime = trialEnd.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-400';
      case 'trialing':
        return 'text-yellow-400';
      case 'past_due':
        return 'text-red-400';
      case 'canceled':
        return 'text-gray-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
    switch (status) {
      case 'active':
        return `${baseClasses} bg-green-400/20 text-green-400 border border-green-400/30`;
      case 'trialing':
        return `${baseClasses} bg-yellow-400/20 text-yellow-400 border border-yellow-400/30`;
      case 'past_due':
        return `${baseClasses} bg-red-400/20 text-red-400 border border-red-400/30`;
      case 'canceled':
        return `${baseClasses} bg-gray-400/20 text-gray-400 border border-gray-400/30`;
      default:
        return `${baseClasses} bg-gray-400/20 text-gray-400 border border-gray-400/30`;
    }
  };

  const handleManageSubscription = async () => {
    if (!profile?.stripe_customer_id) {
      navigate('/subscribe');
      return;
    }

    try {
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
        // Fallback: redirect to subscribe page
        navigate('/subscribe');
      }
    } catch (err) {
      console.error('Error creating billing portal session:', err);
      navigate('/subscribe');
    }
  };

  const handleDismissTrial = () => {
    setDismissedTrial(true);
    setShowTrialBanner(false);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#ffd700] animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const daysRemaining = getTrialDaysRemaining();
  const hasAccess = profile?.has_finance_access || profile?.subscription_status === 'trialing' || profile?.subscription_status === 'active';

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Trial Started Banner */}
      <AnimatePresence>
        {trialStarted && !dismissedTrial && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-green-500/20 border-b border-green-500/30 py-4 px-4"
          >
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-300">
                  Your 7-day trial has started! You now have full access to ADI Finance.
                </span>
              </div>
              <button
                onClick={() => navigate(0)}
                className="text-green-400 hover:text-green-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Trial Banner */}
      <AnimatePresence>
        {showTrialBanner && profile?.subscription_status === 'trialing' && !dismissedTrial && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-yellow-500/20 border-b border-yellow-500/30 py-4 px-4"
          >
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-300">
                  Day {7 - daysRemaining + 1} of your 7-Day Trial — {daysRemaining} day{daysRemaining !== 1 ? 's' : ''} remaining
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleManageSubscription}
                  className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2 text-sm"
                >
                  <CreditCard className="w-4 h-4" />
                  Subscribe Now
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleDismissTrial}
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Past Due Banner */}
      <AnimatePresence>
        {profile?.subscription_status === 'past_due' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-red-500/20 border-b border-red-500/30 py-4 px-4"
          >
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span className="text-red-300">
                  Payment failed. Please update your payment method to continue access.
                </span>
              </div>
              <button
                onClick={handleManageSubscription}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium flex items-center gap-2"
              >
                <CreditCard className="w-4 h-4" />
                Update Payment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">ADI Finance Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-400">
                {user.email}
              </span>
              {profile?.subscription_status && (
                <span className={getStatusBadge(profile.subscription_status)}>
                  {profile.subscription_status === 'trialing' ? 'Free Trial' : profile.subscription_status.charAt(0).toUpperCase() + profile.subscription_status.slice(1)}
                </span>
              )}
            </div>
          </div>
          
          {profile?.stripe_customer_id && (
            <button
              onClick={handleManageSubscription}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium flex items-center gap-2 border border-white/10"
            >
              <CreditCard className="w-4 h-4" />
              Manage Subscription
            </button>
          )}
        </div>

        {/* Access Status */}
        {!hasAccess && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">No Active Subscription</h3>
                <p className="text-gray-400 mb-4">
                  You don't have an active subscription to ADI Finance. Subscribe now to track your lessons, expenses, and mileage.
                </p>
                <button
                  onClick={() => navigate('/subscribe')}
                  className="px-6 py-3 bg-[#ffd700] hover:bg-[#ffed4a] text-[#0a0a0a] font-bold rounded-lg flex items-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        {hasAccess && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer"
              onClick={() => navigate('/finance-planner')}
            >
              <LayoutDashboard className="w-8 h-8 text-[#ffd700] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-1">Dashboard</h3>
              <p className="text-gray-400 text-sm">View your financial overview</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer"
              onClick={() => navigate('/finance-planner')}
            >
              <BarChart3 className="w-8 h-8 text-[#ffd700] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-1">Add Lesson</h3>
              <p className="text-gray-400 text-sm">Record a new lesson</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer"
              onClick={() => navigate('/finance-planner')}
            >
              <Receipt className="w-8 h-8 text-[#ffd700] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-1">Add Expense</h3>
              <p className="text-gray-400 text-sm">Track business expenses</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer"
              onClick={() => navigate('/finance-planner')}
            >
              <Target className="w-8 h-8 text-[#ffd700] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-1">Goals</h3>
              <p className="text-gray-400 text-sm">Set financial targets</p>
            </motion.div>
          </div>
        )}

        {/* Subscription Info */}
        {hasAccess && profile && (
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Subscription Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <span className="text-gray-400 text-sm">Plan</span>
                <p className="text-white font-medium capitalize">{profile.plan_type || 'Monthly'}</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Status</span>
                <p className={`font-medium ${getStatusColor(profile.subscription_status || '')}`}>
                  {profile.subscription_status === 'trialing' ? 'Free Trial' : (profile.subscription_status || 'inactive').charAt(0).toUpperCase() + (profile.subscription_status || 'inactive').slice(1)}
                </p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">
                  {profile.subscription_status === 'trialing' ? 'Trial Ends' : 'Next Billing Date'}
                </span>
                <p className="text-white font-medium">
                  {profile.trial_ends_at || profile.current_period_end
                    ? new Date((profile.trial_ends_at || profile.current_period_end)!).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })
                    : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
