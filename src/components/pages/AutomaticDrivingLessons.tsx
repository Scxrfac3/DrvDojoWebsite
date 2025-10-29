import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import CertificationsBar from "../sections/CertificationsBar";
import GetStartedSection from "../sections/GetStartedSection";
import NewTestimonialsSection from "../sections/NewTestimonialsSection";
import FAQSection from "../sections/FAQSection";
import { Button } from "../ui/button";
import { ArrowRight, Car, CheckCircle, MapPin, Star, Users, Zap } from "lucide-react";
import confetti from "canvas-confetti";

const AutomaticDrivingLessons = () => {
  const [animateBackground, setAnimateBackground] = useState(false);

  useEffect(() => {
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
      alert(`Great news! We provide automatic driving lessons in your area. Book your first lesson today!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-500 rounded-full opacity-10 animate-ping"></div>
      </div>


      <Navbar />

      <main className="pt-[100px] relative z-10">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-20 relative overflow-hidden min-h-screen flex items-center">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-400 rounded-full opacity-25 animate-ping"></div>
            <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4 animate-fade-in">
                  <div className="flex items-center bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 animate-pulse" />
                    <span className="text-sm font-medium">DVSA Approved ✨</span>
                  </div>
                  <div className="flex items-center bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-400/30">
                    <Zap className="h-5 w-5 text-orange-400 mr-2" />
                    <span className="text-sm font-medium">Automatic Only 🚗</span>
                  </div>
                </div>
                
                <motion.h1
                  className="text-5xl lg:text-7xl font-black leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="bg-gradient-to-r from-white via-blue-100 to-orange-300 bg-clip-text text-transparent animate-gradient">
                    Automatic Driving
                  </span>
                  <br />
                  <span className="text-orange-400 animate-bounce inline-block">Lessons</span>
                  <span className="text-2xl lg:text-3xl ml-4">🚗</span>
                </motion.h1>
                
                <motion.p
                  className="text-xl lg:text-2xl text-blue-100 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Learn to drive in an <span className="text-orange-400 font-bold">automatic car</span> with our 
                  <span className="text-green-400 font-bold"> DVSA-approved instructors</span>. 
                  <span className="text-blue-400 font-bold"> No clutch, no stalling</span> - just smooth, confident driving! 🏆
                </motion.p>

                {/* Animated Stats */}
                <motion.div
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <Star className="h-6 w-6 mx-auto mb-2 text-yellow-400 animate-bounce" />
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
                      <Car className="h-6 w-6 mx-auto mb-2 text-orange-400" />
                      <div className="text-2xl font-bold text-orange-400">Auto</div>
                      <div className="text-xs text-blue-200">Specialists</div>
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
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🚗 Book Your Automatic Lesson
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
                      href="#benefits"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      💰 View Pricing
                    </motion.a>
                  </Button>
                </motion.div>

                {/* Postcode Checker */}
                <motion.div
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Check Your Postcode</h3>
                  <p className="text-blue-200 mb-4">Enter your postcode to see if we offer automatic driving lessons in your area</p>
                  <form onSubmit={handlePostcodeCheck} className="flex gap-2">
                    <input
                      type="text"
                      name="postcode"
                      placeholder="Enter your postcode"
                      className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      required
                    />
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                    >
                      Check
                    </Button>
                  </form>
                </motion.div>
              </div>

              {/* Right Content - Interactive visual element */}
              <div className="relative">
                <div className="relative z-10 group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <img
                      src="/images/certifications/MercShard.png"
                      alt="Modern automatic driving lesson car"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Floating Automatic Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl shadow-xl animate-bounce">
                      <div className="text-2xl font-bold">AUTO</div>
                      <div className="text-xs">ONLY ✓</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-2xl shadow-xl animate-pulse">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <div className="absolute top-20 -right-8 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-xl animate-bounce">
                  <span className="text-white font-bold text-sm">NO CLUTCH ✓</span>
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

        {/* Benefits of Automatic Driving */}
        <section id="benefits" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center mb-3 bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="h-4 w-4 mr-2" />
                Benefits of Automatic
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Why Choose Automatic Driving Lessons?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the advantages of learning to drive in an automatic car
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Easier to Learn",
                  description: "No clutch or gear stick to worry about - just accelerator and brake. Perfect for nervous drivers.",
                  icon: <CheckCircle className="h-8 w-8 text-green-500" />,
                  color: "from-green-400 to-emerald-500"
                },
                {
                  title: "Less Stressful",
                  description: "Focus on the road ahead without the distraction of gear changes. Ideal for busy urban driving.",
                  icon: <Zap className="h-8 w-8 text-blue-500" />,
                  color: "from-blue-400 to-cyan-500"
                },
                {
                  title: "Quick Progress",
                  description: "Most students learn faster in automatic cars, getting to test standard in less time.",
                  icon: <Star className="h-8 w-8 text-yellow-500" />,
                  color: "from-yellow-400 to-orange-500"
                },
                {
                  title: "Modern Cars",
                  description: "Most new cars are automatic or hybrid. Learning in automatic prepares you for future driving.",
                  icon: <Car className="h-8 w-8 text-purple-500" />,
                  color: "from-purple-400 to-pink-500"
                },
                {
                  title: "Hill Start Assist",
                  description: "No more rolling back on hills - automatic cars have hill start assistance for safety.",
                  icon: <CheckCircle className="h-8 w-8 text-red-500" />,
                  color: "from-red-400 to-orange-500"
                },
                {
                  title: "City Friendly",
                  description: "Perfect for stop-start city driving with frequent traffic lights and congestion.",
                  icon: <MapPin className="h-8 w-8 text-indigo-500" />,
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

        {/* Our Automatic Driving Courses */}
        <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center mb-3 bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Car className="h-4 w-4 mr-2" />
                Automatic Courses
              </motion.div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Automatic Driving</span> Courses 🚗
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized automatic driving courses designed to get you on the road quickly and safely
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Beginner Automatic Course */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200 relative"
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
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                      <Car className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Beginner Automatic</h3>
                      <p className="text-blue-600 font-medium">Perfect for new drivers</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">£38</div>
                    <div className="text-gray-600">/hour</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">No clutch control needed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Focus on road awareness</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Build confidence quickly</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Ideal for nervous learners</span>
                    </li>
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg group relative overflow-hidden"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Automatic Package Deal */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-orange-200 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rotate-12 flex items-end justify-start pb-2 pl-2 text-white font-bold">
                  <span>Popular</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">10-Hour Package</h3>
                      <p className="text-orange-600 font-medium">Best value for money</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">£340</div>
                    <div className="text-gray-600">/package</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">10 hours of automatic lessons</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Structured learning plan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Progress tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Save £40 compared to hourly rate</span>
                    </li>
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg group relative overflow-hidden"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Automatic Intensive Course */}
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
                      <h3 className="text-2xl font-bold text-gray-900">Automatic Intensive</h3>
                      <p className="text-green-600 font-medium">Fast-track your license</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">Contact</div>
                    <div className="text-gray-600">for quote</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Pass in 1-2 weeks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">20+ hours of lessons</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Test preparation included</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Flexible scheduling</span>
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

        {/* Areas We Cover */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center mb-3 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                Areas We Cover
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Automatic Driving Lessons in Your Area
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide professional automatic driving lessons across East London and Essex
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Goodmayes", "Barking", "Romford", "Ilford",
                "East Ham", "Forest Gate", "Canning Town", "Docklands",
                "Stratford", "West Ham", "Plaistow", "Upton Park",
                "Dagenham", "Hornchurch", "Upminster", "Rainham"
              ].map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <MapPin className="h-8 w-8 mx-auto mb-3 text-blue-500" />
                  <h3 className="font-bold text-gray-900">{area}</h3>
                  <p className="text-sm text-gray-600 mt-1">Automatic lessons available</p>
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
        <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white text-center relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-400 rounded-full opacity-25 animate-ping"></div>
            <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center mb-3 bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Car className="h-4 w-4 mr-2" />
                Start Your Automatic Journey
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-orange-300 bg-clip-text text-transparent animate-gradient">
                  Ready to Start Your
                </span>
                <br />
                <span className="text-orange-400 animate-bounce inline-block">Automatic Driving Journey?</span>
                <span className="text-3xl lg:text-4xl ml-4">🚗</span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
                Book your first automatic driving lesson today and take the first step
                towards <span className="text-orange-400 font-bold">driving confidence</span> with our
                <span className="text-green-400 font-bold"> DVSA-approved automatic instructors</span>! 🏆
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
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg group relative overflow-hidden"
                  onClick={() => {
                    triggerConfetti();
                    window.location.href = "/contact";
                  }}
                >
                  <motion.span
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🚗 Book Your Automatic Lesson
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
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
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

export default AutomaticDrivingLessons;