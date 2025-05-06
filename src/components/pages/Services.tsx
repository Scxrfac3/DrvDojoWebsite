import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import CertificationsBar from "../sections/CertificationsBar";
import GetStartedSection from "../sections/GetStartedSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import FAQSection from "../sections/FAQSection";
import ServicesSection from "../sections/ServicesSection";
import { Button } from "../ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Award,
  Calendar,
  Car,
  Clock,
  Flame,
  Shield,
  Sparkles,
  Star,
  Zap,
  CheckCircle as CheckCircleIcon,
  ThumbsUp,
  Heart,
  BadgeCheck,
  Lightbulb,
  GraduationCap,
  MapPin,
  Users,
  Smile,
  ChevronRight,
  ChevronLeft,
  BookOpen,
} from "lucide-react";
import confetti from "canvas-confetti";

const DrivingGallery = () => {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4">
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Learning Experience
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Modern Learning Environment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at our state-of-the-art facilities and modern vehicles
            designed to provide the best learning experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              image:
                "/images/certifications/1729007102786.jpg",
              title: "Modern Dual-Control Vehicles",
              description:
                "Learn in our fleet of latest model cars with dual controls for safety",
            },
            {
              image:
                "/images/certifications/C8.png",
              title: "Digital Learning Tools",
              description:
                "Access to digital resources and apps to enhance your learning",
            },
            {
              image:
                "/images/certifications/C2.png",
              title: "Practice Routes",
              description:
                "Carefully designed routes to build your skills progressively",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg h-[300px] relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [animateBackground, setAnimateBackground] = useState(false);
  const [hoverService, setHoverService] = useState(null);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setAnimateBackground(true);
    setTimeout(() => setAnimateBackground(false), 2000);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowDetails(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeDetails = () => {
    setShowDetails(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div
        className={`absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full opacity-20 blur-3xl ${animateBackground ? "animate-pulse-slow" : ""}`}
      ></div>
      <div
        className={`absolute top-1/3 -left-40 w-80 h-80 bg-purple-600/20 rounded-full opacity-20 blur-3xl ${animateBackground ? "animate-pulse-slow" : ""}`}
      ></div>
      <div
        className={`absolute bottom-1/3 -right-40 w-80 h-80 bg-green-600/20 rounded-full opacity-20 blur-3xl ${animateBackground ? "animate-pulse-slow" : ""}`}
      ></div>
      <div
        className={`absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-600/20 rounded-full opacity-20 blur-3xl ${animateBackground ? "animate-pulse-slow" : ""}`}
      ></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.1, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <Navbar />

      <main className="pt-[100px] relative z-10">
        <AnimatePresence mode="wait">
          {showDetails && selectedService ? (
            <ServiceDetails
              service={selectedService}
              onClose={closeDetails}
              triggerConfetti={triggerConfetti}
            />
          ) : (
            <>
              {/* Hero Banner */}
              <section className="relative py-32 overflow-hidden">
                {/* Dynamic background with multiple images */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0.8, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  >
                    <img
                      src="/images/certifications/C5.png"
                      alt="Modern driving lesson"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{ duration: 8, repeat: Infinity, delay: 4 }}
                  >
                    <img
                      src="/images/certifications/18.jpg"
                      alt="Urban driving"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 mix-blend-multiply"></div>

                  {/* Animated particles/shapes */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/20 backdrop-blur-sm"
                        style={{
                          width: Math.random() * 60 + 20,
                          height: Math.random() * 60 + 20,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        initial={{ opacity: 0.1, scale: 0 }}
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                          scale: [0, 1, 0],
                          x: [0, Math.random() * 100 - 50, 0],
                          y: [0, Math.random() * 100 - 50, 0],
                        }}
                        transition={{
                          duration: Math.random() * 10 + 10,
                          repeat: Infinity,
                          delay: Math.random() * 5,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left side - Text content */}
                    <motion.div
                      className="text-left"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255,255,255,0.2)",
                        }}
                      >
                        <span className="mr-2">🔥</span> Most Popular Driving
                        School in 2024
                      </motion.div>

                      <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                          Level Up
                        </span>{" "}
                        Your Driving Skills
                      </motion.h1>

                      <motion.p
                        className="text-xl mb-8 text-white/90"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        From zero to hero in record time. Our instructors are
                        the real MVPs who'll help you crush your driving test.
                      </motion.p>

                      <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg group relative overflow-hidden"
                          asChild
                        >
                          <motion.a
                            href="/booking"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Book Your First Lesson
                            <motion.span
                              className="ml-2 inline-block"
                              initial={{ x: 0 }}
                              animate={{ x: [0, 5, 0] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                              <ArrowRight className="h-4 w-4" />
                            </motion.span>
                            <motion.div
                              className="absolute inset-0 bg-white"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.4 }}
                              style={{ opacity: 0.2 }}
                            />
                          </motion.a>
                        </Button>

                        <Button
                          size="lg"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                          asChild
                        >
                          <motion.a
                            href="#pricing"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Pricing
                          </motion.a>
                        </Button>
                      </motion.div>

                      {/* Social proof */}
                      <motion.div
                        className="mt-8 flex items-center gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map((i) => (
                            <img
                              key={i}
                              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=student${i}`}
                              alt="Student"
                              className="w-8 h-8 rounded-full border-2 border-white"
                            />
                          ))}
                        </div>
                        <div className="text-white/90 text-sm">
                          <span className="font-bold">4.9/5</span> from over{" "}
                          <span className="font-bold">2,000+</span> happy
                          students
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Right side - Interactive visual element */}
                    <motion.div
                      className="relative hidden md:block"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 shadow-xl">
                        {/* Main image */}
                        <motion.div
                          className="absolute inset-0 p-3"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <img
                            src="/images/certifications/DVSA.png"
                            alt="Driving instructor with student"
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </motion.div>

                        {/* Floating elements */}
                        <motion.div
                          className="absolute -right-6 -top-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-4 shadow-lg"
                          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Car className="h-6 w-6 text-white" />
                        </motion.div>

                        <motion.div
                          className="absolute left-4 -bottom-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-3 shadow-lg"
                          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                        >
                          <Zap className="h-5 w-5 text-white" />
                        </motion.div>

                        {/* Stats card */}
                        <motion.div
                          className="absolute right-4 bottom-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 shadow-lg"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="text-white text-sm font-medium">
                            Pass Rate
                          </div>
                          <div className="text-2xl font-bold text-white">
                            98%
                          </div>
                          <div className="w-full h-1.5 bg-white/20 rounded-full mt-1 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: "98%" }}
                              transition={{ delay: 1, duration: 1 }}
                            />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Interactive scroll indicator */}
                <motion.div
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [0, 10, 0] }}
                  transition={{ delay: 0.8, duration: 1.5, repeat: Infinity }}
                  onClick={() =>
                    window.scrollTo({
                      top: window.innerHeight,
                      behavior: "smooth",
                    })
                  }
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-white/80 text-sm mb-2 font-medium">
                    Swipe up to explore
                  </span>
                  <div className="w-10 h-14 border-2 border-white/30 rounded-full flex justify-center p-1 backdrop-blur-sm bg-white/5">
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ y: [0, 20, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </section>

              {/* Packages for New Students */}
              <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-sm"
                      style={{
                        width: Math.random() * 60 + 20,
                        height: Math.random() * 60 + 20,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      initial={{ opacity: 0.1, scale: 0 }}
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [0, 1, 0],
                        x: [0, Math.random() * 100 - 50, 0],
                        y: [0, Math.random() * 100 - 50, 0],
                      }}
                      transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                      }}
                    />
                  ))}
                </div>

                <div className="container mx-auto px-4 relative z-10">
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
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Flame className="h-4 w-4 mr-2" />
                      New Student Offers
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                      Packages for New Students
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Choose the perfect package to start your driving journey
                      with confidence
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 2-Hour Introductory Lesson */}
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 relative h-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="absolute top-4 left-4 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                        🚀 2-Hour Intro
                      </div>
                      <div className="pt-14 pb-6 px-6 bg-gradient-to-b from-blue-50 to-white">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">
                          Introductory Lesson
                        </h3>
                        <p className="text-sm text-gray-500 mb-3">
                          Special offer for new students only - first lesson!
                        </p>
                        <div className="flex items-end mb-4">
                          <span className="text-3xl font-bold text-gray-900">
                            £60.00
                          </span>
                          <span className="text-lg text-gray-500 line-through ml-2 mb-1">
                            £75.00
                          </span>
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Manual or Automatic</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Flexible scheduling</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Door-to-door service</span>
                          </li>
                        </ul>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button
                            className="w-full bg-blue-600 hover:bg-blue-700 group relative overflow-hidden"
                            onClick={triggerConfetti}
                          >
                            Book Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                            <motion.div
                              className="absolute inset-0 bg-white"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.4 }}
                              style={{ opacity: 0.2 }}
                            />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* 10-Hour Package */}
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 relative h-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rotate-12 flex items-end justify-start pb-2 pl-2 text-white font-bold">
                        <span>Popular</span>
                      </div>
                      <div className="absolute top-4 left-4 bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">
                        🔥 Save £50
                      </div>
                      <div className="pt-14 pb-6 px-6 bg-gradient-to-b from-orange-50 to-white">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">
                          10-Hour Package
                        </h3>
                        <p className="text-sm text-gray-500 mb-3">
                          Special offer for new learners - Save £50!
                        </p>
                        <div className="flex items-end mb-4">
                          <span className="text-3xl font-bold text-gray-900">
                            £300.00
                          </span>
                          <span className="text-lg text-gray-500 line-through ml-2 mb-1">
                            £350.00
                          </span>
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Save £50 on individual lessons</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Structured learning plan</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Progress tracking</span>
                          </li>
                        </ul>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button
                            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 group relative overflow-hidden"
                            onClick={triggerConfetti}
                          >
                            Book Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                            <motion.div
                              className="absolute inset-0 bg-white"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.4 }}
                              style={{ opacity: 0.2 }}
                            />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* 20-Hour Package */}
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 relative h-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="absolute top-4 left-4 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                        💯 Best Value
                      </div>
                      <div className="pt-14 pb-6 px-6 bg-gradient-to-b from-green-50 to-white">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">
                          20-Hour Package
                        </h3>
                        <p className="text-sm text-gray-500 mb-3">
                          Best value for complete beginners
                        </p>
                        <div className="flex items-end mb-4">
                          <span className="text-3xl font-bold text-gray-900">
                            £570.00
                          </span>
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Maximum savings</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Comprehensive training</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Theory test support</span>
                          </li>
                        </ul>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 group relative overflow-hidden"
                            onClick={triggerConfetti}
                          >
                            Book Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                            <motion.div
                              className="absolute inset-0 bg-white"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.4 }}
                              style={{ opacity: 0.2 }}
                            />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              <CertificationsBar />

              {/* Why Choose Us */}
              <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Why Choose Drive Dojo?
                  </motion.h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        icon: <Award className="h-8 w-8 text-blue-600" />,
                        title: "Certified Instructors",
                        description:
                          "All our instructors are DVSA approved with years of teaching experience",
                        color: "from-blue-500 to-blue-600",
                        delay: 0,
                      },
                      {
                        icon: <Clock className="h-8 w-8 text-purple-600" />,
                        title: "Flexible Scheduling",
                        description:
                          "Book lessons at times that suit your schedule, including evenings and weekends",
                        color: "from-purple-500 to-purple-600",
                        delay: 0.1,
                      },
                      {
                        icon: <Shield className="h-8 w-8 text-green-600" />,
                        title: "Modern, Safe Vehicles",
                        description:
                          "Learn in dual-controlled cars with the latest safety features",
                        color: "from-green-500 to-green-600",
                        delay: 0.2,
                      },
                      {
                        icon: <Calendar className="h-8 w-8 text-red-600" />,
                        title: "Structured Learning",
                        description:
                          "Follow a personalized curriculum designed to help you progress efficiently",
                        color: "from-red-500 to-red-600",
                        delay: 0.3,
                      },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="glass-card p-6 rounded-xl text-center relative overflow-hidden group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: feature.delay }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <motion.div
                          className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.color}`}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />

                        <motion.div
                          className="bg-gradient-to-br from-blue-50 to-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.8 }}
                        >
                          {feature.icon}
                        </motion.div>

                        <h3 className="text-xl font-semibold mb-2 text-slate-900">
                          {feature.title}
                        </h3>

                        <p className="text-slate-600">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Driving Gallery */}
              <DrivingGallery />

              {/* Services Section with Enhanced Content */}
              <ServicesOverview
                onServiceSelect={handleServiceClick}
                hoveredService={hoverService}
                setHoveredService={setHoverService}
              />

              {/* Services Section with Enhanced Content */}
              <section
                id="pricing"
                className="py-16 bg-gradient-to-r from-red-600 via-yellow-500 to-purple-600"
              >
                <div className="container mx-auto px-4">
                  <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                      Choose Your Perfect Lesson Package
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      We offer a range of packages to suit every driver's needs
                      and experience level
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Beginner Package */}
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">
                          Beginner Package
                        </h3>
                        <div className="flex items-end">
                          <span className="text-3xl font-bold">£35</span>
                          <span className="text-sm ml-1 mb-1">/ hour</span>
                        </div>
                        <p className="text-blue-100 mt-2 text-sm">
                          Perfect for first-time drivers
                        </p>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Fundamentals of vehicle control</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Basic maneuvers and road positioning</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Introduction to road signs and rules</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Confidence building in quiet areas</span>
                          </li>
                        </ul>
                        <Button
                          className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                          onClick={triggerConfetti}
                        >
                          Book Now
                        </Button>
                      </div>
                    </motion.div>

                    {/* Standard Package */}
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">
                          Standard Package
                        </h3>
                        <div className="flex items-end">
                          <span className="text-3xl font-bold">£320</span>
                          <span className="text-sm ml-1 mb-1">/ 10 hours</span>
                        </div>
                        <p className="text-purple-100 mt-2 text-sm">
                          Save £30 compared to hourly rate
                        </p>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>All beginner package features</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>
                              Advanced maneuvers (parallel parking, etc.)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Busy road and junction navigation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Mock test preparation</span>
                          </li>
                        </ul>
                        <Button
                          className="w-full mt-6 bg-purple-600 hover:bg-purple-700"
                          onClick={triggerConfetti}
                        >
                          Book Now
                        </Button>
                      </div>
                    </motion.div>

                    {/* Intensive Package */}
                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">
                          Intensive Package
                        </h3>
                        <div className="flex items-end">
                          <span className="text-3xl font-bold">£600</span>
                          <span className="text-sm ml-1 mb-1">/ 20 hours</span>
                        </div>
                        <p className="text-green-100 mt-2 text-sm">
                          Best value for quick progress
                        </p>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>All standard package features</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Comprehensive test routes practice</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Night and adverse weather driving</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Free theory test support materials</span>
                          </li>
                        </ul>
                        <Button
                          className="w-full mt-6 bg-green-600 hover:bg-green-700"
                          onClick={triggerConfetti}
                        >
                          Book Now
                        </Button>
                      </div>
                    </motion.div>
                  </div>

                  <div className="mt-16">
                    <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
                      Specialized Training
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          title: "Pass Plus",
                          price: "£200",
                          description:
                            "Additional training for new drivers to build confidence",
                          color: "bg-blue-100 text-blue-800",
                          icon: <Award className="h-6 w-6" />,
                        },
                        {
                          title: "Motorway Lessons",
                          price: "£45/hr",
                          description:
                            "Specialized training for high-speed motorway driving",
                          color: "bg-purple-100 text-purple-800",
                          icon: <Car className="h-6 w-6" />,
                        },
                        {
                          title: "Refresher Course",
                          price: "£40/hr",
                          description:
                            "For licensed drivers who need to rebuild confidence",
                          color: "bg-amber-100 text-amber-800",
                          icon: <Zap className="h-6 w-6" />,
                        },
                        {
                          title: "Theory Test Prep",
                          price: "£30/hr",
                          description:
                            "One-on-one guidance for theory test preparation",
                          color: "bg-green-100 text-green-800",
                          icon: <BookOpen className="h-6 w-6" />,
                        },
                      ].map((service, index) => (
                        <motion.div
                          key={index}
                          className="rounded-xl p-6 border border-gray-200 flex flex-col h-full"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
                          }}
                        >
                          <div
                            className={`${service.color} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}
                          >
                            {service.icon}
                          </div>
                          <h4 className="text-lg font-semibold mb-2">
                            {service.title}
                          </h4>
                          <p className="text-2xl font-bold text-gray-900 mb-2">
                            {service.price}
                          </p>
                          <p className="text-gray-600 text-sm flex-grow">
                            {service.description}
                          </p>
                          <Button
                            variant="outline"
                            className="mt-4 w-full"
                            onClick={triggerConfetti}
                          >
                            Learn More
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Booking Process */}
              <GetStartedSection />

              {/* Testimonials */}
              <TestimonialsSection />

              {/* FAQ Section */}
              <FAQSection />

              {/* Call to Action */}
              <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Ready to Start Your Driving Journey?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                      Book your first lesson today and take the first step
                      towards driving confidence.
                    </p>
                  </motion.div>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        size="lg"
                        variant="secondary"
                        className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg group"
                        onClick={() => {
                          triggerConfetti();
                          window.location.href = "/booking";
                        }}
                      >
                        <motion.span
                          className="flex items-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Book a Lesson
                          <motion.span
                            className="ml-2 inline-block"
                            initial={{ x: 0 }}
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.span>
                        </motion.span>
                      </Button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white/20"
                        onClick={() => (window.location.href = "/contact")}
                      >
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Contact Us
                        </motion.span>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </section>
            </>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

// Service Details Component
const ServiceDetails = ({ service, onClose, triggerConfetti }) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <motion.div
      className="min-h-screen w-full py-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.button
          onClick={onClose}
          className="flex items-center text-white mb-6 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-slate-700/50 transition-colors"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="mr-2 h-5 w-5" />
          Back to all services
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left column - Image and quick info */}
          <div className="lg:col-span-2">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center mb-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${service.colorClass}`}
                  >
                    {service.icon}
                  </div>
                  <h1 className="text-2xl font-bold text-white">
                    {service.title}
                  </h1>
                </div>
                <div className="flex items-center text-white/90 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="mr-4">{service.duration}</span>
                  <Users className="h-4 w-4 mr-1" />
                  <span>{service.students}+ students</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-3xl font-bold text-white">
                  {service.price}
                </div>
                <div className="text-lg text-white/70">{service.priceUnit}</div>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group relative overflow-hidden"
                  onClick={() => {
                    triggerConfetti();
                    window.location.href = "/booking";
                  }}
                >
                  Book This Course
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.4 }}
                    style={{ opacity: 0.2 }}
                  />
                </Button>
              </motion.div>

              <div className="mt-4 text-center">
                <p className="text-white/70 text-sm">No payment required now</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                What's included
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right column - Details */}
          <div className="lg:col-span-3">
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Tabs
                defaultValue="overview"
                className="w-full"
                onValueChange={setActiveTab}
              >
                <TabsList className="grid w-full grid-cols-3 bg-slate-800/80 p-1 rounded-t-xl">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="curriculum"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg"
                  >
                    Curriculum
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg"
                  >
                    Reviews
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    About this course
                  </h2>
                  <div className="text-white/90 space-y-4">
                    {service.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Learning outcomes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-white/90">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Who this course is for
                    </h3>
                    <div className="space-y-3">
                      {service.audience.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <Users className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-white/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="curriculum" className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Course Curriculum
                  </h2>
                  <div className="space-y-4">
                    {service.curriculum.map((module, index) => (
                      <motion.div
                        key={index}
                        className="bg-slate-700/50 rounded-lg p-4 border border-slate-600"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h3 className="text-lg font-bold text-white mb-2">
                          {module.title}
                        </h3>
                        <div className="text-white/70 text-sm mb-3">
                          {module.duration} • {module.lessons} lessons
                        </div>
                        <ul className="space-y-2">
                          {module.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-start">
                              <GraduationCap className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-1" />
                              <span className="text-white/90">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">
                      Student Reviews
                    </h2>
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-white mr-2">
                        {service.rating}
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(service.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {service.reviews.map((review, index) => (
                      <motion.div
                        key={index}
                        className="bg-slate-700/50 rounded-lg p-4 border border-slate-600"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <img
                              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.name}`}
                              alt={review.name}
                              className="w-10 h-10 rounded-full mr-3"
                            />
                            <div>
                              <div className="font-bold text-white">
                                {review.name}
                              </div>
                              <div className="text-white/70 text-sm">
                                {review.date}
                              </div>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-white/90">{review.comment}</p>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>

            <motion.div
              className="mt-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-800/30 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 text-yellow-400 mr-2" />
                <h3 className="text-xl font-bold text-white">
                  Not sure if this is right for you?
                </h3>
              </div>
              <p className="text-white/90 mb-4">
                Our instructors can help you choose the perfect course based on
                your experience level and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-blue-700 hover:bg-gray-100"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Personalized Advice
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => {
                    triggerConfetti();
                    window.location.href = "/booking";
                  }}
                >
                  Book a Trial Lesson
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Service Card Component
const ServiceCard = ({ service, onClick, isHovered, onHover, onLeave }) => {
  return (
    <motion.div
      className={`bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 shadow-lg relative h-full ${isHovered ? "ring-2 ring-blue-500" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={() => onClick(service)}
      onHoverStart={() => onHover(service.id)}
      onHoverEnd={() => onLeave()}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${service.colorClass}`}
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-white">{service.price}</div>
          <div className="text-sm text-white/70">{service.priceUnit}</div>
        </div>

        <p className="text-white/80 mb-4 line-clamp-2">
          {service.shortDescription}
        </p>

        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-white/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button className={`w-full ${service.buttonClass}`}>
            View Details
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Services Overview Component
const ServicesOverview = ({
  onServiceSelect,
  hoveredService,
  setHoveredService,
}) => {
  return (
    <section className="py-16 bg-slate-800/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Car className="h-4 w-4 mr-2" />
            Driving Courses
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Explore Our Driving Courses
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Choose from our range of professional driving courses designed to
            suit your needs and experience level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={onServiceSelect}
              isHovered={hoveredService === service.id}
              onHover={setHoveredService}
              onLeave={() => setHoveredService(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Data
const servicesData = [
  {
    id: "beginner",
    title: "Beginner Course",
    price: "£65",
    priceUnit: "/2hour",
    shortDescription:
      "Perfect for first-time drivers with no previous experience",
    image:
      "/images/certifications/8.png",
    icon: <Car className="h-5 w-5 text-blue-400" />,
    colorClass: "bg-blue-600/30 text-blue-400",
    buttonClass: "bg-blue-600 hover:bg-blue-700",
    category: "beginner",
    duration: "Flexible hours",
    students: 1500,
    rating: 4.8,
    features: [
      "Fundamentals of vehicle control",
      "Basic maneuvers and road positioning",
      "Introduction to road signs and rules",
      "Confidence building in quiet areas",
      "Personalized learning pace",
    ],
    description: [
      "Our Beginner Course is designed specifically for those who have never sat behind the wheel before. We understand that starting your driving journey can be both exciting and nerve-wracking, which is why our patient instructors create a supportive environment where you can build confidence at your own pace.",
      "This course focuses on developing the fundamental skills needed to control the vehicle safely. You'll start in quiet, low-traffic areas where you can get comfortable with the basic controls and gradually progress to more challenging scenarios as your confidence grows.",
      "Each lesson is tailored to your individual learning style and progress, ensuring you develop solid foundations for your driving future.",
    ],
    outcomes: [
      "Confidently control the vehicle's basic functions",
      "Perform essential maneuvers like turning and reversing",
      "Understand and respond to road signs and markings",
      "Develop spatial awareness and road positioning",
      "Build the confidence to progress to busier roads",
    ],
    audience: [
      "Complete beginners with no driving experience",
      "Nervous first-time drivers who need extra support",
      "Young learners (17+) starting their driving journey",
      "Anyone wanting to build confidence before committing to a full course",
    ],
    curriculum: [
      {
        title: "Module 1: Getting Started",
        duration: "2-4 hours",
        lessons: 2,
        topics: [
          "Introduction to the vehicle controls",
          "Pre-driving checks and adjustments",
          "Starting, moving off and stopping safely",
          "Understanding the clutch control (manual only)",
        ],
      },
      {
        title: "Module 2: Basic Maneuvers",
        duration: "4-6 hours",
        lessons: 3,
        topics: [
          "Steering techniques and control",
          "Changing gears smoothly (manual only)",
          "Reversing in a straight line",
          "Turning left and right at junctions",
        ],
      },
      {
        title: "Module 3: Road Awareness",
        duration: "4-6 hours",
        lessons: 3,
        topics: [
          "Understanding road markings and signs",
          "Introduction to the Highway Code",
          "Developing observation skills",
          "Dealing with simple junctions",
        ],
      },
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        rating: 5,
        date: "2 months ago",
        comment:
          "As someone who was terrified of driving, my instructor made me feel so comfortable! Started from absolute zero and now I'm confidently driving on main roads. Highly recommend for nervous beginners!",
      },
      {
        name: "James Wilson",
        rating: 5,
        date: "3 months ago",
        comment:
          "Great experience for a first-time driver. My instructor was patient and explained everything clearly. The step-by-step approach really helped build my confidence.",
      },
      {
        name: "Aisha Patel",
        rating: 4,
        date: "1 month ago",
        comment:
          "Really good for complete beginners. I was nervous at first but by the end of my first lesson I felt much more confident. The instructor adapted to my learning pace perfectly.",
      },
    ],
  },
  {
    id: "standard",
    title: "Standard Package",
    price: "£320",
    priceUnit: "/10 hours",
    shortDescription:
      "Our most popular package with structured learning and progress tracking",
    image:
      "/images/certifications/C7.png",
    icon: <Award className="h-5 w-5 text-purple-400" />,
    colorClass: "bg-purple-600/30 text-purple-400",
    buttonClass:
      "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
    category: "intermediate",
    duration: "10 hours",
    students: 2800,
    rating: 4.9,
    features: [
      "Save £30 compared to hourly rate",
      "Structured learning plan tailored to you",
      "Progress tracking after each lesson",
      "Advanced maneuvers and techniques",
      "Busy road and junction navigation",
      "Mock test preparation",
    ],
    description: [
      "Our Standard Package is our most popular option, offering a comprehensive and structured approach to learning to drive. This 10-hour package is perfect for those who have some basic experience or have completed our Beginner Course and are ready to develop their skills further.",
      "With this package, you'll receive a personalized learning plan that focuses on developing your skills progressively. Your instructor will track your progress after each lesson, ensuring you're constantly improving and addressing any areas that need extra attention.",
      "By the end of this package, you'll have covered all the essential skills needed for the practical driving test, from basic maneuvers to more complex road situations and junctions.",
    ],
    outcomes: [
      "Navigate complex junctions and roundabouts confidently",
      "Master advanced maneuvers like parallel parking and bay parking",
      "Develop defensive driving techniques",
      "Handle busy urban roads and dual carriageways",
      "Prepare effectively for the practical driving test",
      "Gain confidence in independent driving",
    ],
    audience: [
      "Drivers who have completed a beginner course",
      "Those with some driving experience looking to progress",
      "Learners preparing for their practical driving test",
      "Drivers looking for a structured learning experience",
    ],
    curriculum: [
      {
        title: "Module 1: Building on Basics",
        duration: "2 hours",
        lessons: 1,
        topics: [
          "Assessment of current skill level",
          "Refining basic control skills",
          "Developing observation techniques",
          "Introduction to busier roads",
        ],
      },
      {
        title: "Module 2: Advanced Maneuvers",
        duration: "4 hours",
        lessons: 2,
        topics: [
          "Parallel parking techniques",
          "Bay parking (forward and reverse)",
          "Emergency stops and hazard awareness",
          "Reversing around corners",
        ],
      },
      {
        title: "Module 3: Complex Road Situations",
        duration: "2 hours",
        lessons: 1,
        topics: [
          "Multi-lane roundabouts",
          "Complex junction management",
          "Dual carriageway driving",
          "Lane changing and overtaking",
        ],
      },
      {
        title: "Module 4: Test Preparation",
        duration: "2 hours",
        lessons: 1,
        topics: [
          "Mock test practice",
          "Independent driving practice",
          "Common test routes in your area",
          "Managing test anxiety",
        ],
      },
    ],
    reviews: [
      {
        name: "Michael Chen",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "The 10-hour package was perfect for me. My instructor created a personalized plan that focused on my weak areas. Passed my test first time with only 2 minor faults!",
      },
      {
        name: "Emma Thompson",
        rating: 5,
        date: "1 month ago",
        comment:
          "Excellent structured approach. I loved getting the progress report after each lesson so I knew exactly what to work on. The mock tests were particularly helpful for building confidence.",
      },
      {
        name: "David Oyelowo",
        rating: 4,
        date: "3 weeks ago",
        comment:
          "Great value for money compared to individual lessons. The instructor was very knowledgeable and helped me improve quickly. Would definitely recommend this package.",
      },
    ],
  },
  {
    id: "intensive",
    title: "Intensive Course",
    price: "£600",
    priceUnit: "/20 hours",
    shortDescription:
      "Fast-track your learning with our comprehensive intensive course",
    image:
      "/images/certifications/9.png",
    icon: <Zap className="h-5 w-5 text-green-400" />,
    colorClass: "bg-green-600/30 text-green-400",
    buttonClass:
      "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",
    category: "advanced",
    duration: "20 hours",
    students: 1200,
    rating: 4.7,
    features: [
      "Comprehensive training in a condensed timeframe",
      "All standard package features included",
      "Test routes practice and mock tests",
      "Night and adverse weather driving",
      "Theory test support materials",
      "Flexible scheduling options",
    ],
    description: [
      "Our Intensive Course is designed for those who want to learn to drive quickly and efficiently. This comprehensive 20-hour package covers everything you need to know to pass your test, from basic controls to advanced maneuvers and test preparation.",
      "Perfect for those with a deadline such as a job opportunity or university start date, this course can be completed in as little as one week or spread out according to your availability.",
      "You'll receive the same high-quality instruction as our other packages, but in a more concentrated format to help you progress rapidly while ensuring you develop safe driving habits for life.",
    ],
    outcomes: [
      "Develop all the skills needed to pass your driving test",
      "Gain confidence in a wide range of driving conditions",
      "Learn to handle complex road situations safely",
      "Master all required test maneuvers",
      "Develop effective strategies for managing test anxiety",
      "Become a safe, confident driver in a shorter timeframe",
    ],
    audience: [
      "Students with upcoming test dates",
      "People who need to learn quickly for work or education",
      "Those who prefer an immersive learning experience",
      "Learners who have some previous experience and want to progress rapidly",
    ],
    curriculum: [
      {
        title: "Module 1: Foundations & Assessment",
        duration: "4 hours",
        lessons: 2,
        topics: [
          "Skill assessment and personalized plan creation",
          "Vehicle control fundamentals review",
          "Basic maneuvers practice",
          "Urban driving introduction",
        ],
      },
      {
        title: "Module 2: Intermediate Skills",
        duration: "6 hours",
        lessons: 3,
        topics: [
          "Complex junction navigation",
          "Roundabout techniques",
          "Lane discipline and positioning",
          "Speed management in various environments",
        ],
      },
      {
        title: "Module 3: Advanced Techniques",
        duration: "6 hours",
        lessons: 3,
        topics: [
          "All required test maneuvers",
          "Dual carriageway and high-speed road driving",
          "Independent driving practice",
          "Hazard perception and defensive driving",
        ],
      },
      {
        title: "Module 4: Test Preparation",
        duration: "4 hours",
        lessons: 2,
        topics: [
          "Full mock driving tests",
          "Test route familiarity",
          "Common test mistakes and how to avoid them",
          "Final assessment and test readiness evaluation",
        ],
      },
    ],
    reviews: [
      {
        name: "Jaswinder Patel",
        rating: 5,
        date: "1 month ago",
        comment:
          "I needed to pass my test quickly for a new job and the intensive course was perfect. Completed it in 8 days and passed first time! The instructor was fantastic and really helped me build confidence quickly.",
      },
      {
        name: "Maria J",
        rating: 4,
        date: "2 months ago",
        comment:
          "Great course that helped me pass after failing with another instructor. The intensive lessons worked well for me as I could fully focus on driving without forgetting things between lessons.",
      },
      {
        name: "Omar H",
        rating: 5,
        date: "6 weeks ago",
        comment:
          "Excellent experience! I was nervous about the intensive approach but it actually helped me progress much faster than weekly lessons. The instructor was patient and professional throughout.",
      },
    ],
  },
  {
    id: "pass-plus",
    title: "Pass Plus Course",
    price: "£100",
    priceUnit: "/course",
    shortDescription:
      "Build confidence and skills after passing your test with this government-recognized course",
    image:
      "/images/certifications/PassPlus.png",
    icon: <Award className="h-5 w-5 text-yellow-400" />,
    colorClass: "bg-yellow-600/30 text-yellow-400",
    buttonClass:
      "bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700",
    category: "post-test",
    duration: "6 hours",
    students: 850,
    rating: 4.8,
    features: [
      "Government-recognized certification",
      "Potential insurance discounts",
      "Motorway driving experience",
      "Rural and urban driving skills",
      "Night and adverse weather driving",
      "Advanced hazard perception training",
    ],
    description: [
      "The Pass Plus course is designed for newly qualified drivers who want to build their confidence and skills after passing their test. This government-recognized course covers areas not fully explored in standard driving lessons, such as motorway driving and handling difficult weather conditions.",
      "Many insurance companies offer discounts to drivers who have completed the Pass Plus certification, potentially saving you money on your insurance premiums while making you a safer, more confident driver.",
      "The course consists of six modules covering different driving environments and conditions, providing you with valuable experience that will benefit you throughout your driving career.",
    ],
    outcomes: [
      "Gain confidence driving on motorways and dual carriageways",
      "Develop skills for driving in adverse weather conditions",
      "Improve your ability to handle busy urban traffic",
      "Learn advanced techniques for rural road driving",
      "Enhance your night driving capabilities",
      "Receive a certificate that may help reduce insurance costs",
    ],
    audience: [
      "Newly qualified drivers who want to build confidence",
      "Those who want to gain experience in a variety of driving conditions",
      "Drivers looking to potentially reduce their insurance premiums",
      "Anyone wanting to become a safer, more skilled driver",
    ],
    curriculum: [
      {
        title: "Module 1: Town Driving",
        duration: "1 hour",
        lessons: 1,
        topics: [
          "Advanced urban driving techniques",
          "Complex junction management",
          "Busy traffic navigation",
          "Pedestrian and cyclist awareness",
        ],
      },
      {
        title: "Module 2: Rural Roads",
        duration: "1 hour",
        lessons: 1,
        topics: [
          "Narrow road techniques",
          "Dealing with unexpected hazards",
          "Speed management on country roads",
          "Overtaking safely when appropriate",
        ],
      },
      {
        title: "Module 3: Dual Carriageways",
        duration: "1 hour",
        lessons: 1,
        topics: [
          "High-speed road confidence",
          "Lane discipline and positioning",
          "Safe joining and exiting techniques",
          "Maintaining appropriate following distances",
        ],
      },
      {
        title: "Module 4: Motorways",
        duration: "1 hour",
        lessons: 1,
        topics: [
          "Motorway regulations and signage",
          "Safe lane changing and overtaking",
          "Service area and exit navigation",
          "Dealing with heavy traffic and roadworks",
        ],
      },
      {
        title: "Module 5: Night Driving",
        duration: "1 hour",
        lessons: 1,
        topics: [
          "Effective use of vehicle lights",
          "Dealing with glare and reduced visibility",
          "Distance judgment in darkness",
          "Identifying hazards at night",
        ],
      },
      {
        title: "Module 6: Adverse Weather",
        duration: "1 hour",
        lessons: 1,
        topics: [
          "Driving in rain, fog, and snow",
          "Handling skids and reduced traction",
          "Adjusting stopping distances",
          "Emergency weather situation management",
        ],
      },
    ],
    reviews: [
      {
        name: "Lucy Chen",
        rating: 5,
        date: "2 months ago",
        comment:
          "The Pass Plus course was exactly what I needed after passing my test. I was nervous about motorways but now feel completely confident. My insurance company also gave me a 15% discount!",
      },
      {
        name: "Tom Jackson",
        rating: 5,
        date: "6 weeks ago",
        comment:
          "Excellent course that covers all the things you don't get enough practice with during regular lessons. The night driving and motorway modules were particularly useful.",
      },
      {
        name: "Zara Ahmed",
        rating: 4,
        date: "1 month ago",
        comment:
          "Really worthwhile investment. I feel much more confident now, especially in bad weather. The instructor was patient and gave lots of practical advice I use every day.",
      },
    ],
  },
];
