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
  title = "ELITE SERVICES AS STANDARD",
  subtitle = "We provide premium services to all our students at no extra cost",
}: EliteServicesSectionProps) => {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Pro-Level Instructors",
      description:
        "Learn from the best! Our instructors are top-tier with advanced certifications and are regularly evaluated to ensure quality.",
      image: "/images/certifications/C1.png",
      emoji: "🏆",
      color: "bg-gradient-to-br from-purple-900/95 to-indigo-900/95",
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Full 2-Hour Sessions",
      description:
        "Get the most out of every lesson with our full 2-hour sessions - no shortcuts, just quality learning time!",
      image: "/images/certifications/15.png",
      emoji: "⏱️",
      color: "bg-gradient-to-br from-blue-900/95 to-slate-900/95",
    },
    {
      icon: <Home className="h-6 w-6 text-white" />,
      title: "Door-to-Door Service",
      description:
        "No need to worry about transportation! We'll pick you up and drop you off wherever is most convenient for you.",
      image: "/images/certifications/14.png",
      emoji: "🏠",
      color: "bg-gradient-to-br from-green-900/95 to-emerald-900/95",
    },
    {
      icon: <Car className="h-6 w-6 text-white" />,
      title: "Choose Your Ride",
      description:
        "Manual or automatic? You decide! Learn in the type of car that suits your style and future driving plans.",
      image: "/images/certifications/18.png",
      emoji: "🚗",
      color: "bg-gradient-to-br from-red-900/95 to-orange-900/95",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Instructor Options",
      description:
        "Choose a male or female instructor based on who you feel most comfortable learning with - your preference matters!",
      image: "/images/certifications/DVSA.png",
      emoji: "👩‍🏫",
      color: "bg-gradient-to-br from-yellow-900/95 to-amber-900/95",
    },
    {
      icon: <Flame className="h-6 w-6 text-white" />,
      title: "Fresh Air Guarantee",
      description:
        "All our vehicles are strictly non-smoking, ensuring a clean and comfortable learning environment for everyone.",
      image:
        "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
      emoji: "💨",
      color: "bg-gradient-to-br from-cyan-900/95 to-blue-900/95",
    },
    {
      icon: <Tool className="h-6 w-6 text-white" />,
      title: "Dual Control Installation",
      description:
        "Official He-Man dual control systems installed by certified technicians. Premium service for driving instructors.",
      image:
        "https://images.unsplash.com/photo-1581093458791-9d09a5c0d6e5?w=800&q=80",
      emoji: "🔧",
      color: "bg-gradient-to-br from-blue-900/95 to-purple-900/95",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950 via-purple-900 to-red-800 z-0 overflow-hidden"></div>
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
            className="inline-flex items-center mb-3 bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Premium Experience
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              {title}
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
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
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium shadow-lg flex items-center mx-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="mr-2 h-5 w-5" />
            Book Your Premium Experience
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
