import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  CreditCard,
  Zap,
  Clock,
  Star,
  TrendingUp,
} from 'lucide-react';

// ─── OFFERS DATA ───────────────────────────────────────────

const OFFERS = [
  {
    badge: 'BEST VALUE',
    title: '10-Hour Block Booking',
    price: '£340',
    perHourLabel: '£34/hr',
    savingsLabel: 'Save £40 vs PAYG',
    features: [
      '10 hours of professional automatic tuition',
      'Dedicated DVSA-approved instructor',
      'Progress tracking & personalised feedback',
      'Flexible scheduling — book at your pace',
      'Priority access to test-date planning',
    ],
    ctaText: 'Book Your 10-Hour Block',
    ctaLink: '/booking/10hour',
    highlighted: true,
  },
  {
    badge: 'FLEXIBLE',
    title: 'Pay As You Go',
    price: '£38',
    perHourLabel: '/hour',
    savingsLabel: 'No commitment needed',
    features: [
      'Book individual hours as needed',
      'Same expert automatic tuition',
      'Ideal for topping up before your test',
      'No long-term commitment',
      'Available evenings & weekends',
    ],
    ctaText: 'Book a Single Lesson',
    ctaLink: '/booking/payg',
    highlighted: false,
  },
  {
    badge: 'INTENSIVE',
    title: 'Intensive Course',
    price: 'From £850',
    perHourLabel: 'fast-track',
    savingsLabel: 'Pass in weeks, not months',
    features: [
      '20+ hours of concentrated training',
      'Designed for rapid progression',
      'Theory + practical combined approach',
      'Mock test included',
      'Ideal for time-sensitive learners',
    ],
    ctaText: 'View Intensive Options',
    ctaLink: '/booking/intensive',
    highlighted: false,
  },
];

// ─── COMPONENT ─────────────────────────────────────────────

export default function PricingOffersSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#0d0d0d] text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.03, 0.1, 0.03],
              scale: [0, 1, 0],
              x: [0, Math.random() * 80 - 40, 0],
              y: [0, Math.random() * 80 - 40, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* ─── HEADER ─────────────────────────────────────── */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Pricing & Offers</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Choose Your <span className="text-primary">Driving Package</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Flexible options to match your budget and goals. All packages include expert automatic tuition in a modern dual-controlled vehicle.
          </p>
        </motion.div>

        {/* ─── PRICING CARDS ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {OFFERS.map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border overflow-hidden group ${
                offer.highlighted
                  ? 'border-primary/50 bg-gradient-to-b from-primary/10 to-[#0d0d0d] shadow-lg shadow-primary/10'
                  : 'border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15]'
              }`}
            >
              {/* Highlighted badge */}
              {offer.badge && (
                <div
                  className={`absolute -top-px left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-[10px] font-bold tracking-wider uppercase ${
                    offer.highlighted
                      ? 'bg-primary text-white'
                      : 'bg-white/10 text-gray-300'
                  }`}
                >
                  {offer.badge}
                </div>
              )}

              <div className="p-6 pt-8 flex flex-col h-full">
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-1">
                  {offer.title}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-black text-white">
                    {offer.price}
                  </span>
                  {offer.perHourLabel && (
                    <span className="text-sm text-gray-400">{offer.perHourLabel}</span>
                  )}
                </div>

                {/* Savings / tagline */}
                <p
                  className={`text-xs font-medium mb-5 ${
                    offer.highlighted ? 'text-green-400' : 'text-gray-500'
                  }`}
                >
                  {offer.savingsLabel}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {offer.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-400">
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          offer.highlighted ? 'text-primary' : 'text-gray-600'
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={offer.ctaLink}
                  className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                    offer.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5'
                      : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.08]'
                  }`}
                >
                  {offer.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── KLARNA BAR ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-amber-500/20 border border-pink-500/20 flex items-center justify-center"
              >
                <CreditCard className="w-7 h-7 text-pink-400" />
              </motion.div>
              <div>
                <h3 className="text-white font-bold text-lg">Pay in 3 with Klarna</h3>
                <p className="text-gray-400 text-sm">
                  Split your £340 block booking into 3 interest-free payments of <span className="text-white font-semibold">£113.33</span>. No fees, no interest — just smooth monthly instalments.
                </p>
              </div>
            </div>
            <Link
              to="/booking/10hour"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-amber-500 hover:from-pink-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Secure with Klarna
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* ─── TRUST ROW ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-5 mt-8 text-[11px] text-gray-600"
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3 text-blue-400" /> DVSA Approved
          </span>
          <span className="w-1 h-1 bg-gray-700 rounded-full" />
          <span className="flex items-center gap-1.5">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /> 4.9/5 Rating
          </span>
          <span className="w-1 h-1 bg-gray-700 rounded-full" />
          <span className="flex items-center gap-1.5">
            <CreditCard className="w-3 h-3 text-gray-400" /> Klarna Available
          </span>
          <span className="w-1 h-1 bg-gray-700 rounded-full" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-gray-400" /> Instant Booking
          </span>
          <span className="w-1 h-1 bg-gray-700 rounded-full" />
          <span className="flex items-center gap-1.5">
            <TrendingUp className="w-3 h-3 text-green-400" /> Save £40 vs PAYG
          </span>
        </motion.div>
      </div>
    </section>
  );
}
