import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, ArrowRight, Lock, BookOpen, Calculator, Calendar, Download, Users, Zap, Shield, Clock } from 'lucide-react';
import { createBlueprintCheckout } from '@/lib/stripe';

export default function ADILandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      const result = await createBlueprintCheckout(email || undefined);
      if (result.error) {
        alert(result.error);
        setIsLoading(false);
        return;
      }
      
      if (result.sessionId) {
        // Redirect to Stripe Checkout
        window.location.href = `https://checkout.stripe.com/pay/${result.sessionId}`;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  const features = [
    { icon: Calculator, title: 'Income Calculator', desc: 'See exactly how much you can earn' },
    { icon: BookOpen, title: '12 Chapter Guide', desc: 'Step-by-step ADI qualification roadmap' },
    { icon: Calendar, title: '90-Day Action Plan', desc: 'Clickable checklist to launch fast' },
    { icon: Download, title: '5 Templates', desc: 'Ready-to-use swipe files & checklists' },
  ];

  const chapters = [
    'The Franchise Trap Explained',
    'What Is an ADI?',
    'Part 1 - Theory Test',
    'Part 2 - Driving Ability',
    'Part 3 - Instructional',
    'Cost Comparison Tool',
    'Business Setup',
    'Getting Pupils',
    'Pricing & Income',
    'Tech & Professional',
    '90-Day Action Plan',
    'Common Mistakes',
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e63946]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#ffd700]/5 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffd700]/10 border border-[#ffd700]/30 rounded-full mb-6">
            <Lock className="w-4 h-4 text-[#ffd700]" />
            <span className="text-[#ffd700] text-sm font-medium">Free Guide Worth £197</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
            THE COMPLETE<br />
            <span className="text-[#ffd700]">ADI BLUEPRINT</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            How to qualify, launch, and scale a highly profitable independent driving school—without handing your hard-earned lesson fees to a national brand.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-10">
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#e63946]" /> By Mamunur Rashid, Drive Dojo
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#e63946]" /> 45 min read
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#e63946]" /> 12 Interactive Tools
            </span>
          </div>

          {/* Value Summary */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-[#ffd700] mb-4">What You Get:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-left">
                  <feature.icon className="w-5 h-5 text-[#e63946] flex-shrink-0" />
                  <div>
                    <div className="text-white text-sm font-medium">{feature.title}</div>
                    <div className="text-gray-500 text-xs">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chapter Preview */}
          <div className="bg-[#e63946]/10 border border-[#e63946]/30 rounded-2xl p-6 max-w-2xl mx-auto text-left">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#e63946]" /> What's Inside:
            </h3>
            <div className="grid md:grid-cols-2 gap-2">
              {chapters.map((chapter, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="font-mono text-[#e63946] text-xs w-6">{String(i + 1).padStart(2, '0')}</span>
                  {chapter}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Hook Section */}
      <section className="py-16 px-4 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The £2,200/Month Franchise Trap is Bankrupting New Driving Instructors.
            </h2>
            <p className="text-xl text-gray-400">Here is Your Escape Route.</p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-300 text-lg">
              You want to be your own boss. You want a full diary, control over your hours, and an income that reflects the hard work you put in.
            </p>
            <p className="text-gray-300 text-lg">
              So, you do what most new instructors do: you look at the big national franchises. They promise you the world—guaranteed pupils, full support, and a shiny branded car.
            </p>
            <p className="text-gray-400 font-medium">But here is what the sales brochure leaves out:</p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 p-4 bg-[#e63946]/10 border border-[#e63946]/30 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-[#e63946] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold">You Pay Before You Earn</h4>
                <p className="text-gray-400">Thousands in upfront fees before you even pass Part 2 or 3.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[#e63946]/10 border border-[#e63946]/30 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-[#e63946] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold">The Weekly Fee Never Stops</h4>
                <p className="text-gray-400">Even in a slow week with zero new pupils, you still owe them £150+ a week.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[#e63946]/10 border border-[#e63946]/30 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-[#e63946] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold">You Build Their Business, Not Yours</h4>
                <p className="text-gray-400">Every 5-star review you earn goes to their brand, not your local reputation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            My Story: From Franchise Victim to Independent Success
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <p className="text-gray-300 text-lg mb-4">
              Hi, I'm <strong className="text-white">Mamunur Rashid</strong>, Founder of Drive Dojo.
            </p>
            <p className="text-gray-300 mb-4">
              I know exactly how suffocating the franchise trap is because I fell right into it. I qualified as an Approved Driving Instructor at just <strong className="text-white">21 years old</strong> while studying for my Computer Science degree. I thought joining a major franchise was the safe bet.
            </p>
            <p className="text-gray-300 mb-4">
              The reality? I was paying astronomical franchise fees of up to <strong className="text-[#e63946]">£2,279 a month</strong>. There were months the franchise only gave me two new students. It got so bad that, despite being a fully qualified ADI, I had to drive delivery vans for Argos and Sainsbury's just to cover my franchise fees.
            </p>
            <p className="text-gray-300">
              I realised I had to break free. I went fully independent, launched Drive Dojo, and haven't looked back. Today, my diary is full, my business is 100% mine, and I keep every penny of my lesson fees.
            </p>
          </div>

          <div className="bg-[#4ade80]/10 border border-[#4ade80]/30 rounded-2xl p-6 text-center">
            <div className="text-6xl font-bold text-[#4ade80] mb-2">100%</div>
            <div className="text-xl text-white font-semibold">Independent</div>
            <p className="text-gray-400 mt-2">Drive Dojo has been running for 2+ years as a fully independent school</p>
          </div>
        </div>
      </section>

      {/* The Offer Section */}
      <section className="py-16 px-4 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              This Isn't a Boring PDF
            </h2>
            <p className="text-xl text-gray-300">
              It's a fully interactive, step-by-step roadmap that takes you from total beginner to profitable driving school owner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <CheckCircle className="w-6 h-6 text-[#ffd700] mb-3" />
              <h4 className="text-white font-semibold mb-2">The Zero-Franchise Qualification Route</h4>
              <p className="text-gray-400 text-sm">How to pass Parts 1, 2, and 3 efficiently, including the exact apps and methods you need.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <CheckCircle className="w-6 h-6 text-[#ffd700] mb-3" />
              <h4 className="text-white font-semibold mb-2">The "Pink Badge" Strategy</h4>
              <p className="text-gray-400 text-sm">How to legally start teaching and earning money while you are still training for your Part 3 test.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <CheckCircle className="w-6 h-6 text-[#ffd700] mb-3" />
              <h4 className="text-white font-semibold mb-2">The Real Cost Breakdown</h4>
              <p className="text-gray-400 text-sm">An interactive calculator showing exactly how to save up to £11,500 in your first year.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <CheckCircle className="w-6 h-6 text-[#ffd700] mb-3" />
              <h4 className="text-white font-semibold mb-2">The 90-Day Action Plan</h4>
              <p className="text-gray-400 text-sm">A clickable checklist taking you from HMRC registration to your first 10 paying pupils.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <CheckCircle className="w-6 h-6 text-[#ffd700] mb-3" />
              <h4 className="text-white font-semibold mb-2">The Free Tech Stack</h4>
              <p className="text-gray-400 text-sm">Google Calendar and WhatsApp Business to automate bookings and cut no-shows by 60%.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <CheckCircle className="w-6 h-6 text-[#ffd700] mb-3" />
              <h4 className="text-white font-semibold mb-2">Copy-and-Paste Swipe Files</h4>
              <p className="text-gray-400 text-sm">My exact text message templates for bookings, cancellations, and review requests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/20 rounded-3xl p-10">
            <div className="inline-block px-4 py-1 bg-[#e63946]/20 border border-[#e63946]/50 rounded-full text-[#e63946] text-sm font-medium mb-4">
              RISK-FREE GUARANTEE
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Instant Access to the ADI Blueprint
            </h2>

            <p className="text-gray-400 mb-6">
              Starting with a national franchise will easily cost you between <strong className="text-white">£10,000 and £15,000</strong> in your first year through joining fees, inflated car leases, and weekly territory cuts.
            </p>

            <p className="text-xl text-gray-300 mb-8">
              For a fraction of the cost of one week's franchise fee, you get the exact blueprint that built Drive Dojo.
            </p>

            <div className="text-5xl font-bold text-white mb-2">£49</div>
            <p className="text-gray-500 mb-8">One-time payment • Lifetime access</p>

            {/* Email capture for checkout */}
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email for checkout"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-[#1a1a1a] border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b35]"
              />
              <button
                onClick={handlePurchase}
                disabled={isLoading}
                className="w-full py-4 bg-[#ff6b35] hover:bg-[#ff8555] text-white font-bold text-lg rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    Get Instant Access — £49
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4" /> Secure Payment
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-4 h-4" /> Instant Access
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Upsell Section */}
      <section className="py-16 px-4 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#ffd700]/10 to-transparent border border-[#ffd700]/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not a Tech Person? Let Me Build Your School for You.
            </h3>
            <p className="text-gray-300 mb-6">
              As a former Front-End Web Developer and Autonomous Vehicle Safety Operator, I know how to make driving schools look incredibly premium online. If setting up websites, Google Business profiles, and local SEO feels overwhelming, I offer a complete "Done-For-You" Setup Package.
            </p>
            <p className="text-gray-400">
              Buy the Blueprint today, and you'll get <strong className="text-white">exclusive access to book a 1-on-1 consultation</strong> where we can discuss building your custom, high-converting website.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p className="mb-2">© 2024 Drive Dojo Driving School. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <a href="mailto:hello@drivedojodrivingschool.com" className="hover:text-white transition-colors">
              Contact
            </a>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
