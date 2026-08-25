import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  Lightbulb,
  ArrowRight,
  Sparkles,
  CheckCircle,
  RotateCcw,
  CreditCard,
  ShieldCheck,
  Star,
  Car,
  Clock,
  Layers,
  Flame,
} from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import SEO from '../ui/SEO';

// ─── FLASHCARD DATA ────────────────────────────────────────
// Full official DVSA set: 14 "Tell Me" + 7 "Show Me" = 21 questions.

interface Flashcard {
  id: number;
  type: 'show-me' | 'tell-me';
  question: string;
  answer: string;
}

const FLASHCARDS: Flashcard[] = [
  // ─── TELL ME (1–14) ─────────────────────────────────────
  {
    id: 1,
    type: 'tell-me',
    question: "Tell me how you'd check that the brakes are working before starting a journey.",
    answer: "Brakes should not feel spongy or slack. Brakes should be tested as you set off. The vehicle should not pull to one side.",
  },
  {
    id: 2,
    type: 'tell-me',
    question: "Tell me where you'd find the information for the recommended tyre pressures for this car and how tyre pressures should be checked.",
    answer: "Manufacturer's guide, use a reliable pressure gauge, check and adjust pressures when tyres are cold, don't forget spare tyre, remember to refit valve caps.",
  },
  {
    id: 3,
    type: 'tell-me',
    question: "Tell me how you make sure your head restraint is correctly adjusted so it provides the best protection in the event of a crash.",
    answer: "The head restraint should be adjusted so the rigid part of the head restraint is at least as high as the eye or top of the ears, and as close to the back of the head as is comfortable. Note: Some restraints might not be adjustable.",
  },
  {
    id: 4,
    type: 'tell-me',
    question: "Tell me how you'd check the tyres to ensure that they have sufficient tread depth and that their general condition is safe to use on the road.",
    answer: "No cuts and bulges, 1.6mm of tread depth across the central three-quarters of the breadth of the tyre, and around the entire outer circumference of the tyre.",
  },
  {
    id: 5,
    type: 'tell-me',
    question: "Tell me how you'd check that the headlights and tail lights are working. You don't need to exit the vehicle.",
    answer: "Explain you'd operate the switch (turn on ignition if necessary), then walk round vehicle (as this is a 'tell me' question, you don't need to physically check the lights).",
  },
  {
    id: 6,
    type: 'tell-me',
    question: "Tell me how you'd know if there was a problem with your anti-lock braking system.",
    answer: "Warning light should illuminate if there is a fault with the anti-lock braking system.",
  },
  {
    id: 7,
    type: 'tell-me',
    question: "Tell me how you'd check the direction indicators are working. You don't need to exit the vehicle.",
    answer: "Explain you'd operate the switch (turn on ignition if necessary), and then walk round vehicle (as this is a 'tell me' question, you don't need to physically check the lights).",
  },
  {
    id: 8,
    type: 'tell-me',
    question: "Tell me how you'd check the brake lights are working on this car.",
    answer: "Explain you'd operate the brake pedal, make use of reflections in windows or doors, or ask someone to help.",
  },
  {
    id: 9,
    type: 'tell-me',
    question: "Tell me how you'd check the power-assisted steering is working before starting a journey.",
    answer: "If the steering becomes heavy, the system may not be working properly. Before starting a journey, 2 simple checks can be made. Gentle pressure on the steering wheel, maintained while the engine is started, should result in a slight but noticeable movement as the system begins to operate. Alternatively turning the steering wheel just after moving off will give an immediate indication that the power assistance is functioning.",
  },
  {
    id: 10,
    type: 'tell-me',
    question: "Tell me how you'd switch on the rear fog light(s) and explain when you'd use it/them. You don't need to exit the vehicle.",
    answer: "Operate switch (turn on dipped headlights and ignition if necessary). Check warning light is on. Explain use.",
  },
  {
    id: 11,
    type: 'tell-me',
    question: "Tell me how you switch your headlight from dipped to main beam and explain how you'd know the main beam is on.",
    answer: "Operate switch (with ignition or engine on if necessary), check with main beam warning light.",
  },
  {
    id: 12,
    type: 'tell-me',
    question: "Open the bonnet and tell me how you'd check that the engine has sufficient oil.",
    answer: "Identify dipstick/oil level indicator, describe check of oil level against the minimum and maximum markers.",
  },
  {
    id: 13,
    type: 'tell-me',
    question: "Open the bonnet and tell me how you'd check that the engine has sufficient engine coolant.",
    answer: "Identify high and low level markings on header tank where fitted or radiator filler cap, and describe how to top up to correct level.",
  },
  {
    id: 14,
    type: 'tell-me',
    question: "Open the bonnet and tell me how you'd check that you have a safe level of hydraulic brake fluid.",
    answer: "Identify reservoir, check level against high and low markings.",
  },

  // ─── SHOW ME (15–21) ────────────────────────────────────
  {
    id: 15,
    type: 'show-me',
    question: "When it's safe to do so, can you show me how you wash and clean the rear windscreen?",
    answer: "Operate the rear wiper and washer control — usually a push or twist function on the wiper stalk — to spray washer fluid and clear the rear screen.",
  },
  {
    id: 16,
    type: 'show-me',
    question: "When it's safe to do so, can you show me how you wash and clean the front windscreen?",
    answer: "Turn on the ignition, then operate the wiper stalk to spray washer fluid and sweep the front wipers until the screen is clear.",
  },
  {
    id: 17,
    type: 'show-me',
    question: "When it's safe to do so, can you show me how you'd switch on your dipped headlights?",
    answer: "Turn on the ignition if needed, operate the headlight switch to dipped beam, and confirm the dipped-beam warning light is on.",
  },
  {
    id: 18,
    type: 'show-me',
    question: "When it's safe to do so, can you show me how you'd set the rear demister?",
    answer: "Press the rear demister button (rectangle with wavy lines). The warning light should illuminate as the rear screen begins to heat up.",
  },
  {
    id: 19,
    type: 'show-me',
    question: "When it's safe to do so, can you show me how you'd operate the horn?",
    answer: "Press the horn pad on the steering wheel (centre or spokes) to sound the horn.",
  },
  {
    id: 20,
    type: 'show-me',
    question: "When it's safe to do so, can you show me how you'd demist the front windscreen?",
    answer: "Turn the fan up, direct warm air at the windscreen, and switch on the front demist/air conditioning to clear condensation quickly.",
  },
  {
    id: 21,
    type: 'show-me',
    question: "When it's safe to do so, can you show me how you'd open and close the side window?",
    answer: "Use the window switch on the driver's door to lower and raise the side window.",
  },
];

