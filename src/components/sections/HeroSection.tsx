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
  title = "Master London's Roads. Drive with Confidence.",
  subtitle = "Your Licence, Faster. Expert Lessons. Real Results.",
  ctaPrimaryText = "Book a Lesson",
  ctaSecondaryText = "Call Now",
  onBookLesson = () => (window.location.href = "/booking"),
  onCheckPricing = () => (window.location.href = "tel:+447487228866"),
}: HeroSectionProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeSuccessStory, setActiveSuccessStory] = useState(0);
  const [showEmoji, setShowEmoji] = useState(false);

  // Auto-rotate success stories every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSuccessStory((prev) => (prev + 1) % successStories.length);
    }, 8000);
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
      name: "Amie L K.",
      image:
        "/images/certifications/5.png",
      achievement: "Passed First Time!",
      emoji: "🚗",
      date: "2 weeks ago",
    },
    {
      name: "Alina S.",
      image:
        "/images/certifications/4.png",
      achievement: "Effective Teaching Methods",
      emoji: "💪",
      date: "3 days ago",
    },
    {
      name: "Alexei W.",
      image:
        "/images/certifications/13.png",
      achievement: "Passed with Zero Faults",
      emoji: "🏆",
      date: "1 week ago",
    },
    {
      name: "Hazel C",
      image:
        "/images/certifications/11.png",
      achievement: "Mock test success",
      emoji: "🛣️",
      date: "5 days ago",
    },
    {
      name: "James T",
      image:
        "/images/certifications/9.png",
      achievement: " License Success",
      emoji: "🌍",
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

              <div className="relative h-[400px] rounded-xl shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSuccessStory}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Background Image - Full fit without cropping */}
                    <img
                      src={successStories[activeSuccessStory].image}
                      alt={successStories[activeSuccessStory].name}
                      className="w-full h-full object-contain rounded-xl"
                    />

                    {/* Glass gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl"></div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex justify-end items-start">
                        <motion.div
                          className="text-xs text-white/90 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20"
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
                            className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center text-2xl border border-white/20"
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
                          className="bg-white/10 backdrop-blur-md p-4 rounded-lg mb-4 border border-white/20"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <p className="text-white text-lg">
                            {successStories[activeSuccessStory].achievement}
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
                              className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/20"
                              whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(255,255,255,0.3)",
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Heart className="h-5 w-5 text-red-400" />
                            </motion.button>

                            <motion.button
                              className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/20"
                              whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(255,255,255,0.3)",
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <MessageCircle className="h-5 w-5 text-blue-400" />
                            </motion.button>

                            <motion.button
                              className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/20"
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
                            className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full font-medium text-sm border border-white/20 hover:bg-white/30"
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
