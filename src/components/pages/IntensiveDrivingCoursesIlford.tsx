import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import CertificationsBar from "../sections/CertificationsBar";
import GetStartedSection from "../sections/GetStartedSection";
import NewTestimonialsSection from "../sections/NewTestimonialsSection";
import FAQSection from "../sections/FAQSection";
import TestCentresSection from "../sections/TestCentresSection";
import PostcodeChecker from "../ui/PostcodeChecker";
import SEO from "../ui/SEO";
import { Button } from "../ui/button";
import {
  ArrowRight,
  Car,
  CheckCircle,
  MapPin,
  Star,
  Users,
  Zap,
  Clock,
  Calendar,
  Award,
  Trophy,
  Shield,
  Sparkles,
  Flame,
  GraduationCap,
  CreditCard,
  Phone,
  MessageCircle,
} from "lucide-react";
import confetti from "canvas-confetti";

const IntensiveDrivingCoursesIlford = () => {
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handlePostcodeChecked = (result: { isCovered: boolean }) => {
    if (result.isCovered) {
      triggerConfetti();
    }
  };

  const handleLessonSelected = (lessonType: string) => {
    if (lessonType === "intensive") {
      window.location.href = "/booking/intensive";
    }
  };

  // Areas covered for local SEO
  const areasCovered = [
    "Ilford (IG1–IG6)",
    "Goodmayes (IG3, IG4)",
    "Barking (IG11)",
    "Romford (RM1–RM7)",
    "East Ham (E6)",
    "Forest Gate (E7)",
    "Canning Town (E16)",
    "Docklands (E14)",
    "Walthamstow (E10, E11, E17)",
    "Isle of Dogs (E14)",
    "Stratford (E15)",
    "Leytonstone (E11)",
    "Gants Hill (IG2)",
    "Chadwell Heath (RM6)",
    "Seven Kings (IG3)",
    "Dagenham (RM8, RM9)",
  ];

  const postcodesGrid = [
    "IG1", "IG2", "IG3", "IG4", "IG5", "IG6", "IG7", "IG8",
    "IG9", "IG10", "IG11", "RM6", "RM7", "RM8", "RM9", "E12",
    "E6", "E7", "E11", "E14", "E15", "E16", "E17",
  ];

  // Test centres served
  const testCentres = [
    {
      name: "Goodmayes DTC",
      passRate: "52%",
      postcodes: "IG1–IG6, RM6–RM9",
      description: "Our primary test centre — we know every route.",
    },
    {
      name: "Barking (Tanner Street)",
      passRate: "46%",
      postcodes: "IG11, RM9, E6",
      description: "Popular East London centre with diverse routes.",
    },
    {
      name: "Wanstead (Hermon Hill)",
      passRate: "48%",
      postcodes: "E7, E11, E12, E15, E17",
      description: "Quieter routes through residential Wanstead.",
    },
    {
      name: "Chingford",
      passRate: "44%",
      postcodes: "E4, E10, E17",
      description: "North-East London centre with suburban routes.",
    },
  ];

  // Pricing matching Services page
  const pricingPlans = [
    {
      id: "first2hours",
      title: "First 2 Hours",
      subtitle: "Try before you commit",
      price: "£70",
      originalPrice: "£95",
      saving: "Save £25",
      discountCode: "SAVE25",
      unit: "/ 2-hour assessment",
      features: [
        "2 hours of 1-to-1 tuition",
        "Mercedes-Benz A-Class automatic",
        "DVSA approved ADI instructor",
        "Personalised assessment & plan",
        "Door-to-door pickup included",
      ],
      popular: false,
      badge: "🎯 INTRO OFFER",
      badgeColor: "from-orange-500 to-red-500",
      ctaLink: "/booking/payg",
      ctaText: "Book Assessment",
      klarna: false,
    },
    {
      id: "10hour",
      title: "10-Hour Block",
      subtitle: "Structured learning block",
      price: "£340",
      originalPrice: "£380",
      saving: "Save £40",
      unit: "/ 10 hours (£34/hr)",
      features: [
        "10 hours of driving tuition",
        "Fully DVSA qualified instructors",
        "Flexible pickup & drop-off",
        "Live progress tracking dashboard",
        "Mercedes-Benz A-Class automatic",
      ],
      popular: false,
      badge: "⚡ BEST VALUE",
      badgeColor: "from-green-400 to-emerald-500",
      ctaLink: "/booking/10hour",
      ctaText: "Book 10-Hour Block",
      klarna: true,
      klarnaText: "Or 3 interest-free payments of £113.33 with Klarna",
    },
    {
      id: "intensive",
      title: "Intensive Pass Course",
      subtitle: "Pass in as little as 2 weeks",
      price: "£650 – £950",
      unit: "/ 12–30 hours",
      features: [
        "15–25 hours immersive daily lessons",
        "Theory test support & guidance included",
        "Mock test the week before test date",
        "Flexible scheduling around work/uni",
        "Experienced ADI — structured daily syllabus",
        "Test car hire on test day included",
      ],
      popular: true,
      badge: "⭐ MOST POPULAR",
      badgeColor: "from-[#ff6b35] to-[#f5a623]",
      ctaLink: "/booking/intensive",
      ctaText: "Book Intensive Course",
      klarna: true,
      klarnaText: "💳 Klarna available — split payments interest-free",
    },
    {
      id: "mocktest",
      title: "Mock Driving Test",
      subtitle: "Perfect practice before your real test",
      price: "£90",
      unit: "/ test",
      features: [
        "Real test conditions simulation",
        "45-minute full mock test",
        "Detailed feedback & report",
        "Common fault analysis",
        "DVSA test routes covered",
      ],
      popular: false,
      badge: "🎯 TEST READY",
      badgeColor: "from-blue-500 to-cyan-500",
      ctaLink: "/booking/mocktest",
      ctaText: "Book Mock Test",
      klarna: false,
    },
  ];

  const benefits = [
    {
      title: "Pass in Days, Not Months",
      description:
        "Our intensive courses compress months of weekly lessons into focused daily training. Most students are test-ready in 1–2 weeks.",
      icon: Clock,
      color: "from-[#ff6b35] to-[#f5a623]",
    },
    {
      title: "DVSA Approved Instructor",
      description:
        "Learn from a fully qualified ADI with years of experience teaching intensive courses across East London. ORDIT trained and DBS checked.",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Immersive Daily Lessons",
      description:
        "Extended 2–4 hour sessions build muscle memory fast. No gaps between lessons means you retain more and progress faster.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Local Test Route Mastery",
      description:
        "Expert knowledge of Goodmayes, Barking, Wanstead, and Chingford test routes. We'll prepare you for the exact roads you'll drive on test day.",
      icon: MapPin,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Klarna Payment Options",
      description:
        "Spread the cost with Klarna's interest-free payments. Pay in 3 monthly instalments — get on the road now without the upfront burden.",
      icon: CreditCard,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Test Booking Support",
      description:
        "We help you find and book your practical test slot to align perfectly with your course completion. No waiting weeks after you're ready.",
      icon: Calendar,
      color: "from-orange-500 to-red-500",
    },
  ];

  const whyIntensive = [
    {
      title: "Faster Learning",
      description:
        "Daily practice embeds driving skills into muscle memory. You'll progress 3x faster than weekly learners.",
      icon: Flame,
    },
    {
      title: "Cost Effective",
      description:
        "Fewer total hours needed vs. weekly lessons spread over months. Our students average 20–25 hours to test standard.",
      icon: Trophy,
    },
    {
      title: "Perfect for Deadlines",
      description:
        "Starting a new job? Heading to uni? Our 1–2 week courses fit around your timeline.",
      icon: Calendar,
    },
    {
      title: "No Forgetting Between Lessons",
      description:
        "Back-to-back daily sessions eliminate the 're-learning' time that weekly students lose at the start of each lesson.",
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] relative overflow-hidden">
      {/* SEO - Full optimization for local intensive driving course searches */}
      <SEO
        title="Intensive Driving Courses Ilford | Pass in 1–2 Weeks | DVSA Approved | Klarna Available"
        description="Fast-track your driving licence with Drive Dojo's intensive driving courses in Ilford. 1–2 week crash courses covering Goodmayes, Barking & Wanstead test centres. DVSA approved instructor, Mercedes-Benz automatic, Klarna interest-free payments. From £650. Book now!"
        keywords="intensive driving courses Ilford, intensive driving lessons East London, crash course driving Ilford, fast track driving test Ilford, learn to drive fast Ilford, DVSA intensive driving course, automatic intensive driving course Ilford, driving crash course East London, intensive driving school Ilford, pass driving test quickly Ilford, intensive driving lessons IG1 IG2 IG3, Goodmayes DTC intensive course, Barking test centre crash course, Wanstead test centre intensive lessons, Klarna driving lessons, pay monthly driving lessons Ilford, 1 week driving course Ilford, 2 week driving course East London, intensive automatic driving lessons, cheap intensive driving courses London, driving instructor intensive course, Mercedes automatic driving lessons Ilford"
        canonical="https://drivedojodrivingschool.com/intensive-driving-courses-ilford"
        serviceSchema={{
          name: "Intensive Driving Courses in Ilford",
          description:
            "Fast-track intensive driving courses in Ilford and East London. DVSA approved instructor. Pass in 1–2 weeks with daily immersive lessons in a Mercedes-Benz automatic. Klarna interest-free payments available. Covering all IG postcodes and Goodmayes, Barking, Wanstead & Chingford test centres.",
          provider: {
            name: "Drive Dojo Driving School",
            url: "https://drivedojodrivingschool.com",
          },
          price: "650",
          priceCurrency: "GBP",
          areaServed:
            "Ilford, IG postcodes, East London, Goodmayes, Barking, Romford, Forest Gate, Walthamstow, Docklands",
        }}
      />

      {/* Structured Data - LocalBusiness + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Drive Dojo Driving School",
            description:
              "DVSA approved intensive driving courses in Ilford and East London. Pass in 1–2 weeks with daily immersive lessons. Klarna payments available.",
            url: "https://drivedojodrivingschool.com/intensive-driving-courses-ilford",
            telephone: "+447487228866",
            email: "drivedojo@gmail.com",
            areaServed: [
              "Ilford",
              "Goodmayes",
              "Barking",
              "Romford",
              "East Ham",
              "Forest Gate",
              "Canning Town",
              "Docklands",
              "Walthamstow",
              "Isle of Dogs",
              "Stratford",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ilford",
              addressRegion: "East London",
              postalCode: "IG1",
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 51.5588,
              longitude: 0.0736,
            },
            priceRange: "£70 – £950",
            paymentAccepted: "Cash, Credit Card, Klarna",
            currenciesAccepted: "GBP",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Intensive Driving Courses",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Intensive Pass Course",
                    description:
                      "15–25 hours immersive daily lessons, pass in 1–2 weeks",
                  },
                  price: "650.00",
                  priceCurrency: "GBP",
                  eligiblePaymentType: "Klarna",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "10-Hour Block",
                    description: "10 hours of structured driving tuition",
                  },
                  price: "340.00",
                  priceCurrency: "GBP",
                  eligiblePaymentType: "Klarna",
                },
              ],
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How quickly can I pass my driving test with an intensive course in Ilford?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most of our intensive course students in Ilford pass within 1–2 weeks. Our structured daily syllabus with 2–4 hour sessions allows you to build skills rapidly without forgetting between lessons. We cover Goodmayes, Barking, and Wanstead test routes so you're fully prepared.",
                },
              },
              {
                "@type": "Question",
                name: "What areas of East London do you cover for intensive driving courses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We cover all East London areas including Ilford (IG1–IG6), Goodmayes, Barking (IG11), Romford (RM1–RM7), East Ham (E6), Forest Gate (E7), Canning Town (E16), Docklands (E14), Walthamstow (E10, E11, E17), Stratford (E15), Leytonstone (E11), Gants Hill (IG2), Chadwell Heath (RM6), Seven Kings (IG3), and Dagenham (RM8, RM9). Door-to-door pickup is included.",
                },
              },
              {
                "@type": "Question",
                name: "Can I pay for my intensive driving course with Klarna?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We offer Klarna interest-free payments on our 10-Hour Block (£340 split into 3 payments of £113.33) and Intensive Pass Course (£650–£950). This lets you spread the cost without any interest charges, so you can start learning now.",
                },
              },
              {
                "@type": "Question",
                name: "How much does an intensive driving course cost in Ilford?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our intensive driving courses in Ilford range from £650 for 12 hours up to £950 for 30 hours, depending on your starting ability. We also offer a 10-Hour Block at £340 (£34/hr) and a 2-hour assessment at £70. All prices include door-to-door pickup in a Mercedes-Benz A-Class automatic.",
                },
              },
              {
                "@type": "Question",
                name: "Which test centres do you prepare students for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We specialise in preparing students for Goodmayes DTC, Barking (Tanner Street), Wanstead (Hermon Hill), and Chingford test centres. Our instructor knows every route at these centres, significantly increasing your chances of passing first time.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer automatic intensive driving courses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all our intensive driving courses in Ilford are conducted in a modern Mercedes-Benz A-Class automatic. Automatic cars are easier to learn in, letting you focus on road awareness rather than clutch control and gear changes.",
                },
              },
            ],
          }),
        }}
      />

      <Navbar />

      <main className="pt-[100px] relative z-10">
        {/* === HERO SECTION === */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          >
            <source
              src="/images/certifications/kling_20260203_Image_to_Video_create_a_s_5342_0.mp4"
              type="video/mp4"
            />
          </video>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d]/95 via-[#0d0d0d]/80 to-[#0d0d0d]/85" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Trust Badges */}
                <motion.div
                  className="flex flex-wrap items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-sm font-medium text-white">
                      DVSA Approved
                    </span>
                  </div>
                  <div className="flex items-center bg-[#ff6b35]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#ff6b35]/30">
                    <Zap className="h-4 w-4 text-[#ff6b35] mr-2" />
                    <span className="text-sm font-medium text-white">
                      Intensive Courses
                    </span>
                  </div>
                  <div className="flex items-center bg-pink-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-400/30">
                    <CreditCard className="h-4 w-4 text-pink-400 mr-2" />
                    <span className="text-sm font-medium text-white">
                      Klarna Available
                    </span>
                  </div>
                </motion.div>

                {/* Hero Heading */}
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-[80px] font-black leading-tight"
                  style={{ letterSpacing: "-3px" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-white">Intensive Driving</span>
                  <br />
                  <span className="text-[#ff6b35]">Courses in Ilford</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-xl md:text-2xl text-[rgba(255,255,255,0.8)] leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Pass your driving test in{" "}
                  <span className="text-[#ff6b35] font-bold">1–2 weeks</span>{" "}
                  with our DVSA-approved intensive courses. Daily immersive
                  lessons in a{" "}
                  <span className="text-white font-semibold">
                    Mercedes-Benz A-Class automatic
                  </span>
                  . Klarna interest-free payments available. Covering all East
                  London test centres.
                </motion.p>

                {/* Quick Price Preview */}
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="bg-white/5 backdrop-blur-md rounded-lg px-4 py-3 border border-white/10">
                    <span className="text-[#ff6b35] font-bold text-lg">
                      £70
                    </span>
                    <span className="text-gray-400 text-sm ml-2">
                      / 2hr assessment
                    </span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-lg px-4 py-3 border border-white/10">
                    <span className="text-[#ff6b35] font-bold text-lg">
                      £340
                    </span>
                    <span className="text-gray-400 text-sm ml-2">
                      / 10hr block
                    </span>
                  </div>
                  <div className="bg-[#ff6b35]/20 backdrop-blur-md rounded-lg px-4 py-3 border border-[#ff6b35]/30">
                    <span className="text-[#ff6b35] font-bold text-lg">
                      £650 – £950
                    </span>
                    <span className="text-gray-400 text-sm ml-2">
                      / intensive course
                    </span>
                  </div>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <Trophy className="h-6 w-6 mx-auto mb-2 text-yellow-400" />
                      <div className="text-2xl font-bold text-yellow-400">
                        98%
                      </div>
                      <div className="text-xs text-gray-400">
                        First-Time Pass
                      </div>
                    </div>
                    <div className="text-center">
                      <Users className="h-6 w-6 mx-auto mb-2 text-blue-300" />
                      <div className="text-2xl font-bold text-blue-300">
                        2000+
                      </div>
                      <div className="text-xs text-gray-400">Students</div>
                    </div>
                    <div className="text-center">
                      <Star className="h-6 w-6 mx-auto mb-2 text-green-400" />
                      <div className="text-2xl font-bold text-green-400">
                        4.9
                      </div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div className="text-center">
                      <Zap className="h-6 w-6 mx-auto mb-2 text-[#ff6b35]" />
                      <div className="text-2xl font-bold text-[#ff6b35]">
                        1–2
                      </div>
                      <div className="text-xs text-gray-400">Weeks to Pass</div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Button
                    size="lg"
                    className="bg-[#ff6b35] hover:bg-[#ff8555] text-white px-8 py-6 rounded-xl font-bold text-base shadow-[0_8px_30px_rgba(255,107,53,0.4)] hover:shadow-[0_12px_40px_rgba(255,107,53,0.5)] hover:-translate-y-1 transition-all"
                    onClick={() => {
                      triggerConfetti();
                      window.location.href = "/booking/intensive";
                    }}
                  >
                    🚗 Book Your Intensive Course
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border border-[rgba(255,255,255,0.2)] text-white bg-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:bg-[rgba(255,255,255,0.15)] px-8 py-6 rounded-xl font-semibold"
                    onClick={() => {
                      document
                        .getElementById("pricing")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    💰 View Pricing & Klarna Options
                  </Button>
                </motion.div>

                {/* Postcode Checker */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <PostcodeChecker
                    onPostcodeChecked={handlePostcodeChecked}
                    onLessonSelected={handleLessonSelected}
                    className="bg-white/5 backdrop-blur-md border border-white/10"
                  />
                </motion.div>

                {/* Social Proof */}
                <motion.div
                  className="flex items-center space-x-6 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-[#0d0d0d]"
                        ></div>
                      ))}
                    </div>
                    <span className="text-gray-400">
                      2000+ successful drivers
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-gray-400">4.9/5 rating</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Feature Card */}
              <motion.div
                className="relative hidden lg:block"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-[rgba(255,107,53,0.1)] to-[rgba(255,107,53,0.02)] border border-[rgba(255,107,53,0.2)] rounded-3xl p-8 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-[#ff6b35] rounded-2xl flex items-center justify-center">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Why Intensive?
                      </h3>
                      <p className="text-[#ff6b35] text-sm font-medium">
                        The fastest route to your licence
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {whyIntensive.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[rgba(255,255,255,0.05)] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                          <item.icon className="w-5 h-5 text-[#ff6b35]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-xs mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Trust Strip */}
                  <div className="border-t border-[rgba(255,255,255,0.1)] pt-6">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        DVSA Approved
                      </span>
                      <span className="flex items-center gap-1">
                        <Shield className="w-4 h-4 text-[#ff6b35]" />
                        DBS Checked
                      </span>
                      <span className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4 text-blue-400" />
                        ORDIT Trained
                      </span>
                    </div>
                  </div>
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

        {/* === TRUST BAR === */}
        <CertificationsBar />

        {/* === BENEFITS SECTION === */}
        <section id="benefits" className="py-24 bg-[#1a1a1a] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b35]/5 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff6b35]/5 rounded-full opacity-30 blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center mb-4 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] px-5 py-2 rounded-full text-sm font-medium text-[#ff6b35]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Why Choose Our Intensive Courses
              </motion.div>
              <h2
                className="text-4xl md:text-5xl font-black mb-4 text-white"
                style={{ letterSpacing: "-2px" }}
              >
                The Fastest Way to Your{" "}
                <span className="text-[#ff6b35]">Driving Licence</span>
              </h2>
              <p className="text-[#888] text-lg max-w-2xl mx-auto">
                Our intensive driving courses in Ilford are designed for one
                purpose: getting you test-ready and passing first time — fast.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,107,53,0.3)] transition-all hover:-translate-y-1 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* === PRICING SECTION === */}
        <section id="pricing" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b35]/5 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff6b35]/5 rounded-full opacity-20 blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center mb-4 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] px-5 py-2 rounded-full text-sm font-medium text-[#ff6b35]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Flame className="h-4 w-4 mr-2" />
                Pricing & Packages
              </motion.div>
              <h2
                className="text-4xl md:text-5xl font-black mb-4 text-white"
                style={{ letterSpacing: "-2px" }}
              >
                Choose Your{" "}
                <span className="text-[#ff6b35]">Intensive Course</span>
              </h2>
              <p className="text-[#888] text-lg max-w-2xl mx-auto">
                All courses include door-to-door pickup in a Mercedes-Benz
                A-Class automatic. Klarna interest-free payments available on
                block bookings and intensive courses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  className={`bg-[rgba(255,255,255,0.03)] border rounded-2xl p-8 relative transition-all hover:-translate-y-1 group ${
                    plan.popular
                      ? "border-[#ff6b35] bg-gradient-to-b from-[rgba(255,107,53,0.1)] to-[rgba(255,107,53,0.02)] scale-[1.02] z-10"
                      : "border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,107,53,0.5)]"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredPackage(plan.id)}
                  onMouseLeave={() => setHoveredPackage(null)}
                >
                  {/* Badge */}
                  <div
                    className={`absolute top-0 left-0 right-0 bg-gradient-to-r ${plan.badgeColor} text-white text-xs font-bold px-3 py-2 text-center rounded-t-2xl`}
                  >
                    {plan.badge}
                  </div>

                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff6b35] text-white px-5 py-1 rounded-full text-xs font-bold uppercase z-20">
                      Most Popular
                    </div>
                  )}

                  <div className={plan.badge ? "pt-12" : "pt-4"}>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {plan.title}
                    </h3>
                    <p className="text-[#888] text-sm mb-6">{plan.subtitle}</p>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl font-extrabold text-white">
                        {plan.price}
                      </span>
                    </div>
                    <div className="text-[#888] text-sm mb-3">{plan.unit}</div>

                    {plan.originalPrice && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-gray-500 line-through text-sm">
                          {plan.originalPrice}
                        </span>
                        <span className="bg-[rgba(16,185,129,0.15)] text-green-500 px-3 py-1 rounded-lg text-sm font-semibold">
                          {plan.saving}
                        </span>
                      </div>
                    )}

                    {plan.discountCode && (
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 text-xs font-bold px-3 py-2 rounded-lg mb-4">
                        🎉 Use code{" "}
                        <span className="text-white font-black">
                          {plan.discountCode}
                        </span>{" "}
                        at checkout
                      </div>
                    )}

                    {/* Klarna Badge */}
                    {plan.klarna && plan.klarnaText && (
                      <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 text-pink-300 text-xs font-bold px-3 py-2 rounded-lg mb-4 flex items-center gap-2">
                        <CreditCard className="w-3.5 h-3.5 flex-shrink-0" />
                        {plan.klarnaText}
                      </div>
                    )}

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[rgba(255,255,255,0.8)]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      className={`w-full justify-center text-base font-semibold ${
                        plan.popular
                          ? "bg-[#ff6b35] hover:bg-[#ff8555] text-white shadow-[0_8px_30px_rgba(255,107,53,0.4)]"
                          : "bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] text-white"
                      }`}
                      onClick={() => {
                        triggerConfetti();
                        window.location.href = plan.ctaLink;
                      }}
                    >
                      {plan.ctaText}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Klarna Promo Strip */}
            <motion.div
              className="mt-12 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 border border-pink-400/20 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <CreditCard className="w-6 h-6 text-pink-400" />
                <span className="text-white font-bold text-lg">
                  Pay Later with Klarna
                </span>
              </div>
              <p className="text-[#888] text-sm max-w-xl mx-auto">
                Spread the cost of your intensive driving course with
                interest-free monthly payments. Available on our 10-Hour Block
                and Intensive Pass Course. No fees, no interest — just
                flexibility.
              </p>
            </motion.div>
          </div>
        </section>

        {/* === TEST CENTRES SECTION === */}
        <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center mb-4 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] px-5 py-2 rounded-full text-sm font-medium text-[#ff6b35]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                Test Centre Preparation
              </motion.div>
              <h2
                className="text-4xl md:text-5xl font-black mb-4 text-white"
                style={{ letterSpacing: "-2px" }}
              >
                We Know Every{" "}
                <span className="text-[#ff6b35]">Test Route</span>
              </h2>
              <p className="text-[#888] text-lg max-w-2xl mx-auto">
                Our intensive courses include dedicated test route practice for
                these East London driving test centres. We'll prepare you for
                the exact roads you'll face on test day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testCentres.map((centre, index) => (
                <motion.div
                  key={index}
                  className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 hover:border-[rgba(255,107,53,0.3)] transition-all hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-[rgba(255,107,53,0.1)] rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-[#ff6b35]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {centre.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[rgba(16,185,129,0.15)] text-green-500 text-xs font-bold px-2 py-0.5 rounded-full">
                      {centre.passRate} pass rate
                    </span>
                  </div>
                  <p className="text-[#888] text-xs mb-2">
                    Postcodes: {centre.postcodes}
                  </p>
                  <p className="text-[#888] text-sm">{centre.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-[#888] text-sm">
                Not sure which test centre is best for you?{" "}
                <a
                  href="/contact"
                  className="text-[#ff6b35] font-semibold hover:underline"
                >
                  Ask us — we'll help you choose →
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* === AREAS WE COVER === */}
        <section className="py-24 bg-[#0d0d0d] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center mb-4 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] px-5 py-2 rounded-full text-sm font-medium text-[#ff6b35]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                East London Coverage
              </motion.div>
              <h2
                className="text-4xl md:text-5xl font-black mb-4 text-white"
                style={{ letterSpacing: "-2px" }}
              >
                Intensive Driving Courses{" "}
                <span className="text-[#ff6b35]">Across East London</span>
              </h2>
              <p className="text-[#888] text-lg max-w-2xl mx-auto">
                We provide door-to-door pickup for intensive driving courses
                throughout Ilford and all surrounding East London postcodes.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
              {postcodesGrid.map((postcode, index) => (
                <motion.div
                  key={index}
                  className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-4 text-center hover:bg-[rgba(255,107,53,0.1)] hover:border-[rgba(255,107,53,0.3)] transition-all cursor-default"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true }}
                >
                  <MapPin className="h-5 w-5 mx-auto mb-2 text-[#ff6b35]" />
                  <span className="text-white font-bold text-sm">
                    {postcode}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {areasCovered.map((area, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-lg px-3 py-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* === HOW IT WORKS === */}
        <GetStartedSection />

        {/* === TESTIMONIALS === */}
        <NewTestimonialsSection />

        {/* === FAQ === */}
        <FAQSection />

        {/* === FINAL CTA === */}
        <section className="py-24 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#ff6b35]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ff6b35]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center mb-4 bg-[rgba(255,107,53,0.2)] border border-[rgba(255,107,53,0.4)] px-5 py-2 rounded-full text-sm font-medium text-[#ff6b35]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Start Your Driving Journey Today
              </motion.div>

              <h2
                className="text-4xl md:text-6xl font-black mb-6 text-white"
                style={{ letterSpacing: "-2px" }}
              >
                Ready to Pass Your{" "}
                <span className="text-[#ff6b35]">Driving Test</span> in
                Ilford?
              </h2>

              <p className="text-xl text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto mb-10">
                Book your intensive driving course today. DVSA-approved
                instructor, Mercedes-Benz automatic, Klarna interest-free
                payments, and a{" "}
                <span className="text-[#ff6b35] font-bold">
                  98% first-time pass rate
                </span>
                . What are you waiting for?
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { value: "98%", label: "Pass Rate", icon: Trophy },
                  { value: "2000+", label: "Students", icon: Users },
                  { value: "1–2", label: "Weeks to Pass", icon: Zap },
                  { value: "4.9", label: "Star Rating", icon: Star },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10"
                  >
                    <stat.icon className="h-6 w-6 mx-auto mb-2 text-[#ff6b35]" />
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#ff6b35] hover:bg-[#ff8555] text-white px-8 py-6 rounded-xl font-bold text-lg shadow-[0_8px_30px_rgba(255,107,53,0.4)] hover:shadow-[0_12px_40px_rgba(255,107,53,0.5)] hover:-translate-y-1 transition-all"
                  onClick={() => {
                    triggerConfetti();
                    window.location.href = "/booking/intensive";
                  }}
                >
                  🚗 Book Your Intensive Course
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border border-[rgba(255,255,255,0.2)] text-white bg-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:bg-[rgba(255,255,255,0.15)] px-8 py-6 rounded-xl font-semibold text-lg"
                  onClick={() => (window.location.href = "/contact")}
                >
                  💬 Ask a Question
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="tel:+447487228866"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#ff6b35] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +44 748 722 8866
                </a>
                <a
                  href="https://wa.me/447487228866?text=Hi%2C%20I%27d%20like%20to%20book%20an%20intensive%20driving%20course"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#ff6b35] transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/447487228866?text=Hi%2C%20I%27d%20like%20to%20book%20an%20intensive%20driving%20course%20in%20Ilford"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#25d366] text-white px-6 py-4 rounded-full font-semibold shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden sm:inline">Book via WhatsApp</span>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default IntensiveDrivingCoursesIlford;
