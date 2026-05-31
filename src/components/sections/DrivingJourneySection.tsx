import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  UserCheck,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

// ─── TYPES ─────────────────────────────────────────────────

interface Step {
  id: number;
  number: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  headline: string;
  paragraphs: string[];
  ctaText: string;
  ctaLink: string;
  resourceLinks?: { text: string; to: string }[];
}

// ─── STEP DATA ─────────────────────────────────────────────

const STEPS: Step[] = [
  {
    id: 1,
    number: 'Step 1',
    title: 'Book Your Trial Lesson',
    icon: Calendar,
    headline: 'Book Your Introductory Lesson',
    paragraphs: [
      "Book online in minutes. Take advantage of our introductory offer: First 2 hours for only £49, with standard rates starting at just £25/hour. No obligation, no pressure.",
      "We cover Wood Green, Goodmayes, and the wider London area. We pick you up from home, work, or college. Secure a massive discount with our 10-hour block booking for £340 (Klarna available!).",
    ],
    ctaText: 'Claim Your £49 Offer',
    ctaLink: '/booking',
  },
  {
    id: 2,
    number: 'Step 2',
    title: 'Meet Your Instructor',
    icon: UserCheck,
    headline: 'Meet Your Expert Instructor',
    paragraphs: [
      "You'll be paired with a fully qualified DVSA Approved Driving Instructor (ADI) who specialises in automatic tuition. Every instructor is DBS checked, patient, and passionate about building confident drivers — not just test-passers.",
      "Learn in a modern dual-controlled Mercedes-Benz A-Class or similar premium automatic vehicle. No clutch anxiety. No stalling. Just smooth, stress-free progress from your very first lesson.",
    ],
    ctaText: 'Meet Your Instructor',
    ctaLink: '/about',
  },
  {
    id: 3,
    number: 'Step 3',
    title: 'Learn & Build Confidence',
    icon: TrendingUp,
    headline: 'Learn & Build Real Confidence',
    paragraphs: [
      "Gain free access to our digital theory training platform with 3,000+ DVSA-approved questions, mock tests, and progress tracking. Combine practical lessons with anytime-theory practice to accelerate your learning.",
      "Track your progress after every lesson through our student portal — see manoeuvres mastered, skills developed, and exactly what you need to reach test standard. Your instructor provides honest, actionable feedback to keep you moving forward.",
    ],
    ctaText: 'Start Your Free Theory Training',
    ctaLink: 'https://drivedojodriving.autos/',
    resourceLinks: [
      { text: 'Try our interactive Show Me, Tell Me Flashcards', to: '/practical-test-prep/show-me-tell-me' },
    ],
  },
  {
    id: 4,
    number: 'Step 4',
    title: 'Pass Your Test',
    icon: GraduationCap,
    headline: 'Pass Your Test With Confidence',
    paragraphs: [
      "When your instructor confirms you're test-ready, we'll help you find the earliest available test date. Our students consistently achieve first-time pass rates well above the national average at key local test centres including Goodmayes, Wood Green, and Barking.",
      "From mock tests to test-day car rental, we handle everything so you can focus on what matters — driving safely and confidently. Join over 2,000 drivers who've passed first time with Drive Dojo.",
    ],
    ctaText: 'View Our Pass Rates',
    ctaLink: '/services',
    resourceLinks: [
      { text: 'Explore tips for your Local Test Centre', to: '/test-centres' },
    ],
  },
];

// ─── COMPONENT ─────────────────────────────────────────────

export default function DrivingJourneySection() {
  const [activeStep, setActiveStep] = useState(1);

  const activeData = STEPS.find((s) => s.id === activeStep) || STEPS[0];
  const ActiveIcon = activeData.icon;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* ─── HEADER ───────────────────────────────────── */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-green-50 border border-green-100"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Start Your Journey</span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Your{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Driving Journey
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Four simple steps from your first lesson to passing your test.
            </motion.p>
          </div>

          {/* ─── TAB BUTTONS ─────────────────────────────── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {STEPS.map((step, i) => {
              const isActive = activeStep === step.id;
              const StepIcon = step.icon;
              return (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={isActive ? { scale: 1.03 } : { scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`p-6 rounded-xl transition-all duration-300 text-left ${
                    isActive
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl scale-105'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <div className={`mb-4 ${isActive ? 'text-white' : 'text-blue-600'}`}>
                    <StepIcon className="w-8 h-8" />
                  </div>
                  <div className="font-bold mb-2">{step.number}</div>
                  <div className="text-sm font-semibold">{step.title}</div>
                </motion.button>
              );
            })}
          </div>

          {/* ─── DYNAMIC CONTENT PANEL ────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-blue-100"
            >
              <div className="max-w-3xl mx-auto">
                {/* Icon + Headline row */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    initial={{ rotate: -10, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg"
                  >
                    <ActiveIcon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {activeData.headline}
                  </h3>
                </div>

                {/* Paragraphs */}
                <div className="space-y-4 mb-6">
                  {activeData.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className={`${i === 0 ? 'text-xl text-gray-700' : 'text-gray-600'} leading-relaxed`}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Resource Links */}
                {activeData.resourceLinks && activeData.resourceLinks.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {activeData.resourceLinks.map((link, i) => (
                      <Link
                        key={i}
                        to={link.to}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {link.text}
                      </Link>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                {activeData.ctaLink.startsWith('http') ? (
                  <a
                    href={activeData.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {activeData.ctaText}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                ) : (
                  <Link
                    to={activeData.ctaLink}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {activeData.ctaText}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
