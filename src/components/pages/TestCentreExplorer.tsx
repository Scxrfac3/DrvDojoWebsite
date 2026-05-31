import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Award,
  Star,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Navigation,
  Users,
  Target,
  ChevronRight,
  Car,
} from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import SEO from '../ui/SEO';

// ─── TEST CENTRE DATA ─────────────────────────────────────

interface TestCentre {
  id: string;
  name: string;
  address: string;
  passRate: string;
  distance: string;
  troubleSpots: string[];
  instructorsTip: string;
  routeCount: number;
}

const TEST_CENTRES: TestCentre[] = [
  {
    id: 'goodmayes',
    name: 'Goodmayes',
    address: 'Goodmayes Driving Test Centre, 254 High Road, Goodmayes, IG3 8EW',
    passRate: '58%',
    distance: '8 miles',
    troubleSpots: [
      'The roundabout at Goodmayes Retail Park — tight lanes during peak hours',
      'Right turn from Green Lane onto High Road (watch for pedestrian crossings)',
      'The mini-roundabout sequence near Goodmayes Station (keep lane discipline)',
      'High-speed approach to the A12 junction — late-lane changes catch examiners',
    ],
    instructorsTip:
      "Examiners at Goodmayes love testing your awareness on the High Road — there are three schools, two pedestrian crossings, and a bus lane that switches hours. Do at least two mock routes covering the station area and the retail park roundabout. Most fails here come from hesitation at the multi-lane roundabout, so commit early and check mirrors before every exit.",
    routeCount: 8,
  },
  {
    id: 'wood-green',
    name: 'Wood Green',
    address: 'Wood Green Driving Test Centre, Western Road, London, N22 6UH',
    passRate: '42%',
    distance: '12 miles',
    troubleSpots: [
      'The Wood Green High Road roundabout — notorious for lane confusion',
      'Alexandra Palace approach — steep incline with parked cars both sides',
      'Turnpike Lane junction — buses and cyclists create narrow passing gaps',
      'Green Lanes dual carriageway entry — short slip road requires confident acceleration',
    ],
    instructorsTip:
      "Wood Green has one of London's lowest pass rates for a reason — the High Road roundabout catches even confident drivers. The key is to treat it as a spiral roundabout: left lane for exits 1 & 2, right lane for exits 3 & 4. You MUST not change lanes mid-roundabout or it's an instant serious fault. We recommend a dedicated 2-hour session just drilling this junction before your test.",
    routeCount: 12,
  },
  {
    id: 'barking',
    name: 'Barking',
    address: 'Barking Driving Test Centre, 47 Ripple Road, Barking, IG11 7NT',
    passRate: '55%',
    distance: '5 miles',
    troubleSpots: [
      'Ripple Road / A13 interchange — complex gyratory system',
      'Lodge Avenue junction — heavy bus traffic during school hours',
      'Barking Station approach — narrow roads with parked vehicles',
      'Abbey Road level crossing — test of observation and patience',
    ],
    instructorsTip:
      'Barking examiners frequently use the A13 approach to test your confidence at speed. Get comfortable merging at 50mph on the dual carriageway and know when to hold back vs. when to go. The gyratory near Ripple Road is also a favourite — count your exits carefully and always signal your intent early.',
    routeCount: 6,
  },
  {
    id: 'hornchurch',
    name: 'Hornchurch',
    address: 'Hornchurch Driving Test Centre, 116 High Street, Hornchurch, RM12 4UJ',
    passRate: '60%',
    distance: '12 miles',
    troubleSpots: [
      'Hornchurch High Street — narrow with frequent pedestrian crossings',
      'The roundabout at Abbs Cross Lane — poor visibility on approach',
      'Suttons Lane junction — awkward angle for right turns',
      'Romford Road bus lane restrictions — time-sensitive rules',
    ],
    instructorsTip:
      'Hornchurch is one of the more forgiving centres in the area with a 60% pass rate, but don\'t get complacent. Examiners here focus heavily on independent driving — you\'ll likely follow road signs for 20 minutes. Practice following signs to Romford and Upminster without sat-nav prompts.',
    routeCount: 5,
  },
  {
    id: 'chingford',
    name: 'Chingford',
    address: 'Chingford Driving Test Centre, 2 Station Road, Chingford, E4 6AL',
    passRate: '61%',
    distance: '10 miles',
    troubleSpots: [
      'Chingford Mount Road — busy shopping area with unpredictable pedestrians',
      'The Crooked Billet roundabout — five exits with poor lane markings',
      'Epping Forest approach roads — national speed limit transitions',
      'Station Road junction — restricted visibility from parked vehicles',
    ],
    instructorsTip:
      'Chingford routes often take you into Epping Forest — be ready for country road driving with national speed limits. The transition from 30mph to 60mph catches people off-guard. Also, the Crooked Billet roundabout appears on nearly every test route, so make sure you can navigate all five exits confidently.',
    routeCount: 7,
  },
  {
    id: 'wanstead',
    name: 'Wanstead',
    address: 'Wanstead Driving Test Centre, 106 High Street, Wanstead, E12 5AA',
    passRate: '59%',
    distance: '7 miles',
    troubleSpots: [
      'Wanstead High Street — narrow with oncoming buses',
      'Redbridge Lane roundabout — multiple lanes, poor signage',
      'The Charlie Brown\'s roundabout — large, fast-paced five-exit junction',
      'Snaresbrook Road — school zone with 20mph limit enforcement',
    ],
    instructorsTip:
      'Wanstead examiners will almost certainly take you through the Charlie Brown\'s roundabout — it\'s the defining feature of this test centre. It\'s a large, fast roundabout where lane discipline matters more than anywhere else. Approach in the correct lane and maintain appropriate speed. Over-caution here is marked down just as much as recklessness.',
    routeCount: 6,
  },
];

