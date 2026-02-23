import React from "react";
import { motion } from "framer-motion";
import NewHeroSection from "./sections/NewHeroSection";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import NewTestimonialsSection from "./sections/NewTestimonialsSection";
import CertificationsBar from "./sections/CertificationsBar";
import GetStartedSection from "./sections/GetStartedSection";
import FAQSection from "./sections/FAQSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import CTASection from "./sections/CTASection";
import PostcodesSection from "./sections/PostcodesSection";
import {
  Rocket,
  Sparkles,
  Star,
  Zap,
  CheckCircle,
  Wrench as Tool,
} from "lucide-react";
import Banner from "./ui/Banner";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import SuccessStoriesSection from "./sections/SuccessStoriesSection";

const Home = () => {
  return (
    <>
      {/* Main Page Content */}
      <div className="min-h-screen bg-[#0d0d0d] relative overflow-hidden">
        {/* Background decorative elements - subtle dark theme */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        <Banner />
        <Navbar />

        <main className="pt-0 relative z-10">
          <NewHeroSection />
          <CertificationsBar />
          <SuccessStoriesSection />
          <WhyChooseUsSection />
          <NewTestimonialsSection />

          {/* Free Theory Test Section */}
          <section className="py-16 bg-[#1a1a1a] relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-primary/5"
                  style={{
                    width: Math.random() * 100 + 50,
                    height: Math.random() * 100 + 50,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 0.1, scale: 0 }}
                  animate={{
                    opacity: [0.05, 0.15, 0.05],
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
                    className="inline-flex items-center mb-3 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium text-white backdrop-blur-sm"
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
                    <span className="text-primary">First Time</span>
                  </motion.h2>

                  <motion.p
                    className="text-xl text-gray-400 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    Our free DVSA-approved practice app offers comprehensive theory test preparation. Quick tests, full mock exams, and progress tracking designed specifically for automatic driving students.
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-white text-sm">3000+ Questions</span>
                    </div>

                    <div className="flex items-center bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-success mr-1" />
                      <span className="text-white text-sm">DVSA Approved</span>
                    </div>

                    <div className="flex items-center bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                      <Sparkles className="h-4 w-4 text-primary mr-1" />
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
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl shadow-glow hover:shadow-glow-lg transition-all"
                    >
                      Start Practicing Now - It's Free!
                      <Zap className="ml-2 h-5 w-5" />
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
                  <div className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center">
                        <div className="bg-primary/20 p-2 rounded-full mr-2">
                          <span role="img" aria-label="brain" className="text-xl">
                            🧠
                          </span>
                        </div>
                        <div className="text-white font-bold">
                          Question 1 of 15
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <div className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm">
                          Quick Test (15)
                        </div>
                        <div className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm">
                          Mock Test (50)
                        </div>
                      </div>

                      <div className="text-white font-mono">⏱️ 3399s</div>
                    </div>

                    <div className="w-full bg-white/10 h-2 rounded-full mb-8">
                      <motion.div
                        className="h-full bg-primary rounded-full"
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
                        className="bg-white/5 p-4 rounded-xl cursor-pointer border border-transparent hover:border-primary/30 transition-colors text-white"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Police vehicles
                      </motion.div>

                      <motion.div
                        className="bg-white/5 p-4 rounded-xl cursor-pointer border border-transparent hover:border-primary/30 transition-colors text-white"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Long vehicles
                      </motion.div>
                    </div>

                    <div className="mt-8 flex justify-between items-center">
                      <div className="text-gray-400 text-sm">
                        <span className="font-bold text-white">Category:</span>{" "}
                        Junctions
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="text-gray-400 text-sm">
                          <span className="font-bold text-white">🏆 Points:</span>{" "}
                          0
                        </div>

                        <div className="text-gray-400 text-sm">
                          <span className="font-bold text-white">🔥 Streak:</span>{" "}
                          0
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-primary rounded-full p-3 shadow-glow"
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
                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                    <div className="font-bold text-2xl text-white">95%</div>
                    <div className="text-sm text-gray-400">Pass Rate</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                    <div className="font-bold text-2xl text-white">10k+</div>
                    <div className="text-sm text-gray-400">Users</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                    <div className="font-bold text-2xl text-white">4.9</div>
                    <div className="text-sm text-gray-400">App Rating</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                    <div className="font-bold text-2xl text-primary">Free</div>
                    <div className="text-sm text-gray-400">Forever</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <PostcodesSection />
          <GetStartedSection />
          <FAQSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
