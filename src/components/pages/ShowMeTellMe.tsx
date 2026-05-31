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
} from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import SEO from '../ui/SEO';

// ─── FLASHCARD DATA ────────────────────────────────────────

interface Flashcard {
  id: number;
  type: 'show-me' | 'tell-me';
  question: string;
  answer: string;
}

const FLASHCARDS: Flashcard[] = [
  {
    id: 1,
    type: 'tell-me',
    question: "Tell me how you'd check that the brakes are working before starting a journey.",
    answer: "Brakes should not feel spongy or slack. Brakes should be tested as you set off. The vehicle should not pull to one side.",
  },
  {
    id: 2,
    type: 'tell-me',
    question: "Tell me how you'd check the tyres to ensure they have sufficient tread depth and that their general condition is safe.",
    answer: "No cuts or bulges. 1.6mm of tread depth across the central three-quarters of the breadth of the tyre, and around the entire outer circumference of the tyre.",
  },
  {
    id: 3,
    type: 'tell-me',
    question: "Tell me how you'd check the headlights and tail lights are working.",
    answer: "Turn on the ignition, then operate the switch for the lights. Walk around the vehicle to check both front and rear lights are functioning.",
  },
  {
    id: 4,
    type: 'tell-me',
    question: "Tell me where you'd find the recommended tyre pressures for this car and how tyre pressures should be checked.",
    answer: "In the manufacturer's guide or on a sticker inside the driver's door frame. Use a reliable pressure gauge, check and adjust pressures when tyres are cold. Don't forget the spare tyre. Refit valve caps.",
  },
  {
    id: 5,
    type: 'show-me',
    question: "Show me how you'd check that the direction indicators are working.",
    answer: "Turn on the hazard warning lights. Walk around the vehicle to check that all six indicators (front, rear, and side repeaters) are flashing.",
  },
  {
    id: 6,
    type: 'show-me',
    question: "Show me how you'd check the brake lights are working on this car.",
    answer: "Press the brake pedal. Make use of reflections in windows or doors, or ask someone to help check from behind the vehicle.",
  },
  {
    id: 7,
    type: 'show-me',
    question: "Show me how you'd check the power-assisted steering is working before starting a journey.",
    answer: "With the engine running, turn the steering wheel slightly left and right. It should feel light and responsive with no unusual noises. Alternatively, as you move off, the steering should feel light and not heavy.",
  },
  {
    id: 8,
    type: 'tell-me',
    question: "Tell me how you'd check the engine has sufficient oil.",
    answer: "Open the bonnet, identify the dipstick. With the engine off and cool, pull out the dipstick, wipe it clean, reinsert fully, then pull it out again. The oil level should be between the min and max marks.",
  },
  {
    id: 9,
    type: 'tell-me',
    question: "Tell me how you'd check the engine coolant level.",
    answer: "Open the bonnet, identify the coolant reservoir. The level should be between the min and max lines on the side of the tank. Never remove the cap when the engine is hot — risk of scalding.",
  },
  {
    id: 10,
    type: 'show-me',
    question: "Show me how you'd clean the windscreen using the windscreen washer and wipers.",
    answer: "Turn on the ignition. Operate the control stalk to spray water onto the windscreen and activate the wipers. Most vehicles use pulling the right-hand stalk towards you.",
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
        description="Master all 10 DVSA 'Show Me, Tell Me' questions with interactive flip cards. Practice the exact questions you'll face on your practical driving test. Free resource from Drive Dojo."
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
              Interactive flashcards covering all 10 DVSA practical test questions. Tap any card to reveal the answer — master these before your test and walk in with confidence.
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

          {/* ─── CTA BANNER ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-6 md:p-8 relative overflow-hidden"
          >
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
