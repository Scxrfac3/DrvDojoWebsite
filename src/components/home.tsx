import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
// import StudentPortalPreview from "./sections/StudentPortalPreview"; // Coming soon
import CertificationsBar from "./sections/CertificationsBar";
import GetStartedSection from "./sections/GetStartedSection";
import FAQSection from "./sections/FAQSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import CTASection from "./sections/CTASection";
import {
  Rocket,
  Sparkles,
  Star,
  Zap,
  CheckCircle,
  Wrench as Tool,
} from "lucide-react";
import Banner from "./ui/Banner";
import confetti from "canvas-confetti";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import SuccessStoriesSection from "./sections/SuccessStoriesSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>

      <Banner />
      <Navbar />

      <main className="pt-0 relative z-10">
        <HeroSection />
        <CertificationsBar />
        <ServicesSection />
        <WhyChooseUsSection />
        <SuccessStoriesSection />
        <TestimonialsSection />

        {/* Free Theory Test Section */}
        <section className="py-16 bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <motion.div
                  className="inline-flex items-center mb-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">🧠</span>
                  Level Up Your Theory Knowledge
                </motion.div>

                <motion.h2
                  className="text-3xl md:text-5xl font-bold mb-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Ace Your Theory Test{" "}
                  <span className="text-yellow-400">First Time</span>
                </motion.h2>

                <motion.p
                  className="text-xl text-white/90 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Our free practice app is giving everything it's supposed to
                  give! Quick tests, full mock exams, and progress tracking that
                  actually helps you pass.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-white text-sm">3000+ Questions</span>
                  </div>

                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-1" />
                    <span className="text-white text-sm">DVSA Approved</span>
                  </div>

                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Sparkles className="h-4 w-4 text-blue-400 mr-1" />
                    <span className="text-white text-sm">Updated for 2024</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="https://drivedojodriving.autos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium rounded-full shadow-lg group relative overflow-hidden"
                  >
                    Start Practicing Now - It's Free!
                    <Zap className="ml-2 h-5 w-5 group-hover:animate-bounce" />
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.4 }}
                      style={{ opacity: 0.2 }}
                    />
                  </a>
                </motion.div>
              </div>

              <motion.div
                className="relative mx-auto max-w-md lg:max-w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-purple-800 rounded-3xl p-6 shadow-2xl border-2 border-purple-700/50 relative overflow-hidden">
                  <div className="absolute top-2 right-2 flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <div className="bg-purple-700 p-2 rounded-full mr-2">
                        <span role="img" aria-label="brain" className="text-xl">
                          🧠
                        </span>
                      </div>
                      <div className="text-white font-bold">
                        Question 1 of 15
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <div className="bg-purple-700/50 text-white px-3 py-1 rounded-lg text-sm">
                        Quick Test (15)
                      </div>
                      <div className="bg-purple-700/50 text-white px-3 py-1 rounded-lg text-sm">
                        Mock Test (50)
                      </div>
                    </div>

                    <div className="text-white font-mono">⏱️ 3399s</div>
                  </div>

                  <div className="w-full bg-purple-700/50 h-2 rounded-full mb-8">
                    <motion.div
                      className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                      style={{ width: "10%" }}
                      animate={{ width: ["10%", "12%", "10%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  <div className="text-white text-xl font-medium mb-8">
                    Watch out for _____ which may be turning at a junction
                    ahead, they may have to use the whole width of the road
                  </div>

                  <div className="space-y-4">
                    <motion.div
                      className="bg-purple-700/50 p-4 rounded-xl cursor-pointer border border-transparent hover:border-white/30 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Police vehicles
                    </motion.div>

                    <motion.div
                      className="bg-purple-700/50 p-4 rounded-xl cursor-pointer border border-transparent hover:border-white/30 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Long vehicles
                    </motion.div>
                  </div>

                  <div className="mt-8 flex justify-between items-center">
                    <div className="text-white/70 text-sm">
                      <span className="font-bold text-white">Category:</span>{" "}
                      Junctions
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-white/70 text-sm">
                        <span className="font-bold text-white">🏆 Points:</span>{" "}
                        0
                      </div>

                      <div className="text-white/70 text-sm">
                        <span className="font-bold text-white">🔥 Streak:</span>{" "}
                        0
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Sparkles className="h-6 w-6 text-white" />
                </motion.div>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <motion.div
                className="inline-flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-white">
                  <div className="font-bold text-2xl">95%</div>
                  <div className="text-sm">Pass Rate</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-white">
                  <div className="font-bold text-2xl">10k+</div>
                  <div className="text-sm">Users</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-white">
                  <div className="font-bold text-2xl">4.9</div>
                  <div className="text-sm">App Rating</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-white">
                  <div className="font-bold text-2xl">Free</div>
                  <div className="text-sm">Forever</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* StudentPortalPreview coming soon */}
        <div className="py-20 px-4 bg-white relative overflow-hidden">
          <div className="container mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Student Portal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our student portal is currently under development. Soon you'll be
              able to track your progress, schedule lessons, and access learning
              materials all in one place.
            </p>
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
              <span className="flex items-center">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                Coming Soon
              </span>
            </div>
          </div>
        </div>
        <GetStartedSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
