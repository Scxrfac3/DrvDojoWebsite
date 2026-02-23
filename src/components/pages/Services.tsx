import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import CertificationsBar from "../sections/CertificationsBar";
import GetStartedSection from "../sections/GetStartedSection";
import NewTestimonialsSection from "../sections/NewTestimonialsSection";
import FAQSection from "../sections/FAQSection";
import ServicesSection from "../sections/ServicesSection";
import IntensiveCourseDetails from "../sections/IntensiveCourseDetails";
import TestCentresSection from "../sections/TestCentresSection";
import { Button } from "../ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ElectricBorder from "../ui/ElectricBorder";
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
  CheckCircle,
  Trophy,
  Target,
  Book,
  TrendingUp,
  Smartphone,
  MessageSquare,
  Play,
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
              image: "/images/certifications/1729007102786.jpg",
              title: "Modern Dual-Control Vehicles",
              description:
                "Learn in our fleet of latest model cars with dual controls for safety",
            },
            {
              image: "/images/certifications/C8.png",
              title: "Digital Learning Tools",
              description:
                "Access to digital resources and apps to enhance your learning",
            },
            {
              image: "/images/certifications/C2.png",
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
  const [transmissionType, setTransmissionType] = useState('manual');
  const [likedPackages, setLikedPackages] = useState<Set<string>>(new Set());
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);
  const [isCourseSectionVisible, setIsCourseSectionVisible] = useState(false);
  const courseSectionRef = useRef(null);

  // Add CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradient {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 3s ease infinite;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fadeIn 1s ease-out;
      }
      .gpu-accelerated {
        transform: translateZ(0);
        will-change: transform;
        backface-visibility: hidden;
        perspective: 1000px;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Intersection Observer for performance optimization
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCourseSectionVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (courseSectionRef.current) {
      observer.observe(courseSectionRef.current);
    }

    return () => {
      if (courseSectionRef.current) {
        observer.unobserve(courseSectionRef.current);
      }
    };
  }, []);

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

  const handleLike = (packageId: string) => {
    const newLiked = new Set(likedPackages);
    if (newLiked.has(packageId)) {
      newLiked.delete(packageId);
    } else {
      newLiked.add(packageId);
    }
    setLikedPackages(newLiked);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] relative overflow-hidden">
      {/* Background decorative elements with new design */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full"></div>
      </div>

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
              {/* Hero Banner - Updated Design */}
              <section className="relative bg-[#0d0d0d] text-white py-20 relative overflow-hidden min-h-screen flex items-center">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full"></div>
                  <div className="absolute top-40 right-20 w-24 h-24 bg-primary/5 rounded-full"></div>
                  <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/5 rounded-full"></div>
                  <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-primary/5 rounded-full"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                      <div className="flex items-center space-x-4 animate-fade-in">
                        <div className="flex items-center bg-success/20 backdrop-blur-sm px-4 py-2 rounded-full border border-success/30">
                          <CheckCircle className="h-5 w-5 text-success mr-2" />
                          <span className="text-sm font-medium">DVSA Approved ✨</span>
                        </div>
                        <div className="flex items-center bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                          <Zap className="h-5 w-5 text-primary mr-2" />
                          <span className="text-sm font-medium">Intensive Courses 🚀</span>
                        </div>
                      </div>
                      
                      <motion.h1
                        className="text-5xl lg:text-7xl font-black leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-white">
                          Intensive Driving
                        </span>
                        <br />
                        <span className="text-primary inline-block">Courses</span>
                        <span className="text-2xl lg:text-3xl ml-4">🎯</span>
                      </motion.h1>
                      
                      <motion.p
                        className="text-xl lg:text-2xl text-gray-400 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        Fast-track your driving success with our <span className="text-primary font-bold">intensive courses</span>!
                        Pass your test with our <span className="text-success font-bold">DVSA-approved instructors</span> and
                        <span className="text-primary font-bold"> structured training</span> 🏆
                      </motion.p>

                      {/* Animated Stats */}
                      <motion.div
                        className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <div className="grid grid-cols-4 gap-4">
                          <div className="text-center">
                            <Trophy className="h-6 w-6 mx-auto mb-2 text-yellow-400 animate-bounce" />
                            <div className="text-2xl font-bold text-yellow-400">98%</div>
                            <div className="text-xs text-blue-200">Pass Rate</div>
                          </div>
                          <div className="text-center">
                            <Users className="h-6 w-6 mx-auto mb-2 text-blue-300" />
                            <div className="text-2xl font-bold text-blue-300">2000+</div>
                            <div className="text-xs text-blue-200">Students</div>
                          </div>
                          <div className="text-center">
                            <Star className="h-6 w-6 mx-auto mb-2 text-green-400" />
                            <div className="text-2xl font-bold text-green-400">8+</div>
                            <div className="text-xs text-blue-200">Years</div>
                          </div>
                          <div className="text-center">
                            <Zap className="h-6 w-6 mx-auto mb-2 text-orange-400" />
                            <div className="text-2xl font-bold text-orange-400">1 Week</div>
                            <div className="text-xs text-blue-200">Fast Track</div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg group relative overflow-hidden"
                          asChild
                        >
                          <motion.a
                            href="/booking/intensive"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            🚗 Book Intensive Course
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
                            href="#courses"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            💰 View All Courses
                          </motion.a>
                        </Button>
                      </motion.div>

                      {/* Social proof */}
                      <motion.div
                        className="flex items-center space-x-6 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="flex items-center">
                          <div className="flex -space-x-2 mr-3">
                            {[1,2,3,4].map((i) => (
                              <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                            ))}
                          </div>
                          <span className="text-blue-200">2000+ successful drivers</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-blue-200">4.9/5 rating</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Right Content - Interactive visual element */}
                    <div className="relative">
                      <div className="relative z-10 group">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-96 object-cover"
                          >
                            <source src="/images/certifications/kling_20260203_Image_to_Video_create_a_s_5415_0.mp4" type="video/mp4" />
                          </video>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                          {/* Floating Success Badge */}
                          <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-xl shadow-glow">
                            <div className="text-2xl font-bold">FAST</div>
                            <div className="text-xs">TRACK 🚀</div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute -top-6 -left-6 bg-primary/20 border border-primary/30 p-4 rounded-xl">
                        <Trophy className="h-8 w-8 text-primary" />
                      </div>
                      <div className="absolute top-20 -right-8 bg-primary/20 border border-primary/30 p-3 rounded-xl">
                        <span className="text-primary font-bold text-sm">INTENSIVE ✓</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                  </div>
                </div>
              </section>

              {/* Featured Courses - Updated with Booking Page Services */}
              <section id="courses" ref={courseSectionRef} className="py-16 bg-[#0d0d0d] relative overflow-hidden rounded-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b35]/10 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff6b35]/10 rounded-full opacity-20 blur-3xl"></div>

                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-gradient-to-r from-[#ff6b35]/20 to-[#f5a623]/20 backdrop-blur-sm"
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
                      className="inline-flex items-center mb-3 bg-gradient-to-r from-[#ff6b35] to-[#f5a623] px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      Featured Courses
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      Choose Your Perfect Course
                    </h2>
                    <p className="text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto">
                      Select from our most popular courses designed to get you on the road quickly and safely
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* First 2 Hours - Lead Magnet */}
                    <motion.div
                      className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-[rgba(255,255,255,0.1)] relative h-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-2 text-center">
                        🎯 INTRO OFFER
                      </div>
                      <div className="pt-12 pb-6 px-6 bg-gradient-to-b from-[rgba(255,107,53,0.1)] to-[rgba(255,255,255,0.05)]">
                        <h3 className="text-xl font-bold mb-2 text-white">
                          First 2 Hours
                        </h3>
                        <p className="text-sm text-[rgba(255,255,255,0.6)] mb-3">
                          Try before you commit
                        </p>
                        <div className="mb-4">
                          <span className="text-4xl font-black text-white">£49</span>
                          <span className="text-sm text-[rgba(255,255,255,0.6)] ml-2">(was £76 - use SAVE25)</span>
                        </div>
                        <div className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-500/50 text-green-400 text-xs font-bold px-4 py-2 rounded-lg mb-4 inline-block">
                          🎉 Use code <span className="text-white font-black">SAVE25</span> at checkout - Save £27!
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[rgba(255,255,255,0.8)]">2 hours lesson</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[rgba(255,255,255,0.8)]">Personalized learning</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[rgba(255,255,255,0.8)]">Beginner friendly</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[rgba(255,255,255,0.8)]"> Mercedes-Benz car</span>
                          </li>
                        </ul>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button
                            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 group relative overflow-hidden"
                            onClick={() => window.location.href = '/booking/payg'}
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
                      className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-[rgba(255,255,255,0.1)] relative h-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="absolute top-4 left-4 bg-[#ff6b35]/20 text-[#ff6b35] text-xs font-bold px-3 py-1 rounded-full">
                        💰 Popular Choice
                      </div>
                      <div className="pt-14 pb-6 px-6 bg-gradient-to-b from-[rgba(255,107,53,0.1)] to-[rgba(255,255,255,0.05)]">
                        <h3 className="text-xl font-bold mb-2 text-white">
                          10-Hour Package
                        </h3>
                        <p className="text-sm text-[rgba(255,255,255,0.6)] mb-3">
                          Perfect for most learners
                        </p>
                        <div className="mb-4">
                          <span className="text-4xl font-black text-white">£340</span>
                          <span className="text-sm text-[rgba(255,255,255,0.6)] ml-2">(£34/hr)</span>
                        </div>
                        <div className="bg-[#ff6b35]/20 text-[#ff6b35] text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                          🎉 You save £50!
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[rgba(255,255,255,0.8)]">10 hours of lessons</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[rgba(255,255,255,0.8)]">Structured learning plan</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[rgba(255,255,255,0.8)]">Progress tracking</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[rgba(255,255,255,0.8)]">Mock test included</span>
                          </li>
                        </ul>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group relative overflow-hidden"
                            onClick={() => window.location.href = '/booking/10hour'}
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

                    {/* 20-Hour Package - MOST POPULAR */}
                    <motion.div
                      className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] relative h-full transform scale-105 z-10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <div className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br from-[#ff6b35] to-[#f5a623] rotate-45 flex items-center justify-center shadow-lg">
                        <span className="text-white font-black text-sm -rotate-45">BEST VALUE</span>
                      </div>
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-[#ff6b35] to-[#f5a623] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        ⭐ MOST POPULAR
                      </div>
                      <div className="pt-14 pb-6 px-6 bg-gradient-to-b from-[rgba(255,107,53,0.15)] to-[rgba(255,255,255,0.05)]">
                        <h3 className="text-xl font-bold mb-2 text-white">
                          20-Hour Package
                        </h3>
                        <p className="text-sm text-[rgba(255,255,255,0.6)] mb-3">
                          Complete course - Most booked!
                        </p>
                        <div className="mb-4">
                          <span className="text-4xl font-black text-white">£689</span>
                          <span className="text-sm text-[rgba(255,255,255,0.6)] ml-2">(£34.45/hr)</span>
                        </div>
                        <div className="bg-[#ff6b35]/20 text-[#ff6b35] text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                          🎉 You save £150!
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-[rgba(255,255,255,0.8)]">20 hours of lessons</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-[rgba(255,255,255,0.8)]">Full learning plan</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-[rgba(255,255,255,0.8)]">2 Mock tests included</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-[rgba(255,255,255,0.8)]">Theory support</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-[rgba(255,255,255,0.8)]">Priority booking</span>
                          </li>
                        </ul>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button
                            className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold shadow-lg group relative overflow-hidden"
                            onClick={() => window.location.href = '/booking/10hour'}
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

                    {/* Intensive Course */}
                    <motion.div
                      className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-[rgba(255,255,255,0.1)] relative h-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="absolute top-4 left-4 bg-purple-500/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full">
                        🚀 Fast Track
                      </div>
                      <div className="pt-14 pb-6 px-6 bg-gradient-to-b from-[rgba(147,51,234,0.1)] to-[rgba(255,255,255,0.05)]">
                        <h3 className="text-xl font-bold mb-2 text-white">
                          Intensive Course
                        </h3>
                        <p className="text-sm text-[rgba(255,255,255,0.6)] mb-3">
                          Pass in 2 weeks
                        </p>
                        <div className="mb-4">
                          <span className="text-4xl font-black text-white">£999</span>
                          <span className="text-sm text-[rgba(255,255,255,0.6)] ml-2">(30 hours)</span>
                        </div>
                        <div className="bg-purple-500/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                          🎉 Intensive 2-Week Course
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[rgba(255,255,255,0.8)]">30 hours total</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[rgba(255,255,255,0.8)]">2-week intensive</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[rgba(255,255,255,0.8)]">Test booking included</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[rgba(255,255,255,0.8)]">Car rental for test</span>
                          </li>
                        </ul>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 group relative overflow-hidden"
                            onClick={() => window.location.href = '/booking/intensive'}
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

              {/* Intensive Driving Courses - Highlighted Section - Updated with Dark Premium Aesthetics */}
              <section className="py-20 bg-[#0d0d0d] relative overflow-hidden">
                {/* Background blur effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b35]/10 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff6b35]/10 rounded-full opacity-20 blur-3xl"></div>
                
                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-gradient-to-r from-[#ff6b35]/20 to-[#f5a623]/20 backdrop-blur-sm"
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

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <motion.div
                      className="inline-flex items-center mb-3 bg-gradient-to-r from-[#ff6b35] to-[#f5a623] px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      FAST TRACK YOUR SUCCESS
                    </motion.div>
                    <motion.h2
                      className="text-5xl font-black text-white mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Intensive Driving</span> Courses 🚀
                    </motion.h2>
                    <p className="text-xl text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto">
                      Pass your driving test with our DVSA-approved intensive courses!
                      <span className="text-orange-400 font-bold"> Designed for efficient learning and test success!</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Intensive Lessons */}
                    <motion.div
                      className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-[rgba(255,255,255,0.1)] relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -10,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                      <div className="p-8 bg-gradient-to-b from-[rgba(255,107,53,0.1)] to-transparent">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                            <Zap className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">Intensive Lessons</h3>
                            <p className="text-orange-400 font-medium">Fast-track your learning</p>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <div className="text-4xl font-bold text-white mb-2">Contact for Quote</div>
                          <div className="text-[rgba(255,255,255,0.6)]">/tailored course</div>
                        </div>

                        <ul className="space-y-3 mb-8">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-[rgba(255,255,255,0.8)]">Tailored to student needs</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-[rgba(255,255,255,0.8)]">Contact for quote based on location</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-[rgba(255,255,255,0.8)]">Comprehensive training</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-[rgba(255,255,255,0.8)]">Pass your test in 1-2 weeks</span>
                          </li>
                        </ul>

                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button
                            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg group relative overflow-hidden"
                            onClick={() => window.location.href = '/booking/intensive'}
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

                    {/* Mock Driving Test */}
                    <motion.div
                      className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-[rgba(255,255,255,0.1)] relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -10,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <div className="p-8 bg-gradient-to-b from-[rgba(59,130,246,0.1)] to-transparent">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                            <CheckCircle className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">Mock Driving Test</h3>
                            <p className="text-blue-400 font-medium">Perfect practice before your test</p>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <div className="text-4xl font-bold text-white mb-2">£90</div>
                          <div className="text-[rgba(255,255,255,0.6)]">/test</div>
                        </div>

                        <ul className="space-y-3 mb-8">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-[rgba(255,255,255,0.8)]">Real test conditions</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-[rgba(255,255,255,0.8)]">45 minutes duration</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-[rgba(255,255,255,0.8)]">Detailed feedback</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-[rgba(255,255,255,0.8)]">Increase your chances of passing</span>
                          </li>
                        </ul>

                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button
                            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg group relative overflow-hidden"
                            onClick={() => window.location.href = '/booking/mocktest'}
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

                  {/* Driving Test Car Rental */}
                  <motion.div
                    className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-[rgba(255,255,255,0.1)] relative max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <div className="p-8 bg-gradient-to-b from-[rgba(34,197,94,0.1)] to-transparent">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                          <Car className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Driving Test Car Rental</h3>
                          <p className="text-green-400 font-medium">Everything you need for test day</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="text-4xl font-bold text-white mb-2">£150</div>
                        <div className="text-[rgba(255,255,255,0.6)]">/3 hours</div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-[rgba(255,255,255,0.8)]">3 hours booking</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-[rgba(255,255,255,0.8)]">Arrive 15 minutes before test</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-[rgba(255,255,255,0.8)]">Practice maneuvers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-[rgba(255,255,255,0.8)]">Home drop-off after test</span>
                        </li>
                      </ul>

                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button
                          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg group relative overflow-hidden"
                          onClick={() => window.location.href = '/booking/testrental'}
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
              </section>

              {/* Test Centres Section */}
              <TestCentresSection />

              <CertificationsBar />

              {/* Why Choose Us - New Design */}
              <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <motion.h2
                      className="text-5xl font-black text-gray-900 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Why We're <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Different</span> ✨
                    </motion.h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      We provide professional, DVSA-approved driving instruction with modern teaching methods.
                      <span className="text-orange-500 font-bold"> Committed to your driving success.</span> 🚗
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        icon: CheckCircle,
                        title: 'DVSA-Approved Instructors',
                        description: 'Our fully qualified instructors provide professional training to help you pass your test. 🎯',
                        emoji: '🏆',
                        color: 'from-green-400 to-emerald-500'
                      },
                      {
                        icon: Car,
                        title: 'Modern Training Vehicles',
                        description: 'Dual-controlled manual and automatic cars for safe, professional instruction. 🚗',
                        emoji: '🚙',
                        color: 'from-blue-400 to-cyan-500'
                      },
                      {
                        icon: TrendingUp,
                        title: 'High Pass Rate',
                        description: '98% of our students pass first time with our structured training approach. 📈',
                        emoji: '📈',
                        color: 'from-purple-400 to-pink-500'
                      },
                      {
                        icon: Smartphone,
                        title: 'Easy Booking System',
                        description: 'Simple online booking with prompt responses and convenient scheduling. 📱',
                        emoji: '⚡',
                        color: 'from-green-400 to-teal-500'
                      },
                      {
                        icon: BookOpen,
                        title: 'Progress Tracking',
                        description: 'Monitor your development with our structured progress assessment system. 📊',
                        emoji: '📊',
                        color: 'from-orange-400 to-red-500'
                      },
                      {
                        icon: Heart,
                        title: 'Patient Instructors',
                        description: 'Professional, calm instruction with clear explanations and supportive guidance. ✨',
                        emoji: '😎',
                        color: 'from-pink-400 to-rose-500'
                      },
                      {
                        icon: Target,
                        title: 'Local Test Route Knowledge',
                        description: 'Comprehensive knowledge of local test centres and routes for effective preparation. 🗺️',
                        emoji: '🎯',
                        color: 'from-indigo-400 to-purple-500'
                      },
                      {
                        icon: Zap,
                        title: 'Flexible Learning',
                        description: 'Personalised lesson plans tailored to your schedule and learning requirements. 🌟',
                        emoji: '🎨',
                        color: 'from-yellow-400 to-orange-500'
                      }
                    ].map((benefit, index) => {
                      const IconComponent = benefit.icon;
                      const isHovered = hoverService === `benefit-${index}`;
                      const isLiked = likedPackages.has(`benefit-${index}`);
                      
                      return (
                        <motion.div
                          key={index}
                          onMouseEnter={() => setHoverService(`benefit-${index}`)}
                          onMouseLeave={() => setHoverService(null)}
                          className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer ${
                            isHovered ? 'scale-105 -rotate-1' : 'scale-100 rotate-0'
                          }`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {/* Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                          
                          <div className="relative p-6 text-center">
                            {/* Emoji Badge */}
                            <div className="absolute -top-3 -right-3 text-3xl animate-bounce">
                              {benefit.emoji}
                            </div>

                            {/* Like Button */}
                            <button
                              onClick={() => handleLike(`benefit-${index}`)}
                              className={`absolute top-4 left-4 p-2 rounded-full transition-all duration-300 ${
                                isLiked ? 'bg-red-500 text-white scale-110' : 'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-500'
                              }`}
                            >
                              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                            </button>

                            {/* Icon */}
                            <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 ${
                              isHovered ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                            }`}>
                              <IconComponent className="h-8 w-8 text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                              {benefit.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                              {benefit.description}
                            </p>

                            {/* Interactive Progress Bar */}
                            <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${benefit.color} transition-all duration-1000 ${
                                  isHovered ? 'w-full' : 'w-0'
                                }`}
                              ></div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Interactive CTA */}
                  <div className="mt-16 text-center">
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-3xl">
                      <div className="bg-white rounded-3xl px-8 py-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Ready to Start Your Driving Journey? 🎉
                        </h3>
                        <p className="text-gray-600 mb-4">Join 2000+ successful students with our professional training.</p>
                        <Button
                          className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105"
                          onClick={() => window.location.href = "/contact"}
                        >
                          Book Your Lesson 🚗
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              {/* Booking Process */}
              <GetStartedSection />

              {/* Testimonials */}
              <NewTestimonialsSection />

              {/* FAQ Section */}
              <FAQSection />

              {/* Call to Action - Updated Design */}
              <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white text-center relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
                  <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-400 rounded-full opacity-25 animate-ping"></div>
                  <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                </div>

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

                <div className="container mx-auto px-4 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <div className="grid grid-cols-4 gap-4">
                        <div className="text-center">
                          <Trophy className="h-6 w-6 mx-auto mb-2 text-yellow-400" />
                          <div className="text-2xl font-bold text-yellow-400">98%</div>
                          <div className="text-xs text-gray-400">Pass Rate</div>
                        </div>
                        <div className="text-center">
                          <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <div className="text-2xl font-bold text-primary">2000+</div>
                          <div className="text-xs text-gray-400">Students</div>
                        </div>
                        <div className="text-center">
                          <Star className="h-6 w-6 mx-auto mb-2 text-success" />
                          <div className="text-2xl font-bold text-success">8+</div>
                          <div className="text-xs text-gray-400">Years</div>
                        </div>
                        <div className="text-center">
                          <Zap className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <div className="text-2xl font-bold text-primary">1 Week</div>
                          <div className="text-xs text-gray-400">Fast Track</div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex flex-col sm:flex-row gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white shadow-glow hover:shadow-glow-lg group relative overflow-hidden"
                        onClick={() => {
                          triggerConfetti();
                          window.open("https://calendly.com/drivedojo-qnua/120min?background_color=b8c7ff", "_blank");
                        }}
                      >
                        <motion.span
                          className="flex items-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          🚗 Book a Lesson
                          <motion.span
                            className="ml-2 inline-block"
                            initial={{ x: 0 }}
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.span>
                        </motion.span>
                        <motion.div
                          className="absolute inset-0 bg-white"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.4 }}
                          style={{ opacity: 0.2 }}
                        />
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/10 text-white hover:bg-white/10 backdrop-blur-sm"
                        onClick={() => (window.location.href = "/contact")}
                      >
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          💬 Contact Us
                        </motion.span>
                      </Button>
                    </motion.div>

                    {/* Social proof */}
                    <motion.div
                      className="flex items-center space-x-6 text-sm mt-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex items-center">
                        <div className="flex -space-x-2 mr-3">
                          {[1,2,3,4].map((i) => (
                            <div key={i} className="w-8 h-8 bg-primary/30 rounded-full border-2 border-white/20"></div>
                          ))}
                        </div>
                        <span className="text-gray-400">2000+ successful drivers</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-gray-400">4.9/5 rating</span>
                      </div>
                    </motion.div>
                  </motion.div>
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
                    window.open("https://calendly.com/drivedojo-qnua/6-hour-package-clone?background_color=96bdff", "_blank");
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
                    window.location.href = '/booking/intensive';
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
    price: "£38",
    priceUnit: "/hour",
    shortDescription:
      "Perfect for first-time drivers with no previous experience",
    image: "/images/certifications/8.png",
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
    image: "/images/certifications/C7.png",
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
    image: "/images/certifications/9.png",
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
        name: "Sophie Williams",
        rating: 4,
        date: "2 months ago",
        comment:
          "Great course that helped me pass after failing with another instructor. The intensive lessons worked well for me as I could fully focus on driving without forgetting things between lessons.",
      },
      {
        name: "Omar Hassan",
        rating: 5,
        date: "3 weeks ago",
        comment:
          "Excellent experience! I was nervous about the intensive approach but it actually helped me progress much faster than weekly lessons. The instructor was patient and professional throughout.",
      },
    ],
  },
  {
    id: "pass-plus",
    title: "Pass Plus Course",
    price: "£200",
    priceUnit: "/course",
    shortDescription:
      "Build confidence and skills after passing your test with this government-recognized course",
    image: "/images/certifications/PassPlus.png",
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
