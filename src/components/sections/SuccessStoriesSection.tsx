import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Rocket,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";

interface TestimonialCard {
  image: string;
  background: string;
}

const SuccessStoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const testimonialCards: TestimonialCard[] = [
    {
      image:
        "/images/certifications/10.png",
      background: "from-blue-400 to-purple-500",
    },
    {
      image:
        "/images/certifications/12.png",
      background: "from-pink-400 to-purple-500",
    },
    {
      image:
        "/images/certifications/1.png",
      background: "from-green-400 to-teal-500",
    },
    {
      image:
        "/images/certifications/4.png",
      background: "from-orange-400 to-red-500",
    },
    {
      image:
        "/images/certifications/3.png",
      background: "from-indigo-400 to-blue-500",
    },
    {
      image:
        "/images/certifications/5.png",
      background: "from-purple-400 to-indigo-500",
    },
    {
      image:
        "/images/certifications/6.png",
      background: "from-yellow-400 to-orange-500",
    },

    {
      image:
        "/images/certifications/7.png",
      background: "from-yellow-400 to-orange-500",
    },
    {
      image:
        "/images/certifications/8.png",
      background: "from-yellow-400 to-orange-500",
    },
    {
      image:
        "/images/certifications/9.png",
      background: "from-yellow-400 to-orange-500",
    },

    {
      image:
        "/images/certifications/10.png",
      background: "from-purple-400 to-orange-500",
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialCards.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonialCards.length]);

  useEffect(() => {
    if (isInView && sectionRef.current) {
      // Trigger a small confetti burst when section comes into view
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.5, x: 0.5 },
        disableForReducedMotion: true,
      });
    }
  }, [isInView]);

  const triggerConfetti = () => {
    setShowConfetti(true);
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#FFA500", "#FF4500", "#8A2BE2", "#4B0082"],
      shapes: ["circle", "square"],
    });
    setTimeout(() => setShowConfetti(false), 2000);
  };

  const nextStory = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonialCards.length);
  };

  const prevStory = () => {
    setAutoplay(false);
    setActiveIndex(
      (prev) => (prev - 1 + testimonialCards.length) % testimonialCards.length,
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-purple-50"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>

      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="/images/certifications/6.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        className={`absolute top-5 right-5 z-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg cursor-pointer ${showConfetti ? "ring-4 ring-yellow-300 animate-pulse" : ""}`}
        whileHover={{
          scale: 1.05,
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={triggerConfetti}
      >
        <Rocket className="h-4 w-4" />
        <span className="text-sm font-bold">Celebrate Success!</span>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center mb-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            #SuccessStories
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Success Stories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet our proud graduates who passed their driving tests with flying
            colors 🎓🚗
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto mb-12">
          {/* Navigation arrows */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={prevStory}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </motion.button>

          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={nextStory}
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </motion.button>

          {/* Testimonial card carousel */}
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl overflow-hidden"
              >
                <div className="h-96 relative">
                  {/* Testimonial card image with gradient overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={testimonialCards[activeIndex].image}
                      alt="Testimonial"
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${testimonialCards[activeIndex].background} opacity-50`}
                    ></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonialCards.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-gradient-to-r from-purple-500 to-indigo-500" : "bg-gray-300"}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setAutoplay(false);
                  setActiveIndex(index);
                }}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open("/booking", "_blank");
            }}
          >
            <BadgeCheck className="h-5 w-5" />
            <span>Become Our Next Success Story</span>
            <Zap className="h-4 w-4 ml-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
