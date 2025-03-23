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
import { Rocket, Sparkles, Star, Zap } from "lucide-react";
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