// ─── COMPONENT ─────────────────────────────────────────────

export default function TestCentreExplorer() {
  const [selectedId, setSelectedId] = useState<string>(TEST_CENTRES[0].id);

  const selected = TEST_CENTRES.find((c) => c.id === selectedId) || TEST_CENTRES[0];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <SEO
        title="Driving Test Centre Routes & Tips | Drive Dojo"
        description="Explore local driving test centres with pass rates, notorious trouble spots, and expert instructor tips. Master the exact routes for Goodmayes, Wood Green, Barking, and more."
      />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* ─── HEADER ──────────────────────────────────── */}
          <motion.div
            className="text-center mb-12"
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
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Free Resource</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Test Centre{' '}
              <span className="text-primary">Cheat Sheet</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Select your test centre below to uncover pass rates, notorious trouble spots, and insider tips from our ADIs who know these routes inside out.
            </p>
          </motion.div>

          {/* ─── CENTRE SELECTOR TABS ────────────────────── */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {TEST_CENTRES.map((centre) => (
              <motion.button
                key={centre.id}
                onClick={() => setSelectedId(centre.id)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all ${
                  selectedId === centre.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                <MapPin className="w-4 h-4" />
                {centre.name}
              </motion.button>
            ))}
          </div>

          {/* ─── DASHBOARD CARD ──────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10"
            >
              {/* Main info card */}
              <div className="lg:col-span-2 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{selected.name} Test Centre</h2>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {selected.address}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Navigation className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 text-center">
                    <p className="text-2xl font-black text-white">{selected.passRate}</p>
                    <p className="text-xs text-gray-500">Current Pass Rate</p>
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 text-center">
                    <p className="text-2xl font-black text-white">{selected.routeCount}</p>
                    <p className="text-xs text-gray-500">Known Test Routes</p>
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 text-center">
                    <p className="text-2xl font-black text-white">{selected.distance}</p>
                    <p className="text-xs text-gray-500">From Our Base</p>
                  </div>
                </div>

                {/* Trouble spots */}
                <div className="mb-6">
                  <h3 className="flex items-center gap-2 text-white font-semibold mb-3">
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                    Notorious Trouble Spots
                  </h3>
                  <ul className="space-y-2">
                    {selected.troubleSpots.map((spot, i) => (
                      <li key={i} className="flex items-start gap-3 bg-amber-500/5 border border-amber-500/10 rounded-lg p-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/15 text-amber-400 text-xs font-bold flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-gray-300 text-sm">{spot}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructor's tip */}
                <div>
                  <h3 className="flex items-center gap-2 text-white font-semibold mb-3">
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                    Instructor's Top Tip
                  </h3>
                  <div className="bg-gradient-to-r from-yellow-500/5 to-amber-500/5 border border-yellow-500/10 rounded-xl p-5">
                    <p className="text-gray-300 text-sm leading-relaxed">{selected.instructorsTip}</p>
                  </div>
                </div>
              </div>

              {/* Sidebar — stats and trust */}
              <div className="space-y-4">
                {/* Pass rate gauge */}
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                  <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">Pass Rate Comparison</h3>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500">National Avg: 48%</span>
                      <span className="text-xs font-bold text-primary">{selected.passRate}</span>
                    </div>
                    <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-amber-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: selected.passRate }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {TEST_CENTRES.filter((c) => c.id !== selectedId).slice(0, 3).map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedId(c.id)}
                        className="w-full flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-white/15 transition-all text-left"
                      >
                        <span className="text-sm text-gray-400">{c.name}</span>
                        <span className="text-sm text-gray-300">{c.passRate}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trust badges */}
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Users className="w-4 h-4 text-blue-400" />
                      2,000+ Students Trained
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Award className="w-4 h-4 text-yellow-400" />
                      DVSA Approved ADIs
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Target className="w-4 h-4 text-green-400" />
                      Route-Specific Training
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Car className="w-4 h-4 text-purple-400" />
                      Modern Dual-Control Cars
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ─── CTA BANNER ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px]" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Want to master the exact routes for <span className="text-primary">{selected.name}</span>?
                </h3>
                <p className="text-gray-400">
                  Book your first 2 hours with a local expert for just £49. We'll take you through the specific routes and junctions that examiners use — so nothing comes as a surprise on test day.
                </p>
              </div>
              <Link
                to="/booking"
                className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Book Your £49 Intro
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* ─── ALL CENTRES SUMMARY ──────────────────────── */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">All Test Centres We Cover</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TEST_CENTRES.map((centre) => (
                <button
                  key={centre.id}
                  onClick={() => setSelectedId(centre.id)}
                  className={`text-left p-5 rounded-xl border transition-all ${
                    selectedId === centre.id
                      ? 'border-primary/50 bg-primary/5'
                      : 'border-white/[0.06] bg-white/[0.02] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white">{centre.name}</h3>
                    <span className="text-xs font-mono text-primary">{centre.passRate}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{centre.address}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <MapPin className="w-3 h-3" />
                    {centre.distance} away
                    <ChevronRight className="w-3 h-3 ml-auto" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
