import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Phone,
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
  const [showEmoji, setShowEmoji] = useState(false);

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


  return (
    <section className="relative w-full overflow-hidden py-0 -mt-1">
      <div className="relative w-full h-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/certifications/HERO1.jpg')",
          }}
        />
        
        {/* Gradient Overlay with reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-indigo-900/40" />
        
        {/* Animated gradient orbs with reduced opacity */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 h-full">
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
                className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full"
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

          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Content */}
            <div className="max-w-3xl mx-auto">
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
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full"
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
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full"
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
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full"
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
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
