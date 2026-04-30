import { Suspense, lazy, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import supabase from '@/lib/supabase';
import { ArrowRight, CheckCircle, CreditCard, TrendingUp, Receipt, Target, Car, Loader2 } from 'lucide-react';

// Lazy load the finance planner app (using named exports with .then pattern)
const FinanceApp = lazy(() => 
  import('@/adi-finance-planner/App').then(m => ({ default: m.default }))
);

interface FinancePlannerPageProps {
  price?: number;
}

export default function FinancePlannerPage({ price = 29 }: FinancePlannerPageProps) {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [purchaseLoading, setPurchaseLoading] = useState(false);

  // Check if user has finance access
  useEffect(() => {
    const checkAccess = async () => {
      if (!user) {
        setCheckingAccess(false);
        return;
      }

      try {
        // Check subscription status from profiles table
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('has_finance_access, subscription_status')
          .eq('id', user.id)
          .single();

        if (profileError) {
          console.error('Error checking finance access:', profileError);
        }
        
        // User has access if they have finance_access flag OR are in trial/active status
        const hasSubscriptionAccess = profile?.has_finance_access ||
          profile?.subscription_status === 'trialing' ||
          profile?.subscription_status === 'active';
        setHasAccess(!!hasSubscriptionAccess);
      } catch (err) {
        console.error('Error checking access:', err);
      } finally {
        setCheckingAccess(false);
      }
    };

    checkAccess();
  }, [user]);

  const handlePurchase = async () => {
    if (!user) {
      navigate('/login?redirect=/finance-planner');
      return;
    }

    // Redirect to subscription page for the new subscription flow
    navigate('/subscribe');
  };

  // Loading state
  if (authLoading || checkingAccess) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-[#ffd700] animate-spin" />
      </div>
    );
  }

  // User is logged in and has access - render the finance planner
  if (user && hasAccess) {
    return (
      <Suspense fallback={
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-[#ffd700] animate-spin" />
        </div>
      }>
        <FinanceApp />
      </Suspense>
    );
  }

  // Show marketing/purchase page
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <header className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffd700]/10 border border-[#ffd700]/30 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-[#ffd700]" />
            <span className="text-[#ffd700] text-sm font-medium">ADI Finance Planner</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stop Losing Money on Tax.
            <br />
            <span className="text-[#ffd700]">Start Tracking Every Penny.</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The ADI Finance Planner helps you track lessons, expenses, and mileage
            to maximise your HMRC deductions. Built specifically for UK driving instructors.
          </p>

          {!user && (
            <button
              onClick={() => navigate('/login?redirect=/finance-planner')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-full transition-all"
            >
              Log In to Access
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </header>

      {/* Features */}
      <section className="py-16 px-4 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Everything You Need to Stay on Top of Your Finances
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'Income Tracking', desc: 'Log lessons and see your earnings at a glance' },
              { icon: Receipt, title: 'Expense Management', desc: 'Track business expenses with receipt uploads' },
              { icon: Car, title: 'Mileage Logger', desc: 'Automatic HMRC mileage allowance calculations' },
              { icon: Target, title: 'Goal Setting', desc: 'Set savings targets and track progress' },
              { icon: CreditCard, title: 'Tax Estimates', desc: 'Real-time profit/loss and tax due estimates' },
              { icon: CheckCircle, title: 'VAT Ready', desc: 'Properly structured for VAT registration' },
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <feature.icon className="w-8 h-8 text-[#ffd700] mb-4" />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-b from-[#ffd700]/10 to-[#0a0a0a] border-2 border-[#ffd700]/50 rounded-3xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">ADI Finance Planner</h3>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl font-bold text-[#ffd700]">£{price}</span>
              <span className="text-gray-500">one-time</span>
            </div>
            <p className="text-gray-400 text-sm mb-8">
              Lifetime access • No subscriptions • Includes all future updates
            </p>
            
            <ul className="text-left space-y-3 mb-8">
              {[
                'Unlimited lesson entries',
                'Unlimited expense tracking',
                'Mileage logger with HMRC rates',
                'Goal setting & tracking',
                'Tax year views (Calendar & UK Tax Year)',
                'Export data anytime',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#4ade80] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button
              onClick={handlePurchase}
              disabled={purchaseLoading}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ffd700] hover:bg-[#ffed4a] text-[#0a0a0a] font-bold text-lg rounded-full transition-all disabled:opacity-50"
            >
              {purchaseLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Get Started — £{price}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
            
            <p className="mt-4 text-sm text-gray-500">
              Secure payment via Stripe • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2024 Drive Dojo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
