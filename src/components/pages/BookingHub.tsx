import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  CreditCard,
  ShieldCheck,
  Star,
  Zap,
  Award,
  RefreshCw,
  ClipboardCheck,
  Gauge,
  MapPin,
  Sparkles,
} from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import SEO from "../ui/SEO";
import PostcodeChecker from "../ui/PostcodeChecker";
import LessonHoursEstimator from "../sections/LessonHoursEstimator";
import CircularCarousel from "../ui/CircularCarousel";
import AeroShards from "../ui/AeroShards";
import { BUSINESS } from "../../data/business";

// ─── DATA ──────────────────────────────────────────────────

const PACKAGES = [
  {
    icon: Clock,
    emoji: "⏱️",
    title: "Pay As You Go",
    price: "£38",
    unit: "/hour",
    highlight: "First 2 hours £70",
    desc: "Zero commitment. Just book, drive, repeat.",
    features: ["2-hour lessons", "DVSA-approved instructor", "Mercedes A-Class"],
    href: "/booking/payg",
    cta: "Book PAYG",
    featured: false,
  },
  {
    icon: Car,
    emoji: "🚗",
    title: "6-Hour Package",
    price: "£228",
    unit: "/6 hours",
    highlight: "£38/hr",
    desc: "A focused block to level up fast or polish before your test.",
    features: ["6 hours of tuition", "Flexible scheduling", "Klarna available"],
    href: "/booking/6hour",
    cta: "Book 6 Hours",
    featured: false,
  },
  {
    icon: Zap,
    emoji: "🔥",
    title: "10-Hour Block",
    price: "£340",
    unit: "/10 hours",
    highlight: "Save £40 — £34/hr",
    desc: "The one everyone books. Build skills, save money, pass faster.",
    features: ["10 hours of tuition", "Save £40 vs PAYG", "3× £113.33 with Klarna"],
    href: "/booking/10hour",
    cta: "Book 10 Hours",
    featured: true,
  },
  {
    icon: Gauge,
    emoji: "📈",
    title: "20-Hour Block",
    price: "£679",
    unit: "/20 hours",
    highlight: "£33.95/hr",
    desc: "The full journey to test-ready in one package.",
    features: ["20 hours of tuition", "Best hourly rate", "Klarna available"],
    href: "/booking/20hour",
    cta: "Book 20 Hours",
    featured: false,
  },
  {
    icon: Award,
    emoji: "⚡",
    title: "Intensive Pass Course",
    price: "£650–£950",
    unit: "/12–30 hrs",
    highlight: "Pass in as little as 2 weeks",
    desc: "Daily lessons. Fast-track test. Licence secured.",
    features: ["Daily 2–4 hour sessions", "Mock tests included", "Pass Pledge"],
    href: "/booking/intensive",
    cta: "Book Intensive",
    featured: false,
  },
  {
    icon: ClipboardCheck,
    emoji: "📝",
    title: "Mock Driving Test",
    price: "£90",
    unit: "/test",
    highlight: "Real exam conditions",
    desc: "A full dress rehearsal with examiner-style feedback.",
    features: ["45-minute test", "DL25-style report", "Full debrief"],
    href: "/booking/mocktest",
    cta: "Book Mock Test",
    featured: false,
  },
  {
    icon: Car,
    emoji: "🔑",
    title: "Test Car Hire",
    price: "£150",
    unit: "/test",
    highlight: "Test-day ready",
    desc: "Roll up to your test in our dual-controlled Mercedes.",
    features: ["Dual controls", "Fully insured", "Pre-test warm-up"],
    href: "/booking/testrental",
    cta: "Book Test Car",
    featured: false,
  },
  {
    icon: Award,
    emoji: "🎓",
    title: "Pass Plus Course",
    price: "£250",
    unit: "/6 hours",
    highlight: "Up to 30% off insurance",
    desc: "Six DVSA modules. No test. Cheaper insurance.",
    features: ["Motorway & night driving", "No test", "DVSA certificate"],
    href: "/booking/pass-plus",
    cta: "Book Pass Plus",
    featured: false,
  },
  {
    icon: RefreshCw,
    emoji: "🔄",
    title: "Refresher Lessons",
    price: "£45",
    unit: "/hour",
    highlight: "Minimum 2 hours",
    desc: "Got your licence but lost your nerve? We fix that.",
    features: ["Qualified drivers", "Motorway & night practice", "At your pace"],
    href: "/booking/refresher",
    cta: "Book Refresher",
    featured: false,
  },
];

