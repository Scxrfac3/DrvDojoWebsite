import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import CertificationsBar from "../sections/CertificationsBar";
import GetStartedSection from "../sections/GetStartedSection";
import NewTestimonialsSection from "../sections/NewTestimonialsSection";
import FAQSection from "../sections/FAQSection";
import PostcodeChecker from "../ui/PostcodeChecker";
import { Button } from "../ui/button";
import { ArrowRight, Car, CheckCircle, MapPin, Star, Users, Zap, Clock, Calendar, Award } from "lucide-react";
import confetti from "canvas-confetti";

const IntensiveDrivingCoursesIlford = () => {
  const [animateBackground, setAnimateBackground] = useState(false);

  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Intensive Driving Courses in Ilford | DVSA Approved | Pass First Time";
    
    // Add CSS animations
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
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
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

  const handlePostcodeCheck = (e) => {
    e.preventDefault();
    const postcode = e.target.elements.postcode.value;
    if (postcode) {
      triggerConfetti();
      // In a real implementation, this would check if the postcode is in service area
      alert(`Great news! We provide intensive driving courses in your area. Book your first lesson today!`);
    }
  };

  const handlePostcodeChecked = (result) => {
    if (result.isCovered) {
      triggerConfetti();
    }
  };

  const handleLessonSelected = (lessonType) => {
    // Navigate to booking page based on lesson type
    if (lessonType === 'intensive') {
      window.location.href = '/booking/intensive';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-sky-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-sky-300 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300 rounded-full opacity-10 animate-ping"></div>
      </div>

      <Navbar />

      <main className="pt-[100px] relative z-10">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-sky-100 via-white to-blue-50 text-gray-900 py-20 relative overflow-hidden min-h-screen flex items-center">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-sky-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-sky-300 rounded-full opacity-25 animate-ping"></div>
            <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4 animate-fade-in">
                  <div className="flex items-center bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 animate-pulse" />
                    <span className="text-sm font-medium text-green-800">DVSA Approved ✨</span>
                  </div>
                  <div className="flex items-center bg-sky-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-sky-400/30">
                    <Zap className="h-5 w-5 text-sky-600 mr-2" />
                    <span className="text-sm font-medium text-sky-800">Intensive Courses 🚗</span>
                  </div>
                </div>
                
                <motion.h1
                  className="text-5xl lg:text-7xl font-black leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="bg-gradient-to-r from-sky-700 via-blue-700 to-sky-800 bg-clip-text text-transparent animate-gradient">
                    Intensive Driving
                  </span>
                  <br />
                  <span className="text-sky-600 animate-bounce inline-block">Courses in Ilford</span>
                  <span className="text-2xl lg:text-3xl ml-4">🏆</span>
                </motion.h1>
                
                <motion.p
                  className="text-xl lg:text-2xl text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Pass your driving test quickly with our <span className="text-sky-600 font-bold">4-hour intensive lessons</span> at 
                  <span className="text-green-600 font-bold"> £150 per lesson</span>. 
                  <span className="text-blue-600 font-bold"> DVSA-approved instructor</span> specializing in helping students pass first time! 🎯
                </motion.p>

                {/* Animated Stats */}
                <motion.div
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-sky-200 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <Star className="h-6 w-6 mx-auto mb-2 text-yellow-500 animate-bounce" />
                      <div className="text-2xl font-bold text-yellow-600">98%</div>
                      <div className="text-xs text-gray-600">Pass Rate</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-6 w-6 mx-auto mb-2 text-sky-600" />
                      <div className="text-2xl font-bold text-sky-600">2000+</div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                    <div className="text-center">
                      <Clock className="h-6 w-6 mx-auto mb-2 text-green-600" />
                      <div className="text-2xl font-bold text-green-600">4hr</div>
                      <div className="text-xs text-gray-600">Lessons</div>
                    </div>
                    <div className="text-center">
                      <Award className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                      <div className="text-2xl font-bold text-blue-600">1st</div>
                      <div className="text-xs text-gray-600">Time Pass</div>
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
                    className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white shadow-lg group relative overflow-hidden"
                    asChild
                  >
                    <motion.a
                      href="/booking/intensive"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🚗 Book Your Intensive Course
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
                    className="border-sky-500 text-sky-700 hover:bg-sky-50 backdrop-blur-sm"
                    asChild
                  >
                    <motion.a
                      href="#benefits"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      💰 View Pricing
                    </motion.a>
                  </Button>
                </motion.div>

                {/* Postcode Checker */}
                <PostcodeChecker 
                  onPostcodeChecked={handlePostcodeChecked}
                  onLessonSelected={handleLessonSelected}
                  className="bg-white/80 backdrop-blur-md"
                />
              </div>

              {/* Right Content - Interactive visual element */}
              <div className="relative">
                <div className="relative z-10 group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <img
                      src="/images/certifications/MercShard.png"
                      alt="Intensive driving course in Ilford"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Floating Intensive Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-sky-500 to-blue-500 text-white p-4 rounded-2xl shadow-xl animate-bounce">
                      <div className="text-2xl font-bold">4HR</div>
                      <div className="text-xs">LESSONS ✓</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-sky-400 to-blue-500 p-4 rounded-2xl shadow-xl animate-pulse">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div className="absolute top-20 -right-8 bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl shadow-xl animate-bounce">
                  <span className="text-white font-bold text-sm">PASS FIRST ✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-sky-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-sky-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Benefits of Intensive Driving Courses */}
        <section id="benefits" className="py-20 bg-gradient-to-r from-sky-50 to-blue-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center mb-3 bg-gradient-to-r from-sky-500 to-blue-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="h-4 w-4 mr-2" />
                Benefits of Intensive Courses
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Why Choose Our Intensive Driving Courses?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the advantages of our intensive driving courses in Ilford
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Fast-Track Learning",
                  description: "Complete your driving training in days, not months. Our intensive courses are designed to get you test-ready quickly.",
                  icon: <Clock className="h-8 w-8 text-sky-600" />,
                  color: "from-sky-400 to-blue-500"
                },
                {
                  title: "4-Hour Lessons",
                  description: "Extended 4-hour sessions at £150 per lesson allow for deeper learning and faster skill development.",
                  icon: <Calendar className="h-8 w-8 text-blue-600" />,
                  color: "from-blue-400 to-sky-500"
                },
                {
                  title: "DVSA Approved Instructor",
                  description: "Learn from an official DVSA approved instructor who specializes in helping students pass first time.",
                  icon: <Award className="h-8 w-8 text-green-600" />,
                  color: "from-green-400 to-emerald-500"
                },
                {
                  title: "Test Booking Support",
                  description: "We help arrange your driving test to align with your course completion for a seamless experience.",
                  icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
                  color: "from-purple-400 to-pink-500"
                },
                {
                  title: "Discounts for Students",
                  description: "Special discounts available for current students to make learning more affordable.",
                  icon: <Star className="h-8 w-8 text-yellow-600" />,
                  color: "from-yellow-400 to-orange-500"
                },
                {
                  title: "Local Ilford Knowledge",
                  description: "Expert knowledge of Ilford test routes and areas to maximize your chances of passing.",
                  icon: <MapPin className="h-8 w-8 text-indigo-600" />,
                  color: "from-indigo-400 to-purple-500"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 relative h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className={`p-6 bg-gradient-to-b ${benefit.color.replace('to-', 'to-').replace('from-', 'from-')}/10 to-white`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Intensive Driving Courses */}
        <section className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-white relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center mb-3 bg-gradient-to-r from-sky-500 to-blue-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Car className="h-4 w-4 mr-2" />
                Intensive Courses
              </motion.div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Intensive Driving</span> Courses in Ilford 🚗
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized intensive driving courses designed to get you on the road quickly and safely
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 1-Week Intensive Course */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-sky-200 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">1-Week Course</h3>
                      <p className="text-sky-600 font-medium">Fast-track your license</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">£1,050</div>
                    <div className="text-gray-600">/course (7 x 4hr lessons)</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">7 days of intensive training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">4-hour lessons each day</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Test booking assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Free theory test support</span>
                    </li>
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white shadow-lg group relative overflow-hidden"
                      onClick={() => window.location.href = '/booking/intensive'}
                    >
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* 2-Week Intensive Course */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-blue-400 to-sky-400 rotate-12 flex items-end justify-start pb-2 pl-2 text-white font-bold">
                  <span>Popular</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-sky-500 rounded-2xl flex items-center justify-center mr-4">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">2-Week Course</h3>
                      <p className="text-blue-600 font-medium">Most popular choice</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">£1,200</div>
                    <div className="text-gray-600">/course (10 x 4hr lessons)</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">10 days of intensive training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">4-hour lessons each day</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Test booking assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Free mock test included</span>
                    </li>
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white shadow-lg group relative overflow-hidden"
                      onClick={() => window.location.href = '/booking/intensive'}
                    >
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Semi-Intensive Course */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-200 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Semi-Intensive</h3>
                      <p className="text-green-600 font-medium">Flexible schedule</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">Contact</div>
                    <div className="text-gray-600">for custom quote</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Flexible lesson schedule</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">4-hour intensive sessions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Test booking assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Student discounts available</span>
                    </li>
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg group relative overflow-hidden"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Areas We Cover in Ilford */}
        <section className="py-20 bg-gradient-to-br from-white via-sky-50 to-blue-50 relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center mb-3 bg-gradient-to-r from-sky-500 to-blue-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                Ilford Postcodes We Cover
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Intensive Driving Lessons Across Ilford
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide professional intensive driving courses throughout Ilford and surrounding areas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "IG1", "IG2", "IG3", "IG4", "IG5", "IG6", "IG7", "IG8",
                "IG9", "IG10", "IG11", "RM6", "RM7", "RM8", "RM9", "E12"
              ].map((postcode, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 text-center border border-sky-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <MapPin className="h-8 w-8 mx-auto mb-3 text-sky-500" />
                  <h3 className="font-bold text-gray-900">{postcode}</h3>
                  <p className="text-sm text-gray-600 mt-1">Intensive courses available</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <NewTestimonialsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-sky-100 via-blue-100 to-white text-gray-900 text-center relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-sky-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-sky-300 rounded-full opacity-25 animate-ping"></div>
            <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center mb-3 bg-gradient-to-r from-sky-500 to-blue-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Car className="h-4 w-4 mr-2" />
                Start Your Intensive Course
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-sky-700 via-blue-700 to-sky-800 bg-clip-text text-transparent animate-gradient">
                  Ready to Pass Your
                </span>
                <br />
                <span className="text-sky-600 animate-bounce inline-block">Driving Test in Ilford?</span>
                <span className="text-3xl lg:text-4xl ml-4">🏆</span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                Book your intensive driving course today and take the fast track to
                <span className="text-sky-600 font-bold"> driving success</span> with our
                <span className="text-green-600 font-bold"> DVSA-approved intensive courses</span>! 🎯
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white shadow-lg group relative overflow-hidden"
                  onClick={() => {
                    triggerConfetti();
                    window.location.href = "/booking/intensive";
                  }}
                >
                  <motion.span
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🚗 Book Your Intensive Course
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
                  className="border-sky-500 text-sky-700 hover:bg-sky-50 backdrop-blur-sm"
                  onClick={() => (window.location.href = "/contact")}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    💬 Ask a Question
                  </motion.span>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IntensiveDrivingCoursesIlford;