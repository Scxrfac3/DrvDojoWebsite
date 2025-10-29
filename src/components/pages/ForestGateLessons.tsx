import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SEO from "../ui/SEO";
import {
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Car,
  Shield,
  Award,
} from "lucide-react";

const ForestGateLessons = () => {
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the postcode submission - in a real app this would redirect to booking
    window.location.href = `/booking?postcode=${postcode}`;
  };

  return (
    <>
      <SEO
        title="Driving Lessons Forest Gate | DVSA Approved Instructor | E7 Postcode Coverage"
        description="Expert intensive driving lessons in E7 and automatic driving lessons in Forest Gate from a DVSA approved instructor. Former Red Driving School & AA Driving School instructor specializing in first-time passes. Covering all E postcodes including E6, E7, E11, E12, E13, E15, E16 and IG postcodes."
        keywords="driving lessons Forest Gate, intensive driving lessons E7, automatic driving lessons Forest Gate, DVSA approved instructor, Red Driving School, AA Driving School, driving lessons E7, driving instructor Forest Gate, first time pass, E postcode driving lessons, driving lessons East London"
        canonical="https://drivedojodrivingschool.com/driving-lessons/forest-gate"
      />
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">

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
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-600">
                    Expert Driving Lessons in Forest Gate
                  </span>{" "}
                  <br className="hidden md:block" />
                  <span className="text-gray-800">DVSA Approved Instructor</span>
                </h1>

                <p className="text-xl text-gray-700 mb-8">
                  <span className="font-semibold">
                    Professional intensive driving lessons in E7 and automatic driving lessons in Forest Gate
                  </span>{" "}
                  — Learn from an official DVSA approved instructor who specializes in helping students pass first time. With experience working with national driving schools like Red Driving School and AA Driving School, I provide expert instruction across all E postcodes.
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
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group relative overflow-hidden"
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
                    src="/images/certifications/FrontLOW.png"
                    alt="Driving lessons in Forest Gate"
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
                      lessons in Forest Gate!"
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Why Choose My Driving Lessons in Forest Gate?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                As a DVSA approved instructor with experience at Red Driving School and AA Driving School,
                I specialize in helping students pass first time with intensive driving lessons in E7 and automatic driving lessons in Forest Gate.
              </p>
            </div>
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
                  DVSA Approved Expertise
                </h3>
                <p className="text-gray-700">
                  When you choose my intensive driving lessons in E7, you're learning with a fully qualified DVSA approved instructor who knows Forest Gate and all E postcodes inside out. My experience with national driving schools ensures professional, structured lessons tailored to your success.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-blue-50 to-sky-100 p-6 rounded-xl shadow-md border border-blue-200"
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
                  First-Time Pass Specialization
                </h3>
                <p className="text-gray-700">
                  My first-time pass rate exceeds the national average by 13%. Through specialized automatic driving lessons in Forest Gate and intensive courses across E7, E11, E12, and E15 postcodes, I've helped countless students pass their driving test confidently and efficiently.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl shadow-md border border-sky-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-sky-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Comprehensive Local Coverage
                </h3>
                <p className="text-gray-700">
                  I provide expert driving lessons across all E postcodes including E7 (Forest Gate), E11 (Leytonstone), E12 (Manor Park), E15 (Stratford), E6 (East Ham), E13 (Plaistow), E16 (Canning Town), and IG postcodes. My automatic driving lessons in Forest Gate are designed for maximum success.
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
                Comprehensive Coverage Across E Postcodes
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                My intensive driving lessons in E7 and automatic driving lessons in Forest Gate cover all East London areas,
                providing expert instruction tailored to local test routes and driving conditions.
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
                  Local Expertise for First-Time Success
                </h3>
                <p className="text-gray-700 mb-6">
                  As a DVSA approved instructor with experience at Red Driving School and AA Driving School,
                  I specialize in intensive driving lessons in E7 and automatic driving lessons in Forest Gate.
                  My comprehensive knowledge of local test routes across all E postcodes gives my students the best chance of passing first time.
                </p>

                <ul className="space-y-3">
                  {[
                    "Expert intensive driving lessons in E7 (Forest Gate) and surrounding areas",
                    "Specialized automatic driving lessons in Forest Gate with modern vehicles",
                    "Comprehensive coverage of E postcodes: E6, E7, E11, E12, E13, E15, E16",
                    "Experience with IG postcodes including IG1, IG2, IG3, IG4, IG5, IG6",
                    "In-depth knowledge of local test centers: Wanstead, Barking, Goodmayes",
                    "Flexible lesson scheduling for intensive courses across East London",
                    "Proven track record of helping students pass first time with structured lessons",
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
                  src="/images/certifications/C1.png"
                  alt="Forest Gate driving area"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>


        {/* Instructor Credentials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Your DVSA Approved Driving Instructor
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                With extensive experience at national driving schools, I bring expert knowledge and proven teaching methods to help you pass first time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg order-2 md:order-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/certifications/DVSA-ADI.png"
                  alt="DVSA Approved Instructor"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  National Experience, Local Expertise
                </h3>
                <p className="text-gray-700 mb-6">
                  As a fully qualified DVSA approved instructor, I've worked with some of the UK's most respected national driving schools including Red Driving School and AA Driving School. This experience has given me unique insights into the most effective teaching methods for helping students pass their driving test first time.
                </p>

                <ul className="space-y-3">
                  {[
                    "DVSA Approved Driving Instructor with full certification",
                    "Extensive experience with Red Driving School and AA Driving School",
                    "Specialized in intensive driving lessons in E7 and automatic driving lessons in Forest Gate",
                    "Proven track record of first-time passes across all E postcodes",
                    "In-depth knowledge of local test routes and examination criteria",
                    "Patient, professional instruction tailored to individual learning styles",
                    "Modern dual-control vehicles for safe, effective learning",
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
              Start Your Driving Journey in Forest Gate Today
            </motion.h2>

            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Book your automatic driving lesson today and take the first step towards
              driving freedom in Forest Gate and surrounding E postcodes.
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

export default ForestGateLessons;
