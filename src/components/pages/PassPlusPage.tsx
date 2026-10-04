import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award,
  Car,
  CloudRain,
  TreePine,
  Moon,
  Route,
  Gauge,
  ShieldCheck,
  CreditCard,
  Calendar,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  BadgeCheck,
  Clock,
  ChevronDown,
} from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import SEO from '../ui/SEO';
import { BUSINESS } from '../../data/business';

// ─── DATA ──────────────────────────────────────────────────

const MODULES = [
  {
    icon: Route,
    title: 'Town Driving',
    desc: 'Advanced urban traffic and junction management. Busy streets, tight spaces, and the decisions that keep you moving safely.',
  },
  {
    icon: CloudRain,
    title: 'All-Weather Driving',
    desc: 'Rain, glare and low visibility. How to read the road when conditions turn against you.',
  },
  {
    icon: TreePine,
    title: 'Rural Roads',
    desc: 'Country lanes and unexpected hazards. Blind bends, farm traffic, and the confidence to handle them.',
  },
  {
    icon: Moon,
    title: 'Night Driving',
    desc: 'Headlight dazzle and managing visibility in the dark. Reading the road when you cannot see as far.',
  },
  {
    icon: Gauge,
    title: 'Dual Carriageways',
    desc: 'Speed confidence, joining and overtaking. Getting up to speed and holding your lane.',
  },
  {
    icon: Car,
    title: 'Motorways',
    desc: 'High-speed confidence, lane discipline, and joining and exiting safely. Ideal for local routes like the A13 and M11.',
  },
];

const BENEFITS = [
  {
    icon: BadgeCheck,
    title: 'No test at the end',
    desc: 'Six hours of structured training. Your instructor assesses you continuously, and you finish with an official DVSA certificate.',
  },
  {
    icon: ShieldCheck,
    title: 'Up to 30% off insurance',
    desc: 'Many UK insurers cut your first-year premium for Pass Plus. The course can pay for itself in one renewal.',
  },
  {
    icon: Zap,
    title: 'Built for new drivers',
    desc: '1 in 5 new drivers has an accident in their first year of driving. Pass Plus exists to change that.',
  },
  {
    icon: Award,
    title: 'DVSA approved',
    desc: 'A government-recognised course delivered by a DVSA-approved instructor in an automatic Mercedes-Benz A-Class.',
  },
];

const FAQS = [
  {
    q: 'What is Pass Plus?',
    a: 'Pass Plus is a DVSA-approved course for newly qualified drivers. It takes at least six hours and covers town driving, all-weather driving, rural roads, night driving, dual carriageways and motorways.',
  },
  {
    q: 'Is there a test at the end?',
    a: 'No. There is no test. Your instructor assesses you continuously during the six hours, and you finish with an official DVSA certificate.',
  },
  {
    q: 'How much can I save on insurance?',
    a: 'Many UK insurers offer discounts of up to 30% on your first-year premium for drivers who complete Pass Plus. The exact discount depends on your insurer.',
  },
  {
    q: 'Do I need to have just passed my test?',
    a: 'No. Pass Plus is open to any newly qualified driver. You can take it any time after passing your practical test.',
  },
  {
    q: 'Can I pay with Klarna?',
    a: 'Yes. You can split the cost of your Pass Plus course into three interest-free payments with Klarna Pay in 3.',
  },
  {
    q: 'What car will I train in?',
    a: 'Your Pass Plus training is in our automatic Mercedes-Benz A-Class with dual controls, with a DVSA-approved instructor.',
  },
];

// ─── COMPONENT ─────────────────────────────────────────────

