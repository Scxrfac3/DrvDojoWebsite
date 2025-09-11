import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Clock,
  Home,
  Users,
  Car,
  Ban,
  Sparkles,
  Zap,
  Camera,
  ThumbsUp,
  Flame,
  Wrench as Tool,
} from "lucide-react";

interface ServiceFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  image: string;
  emoji: string;
  color: string;
}

const ServiceFeature = ({
  icon,
  title,
  description,
  index,
  image,
  emoji,
  color,
}: ServiceFeatureProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="h-[280px] perspective-1000 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg">
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div
              className={`absolute inset-0 ${color} opacity-90 group-hover:opacity-95 transition-opacity duration-300`}
            ></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <div>
                <motion.div
                  className="flex items-center mb-2"
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="text-2xl mr-2"
                    animate={{ rotate: isHovered ? [0, -10, 10, -10, 0] : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {emoji}
                  </motion.span>
                  <h3 className="text-xl font-bold drop-shadow-md">{title}</h3>
                </motion.div>
                <p className="text-white/90 drop-shadow-md">{description}</p>
              </div>

              <motion.div
                className="text-xs text-white/80 italic text-center mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                Tap card for more info 👆
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden rotate-y-180 bg-gradient-to-br from-blue-900 to-indigo-900 p-6 text-white shadow-lg">
          <div className="h-full flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 p-2 rounded-full mr-3">{icon}</div>
              <h3 className="text-xl font-bold">{title}</h3>
            </div>

            <p className="text-white/90 mb-4">{description}</p>

            <motion.div
              className="mt-auto flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full backdrop-blur-sm text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more
              </motion.button>
            </motion.div>

            <motion.p
              className="text-xs text-white/80 italic text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Tap to flip back
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface EliteServicesSectionProps {
  title?: string;
  subtitle?: string;
}

const ServicesSection = ({
  title = "Why Choose Drive Dojo? ✨",
  subtitle = "Professional driving instruction with proven results across London and Essex",
}: EliteServicesSectionProps) => {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "DVSA Approved Instructors",
      description:
        "Fully qualified driving instructors with extensive experience and excellent pass rates across London and Essex.",
      image: "/images/certifications/DVSA-ADI.png",
      emoji: "🏆",
      color: "bg-gradient-to-br from-blue-900/95 to-indigo-900/95",
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Flexible Lesson Times",
      description:
        "Convenient scheduling with early morning, evening, and weekend availability to fit your busy lifestyle.",
      image: "/images/certifications/15.png",
      emoji: "⏰",
      color: "bg-gradient-to-br from-green-900/95 to-emerald-900/95",
    },
    {
      icon: <Home className="h-6 w-6 text-white" />,
      title: "Local Pickup Service",
      description:
        "Door-to-door service across London and Essex. We collect you from home, work, or any convenient location.",
      image: "/images/certifications/14.png",
      emoji: "📍",
      color: "bg-gradient-to-br from-purple-900/95 to-pink-900/95",
    },
    {
      icon: <Car className="h-6 w-6 text-white" />,
      title: "Manual & Automatic Cars",
      description:
        "Choose between manual or automatic transmission vehicles. Modern, well-maintained cars for comfortable learning.",
      image: "/images/certifications/18.png",
      emoji: "🚗",
      color: "bg-gradient-to-br from-red-900/95 to-orange-900/95",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Male & Female Instructors",
      description:
        "Professional male and female driving instructors available. Learn with someone you feel comfortable with.",
      image: "/images/certifications/DVSA.png",
      emoji: "👨‍🏫",
      color: "bg-gradient-to-br from-teal-900/95 to-cyan-900/95",
    },
    {
      icon: <Flame className="h-6 w-6 text-white" />,
      title: "First Time Pass Focus",
      description:
        "Structured lessons designed to help you pass your driving test first time. Comprehensive test preparation included.",
      image: "/images/certifications/PassPlus.png",
      emoji: "🎯",
      color: "bg-gradient-to-br from-amber-900/95 to-yellow-900/95",
    },
    {
      icon: <Tool className="h-6 w-6 text-white" />,
      title: "Competitive Pricing",
      description:
        "Transparent pricing with no hidden fees. Block booking discounts available for affordable driving lessons.",
      image: "/images/certifications/C1.png",
      emoji: "💰",
      color: "bg-gradient-to-br from-indigo-900/95 to-purple-900/95",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-magenta-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center mb-3 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Award className="h-4 w-4 mr-2" />
            Professional Excellence
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
              {title}
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ServiceFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              emoji={feature.emoji}
              color={feature.color}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium shadow-lg flex items-center mx-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="mr-2 h-5 w-5" />
            Book Your Driving Lesson
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
