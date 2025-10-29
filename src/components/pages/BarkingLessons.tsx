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
  Heart,
  Play,
  Phone,
  MessageCircle,
} from "lucide-react";

// SEO Meta Tags Component
const SEOMetaTags = ({ location }: { location: string }) => (
  <>
    <title>{`Automatic & Intensive Driving Lessons in Barking | DVSA Approved Instructor | First Time Pass`}</title>
    <meta name="description" content={`Learn to drive in Barking with official DVSA approved instructor specializing in first time passes. Offering intensive and automatic driving lessons across all Barking postcodes. Former instructor with Red Driving School and AA Driving School. Book your lesson today!`} />
    <meta name="keywords" content={`driving lessons barking, intensive driving lessons barking, automatic driving lessons barking, driving school barking, dvsa approved instructor barking, driving instructor barking, first time pass barking`} />
    <meta property="og:title" content={`Automatic & Intensive Driving Lessons in Barking | First Time Pass Specialist`} />
    <meta property="og:description" content={`Official DVSA approved driving instructor in Barking. Specializing in intensive and automatic driving lessons with high first time pass rate. Covering all Barking postcodes.`} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={`Automatic & Intensive Driving Lessons in Barking | First Time Pass Specialist`} />
    <meta name="twitter:description" content={`Official DVSA approved driving instructor in Barking. Specializing in intensive and automatic driving lessons with high first time pass rate.`} />
  </>
);

const BarkingLessons = () => {
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
      <SEOMetaTags location="Barking" />
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">

      <Navbar />

      <main className="pt-[100px] pb-20 relative z-10">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white overflow-hidden min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 animate-pulse" />
                    <span className="text-sm font-medium">DVSA Approved ✨</span>
                  </div>
                  <div className="flex items-center bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-400/30">
                    <Zap className="h-5 w-5 text-orange-400 mr-2" />
                    <span className="text-sm font-medium">Quick Start 🚀</span>
                  </div>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-orange-300 bg-clip-text text-transparent">
                    Automatic & Intensive Driving Lessons
                  </span>
                  <br />
                  <span className="text-orange-400 inline-block">in Barking</span>
                  <span className="text-2xl lg:text-3xl ml-4">🚗</span>
                </h1>

                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8">
                  <span className="font-semibold">
                    DVSA Approved Instructor | First Time Pass Specialist
                  </span>{" "}
                  — Former instructor with Red Driving School and AA Driving School.
                  Offering expert intensive driving lessons in Barking and automatic driving lessons in Barking
                  with the highest pass rates. Covering all Barking postcodes with personalized training.
                </p>

                {/* Animated Stats */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
                  <div className="grid grid-cols-4 gap-4">
                    {stats.map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <div
                          key={index}
                          className={`text-center transition-all duration-500 ${
                            currentStat === index ? 'scale-110 transform' : 'scale-100'
                          }`}
                        >
                          <IconComponent className={`h-6 w-6 mx-auto mb-2 ${stat.color} ${
                            currentStat === index ? 'animate-bounce' : ''
                          }`} />
                          <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                          <div className="text-xs text-blue-200">{stat.label}</div>
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
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Enter pickup postcode"
                      className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70"
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

                {/* Social Proof */}
                <div className="flex items-center space-x-6 text-sm mt-6">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-3">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                      ))}
                    </div>
                    <span className="text-blue-200">2000+ successful drivers</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-blue-200">4.9/5 rating</span>
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
                      "My instructor was amazing! Passed my test first time at
                      Barking Test Centre!"
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
                Barking Postcode Coverage
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive driving lessons across all Barking postcodes,
                including IG11, IG6, IG7, RM8, RM9, and surrounding areas.
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
                  DVSA Approved Instruction
                </h3>
                <p className="text-gray-700">
                  When you choose our intensive driving lessons in Barking, you're learning
                  from an official DVSA approved instructor with experience at Red Driving School
                  and AA Driving School. Specializing in automatic driving lessons in Barking with
                  first-time pass focus.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl shadow-md border border-sky-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-sky-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  First Time Pass Specialist
                </h3>
                <p className="text-gray-700">
                  Our intensive driving lessons in Barking have a 98% first-time pass rate,
                  13% higher than the national average. Our automatic driving lessons in Barking
                  are designed to get you passing quickly and confidently. We cover all test routes
                  in Barking and surrounding areas.
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
                  Comprehensive Coverage
                </h3>
                <p className="text-gray-700">
                  We provide intensive driving lessons in Barking across all postcodes:
                  IG11 (Barking), IG6 (Chadwell Heath), IG7 (Hainault), RM8 (Dagenham),
                  RM9 (Dagenham East). Our automatic driving lessons in Barking are available
                  7 days a week with flexible scheduling.
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
                Why Choose Our Intensive & Automatic Driving Lessons in Barking?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Barking offers the perfect environment for learner drivers with
                its mix of quiet residential streets and busier main roads. Our intensive
                driving lessons in Barking are designed to get you test-ready quickly.
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
                  Barking Test Centre is known for its challenging routes,
                  making it an excellent place to prepare for your driving test.
                  Our instructors have extensive knowledge of all local test
                  routes and will ensure you're fully prepared for both intensive
                  driving lessons in Barking and automatic driving lessons in Barking.
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
                  alt="Barking driving area"
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
              Ready to Start Your Automatic Driving Lessons in Barking?
            </motion.h2>

            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join hundreds of successful students who passed their test first time with our
              intensive driving lessons in Barking and automatic driving lessons in Barking.
              DVSA approved instructor with experience at Red Driving School and AA Driving School.
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

export default BarkingLessons;
