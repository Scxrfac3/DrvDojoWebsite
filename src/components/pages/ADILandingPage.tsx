import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, ArrowRight, Lock, BookOpen, Calculator, Calendar, Download, Users, Zap, Shield, Clock, Star, ChevronDown } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import EarningsCalculator from '@/components/EarningsCalculator';
import FeatureExplorer from '@/components/FeatureExplorer';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Animated Section Component
function AnimatedSection({ children, className = '', variants = fadeInUp, delay = 0 }: { 
  children: React.ReactNode; 
  className?: string; 
  variants?: any;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ ...variants, visible: { ...variants.visible, transition: { ...variants.visible.transition, delay } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Glassmorphism Card Component
function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

export default function ADILandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const painPoints = [
    {
      icon: AlertTriangle,
      title: '£2,000+ in Fees Before You Earn a Single Penny',
      desc: "You're forking out thousands before you've even proven you can teach. That's not an investment—that's a gamble with your savings."
    },
    {
      icon: AlertTriangle,
      title: 'The £150+/Week Fee That Never Sleeps',
      desc: 'Holiday? Sick day? Empty diary? Doesn\'t matter—you still owe them. That constant pressure is destroying your mental health and bank account.'
    },
    {
      icon: AlertTriangle,
      title: 'Every 5-Star Review Builds THEIR Empire',
      desc: "You sweat blood to get brilliant pupil results, but the reviews belong to their brand. You're invisible in your own local area."
    },
  ];

  const testimonials = [
    {
      name: 'James M.',
      location: 'ADI, Birmingham',
      initials: 'JM',
      text: "I was 48 hours from signing a franchise contract when I stumbled onto the ADI Blueprint. Best find of my life. Saved £12,000 in year one and my diary is now booked 3 weeks out."
    },
    {
      name: 'Sarah P.',
      location: 'ADI, Manchester',
      initials: 'SP',
      text: "The 90-day action plan is incredible. I went from zero pupils to 8 regulars in just 6 weeks. The swipe files alone were worth 10x the investment."
    },
    {
      name: 'David K.',
      location: 'ADI, London',
      initials: 'DK',
      text: "I was working 60 hours a week for a franchise and barely covering costs. Now I work 35 hours, earn more than I ever did, and keep 100% of every lesson fee. This Blueprint changed my life."
    },
  ];

  const faqs = [
    {
      q: 'Do I need any prior experience to use the Blueprint?',
      a: 'Zero experience required. If you can read a road sign and have a clean driving licence, you have everything you need. The Blueprint starts from absolute scratch—from understanding ADI qualification to your first booked pupil. No prior business knowledge needed.'
    },
    {
      q: 'How is this different from free YouTube videos?',
      a: "YouTube gives you scattered tips. The Blueprint gives you a complete, battle-tested system—from day one to your first 10 pupils. It's the difference between 'here are some ideas' and 'here's exactly what to do, when, and how.' No fluff, no padding, no hidden upsells."
    },
    {
      q: "What if it doesn't work for me?",
      a: "You're protected by a 30-day money-back guarantee. Work through the Blueprint, follow the steps, and if you don't find it valuable—email us for a full refund. No forms, no hoops, no awkward conversations."
    },
    {
      q: 'How long do I have access?',
      a: 'Forever. Pay once, keep it forever. That includes every future update and addition I make to the Blueprint—at no extra cost. One price, lifetime value.'
    },
    {
      q: 'Can I really start earning while still training?',
      a: "Absolutely. The 'Pink Badge' strategy shows you exactly how to legally teach as a trainee ADI and generate income before passing Part 3. Many Blueprint users have completely offset their qualification costs using this method."
    },
    {
      q: 'What format is the Blueprint in?',
      a: "A fully interactive digital guide that works on any device—phone, tablet, or desktop. Includes clickable checklists, savings calculators, copy/paste templates, and video walkthroughs where needed. Everything you need, accessible anywhere."
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar transparent={false} />

      {/* Urgency Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#e63946] to-[#c1121f] text-white text-center py-2 px-4 text-sm font-semibold animate-pulse">
        <span className="inline-flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <strong>Special Launch Price:</strong> Get the ADI Blueprint for £49 (normally £197) — Offer ends soon
        </span>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e63946]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#ffd700]/5 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection variants={fadeInUp} delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffd700]/10 border border-[#ffd700]/30 rounded-full mb-6 backdrop-blur-sm">
              <BookOpen className="w-4 h-4 text-[#ffd700]" />
              <span className="text-[#ffd700] text-sm font-medium">For Aspiring & Current ADIs Ready to Build Their Own Empire</span>
            </div>
          </AnimatedSection>

          <AnimatedSection variants={fadeInUp} delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight leading-tight">
              Stop Paying <span className="text-[#ffd700]">£2,200/Month</span> to Franchise Owners.<br />
              Keep <span className="text-[#4ade80]">100% of Your Lesson Fees</span>—Starting Today.
            </h1>
          </AnimatedSection>

          <AnimatedSection variants={fadeInUp} delay={0.3}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The Complete ADI Blueprint shows you exactly how to qualify as an independent driving instructor, build a profitable business, and never pay a franchise fee again.
            </p>
          </AnimatedSection>

          <AnimatedSection variants={fadeInUp} delay={0.4}>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffd700] hover:bg-[#ffed4a] text-[#0a0a0a] font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Your Blueprint — £49
              <ArrowRight className="w-5 h-5" />
            </button>
          </AnimatedSection>

          <AnimatedSection variants={fadeInUp} delay={0.5}>
            <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-4">
              <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> Instant digital access</span>
              <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Lifetime updates included</span>
              <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> 30-day guarantee</span>
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection variants={fadeIn} delay={0.6}>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-sm animate-bounce">
            <span>Scroll to learn more</span>
            <ChevronDown className="w-5 h-5 text-[#ffd700]" />
          </div>
        </AnimatedSection>
      </section>

      {/* Feature Explorer Section */}
      <AnimatedSection variants={fadeInUp}>
        <section className="py-16 px-4 bg-[#0a0a0a]">
          <FeatureExplorer />
        </section>
      </AnimatedSection>

      {/* Pain Section */}
      <AnimatedSection variants={fadeInUp}>
        <section className="py-16 px-4 bg-[#111111]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#e63946] text-sm font-semibold uppercase tracking-wider">The Franchise Trap</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                You want to be your own boss.<br />
                But here's what the sales brochure leaves out:
              </h2>
            </div>

            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {painPoints.map((point, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-[#e63946]/30 hover:shadow-lg hover:shadow-[#e63946]/5"
                >
                  <div className="w-12 h-12 bg-[#e63946]/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                    <point.icon className="w-6 h-6 text-[#e63946]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{point.title}</h3>
                  <p className="text-gray-400">{point.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Story Section */}
      <AnimatedSection variants={fadeInUp}>
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#ffd700] text-sm font-semibold uppercase tracking-wider">My Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Hi, I'm Mamun, Founder of Drive Dojo.
              </h2>
            </div>

            <GlassCard className="p-8 mb-8">
              <p className="text-gray-300 text-lg mb-4">
                I know exactly how suffocating the franchise trap is because I fell right into it. I qualified as an Approved Driving Instructor at just <strong className="text-white">21 years old</strong> while studying for my Computer Science degree. I thought joining a major franchise was the smart move.
              </p>
              <p className="text-gray-300 mb-4">
                The reality? I was paying <strong className="text-[#e63946]">£2,279 a month</strong> in franchise fees. There were months where the franchise gave me just two new students. It got so bad that I had to deliver parcels for Argos and Sainsbury's just to cover my overheads—despite being a fully qualified ADI.
              </p>
              <div className="bg-[#4ade80]/10 border border-[#4ade80]/30 rounded-xl p-4 mb-4 backdrop-blur-sm">
                <p className="text-gray-300">
                  I knew I had to escape. I went fully independent, launched Drive Dojo, and never looked back. Today, my diary is full, my business is 100% mine, and I keep every penny of my lesson fees.
                </p>
              </div>
              <p className="text-gray-300">
                I created <strong className="text-white">The Complete ADI Blueprint</strong> so you don't have to learn this the hard way. This is the exact roadmap I wish I'd had.
              </p>
            </GlassCard>
          </div>
        </section>
      </AnimatedSection>

      {/* Offer Section */}
      <AnimatedSection variants={fadeInUp}>
        <section className="py-16 px-4 bg-[#111111]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#ffd700] text-sm font-semibold uppercase tracking-wider">What You Get</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Everything You Need to Build a Profitable Independent Driving School
              </h2>
            </div>

            <motion.div 
              className="grid md:grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {[
                { icon: BookOpen, title: 'The Zero-Franchise Qualification Route', desc: 'Save £2,000+ by avoiding franchise sign-up fees' },
                { icon: Calculator, title: 'Cost Comparison Tool', desc: 'See exactly where your money goes vs. going independent' },
                { icon: Calendar, title: '90-Day Launch Checklist', desc: 'Step-by-step actionable plan to get your first pupils' },
                { icon: Users, title: 'Pupil Acquisition System', desc: 'Proven methods to fill your diary within weeks' },
                { icon: Shield, title: 'ADI Registration Guide', desc: 'Complete walkthrough of every exam and registration step' },
                { icon: Clock, title: 'Time Freedom Blueprint', desc: 'Build a business that works around your life' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-[#ffd700]/30"
                >
                  <item.icon className="w-6 h-6 text-[#ffd700] mb-3" />
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Value Section */}
      <AnimatedSection variants={fadeInUp}>
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#ffd700] text-sm font-semibold uppercase tracking-wider">Why the ADI Blueprint?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-8">
              Stop Gambling With Your Future
            </h2>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {[
                { stat: '£2,279', label: 'Average monthly franchise fee you\'ll eliminate' },
                { stat: '12', label: 'Chapters of battle-tested ADI strategies' },
                { stat: '100%', label: 'Of lesson fees you keep as an independent ADI' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="bg-gradient-to-b from-[#ffd700]/10 to-transparent border border-[#ffd700]/30 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <div className="text-4xl font-bold text-[#ffd700] mb-2">{item.stat}</div>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Earnings Calculator Section */}
      <AnimatedSection variants={fadeInUp}>
        <section className="py-16 px-4 bg-[#111111]">
          <EarningsCalculator />
        </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection variants={fadeInUp}>
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#ffd700] text-sm font-semibold uppercase tracking-wider">Success Stories</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Blueprint Users Are Already Winning
              </h2>
            </div>

            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-[#ffd700] fill-[#ffd700]" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#ffd700]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#ffd700] font-bold text-sm">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection variants={fadeInUp}>
        <section className="py-16 px-4 bg-[#111111]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#ffd700] text-sm font-semibold uppercase tracking-wider">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Questions? I've Got Answers.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:border-[#ffd700]/30 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between text-white font-semibold"
                  >
                    <span>{faq.q}</span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-[#ffd700]" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-400">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection variants={fadeInUp}>
        <section id="pricing" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#ffd700] text-sm font-semibold uppercase tracking-wider">Limited Time Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Get Instant Access to the ADI Blueprint
              </h2>
            </div>

            <motion.div 
              className="bg-gradient-to-b from-[#ffd700]/10 to-[#0a0a0a] border-2 border-[#ffd700]/50 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffd700]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e63946] text-white rounded-full text-sm font-bold mb-4">
                    <Zap className="w-4 h-4" /> Launch Special — Save £148
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Complete ADI Blueprint</h3>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-gray-500 line-through text-xl">£197</span>
                    <span className="text-5xl font-bold text-[#ffd700]">£49</span>
                  </div>
                  <p className="text-gray-400">One-time payment • Lifetime access • No hidden fees</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {chapters.slice(0, 6).map((chapter, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-[#4ade80] flex-shrink-0" />
                      <span className="text-sm">{chapter}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => window.location.href = 'https://buy.stripe.com/28EeVffD977Wg01dsM00000'}
                    className="w-full max-w-md mx-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ffd700] hover:bg-[#ffed4a] text-[#0a0a0a] font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Get Instant Access — £49
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  
                  <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> Secure checkout</span>
                    <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> 30-day guarantee</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <Footer />
    </div>
  );
}
