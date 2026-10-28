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
  Sparkles,
  UserCheck,
  Users,
  MessageCircle,
  MapPin,
} from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import SEO from '../ui/SEO';
import PostcodeChecker from '../ui/PostcodeChecker';
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

const PERSONAS = [
  {
    icon: BadgeCheck,
    title: 'Just passed your test',
    desc: 'You have the licence but limited real-world experience. Pass Plus fills the gap the test cannot cover.',
  },
  {
    icon: Users,
    title: 'Nervous on motorways',
    desc: 'Never driven on a motorway? The A13 and M11 are on our doorstep. We build your high-speed confidence safely.',
  },
  {
    icon: Clock,
    title: 'Facing high insurance',
    desc: 'First-year premiums are painful. Completing Pass Plus can cut them by up to 30% with many insurers.',
  },
  {
    icon: UserCheck,
    title: 'Want all-weather confidence',
    desc: 'Rain, glare, darkness. Learn to handle the conditions that catch new drivers out.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Book online',
    desc: 'Pick a time on our live calendar in about 60 seconds. No phone calls, no waiting.',
  },
  {
    num: '02',
    title: 'Meet your instructor',
    desc: 'A DVSA-approved ADI plans your six hours around your experience and goals.',
  },
  {
    num: '03',
    title: 'Work through the 6 modules',
    desc: 'Town, all-weather, rural, night, dual carriageways and motorways — assessed continuously.',
  },
  {
    num: '04',
    title: 'Get your certificate',
    desc: 'No test at the end. You finish with an official DVSA certificate and up to 30% off insurance.',
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

const AREAS = [
  { name: "Ilford", path: "/driving-lessons/ilford", postcode: "IG1–IG6" },
  { name: "Goodmayes", path: "/driving-lessons/goodmayes", postcode: "IG3, IG4" },
  { name: "Barking", path: "/driving-lessons/barking", postcode: "IG11" },
  { name: "Romford", path: "/driving-lessons/romford", postcode: "RM1–RM7" },
  { name: "East Ham", path: "/driving-lessons/east-ham", postcode: "E6" },
  { name: "Forest Gate", path: "/driving-lessons/forest-gate", postcode: "E7" },
  { name: "Canning Town", path: "/driving-lessons/canning-town", postcode: "E16" },
  { name: "Docklands", path: "/driving-lessons/docklands", postcode: "E14" },
  { name: "Walthamstow", path: "/driving-lessons/walthamstow", postcode: "E10, E11, E17" },
  { name: "Isle of Dogs", path: "/driving-lessons/isle-of-dogs", postcode: "E14" },
];

const WHATSAPP_URL = "https://wa.me/447487228866?text=Hey%20Drive%20Dojo!%20I'd%20like%20to%20book%20a%20Pass%20Plus%20course.";

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

          {/* ─── 1. HERO + QUICK CTA + POSTCODE CHECKER ──── */}
          <motion.section
            className="mb-16 relative rounded-3xl overflow-hidden border border-white/[0.08]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Glassmorphism background image */}
            <div className="absolute inset-0">
              <img
                src="/images/certifications/refresher4.png"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d]/90 via-[#0d0d0d]/75 to-[#0d0d0d]/60" />
            </div>
            <div className="relative z-10 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">DVSA Pass Plus · No Test at the End</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                  Pass Plus Courses in <span className="text-primary">East London</span> | BOOK ONLINE
                </h1>
                <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8">
                  Six hours of structured training in our automatic Mercedes A-Class. No test. An official DVSA certificate. And up to 30% off your car insurance.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                  <Link
                    to="/booking/pass-plus"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Your Pass Plus Course
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-xl text-white font-semibold transition-all"
                  >
                    <MessageCircle className="w-5 h-5 text-green-400" />
                    WhatsApp Us
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[11px] text-gray-600">
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
              </div>

              <div>
                <PostcodeChecker
                  onPostcodeChecked={() => {}}
                  onLessonSelected={() => {}}
                />
              </div>
            </div>
            </div>
          </motion.section>

          {/* ─── 2. PRICING & TESTER LESSON CARDS ────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
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
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-gray-400">Not sure yet?</span>
                </div>
                <div className="text-5xl font-black text-white mb-2">£78<span className="text-2xl text-gray-400">/2 hrs</span></div>
                <p className="text-gray-400 text-sm mb-6">
                  New Driver Assessment: 120 minutes with a DVSA-approved instructor who will honestly assess where you are.
                </p>
                <Link
                  to="/booking/payg"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded-xl text-white font-semibold transition-all"
                >
                  Book the Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.section>

          {/* ─── 3. WHAT IS PASS PLUS? ───────────────────── */}
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

              <div className="max-w-sm mx-auto lg:mx-0 w-full">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
                  <img
                    src="/images/certifications/Refresher1.png"
                    alt="Pass Plus training in an automatic Mercedes A-Class"
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* ─── 4. WHO IS IT FOR? ───────────────────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Who is Pass Plus for?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                If you have passed your test but want more real-world experience, this course is for you.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PERSONAS.map((persona, i) => (
                <motion.div
                  key={persona.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                    <persona.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{persona.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{persona.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ─── 5. WHY DRIVERS BOOK ─────────────────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px]" />
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Why drivers book Pass Plus</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  1 in 5 new drivers has an accident in their first year of driving. Pass Plus exists to change that: six hours of real-world training in the conditions that cause most first-year crashes.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Drivers book with us because the training is practical, the car is an automatic Mercedes A-Class, and the certificate can pay for itself in one insurance renewal.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    to="/booking/pass-plus"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Your Pass Plus Course
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded-xl text-white font-semibold transition-all"
                  >
                    <MessageCircle className="w-5 h-5 text-green-400" />
                    Ask us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ─── 6. THE 6 MODULES (3-COL) ────────────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">The 6 DVSA Pass Plus modules</h2>
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

          {/* ─── 7. HOW IT WORKS (4 STEPS) ───────────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">How it works</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Four simple steps from booking to your DVSA certificate.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 relative"
                >
                  <div className="text-4xl font-black text-primary/30 mb-3">{step.num}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ─── 8. SPECIALIST SECTIONS ──────────────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-3">Newly qualified drivers</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  The practical test proves you can drive safely under exam conditions. It cannot cover everything: motorways, long journeys, night driving and bad weather. Pass Plus fills those gaps in six focused hours.
                </p>
                <ul className="space-y-2">
                  {[
                    'Motorway experience the test cannot include',
                    'Night and all-weather handling',
                    'Advanced hazard perception',
                    'A certificate insurers reward',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <Car className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-3">Why choose automatic?</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  All our Pass Plus training is in an automatic Mercedes-Benz A-Class. With no clutch and no gears to manage, you can put your full attention on the road, the traffic and the conditions.
                </p>
                <ul className="space-y-2">
                  {[
                    'No clutch, no stalling, no gear stress',
                    'Modern, comfortable dual-controlled car',
                    'Focus entirely on the road and conditions',
                    'The same car most new drivers learn in today',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* ─── 9. FINAL CTA BANNER ─────────────────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
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
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-xl text-white font-semibold transition-all"
                  >
                    <MessageCircle className="w-5 h-5 text-green-400" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ─── 10. POSTCODE CHECKER + LOCATIONS GRID ───── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center mb-3 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium text-primary">
                <MapPin className="h-4 w-4 mr-2" />
                Areas We Cover
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Serving East London</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We pick you up from home, work or anywhere in our coverage area. Check your postcode or click your area.
              </p>
            </div>

            <div className="max-w-xl mx-auto mb-10">
              <PostcodeChecker
                onPostcodeChecked={() => {}}
                onLessonSelected={() => {}}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {AREAS.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <Link
                    to={area.path}
                    className="block bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 text-center hover:border-primary/40 hover:bg-white/[0.06] transition-all hover:-translate-y-1 group"
                  >
                    <MapPin className="h-5 w-5 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-white font-bold text-sm block group-hover:text-primary transition-colors">
                      {area.name}
                    </span>
                    <span className="text-gray-500 text-xs mt-0.5 block">{area.postcode}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ─── 11. FAQ ─────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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
        </div>
      </main>

      <Footer />
    </div>
  );
}