const INTENSIVE_PACKAGES = [
  { hrs: "12 Hours", price: "£575", href: "/booking/intensive-12hr" },
  { hrs: "16 Hours", price: "£715", href: "/booking/intensive-16hr" },
  { hrs: "20 Hours", price: "£850", href: "/booking/intensive-20hr" },
  { hrs: "25 Hours", price: "£1,025", href: "/booking/intensive-25hr" },
  { hrs: "30 Hours", price: "£1,180", href: "/booking/intensive-30hr" },
  { hrs: "35 Hours", price: "£1,350", href: "/booking/intensive-35hr" },
  { hrs: "40 Hours", price: "£1,520", href: "/booking/intensive-40hr" },
  { hrs: "45 Hours", price: "£1,680", href: "/booking/intensive-45hr" },
];

const SUCCESS_STORIES = [
  { src: "/images/certifications/1.png", alt: "Alex W. passed first time at Goodmayes", title: "Alex W.", subtitle: "First Time Pass!" },
  { src: "/images/certifications/4.png", alt: "Alina S. passed with zero faults at Goodmayes", title: "Alina S.", subtitle: "Zero Faults!" },
  { src: "/images/certifications/5.png", alt: "Aimee L. passed via the intensive course", title: "Aimee L.", subtitle: "Intensive Course Win!" },
  { src: "/images/certifications/12.png", alt: "Mark W. went from nervous to confident at Chingford", title: "Mark W.", subtitle: "Nervous to Confident!" },
  { src: "/images/certifications/13.png", alt: "Mao V. passed first attempt at Goodmayes", title: "Mao V.", subtitle: "First Attempt!" },
  { src: "/images/certifications/11.png", alt: "Hazel C. quick learner pass at Goodmayes", title: "Hazel C.", subtitle: "Quick Learner!" },
  { src: "/images/certifications/14.png", alt: "Dami S. amazing pass at Hornchurch", title: "Dami S.", subtitle: "Amazing Pass!" },
  { src: "/images/certifications/15.png", alt: "Oliver C. nailed it at Goodmayes", title: "Oliver C.", subtitle: "Nailed It!" },
  { src: "/images/certifications/16.png", alt: "Yaren S. outstanding pass at Barking", title: "Yaren S.", subtitle: "Outstanding!" },
];

const STEPS = [
  {
    num: "01",
    emoji: "🎯",
    title: "Pick your package",
    desc: "Know what you need? Book it. Not sure? Use the hours calculator below.",
  },
  {
    num: "02",
    emoji: "📅",
    title: "Grab a slot",
    desc: "Live calendar, instant confirmation. No phone tag, no waiting lists.",
  },
  {
    num: "03",
    emoji: "💳",
    title: "Pay your way",
    desc: "Upfront or 3 interest-free payments with Klarna. Your call.",
  },
  {
    num: "04",
    emoji: "🚗",
    title: "Start driving",
    desc: "We pick you up from home, work or college anywhere in East London.",
  },
];

// ─── COMPONENT ─────────────────────────────────────────────

