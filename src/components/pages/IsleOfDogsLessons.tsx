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
import SpecialOffersSection from "../sections/SpecialOffersSection";

// SEO Meta Tags Component
const SEOMetaTags = ({ location }: { location: string }) => (
  <>
    <title>{`Driving Lessons in ${location} | Drive Dojo - 98% Pass Rate`}</title>
    <meta name="description" content={`Learn to drive in ${location} with DVSA-approved instructors. 98% pass rate, modern cars, flexible booking. Book your first lesson from £35. WhatsApp us now!`} />
    <meta name="keywords" content={`driving lessons ${location.toLowerCase()}, driving school ${location.toLowerCase()}, learn to drive ${location.toLowerCase()}, driving instructor ${location.toLowerCase()}`} />
    <meta property="og:title" content={`Driving Lessons in ${location} | Drive Dojo`} />
    <meta property="og:description" content={`Expert driving instruction in ${location} with 98% pass rate. Book your lesson today!`} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={`Driving Lessons in ${location} | Drive Dojo`} />
    <meta name="twitter:description" content={`Expert driving instruction in ${location} with 98% pass rate. Book your lesson today!`} />
  </>
);

const IsleOfDogsLessons = () => {
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
      <SEOMetaTags location="Isle of Dogs" />
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">

      <Navbar />

      <main className="pt-[100px] pb-20 relative z-10">
        {/* Modern Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white overflow-hidden min-h-[80vh] flex items-center">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-400 rounded-full opacity-25 animate-ping"></div>
            <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-4 animate-fade-in">
                  <div className="flex items-center bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 animate-pulse" />
                    <span className="text-sm font-medium">DVSA Approved ✨</span>
                  </div>
                  <div className="flex items-center bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-400/30">
                    <Zap className="h-5 w-5 text-orange-400 mr-2" />
                    <span className="text-sm font-medium">Quick Start 🚀</span>
                  </div>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-orange-300 bg-clip-text text-transparent animate-gradient">
                    Drive Like a
                  </span>
                  <br />
                  <span className="text-orange-400 animate-bounce inline-block">Pro</span>
                  <span className="text-2xl lg:text-3xl ml-4">🏎️</span>
                  <br />
                  <span className="text-white">in Isle of Dogs</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  London's <span className="text-orange-400 font-bold">coolest</span> driving school!
                  Get your licence fast with our <span className="text-green-400 font-bold">legendary</span> instructors
                  who actually make learning fun 🎯
                </p>

                {/* Animated Stats */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
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

                {/* Modern Postcode Form */}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-lg"
                >
                  <div className="relative flex-grow">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Enter your postcode"
                      className="pl-10 bg-white/90 backdrop-blur-sm border-white/30 text-gray-900 placeholder-gray-500 rounded-2xl"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      🚗 Book Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </Button>
                </form>

                {/* Social Proof */}
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-3">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                      ))}
                    </div>
                    <span className="text-blue-200">2000+ happy drivers</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-blue-200">4.9/5 rating</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Content - Interactive Video/Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative z-10 group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <img
                      src="/images/certifications/c5.png"
                      alt="Driving lessons in Isle of Dogs"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                        className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-6 rounded-full transition-all duration-300 transform hover:scale-110 group"
                      >
                        <Play className="h-8 w-8 ml-1" />
                      </button>
                    </div>

                    {/* Floating Success Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl shadow-xl animate-bounce">
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-xs">Pass Rate 🎉</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-2xl shadow-xl animate-pulse">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div className="absolute top-20 -right-8 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-xl animate-bounce">
                  <span className="text-white font-bold text-sm">DVSA ✓</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Modern Features Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Why We're <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Different</span> ✨
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not your boring old driving school - we're the future of learning to drive!
                <span className="text-orange-500 font-bold"> Ready to level up?</span> 🚀
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'DVSA Legends',
                  description: 'Our instructors are certified pros who know every trick to help you ace your test! 🎯',
                  emoji: '🏆',
                  color: 'from-green-400 to-emerald-500'
                },
                {
                  icon: Car,
                  title: 'Choose Your Ride',
                  description: 'Modern automatic or manual cars - whatever vibes with your style! 🚗',
                  emoji: '🚙',
                  color: 'from-blue-400 to-cyan-500'
                },
                {
                  icon: Award,
                  title: 'Insane Pass Rate',
                  description: '98% of our students pass first time - join the winning team! 🔥',
                  emoji: '📈',
                  color: 'from-purple-400 to-pink-500'
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                const isLiked = likedFeatures.has(index);
                
                return (
                  <motion.div
                    key={index}
                    className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative p-6 text-center">
                      {/* Emoji Badge */}
                      <div className="absolute -top-3 -right-3 text-3xl animate-bounce">
                        {feature.emoji}
                      </div>

                      {/* Like Button */}
                      <button
                        onClick={() => handleLike(index)}
                        className={`absolute top-4 left-4 p-2 rounded-full transition-all duration-300 ${
                          isLiked ? 'bg-red-500 text-white scale-110' : 'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                      </button>

                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.description}
                      </p>

                      {/* Interactive Progress Bar */}
                      <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${feature.color} transition-all duration-1000 w-0 group-hover:w-full`}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Interactive CTA */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-3xl">
                <div className="bg-white rounded-3xl px-8 py-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Ready to Start Your Journey? 🎉
                  </h3>
                  <p className="text-gray-600 mb-4">Join 2000+ students who chose the fun way to learn!</p>
                  <Button
                    onClick={() => (window.location.href = "/booking")}
                    className="inline-flex items-center bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105"
                  >
                    Let's Go! 🚀
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
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
                Why Learn to Drive in Isle of Dogs?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Isle of Dogs offers a unique environment for learner drivers
                with its mix of quiet residential streets, riverside roads, and
                access to busy city routes.
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
                  Learning to drive in Isle of Dogs gives you access to a
                  variety of road conditions that will prepare you for your
                  driving test. Our instructors have extensive knowledge of all
                  local test routes and will ensure you're fully prepared.
                </p>

                <ul className="space-y-3">
                  {[
                    "Quiet residential areas perfect for beginners",
                    "Practice on the A1261 for dual carriageway experience",
                    "Challenging roundabouts and junctions for advanced skills",
                    "Riverside roads with beautiful views of Canary Wharf",
                    "Close proximity to test centers with instructors who know all test routes",
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
                  alt="Isle of Dogs driving area"
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
              Ready to Start Driving in Isle of Dogs?
            </motion.h2>

            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Book your first lesson today and take the first step towards
              driving freedom in Isle of Dogs.
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
    </>
  );
};

export default IsleOfDogsLessons;
