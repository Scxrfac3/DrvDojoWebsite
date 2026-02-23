import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Car,
  Shield,
  Award,
  Zap,
  Trophy,
  Users,
} from "lucide-react";

const BarkingLessons = () => {
  const [postcode, setPostcode] = useState("");
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { icon: Star, number: '98%', label: 'Pass Rate', color: 'text-yellow-400' },
    { icon: Users, number: '2000+', label: 'Students', color: 'text-orange-400' },
    { icon: Trophy, number: '8+', label: 'Years', color: 'text-green-400' },
    { icon: Zap, number: '24hr', label: 'Response', color: 'text-orange-400' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/booking?postcode=${postcode}`;
  };

  return (
    <>
      <div className="min-h-screen bg-[#0d0d0d] text-white relative overflow-hidden">
        {/* Background decorative elements - Dark theme */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ff6b35]/10 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#ff6b35]/10 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-[#f5a623]/10 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ff6b35]/10 rounded-full opacity-20 blur-3xl"></div>

        <Navbar />

        <main className="pt-[100px] pb-20 relative z-10">
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center space-x-4 mb-6 justify-center lg:justify-start">
                    <div className="flex items-center bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                      <span className="text-sm font-medium">DVSA Approved</span>
                    </div>
                    <div className="flex items-center bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-400/30">
                      <Zap className="h-5 w-5 text-orange-400 mr-2" />
                      <span className="text-sm font-medium">Quick Start</span>
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
                      Automatic & Intensive Driving Lessons
                    </span>
                    <br />
                    <span className="text-white">in Barking</span>
                  </h1>

                  <p className="text-xl text-[rgba(255,255,255,0.8)] mb-8">
                    <span className="font-semibold text-orange-400">
                      DVSA Approved Instructor | First Time Pass Specialist
                    </span>{" "}
                    — Former instructor with Red Driving School and AA Driving School.
                    Offering expert intensive driving lessons in Barking and automatic driving lessons in Barking
                    with the highest pass rates.
                  </p>

                  {/* Stats */}
                  <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-2xl p-6 border border-[rgba(255,255,255,0.1)] mb-8">
                    <div className="grid grid-cols-4 gap-4">
                      {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                          <div
                            key={index}
                            className="text-center"
                          >
                            <IconComponent className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
                            <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                            <div className="text-xs text-[rgba(255,255,255,0.6)]">{stat.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
                  >
                    <div className="relative flex-grow">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[rgba(255,255,255,0.5)]" />
                      <Input
                        type="text"
                        placeholder="Enter pickup postcode"
                        className="pl-10 bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)] text-white placeholder:text-[rgba(255,255,255,0.4)]"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white group relative overflow-hidden"
                    >
                      Get Started Today
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>

                  {/* Social Proof */}
                  <div className="flex items-center space-x-6 text-sm mt-6 justify-center lg:justify-start">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-[rgba(255,255,255,0.7)]">4.9/5 rating</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[rgba(255,255,255,0.7)]">2000+ successful drivers</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/certifications/c5.png"
                      alt="Driving lessons in Barking"
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center space-x-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="h-5 w-5 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                        <span className="text-white ml-2 font-medium">
                          4.9/5 (2,000+ reviews)
                        </span>
                      </div>
                      <p className="text-white/90 text-sm">
                        "My instructor was amazing! Passed my test first time at Barking Test Centre!"
                      </p>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <motion.div
                    className="absolute -top-5 -right-5 bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-full p-4 shadow-lg border border-[rgba(255,255,255,0.1)]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <img
                      src="/images/certifications/DVSA-ADI.png"
                      alt="DVSA Approved"
                      className="h-16 w-16 object-contain"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-5 -left-5 bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-full p-3 shadow-lg border border-[rgba(255,255,255,0.1)]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <img
                      src="/images/certifications/PassPlus.png"
                      alt="Pass Plus"
                      className="h-14 w-14 object-contain"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section - Dark Theme */}
          <section className="py-16 bg-[#0d0d0d]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Barking Postcode Coverage
                </h2>
                <p className="text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto">
                  We provide comprehensive driving lessons across all Barking postcodes,
                  including IG11, IG6, IG7, RM8, RM9, and surrounding areas.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md p-6 rounded-xl border border-[rgba(255,255,255,0.1)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    DVSA Approved Instruction
                  </h3>
                  <p className="text-[rgba(255,255,255,0.7)]">
                    Learn from an official DVSA approved instructor with experience at Red Driving School and AA Driving School. Specializing in automatic driving lessons in Barking with first-time pass focus.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md p-6 rounded-xl border border-[rgba(255,255,255,0.1)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    First Time Pass Specialist
                  </h3>
                  <p className="text-[rgba(255,255,255,0.7)]">
                    Our intensive driving lessons in Barking have a 98% first-time pass rate, 13% higher than the national average. Automatic driving lessons designed to get you passing quickly.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md p-6 rounded-xl border border-[rgba(255,255,255,0.1)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Car className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Comprehensive Coverage
                  </h3>
                  <p className="text-[rgba(255,255,255,0.7)]">
                    We provide intensive driving lessons in Barking across all postcodes: IG11 (Barking), IG6 (Chadwell Heath), IG7 (Hainault), RM8, RM9. Automatic driving lessons available 7 days a week.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Local Area Section - Dark Theme */}
          <section className="py-16 bg-[#0d0d0d]">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Why Choose Our Intensive & Automatic Driving Lessons in Barking?
                </h2>
                <p className="text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto">
                  Barking offers the perfect environment for learner drivers with its mix of quiet residential streets and busier main roads.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Perfect for Test Preparation
                  </h3>
                  <p className="text-[rgba(255,255,255,0.7)] mb-6">
                    Barking Test Centre is known for its challenging routes, making it an excellent place to prepare for your driving test. Our instructors have extensive knowledge of all local test routes.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Quiet residential areas in IG11 perfect for beginners",
                      "Practice on the A13 for dual carriageway experience",
                      "Challenging roundabouts and junctions for advanced skills",
                      "Automatic driving lessons in Barking for easier learning",
                      "Local instructors with specific Barking Test Centre knowledge",
                      "Intensive driving courses in Barking for fast test preparation",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-[rgba(255,255,255,0.8)]">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/images/certifications/C1.png"
                    alt="Barking driving area"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <div className="container mx-auto px-4 text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to Start Your Automatic Driving Lessons in Barking?
              </motion.h2>

              <motion.p
                className="text-xl mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Join hundreds of successful students who passed their test first time with our intensive driving lessons in Barking and automatic driving lessons in Barking.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg"
                  onClick={() => (window.location.href = "/services")}
                >
                  Book Your Automatic Lesson Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BarkingLessons;
