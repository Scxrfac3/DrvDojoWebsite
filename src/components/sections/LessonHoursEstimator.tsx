import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Clock,
  Users,
  Car,
  BookOpen,
  Gauge,
  ArrowRight,
  Lightbulb,
  Sparkles,
  ShieldCheck,
  CreditCard,
  CheckCircle,
  Target,
  Calendar,
} from 'lucide-react';

// ─── TYPES ─────────────────────────────────────────────────
type ExperienceOption = 'beginner' | 'some' | 'significant';
type AgeOption = '17-21' | '22-30' | '31+';
type PracticeOption = 'none' | 'occasional' | 'regular';
type PaceOption = '1hour' | '2plus' | 'intensive';
type TheoryOption = 'not-started' | 'studying' | 'passed';

interface FormState {
  age: AgeOption | null;
  experience: ExperienceOption | null;
  privatePractice: PracticeOption | null;
  theoryStatus: TheoryOption | null;
  trainingPace: PaceOption | null;
}

interface CalculationResult {
  professionalHours: number;
  recommendedPrivateHours: number;
  tip: string;
  modifiers: { label: string; value: string }[];
}

// ─── CONSTANTS ─────────────────────────────────────────────
const DVSA_BASELINE = 45;
const HARD_FLOOR = 10;

const EXPERIENCE_MODIFIERS: Record<ExperienceOption, number> = {
  beginner: 0,
  some: -10,
  significant: -30,
};

const AGE_MODIFIERS: Record<AgeOption, number> = {
  '17-21': 0,
  '22-30': 4,
  '31+': 8,
};

const PRACTICE_MODIFIERS: Record<PracticeOption, { modifier: number; recommended: number }> = {
  none: { modifier: 0, recommended: 0 },
  occasional: { modifier: -4, recommended: 10 },
  regular: { modifier: -8, recommended: 20 },
};

const PACE_MODIFIERS: Record<PaceOption, number> = {
  '1hour': 2,
  '2plus': -3,
  intensive: -5,
};

const THEORY_MODIFIERS: Record<TheoryOption, number> = {
  'not-started': 0,
  studying: 0,
  passed: -2,
};

// ─── OPTIONS DATA ──────────────────────────────────────────
const AGE_OPTIONS = [
  { key: '17-21' as const, label: '17–21', icon: Users, desc: 'Young driver' },
  { key: '22-30' as const, label: '22–30', icon: Users, desc: 'Adult learner' },
  { key: '31+' as const, label: '31+', icon: Users, desc: 'Mature learner' },
];

const EXPERIENCE_OPTIONS = [
  { key: 'beginner' as const, label: 'Complete Beginner', icon: Car, desc: 'Never driven before', modifier: '+0 hrs' },
  { key: 'some' as const, label: 'Driven a Little', icon: Gauge, desc: 'Can control pedals & steer', modifier: '-10 hrs' },
  { key: 'significant' as const, label: 'Almost Test Ready', icon: Target, desc: 'Near test standard', modifier: '-30 hrs' },
];

const PRACTICE_OPTIONS = [
  { key: 'none' as const, label: 'No Private Practice', icon: Car, desc: 'Lessons only', modifier: '+0 hrs' },
  { key: 'occasional' as const, label: 'Occasional Practice', icon: Clock, desc: 'Some family/friend sessions', modifier: '-4 hrs' },
  { key: 'regular' as const, label: 'Regular Practice', icon: CheckCircle, desc: 'Frequent private sessions', modifier: '-8 hrs' },
];

const PACE_OPTIONS = [
  { key: '1hour' as const, label: '1 Hour / Week', icon: Clock, desc: 'Slower retention', modifier: '+2 hrs' },
  { key: '2plus' as const, label: '2+ Hours / Week', icon: Sparkles, desc: 'Optimal — recommended', modifier: '-3 hrs', recommended: true },
  { key: 'intensive' as const, label: 'Intensive Course', icon: Gauge, desc: 'Fast-track learning', modifier: '-5 hrs' },
];

