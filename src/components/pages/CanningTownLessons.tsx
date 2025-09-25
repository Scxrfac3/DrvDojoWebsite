import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SEO from "@/components/ui/SEO";
import {
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Car,
  Shield,
  Award,
} from "lucide-react";

const CanningTownLessons = () => {
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the postcode submission - in a real app this would redirect to booking
    window.location.href = `/booking?postcode=${postcode}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-sky-200 to-blue-100 relative overflow-hidden">
      <SEO
        title="Expert Driving Lessons in Canning Town, Silvertown & E16 | DVSA Approved Instructor"
        description="Learn from a DVSA approved instructor specializing in intensive driving lessons in canning town and automatic driving lessons in silver town. Former Red & AA Driving School instructor helping students pass first time in Goodmayes DTC, Wanstead driving test centre or Chingford test centre. Online booking available."
        keywords="driving lessons canning town, intensive driving lessons canning town, automatic driving lessons silver town, pass first time goodmayes dtc, wanstead driving test centre, chingford test centre, DVSA approved instructor, driving school canning town, E16 postcodes, driving instructor silvertown, online booking driving lessons"
        canonical="/driving-lessons/canning-town"
      />
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>

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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-500">
                    DVSA Approved Driving Lessons
                  </span>{" "}
                  <br className="hidden md:block" />
                  <span className="text-slate-800">in Canning Town & Silvertown - Online Booking Available</span>
                </h1>

                <p className="text-xl text-slate-700 mb-8">
                  <span className="font-semibold">
                    Professional intensive driving lessons in canning town & automatic driving lessons in silver town
                  </span>{" "}
                  — Learn from an official DVSA approved instructor who specializes in helping students pass first time in Goodmayes DTC, Wanstead driving test centre or Chingford test centre. Former instructor with Red Driving School and AA Driving School, serving all E16 postcodes.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
                >
                  <div className="relative flex-grow">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Enter E16, E14, E6, or other East London postcode"
                      className="pl-10 bg-white border-gray-200"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white group relative overflow-hidden"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.4 }}
                      style={{ opacity: 0.2 }}
                    />
                  </Button>
                </form>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/certifications/C7.png"
                    alt="Driving lessons in Canning Town"
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
                      "My instructor was amazing! Passed my test first time with
                      lessons in Canning Town!"
                    </p>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-5 -right-5 bg-white rounded-full p-4 shadow-lg"
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
                  className="absolute -bottom-5 -left-5 bg-white rounded-full p-3 shadow-lg"
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

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl shadow-md border border-sky-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-sky-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  DVSA Approved Instruction
                </h3>
                <p className="text-gray-700">
                  Learn from an official DVSA approved instructor with experience at Red Driving School and AA Driving School. Specializing in intensive driving lessons in canning town and helping students pass first time in Goodmayes DTC, Wanstead driving test centre or Chingford test centre.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-xl shadow-md border border-blue-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-blue-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  First-Time Pass Specialist
                </h3>
                <p className="text-gray-700">
                  Our first-time pass rate is 13% higher than the national average. We specialize in helping students pass first time in Goodmayes DTC, Wanstead driving test centre or Chingford test centre with comprehensive intensive driving lessons in canning town and automatic driving lessons in silver town.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-sky-50 to-cyan-50 p-6 rounded-xl shadow-md border border-sky-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-sky-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Local E16 Postcode Expert
                </h3>
                <p className="text-gray-700">
                  Serving all E16 postcodes and surrounding areas including E14, E15, E6, E7, and E13. Our automatic driving lessons in silver town are designed for the unique road conditions of the Canning Town and Silvertown area.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Local Area Section */}
        <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Comprehensive Driving Lessons Across Canning Town, Silvertown & Surrounding Areas
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer specialized intensive driving lessons in canning town and automatic driving lessons in silver town, covering all E16 postcodes with expert local knowledge to help you pass first time in Goodmayes DTC, Wanstead driving test centre or Chingford test centre.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Expertise in Local Test Routes
                </h3>
                <p className="text-gray-700 mb-6">
                  Our intensive driving lessons in canning town are designed by a DVSA approved instructor who knows every test route in the area. We specialize in helping students pass first time in Goodmayes DTC, Wanstead driving test centre or Chingford test centre with focused training on local roads.
                </p>

                <ul className="space-y-3">
                  {[
                    "Serving all E16 postcodes and surrounding areas: E14, E15, E6, E7, E13",
                    "Specialized automatic driving lessons in silver town",
                    "Experience with Goodmayes DTC, Wanstead driving test centre and Chingford test centre routes",
                    "Training on A13, Silvertown Way, and surrounding East London areas",
                    "Expert knowledge of Canning Town's complex junctions and roundabouts",
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
                      <span>{item}</span>
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
                  src="/images/certifications/c5.png"
                  alt="Canning Town driving area"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Start Your Journey to Driving Success in Canning Town & Silvertown
            </motion.h2>

            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join thousands of successful students who passed their test first time in Goodmayes DTC, Wanstead driving test centre or Chingford test centre with our intensive driving lessons in canning town and automatic driving lessons in silver town. Book online today!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-white text-sky-700 hover:bg-sky-50 shadow-lg"
                onClick={() => (window.location.href = "/services")}
              >
                Book Your Automatic Lesson Now - Online Booking Available
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CanningTownLessons;
