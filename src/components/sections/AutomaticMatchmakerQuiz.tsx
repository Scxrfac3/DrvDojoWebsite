import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Car,
  Gauge,
  Zap,
  CheckCircle,
  Target,
  RotateCcw,
} from 'lucide-react';

// ─── QUIZ DATA ────────────────────────────────────────────

interface Question {
  id: number;
  question: string;
  optionA: { label: string; desc: string; value: 'auto' | 'manual' };
  optionB: { label: string; desc: string; value: 'auto' | 'manual' };
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Do you plan to drive mostly in heavy city traffic or open roads?',
    optionA: { label: 'Heavy City Traffic', desc: 'Stop-start, junctions, tight spaces', value: 'auto' },
    optionB: { label: 'Open Roads & Motorways', desc: 'Longer journeys, higher speeds', value: 'manual' },
  },
  {
    id: 2,
    question: 'Which matters more to you when learning?',
    optionA: { label: 'Passing as fast as possible', desc: 'I want to get my licence quickly', value: 'auto' },
    optionB: { label: 'Having full vehicle control', desc: 'I enjoy mastering the gears', value: 'manual' },
  },
  {
    id: 3,
    question: 'How do you feel about multitasking while driving?',
    optionA: { label: 'I prefer to focus on the road', desc: 'Less to think about = safer driving', value: 'auto' },
    optionB: { label: 'I like being fully engaged', desc: 'Gears, clutch, and road all at once', value: 'manual' },
  },
  {
    id: 4,
    question: 'What\'s your long-term driving plan?',
    optionA: { label: 'UK & Europe travel', desc: 'I might drive abroad regularly', value: 'manual' },
    optionB: { label: 'UK city & local driving', desc: 'Commuting, school runs, shopping', value: 'auto' },
  },
];

// ─── COMPONENT ─────────────────────────────────────────────

export default function AutomaticMatchmakerQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<('auto' | 'manual')[]>([]);
  const [showResult, setShowResult] = useState(false);

  const progress = ((currentStep) / QUESTIONS.length) * 100;

  const handleAnswer = (value: 'auto' | 'manual') => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (currentStep + 1 >= QUESTIONS.length) {
      setShowResult(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const result = useMemo(() => {
    if (answers.length === 0) return null;
    const autoCount = answers.filter((a) => a === 'auto').length;
    const pct = Math.round((autoCount / answers.length) * 100);
    return { autoPct: pct, manualPct: 100 - pct, recommendation: pct >= 50 ? 'auto' as const : 'manual' as const };
  }, [answers]);

  const reset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-[#0d0d0d] text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 60 + 30,
              height: Math.random() * 60 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.03, 0.08, 0.03],
              scale: [0, 1, 0],
            }}
            transition={{ duration: Math.random() * 8 + 8, repeat: Infinity, delay: Math.random() * 4 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-2xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            <Gauge className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Matchmaker Quiz</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Manual or <span className="text-primary">Automatic</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Answer 4 quick questions and we'll tell you which licence type is your best match.
          </p>
        </motion.div>

        {!showResult ? (
          <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 md:p-8">
            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">Question {currentStep + 1} of {QUESTIONS.length}</span>
                <span className="text-xs text-gray-600">{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-amber-400 rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                  {QUESTIONS[currentStep].question}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleAnswer(QUESTIONS[currentStep].optionA.value)}
                    className="text-left p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  >
                    <div className="text-lg font-semibold text-white mb-1">
                      {QUESTIONS[currentStep].optionA.label}
                    </div>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400">
                      {QUESTIONS[currentStep].optionA.desc}
                    </p>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleAnswer(QUESTIONS[currentStep].optionB.value)}
                    className="text-left p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  >
                    <div className="text-lg font-semibold text-white mb-1">
                      {QUESTIONS[currentStep].optionB.label}
                    </div>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400">
                      {QUESTIONS[currentStep].optionB.desc}
                    </p>
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : result ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/[0.03] backdrop-blur-md border border-primary/20 rounded-2xl p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[80px]" />

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4"
              >
                {result.recommendation === 'auto' ? (
                  <Car className="w-8 h-8 text-primary" />
                ) : (
                  <Gauge className="w-8 h-8 text-primary" />
                )}
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                You are a <span className="text-primary">{result.autoPct}%</span> match for{' '}
                <span className="text-primary">{result.recommendation === 'auto' ? 'Automatic' : 'Manual'}</span>
              </h3>
              <p className="text-gray-400 mb-6">
                {result.recommendation === 'auto'
                  ? 'Automatic lessons let you focus on the road without worrying about gears or clutch control — perfect for city driving and passing faster.'
                  : 'Manual lessons give you full vehicle control and a licence that covers both transmission types — ideal if you plan to drive abroad or want maximum flexibility.'}
              </p>

              {/* Visual bar */}
              <div className="flex items-center gap-4 max-w-md mx-auto mb-6">
                <span className="text-sm text-gray-500 w-16">Automatic</span>
                <div className="flex-1 h-4 bg-white/10 rounded-full overflow-hidden flex">
                  <motion.div
                    className="h-full bg-primary rounded-l-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${result.autoPct}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                  />
                  <motion.div
                    className="h-full bg-gray-600 rounded-r-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${result.manualPct}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                  />
                </div>
                <span className="text-sm text-gray-500 w-16 text-right">Manual</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Book Your £70 Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button
                  onClick={reset}
                  className="flex items-center gap-1.5 px-5 py-3 border border-white/10 text-gray-400 hover:text-white rounded-xl transition-all text-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  Retake Quiz
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
