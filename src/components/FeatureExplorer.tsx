import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, MapPin, Receipt, Target, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  benefits: string[];
}

const features: Feature[] = [
  {
    id: 'dashboard',
    title: 'The Master Dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    image: 'https://cdn.prod.website-files.com/628cb4acdaf9087cd633cc6b/641441d08739d82c15e031d0_Example%20Excel%20Financial%20Dashboard.webp',
    description: 'Your complete financial command center. Track earnings, expenses, and student progress all in one unified view.',
    benefits: ['Real-time financial overview', 'Student booking status', 'Income projections']
  },
  {
    id: 'mileage',
    title: 'Automated Mileage',
    icon: <MapPin className="w-5 h-5" />,
    image: 'https://mileiq.com/images/Home.-Benefits-1.jpg',
    description: 'Never manually log mileage again. The Blueprint automatically tracks every journey for tax deductions.',
    benefits: ['GPS auto-tracking', 'HMRC-compliant records', 'Instant tax reports']
  },
  {
    id: 'expenses',
    title: 'Expense Tracker',
    icon: <Receipt className="w-5 h-5" />,
    image: 'https://images.squarespace-cdn.com/content/v1/577c006b725e25e0affed0c1/792c7f21-244c-456e-bdd9-11a67c8f7ebb/3.jpg',
    description: 'Capture receipts instantly and categorize expenses with AI-powered suggestions. Export to HMRC format.',
    benefits: ['Receipt photo capture', 'Auto-categorization', 'VAT calculations']
  },
  {
    id: 'goals',
    title: 'Goal Visualizer',
    icon: <Target className="w-5 h-5" />,
    image: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm3tmtac4sman7ci6tnbd.png',
    description: 'Set income targets and watch your progress. Celebrate milestones with visual achievements and reminders.',
    benefits: ['Income goal tracking', 'Progress milestones', 'Motivational alerts']
  }
];

export default function FeatureExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const goNext = () => {
    if (activeIndex < features.length - 1) {
      navigate(activeIndex + 1);
    }
  };

  const goPrev = () => {
    if (activeIndex > 0) {
      navigate(activeIndex - 1);
    }
  };

  const activeFeature = features[activeIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        className="bg-gray-900/50 backdrop-blur rounded-3xl border border-gray-800 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Inside the Blueprint
                </span>
              </h2>
              <p className="text-gray-400 text-sm">
                Click through to explore the tools that will transform your business
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <Play className="w-4 h-4" />
              <span>Test drive the software</span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => navigate(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl whitespace-nowrap transition-all ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/50 text-white'
                    : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {feature.icon}
                <span className="font-medium">{feature.title}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.img
                    key={activeFeature.id}
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </AnimatePresence>
                <div className="absolute top-4 left-4">
                  <motion.span
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-3 py-1 bg-gray-900/80 backdrop-blur rounded-full text-cyan-400 text-sm font-medium"
                  >
                    {activeIndex + 1} of {features.length}
                  </motion.span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                <motion.button
                  onClick={goPrev}
                  disabled={activeIndex === 0}
                  className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                <motion.button
                  onClick={goNext}
                  disabled={activeIndex === features.length - 1}
                  className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center text-cyan-400">
                      {activeFeature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {activeFeature.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {activeFeature.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-gray-500 text-sm uppercase tracking-wider">
                      Key Benefits
                    </p>
                    <ul className="space-y-2">
                      {activeFeature.benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 text-gray-300"
                        >
                          <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots Indicator (Mobile) */}
              <div className="flex md:hidden justify-center gap-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeIndex === index ? 'w-6 bg-cyan-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden p-4 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">
            Swipe or tap arrows to explore features
          </p>
        </div>
      </motion.div>
    </div>
  );
}