export default function PassPlusPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <SEO
        title="Pass Plus Driving Course London | Save on Insurance | Drive Dojo"
        description="Complete your DVSA Pass Plus course in an automatic Mercedes A-Class. 6 modules, no test, and up to 30% off insurance. Book instantly online with Drive Dojo."
        canonical="https://drivedojodrivingschool.com/pass-plus"
      />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* ─── HERO ─────────────────────────────────────── */}
          <motion.section
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">DVSA Pass Plus · No Test at the End</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Pass Plus Courses in <span className="text-primary">East London</span> | BOOK ONLINE
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Six hours of structured training in our automatic Mercedes A-Class. No test. An official DVSA certificate. And up to 30% off your car insurance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                to="/booking/pass-plus"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                Book Your Pass Plus Course
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded-xl text-white font-semibold transition-all"
              >
                View Booking Options
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-gray-600">
              <span className="flex items-center gap-1">
                <CreditCard className="w-3 h-3" /> Klarna Pay in 3
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> DVSA Approved
              </span>
              <span className="flex items-center gap-1">
                <Car className="w-3 h-3" /> Mercedes A-Class Automatic
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {BUSINESS.rating}/5
              </span>
            </div>
          </motion.section>

          {/* ─── WHAT IS PASS PLUS ────────────────────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">What is Pass Plus?</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Pass Plus is a DVSA-approved course for newly qualified drivers. It takes at least six hours and covers the driving the standard test does not: town traffic, all-weather conditions, rural roads, night driving, dual carriageways and motorways.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  There is no test at the end. Your instructor assesses you continuously, and you finish with an official DVSA certificate that many insurers reward with a discount of up to 30% on your first-year premium.
                </p>
                <ul className="space-y-3">
                  {[
                    '6 hours of structured, one-to-one training',
                    'No test — continuous assessment only',
                    'Official DVSA certificate on completion',
                    'Up to 30% off your car insurance',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[60px]" />
                <div className="relative z-10">
                  <div className="text-6xl font-black text-primary mb-2">1 in 5</div>
                  <p className="text-white text-lg font-semibold mb-2">
                    new drivers has an accident in their first year of driving.
                  </p>
                  <p className="text-gray-400">
                    Pass Plus exists to change that. Six hours of real-world training in the conditions that cause most first-year crashes.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ─── THE 6 MODULES ────────────────────────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">The 6 DVSA Pass Plus Modules</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The official DVSA framework, delivered in an automatic Mercedes A-Class with a DVSA-approved instructor.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {MODULES.map((mod, i) => (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center">
                      <mod.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{mod.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{mod.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ─── BENEFITS ─────────────────────────────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Why take Pass Plus?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                It is the fastest way to build real-world confidence after passing your test.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {BENEFITS.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ─── WHY DRIVE DOJO ───────────────────────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Why learn Pass Plus with Drive Dojo?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Car className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Automatic Mercedes A-Class</h3>
                      <p className="text-gray-400 text-sm">All training in a modern automatic with dual controls. No clutch, no gear stress, just driving.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-white mb-1">DVSA-approved instruction</h3>
                      <p className="text-gray-400 text-sm">A qualified ADI who knows the local roads, test centres and motorway routes like the A13 and M11.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Instant online booking</h3>
                      <p className="text-gray-400 text-sm">Book your Pass Plus course in about 60 seconds on our live Calendly calendar. No phone tag.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CreditCard className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Klarna Pay in 3</h3>
                      <p className="text-gray-400 text-sm">Split the cost into three interest-free payments. Start your course today, spread the cost.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ─── PRICING ──────────────────────────────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="max-w-md mx-auto">
              <div className="rounded-2xl border border-primary/30 bg-primary/[0.06] p-8 text-center relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-[#0d0d0d] text-xs font-bold">
                  FULL COURSE
                </span>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-gray-400">6 hours of training</span>
                </div>
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="text-2xl text-gray-500 line-through">{BUSINESS.pricing.passPlus.originalPrice}</span>
                  <span className="text-5xl font-black text-white">{BUSINESS.pricing.passPlus.price}</span>
                </div>
                <span className="inline-block mb-2 px-3 py-1 rounded-full bg-green-500/15 text-green-400 text-xs font-bold">
                  SAVE £{BUSINESS.pricing.passPlus.originalPriceNumber - BUSINESS.pricing.passPlus.priceNumber}
                </span>
                <p className="text-gray-400 text-sm mb-6">
                  No test. Official DVSA certificate. Up to 30% off insurance.
                </p>
                <Link
                  to="/booking/pass-plus"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                  Book Your Pass Plus Course
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center justify-center gap-3 mt-4 text-[11px] text-gray-600">
                  <span className="flex items-center gap-1">
                    <CreditCard className="w-3 h-3" /> Klarna Pay in 3
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> DVSA Approved
                  </span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ─── FAQ ──────────────────────────────────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Pass Plus questions, answered</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={faq.q}
                    className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="font-semibold text-white">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ─── FINAL CTA ────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px]" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to drive with confidence?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Six hours. No test. Up to 30% off insurance. Book your Pass Plus course in an automatic Mercedes A-Class today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/booking/pass-plus"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5" />
                  Book Your Pass Plus Course
                </Link>
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded-xl text-white font-semibold transition-all"
                >
                  View Booking Options
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-[11px] text-gray-600">
                <span className="flex items-center gap-1">
                  <CreditCard className="w-3 h-3" /> Klarna Pay in 3
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> DVSA Approved
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {BUSINESS.rating}/5
                </span>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}