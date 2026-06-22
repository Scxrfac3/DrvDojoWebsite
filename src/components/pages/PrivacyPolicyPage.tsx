import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import SEO from "@/components/ui/SEO";
import { motion } from "framer-motion";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Drive Dojo Driving School"
        description="Drive Dojo Driving School Privacy Policy. Learn how we collect, use, and protect your personal information when you book driving lessons with us in East London."
        keywords="privacy policy, Drive Dojo privacy, driving school privacy policy, data protection, UK GDPR, East London driving school"
        canonical="https://drivedojodrivingschool.com/privacy-policy"
      />
      <div className="min-h-screen bg-[#0d0d0d] text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        <Navbar />

        <main className="pt-[120px] pb-20 relative z-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center mb-4 bg-primary/20 border border-primary/30 px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Your Privacy Matters</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500">
                  Privacy Policy
                </span>
              </h1>
              <p className="text-gray-400">Last updated: June 2026</p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold mb-3 text-white">Introduction</h2>
                <p className="text-gray-400 leading-relaxed">
                  Drive Dojo Driving School ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold mb-3 text-white">Information We Collect</h2>
                <h3 className="text-lg font-semibold mb-2 text-primary">Personal Information</h3>
                <p className="text-gray-400 mb-3">We may collect personal information that you provide directly to us, including:</p>
                <ul className="space-y-2 text-gray-400 mb-4">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Name, email address, phone number</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Postal address and postcode</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Date of birth (for licence verification)</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Provisional driving licence number</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Payment information</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Lesson preferences and progress notes</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2 text-primary">Automatically Collected Information</h3>
                <p className="text-gray-400 mb-3">When you visit our website, we may automatically collect:</p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>IP address and browser type</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Pages visited and time spent on site</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Referring website</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Device information</li>
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-bold mb-3 text-white">How We Use Your Information</h2>
                <p className="text-gray-400 mb-3">We use the information we collect to:</p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Provide and improve our driving instruction services</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Process bookings and payments</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Communicate with you about lessons and updates</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Send marketing communications (with your consent)</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Comply with legal obligations</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Analyse website usage and improve our services</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section>
                <h2 className="text-2xl font-bold mb-3 text-white">Information Sharing</h2>
                <p className="text-gray-400 mb-3">We may share your information with:</p>
                <ul className="space-y-2 text-gray-400 mb-3">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Our driving instructors (to provide lessons)</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Payment processors (to handle transactions)</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>DVSA (if required for test bookings)</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Legal authorities (if required by law)</li>
                </ul>
                <p className="text-gray-400">We do not sell your personal information to third parties.</p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold mb-3 text-white">Data Security</h2>
                <p className="text-gray-400 leading-relaxed">
                  We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold mb-3 text-white">Your Rights</h2>
                <p className="text-gray-400 mb-3">Under UK GDPR, you have the right to:</p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Access your personal data</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Rectify inaccurate data</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Request erasure of your data</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Restrict processing of your data</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Data portability</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Object to processing</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Withdraw consent at any time</li>
                </ul>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold mb-3 text-white">Cookies</h2>
                <p className="text-gray-400 leading-relaxed">
                  We use cookies to improve your experience on our website. See our Cookie Policy for more information.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-bold mb-3 text-white">Data Retention</h2>
                <p className="text-gray-400 leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Typically, we retain customer records for 7 years after your last interaction with us.
                </p>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-bold mb-3 text-white">Contact Us</h2>
                <p className="text-gray-400 mb-4">If you have questions about this Privacy Policy or wish to exercise your rights, contact us at:</p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-400">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <a href="mailto:drivedojo@gmail.com" className="hover:text-primary transition-colors">drivedojo@gmail.com</a>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <a href="tel:07487228866" className="hover:text-primary transition-colors">07487228866</a>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span>Service Area: East London, Redbridge, Havering & Barking, London</span>
                  </div>
                </div>
              </section>

              {/* Changes to This Policy */}
              <section>
                <h2 className="text-2xl font-bold mb-3 text-white">Changes to This Policy</h2>
                <p className="text-gray-400 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;