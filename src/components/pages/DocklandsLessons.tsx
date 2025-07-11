import React, { useState } from "react";
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
} from "lucide-react";
import SpecialOffersSection from "../sections/SpecialOffersSection";

const DocklandsLessons = () => {
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the postcode submission - in a real app this would redirect to booking
    window.location.href = `/booking?postcode=${postcode}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
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
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Learn to drive in
                  </span>{" "}
                  <br className="hidden md:block" />
                  <span>Docklands</span>
                </h1>

                <p className="text-xl text-gray-700 mb-8">
                  Driving lessons in Docklands from one of the most trusted
                  schools in London.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
                >
                  <div className="relative flex-grow">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Enter pickup postcode"
                      className="pl-10 bg-white border-gray-200"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
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
                    src="/images/certifications/C8.png"
                    alt="Driving lessons in Docklands"
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
                      lessons in Docklands!"
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
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md border border-blue-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-blue-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Quality instruction
                </h3>
                <p className="text-gray-700">
                  When you choose a Drive Dojo instructor in Docklands, you're
                  learning with a fully qualified professional who knows the
                  local area inside out and is committed to your success.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md border border-purple-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-purple-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Top notch pass rates
                </h3>
                <p className="text-gray-700">
                  Our first-time pass rate is 13% higher than the national
                  average. That's because all our instructors are fully
                  qualified experts in driving instruction, with specific
                  knowledge of Docklands roads and test routes.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md border border-green-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-green-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  One of London's best
                </h3>
                <p className="text-gray-700">
                  Our reputation is the best in the business, which is why we
                  deliver thousands of lessons every week. Learn with Drive Dojo
                  and we'll have you feeling confident driving around Docklands
                  and passing your test in no time.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Local Area Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Why Learn to Drive in Docklands?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Docklands offers a unique environment for learner drivers with
                its modern road layout, waterfront views, and mix of busy and
                quiet areas.
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
                  Perfect for Test Preparation
                </h3>
                <p className="text-gray-700 mb-6">
                  Learning to drive in Docklands gives you access to a variety
                  of road conditions that will prepare you for your driving
                  test. Our instructors have extensive knowledge of all local
                  test routes and will ensure you're fully prepared.
                </p>

                <ul className="space-y-3">
                  {[
                    "Modern road layouts with clear markings",
                    "Experience with multi-lane roundabouts",
                    "Practice on the A1261 and Aspen Way",
                    "Navigating one-way systems and complex junctions",
                    "Instructors with specific knowledge of Docklands roads",
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
                  src="/images/certifications/C6.png"
                  alt="Docklands driving area"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Special Offers Section */}
        <SpecialOffersSection />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to Start Driving in Docklands?
            </motion.h2>

            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Book your first lesson today and take the first step towards
              driving freedom in Docklands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg"
                onClick={() => (window.location.href = "/booking")}
              >
                Book Your First Lesson
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

export default DocklandsLessons;
