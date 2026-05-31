import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Target,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

// ─── SYLLABUS DATA ─────────────────────────────────────────

interface Skill {
  id: string;
  label: string;
}

interface Category {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

const CATEGORIES: Category[] = [
  {
    id: 'basics',
    title: 'Vehicle Basics',
    icon: '🚗',
    skills: [
      { id: 'cockpit-drill', label: 'Cockpit drill & controls' },
      { id: 'moving-off', label: 'Moving off & stopping safely' },
      { id: 'mirrors', label: 'Mirror checks — interior & door mirrors' },
      { id: 'signals', label: 'Using indicators correctly' },
      { id: 'steering', label: 'Steering control (push-pull method)' },
      { id: 'gears', label: 'Gear changes (or automatic mode selection)' },
    ],
  },
  {
    id: 'junctions',
    title: 'Junctions & Roundabouts',
    icon: '🔄',
    skills: [
      { id: 't-junctions', label: 'T-junctions — emerging left & right' },
      { id: 'crossroads', label: 'Crossroads — priority & observation' },
      { id: 'mini-roundabout', label: 'Mini-roundabouts' },
      { id: 'major-roundabout', label: 'Large multi-lane roundabouts' },
      { id: 'slip-roads', label: 'Slip roads — joining & leaving dual carriageways' },
    ],
  },
  {
    id: 'manoeuvres',
    title: 'Manoeuvres',
    icon: '🅿️',
    skills: [
      { id: 'parallel-park', label: 'Parallel parking' },
      { id: 'bay-park', label: 'Bay parking (forward & reverse)' },
      { id: 'right-reverse', label: 'Pulling up on the right & reversing' },
      { id: 'emergency-stop', label: 'Emergency stop' },
      { id: 'hill-start', label: 'Hill start control' },
    ],
  },
  {
    id: 'independent',
    title: 'Independent Driving',
    icon: '🗺️',
    skills: [
      { id: 'sat-nav', label: 'Following sat-nav directions' },
      { id: 'road-signs', label: 'Following road signs independently' },
      { id: 'lane-discipline', label: 'Lane discipline on multi-lane roads' },
      { id: 'dual-carriageway', label: 'Dual carriageway driving (50-70mph)' },
      { id: 'town-driving', label: 'Busy town centre driving' },
      { id: 'rural-roads', label: 'Rural / country road driving' },
    ],
  },
];

// ─── COMPONENT ─────────────────────────────────────────────

export default function DVSASyllabusTracker() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const { progress, totalSkills } = useMemo(() => {
    const total = CATEGORIES.reduce((sum, cat) => sum + cat.skills.length, 0);
    const pct = Math.round((checked.size / total) * 100);
    return { progress: pct, totalSkills: total };
  }, [checked]);

  const toggleSkill = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const isComplete = progress === 100;

  const resetAll = () => setChecked(new Set());

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
            animate={{ opacity: [0.03, 0.08, 0.03], scale: [0, 1, 0] }}
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
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Syllabus Tracker</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            DVSA <span className="text-primary">Syllabus Tracker</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Check off the skills you've already mastered. See exactly what's left before you're test-ready.
          </p>
        </motion.div>

        {/* Sticky progress bar */}
        <div className="sticky top-[72px] z-20 bg-[#0d0d0d]/95 backdrop-blur-md border border-white/[0.08] rounded-2xl p-4 mb-8 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">
              {checked.size} of {totalSkills} skills mastered
            </span>
            <span className="text-lg font-black text-primary">{progress}%</span>
          </div>
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-green-400 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          {isComplete && (
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 mt-2 text-green-400 text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              All skills mastered — you're test ready!
            </motion.p>
          )}
        </div>

        {/* Categories */}
        <div className="space-y-6 mb-8">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: ci * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden"
            >
              <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.02] border-b border-white/[0.06]">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="text-white font-semibold">{cat.title}</h3>
                <span className="ml-auto text-xs text-gray-600">
                  {cat.skills.filter((s) => checked.has(s.id)).length}/{cat.skills.length}
                </span>
              </div>

              <div className="p-4 space-y-2">
                {cat.skills.map((skill) => {
                  const isChecked = checked.has(skill.id);
                  return (
                    <motion.button
                      key={skill.id}
                      onClick={() => toggleSkill(skill.id)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${
                        isChecked
                          ? 'border-green-500/20 bg-green-500/5'
                          : 'border-transparent hover:border-white/[0.08] hover:bg-white/[0.02]'
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          isChecked
                            ? 'border-green-400 bg-green-400'
                            : 'border-white/20'
                        }`}
                      >
                        {isChecked && <CheckCircle className="w-3 h-3 text-[#0d0d0d]" />}
                      </div>
                      <span className={`text-sm transition-colors ${isChecked ? 'text-green-400 line-through' : 'text-gray-400'}`}>
                        {skill.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <AnimatePresence>
          {progress < 80 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px]" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-white font-bold">You have a few skills left to master</h4>
                  <p className="text-gray-400 text-sm">Book a lesson today and tick off the rest with a DVSA expert.</p>
                </div>
                <Link
                  to="/booking"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Book a Lesson
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}

          {progress >= 80 && progress < 100 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6"
            >
              <div className="text-center">
                <h4 className="text-white font-bold mb-2">Almost test ready!</h4>
                <p className="text-gray-400 text-sm mb-3">Just a few more skills to polish. Book a mock test to confirm you're ready.</p>
                <Link
                  to="/booking/mocktest"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/20 border border-green-500/30 text-green-400 font-semibold rounded-xl hover:bg-green-500/30 transition-all text-sm"
                >
                  Book a Mock Test
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reset */}
        {checked.size > 0 && (
          <div className="text-center mt-6">
            <button
              onClick={resetAll}
              className="flex items-center gap-1.5 mx-auto text-sm text-gray-600 hover:text-gray-400 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
