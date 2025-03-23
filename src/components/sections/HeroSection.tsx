import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Phone,
  ChevronRight,
  Star,
  CheckCircle,
  Users,
  Sparkles,
  Zap,
  Trophy,
  MessageCircle,
  Heart,
  Share2,
  Clock,
  Flame,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GradientBackground from "../ui/gradient-background";
import confetti from "canvas-confetti";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  onBookLesson?: () => void;
  onCheckPricing?: () => void;
}

const HeroSection = ({
  title = "Start Your Driving Journey Today",
  subtitle = "Learn to drive with confidence from DVSA-approved instructors. Flexible scheduling, competitive rates, and a high pass rate.",
  ctaPrimaryText = "Book a Lesson",
  ctaSecondaryText = "Call Now",
  onBookLesson = () => (window.location.href = "/booking"),
  onCheckPricing = () => (window.location.href = "tel:+447487228866"),
}: HeroSectionProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeSuccessStory, setActiveSuccessStory] = useState(0);
  const [showEmoji, setShowEmoji] = useState(false);

  // Auto-rotate success stories every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSuccessStory((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Show emoji animation periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setShowEmoji(true);
      setTimeout(() => setShowEmoji(false), 2000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const successStories = [
    {
      name: "Alex, 19",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
      achievement: "Passed First Time!",
      quote:
        "After just 20 hours with Drive Dojo, I passed with only 2 minor faults!",
      emoji: "🚗",
      color: "from-blue-600/80 to-purple-600/80",
      tag: "#FirstTimePasser",
      date: "2 weeks ago",
    },
    {
      name: "Alina S.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
      achievement: "Effective Teaching Methods",
      quote:
        "Instructor's teaching methods were very effective. He broke down complex maneuvers into simple, manageable steps, allowing me to grasp each concept at my own pace.",
      emoji: "💪",
      color: "from-pink-600/80 to-purple-600/80",
      tag: "#PassedWithConfidence",
      date: "3 days ago",
    },
    {
      name: "Alexei W.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      achievement: "From Zero to Hero",
      quote:
        "I begin my driving lessons with no previous knowledge having zero hours of driving lessons or experience. Mamunur was also very flexible in the lesson times.",
      emoji: "🏆",
      color: "from-amber-600/80 to-red-600/80",
      tag: "#PassedFirst",
      date: "1 week ago",
    },
    {
      name: "Sarah K.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
      achievement: "Highway Confidence",
      quote:
        "The motorway confidence course was fantastic! I used to avoid highways completely, but now I feel completely at ease merging and changing lanes even in heavy traffic.",
      emoji: "🛣️",
      color: "from-green-600/80 to-blue-600/80",
      tag: "#RoadConfident",
      date: "5 days ago",
    },
    {
      name: "Raj P.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
      achievement: "International License Success",
      quote:
        "Converting my international license was so much easier with Drive Dojo's specialized course. They helped me adapt to UK roads and pass my test with flying colors!",
      emoji: "🌍",
      color: "from-purple-600/80 to-indigo-600/80",
      tag: "#InternationalDriver",
      date: "1 month ago",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-0 -mt-1">
      <GradientBackground>
        <div className="container mx-auto px-4 py-16 md:py-20 h-full">
          {/* Top Section with Logo and Location */}
          <div className="flex flex-wrap justify-between items-center mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4 md:mb-0">
              <motion.div
                className="inline-flex items-center bg-primary/90 text-primary-foreground px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-bold">Drive Dojo</span>
                <span className="ml-2 text-sm">Driving School</span>
              </motion.div>

              <motion.div
                className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">
                  East London's Premier Driving School
                </span>
              </motion.div>
            </div>

            <motion.div
              className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={triggerConfetti}
            >
              <Flame className="h-4 w-4 text-orange-400" />
              <span className="text-white text-xs font-medium">
                95% Pass Rate
              </span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content - Text and Buttons */}
            <div className="max-w-2xl">
              {/* Hero Text */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {title}
                <motion.span
                  className="inline-block ml-2"
                  animate={{
                    rotate: showEmoji ? [0, 15, -15, 0] : 0,
                    scale: showEmoji ? [1, 1.5, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  🚀
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl text-white/90 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold flex items-center gap-2 shadow-lg"
                  onClick={() => {
                    triggerConfetti();
                    onBookLesson();
                  }}
                >
                  <Calendar className="w-5 h-5" />
                  {ctaPrimaryText}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white flex items-center gap-2"
                  onClick={onCheckPricing}
                >
                  <Phone className="w-5 h-5" />
                  {ctaSecondaryText}
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-xs font-medium">
                    5-star rated
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white text-xs font-medium">
                    DVSA certified
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-xs font-medium">
                    10,000+ students
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-white text-xs font-medium">
                    Flexible scheduling
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - Success Stories */}
            <div className="relative">
              <motion.div
                className="absolute -top-6 -right-6 z-10 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={triggerConfetti}
              >
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-bold">#SuccessStories</span>
              </motion.div>

              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSuccessStory}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Background Image */}
                    <img
                      src={successStories[activeSuccessStory].image}
                      alt={successStories[activeSuccessStory].name}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${successStories[activeSuccessStory].color}`}
                    ></div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <motion.div
                          className="bg-black/30 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-1"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <span className="text-sm">
                            {successStories[activeSuccessStory].tag}
                          </span>
                        </motion.div>

                        <motion.div
                          className="text-xs text-white/80 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full"
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {successStories[activeSuccessStory].date}
                        </motion.div>
                      </div>

                      <div>
                        <motion.div
                          className="flex items-center gap-3 mb-3"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <motion.div
                            className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                            animate={{
                              rotate: [0, 10, -10, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          >
                            {successStories[activeSuccessStory].emoji}
                          </motion.div>

                          <div>
                            <h3 className="text-white font-bold text-xl">
                              {successStories[activeSuccessStory].name}
                            </h3>
                            <div className="flex items-center">
                              <Trophy className="h-4 w-4 text-yellow-400 mr-1" />
                              <p className="text-white/90 text-sm font-medium">
                                {successStories[activeSuccessStory].achievement}
                              </p>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="bg-black/30 backdrop-blur-sm p-4 rounded-lg mb-4"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <p className="text-white text-lg italic">
                            "{successStories[activeSuccessStory].quote}"
                          </p>
                        </motion.div>

                        <motion.div
                          className="flex justify-between items-center"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          <div className="flex space-x-2">
                            <motion.button
                              className="bg-white/20 backdrop-blur-sm p-2 rounded-full"
                              whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(255,255,255,0.3)",
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Heart className="h-5 w-5 text-red-400" />
                            </motion.button>

                            <motion.button
                              className="bg-white/20 backdrop-blur-sm p-2 rounded-full"
                              whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(255,255,255,0.3)",
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <MessageCircle className="h-5 w-5 text-blue-400" />
                            </motion.button>

                            <motion.button
                              className="bg-white/20 backdrop-blur-sm p-2 rounded-full"
                              whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(255,255,255,0.3)",
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Share2 className="h-5 w-5 text-green-400" />
                            </motion.button>
                          </div>

                          <motion.button
                            className="bg-white text-blue-600 hover:bg-white/90 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-1 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onBookLesson}
                          >
                            <Zap className="h-4 w-4" />
                            <span>Start Your Journey</span>
                          </motion.button>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {successStories.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === activeSuccessStory ? "bg-white" : "bg-white/50"}`}
                      onClick={() => setActiveSuccessStory(index)}
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </GradientBackground>

      {/* Special Offer Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-pink-600 py-2 px-4 text-white text-center z-20">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <motion.p
            className="font-medium flex items-center justify-center gap-2"
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Flame className="h-5 w-5 text-yellow-300" />
            Special Offer: Save £50 on 10-hour packages! Limited time only.
          </motion.p>

          <Button
            size="sm"
            className="bg-white text-red-600 hover:bg-gray-100 mt-2 sm:mt-0 font-bold shadow-md"
            onClick={() => {
              triggerConfetti();
              window.location.href = "/booking";
            }}
          >
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
