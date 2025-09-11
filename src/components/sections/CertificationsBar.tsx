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

  // Autoplay functionality
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

  // Get current visible certifications
  const getVisibleCertifications = () => {
    const startIndex = activeIndex * itemsPerView;
    return certifications.slice(startIndex, startIndex + itemsPerView);
  };

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Award className="h-4 w-4 mr-2" />
            Professional Certifications
          </motion.div>
          
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Credentials</span> ✨
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fully certified and accredited driving instruction with industry-leading qualifications
            <span className="animate-pulse">🌟</span>
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 group"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 group"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
          </button>

          {/* Carousel container */}
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
                      {/* Badge with emoji */}
                      <div className="absolute -top-3 -right-3 text-2xl animate-bounce">
                        {cert.emoji}
                      </div>
                      
                      {/* Certification card */}
                      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 group-hover:shadow-2xl group-hover:rotate-1">
                        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        
                        <div className="flex flex-col items-center justify-center p-6">
                          <div className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                            <img
                              src={cert.logo}
                              alt={cert.name}
                              className="h-12 w-auto object-contain"
                            />
                          </div>
                          
                          <h3 className="text-lg font-bold text-gray-900 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                            {cert.name}
                          </h3>
                        </div>
                        
                        {/* Animated progress bar on hover */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 overflow-hidden">
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

          {/* Dots indicator */}
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
                    ? 'w-12 h-12 bg-slate-800'
                    : 'w-8 h-8 bg-gray-300 hover:bg-gray-400'
                } rounded-full flex items-center justify-center`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === activeIndex && (
                  <span className="text-white font-bold">{index + 1}</span>
                )}
              </button>
            ))}
          </div>
          
          {/* Auto-play toggle */}
          <div className="text-center mt-6">
            <button
              onClick={() => setAutoplay(!autoplay)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                autoplay
                  ? 'bg-green-100 text-green-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {autoplay ? '⏸️ Pause' : '▶️ Auto-play'}
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-3xl">
            <div className="bg-white rounded-3xl px-8 py-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Learn With Confidence 🎓
              </h3>
              <p className="text-gray-600">
                Our instructors are fully qualified and certified, ensuring you
                receive the highest standard of driving education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsBar;