export default function BookingHub() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white relative overflow-hidden">
      <SEO
        title="Book Driving Lessons Online | East London | Drive Dojo"
        description="Book driving lessons online in 60 seconds. PAYG from £38/hr, block bookings from £340, intensive courses from £650. Automatic Mercedes A-Class, DVSA-approved. Klarna Pay in 3."
        keywords="book driving lessons online, book driving lessons East London, driving lesson prices, book intensive driving course, book mock driving test, Klarna driving lessons"
        canonical="https://drivedojodrivingschool.com/booking"
      />

      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>

      <Navbar />

      <main className="relative z-10 pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* ─── 1. HERO + POSTCODE CHECKER (glassmorphism + AeroShards) ── */}
          <motion.section
            className="mb-14 relative rounded-3xl overflow-hidden border border-white/[0.08]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* AeroShards animated background */}
            <div className="absolute inset-0">
              <AeroShards
                backgroundColor="#0d0d0d"
                shardColor="#F97316"
                accentColor="#EF4444"
                placement="full"
                flow="stream"
                material="chrome"
                detail="balanced"
                effect="none"
                scale={1}
                spread={1.1}
                depth={0.65}
                speed={0.2}
                spin={1}
                interaction="repel"
                density={1.5}
                shardSize={1.1}
                stretch={0.95}
                turbulence={0.55}
                glow={1}
                edgeSoftness={2}
                bloom={0.75}
                grain={0.05}
                chromaticAberration={0.0075}
                transitionDuration={1}
                interactionRadius={1.5}
                interactionStrength={0.5}
                rippleIntensity={1}
                holdToGather={true}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d]/85 via-[#0d0d0d]/70 to-[#0d0d0d]/55" />
            </div>
            <div className="relative z-10 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Live Availability · Instant Confirmation</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                  Book Your <span className="text-primary">Driving Lessons</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 mb-6">
                  No phone tag. No waiting lists. No drama. Pick a package, grab a slot on the live calendar, and start driving this week. 🚗💨
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                  <Link
                    to="/booking/10hour"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                  >
                    <Zap className="w-5 h-5" />
                    Book the 10-Hour Block
                  </Link>
                  <a
                    href="https://wa.me/447487228866?text=Hey%20Drive%20Dojo!%20I'd%20like%20help%20choosing%20a%20package."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-xl text-white font-semibold transition-all"
                  >
                    💬 WhatsApp Us
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[11px] text-gray-600">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> DVSA Approved
                  </span>
                  <span className="flex items-center gap-1">
                    <Car className="w-3 h-3" /> Mercedes A-Class Automatic
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {BUSINESS.rating}/5
                  </span>
                  <span className="flex items-center gap-1">
                    <CreditCard className="w-3 h-3" /> Klarna Pay in 3
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

          {/* ─── 2. KLARNA TRUST BANNER ──────────────────── */}
          <motion.section
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="bg-gradient-to-r from-primary/15 via-amber-500/10 to-primary/15 border border-primary/30 rounded-2xl p-6 md:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[60px]" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-white">
                    Learn Today, Pay Over Time 💳
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Split any package into 3 interest-free payments with Klarna at checkout.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ─── 3. HOURS CALCULATOR ─────────────────────── */}
          <motion.section
            className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LessonHoursEstimator />
          </motion.section>

          {/* ─── 4. PACKAGE GRID ─────────────────────────── */}
          <motion.section
            className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Pick your package 🎯
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Every package includes door-to-door pickup, a DVSA-approved instructor and our automatic Mercedes A-Class.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PACKAGES.map((pkg, i) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className={`rounded-2xl p-6 flex flex-col relative ${
                    pkg.featured
                      ? "border-2 border-primary/40 bg-primary/[0.06]"
                      : "border border-white/[0.08] bg-white/[0.03]"
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-[#0d0d0d] text-xs font-bold whitespace-nowrap">
                      🔥 MOST POPULAR
                    </span>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center text-xl">
                      {pkg.emoji}
                    </div>
                    <h3 className="text-lg font-bold text-white">{pkg.title}</h3>
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-black text-white">{pkg.price}</span>
                    <span className="text-sm text-gray-500">{pkg.unit}</span>
                  </div>
                  <span className="inline-block self-start mb-3 px-3 py-1 rounded-full bg-green-500/15 text-green-400 text-xs font-semibold">
                    {pkg.highlight}
                  </span>
                  <p className="text-gray-400 text-sm mb-4">{pkg.desc}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={pkg.href}
                    className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-bold transition-all ${
                      pkg.featured
                        ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                        : "bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-white"
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ─── 5. INTENSIVE PACKAGES STRIP ─────────────── */}
          <motion.section
            className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Know your hours? Book exact ⚡
                </h2>
                <p className="text-gray-400 text-sm">
                  Every intensive package, from refresher-level to full beginner. Tap to book.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {INTENSIVE_PACKAGES.map((p) => (
                  <Link
                    key={p.href}
                    to={p.href}
                    className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-primary/40 rounded-xl p-4 text-center transition-all hover:-translate-y-1 group"
                  >
                    <div className="text-white font-bold text-sm">{p.hrs}</div>
                    <div className="text-primary font-black text-lg">{p.price}</div>
                    <div className="text-gray-500 text-xs mt-1 group-hover:text-gray-400 transition-colors">
                      Book now →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ─── SUCCESS STORIES CAROUSEL ────────────────── */}
          <motion.section
            className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                They booked. They passed. 🏆
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Real learners from East London who booked online and passed. Your photo could be next.
              </p>
            </div>
            <div style={{ width: "100%", height: "560px", position: "relative" }}>
              <CircularCarousel
                items={SUCCESS_STORIES}
                preset="cylinder"
                intro="spin"
                cardWidth={220}
                aspectRatio={0.75}
                speed={14}
                captions
                tilt={0}
                perspective={1800}
                fadeColor="#0d0d0d"
              />
            </div>
          </motion.section>

          {/* ─── 6. HOW IT WORKS ─────────────────────────── */}
          <motion.section
            className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">How booking works ⚙️</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Four steps from scrolling to driving.
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
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-4xl font-black text-primary/30">{step.num}</div>
                    <div className="text-2xl">{step.emoji}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ─── 7. FINAL CTA ────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Not sure which package fits? 🤔
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                  Book the £70 New Driver Assessment — 2 hours with a DVSA-approved instructor who will honestly tell you where you are and what you need. No upsell, just the truth.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/booking/payg"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                  >
                    <Calendar className="w-5 h-5" />
                    Book the £70 Assessment
                  </Link>
                  <a
                    href="https://wa.me/447487228866?text=Hey%20Drive%20Dojo!%20I'd%20like%20help%20choosing%20a%20package."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-xl text-white font-semibold transition-all"
                  >
                    💬 Ask us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}