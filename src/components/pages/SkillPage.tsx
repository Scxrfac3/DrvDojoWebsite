import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Lightbulb,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import SEO from '../ui/SEO';

// ─── SKILL DATA ────────────────────────────────────────────

interface SkillPage {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  icon: string;
  intro: string;
  sections: { heading: string; content: string }[];
  commonMistakes: string[];
  proTip: string;
}

const SKILLS: Record<string, SkillPage> = {
  roundabouts: {
    slug: 'roundabouts',
    title: 'Roundabouts',
    seoTitle: 'How to Navigate Roundabouts — Complete Guide for Learner Drivers | Drive Dojo',
    seoDescription: 'Master roundabouts with our step-by-step DVSA guide. Learn mini-roundabouts, multi-lane spirals, and how to avoid the top 5 mistakes that cause test fails. Free resource.',
    icon: '🔄',
    intro: 'Roundabouts are one of the most common causes of driving test failures in the UK. From mini-roundabouts on quiet residential streets to massive multi-lane spirals on A-roads, mastering the correct approach, lane discipline, and exit technique is essential for both your test and real-world driving.',
    sections: [
      {
        heading: 'The Golden Rule: Give Way to the Right',
        content: 'The fundamental principle of all UK roundabouts is simple: give way to traffic already on the roundabout approaching from your right. Always look right before entering. If there\'s a vehicle on the roundabout that will cross your path, wait. Only proceed when you have a safe gap.',
      },
      {
        heading: 'Choosing the Correct Lane',
        content: 'For standard roundabouts: use the left lane for turning left or going straight ahead, and the right lane for turning right. For multi-lane spiral roundabouts (common at test centres like Goodmayes and Wood Green), follow the road markings and signs on approach. Once you\'ve committed to a lane, stay in it — changing lanes mid-roundabout is an instant serious fault.',
      },
      {
        heading: 'Mini-Roundabouts',
        content: 'Mini-roundabouts follow the same rules but require extra care due to their size. You must go around the painted circle — never drive over it. Be especially watchful for other drivers who may treat them casually. Approach slowly, check your right, and proceed when clear.',
      },
      {
        heading: 'Signalling Correctly',
        content: 'Signal left on approach if you\'re taking the first exit. No signal needed on approach for straight ahead — but signal left after you\'ve passed the exit before yours. Signal right on approach for turning right, then switch to a left signal after passing the exit before the one you want.',
      },
      {
        heading: 'Exiting Smoothly',
        content: 'As you pass the exit before yours, check your left mirror, signal left, and drift naturally into the exit lane. Don\'t cut across lanes and don\'t exit from the wrong lane — both are serious faults. Maintain a steady speed and check your mirrors as you exit to ensure you\'re clear of cyclists and motorcycles.',
      },
    ],
    commonMistakes: [
      'Hesitating at the give-way line when there\'s a clear gap',
      'Changing lanes mid-roundabout instead of staying in lane',
      'Failing to signal or signalling too late',
      'Stopping on the roundabout unnecessarily',
      'Entering too fast and losing control',
    ],
    proTip: 'At Goodmayes test centre, examiners love the multi-lane roundabout near the retail park. Commit to your lane early and check mirrors before EVERY exit — hesitation here is the #1 cause of fails.',
  },
  junctions: {
    slug: 'junctions',
    title: 'Junctions',
    seoTitle: 'How to Handle Junctions Safely — Learner Driver Guide | Drive Dojo',
    seoDescription: 'Master T-junctions, crossroads, and slip roads. Learn the MSPSL routine, emerging safely, and the most common junction mistakes that fail driving tests.',
    icon: '🚦',
    intro: 'Junctions are where the majority of serious driving faults occur on UK tests. Whether you\'re emerging from a T-junction, navigating a busy crossroads, or joining a dual carriageway via a slip road, the MSPSL routine (Mirrors, Signal, Position, Speed, Look) is your foundation for every junction.',
    sections: [
      {
        heading: 'The MSPSL Routine',
        content: 'Every junction should be approached using MSPSL: Mirror — check your centre and side mirrors. Signal — indicate your intention in good time. Position — position your vehicle correctly for your intended direction. Speed — adjust your speed to the conditions. Look — assess the junction for hazards, other vehicles, pedestrians, and cyclists before deciding to go.',
      },
      {
        heading: 'T-Junctions: Emerging Left & Right',
        content: 'At closed T-junctions (restricted view), inch forward slowly until you can see clearly in both directions. Use clutch control to crawl at walking pace. Never commit until you\'re certain the road is clear. At open T-junctions with good visibility, you can assess earlier — but still stop at the line if there\'s any doubt.',
      },
      {
        heading: 'Crossroads: Priority & Observation',
        content: 'At unmarked crossroads, no one has automatic priority — proceed with extreme caution. At marked crossroads, follow the signs and road markings. If you\'re turning right, be aware of oncoming traffic also turning right — the "offside-to-offside" rule means you should pass behind each other unless markings indicate otherwise.',
      },
      {
        heading: 'Slip Roads & Dual Carriageways',
        content: 'When joining a dual carriageway from a slip road, match your speed to the traffic on the main carriageway. Use the entire slip road — don\'t stop at the end unless absolutely necessary. Signal right, check your blind spot, and merge smoothly. When leaving, signal left at the first countdown marker (300 yards), reduce speed on the slip road — not on the main carriageway.',
      },
    ],
    commonMistakes: [
      'Emerging when it\'s not safe — misjudging the speed of approaching vehicles',
      'Not looking both ways at closed junctions (especially to the right twice)',
      'Stopping unnecessarily at open junctions with perfect visibility',
      'Failing to check blind spots before joining dual carriageways',
      'Rushing the MSPSL routine — doing everything at once instead of sequentially',
    ],
    proTip: 'In East London, many junctions near test centres have restricted visibility due to parked cars. Crawl forward a few inches at a time and look right, then left, then right again — the "double right check" could save you a serious fault.',
  },
  'emergency-stop': {
    slug: 'emergency-stop',
    title: 'Emergency Stop',
    seoTitle: 'How to Perform an Emergency Stop — DVSA Test Guide | Drive Dojo',
    seoDescription: 'Learn the correct emergency stop technique for your UK driving test. Step-by-step DVSA guide covering braking, clutch control, and the all-clear check. Free resource.',
    icon: '🛑',
    intro: 'The emergency stop is one of the most dramatic moments of your driving test — but it\'s also one of the most straightforward if you know the technique. You\'ll be asked to perform it in about one in three tests. The examiner will say "Stop!" and you must react instantly and safely.',
    sections: [
      {
        heading: 'When the Examiner Says "Stop"',
        content: 'The examiner will give you clear warning: "I will now ask you to perform an emergency stop. When I say STOP, bring the vehicle to a halt as quickly and safely as possible." They will then raise their hand and say "STOP!" — you must react immediately.',
      },
      {
        heading: 'Braking Technique',
        content: 'Hit the brake pedal firmly and rapidly — do not stamp, but apply maximum pressure quickly. Keep both hands firmly on the steering wheel. In an automatic car, the car will do the work — just press the brake hard and hold it. In a manual, you\'d brake and clutch together, but since we teach automatic-only, your focus is purely on braking and steering.',
      },
      {
        heading: 'After the Stop — The All-Clear Check',
        content: 'Once stationary, apply the handbrake (or parking brake) and put the car in Park. Then — and this is critical — perform a full all-around observation: check your left mirror, right mirror, look over your left shoulder, then right shoulder. Only move off when you\'re absolutely sure it\'s safe. The examiner is testing whether you panic and move off without checking — don\'t.',
      },
      {
        heading: 'Skid Control (Automatic Vehicles)',
        content: 'Modern automatic vehicles have ABS (Anti-lock Braking System) and stability control. If you feel the brake pedal pulsing under your foot during an emergency stop, do NOT release the brake — this is ABS working. Keep the pressure on and steer where you want to go. The car will not skid if ABS is functioning correctly.',
      },
    ],
    commonMistakes: [
      'Braking too gently — not treating it as a genuine emergency',
      'Taking hands off the wheel during braking',
      'Moving off without doing proper observations after the stop',
      'Braking before the examiner says STOP (anticipating)',
      'Forgetting to secure the car (handbrake/park) before moving off',
    ],
    proTip: 'The examiner doesn\'t care about tyre smoke or noise — they care about your reaction time and post-stop safety. React FAST, stop HARD, then take your TIME with the all-clear check. A safe emergency stop is better than a fast but risky one.',
  },
};

