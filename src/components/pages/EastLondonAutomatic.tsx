import React from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Award,
  Shield,
  Car,
  MapPin,
  Clock,
  Users,
  Trophy,
  Phone,
  MessageCircle,
} from "lucide-react";

const EastLondonAutomatic = () => {
  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-500 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-yellow-500 rounded-full opacity-10 animate-ping"></div>
      </div>

      <Navbar />

      <main className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-400 rounded-full opacity-25 animate-ping"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30 mb-4">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-sm font-medium">East London's Premier Driving School</span>
                  </div>

                  <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-4">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-orange-300 bg-clip-text text-transparent">
                      Automatic Driving Lessons
                    </span>
                    <br />
                    <span className="text-orange-400">East London</span>
                  </h1>

                  <p className="text-xl text-blue-100 leading-relaxed mb-6">
                    Master the roads with East London's only premium automatic driving school. 
                    <span className="text-orange-400 font-bold"> Fully qualified ADI instructors</span>, 
                    Mercedes-Benz fleet, and a 98% pass rate.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <Car className="h-5 w-5 text-orange-400 mr-2" />
                      <span className="text-sm font-medium">Automatic Only</span>
                    </div>
                    <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <Award className="h-5 w-5 text-orange-400 mr-2" />
                      <span className="text-sm font-medium">ADI Qualified</span>
                    </div>
                    <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <Star className="h-5 w-5 text-orange-400 mr-2" />
                      <span className="text-sm font-medium">Mercedes-Benz</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg group"
                      onClick={scrollToPackages}
                    >
                      <span className="flex items-center">
                        View Packages
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                      asChild
                    >
                      <a
                        href="https://wa.me/447487228866?text=Hi%20Drive%20Dojo!%20I'm%20interested%20in%20automatic%20lessons%20in%20East%20London.%20Can%20you%20help?"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        WhatsApp Us
                      </a>
                    </Button>
                  </div>

                  {/* Trust badges */}
                  <div className="flex items-center gap-6 mt-8 text-sm">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-blue-200">DVSA Registered</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 text-yellow-400 mr-2" />
                      <span className="text-blue-200">89% Pass Rate</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Visual */}
              <div className="relative">
                <div className="relative z-10">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-80 lg:h-96 object-cover"
                    >
                      <source src="/images/certifications/kling_20260203_Image_to_Video_create_a_s_5324_0.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Floating badge */}
                    <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-xl">
                      <div className="text-3xl font-black">ADI</div>
                      <div className="text-sm font-bold">Qualified</div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-orange-500 mr-2" />
                    <div>
                      <div className="text-xs text-gray-500">Areas Covered</div>
                      <div className="font-bold text-gray-900">Goodmayes, Barking, Chingford</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Covered */}
        <section className="py-12 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h3 className="text-lg font-medium text-blue-200 mb-4">Areas We Cover in East London</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["Goodmayes", "Barking", "Chingford", "Ilford", "East Ham", "Forest Gate", "Gants Hill", "Leytonstone"].map((area) => (
                  <div
                    key={area}
                    className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white font-medium"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-black mb-4 text-white">
                Why <span className="text-orange-400">East London</span> Drivers Choose Us
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                We're East London's only premium automatic-only driving school with fully qualified ADI instructors.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Fully Qualified ADI",
                  description: "Not PDI - Your instructor is fully qualified with years of experience teaching in East London.",
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: Car,
                  title: "Mercedes-Benz Fleet",
                  description: "Learn in premium automatic vehicles. The easiest way to learn to drive.",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Shield,
                  title: "98% Pass Rate",
                  description: "Our structured approach means most students pass first time.",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: MapPin,
                  title: "Local Knowledge",
                  description: "We know all the test routes in East London test centres.",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Clock,
                  title: "Flexible Booking",
                  description: "Book lessons that fit your schedule. Quick response within 24 hours.",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp Booking",
                  description: "Quick and easy booking via WhatsApp. Start your journey today!",
                  color: "from-green-500 to-teal-500",
                },
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-blue-200">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Packages Section - Updated with Dark Premium Aesthetics */}
        <section id="packages" className="py-20 bg-[#0d0d0d] relative overflow-hidden">
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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-[#ff6b35] to-[#f5a623] px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg mb-4">
                <Zap className="h-4 w-4 mr-2" />
                Special East London Offers
              </div>
              <h2 className="text-3xl lg:text-5xl font-black mb-4 text-white">
                Choose Your <span className="text-orange-400">Package</span>
              </h2>
              <p className="text-xl text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto">
                Transparent pricing with no hidden fees. All packages include dedicated instructor and Mercedes-Benz vehicle.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* First 2 Hours */}
              <motion.div
                className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-[rgba(255,255,255,0.1)] relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-2 text-center">
                  🎯 INTRO OFFER
                </div>
                <div className="pt-12 pb-6 px-6 bg-gradient-to-b from-[rgba(255,107,53,0.1)] to-[rgba(255,255,255,0.05)]">
                  <h3 className="text-xl font-bold mb-2 text-white">First 2 Hours</h3>
                  <p className="text-sm text-[rgba(255,255,255,0.6)] mb-3">Try before you commit</p>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-white">£49</span>
                    <span className="text-sm text-[rgba(255,255,255,0.6)] ml-2">(£24.50/hr)</span>
                  </div>
                  <div className="bg-[#ff6b35]/20 text-[#ff6b35] text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    🎉 You save £50!
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[rgba(255,255,255,0.8)]">2 hours lesson</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[rgba(255,255,255,0.8)]">Personalized learning</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[rgba(255,255,255,0.8)]">Mercedes-Benz car</span>
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 group relative overflow-hidden"
                    onClick={() => window.location.href = '/booking/payg'}
                  >
                    <span className="relative z-10">Book Now</span>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.4 }}
                      style={{ opacity: 0.2 }}
                    />
                  </Button>
                </div>
              </motion.div>

              {/* 10-Hour Package */}
              <motion.div
                className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-[rgba(255,255,255,0.1)] relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="absolute top-4 left-4 bg-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full">
                  💰 Popular Choice
                </div>
                <div className="pt-14 pb-6 px-6 bg-gradient-to-b from-[rgba(59,130,246,0.1)] to-[rgba(255,255,255,0.05)]">
                  <h3 className="text-xl font-bold mb-2 text-white">10-Hour Package</h3>
                  <p className="text-sm text-[rgba(255,255,255,0.6)] mb-3">Perfect for most learners</p>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-white">£340</span>
                    <span className="text-sm text-[rgba(255,255,255,0.6)] ml-2">(£34/hr)</span>
                  </div>
                  <div className="bg-[#ff6b35]/20 text-[#ff6b35] text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    🎉 You save £50!
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[rgba(255,255,255,0.8)]">10 hours of lessons</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[rgba(255,255,255,0.8)]">Structured learning plan</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[rgba(255,255,255,0.8)]">Mock test included</span>
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group relative overflow-hidden"
                    onClick={() => window.location.href = '/booking/10hour'}
                  >
                    <span className="relative z-10">Book Now</span>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.4 }}
                      style={{ opacity: 0.2 }}
                    />
                  </Button>
                </div>
              </motion.div>

              {/* 20-Hour Package - MOST POPULAR */}
              <motion.div
                className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] relative transform scale-105 z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br from-[#ff6b35] to-[#f5a623] rotate-45 flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-sm -rotate-45">BEST VALUE</span>
                </div>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#ff6b35] to-[#f5a623] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  ⭐ MOST POPULAR
                </div>
                <div className="pt-14 pb-6 px-6 bg-gradient-to-b from-[rgba(255,107,53,0.15)] to-[rgba(255,255,255,0.05)]">
                  <h3 className="text-xl font-bold mb-2 text-white">20-Hour Package</h3>
                  <p className="text-sm text-[rgba(255,255,255,0.6)] mb-3">Complete course</p>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-white">£689</span>
                    <span className="text-sm text-[rgba(255,255,255,0.6)] ml-2">(£34.45/hr)</span>
                  </div>
                  <div className="bg-[#ff6b35]/20 text-[#ff6b35] text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    🎉 You save £150!
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-[rgba(255,255,255,0.8)]">20 hours of lessons</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-[rgba(255,255,255,0.8)]">Full learning plan</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-[rgba(255,255,255,0.8)]">2 Mock tests included</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-[rgba(255,255,255,0.8)]">Priority booking</span>
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 font-bold group relative overflow-hidden"
                    onClick={() => window.location.href = '/booking/10hour'}
                  >
                    <span className="relative z-10">Book Now</span>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.4 }}
                      style={{ opacity: 0.2 }}
                    />
                  </Button>
                </div>
              </motion.div>

              {/* Intensive Course */}
              <motion.div
                className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-[rgba(255,255,255,0.1)] relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="absolute top-4 left-4 bg-purple-500/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full">
                  🚀 Fast Track
                </div>
                <div className="pt-14 pb-6 px-6 bg-gradient-to-b from-[rgba(147,51,234,0.1)] to-[rgba(255,255,255,0.05)]">
                  <h3 className="text-xl font-bold mb-2 text-white">Intensive Course</h3>
                  <p className="text-sm text-[rgba(255,255,255,0.6)] mb-3">Pass in 2 weeks</p>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-white">£999</span>
                    <span className="text-sm text-[rgba(255,255,255,0.6)] ml-2">(30 hours)</span>
                  </div>
                  <div className="bg-purple-500/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    🎉 2-Week Course
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[rgba(255,255,255,0.8)]">30 hours total</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[rgba(255,255,255,0.8)]">2-week intensive</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[rgba(255,255,255,0.8)]">Test booking included</span>
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 group relative overflow-hidden"
                    onClick={() => window.location.href = '/booking/intensive'}
                  >
                    <span className="relative z-10">Book Now</span>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.4 }}
                      style={{ opacity: 0.2 }}
                    />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-white">
              Ready to Start Your Driving Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 1000+ successful drivers in East London. Book via WhatsApp for quick response!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 font-bold"
                asChild
              >
                <a
                  href="https://wa.me/447487228866?text=Hi%20Drive%20Dojo!%20I'm%20interested%20in%20automatic%20lessons%20in%20East%20London.%20Can%20you%20help?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book via WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 font-bold"
                onClick={scrollToPackages}
              >
                View Packages
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EastLondonAutomatic;
