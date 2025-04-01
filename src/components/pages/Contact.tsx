import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  Send,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import supabase from "@/lib/supabase";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    submitted: false,
    loading: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ ...formState, loading: true });

    // Simulate form submission
    setTimeout(() => {
      setFormState({ ...formState, submitted: true, loading: false });

      // Trigger confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState({ ...formState, [id]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [Math.random() * 100, Math.random() * -100],
              x: [Math.random() * 100, Math.random() * -100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </div>

      <Navbar />

      <div className="pt-24 pb-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center mb-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-pink-300 border border-white/20 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Get in Touch
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
            Let's Start Your Journey
          </h1>

          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Ready to become a confident driver? We're just a message away from
            helping you achieve your driving goals in London!
          </p>
        </motion.div>

        <Tabs defaultValue="message" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/10 backdrop-blur-sm p-1 rounded-xl border border-white/20">
            <TabsTrigger
              value="message"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg text-purple-100"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Message Us
            </TabsTrigger>
            <TabsTrigger
              value="book"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg text-purple-100"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book a Lesson
            </TabsTrigger>
            <TabsTrigger
              value="info"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg text-purple-100"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Find Us
            </TabsTrigger>
          </TabsList>

          <div className="relative">
            <TabsContent value="message" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-4">
                <motion.div
                  className="lg:col-span-3 bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl relative overflow-hidden group"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  {formState.submitted ? (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-10 w-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-slate-300 mb-6">
                        Thanks for reaching out! We'll get back to you within 24
                        hours.
                      </p>
                      <Button
                        onClick={() =>
                          setFormState({
                            ...formState,
                            submitted: false,
                            name: "",
                            email: "",
                            phone: "",
                            message: "",
                          })
                        }
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-white mb-6 flex items-center relative z-10">
                        <Send className="h-5 w-5 mr-2 text-blue-400" />
                        Send Us a Message
                      </h2>
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label
                              htmlFor="name"
                              className="text-white font-medium block"
                            >
                              Your Name
                            </label>
                            <Input
                              id="name"
                              value={formState.name}
                              onChange={handleInputChange}
                              placeholder="John Smith"
                              className="bg-slate-700/70 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="text-white font-medium block"
                            >
                              Email Address
                            </label>
                            <Input
                              id="email"
                              type="email"
                              value={formState.email}
                              onChange={handleInputChange}
                              placeholder="john@example.com"
                              className="bg-slate-700/70 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="text-white font-medium block"
                          >
                            Phone Number (Optional)
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={handleInputChange}
                            placeholder="+44 7123 456789"
                            className="bg-slate-700/70 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="text-white font-medium block"
                          >
                            Your Message
                          </label>
                          <Textarea
                            id="message"
                            value={formState.message}
                            onChange={handleInputChange}
                            placeholder="I'd like to book driving lessons..."
                            className="bg-slate-700/70 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 min-h-[150px]"
                            required
                          />
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 relative overflow-hidden group"
                            disabled={formState.loading}
                          >
                            {formState.loading ? (
                              <span className="flex items-center">
                                <svg
                                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Sending...
                              </span>
                            ) : (
                              <>
                                Send Message
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                <motion.div
                                  className="absolute inset-0 bg-white"
                                  initial={{ x: "-100%" }}
                                  whileHover={{ x: "100%" }}
                                  transition={{ duration: 0.4 }}
                                  style={{ opacity: 0.2 }}
                                />
                              </>
                            )}
                          </Button>
                        </motion.div>

                        <p className="text-slate-400 text-sm text-center mt-4">
                          We'll get back to you within 24 hours. Your data is
                          secure and won't be shared.
                        </p>
                      </form>
                    </>
                  )}
                </motion.div>

                <motion.div
                  className="lg:col-span-2 space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                      Quick Response Guarantee
                    </h3>
                    <p className="text-purple-100 mb-4 relative z-10">
                      We respond to all inquiries within 24 hours. Need an
                      urgent response? Give us a call!
                    </p>

                    <div className="space-y-4 mt-6">
                      <motion.div
                        className="flex items-start p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors relative overflow-hidden group"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                        <div className="bg-blue-500/30 p-3 rounded-lg mr-4 relative z-10">
                          <Phone className="h-5 w-5 text-blue-400" />
                        </div>
                        <div className="relative z-10">
                          <h3 className="text-white font-semibold">Call Us</h3>
                          <p className="text-purple-100">+44 20 1234 5678</p>
                          <p className="text-purple-200 text-sm mt-1">
                            Mon-Fri from 9am to 6pm
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-start p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors relative overflow-hidden group"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                        <div className="bg-purple-500/30 p-3 rounded-lg mr-4 relative z-10">
                          <Mail className="h-5 w-5 text-purple-400" />
                        </div>
                        <div className="relative z-10">
                          <h3 className="text-white font-semibold">Email</h3>
                          <p className="text-purple-100">info@drivedojo.com</p>
                          <p className="text-purple-200 text-sm mt-1">
                            24/7 support for urgent inquiries
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <div className="flex items-center mb-4 relative z-10">
                      <Clock className="h-5 w-5 text-blue-400 mr-2" />
                      <h3 className="text-xl font-bold text-white">
                        Fast-Track Booking
                      </h3>
                    </div>
                    <p className="text-purple-100 mb-4 relative z-10">
                      Need lessons ASAP? Mention "Fast-Track" in your message
                      for priority scheduling!
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 mt-2 relative z-10 border border-white/20"
                        onClick={() => (window.location.href = "/booking")}
                      >
                        Request Fast-Track
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="book" className="mt-0">
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl mt-4 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <div className="text-center mb-8 relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Book Your First Lesson
                  </h2>
                  <p className="text-purple-100 relative z-10">
                    Choose your preferred package and we'll contact you to
                    schedule your lessons
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Starter Package */}
                  <motion.div
                    className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 relative h-full group"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Starter Package
                      </h3>
                      <div className="text-3xl font-bold text-white mb-2">
                        £35<span className="text-sm font-normal">/hour</span>
                      </div>
                      <p className="text-slate-300 text-sm mb-4">
                        Perfect for beginners
                      </p>

                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">
                            Pay-as-you-go flexibility
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">
                            Personalized learning
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">
                            Beginner friendly
                          </span>
                        </li>
                      </ul>

                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          onClick={() => (window.location.href = "/booking")}
                        >
                          Book Now
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Popular Package */}
                  <motion.div
                    className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 relative h-full group"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-purple-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        10-Hour Package
                      </h3>
                      <div className="text-3xl font-bold text-white mb-2">
                        £300
                        <span className="text-sm font-normal">/package</span>
                      </div>
                      <p className="text-slate-300 text-sm mb-4">
                        Save £50 compared to hourly rate
                      </p>

                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">
                            Structured learning plan
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">
                            Progress tracking
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">
                            Best value for most learners
                          </span>
                        </li>
                      </ul>

                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                          onClick={() => (window.location.href = "/booking")}
                        >
                          Book Now
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Intensive Package */}
                  <motion.div
                    className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 relative h-full group"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Intensive Course
                      </h3>
                      <div className="text-3xl font-bold text-white mb-2">
                        £570
                        <span className="text-sm font-normal">/20 hours</span>
                      </div>
                      <p className="text-slate-300 text-sm mb-4">
                        Fast-track your learning
                      </p>

                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">
                            Comprehensive training
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">
                            Theory test support
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">
                            Test preparation included
                          </span>
                        </li>
                      </ul>

                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => (window.location.href = "/booking")}
                        >
                          Book Now
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-slate-300 mb-4">
                    Not sure which package is right for you? Contact us for a
                    personalized recommendation.
                  </p>
                  <Button
                    variant="outline"
                    className="border-slate-600 text-white hover:bg-slate-800"
                  >
                    Request Callback
                  </Button>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="info" className="mt-0">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center relative z-10">
                    <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                    Find Us
                  </h2>

                  <div className="space-y-6">
                    <div className="rounded-xl overflow-hidden h-[300px] relative">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-0.24168120642536509!3d51.52855824164916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1656543745932!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                      ></iframe>
                    </div>

                    <div className="space-y-4">
                      <motion.div
                        className="flex items-start p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors relative overflow-hidden group"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                        <div className="bg-green-500/30 p-3 rounded-lg mr-4 relative z-10">
                          <MapPin className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="relative z-10">
                          <h3 className="text-white font-semibold">
                            Main Office
                          </h3>
                          <p className="text-purple-100">
                            123 Driving Street, London, UK
                          </p>
                          <p className="text-purple-200 text-sm mt-1">
                            Open Monday to Friday, 9am to 6pm
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-start p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors relative overflow-hidden group"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                        <div className="bg-blue-500/30 p-3 rounded-lg mr-4 relative z-10">
                          <MapPin className="h-5 w-5 text-blue-400" />
                        </div>
                        <div className="relative z-10">
                          <h3 className="text-white font-semibold">
                            Training Center
                          </h3>
                          <p className="text-purple-100">
                            456 Learning Avenue, London, UK
                          </p>
                          <p className="text-purple-200 text-sm mt-1">
                            Open 7 days a week, 8am to 8pm
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                      Service Areas
                    </h3>
                    <p className="text-purple-100 mb-4 relative z-10">
                      We provide driving lessons throughout Greater London,
                      including:
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[
                        "East London",
                        "North London",
                        "West London",
                        "South London",
                        "Hackney",
                        "Islington",
                        "Camden",
                        "Westminster",
                        "Southwark",
                        "Lambeth",
                        "Tower Hamlets",
                        "Newham",
                      ].map((area, index) => (
                        <motion.div
                          key={index}
                          className="bg-white/10 px-3 py-2 rounded-lg text-purple-100 text-sm flex items-center relative overflow-hidden group"
                          whileHover={{
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            color: "#ffffff",
                            y: -2,
                          }}
                        >
                          <MapPin className="h-3 w-3 mr-2 text-blue-400" />
                          {area}
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-purple-200 text-sm relative z-10">
                      Don't see your area? Contact us to check availability.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                      Business Hours
                    </h3>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-white/20 relative z-10">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-blue-400" />
                          <span className="text-purple-100">
                            Monday - Friday
                          </span>
                        </div>
                        <span className="text-white font-medium">
                          9:00 AM - 6:00 PM
                        </span>
                      </div>

                      <div className="flex justify-between items-center pb-2 border-b border-white/20 relative z-10">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-blue-400" />
                          <span className="text-purple-100">Saturday</span>
                        </div>
                        <span className="text-white font-medium">
                          10:00 AM - 4:00 PM
                        </span>
                      </div>

                      <div className="flex justify-between items-center pb-2 border-b border-white/20 relative z-10">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-blue-400" />
                          <span className="text-purple-100">Sunday</span>
                        </div>
                        <span className="text-white font-medium">
                          Closed (Lessons Only)
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-white/10 rounded-lg border border-white/20 relative z-10">
                      <p className="text-purple-100 text-sm">
                        <span className="font-semibold text-blue-400">
                          Note:
                        </span>{" "}
                        Driving lessons are available 7 days a week from 7:00 AM
                        to 9:00 PM, based on instructor availability.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <div className="flex items-center mb-4 relative z-10">
                      <Phone className="h-5 w-5 text-blue-400 mr-2" />
                      <h3 className="text-xl font-bold text-white">
                        Need Immediate Assistance?
                      </h3>
                    </div>
                    <p className="text-purple-100 mb-4 relative z-10">
                      Our customer support team is ready to help you with any
                      questions.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 relative z-10 border border-white/20"
                        onClick={() =>
                          (window.location.href = "tel:+442012345678")
                        }
                      >
                        Call +44 20 1234 5678
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>

        {/* Social Proof Section */}
        <motion.div
          className="mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
              Trusted by Thousands of London Students
            </h2>
            <p className="text-purple-100">
              Join our community of successful drivers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <p className="text-3xl font-bold text-blue-300 mb-2 relative z-10">
                98%
              </p>
              <p className="text-purple-100 text-sm relative z-10">Pass Rate</p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-purple-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <p className="text-3xl font-bold text-purple-300 mb-2 relative z-10">
                10,000+
              </p>
              <p className="text-purple-100 text-sm relative z-10">
                London Students
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <p className="text-3xl font-bold text-green-300 mb-2 relative z-10">
                4.9/5
              </p>
              <p className="text-purple-100 text-sm relative z-10">
                Average Rating
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-yellow-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <p className="text-3xl font-bold text-yellow-300 mb-2 relative z-10">
                12+
              </p>
              <p className="text-purple-100 text-sm relative z-10">
                Years Experience
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
