import React, { useState, useEffect, useRef } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  Check,
  MapPin,
  Star,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Zap,
  Car,
  Award,
  Users,
  Clock,
  ThumbsUp,
  Lightbulb,
  Heart,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Facebook,
  Target,
  Brain,
  Code,
  Truck,
  Shield,
  TrendingUp,
  BookOpen,
  Trophy,
  MessageCircle,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("founder");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showMoreStats, setShowMoreStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  const faqs = [
    {
      question: "What makes Drive Dojo different from other driving schools?",
      answer:
        "Drive Dojo stands apart through Mamunur's unique combination of autonomous vehicle expertise, software development background, and proven teaching methods. Our approach integrates cutting-edge technology with personalized instruction, ensuring students not only pass their test but become confident, skilled drivers.",
    },
    {
      question: "How does Mamunur's autonomous vehicle experience benefit students?",
      answer:
        "Mamunur's experience training AI models for autonomous vehicles provides unparalleled insights into precision driving, risk assessment, and anticipatory techniques. Students learn advanced driving concepts typically reserved for autonomous systems, giving them a significant advantage in real-world driving scenarios.",
    },
    {
      question: "What teaching methods does Drive Dojo use?",
      answer:
        "We combine traditional instruction with innovative technology, including custom-developed learning apps, personalized progress tracking, and data-driven teaching approaches. Mamunur's software development expertise ensures students benefit from modern, effective learning tools.",
    },
    {
      question: "Can you help nervous drivers?",
      answer:
        "Absolutely. Mamunur's diverse background includes extensive experience with anxious drivers. Our patient, technology-enhanced approach builds confidence gradually, with personalized strategies that address individual concerns and learning styles.",
    },
  ];

  const timelineEvents = [
    {
      year: "2015",
      title: "Drive Dojo Founded",
      description: "Mamunur Siddique established Drive Dojo, bringing together his unique blend of autonomous vehicle expertise and driving instruction experience.",
    },
    {
      year: "2017",
      title: "Technology Integration",
      description: "Launched custom theory test applications and digital learning tools, revolutionizing how students prepare for their tests.",
    },
    {
      year: "2019",
      title: "Autonomous Vehicle Expertise",
      description: "Began incorporating insights from autonomous vehicle safety operations into driving instruction methods.",
    },
    {
      year: "2022",
      title: "10,000+ Students",
      description: "Reached the milestone of teaching over 10,000 students, maintaining our exceptional 95% first-time pass rate.",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Recognized as East London's premier driving school for innovative teaching methods and outstanding results.",
    },
  ];

  const expertiseAreas = [
    {
      icon: Shield,
      title: "Autonomous Vehicle Safety",
      description: "Trained AI models to drive according to rigorous UK DVSA standards, providing unique insights into precision driving and risk assessment.",
      color: "blue",
    },
    {
      icon: Truck,
      title: "Transport & Logistics",
      description: "Years as a lorry driver instilled profound real-world understanding of vehicle control and navigation across diverse road conditions.",
      color: "green",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Developed theory test applications and designed software solutions for driving instructors, ensuring students benefit from modern learning tools.",
      color: "purple",
    },
    {
      icon: Target,
      title: "Advanced Teaching",
      description: "Proven track record with 95% first-time pass rates, focusing on advanced driving techniques and genuine road confidence.",
      color: "amber",
    },
  ];

  return (
    <div className="bg-slate-900 min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <div className="relative pt-20 overflow-hidden">
          <div className="px-4 py-24 md:py-32 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 mb-6">
                The Drive Dojo Difference
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Expertise Forged on Every Road. Meet Mamunur Siddique - the founder whose unique journey through autonomous vehicles, software development, and proven instruction creates an unparalleled learning experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  onClick={() =>
                    document
                      .getElementById("founder-story")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg flex items-center gap-2 group"
                >
                  <span>Discover The Founder</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => (window.location.href = "/booking")}
                  className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-6 rounded-full text-lg"
                >
                  Book Your Lesson
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="px-4 md:px-6 max-w-7xl mx-auto">
          {/* Interactive Tabs */}
          <div id="founder-story" className="pt-16">
            <div className="flex overflow-x-auto scrollbar-thin space-x-2 mb-8 pb-2">
              {["founder", "journey", "expertise", "impact"].map((tab) => (
                <Button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  variant={activeTab === tab ? "default" : "default"}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700"}`}
                >
                  {tab === "founder" && "Meet The Founder"}
                  {tab === "journey" && "Our Journey"}
                  {tab === "expertise" && "Unique Expertise"}
                  {tab === "impact" && "Student Impact"}
                </Button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* Founder Story */}
              {activeTab === "founder" && (
                <motion.div
                  key="founder"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
                        <img
                          src="/images/certifications/C1.png"
                          alt="Mamunur Siddique - Founder of Drive Dojo"
                          className="relative rounded-2xl shadow-2xl w-full h-auto"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-white font-bold text-lg">Mamunur Siddique</div>
                              <div className="text-blue-400 text-sm">Founder & Head Instructor</div>
                            </div>
                            <div className="text-right">
                              <div className="text-white font-bold text-2xl">95%</div>
                              <div className="text-slate-400 text-xs">Pass Rate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h2 className="text-4xl font-bold text-white mb-6">
                        Mamunur Siddique
                        <span className="block text-2xl text-blue-400 font-normal mt-2">Founder & Visionary</span>
                      </h2>
                      
                      <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        At the heart of Drive Dojo Driving School is Mamunur Siddique, a founder whose journey through the automotive world offers an unparalleled depth of expertise. More than just a driving instructor, Mamunur's vision for Drive Dojo is built on a unique blend of practical experience, cutting-edge technology, and a proven track record of success.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-blue-600/20 p-2 rounded-lg mr-4">
                            <Star className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">8+ Years Experience</div>
                            <div className="text-slate-400 text-sm">As a driving instructor with exceptional first-time pass rates</div>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-green-600/20 p-2 rounded-lg mr-4">
                            <Users className="h-5 w-5 text-green-400" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">10,000+ Students</div>
                            <div className="text-slate-400 text-sm">Successfully taught and passed their driving tests</div>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-purple-600/20 p-2 rounded-lg mr-4">
                            <Award className="h-5 w-5 text-purple-400" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">95% Pass Rate</div>
                            <div className="text-slate-400 text-sm">Consistently exceeding industry standards</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Journey Timeline */}
              {activeTab === "journey" && (
                <motion.div
                  key="journey"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Journey to Excellence</h2>
                  
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 z-0"></div>

                    {timelineEvents.map((event, index) => (
                      <motion.div
                        key={index}
                        className={`relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="md:w-1/2 flex justify-center md:justify-end"
                          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 max-w-md hover:border-blue-500/50 transition-colors">
                            <div className="text-blue-400 font-bold text-2xl mb-2">{event.year}</div>
                            <div className="text-white font-bold text-xl mb-2">{event.title}</div>
                            <div className="text-slate-300">{event.description}</div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-slate-900 flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="text-white font-bold">{index + 1}</span>
                        </motion.div>

                        <div className="md:w-1/2"></div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Expertise Areas */}
              {activeTab === "expertise" && (
                <motion.div
                  key="expertise"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Multi-Faceted Expertise</h2>
                    <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                      What truly sets Drive Dojo apart is Mamunur's diverse background that brings together cutting-edge technology, real-world experience, and proven teaching excellence.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {expertiseAreas.map((area, index) => {
                      const IconComponent = area.icon;
                      return (
                        <motion.div
                          key={index}
                          className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 relative overflow-hidden group hover:border-blue-500/50 transition-all"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -5, scale: 1.02 }}
                        >
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-bl-full"></div>
                          
                          <div className="relative z-10">
                            <div className={`bg-${area.color}-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                              <IconComponent className={`w-8 h-8 text-${area.color}-400`} />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                            <p className="text-slate-300 leading-relaxed">{area.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="mt-12 bg-gradient-to-br from-slate-800/50 to-blue-900/30 rounded-2xl p-8 border border-slate-700">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">The Drive Dojo Philosophy</h3>
                    <p className="text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                      Mamunur's lifelong dedication to driving excellence, combined with his diverse roles, means every lesson at Drive Dojo is informed by a holistic understanding of the road – from the mechanics of a vehicle to the psychology of a safe driver, and the cutting-edge of autonomous technology.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Student Impact */}
              {activeTab === "impact" && (
                <motion.div
                  key="impact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Transforming Lives Through Expert Instruction</h2>
                    <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                      Choose Drive Dojo Driving School for expert driving lessons in East London that go beyond the basics, equipping you with the skills and confidence to pass your test first time and master any road.
                    </p>
                  </div>

                  {/* Animated Stats */}
                  <div ref={statsRef} className="mb-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          value: "10,000+",
                          label: "Students Taught",
                          icon: Users,
                          color: "blue",
                        },
                        {
                          value: "95%",
                          label: "First-Time Pass Rate",
                          icon: Award,
                          color: "green",
                        },
                        {
                          value: "8+",
                          label: "Years Experience",
                          icon: Clock,
                          color: "purple",
                        },
                        {
                          value: "4.9/5",
                          label: "Student Rating",
                          icon: Star,
                          color: "yellow",
                        },
                      ].map((stat, idx) => {
                        const IconComponent = stat.icon;
                        return (
                          <motion.div
                            key={idx}
                            className={`bg-gradient-to-br from-slate-800/50 to-${stat.color}-900/20 rounded-xl p-6 border border-${stat.color}-500/30 text-center relative overflow-hidden`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={
                              statsInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.9 }
                            }
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="absolute -right-4 -top-4 opacity-10">
                              <IconComponent className="w-20 h-20" />
                            </div>
                            <motion.div
                              className={`text-4xl font-bold text-white mb-2`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={
                                statsInView
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: 20 }
                              }
                              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                            >
                              {stat.value}
                            </motion.div>
                            <div className="text-slate-300">{stat.label}</div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
                    <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                      Join thousands of successful students who have experienced the Drive Dojo difference. With Mamunur's expert guidance and our proven methods, you're not just learning to drive – you're mastering the road.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Button
                        onClick={() => (window.location.href = "/booking")}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg"
                      >
                        Book Your Lesson
                      </Button>
                      <Button
                        onClick={() => (window.location.href = "tel:+447487228866")}
                        className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-full text-lg"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* FAQ Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  className={`bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 ${expandedFAQ === idx ? "bg-slate-800/70" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-700/50 transition-colors"
                    onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  >
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <div className={`rounded-full p-1 transition-transform ${expandedFAQ === idx ? "rotate-180" : ""}`}>
                      <ChevronDown className="h-5 w-5 text-blue-400" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {expandedFAQ === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-300 mb-6">Still have questions? We're here to help!</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  onClick={() => (window.location.href = "/contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Us
                </Button>
                <Button
                  onClick={() => (window.location.href = "tel:+447487228866")}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;
