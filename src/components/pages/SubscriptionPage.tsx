import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { CheckCircle, ArrowRight, Loader2, Zap, Shield, Clock, CreditCard } from 'lucide-react';

interface SubscriptionPageProps {
  monthlyPriceId?: string;
  yearlyPriceId?: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
}

export default function SubscriptionPage({
  monthlyPriceId = 'price_monthly_subscription',
  yearlyPriceId = 'price_yearly_subscription',
  monthlyPrice = 4.99,
  yearlyPrice = 45
}: SubscriptionPageProps) {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGetStarted = async () => {
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Call the subscription checkout endpoint
      const response = await fetch('/.netlify/functions/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productType: 'subscription',
          planType: billingCycle,
          email: email,
          priceId: billingCycle === 'monthly' ? monthlyPriceId : yearlyPriceId,
          trialDays: 7
        }),
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Failed to create checkout session');
        setIsLoading(false);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  const features = [
    { icon: Zap, text: 'Full access to ADI Finance Dashboard' },
    { icon: Shield, text: 'Track lessons, expenses & mileage' },
    { icon: Clock, text: 'HMRC-compliant tax calculations' },
    { icon: CreditCard, text: 'Cancel anytime, no contracts' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffd700]/10 border border-[#ffd700]/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-[#ffd700]" />
            <span className="text-[#ffd700] text-sm font-medium">7-Day Free Trial</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Tracking Your ADI Income
            <br />
            <span className="text-[#ffd700]">Today — Free for 7 Days</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of UK driving instructors who track their income, expenses, and mileage with ADI Finance. 
            Start your free trial now.
          </p>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-lg mx-auto">
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#0a0a0a]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-full font-medium transition-all relative ${
                billingCycle === 'yearly'
                  ? 'bg-white text-[#0a0a0a]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Yearly
              {billingCycle === 'yearly' && (
                <span className="absolute -top-2 -right-2 bg-[#4ade80] text-white text-xs px-2 py-1 rounded-full">
                  Save 25%
                </span>
              )}
            </button>
          </div>

          {/* Pricing Card */}
          <div className="bg-gradient-to-b from-[#ffd700]/10 to-[#0a0a0a] border-2 border-[#ffd700]/50 rounded-3xl p-8 text-center">
            {/* Plan Name */}
            <h3 className="text-xl font-bold text-white mb-2">
              {billingCycle === 'monthly' ? 'Monthly Plan' : 'Yearly Plan'}
            </h3>
            
            {/* Price */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-5xl font-bold text-[#ffd700]">
                {billingCycle === 'monthly' ? `£${monthlyPrice}` : `£${yearlyPrice}`}
              </span>
              <span className="text-gray-500">
                /{billingCycle === 'monthly' ? 'month' : 'year'}
              </span>
            </div>

            {/* Savings Badge for Yearly */}
            {billingCycle === 'yearly' && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4ade80]/20 border border-[#4ade80]/30 rounded-full mb-4">
                <span className="text-[#4ade80] text-sm font-medium">
                  Save 25% — Get 3 Months Free!
                </span>
              </div>
            )}
            
            {/* Trial Notice */}
            <p className="text-gray-400 text-sm mb-8">
              Start with a 7-Day Free Trial. Cancel anytime.
            </p>
            
            {/* Features */}
            <ul className="text-left space-y-3 mb-8">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#4ade80] flex-shrink-0" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            
            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ffd700]/50 transition-all"
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-400 text-sm mb-4">{error}</p>
            )}
            
            {/* CTA Button */}
            <button
              onClick={handleGetStarted}
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ffd700] hover:bg-[#ffed4a] text-[#0a0a0a] font-bold text-lg rounded-full transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Start Free Trial — {billingCycle === 'monthly' ? `£${monthlyPrice}/mo` : `£${yearlyPrice}/yr`}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
            
            <p className="mt-4 text-sm text-gray-500">
              No payment required today • Cancel before Day 7, pay nothing
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Why ADIs Trust ADI Finance
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'HMRC Compliant', desc: 'Built specifically for UK driving instructors with proper tax calculations' },
              { title: 'Secure & Private', desc: 'Your financial data is encrypted and only accessible to you' },
              { title: 'Cancel Anytime', desc: 'No long-term contracts. Cancel with one click, no questions asked.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
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
