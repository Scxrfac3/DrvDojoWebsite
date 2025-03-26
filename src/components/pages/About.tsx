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
  Play,
  Pause,
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
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");
  const [activeServiceTab, setActiveServiceTab] = useState("new");
  const [activeTestCenter, setActiveTestCenter] = useState("all");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [selectedInstructor, setSelectedInstructor] = useState(0);
  const [showMoreStats, setShowMoreStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const instructors = [
    {
      name: "Mamunur Siddique",
      role: "Founder & Head Instructor",
      image:
        "/images/certifications/4.png",
      bio: "Autonomous Vehicle safety operator with 8+ years of experience as a driving instructor. Passionate about road safety and innovative teaching methods.",
      specialties: [
        "Defensive Driving",
        "Motorway Confidence",
        "Test Preparation",
      ],
      students: 500,
      passRate: 95,
    },
    {
      name: "Mamunur S.",
      role: "Senior Instructor",
      image:
        "/images/certifications/c2.png",
      bio: "Former racing driver with 6 years of teaching experience. Known for helping anxious drivers build confidence quickly.",
      specialties: ["Anxiety Management", "City Driving", "Parallel Parking"],
      students: 350,
      passRate: 92,
    },
    {
      name: "David Chen",
      role: "Instructor & Theory Specialist",
      image:
        "/images/certifications/C6.png",
      bio: "Certified theory test expert with a background in traffic psychology. Makes complex concepts simple and memorable.",
      specialties: ["Theory Test Prep", "Hazard Perception", "Roundabouts"],
      students: 420,
      passRate: 94,
    },
  ];

  const testCenters = [
    {
      name: "Chingford Test Centre",
      address: "Doric House, 128 Station Road, Chingford, E4 6AD",
      passRate: 37,
      description: "Known for its mix of urban and residential routes.",
      region: "east",
      imageId: "/images/certifications/Chi.jpg",
    },
    {
      name: "Wanstead Test Centre",
      address: "2 Devon House, Hermon Hill, Wanstead, E11 2AW",
      passRate: 35,
      description: "Features various road types and challenging roundabouts.",
      region: "east",
      imageId: "/images/certifications/Wanstead.jpg",
    },
    {
      name: "Hornchurch Test Centre",
      address: "42-44 Northolt Way, Hornchurch, RM11 1QX",
      passRate: 42,
      description: "Suburban location with complex roundabouts.",
      region: "east",
      imageId: "/public/images/certifications/Horn.png",
    },
    {
      name: "Loughton Test Centre",
      address: "Crown Buildings, 284 High Road, Loughton, IG10 1RB",
      passRate: 45,
      description: "Diverse road types, including high-speed A roads.",
      region: "essex",
      imageId: "/images/certifications/Loughton.jpg",
    },
    {
      name: "Goodmayes Test Centre",
      address: "98 Goodmayes Road, Ilford, IG3 9UZ",
      passRate: 39,
      description: "Challenging urban routes and junctions.",
      region: "east",
      imageId: "/images/certifications/Goodmayes.png",
    },
    {
      name: "Barking Test Centre",
      address: "84 Town Quay, Barking, IG11 7BZ",
      passRate: 41,
      description: "High-speed dual carriageways and complex routes.",
      region: "essex",
      imageId: "/images/certifications/Tan.jpg",
    },
  ];

  const filteredTestCenters =
    activeTestCenter === "all"
      ? testCenters
      : activeTestCenter === "highest"
        ? [...testCenters].sort((a, b) => b.passRate - a.passRate).slice(0, 3)
        : testCenters.filter((center) => center.region === activeTestCenter);

  const faqs = [
    {
      question: "What makes Drive Dojo different from other driving schools?",
      answer:
        "We combine traditional teaching with innovative tech, personalized learning plans, and instructors who genuinely care about your progress. Plus, our Gen Z-friendly approach makes learning fun!",
    },
    {
      question: "How did Drive Dojo get started?",
      answer:
        "Our founder Mamunur Siddique started Drive Dojo in 2015 after working as an Autonomous Vehicle safety operator. He wanted to bring his tech expertise and passion for road safety to everyday drivers.",
    },
    {
      question: "What's your teaching philosophy?",
      answer:
        "We believe in student-centered learning that adapts to your style and pace. We focus on building confidence, practical skills, and safety awareness - not just passing the test.",
    },
    {
      question: "Do you offer specialized courses?",
      answer:
        "Yes! Beyond standard lessons, we offer anxiety management, motorway confidence, advanced driving techniques, and specialized test route training.",
    },
  ];

  const timelineEvents = [
    {
      year: 2015,
      title: "Founded",
      description: "Started with just one instructor and one car",
    },
    {
      year: 2017,
      title: "Expansion",
      description: "Grew to 5 instructors and introduced specialized courses",
    },
    {
      year: 2019,
      title: "Recognition",
      description: "Named 'Best Driving School in East London'",
    },
    {
      year: 2022,
      title: "Innovation",
      description: "Launched digital learning platform for theory test prep",
    },
    {
      year: 2023,
      title: "Milestone",
      description: "Reached 10,000 students taught and opened new headquarters",
    },
  ];

  return (
    <div className="bg-blue-950 min-h-screen relative overflow-hidden">
      {/* Gradient accents */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900 via-blue-950 to-blue-950 opacity-80"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-600/20 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/30 to-transparent rounded-tr-full"></div>
      <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-red-700/10 to-transparent rounded-tr-full"></div>
      <div className="absolute bottom-1/3 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-indigo-600/15 to-transparent rounded-bl-full"></div>
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section with Video Background */}
        <div className="relative pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted
              poster="/images/certifications/4.png"
            >
              <source
                src="/images/certifications/BANNER_MAIN3276.png"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900"></div>
          </div>

          <div className="relative z-10 px-4 py-24 md:py-32 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
                Our Story
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
                Not just another driving school. We're redefining how Gen Z
                learns to drive.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  onClick={() =>
                    document
                      .getElementById("our-story")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg flex items-center gap-2 group"
                >
                  <span>Discover Our Journey</span>
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </Button>
                <Button
                  onClick={toggleVideo}
                  variant="outline"
                  className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-6 rounded-full text-lg flex items-center gap-2"
                >
                  {isVideoPlaying ? (
                    <>
                      <Pause className="h-5 w-5" />
                      <span>Pause Video</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5" />
                      <span>Play Video</span>
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="px-4 md:px-6 max-w-7xl mx-auto">
          {/* Interactive Tabs */}
          <div id="our-story" className="pt-16">
            <div className="flex overflow-x-auto scrollbar-thin space-x-2 mb-8 pb-2">
              {["story", "team", "values", "services", "faq"].map((tab) => (
                <Button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  variant={activeTab === tab ? "default" : "outline"}
                  className={`px-6 py-3 rounded-full ${activeTab === tab ? "bg-blue-600 text-white" : "border-slate-700 text-white hover:bg-slate-800"}`}
                >
                  {tab === "story" && "Our Journey"}
                  {tab === "team" && "Meet The Team"}
                  {tab === "values" && "Our Values"}
                  {tab === "services" && "Our Services"}
                  {tab === "faq" && "Common Questions"}
                </Button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "story" && (
                <motion.div
                  key="story"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
                >
                  {/* Timeline Section */}
                  <div className="relative">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-600/30 transform md:translate-x-[-50%] z-0"></div>

                    {timelineEvents.map((event, index) => (
                      <div
                        key={index}
                        className={`relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                      >
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -50 : 50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          viewport={{ once: true }}
                          className="md:w-1/2 flex justify-center md:justify-end"
                        >
                          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 max-w-md">
                            <div className="text-blue-400 font-medium text-lg">
                              {event.year}
                            </div>
                            <div className="text-white font-bold text-xl mb-2">
                              {event.title}
                            </div>
                            <div className="text-slate-300">
                              {event.description}
                            </div>
                          </div>
                        </motion.div>

                        <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-10 h-10 rounded-full bg-blue-600 border-4 border-slate-900 flex items-center justify-center">
                          <span className="text-white font-bold">
                            {index + 1}
                          </span>
                        </div>

                        <div className="md:w-1/2"></div>
                      </div>
                    ))}
                  </div>

                  {/* Story Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <Zap className="text-blue-400 mr-2 h-6 w-6" />
                        Our Beginning
                      </h2>
                      <p className="text-slate-300 mb-6">
                        Drive Dojo was founded in 2015 by Mamunur Siddique, an
                        Autonomous Vehicle safety operator who helped build and
                        test autonomous vehicles on the road. With over 8+ years
                        of experience as a driving instructor and more than 500
                        successful students, Mamunur wanted to bring his
                        expertise to even more everyday drivers.
                      </p>
                      <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <Users className="text-blue-400 mr-2 h-6 w-6" />
                        Our Growth
                      </h2>
                      <p className="text-slate-300 mb-6">
                        What started as a one-man operation has grown into a
                        team of 12 highly qualified instructors, all sharing the
                        same passion for road safety and driver education. Our
                        mission has always been to create confident, skilled,
                        and safety-conscious drivers who enjoy their time on the
                        road.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 h-fit"
                    >
                      <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <Award className="text-blue-400 mr-2 h-6 w-6" />
                        Our Success
                      </h2>
                      <p className="text-slate-300 mb-6">
                        Today, Drive Dojo is proud to have helped over 10,000
                        students pass their driving tests and become responsible
                        road users. Our 95% first-time pass rate speaks to our
                        commitment to excellence in driving instruction.
                      </p>

                      <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                        <div className="flex items-center mb-2">
                          <Sparkles className="text-yellow-400 mr-2 h-5 w-5" />
                          <h3 className="text-lg font-semibold text-white">
                            Did You Know?
                          </h3>
                        </div>
                        <p className="text-slate-300 text-sm">
                          Our students pass their driving test in 1.4 fewer
                          attempts than the national average. That means less
                          stress, less time, and less money spent on retaking
                          tests!
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {activeTab === "team" && (
                <motion.div
                  key="team"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
                >
                  {/* Interactive Team Profiles */}
                  <div className="mb-12">
                    <div className="flex overflow-x-auto scrollbar-thin space-x-4 mb-8 pb-2">
                      {instructors.map((instructor, index) => (
                        <motion.div
                          key={index}
                          onClick={() => setSelectedInstructor(index)}
                          className={`cursor-pointer rounded-xl overflow-hidden flex-shrink-0 w-24 h-24 md:w-32 md:h-32 ${selectedInstructor === index ? "ring-4 ring-blue-500" : "opacity-70"}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <img
                            src={instructor.image}
                            alt={instructor.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedInstructor}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-slate-800/50 rounded-xl p-8 border border-slate-700"
                      >
                        <div className="flex flex-col md:flex-row gap-8">
                          <div className="md:w-1/3">
                            <div className="rounded-xl overflow-hidden mb-4 aspect-square">
                              <img
                                src={instructors[selectedInstructor].image}
                                alt={instructors[selectedInstructor].name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex justify-between mb-4">
                              <div>
                                <div className="text-blue-400 font-medium">
                                  {instructors[selectedInstructor].students}+
                                </div>
                                <div className="text-sm text-slate-400">
                                  Students
                                </div>
                              </div>
                              <div>
                                <div className="text-blue-400 font-medium">
                                  {instructors[selectedInstructor].passRate}%
                                </div>
                                <div className="text-sm text-slate-400">
                                  Pass Rate
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="md:w-2/3">
                            <div className="text-blue-400 font-medium mb-1">
                              Drive Dojo {instructors[selectedInstructor].role}
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">
                              {instructors[selectedInstructor].name}
                            </h2>
                            <p className="text-slate-300 mb-6">
                              {instructors[selectedInstructor].bio}
                            </p>
                            <h3 className="text-lg font-semibold text-white mb-2">
                              Specialties:
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {instructors[selectedInstructor].specialties.map(
                                (specialty, idx) => (
                                  <span
                                    key={idx}
                                    className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                                  >
                                    {specialty}
                                  </span>
                                ),
                              )}
                            </div>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                              Book with{" "}
                              {
                                instructors[selectedInstructor].name.split(
                                  " ",
                                )[0]
                              }
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Join Our Team
                    </h2>
                    <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                      Are you a passionate driving instructor looking to join a
                      forward-thinking team? We're always looking for talented
                      instructors to join Drive Dojo.
                    </p>
                    <Button
                      variant="outline"
                      className="border-slate-700 text-white hover:bg-slate-800"
                    >
                      View Careers
                    </Button>
                  </div>
                </motion.div>
              )}

              {activeTab === "values" && (
                <motion.div
                  key="values"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
                >
                  {/* Interactive Values Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <motion.div
                      className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 relative overflow-hidden group"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-600/20 to-transparent rounded-bl-full"></div>
                      <div className="text-blue-400 mb-4">
                        <div className="bg-blue-600/20 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                          <Car className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Safety First
                      </h3>
                      <p className="text-slate-300 mb-4">
                        We prioritize safety in every lesson, teaching defensive
                        driving techniques that last a lifetime.
                      </p>
                      <motion.div
                        className="h-1 w-16 bg-blue-600 rounded-full"
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>

                    <motion.div
                      className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 relative overflow-hidden group"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-600/20 to-transparent rounded-bl-full"></div>
                      <div className="text-purple-400 mb-4">
                        <div className="bg-purple-600/20 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                          <Users className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Student-Centered
                      </h3>
                      <p className="text-slate-300 mb-4">
                        We adapt our teaching methods to each student's learning
                        style, pace, and specific needs.
                      </p>
                      <motion.div
                        className="h-1 w-16 bg-purple-600 rounded-full"
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>

                    <motion.div
                      className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 relative overflow-hidden group"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-600/20 to-transparent rounded-bl-full"></div>
                      <div className="text-green-400 mb-4">
                        <div className="bg-green-600/20 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                          <Award className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Excellence
                      </h3>
                      <p className="text-slate-300 mb-4">
                        We maintain the highest standards in our instruction,
                        vehicles, and customer service.
                      </p>
                      <motion.div
                        className="h-1 w-16 bg-green-600 rounded-full"
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>

                    <motion.div
                      className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 relative overflow-hidden group"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-600/20 to-transparent rounded-bl-full"></div>
                      <div className="text-yellow-400 mb-4">
                        <div className="bg-yellow-600/20 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                          <Lightbulb className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Innovation
                      </h3>
                      <p className="text-slate-300 mb-4">
                        We continuously improve our teaching methods and
                        incorporate new technologies into our lessons.
                      </p>
                      <motion.div
                        className="h-1 w-16 bg-yellow-600 rounded-full"
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.8 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>

                  {/* Interactive Testimonial Carousel */}
                  <div className="mb-12 bg-gradient-to-br from-slate-800/50 to-blue-900/30 rounded-xl p-8 border border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                      {[...Array(10)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full bg-blue-400/30"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, Math.random() * 100 - 50],
                            opacity: [0, 0.5, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 5 + Math.random() * 10,
                            delay: Math.random() * 5,
                          }}
                        />
                      ))}
                    </div>

                    <div className="text-5xl text-blue-500/30 font-serif absolute top-4 left-6">
                      "
                    </div>
                    <div className="text-5xl text-blue-500/30 font-serif absolute bottom-4 right-6">
                      "
                    </div>
                    <div className="max-w-3xl mx-auto text-center relative z-10">
                      <motion.p
                        className="text-lg md:text-xl text-slate-300 italic mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                      >
                        Drive Dojo's values aren't just words on their website.
                        Their instructors truly embody these principles, making
                        learning to drive an amazing experience. I went from
                        nervous beginner to confident driver in just 20 lessons!
                      </motion.p>
                      <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-500">
                          <img
                            src="/images/certifications/1.png"
                            alt="Sophie Chen"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <div className="text-white font-medium text-lg">
                            Sophie Chen
                          </div>
                          <div className="text-blue-400 text-sm flex items-center">
                            <Star
                              className="h-4 w-4 mr-1 text-yellow-400"
                              fill="currentColor"
                            />
                            <Star
                              className="h-4 w-4 mr-1 text-yellow-400"
                              fill="currentColor"
                            />
                            <Star
                              className="h-4 w-4 mr-1 text-yellow-400"
                              fill="currentColor"
                            />
                            <Star
                              className="h-4 w-4 mr-1 text-yellow-400"
                              fill="currentColor"
                            />
                            <Star
                              className="h-4 w-4 mr-1 text-yellow-400"
                              fill="currentColor"
                            />
                            <span className="ml-1">
                              Passed first time, April 2023
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Our Promise */}
                  <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center flex items-center justify-center">
                      <Heart className="text-red-400 mr-2 h-6 w-6" />
                      Our Promise To You
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                      {[
                        "Personalized learning experience tailored to your needs",
                        "Patient, friendly instructors who truly care about your progress",
                        "Flexible scheduling to fit around your commitments",
                        "Transparent pricing with no hidden fees",
                        "Continuous support throughout your learning journey",
                        "Fun, engaging lessons that you'll actually look forward to",
                      ].map((promise, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start bg-slate-800/30 p-4 rounded-lg"
                          initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Check className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                          <p className="text-slate-300">{promise}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "services" && (
                <motion.div
                  key="services"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
                >
                  {/* Services Tabs */}
                  <div className="flex overflow-x-auto scrollbar-thin space-x-2 mb-8 pb-2">
                    <Button
                      onClick={() => setActiveServiceTab("new")}
                      variant={
                        activeServiceTab === "new" ? "default" : "outline"
                      }
                      className={`px-6 py-3 rounded-full ${activeServiceTab === "new" ? "bg-blue-600 text-white" : "border-slate-700 text-white hover:bg-slate-800"}`}
                    >
                      New Students
                    </Button>
                    <Button
                      onClick={() => setActiveServiceTab("specialized")}
                      variant={
                        activeServiceTab === "specialized"
                          ? "default"
                          : "outline"
                      }
                      className={`px-6 py-3 rounded-full ${activeServiceTab === "specialized" ? "bg-blue-600 text-white" : "border-slate-700 text-white hover:bg-slate-800"}`}
                    >
                      Specialized Training
                    </Button>
                  </div>

                  <AnimatePresence mode="wait">
                    {activeServiceTab === "new" && (
                      <motion.div
                        key="new-students"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                          Packages for New Students
                        </h2>
                        <p className="text-slate-300 text-center mb-8 max-w-3xl mx-auto">
                          Choose the perfect package to start your driving
                          journey with confidence
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {/* Introductory Lesson */}
                          <motion.div
                            className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 group hover:border-blue-500/50 transition-colors h-full"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/10 p-4 text-center">
                              <div className="text-blue-400 font-medium mb-1">
                                🚀
                              </div>
                              <h3 className="text-xl font-bold text-white mb-1">
                                2-Hour Introductory Lesson
                              </h3>
                              <p className="text-sm text-slate-300">
                                Special offer for new students only - first
                                lesson!
                              </p>
                            </div>
                            <div className="p-6">
                              <div className="flex justify-center items-center mb-4">
                                <span className="text-slate-400 text-lg line-through mr-2">
                                  £75.00
                                </span>
                                <span className="text-white text-2xl font-bold">
                                  £60.00
                                </span>
                              </div>
                              <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                                  <span className="text-slate-300">
                                    Manual or Automatic
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                                  <span className="text-slate-300">
                                    Flexible scheduling
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                                  <span className="text-slate-300">
                                    Door-to-door service
                                  </span>
                                </li>
                              </ul>
                              <Button
                                variant="outline"
                                className="w-full border-slate-700 text-white hover:bg-slate-800 mb-4"
                              >
                                See all features
                              </Button>
                              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                                <span>Book Now</span>
                                <motion.span
                                  className="ml-2 inline-block"
                                  animate={{ x: [0, 5, 0] }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                  }}
                                >
                                  →
                                </motion.span>
                              </Button>
                            </div>
                          </motion.div>

                          {/* 10-Hour Package */}
                          <motion.div
                            className="bg-slate-800/50 rounded-xl overflow-hidden border border-blue-500/50 shadow-lg shadow-blue-500/10 group transition-colors h-full relative"
                            whileHover={{
                              y: -5,
                              boxShadow:
                                "0 10px 30px -5px rgba(59, 130, 246, 0.3)",
                            }}
                          >
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                              Popular 🔥
                            </div>
                            <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/20 p-4 text-center">
                              <div className="text-blue-400 font-medium mb-1">
                                Save £50
                              </div>
                              <h3 className="text-xl font-bold text-white mb-1">
                                10-Hour Package
                              </h3>
                              <p className="text-sm text-slate-300">
                                Special offer for new learners - Save £50!
                              </p>
                            </div>
                            <div className="p-6">
                              <div className="flex justify-center items-center mb-4">
                                <span className="text-slate-400 text-lg line-through mr-2">
                                  £350.00
                                </span>
                                <span className="text-white text-2xl font-bold">
                                  £300.00
                                </span>
                              </div>
                              <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                                  <span className="text-slate-300">
                                    Save £50 on individual lessons
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                                  <span className="text-slate-300">
                                    Structured learning plan
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                                  <span className="text-slate-300">
                                    Progress tracking
                                  </span>
                                </li>
                              </ul>
                              <Button
                                variant="outline"
                                className="w-full border-slate-700 text-white hover:bg-slate-800 mb-4"
                              >
                                See all features
                              </Button>
                              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                                <span>Book Now</span>
                                <motion.span
                                  className="ml-2 inline-block"
                                  animate={{ x: [0, 5, 0] }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                  }}
                                >
                                  →
                                </motion.span>
                              </Button>
                            </div>
                          </motion.div>

                          {/* 20-Hour Package */}
                          <motion.div
                            className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 group hover:border-blue-500/50 transition-colors h-full"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            <div className="bg-gradient-to-br from-purple-600/20 to-purple-600/10 p-4 text-center">
                              <div className="text-purple-400 font-medium mb-1">
                                Best Value 💯
                              </div>
                              <h3 className="text-xl font-bold text-white mb-1">
                                20-Hour Package
                              </h3>
                              <p className="text-sm text-slate-300">
                                Best value for complete beginners
                              </p>
                            </div>
                            <div className="p-6">
                              <div className="flex justify-center items-center mb-4">
                                <span className="text-white text-2xl font-bold">
                                  £570.00
                                </span>
                              </div>
                              <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                                  <span className="text-slate-300">
                                    Maximum savings
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                                  <span className="text-slate-300">
                                    Comprehensive training
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                                  <span className="text-slate-300">
                                    Theory test support
                                  </span>
                                </li>
                              </ul>
                              <Button
                                variant="outline"
                                className="w-full border-slate-700 text-white hover:bg-slate-800 mb-4"
                              >
                                See all features
                              </Button>
                              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                                <span>Book Now</span>
                                <motion.span
                                  className="ml-2 inline-block"
                                  animate={{ x: [0, 5, 0] }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                  }}
                                >
                                  →
                                </motion.span>
                              </Button>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}

                    {activeServiceTab === "specialized" && (
                      <motion.div
                        key="specialized-training"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
                          Specialized Driving Courses
                        </h2>
                        <p className="text-slate-300 text-center mb-8 max-w-3xl mx-auto">
                          Tailored courses to meet your specific driving needs
                          and goals
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          {/* Mock Driving Test */}
                          <motion.div
                            className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 group hover:border-blue-500/50 transition-colors h-full"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            <div className="p-6">
                              <h3 className="text-xl font-bold text-white mb-3">
                                Mock Driving Test
                              </h3>
                              <p className="text-slate-300 mb-4">
                                Experience a real-world test environment with
                                official DVSA test routes.
                              </p>
                              <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                  <div className="text-blue-400 mr-2">•</div>
                                  <span className="text-slate-300">
                                    Authentic test conditions and scoring
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <div className="text-blue-400 mr-2">•</div>
                                  <span className="text-slate-300">
                                    Drive on official DVSA test routes
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <div className="text-blue-400 mr-2">•</div>
                                  <span className="text-slate-300">
                                    Detailed feedback and improvement plan
                                  </span>
                                </li>
                              </ul>
                              <div className="flex justify-between items-center">
                                <div className="text-white font-medium">
                                  From £55 per hour
                                </div>
                                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                  Book Now
                                </Button>
                              </div>
                            </div>
                          </motion.div>

                          {/* Intensive Courses */}
                          <motion.div
                            className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 group hover:border-blue-500/50 transition-colors h-full"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            <div className="p-6">
                              <h3 className="text-xl font-bold text-white mb-3">
                                Intensive Courses
                              </h3>
                              <p className="text-slate-300 mb-4">
                                Need to pass quickly? Our intensive courses can
                                get you test-ready in one week.
                              </p>
                              <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                  <div className="text-blue-400 mr-2">•</div>
                                  <span className="text-slate-300">
                                    20, 30, or 40-hour packages available
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <div className="text-blue-400 mr-2">•</div>
                                  <span className="text-slate-300">
                                    Daily lessons with consistent instructor
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <div className="text-blue-400 mr-2">•</div>
                                  <span className="text-slate-300">
                                    From £40 per hour
                                  </span>
                                </li>
                              </ul>
                              <div className="flex justify-end">
                                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                  Book Now
                                </Button>
                              </div>
                            </div>
                          </motion.div>

                          {/* Motorway Confidence */}
                          <motion.div
                            className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 group hover:border-blue-500/50 transition-colors h-full"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            <div className="p-6">
                              <h3 className="text-xl font-bold text-white mb-3">
                                Motorway Confidence
                              </h3>
                              <p className="text-slate-300 mb-4">
                                Specialized lessons focused on building
                                confidence for motorway driving.
                              </p>
                              <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                  <div className="text-blue-400 mr-2">•</div>
                                  <span className="text-slate-300">
                                    Safe entry and exit techniques
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <div className="text-blue-400 mr-2">•</div>
                                  <span className="text-slate-300">
                                    Lane discipline and overtaking
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <div className="text-blue-400 mr-2">•</div>
                                  <span className="text-slate-300">
                                    Handling high-speed driving safely
                                  </span>
                                </li>
                              </ul>
                              <div className="flex justify-between items-center">
                                <div className="text-white font-medium">
                                  £70 per 2-hour session
                                </div>
                                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                  Book Now
                                </Button>
                              </div>
                            </div>
                          </motion.div>

                          {/* Theory Test Preparation */}
                          <motion.div
                            className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 group hover:border-blue-500/50 transition-colors h-full"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            <div className="p-6">
                              <div className="flex items-center mb-3">
                                <h3 className="text-xl font-bold text-white">
                                  Theory Test Preparation
                                </h3>
                                <span className="ml-2 bg-green-600/20 text-green-400 text-xs font-bold px-2 py-1 rounded">
                                  FREE
                                </span>
                              </div>
                              <p className="text-slate-300 mb-4">
                                Comprehensive support to help you pass your
                                theory test with confidence.
                              </p>
                              <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                  <div className="text-blue-400 mr-2">•</div>
                                  <span className="text-slate-300">
                                    Access to online practice tests
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <div className="text-blue-400 mr-2">•</div>
                                  <span className="text-slate-300">
                                    Hazard perception training
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <div className="text-blue-400 mr-2">•</div>
                                  <span className="text-slate-300">
                                    One-to-one coaching sessions
                                  </span>
                                </li>
                              </ul>
                              <div className="text-slate-300 text-sm mb-4">
                                Included with all 2-hour sessions for complete
                                package
                              </div>
                              <div className="flex justify-end">
                                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                  Book Now
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {activeTab === "faq" && (
                <motion.div
                  key="faq"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
                >
                  {/* Interactive FAQ Accordion */}
                  <div className="max-w-3xl mx-auto mb-12">
                    {faqs.map((faq, idx) => (
                      <motion.div
                        key={idx}
                        className={`mb-4 border border-slate-700 rounded-xl overflow-hidden ${expandedFAQ === idx ? "bg-slate-800/50" : "bg-slate-800/20"}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <button
                          className="w-full text-left p-6 flex justify-between items-center"
                          onClick={() =>
                            setExpandedFAQ(expandedFAQ === idx ? null : idx)
                          }
                        >
                          <h3 className="text-lg font-semibold text-white">
                            {faq.question}
                          </h3>
                          <div className="bg-slate-700 rounded-full p-1">
                            {expandedFAQ === idx ? (
                              <ChevronUp className="h-5 w-5 text-blue-400" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-white" />
                            )}
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
                              <div className="p-6 pt-0 text-slate-300 border-t border-slate-700">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center">
                    <p className="text-slate-300 mb-6">
                      Still have questions? We're here to help!
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Contact Us
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Animated Stats Section */}
          <div ref={statsRef} className="mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  value: "10,000+",
                  label: "Students Taught",
                  icon: Users,
                  color: "blue",
                },
                {
                  value: "95%",
                  label: "Pass Rate",
                  icon: Award,
                  color: "green",
                },
                {
                  value: "12",
                  label: "Qualified Instructors",
                  icon: ThumbsUp,
                  color: "purple",
                },
                {
                  value: "4.9/5",
                  label: "Average Rating",
                  icon: Star,
                  color: "yellow",
                },
              ].map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    className={`bg-gradient-to-br from-${stat.color}-600/20 to-${stat.color}-600/10 rounded-xl p-6 border border-${stat.color}-500/30 text-center relative overflow-hidden`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      statsInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="absolute -right-4 -top-4 opacity-10">
                      <IconComponent className="w-24 h-24" />
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

            <AnimatePresence>
              {showMoreStats && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden"
                >
                  {[
                    {
                      value: "30 min",
                      label: "Average Response Time",
                      icon: Clock,
                    },
                    {
                      value: "98%",
                      label: "Student Satisfaction",
                      icon: Heart,
                    },
                    { value: "24/7", label: "Online Support", icon: Zap },
                  ].map((stat, idx) => {
                    const IconComponent = stat.icon;
                    return (
                      <motion.div
                        key={idx}
                        className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        <IconComponent className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                        <div className="text-3xl font-bold text-white mb-2">
                          {stat.value}
                        </div>
                        <div className="text-slate-300">{stat.label}</div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="text-center mt-6">
              <Button
                variant="outline"
                className="border-slate-700 text-white hover:bg-slate-800"
                onClick={() => setShowMoreStats(!showMoreStats)}
              >
                {showMoreStats ? "Show Less" : "Show More Stats"}
                {showMoreStats ? (
                  <ChevronUp className="ml-2 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-2 h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Test Centers */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
              Test Centres We Cover
            </h2>
            <p className="text-slate-300 text-center mb-8">
              Drive Dojo covers the following practical test centres in East
              London and surrounding areas
            </p>

            <div className="flex flex-wrap justify-center mb-8 gap-2">
              <Button
                onClick={() => setActiveTestCenter("all")}
                variant={activeTestCenter === "all" ? "default" : "outline"}
                className={`${activeTestCenter === "all" ? "bg-blue-600 text-white" : "border-slate-700 text-white hover:bg-slate-800"}`}
              >
                All Centres
              </Button>
              <Button
                onClick={() => setActiveTestCenter("highest")}
                variant={activeTestCenter === "highest" ? "default" : "outline"}
                className={`${activeTestCenter === "highest" ? "bg-blue-600 text-white" : "border-slate-700 text-white hover:bg-slate-800"}`}
              >
                Highest Pass Rate
              </Button>
              <Button
                onClick={() => setActiveTestCenter("east")}
                variant={activeTestCenter === "east" ? "default" : "outline"}
                className={`${activeTestCenter === "east" ? "bg-blue-600 text-white" : "border-slate-700 text-white hover:bg-slate-800"}`}
              >
                East London
              </Button>
              <Button
                onClick={() => setActiveTestCenter("essex")}
                variant={activeTestCenter === "essex" ? "default" : "outline"}
                className={`${activeTestCenter === "essex" ? "bg-blue-600 text-white" : "border-slate-700 text-white hover:bg-slate-800"}`}
              >
                Essex
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestCenters.map((center, idx) => (
                <motion.div
                  key={idx}
                  className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 group hover:border-blue-500/50 transition-colors h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="h-48 relative overflow-hidden rounded-t-xl">
                    <img
                      src={`https://images.unsplash.com/photo-${center.imageId}?w=800&q=80`}
                      alt={center.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full opacity-80 bg-gradient-to-br from-blue-900/90 via-purple-800/70 to-transparent"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                      <div className="text-center px-4">
                        <div className="text-white font-bold text-xl mb-1 drop-shadow-md">
                          {center.name}
                        </div>
                        <div className="bg-blue-600/40 backdrop-blur-sm rounded-full px-3 py-1 inline-flex items-center justify-center">
                          <Star
                            className="h-4 w-4 text-yellow-400 mr-1"
                            fill="currentColor"
                          />
                          <span className="text-white font-medium">
                            {center.passRate}% Pass Rate
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-800/80 backdrop-blur-sm">
                    <div className="flex items-start mb-4">
                      <MapPin className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-slate-300 text-sm">{center.address}</p>
                    </div>
                    <p className="text-slate-300 mb-3">{center.description}</p>
                    <div className="mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-300 border-blue-500/30 hover:bg-blue-500/20 w-full"
                      >
                        <MapPin className="h-4 w-4 mr-2" /> View on Map
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;
