import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  BookOpen,
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
    window.location.href = `/services?postcode=${encodeURIComponent(postcode)}`;
  };

  return (
    <>
      <SEO
        title="Book Driving Lessons in Goodmayes Instantly | Live Availability | Drive Dojo"
        description="Book your driving lessons instantly and spread the cost. We accept Klarna — pay in 3 interest-free! View live availability and book 10-hour blocks online in 60 seconds with Drive Dojo. DVSA approved, Mercedes-Benz automatic, first 2 hours £70. Goodmayes DTC specialists. Covering IG postcodes & East London."
        keywords="driving lessons Goodmayes, driving instructor Goodmayes, automatic driving lessons Seven Kings, intensive driving lessons Goodmayes, DVSA approved driving instructor Goodmayes, driving school Goodmayes, Goodmayes DTC driving lessons, IG postcodes driving lessons, Mercedes automatic driving lessons, best driving instructor Goodmayes"
        canonical="https://drivedojodrivingschool.com/driving-lessons/goodmayes"
        serviceSchema={{
          name: "Driving Lessons in Goodmayes",
          description: "Professional driving lessons in Goodmayes with DVSA approved ADI instructor. First 2 hours £70, then from £34/hr. Automatic Mercedes-Benz A-Class. Goodmayes DTC specialists. Covering all IG postcodes.",
          provider: { name: "Drive Dojo Driving School", url: "https://drivedojodrivingschool.com" },
          price: "70", priceCurrency: "GBP", areaServed: "Goodmayes, Seven Kings, IG postcodes, East London"
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Drive Dojo Driving School – Goodmayes","description":"DVSA approved driving lessons in Goodmayes and Seven Kings. Automatic Mercedes-Benz A-Class. Goodmayes DTC specialists. First 2 hours £70.","url":"https://drivedojodrivingschool.com/driving-lessons/goodmayes","telephone":"+447487228866","email":"drivedojo@gmail.com","areaServed":["Goodmayes","Seven Kings","IG1","IG2","IG3","IG4","IG5","IG6","East London"],"address":{"@type":"PostalAddress","addressLocality":"Goodmayes","addressRegion":"East London","postalCode":"IG3","addressCountry":"GB"},"geo":{"@type":"GeoCoordinates","latitude":51.5588,"longitude":0.0736},"priceRange":"£70 – £950","paymentAccepted":"Cash, Credit Card, Klarna"}) }} />
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
                    First 2 Hours Only £49
                  </span>{" "}
                  <br className="hidden md:block" />
                  <span className="text-white">Driving Lessons in Goodmayes</span>
                </h1>

                <div className="mb-8 p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30">
                  <p className="text-lg text-white font-medium">
                    <span className="text-orange-400 font-bold">£49</span> for your first 2 hours — then{" "}
                    <span className="text-orange-400 font-bold">£25/hr</span> ongoing. Book now!
                  </p>
                </div>

                <p className="text-xl text-[rgba(255,255,255,0.8)] mb-8">
                  <span className="font-semibold text-orange-400">
                    Professional DVSA approved ADI instructor in Goodmayes
                  </span>{" "}
                  — Learn from an official DVSA approved instructor who specializes in helping students pass first time in Goodmayes DTC. Former instructor with Red Driving School and AA Driving School, serving all IG postcodes.
                </p>

                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] max-w-md mx-auto lg:mx-0">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <div className="relative flex-grow">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                      <Input
                        type="text"
                        placeholder="Enter IG1, IG2, IG3, or other IG postcode"
                        className="pl-10 bg-white/20 border border-white/30 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg"
                    >
                      Get Started Today
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
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

        {/* Related Blog Articles */}
        <section className="py-16 bg-[#111111]">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center mb-3 bg-orange-500/20 px-4 py-2 rounded-full text-sm font-medium text-orange-400 border border-orange-500/30">
                <BookOpen className="h-4 w-4 mr-2" />
                Related Guides
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Useful Reading for Goodmayes Learners
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "How to Pass Your Test at Goodmayes: Insider Tips",
                  excerpt: "Routes, common faults, and what the examiner is looking for.",
                  slug: "pass-driving-test-goodmayes-tips",
                  tag: "Test Prep",
                },
                {
                  title: "What Is the Pass Rate at Goodmayes? (And How to Beat It)",
                  excerpt: "The real numbers and a targeted action plan to beat the average.",
                  slug: "goodmayes-driving-test-pass-rate",
                  tag: "Statistics",
                },
                {
                  title: "Failed at Goodmayes? Here's Exactly What to Do Next",
                  excerpt: "Step-by-step recovery plan — from DL25 to resit success.",
                  slug: "failed-driving-test-goodmayes-what-to-do",
                  tag: "Recovery",
                },
                {
                  title: "Mock Driving Tests in East London",
                  excerpt: "Why a mock test is essential before your Goodmayes test day.",
                  slug: "mock-driving-test-east-london",
                  tag: "Mock Test",
                },
              ].map((article, index) => (
                <motion.div
                  key={index}
                  className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-xl p-5 border border-[rgba(255,255,255,0.1)] hover:border-orange-500/40 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full mb-3">
                    {article.tag}
                  </span>
                  <h3 className="font-bold text-white mb-2 leading-snug text-sm">
                    {article.title}
                  </h3>
                  <p className="text-[rgba(255,255,255,0.6)] text-xs mb-4">{article.excerpt}</p>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                  >
                    Read guide
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </motion.div>
              ))}
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
