import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import supabase from '@/lib/supabase';
import { ArrowRight, CheckCircle, CreditCard, TrendingUp, Receipt, Target, Car } from 'lucide-react';

interface FinancePlannerProps {
  // Stripe price ID for the finance planner (you'll need to create this in Stripe)
  stripePriceId?: string;
  price?: number;
}

export default function FinancePlanner({ stripePriceId = 'price_finance_planner', price = 29 }: FinancePlannerProps) {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [checkingAccess, setCheckingAccess] = useState(false);

  // Check if user has finance access
  useEffect(() => {
    const checkAccess = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('finance_access')
          .select('user_id')
          .eq('user_id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error checking finance access:', error);
        }
        setHasAccess(!!data);
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    if (!authLoading) {
      checkAccess();
    }
  }, [user, authLoading]);

  const handlePurchase = async () => {
    if (!user) {
      navigate('/login?redirect=/finance-planner');
      return;
    }

    setCheckingAccess(true);
    try {
      const response = await fetch('/.netlify/functions/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productType: 'finance-planner',
          userId: user.id,
          userEmail: user.email
        }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Failed to create checkout session. Please try again.');
      }
    } catch (error) {
      console.error('Purchase error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setCheckingAccess(false);
    }
  };

  // Show loading spinner
  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ffd700]"></div>
      </div>
    );
  }

  // Not logged in - show login prompt
  if (!user) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
          <div className="w-16 h-16 bg-[#ffd700]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="w-8 h-8 text-[#ffd700]" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">ADI Finance Planner</h1>
          <p className="text-gray-400 mb-8">
            Track your income, expenses, and mileage to maximise your tax deductions.
            Log in to access your finance dashboard.
          </p>
          <button
            onClick={() => navigate('/login?redirect=/finance-planner')}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ffd700] hover:bg-[#ffed4a] text-[#0a0a0a] font-bold text-lg rounded-full transition-all"
          >
            Log In to Access
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // Has access - render the finance planner (lazy loaded)
  if (hasAccess) {
    return <FinancePlannerApp />;
  }

  // No access - show purchase CTA
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
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
              disabled={checkingAccess}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ffd700] hover:bg-[#ffed4a] text-[#0a0a0a] font-bold text-lg rounded-full transition-all disabled:opacity-50"
            >
              {checkingAccess ? 'Redirecting...' : (
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
    </div>
  );
}

// Lazy load the actual finance planner app
function FinancePlannerApp() {
  const [AppComponent, setAppComponent] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Dynamically import the finance planner components
    const loadComponents = async () => {
      try {
        // Import all the needed components
        const [layoutModule, dashboardModule, addLessonModule, addExpenseModule, addMileageModule, goalsModule, settingsModule, hooksModule] = await Promise.all([
          import('@/adi-finance-planner/components/Layout'),
          import('@/adi-finance-planner/components/Dashboard'),
          import('@/adi-finance-planner/components/AddLesson'),
          import('@/adi-finance-planner/components/AddExpense'),
          import('@/adi-finance-planner/components/AddMileage'),
          import('@/adi-finance-planner/components/Goals'),
          import('@/adi-finance-planner/components/Settings'),
          import('@/adi-finance-planner/hooks/useApp'),
        ]);

        // Store components in state for rendering
        setAppComponent(() => () => (
          <hooksModule.AppProvider>
            <layoutModule.Layout>
              <DashboardRouter
                Dashboard={dashboardModule.Dashboard}
                AddLesson={addLessonModule.AddLesson}
                AddExpense={addExpenseModule.AddExpense}
                AddMileage={addMileageModule.AddMileage}
                GoalsPage={goalsModule.GoalsPage}
                SettingsPage={settingsModule.SettingsPage}
              />
            </layoutModule.Layout>
          </hooksModule.AppProvider>
        ));
        setLoading(false);
      } catch (err) {
        console.error('Failed to load finance planner:', err);
        setError('Failed to load the finance planner. Please refresh the page.');
        setLoading(false);
      }
    };

    loadComponents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ffd700]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center max-w-md">
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return AppComponent ? <AppComponent /> : null;
}

// Simple router for the finance planner sub-app
function DashboardRouter({ Dashboard, AddLesson, AddExpense, AddMileage, GoalsPage, SettingsPage }: any) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname.replace('/finance-planner', '') || '/');

  // Listen for navigation
  useEffect(() => {
    const handleNavigate = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.path) {
        setCurrentPath(customEvent.detail.path);
      }
    };
    window.addEventListener('navigate', handleNavigate);
    return () => window.removeEventListener('navigate', handleNavigate);
  }, []);

  switch (currentPath) {
    case '/add-lesson':
      return <AddLesson />;
    case '/add-expense':
      return <AddExpense />;
    case '/add-mileage':
      return <AddMileage />;
    case '/goals':
      return <GoalsPage />;
    case '/settings':
      return <SettingsPage />;
    default:
      return <Dashboard />;
  }
}