const THEORY_OPTIONS = [
  { key: 'not-started' as const, label: 'Not Started', icon: BookOpen, desc: 'Haven\'t begun yet', modifier: '+0 hrs' },
  { key: 'studying' as const, label: 'Currently Studying', icon: BookOpen, desc: 'Learning the theory', modifier: '+0 hrs' },
  { key: 'passed' as const, label: 'Passed ✅', icon: CheckCircle, desc: 'Theory test complete', modifier: '-2 hrs' },
];

// ─── RADIO CARD COMPONENT ──────────────────────────────────
function RadioCard<T extends string>({
  option,
  isSelected,
  onClick,
}: {
  option: { key: T; label: string; icon: React.ComponentType<{ className?: string }>; desc: string; modifier?: string; recommended?: boolean };
  isSelected: boolean;
  onClick: () => void;
}) {
  const Icon = option.icon;
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`relative w-full text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer group ${
        isSelected
          ? 'border-primary bg-primary/10 shadow-lg shadow-primary/10'
          : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
      }`}
    >
      {option.recommended && (
        <span className="absolute -top-2 right-3 px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded-full tracking-wide">
          RECOMMENDED
        </span>
      )}
      <div className="flex items-start gap-3">
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
            isSelected ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-400 group-hover:text-white'
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h4 className={`font-semibold text-sm transition-colors ${isSelected ? 'text-primary' : 'text-white'}`}>
              {option.label}
            </h4>
            {option.modifier && (
              <span className={`text-[11px] font-mono font-semibold px-1.5 py-0.5 rounded ${
                option.modifier.startsWith('-')
                  ? 'bg-green-500/10 text-green-400'
                  : option.modifier === '+0 hrs'
                    ? 'bg-white/5 text-gray-400'
                    : 'bg-yellow-500/10 text-yellow-400'
              }`}>
                {option.modifier}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-0.5">{option.desc}</p>
        </div>
      </div>
      {/* Selection indicator */}
      <div
        className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
          isSelected ? 'border-primary bg-primary' : 'border-white/20'
        }`}
      >
        {isSelected && <CheckCircle className="w-3 h-3 text-white" />}
      </div>
    </motion.button>
  );
}

// ─── PROGRESS BAR ──────────────────────────────────────────
function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = (current / total) * 100;
  return (
    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
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
export default function LessonHoursEstimator() {
  const [form, setForm] = useState<FormState>({
    age: null,
    experience: null,
    privatePractice: null,
    theoryStatus: null,
    trainingPace: null,
  });

  const [showResults, setShowResults] = useState(false);

  const answeredCount = useMemo(
    () => Object.values(form).filter((v) => v !== null).length,
    [form],
  );

  const totalQuestions = 5;
  const allAnswered = answeredCount === totalQuestions;

  // Auto-submit when all questions are answered
  React.useEffect(() => {
    if (allAnswered) {
      setShowResults(true);
    }
  }, [allAnswered]);

  const result: CalculationResult | null = useMemo(() => {
    if (!allAnswered) return null;

    const exp = form.experience!;
    const age = form.age!;
    const practice = form.privatePractice!;
    const pace = form.trainingPace!;
    const theory = form.theoryStatus!;

    let hours = DVSA_BASELINE;
    const modifiersList: { label: string; value: string }[] = [];

    // Baseline
    modifiersList.push({ label: 'DVSA Baseline', value: `${DVSA_BASELINE} hrs` });

    // Experience
    const expMod = EXPERIENCE_MODIFIERS[exp];
    hours += expMod;
    if (expMod !== 0) {
      modifiersList.push({
        label: exp === 'beginner' ? 'Complete Beginner' : exp === 'some' ? 'Some Experience' : 'Near Test Standard',
        value: `${expMod >= 0 ? '+' : ''}${expMod} hrs`,
      });
    }

    // Age
    const ageMod = AGE_MODIFIERS[age];
    hours += ageMod;
    if (ageMod !== 0) {
      modifiersList.push({ label: `Age: ${age}`, value: `+${ageMod} hrs` });
    }

    // Private Practice
    const practiceData = PRACTICE_MODIFIERS[practice];
    hours += practiceData.modifier;
    if (practiceData.modifier !== 0) {
      modifiersList.push({
        label: practice === 'regular' ? 'Regular Private Practice' : 'Occasional Private Practice',
        value: `${practiceData.modifier} hrs`,
      });
    }

    // Training Pace
    const paceMod = PACE_MODIFIERS[pace];
    hours += paceMod;
    if (paceMod !== 0) {
      modifiersList.push({
        label: pace === '1hour' ? '1 Hour/Week Pace' : pace === '2plus' ? '2+ Hours/Week (Optimal)' : 'Intensive Course',
        value: `${paceMod >= 0 ? '+' : ''}${paceMod} hrs`,
      });
    }

    // Theory
    const theoryMod = THEORY_MODIFIERS[theory];
    hours += theoryMod;
    if (theoryMod !== 0) {
      modifiersList.push({ label: 'Theory Test Passed', value: `${theoryMod} hrs` });
    }

    // Hard floor
    const floorApplied = hours < HARD_FLOOR;
    const finalHours = Math.max(HARD_FLOOR, hours);
    if (floorApplied) {
      modifiersList.push({ label: 'Safety Floor Applied', value: `→ Min ${HARD_FLOOR} hrs` });
    }

    // Recommended private hours
    const recommendedPrivateHours = PRACTICE_MODIFIERS[practice].recommended;

    // Tip
    let tip = '';
    if (practice === 'none') {
      tip = '💡 Tip: Securing private practice with family or friends can significantly reduce your professional training costs!';
    } else if (theory === 'not-started' || theory === 'studying') {
      tip = '💡 Tip: Passing your theory test early helps you focus on practical skills and can speed up your progress.';
    } else if (pace === '1hour') {
      tip = '💡 Tip: Consider 2+ hours per week — more frequent lessons improve retention and reduce total hours needed.';
    } else {
      tip = '💡 Tip: Block bookings of 10 hours offer the best value and help you build momentum quickly.';
    }

    return {
      professionalHours: finalHours,
      recommendedPrivateHours,
      tip,
      modifiers: modifiersList,
    };
  }, [form, allAnswered]);

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (showResults) setShowResults(false);
  };

  const resetForm = () => {
    setForm({
      age: null,
      experience: null,
      privatePractice: null,
      theoryStatus: null,
      trainingPace: null,
    });
    setShowResults(false);
  };

  // Scroll to results when they appear
  const resultsRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (showResults && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [showResults]);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#0d0d0d] text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
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

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        {/* ─── HEADER ─────────────────────────────────────── */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Lesson Hours Estimator</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            How Many <span className="text-primary">Driving Lessons</span> Do You Need?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Answer 5 quick questions and we'll calculate your personalised estimate based on DVSA guidelines.
          </p>
        </motion.div>

        {/* ─── FORM ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 md:p-8"
        >
          {/* Progress */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-gray-500">
              {answeredCount} of {totalQuestions} answered
            </span>
            <span className="text-xs text-gray-600">
              {allAnswered ? '✓ Complete' : 'Select an option for each question'}
            </span>
          </div>
          <ProgressBar current={answeredCount} total={totalQuestions} />

          <div className="mt-8 space-y-8">
            {/* Question 1: Age */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold">
                  1
                </span>
                <h3 className="text-white font-semibold text-sm">What is your age group?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {AGE_OPTIONS.map((opt) => (
                  <RadioCard
                    key={opt.key}
                    option={opt}
                    isSelected={form.age === opt.key}
                    onClick={() => updateField('age', opt.key)}
                  />
                ))}
              </div>
            </div>

            {/* Question 2: Experience */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold">
                  2
                </span>
                <h3 className="text-white font-semibold text-sm">What's your current driving experience?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {EXPERIENCE_OPTIONS.map((opt) => (
                  <RadioCard
                    key={opt.key}
                    option={opt}
                    isSelected={form.experience === opt.key}
                    onClick={() => updateField('experience', opt.key)}
                  />
                ))}
              </div>
            </div>

            {/* Question 3: Private Practice */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold">
                  3
                </span>
                <h3 className="text-white font-semibold text-sm">Do you have access to private practice?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PRACTICE_OPTIONS.map((opt) => (
                  <RadioCard
                    key={opt.key}
                    option={opt}
                    isSelected={form.privatePractice === opt.key}
                    onClick={() => updateField('privatePractice', opt.key)}
                  />
                ))}
              </div>
            </div>

            {/* Question 4: Theory Test */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold">
                  4
                </span>
                <h3 className="text-white font-semibold text-sm">What's your theory test status?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {THEORY_OPTIONS.map((opt) => (
                  <RadioCard
                    key={opt.key}
                    option={opt}
                    isSelected={form.theoryStatus === opt.key}
                    onClick={() => updateField('theoryStatus', opt.key)}
                  />
                ))}
              </div>
            </div>

            {/* Question 5: Training Pace */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold">
                  5
                </span>
                <h3 className="text-white font-semibold text-sm">What's your preferred training pace?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PACE_OPTIONS.map((opt) => (
                  <RadioCard
                    key={opt.key}
                    option={opt}
                    isSelected={form.trainingPace === opt.key}
                    onClick={() => updateField('trainingPace', opt.key)}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── RESULTS ─────────────────────────────────────── */}
        <AnimatePresence>
          {showResults && result && (
            <motion.div
              ref={resultsRef}
              initial={{ opacity: 0, y: 30, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mt-8"
            >
              {/* Results card */}
              <div className="bg-white/[0.03] backdrop-blur-md border border-primary/20 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[80px]" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-amber-500/5 rounded-full blur-[80px]" />

                <div className="relative z-10">
                  {/* Main result */}
                  <div className="text-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4"
                    >
                      <Target className="w-8 h-8 text-primary" />
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-400 text-sm uppercase tracking-wider mb-2"
                    >
                      Your Estimated Professional Hours
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, type: 'spring', stiffness: 150 }}
                      className="text-6xl md:text-7xl font-black text-primary"
                    >
                      {result.professionalHours}
                      <span className="text-2xl text-gray-400 font-normal ml-2">Hours</span>
                    </motion.div>

                    {result.recommendedPrivateHours > 0 && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-400 mt-2"
                      >
                        + Suggested Private Practice: <span className="text-white font-semibold">{result.recommendedPrivateHours} Hours</span> with family/friends
                      </motion.p>
                    )}
                  </div>

                  {/* Breakdown */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 mb-6"
                  >
                    <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-3">How We Calculated This</h4>
                    <div className="space-y-2">
                      {result.modifiers.map((mod, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">{mod.label}</span>
                          <span className={`font-mono font-semibold ${
                            mod.value.includes('+') && !mod.value.includes('Min')
                              ? 'text-yellow-400'
                              : mod.value.includes('-')
                                ? 'text-green-400'
                                : mod.value.includes('Min')
                                  ? 'text-primary'
                                  : 'text-gray-300'
                          }`}>
                            {mod.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Tip box */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-start gap-3 bg-amber-500/5 border border-amber-500/15 rounded-xl p-4 mb-6"
                  >
                    <Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">{result.tip}</p>
                  </motion.div>

                  {/* CTA Block — 10-Hour Block Booking */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-6 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[60px]" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg">10-Hour Block Booking</h3>
                          <p className="text-gray-400 text-sm">The smart way to kick off your {result.professionalHours} hours</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                        <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-3 text-center">
                          <p className="text-2xl font-bold text-white">£340</p>
                          <p className="text-xs text-gray-500">One-time payment</p>
                        </div>
                        <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-3 text-center">
                          <p className="text-2xl font-bold text-white">3 × £113.33</p>
                          <p className="text-xs text-gray-500">Interest-free with Klarna</p>
                        </div>
                        <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-3 text-center">
                          <p className="text-2xl font-bold text-green-400">Save £40</p>
                          <p className="text-xs text-gray-500">vs. PAYG £38/hr</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to="/services"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                        >
                          Apply This Estimate to Your Block Booking
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                        <button
                          onClick={resetForm}
                          className="px-6 py-3.5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 rounded-xl transition-all text-sm"
                        >
                          Recalculate
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-[11px] text-gray-600">
                        <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> DVSA Approved</span>
                        <span className="flex items-center gap-1"><CreditCard className="w-3 h-3" /> Klarna Available</span>
                        <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> £34/hr Effective Rate</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