// ─── COMPONENT ─────────────────────────────────────────────

export default function SkillPage() {
  const { slug } = useParams<{ slug: string }>();
  const skill = slug ? SKILLS[slug] : undefined;

  if (!skill) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] text-white">
        <Navbar />
        <main className="pt-24 pb-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Skill Not Found</h1>
          <p className="text-gray-400 mb-6">The skill guide you're looking for doesn't exist yet.</p>
          <Link to="/" className="text-primary hover:underline">Return home →</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <SEO title={skill.seoTitle} description={skill.seoDescription} />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <ChevronRight className="inline w-3 h-3 mx-1" />
            <Link to="/learn-to-drive" className="hover:text-gray-400">Learn to Drive</Link>
            <ChevronRight className="inline w-3 h-3 mx-1" />
            <span className="text-gray-400">{skill.title}</span>
          </nav>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <motion.div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">DVSA Syllabus — Learn to Drive</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              <span className="mr-3">{skill.icon}</span>
              {skill.title}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">{skill.intro}</p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6 mb-10">
            {skill.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6"
              >
                <h2 className="text-xl font-bold text-white mb-3">{section.heading}</h2>
                <p className="text-gray-400 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Common mistakes */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 mb-6"
          >
            <h2 className="text-lg font-bold text-red-400 mb-3">🚫 Common Mistakes (That Fail Tests)</h2>
            <ul className="space-y-2">
              {skill.commonMistakes.map((mistake, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                  <span className="text-red-400 mt-0.5">✕</span>
                  {mistake}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro tip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-gradient-to-r from-yellow-500/5 to-amber-500/5 border border-yellow-500/10 rounded-2xl p-6 mb-10"
          >
            <h2 className="flex items-center gap-2 text-lg font-bold text-yellow-400 mb-2">
              <Lightbulb className="w-5 h-5" />
              Instructor's Pro Tip
            </h2>
            <p className="text-gray-300 leading-relaxed">{skill.proTip}</p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-6 md:p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to master {skill.title.toLowerCase()}?
            </h3>
            <p className="text-gray-400 mb-5 max-w-xl mx-auto">
              Book a New Driver Assessment — 120 minutes for £70. A DVSA-approved instructor will honestly assess where you are and map the fastest route to your test.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              Book Your £70 Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> DVSA Approved</span>
              <span>4.9/5 Rating</span>
              <span>2,000+ Students</span>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}