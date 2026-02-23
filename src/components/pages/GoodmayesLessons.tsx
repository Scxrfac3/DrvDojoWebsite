import React, { useState, useEffect } from "react";
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
  Zap,
  Trophy,
  Users,
  Heart,
  Play,
  Phone,
  MessageCircle,
} from "lucide-react";

const GoodmayesLessons = () => {
  const [postcode, setPostcode] = useState("");
  const [currentStat, setCurrentStat] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [likedFeatures, setLikedFeatures] = useState<Set<number>>(new Set());

  const stats = [
    { icon: Star, number: '98%', label: 'Pass Rate', color: 'text-yellow-400' },
    { icon: Users, number: '2000+', label: 'Students', color: 'text-blue-300' },
    { icon: Trophy, number: '8+', label: 'Years', color: 'text-green-400' },
    { icon: Zap, number: '24hr', label: 'Response', color: 'text-orange-400' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleLike = (index: number) => {
    const newLiked = new Set(likedFeatures);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedFeatures(newLiked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the postcode submission - in a real app this would redirect to booking
    window.location.href = `/booking?postcode=${postcode}`;
  };

  return (
    <>
      <SEO
        title="Expert Driving Lessons in Goodmayes & IG Postcodes | DVSA Approved Instructor"
        description="Learn from a DVSA approved instructor specializing in intensive driving lessons in Goodmayes and automatic driving lessons in Seven Kings. Former Red & AA Driving School instructor helping students pass first time in Goodmayes DTC. Online booking available."
        keywords="driving lessons goodmayes, intensive driving lessons goodmayes, automatic driving lessons seven kings, pass first time goodmayes dtc, DVSA approved instructor, driving school goodmayes, IG postcodes, driving instructor goodmayes, online booking driving lessons"
        canonical="/driving-lessons/goodmayes"
      />
      <div className="min-h-screen bg-[#0d0d0d] relative overflow-hidden">
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
                    DVSA Approved Driving Lessons
                  </span>{" "}
                  <br className="hidden md:block" />
                  <span className="text-white">in Goodmayes - Online Booking Available</span>
                </h1>

                <p className="text-xl text-[rgba(255,255,255,0.8)] mb-8">
                  <span className="font-semibold text-orange-400">
                    Professional intensive driving lessons in Goodmayes & automatic driving lessons in Seven Kings
                  </span>{" "}
                  — Learn from an official DVSA approved instructor who specializes in helping students pass first time in Goodmayes DTC. Former instructor with Red Driving School and AA Driving School, serving all IG postcodes.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
                >
                  <div className="relative flex-grow">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Enter IG1, IG2, IG3, or other IG postcode"
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
                    src="/images/certifications/c5.png"
                    alt="Driving lessons in Goodmayes"
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
                      "Excellent instruction helped me pass first time at
                      Goodmayes Test Centre. Highly recommended for all
                      learners."
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

        {/* Features Section - Dark Theme */}
        <section className="py-16 bg-[#0d0d0d]">
          <div className="container mx-auto px-4">
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
                  Learn from an official DVSA approved instructor with experience at Red Driving School and AA Driving School. Specializing in intensive driving lessons in Goodmayes and helping students pass first time in Goodmayes DTC.
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
                  First-Time Pass Specialist
                </h3>
                <p className="text-[rgba(255,255,255,0.7)]">
                  Our first-time pass rate is 13% higher than the national average. We specialize in helping students pass first time in Goodmayes DTC with comprehensive intensive driving lessons in Goodmayes and automatic driving lessons in Seven Kings.
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
                  Local IG Postcode Expert
                </h3>
                <p className="text-[rgba(255,255,255,0.7)]">
                  Serving all IG postcodes including IG1, IG2, IG3, IG4, IG5, IG6, IG7, IG8, IG9, IG10, and IG11. Our automatic driving lessons in Seven Kings are designed for the unique road conditions of the Goodmayes area.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Local Area Section */}
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
                Comprehensive Driving Lessons Across Goodmayes & Seven Kings
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto">
                We offer specialized intensive driving lessons in Goodmayes and automatic driving lessons in Seven Kings, covering all IG postcodes with expert local knowledge to help you pass first time in Goodmayes DTC.
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
                  Expertise in Goodmayes Test Routes
                </h3>
                <p className="text-[rgba(255,255,255,0.7)] mb-6">
                  Our intensive driving lessons in Goodmayes are designed by a DVSA approved instructor who knows every test route in the area. We specialize in helping students pass first time in Goodmayes DTC with focused training on local roads.
                </p>

                <ul className="space-y-3">
                  {[
                    "Serving all IG postcodes: IG1, IG2, IG3, IG4, IG5, IG6, IG7, IG8, IG9, IG10, IG11",
                    "Specialized automatic driving lessons in Seven Kings",
                    "Experience with Goodmayes DTC test routes and challenges",
                    "Training on A12 Eastern Avenue and surrounding areas",
                    "Expert knowledge of Seven Kings and Goodmayes complex junctions",
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
                  src="/images/certifications/Goodmayes.png"
                  alt="Goodmayes driving area"
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
              Start Your Journey to Driving Success in Goodmayes
            </motion.h2>

            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join thousands of successful students who passed their test first time in Goodmayes DTC with our intensive driving lessons in Goodmayes and automatic driving lessons in Seven Kings.
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

export default GoodmayesLessons;
