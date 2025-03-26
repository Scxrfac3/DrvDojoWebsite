import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CertificationsBarProps = {
  className?: string;
};

const CertificationsBar = ({ className = "" }: CertificationsBarProps) => {
  const certifications = [
    {
      name: "ORDIT Certified",
      logo: "/images/certifications/ORDIT.png",
      color: "#3B82F6",
    },
    {
      name: "Driving Standards Agency",
      logo: "/images/certifications/DVSA-ADI.png",
      color: "#10B981",
    },
    {
      name: "DBS Checked",
      logo: "/images/certifications/DBS.png",
      color: "#6366F1",
    },
    {
      name: "Drive Dojo",
      logo: "/images/certifications/DDOJO.png",
      color: "#F43F5E",
    },
    {
      name: "Pass Plus Certified",
      logo: "/images/certifications/PassPLUS.png",
      color: "#8B5CF6",
    },
    {
      name: "Driving License",
      logo: "/images/certifications/LicenseUK.pngg",
      color: "#EC4899",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const itemsPerView = 3;
  const totalSlides = Math.ceil(certifications.length / itemsPerView);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);

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
    <section
      className={`w-full py-12 bg-gradient-to-r from-gray-50 to-gray-100 border-y border-gray-200 ${className}`}
    >
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xl font-medium text-gray-700 mb-8">
          Trusted & Certified Driving Instruction
        </h3>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Carousel container */}
          <div className="overflow-hidden px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="flex justify-center gap-8 md:gap-16 lg:gap-24"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {getVisibleCertifications().map((cert, index) => (
                  <motion.div
                    key={`${activeIndex}-${index}`}
                    className="flex flex-col items-center justify-center group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="flex items-center justify-center h-24 w-24 md:h-28 md:w-28 rounded-full bg-white shadow-md p-4 mb-3"
                      style={{ borderBottom: `3px solid ${cert.color}` }}
                    >
                      <img
                        src={cert.logo}
                        alt={cert.name}
                        className="h-14 md:h-16 w-auto object-contain transition-all"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 opacity-100 text-center">
                      {cert.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setActiveIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-6 bg-blue-500" : "w-2 bg-gray-300"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <motion.p
            className="text-sm text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Our instructors are fully qualified and certified, ensuring you
            receive the highest standard of driving education.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsBar;
