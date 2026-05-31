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

interface ManoeuvrePage {
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

const MANOEUVRES: Record<string, ManoeuvrePage> = {
  'parallel-parking': {
    slug: 'parallel-parking',
    title: 'Parallel Parking',
    seoTitle: 'How to Parallel Park — Step-by-Step DVSA Guide | Drive Dojo',
    seoDescription: 'Master parallel parking for your UK driving test with our DVSA step-by-step guide. Reference points, common mistakes, and expert tips from East London instructors.',
    icon: '🅿️',
    intro: 'Parallel parking is one of the four possible manoeuvres on your UK driving test, and for many learners it\'s the most intimidating. But with the right reference points and a calm, methodical approach, it becomes one of the most predictable and repeatable skills you\'ll learn.',
    sections: [
      {
        heading: 'Step 1: Position Your Car',
        content: 'Pull up alongside the target vehicle, roughly 1 metre away (about a door\'s width). Align your wing mirror with theirs, or use the reference point your instructor taught you. Stop, select reverse gear, and perform a full 360° observation — check your left blind spot, right blind spot, and all mirrors.',
      },
      {
        heading: 'Step 2: The 45° Angle',
        content: 'Turn the steering wheel one full turn to the left (toward the kerb). Slowly reverse until your car is at roughly a 45° angle to the kerb. As a reference, when the target vehicle\'s rear number plate is roughly in the middle of your rear windscreen, or when your left door mirror aligns with the target vehicle\'s rear bumper — start straightening.',
      },
      {
        heading: 'Step 3: Straighten & Tuck In',
        content: 'Turn the steering wheel to the right while continuing to reverse slowly. Your goal is to bring the front of your car parallel to the kerb. As the front of your car clears the target vehicle, turn the wheel fully right to tuck the front in. Use your left mirror to monitor the kerb — you want to finish about 20-30cm from it.',
      },
      {
        heading: 'Step 4: Final Adjustments',
        content: 'If you\'re slightly too far from the kerb, don\'t panic. You\'re allowed to pull forward and readjust — the DVSA isn\'t testing perfection, they\'re testing control and observation. Use pull-forward adjustments if needed, but always perform full observations before moving in either direction.',
      },
      {
        heading: 'During the Test',
        content: 'The examiner will ask you to "pull up on the left behind that vehicle, please." You\'ll then be asked to "reverse into the space behind." You get one attempt, but you can make minor adjustments. Key marking points: control (smooth, slow), observations (constant 360° checks), and accuracy (within 30cm of the kerb, not touching it).',
      },
    ],
    commonMistakes: [
      'Hitting the kerb — means you misjudged the angle or reversed too fast',
      'Ending up too far from the kerb (more than 30cm — a driving fault)',
      'Not checking blind spots frequently enough during the manoeuvre',
      'Taking too many shunts — suggests lack of control',
      'Forgetting to check the right blind spot before swinging the front out',
    ],
    proTip: 'Pick a clear reference point with your instructor and practice it until it\'s muscle memory. Every car is different — your instructor will give you the exact reference for the Mercedes A-Class we use.',
  },
};

export default function ManoeuvrePage() {
  const { slug } = useParams<{ slug: string }>();
  const manoeuvre = slug ? MANOEUVRES[slug] : undefined;

  if (!manoeuvre) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] text-white">
        <Navbar />
        <main className="pt-24 pb-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Manoeuvre Not Found</h1>
          <p className="text-gray-400 mb-6">This manoeuvre guide isn't available yet.</p>
          <Link to="/" className="text-primary hover:underline">Return home →</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <SEO title={manoeuvre.seoTitle} description={manoeuvre.seoDescription} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-8 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <ChevronRight className="inline w-3 h-3 mx-1" />
            <Link to="/learn-to-drive" className="hover:text-gray-400">Learn to Drive</Link>
            <ChevronRight className="inline w-3 h-3 mx-1" />
            <span className="text-gray-400">{manoeuvre.title}</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
            <motion.div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">DVSA Manoeuvres Guide</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              <span className="mr-3">{manoeuvre.icon}</span>{manoeuvre.title}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">{manoeuvre.intro}</p>
          </motion.div>

          <div className="space-y-6 mb-10">
            {manoeuvre.sections.map((section, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-3">{section.heading}</h2>
                <p className="text-gray-400 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }} className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 mb-6">
            <h2 className="text-lg font-bold text-red-400 mb-3">🚫 Common Mistakes</h2>
            <ul className="space-y-2">
              {manoeuvre.commonMistakes.map((mistake, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300 text-sm"><span className="text-red-400 mt-0.5">✕</span>{mistake}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 }} className="bg-gradient-to-r from-yellow-500/5 to-amber-500/5 border border-yellow-500/10 rounded-2xl p-6 mb-10">
            <h2 className="flex items-center gap-2 text-lg font-bold text-yellow-400 mb-2"><Lightbulb className="w-5 h-5" />Instructor's Pro Tip</h2>
            <p className="text-gray-300 leading-relaxed">{manoeuvre.proTip}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to perfect your {manoeuvre.title.toLowerCase()}?</h3>
            <p className="text-gray-400 mb-5 max-w-xl mx-auto">Book your first 2 hours with a DVSA-approved instructor for just £49. Manoeuvres are our specialty.</p>
            <Link to="/booking" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl">
              Claim Your £49 First Lesson<ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}