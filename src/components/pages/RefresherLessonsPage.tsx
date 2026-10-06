import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  RefreshCw,
  Car,
  Moon,
  Gauge,
  MapPin,
  ShieldCheck,
  CreditCard,
  Calendar,
  Star,
  CheckCircle,
  ArrowRight,
  Award,
  Clock,
  ChevronDown,
  Sparkles,
  UserCheck,
  Users,
  Heart,
  MessageCircle,
  Route,
  CloudRain,
  TreePine,
} from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import SEO from '../ui/SEO';
import PostcodeChecker from '../ui/PostcodeChecker';
import { BUSINESS } from '../../data/business';

// ─── DATA ──────────────────────────────────────────────────

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

const PERSONAS = [
  {
    icon: Clock,
    title: 'Returning after a break',
    desc: "Haven't driven in months or years? Life gets busy. We rebuild your skills from where you left off, without judgement.",
  },
  {
    icon: Heart,
    title: 'Lost your confidence',
    desc: 'A near-miss, a bad experience, or just time away. We take it at your pace, starting on quiet roads.',
  },
  {
    icon: Users,
    title: 'Newly qualified drivers',
    desc: 'Passed your test but still feel unsure on motorways or at night? You are not alone — and we can help.',
  },
  {
    icon: UserCheck,
    title: 'New job or life change',
    desc: 'Starting a role that involves driving, moving to a new area, or preparing for an assessment. We get you ready.',
  },
];

const COVERAGE = [
  {
    icon: Gauge,
    title: 'Motorways',
    desc: 'Joining, lane discipline, overtaking and exits. The roads that make most drivers nervous, made simple.',
  },
  {
    icon: Moon,
    title: 'Night Driving',
    desc: 'Headlight dazzle, reduced visibility and reading the road in the dark with confidence.',
  },
  {
    icon: MapPin,
    title: 'City & Busy Traffic',
    desc: 'Roundabouts, junctions, bus lanes and cyclists. The everyday East London driving that needs practice.',
  },
  {
    icon: Car,
    title: 'Parking & Manoeuvres',
    desc: 'Parallel parking, bay parking and tight spaces. The skills that fade fastest when you stop driving.',
  },
  {
    icon: CloudRain,
    title: 'All-Weather Driving',
    desc: 'Rain, glare and low visibility. How to read the road when conditions turn against you.',
  },
  {
    icon: Award,
    title: 'Highway Code Refresh',
    desc: 'Signs, rules and priorities brought up to date. You will leave knowing the road again.',
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
    title: 'Short assessment',
    desc: 'Your first session starts with a relaxed drive so we can see where you are.',
  },
  {
    num: '03',
    title: 'Tailored plan',
    desc: 'We agree what to work on: motorways, night driving, parking, or whatever matters to you.',
  },
  {
    num: '04',
    title: 'Build confidence',
    desc: 'Each session builds on the last, at your pace, until driving feels normal again.',
  },
];

const FAQS = [
  {
    q: 'Who are refresher lessons for?',
    a: 'Qualified drivers who have lost confidence, taken a long break from driving, or want to brush up on specific skills like motorways, night driving or parking.',
  },
  {
    q: 'How much do refresher lessons cost?',
    a: 'Refresher lessons are £45 per hour with a minimum 2-hour booking.',
  },
  {
    q: 'What car will I drive?',
    a: 'You train in our automatic Mercedes-Benz A-Class with dual controls, with a DVSA-approved instructor.',
  },
  {
    q: 'Do I need to have just passed my test?',
    a: 'No. Refresher lessons are for any qualified driver, whether you passed last month or last decade.',
  },
  {
    q: 'I am an older driver. Is this suitable for me?',
    a: 'Yes. Many of our refresher students are returning to driving later in life. Lessons are calm, patient and paced entirely around you.',
  },
  {
    q: 'Can I pay with Klarna?',
    a: 'Yes. You can split the cost of your refresher lessons into three interest-free payments with Klarna Pay in 3.',
  },
  {
    q: 'How do I book?',
    a: 'Book online in about 60 seconds on our live Calendly calendar. No phone tag, instant confirmation.',
  },
];

const WHATSAPP_URL = "https://wa.me/447487228866?text=Hey%20Drive%20Dojo!%20I'd%20like%20to%20book%20refresher%20driving%20lessons.";

// ─── COMPONENT ─────────────────────────────────────────────

