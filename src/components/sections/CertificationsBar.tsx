import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, Star, Zap } from "lucide-react";

type CertificationsBarProps = {
  className?: string;
};

const CertificationsBar = ({ className = "" }: CertificationsBarProps) => {
  const certifications = [
    {
      name: "ORDIT Certified",
      logo: "/images/certifications/ORDIT.png",
      color: "from-blue-500 to-cyan-600",
      emoji: "🏆",
    },
    {
      name: "Driving Standards Agency",
      logo: "/images/certifications/DVSA-ADI.png",
      color: "from-green-500 to-emerald-600",
      emoji: "✅",
    },
    {
      name: "DBS Checked",
      logo: "/images/certifications/DBS.png",
      color: "from-purple-500 to-indigo-600",
      emoji: "🔍",
    },
    {
      name: "Drive Dojo",
     logo: "/images/certifications/DDojo.png",
     color: "from-orange-500 to-red-600",
     emoji: "🚗",
    },
    {
      name: "Pass Plus Certified",
     logo: "/images/certifications/PassPlus.png",
     color: "from-pink-500 to-rose-600",
     emoji: "🎯",
    },
    {
      name: "Driving License",
      logo: "/images/certifications/LicenseUK.png",
      color: "from-amber-500 to-yellow-600",
      emoji: "📜",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);
  const itemsPerView = 3;
  const totalSlides = Math.ceil(certifications.length / itemsPerView);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoplay, totalSlides]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const getVisibleCertifications = () => {
    const startIndex = activeIndex * itemsPerView;
    return certifications.slice(startIndex, startIndex + itemsPerView);
  };

  return (
    <section className={`py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden ${className}`}>
      {/* Dark premium background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center mb-4 bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 px-4 py-2 rounded-full text-sm font-medium text-primary backdrop-blur-md"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Award className="h-4 w-4 mr-2" />
            Professional Certifications
          </motion.div>
          
          <h2 className="text-5xl font-black text-white mb-6">
            Our <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">Credentials</span> ✨
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Fully certified and accredited driving instruction with industry-leading qualifications<span className="animate-pulse">🌟</span>
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 group"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 text-white/70 group-hover:text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 group"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 text-white/70 group-hover:text-white" />
          </button>

          <div className="overflow-hidden px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="flex justify-center gap-6 md:gap-10 lg:gap-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                {getVisibleCertifications().map((cert, index) => (
                  <motion.div
                    key={`${activeIndex}-${index}`}
                    className="flex flex-col items-center justify-center group cursor-pointer"
                    whileHover={{ scale: 1.05, y: -10 }}
                    onMouseEnter={() => setHoveredCert(index)}
                    onMouseLeave={() => setHoveredCert(null)}
                  >
                    <div className="relative mb-4">
                      <div className="absolute -top-3 -right-3 text-2xl animate-bounce">
                        {cert.emoji}
                      </div>
                      
                      {/* Glassmorphism card */}
                      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 group-hover:shadow-2xl group-hover:border-white/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="flex flex-col items-center justify-center p-6">
                          <div className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg`}>
                            <img
                              src={cert.logo}
                              alt={cert.name}
                              className="h-12 w-auto object-contain"
                            />
                          </div>
                          
                          <h3 className="text-lg font-bold text-white text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                            {cert.name}
                          </h3>
                        </div>
                        
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${cert.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: hoveredCert === index ? "100%" : "0%" }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setActiveIndex(index);
                }}
                className={`relative transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-12 h-12 bg-gradient-to-r from-primary to-purple-500'
                    : 'w-8 h-8 bg-white/10 hover:bg-white/20 border border-white/10'
                } rounded-full flex items-center justify-center`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === activeIndex && (
                  <span className="text-white font-bold">{index + 1}</span>
                )}
              </button>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <button
              onClick={() => setAutoplay(!autoplay)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                autoplay
                  ? 'bg-primary/20 text-primary border border-primary/30'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              {autoplay ? '⏸️ Pause' : '▶️ Auto-play'}
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary via-purple-500 to-pink-500 p-1 rounded-3xl">
            <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl px-8 py-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">
                Learn With Confidence 🎓
              </h3>
              <p className="text-slate-400">
                Our instructors are fully qualified and certified, ensuring you receive the highest standard of driving education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsBar;
