import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Navigation,
  ChevronDown,
} from 'lucide-react';

// ─── DATA ──────────────────────────────────────────────────

const CENTRES = [
  {
    id: 'goodmayes',
    name: 'Goodmayes',
    passRate: '58%',
    troubleSpot: 'High Road multi-lane roundabout & retail park junction',
    tip: 'Commit early at the retail park roundabout and check mirrors before every exit.',
  },
  {
    id: 'wood-green',
    name: 'Wood Green',
    passRate: '42%',
    troubleSpot: 'High Road roundabout — lane confusion causes most fails',
    tip: 'Treat it as a spiral: left for exits 1-2, right for exits 3-4. No mid-roundabout lane changes.',
  },
  {
    id: 'barking',
    name: 'Barking',
    passRate: '55%',
    troubleSpot: 'Ripple Road / A13 gyratory system',
    tip: 'Get comfortable at 50mph on the A13 approach and count exits on the gyratory.',
  },
  {
    id: 'hornchurch',
    name: 'Hornchurch',
    passRate: '60%',
    troubleSpot: 'High Street narrow sections with pedestrian crossings',
    tip: 'Expect 20 minutes of independent driving following signs to Romford and Upminster.',
  },
  {
    id: 'chingford',
    name: 'Chingford',
    passRate: '61%',
    troubleSpot: 'Crooked Billet roundabout — 5 exits, poor markings',
    tip: 'Practice all five exits. Country road NSL transitions into Epping Forest appear frequently.',
  },
  {
    id: 'wanstead',
    name: 'Wanstead',
    passRate: '59%',
    troubleSpot: 'Charlie Brown\'s roundabout — fast 5-exit junction',
    tip: 'Lane discipline is paramount. Over-caution gets marked down just as much as recklessness.',
  },
];

// ─── COMPONENT ─────────────────────────────────────────────

export default function TestCentreWidget() {
  const [selectedId, setSelectedId] = useState('goodmayes');
  const selected = CENTRES.find((c) => c.id === selectedId) || CENTRES[0];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-[#0d0d0d] text-white">
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Test Centre Cheat Sheet</span>
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Know Your <span className="text-primary">Test Centre</span> Before Test Day
          </h2>
          <p className="text-gray-500 text-sm">
            Select a centre for local pass rates, trouble spots, and insider tips.
          </p>
        </motion.div>

        {/* Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {CENTRES.map((centre) => (
            <button
              key={centre.id}
              onClick={() => setSelectedId(centre.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedId === centre.id
                  ? 'bg-primary text-white'
                  : 'bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white'
              }`}
            >
              {centre.name}
            </button>
          ))}
        </div>

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-5 md:p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 text-center">
                <p className="text-2xl font-black text-white">{selected.passRate}</p>
                <p className="text-xs text-gray-500">Current Pass Rate</p>
              </div>
              <div className="md:col-span-2 bg-amber-500/5 border border-amber-500/10 rounded-xl p-3">
                <p className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold mb-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Trouble Spot
                </p>
                <p className="text-gray-300 text-sm">{selected.troubleSpot}</p>
              </div>
            </div>

            <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-xl p-3 mb-4">
              <p className="flex items-center gap-1.5 text-yellow-400 text-xs font-semibold mb-1">
                <Lightbulb className="w-3.5 h-3.5" />
                Instructor's Tip
              </p>
              <p className="text-gray-300 text-sm">{selected.tip}</p>
            </div>

            <Link
              to={`/test-centres?centre=${selected.id}`}
              className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 text-sm font-semibold transition-colors"
            >
              View full {selected.name} cheat sheet
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Link to full explorer */}
        <div className="text-center mt-6">
          <Link
            to="/test-centres"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors"
          >
            Explore all 6 test centres
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