export default function RefresherLessonsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <SEO
        title="Refresher Driving Lessons East London | £45/hr | Drive Dojo"
        description="Regain your driving confidence with refresher lessons in East London. £45/hr, minimum 2 hours, in an automatic Mercedes A-Class with a DVSA-approved instructor. Book online."
        canonical="https://drivedojodrivingschool.com/refresher-lessons"
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
                src="/images/certifications/refresher3.png"
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
                  <RefreshCw className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">For Qualified Drivers · £45/hr</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                  Refresher Lessons in <span className="text-primary">East London</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8">
                  Got your licence but lost your nerve? Rebuild your confidence behind the wheel with a DVSA-approved instructor in an automatic Mercedes A-Class. From £45 per hour, minimum 2 hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                  <Link
                    to="/booking/refresher"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Your Refresher
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
                  MINIMUM 2 HOURS
                </span>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-gray-400">Tailored one-to-one sessions</span>
                </div>
                <div className="text-5xl font-black text-white mb-2">£45<span className="text-2xl text-gray-400">/hr</span></div>
                <p className="text-gray-400 text-sm mb-6">
                  Minimum 2-hour booking. Automatic Mercedes A-Class. DVSA-approved instructor.
                </p>
                <Link
                  to="/booking/refresher"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                  Book Your Refresher
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-gray-400">Not sure yet?</span>
                </div>
                <div className="text-5xl font-black text-white mb-2">£70<span className="text-2xl text-gray-400">/2 hrs</span></div>
                <p className="text-gray-400 text-sm mb-6">
                  New Driver Assessment: 120 minutes with a DVSA-approved instructor who will honestly map your fastest route back to confident driving.
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

          {/* ─── 3. WHAT ARE REFRESHER LESSONS? ──────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">What are refresher lessons?</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Refresher lessons are one-to-one driving sessions for people who already hold a licence. A break from driving, a stressful experience, or a new set of roads can knock your confidence. Refresher lessons are a calm, structured way to get it back.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  You train with a DVSA-approved instructor in an automatic Mercedes-Benz A-Class. We start where you are, focus on what you need, and build from there. No judgement, no pressure.
                </p>
                <ul className="space-y-3">
                  {[
                    '£45 per hour, minimum 2 hours',
                    'Tailored to you — motorways, night, city, parking',
                    'Automatic Mercedes-Benz A-Class',
                    'DVSA-approved instructor',
                    'Book online in about 60 seconds',
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
                    alt="Refresher driving lesson in an automatic Mercedes A-Class"
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* ─── 4. WHO ARE THEY FOR? ────────────────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Who are they for?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                If you hold a licence but driving no longer feels easy, these sessions are for you.
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

          {/* ─── 5. REBUILDING CONFIDENCE ────────────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px]" />
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Rebuilding confidence, one session at a time</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Confidence behind the wheel is a skill, and skills come back with practice. Most of our refresher students feel a noticeable difference within two or three sessions, because the lessons are built around exactly what they find hard.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Why drivers book with us: a patient DVSA-approved instructor, an automatic car that removes the hardest part of driving, and a plan that starts on roads you feel comfortable with before building up.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    to="/booking/refresher"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Your Refresher
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

          {/* ─── 6. WHAT YOU CAN COVER (3-COL) ───────────── */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">What you can cover</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Every session is built around you. Pick the areas that matter, or let us assess and recommend.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {COVERAGE.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
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
                Four simple steps from booking to confident driving.
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
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-3">Refresher lessons for older drivers</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Returning to driving later in life is more common than you might think. Whether you stopped driving years ago, want to keep your independence, or need to renew your confidence after a health break, our instructors take a calm and patient approach.
                </p>
                <ul className="space-y-2">
                  {[
                    'Paced entirely around you',
                    'Quiet roads to start, building gradually',
                    'Patient, supportive instruction',
                    'No test pressure — just confidence',
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
                  All our refresher lessons are in an automatic Mercedes-Benz A-Class. With no clutch and no gears to manage, you can put your full attention on the road, the traffic and your own confidence.
                </p>
                <ul className="space-y-2">
                  {[
                    'No clutch, no stalling, no gear stress',
                    'Modern, comfortable dual-controlled car',
                    'Focus entirely on the road',
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
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to feel confident again?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                  Book a 2-hour refresher in an automatic Mercedes A-Class. £45 per hour, DVSA-approved instruction, instant online booking.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/booking/refresher"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Your Refresher
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Refresher questions, answered</h2>
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