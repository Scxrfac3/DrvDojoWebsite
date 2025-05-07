import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import DualControlInstallationDetails from "../sections/DualControlInstallationDetails";
import CertificationsBar from "../sections/CertificationsBar";
import GetStartedSection from "../sections/GetStartedSection";
import FAQSection from "../sections/FAQSection";
import { motion } from "framer-motion";

const DualControlInstallation = () => {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-600/20 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-green-600/20 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-600/20 rounded-full opacity-20 blur-3xl"></div>

      <Navbar />

      <main className="pt-[100px] relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <DualControlInstallationDetails />
          <CertificationsBar />
          <GetStartedSection />
          <FAQSection />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default DualControlInstallation;