// ─── FLIP CARD COMPONENT ───────────────────────────────────

function FlipCard({
  card,
  isFlipped,
  onFlip,
}: {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
}) {
  return (
    <motion.div
      className="perspective-1000 cursor-pointer"
      onClick={onFlip}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="relative w-full preserve-3d"
        style={{ minHeight: '220px' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 backface-hidden rounded-2xl border p-6 flex flex-col ${
            card.type === 'show-me'
              ? 'bg-gradient-to-br from-blue-600/10 to-blue-900/20 border-blue-500/20'
              : 'bg-gradient-to-br from-purple-600/10 to-purple-900/20 border-purple-500/20'
          } bg-[#0d0d0d]`}
        >
          <div className="flex items-center justify-between mb-4">
            <span
              className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                card.type === 'show-me'
                  ? 'bg-blue-500/15 text-blue-400'
                  : 'bg-purple-500/15 text-purple-400'
              }`}
            >
              {card.type === 'show-me' ? '🔧 Show Me' : '🗣️ Tell Me'}
            </span>
            <span className="text-xs text-gray-600">#{card.id}</span>
          </div>
          <div className="flex items-center justify-center flex-1">
            <p className="text-white text-center font-medium leading-relaxed">
              {card.question}
            </p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <span className="text-xs text-gray-600 flex items-center gap-1">
              <HelpCircle className="w-3 h-3" />
              Tap to reveal answer
            </span>
          </div>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 backface-hidden rounded-2xl border p-6 flex flex-col rotate-y-180 ${
            card.type === 'show-me'
              ? 'bg-gradient-to-br from-green-600/10 to-green-900/20 border-green-500/20'
              : 'bg-gradient-to-br from-emerald-600/10 to-emerald-900/20 border-emerald-500/20'
          } bg-[#0d0d0d]`}
        >
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-green-400">
              Correct Answer
            </span>
          </div>
          <div className="flex items-center justify-center flex-1">
            <p className="text-gray-300 text-center leading-relaxed text-sm">
              {card.answer}
            </p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <span className="text-xs text-gray-600 flex items-center gap-1">
              <RotateCcw className="w-3 h-3" />
              Tap to flip back
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── PROGRESS BAR ──────────────────────────────────────────

function ProgressBar({ flipped, total }: { flipped: number; total: number }) {
  const pct = (flipped / total) * 100;
  return (
    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-amber-400 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  );
}

// ─── MAIN COMPONENT ────────────────────────────────────────

export default function ShowMeTellMe() {
  const [flippedIds, setFlippedIds] = useState<Set<number>>(new Set());

  const toggleCard = (id: number) => {
    setFlippedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const flippedCount = flippedIds.size;
  const totalCards = FLASHCARDS.length;
  const allFlipped = flippedCount === totalCards;

  const resetAll = () => setFlippedIds(new Set());

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <SEO
        title="Show Me, Tell Me Flashcards | Free DVSA Test Practice"
        description="Master all 21 DVSA 'Show Me, Tell Me' questions with flip cards — 14 Tell Me and 7 Show Me. Practice the exact questions from your driving test. Free from Drive Dojo."
      />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* ─── HEADER ──────────────────────────────────── */}
          <motion.div
            className="text-center mb-10"
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
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Free Interactive Resource</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Show Me, <span className="text-primary">Tell Me</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Interactive flashcards covering all <span className="text-white font-semibold">21 DVSA</span> practical test questions — <span className="text-white font-semibold">14 'Tell Me'</span> and <span className="text-white font-semibold">7 'Show Me'</span>. Tap any card to reveal the answer and walk into your test with confidence.
            </p>
          </motion.div>

          {/* ─── STATS + RESET BAR ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">
                  {flippedCount} / {totalCards}
                </span>
                <span className="text-gray-500 text-sm">cards reviewed</span>
              </div>
              <div className="w-px h-6 bg-white/10 hidden sm:block" />
              <div className="hidden sm:block w-40">
                <ProgressBar flipped={flippedCount} total={totalCards} />
              </div>
            </div>

            <div className="flex items-center gap-3">
              {allFlipped && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-green-400 text-sm font-semibold flex items-center gap-1"
                >
                  <Sparkles className="w-4 h-4" />
                  All complete!
                </motion.span>
              )}
              <button
                onClick={resetAll}
                className="flex items-center gap-1.5 px-4 py-2 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] rounded-lg text-sm text-gray-400 hover:text-white transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                Reset All
              </button>
            </div>
          </motion.div>

          {/* ─── FLASHCARD GRID ──────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
            {FLASHCARDS.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <FlipCard
                  card={card}
                  isFlipped={flippedIds.has(card.id)}
                  onFlip={() => toggleCard(card.id)}
                />
              </motion.div>
            ))}
          </div>

          {/* ─── SHOW-ME VISUALS (relevant images) ──────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Car className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">See it in a real car</h2>
                <p className="text-gray-500 text-sm">Every 'Show Me' control, demonstrated in our Mercedes A-Class</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
                <img
                  src="/images/certifications/FrontLOW.png"
                  alt="Mercedes A-Class front — headlights, wipers and horn controls"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="text-white font-medium text-sm">Lights, wipers & horn</p>
                  <p className="text-gray-500 text-xs mt-1">Exactly what your examiner will ask you to show.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
                <img
                  src="/images/certifications/explodedMerc.png"
                  alt="Mercedes A-Class dashboard and cockpit controls"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="text-white font-medium text-sm">Cockpit & controls</p>
                  <p className="text-gray-500 text-xs mt-1">Demist, demisters and windows — all at your fingertips.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
                <img
                  src="/images/certifications/MercShard.png"
                  alt="Drive Dojo Mercedes A-Class driving in East London"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="text-white font-medium text-sm">Learn in East London</p>
                  <p className="text-gray-500 text-xs mt-1">Automatic lessons in a modern, easy-to-drive car.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── SERVICES & PRICING CTA ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Turn theory into a pass</h2>
              <p className="text-gray-400">Practise every 'Show Me, Tell Me' question in a real car with a DVSA-approved instructor.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* PAYG */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-white font-semibold">Pay As You Go</span>
                </div>
                <div className="mb-1">
                  <span className="text-3xl font-black text-white">£38</span>
                  <span className="text-gray-500">/hour</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">Flexible automatic lessons, no commitment.</p>
                <ul className="text-sm text-gray-400 space-y-2 mb-6 flex-1">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> DVSA-approved instructor</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Book via live Calendly</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Modern Mercedes A-Class</li>
                </ul>
                <Link
                  to="/booking/payg"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded-xl text-white font-semibold transition-all"
                >
                  Book PAYG
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 10-Hour Block — featured */}
              <div className="rounded-2xl border border-primary/30 bg-primary/[0.06] p-6 flex flex-col relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-[#0d0d0d] text-xs font-bold">
                  MOST POPULAR
                </span>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-primary" />
                  <span className="text-white font-semibold">10-Hour Block</span>
                </div>
                <div className="mb-1">
                  <span className="text-3xl font-black text-white">£340</span>
                  <span className="text-gray-500"> · £34/hr</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">Save £40 vs PAYG. 3 interest-free payments of £113.33 with Klarna.</p>
                <ul className="text-sm text-gray-400 space-y-2 mb-6 flex-1">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Build skills progressively</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Perfect starter package</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Klarna available</li>
                </ul>
                <Link
                  to="/booking/10hour"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                  Book 10 Hours
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Intensive */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Flame className="w-5 h-5 text-primary" />
                  <span className="text-white font-semibold">Intensive Course</span>
                </div>
                <div className="mb-1">
                  <span className="text-3xl font-black text-white">from £650</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">Pass in as little as 2 weeks. Fast-track test included.</p>
                <ul className="text-sm text-gray-400 space-y-2 mb-6 flex-1">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 12–30 hours</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Daily lessons</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Pass pledge</li>
                </ul>
                <Link
                  to="/booking/intensive"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded-xl text-white font-semibold transition-all"
                >
                  Book Intensive
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Bottom conversion banner */}
            <div className="mt-6 bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px]" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Car className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Nervous about the practical test?
                    </h3>
                  </div>
                  <p className="text-gray-400">
                    We cover all of this in your first lesson. Secure your 10-Hour Block Booking today — just 3 interest-free payments of <span className="text-white font-semibold">£113.33</span> with Klarna.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <Link
                    to="/booking/10hour"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                  >
                    Secure Your Block Booking
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <div className="flex items-center gap-3 text-[11px] text-gray-600">
                    <span className="flex items-center gap-1">
                      <CreditCard className="w-3 h-3" /> Klarna Available
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> DVSA Approved
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> 4.9/5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── TIP BOX ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-xl px-6 py-4">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              <p className="text-gray-400 text-sm">
                <span className="text-white font-medium">Pro tip:</span> Examiners ask one 'Show Me' question during the driving part and one 'Tell Me' question at the start. You can't fail for getting one wrong, but it counts as a driving fault — so learn them all!
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
