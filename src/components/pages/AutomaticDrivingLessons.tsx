import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import CertificationsBar from "../sections/CertificationsBar";
import GetStartedSection from "../sections/GetStartedSection";
import NewTestimonialsSection from "../sections/NewTestimonialsSection";
import FAQSection from "../sections/FAQSection";
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
  CreditCard,
  Phone,
  Mail,
  MessageCircle,
  GraduationCap,
} from "lucide-react";
import confetti from "canvas-confetti";

const AutomaticDrivingLessons = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const handlePostcodeChecked = (result: { isCovered: boolean }) => {
    if (result.isCovered) {
      triggerConfetti();
    }
  };

  const handleLessonSelected = (lessonType: string) => {
    if (lessonType === "automatic") {
      window.location.href = "/booking/payg";
    }
  };

  const features = [
    {
      title: "Mercedes-Benz A-Class",
      description:
        "Learn in style with our premium automatic vehicle. Modern, safe, and comfortable — the best learning experience in East London.",
      icon: Car,
      color: "from-[#ff6b35] to-[#f5a623]",
    },
    {
      title: "DVSA Approved Instructor",
      description:
        "Fully qualified ADI, ORDIT trained, and DBS checked. Years of experience teaching automatic-only lessons across East London.",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Flexible Scheduling",
      description:
        "Early mornings, evenings, and weekends available. Book lessons that fit around your work, university, or family commitments.",
      icon: Calendar,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Test Car Provided",
      description:
        "Use our Mercedes-Benz A-Class for your driving test at no extra cost. We'll pick you up, take you to the test centre, and celebrate when you pass.",
      icon: Trophy,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Klarna Payment Options",
      description:
        "Spread the cost with interest-free monthly payments. Get on the road now without the upfront financial burden.",
      icon: CreditCard,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Door-to-Door Pickup",
      description:
        "Free pickup from your home, work, or college across all East London postcodes. Maximum convenience for every learner.",
      icon: MapPin,
      color: "from-orange-500 to-red-500",
    },
  ];

  const services = [
    {
      title: "Beginner Automatic Lessons",
      description:
        "Start your driving journey with patient, step-by-step instruction tailored for complete beginners in our Mercedes-Benz A-Class.",
    },
    {
      title: "Intensive Fast-Track Course",
      description:
        "Pass in as little as 1–2 weeks with our intensive course. Daily immersive lessons designed to get you test-ready fast. Klarna available.",
    },
    {
      title: "Pass Plus Training",
      description:
        "Enhance your skills after passing. Learn motorway driving, night driving, and advanced techniques. Insurance discounts available.",
    },
    {
      title: "Refresher Courses",
      description:
        "Regain your confidence on the road. Perfect for drivers returning after a break or those wanting to convert from manual to automatic.",
    },
    {
      title: "Theory Test Preparation",
      description:
        "Free access to our DVSA-approved theory app with 3,000+ practice questions. We'll help you pass your theory first time.",
    },
    {
      title: "Mock Driving Tests",
      description:
        "Real test conditions simulation with detailed feedback. Identify weaknesses before your actual test and boost your confidence.",
    },
  ];

  // Pricing matching Services page exactly
  const pricing = [
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
      id: "20hour",
      title: "20-Hour Package",
      subtitle: "Complete beginner to test ready",
      price: "£689",
      originalPrice: "£839",
      saving: "Save £150",
      unit: "/ 20 hours (£34.45/hr)",
      features: [
        "20 hours of driving tuition",
        "Full structured learning plan",
        "2 mock tests included",
        "Theory test support",
        "Priority booking & test car hire",
      ],
      popular: true,
      badge: "⭐ MOST POPULAR",
      badgeColor: "from-[#ff6b35] to-[#f5a623]",
      ctaLink: "/booking/10hour",
      ctaText: "Book 20-Hour Package",
      klarna: true,
      klarnaText: "💳 Klarna available — interest-free payments",
    },
    {
      id: "intensive",
      title: "Intensive Pass Course",
      subtitle: "Pass in as little as 2 weeks",
      price: "£650 – £950",
      unit: "/ 12–30 hours",
      features: [
        "15–25 hours immersive daily lessons",
        "Theory test support & guidance",
        "Mock test before test date",
        "Flexible scheduling around work/uni",
        "Structured daily syllabus",
        "Test car hire included",
      ],
      popular: false,
      badge: "🚀 FAST TRACK",
      badgeColor: "from-purple-500 to-pink-500",
      ctaLink: "/booking/intensive",
      ctaText: "Book Intensive Course",
      klarna: true,
      klarnaText: "💳 Klarna available — split payments interest-free",
    },
  ];

  const areas = [
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
    "Leytonstone",
  ];

  const faqs = [
    {
      question: "Why should I learn in an automatic car?",
      answer:
        "Automatic cars are easier to learn in because you don't need to worry about clutch control or gear changes. This lets you focus on road awareness and hazard perception — key skills for passing your test. Plus, with most new cars being automatic, you'll be future-ready. Our Mercedes-Benz A-Class automatic provides the smoothest learning experience.",
    },
    {
      question: "How many lessons will I need to pass?",
      answer:
        "On average, learners need 20–25 hours of professional instruction. Complete beginners may need more, while those with some experience may need less. Our 20-hour package is designed to take most beginners to test standard, and our intensive course can get you there in 1–2 weeks with daily lessons.",
    },
    {
      question: "Do you provide a car for the driving test?",
      answer:
        "Yes! All our packages include use of our Mercedes-Benz A-Class for your driving test. We'll pick you up before the test, give you a warm-up session, take you to the test centre, and get you home afterwards — whether you pass or not.",
    },
    {
      question: "What areas of East London do you cover?",
      answer:
        "We cover all of East London including Ilford, Goodmayes, Barking, Romford, East Ham, Forest Gate, Canning Town, Docklands, Walthamstow, Isle of Dogs, Stratford, and Leytonstone. Door-to-door pickup is included with all lessons. We prepare students for Goodmayes DTC, Barking, Wanstead, and Chingford test centres.",
    },
    {
      question: "Can I pay with Klarna?",
      answer:
        "Yes! We offer Klarna interest-free payments on our 10-Hour Block (£340 → 3 payments of £113.33), 20-Hour Package, and Intensive Pass Course. This lets you spread the cost without any interest charges, so you can start learning now and pay later.",
    },
    {
      question: "Can I book an intensive automatic course?",
      answer:
        "Absolutely! Our intensive fast-track course is conducted entirely in our Mercedes-Benz A-Class automatic. You'll have daily 2–4 hour sessions over 1–2 weeks. Many students pass within this timeframe — it's perfect if you need to learn quickly for a job, university, or a deadline.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] relative overflow-hidden">
      {/* SEO */}
      <SEO
        title="Book Automatic Driving Lessons Online Instantly | Live Availability | Drive Dojo"
        description="Book your automatic driving lessons instantly and spread the cost. We accept Klarna — pay in 3 interest-free! View live availability and book 10-hour blocks online in 60 seconds with Drive Dojo. DVSA approved, Mercedes-Benz A-Class, first 2 hours £70. Covering Ilford, Goodmayes, Barking, Romford & all East London."
        keywords="automatic driving lessons East London, automatic driving lessons Ilford, learn automatic car East London, Mercedes automatic driving lessons, automatic driving instructor Ilford, automatic driving school East London, DVSA automatic lessons, automatic driving lessons Barking, automatic driving lessons Goodmayes, automatic driving lessons Romford, automatic driving lessons Forest Gate, automatic driving lessons Walthamstow, automatic driving lessons Docklands, cheap automatic driving lessons London, best automatic driving instructor, Klarna driving lessons, pay monthly driving lessons, intensive automatic driving course, automatic crash course London, Mercedes A-Class driving lessons"
        canonical="https://drivedojodrivingschool.com/automatic-driving-lessons"
        serviceSchema={{
          name: "Automatic Driving Lessons in East London",
          description:
            "Premium automatic driving lessons in a Mercedes-Benz A-Class. DVSA approved instructor covering Ilford, Goodmayes, Barking, Romford, and all East London postcodes. Klarna interest-free payments available.",
          provider: {
            name: "Drive Dojo Driving School",
            url: "https://drivedojodrivingschool.com",
          },
          price: "70",
          priceCurrency: "GBP",
          areaServed:
            "Ilford, Goodmayes, Barking, Romford, East Ham, Forest Gate, Canning Town, Docklands, Walthamstow, Isle of Dogs, Stratford, Leytonstone",
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
              "DVSA approved automatic driving lessons in East London. Learn in a Mercedes-Benz A-Class with expert instructors. Klarna payments available.",
            url: "https://drivedojodrivingschool.com/automatic-driving-lessons",
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
              "Leytonstone",
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
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Automatic Driving Lesson Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "10-Hour Block",
                    description:
                      "10 hours of structured automatic driving tuition in Mercedes-Benz A-Class",
                  },
                  price: "340.00",
                  priceCurrency: "GBP",
                  eligiblePaymentType: "Klarna",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "20-Hour Package",
                    description:
                      "20 hours — complete beginner to test ready in a Mercedes-Benz A-Class",
                  },
                  price: "689.00",
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
                name: "Why should I learn in an automatic car?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Automatic cars are easier to learn in because you don't need to worry about clutch control or gear changes. This lets you focus on road awareness and hazard perception. Plus, with most new cars being automatic, you'll be future-ready.",
                },
              },
              {
                "@type": "Question",
                name: "How much do automatic driving lessons cost in East London?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our automatic driving lessons start at £70 for a 2-hour assessment (use code SAVE25). Block bookings: 10 hours £340 (£34/hr), 20 hours £689 (£34.45/hr). Intensive courses from £650–£950. All in a Mercedes-Benz A-Class with door-to-door pickup. Klarna interest-free payments available.",
                },
              },
              {
                "@type": "Question",
                name: "What areas do you cover for automatic driving lessons?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We cover all East London areas including Ilford, Goodmayes, Barking, Romford, East Ham, Forest Gate, Canning Town, Docklands, Walthamstow, Isle of Dogs, Stratford, and Leytonstone. Door-to-door pickup is included with all lessons.",
                },
              },
              {
                "@type": "Question",
                name: "Can I pay for driving lessons with Klarna?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We offer Klarna interest-free payments on our 10-Hour Block, 20-Hour Package, and Intensive Pass Course. Spread the cost over 3 monthly payments with no interest.",
                },
              },
            ],
          }),
        }}
      />

      <Navbar />

      <main className="pt-[100px] relative z-10">
        {/* === HERO SECTION === */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          >
            <source
              src="/images/certifications/mercxdrivedojo.mp4"
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
                    <Car className="h-4 w-4 text-[#ff6b35] mr-2" />
                    <span className="text-sm font-medium text-white">
                      Automatic Only
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
                  <span className="text-white">Master the Road</span>
                  <br />
                  <span className="text-[#ff6b35]">with Confidence</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-xl md:text-2xl text-[rgba(255,255,255,0.8)] leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Premium automatic driving lessons in a{" "}
                  <span className="text-white font-semibold">
                    Mercedes-Benz A-Class
                  </span>
                  . DVSA approved instructor with{" "}
                  <span className="text-[#ff6b35] font-bold">
                    98% first-time pass rate
                  </span>
                  . Klarna interest-free payments available. Covering all East
                  London.
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
                      £689
                    </span>
                    <span className="text-gray-400 text-sm ml-2">
                      / 20hr (Popular)
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
                      <Award className="h-6 w-6 mx-auto mb-2 text-[#ff6b35]" />
                      <div className="text-2xl font-bold text-[#ff6b35]">
                        8+
                      </div>
                      <div className="text-xs text-gray-400">
                        Years Experience
                      </div>
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
                      window.location.href = "/services";
                    }}
                  >
                    🚗 Book Your Automatic Lessons
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border border-[rgba(255,255,255,0.2)] text-white bg-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:bg-[rgba(255,255,255,0.15)] px-8 py-6 rounded-xl font-semibold"
                    asChild
                  >
                    <a href="tel:+447487228866">
                      <Phone className="mr-2 w-5 h-5" />
                      +44 748 722 8866
                    </a>
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

              {/* Right Content */}
              <motion.div
                className="relative hidden lg:block"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source
                      src="/images/certifications/dooropen.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-[#ff6b35] text-white p-4 rounded-xl shadow-[0_8px_30px_rgba(255,107,53,0.4)]">
                    <div className="text-2xl font-bold">AUTO</div>
                    <div className="text-xs">MATIC ✓</div>
                  </div>
                </div>

                {/* Floating Element */}
                <div className="absolute -top-6 -left-6 bg-[#ff6b35]/20 border border-[#ff6b35]/30 p-4 rounded-xl">
                  <Car className="h-8 w-8 text-[#ff6b35]" />
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

        {/* Welcome Offer Banner */}
        <div className="bg-gradient-to-r from-[#ff6b35] to-[#f5a623] py-4 text-center">
          <p className="font-semibold text-white">
            <strong>New Driver Assessment:</strong> 120 Minutes for £70 (was £95
            with code{" "}
            <span className="bg-white/20 px-2 py-0.5 rounded">SAVE25</span>){" "}
            <strong>— Limited slots available.</strong>
          </p>
        </div>

        {/* Trust Bar */}
        <CertificationsBar />

        {/* Why Choose Us Section */}
        <section className="py-24 bg-[#1a1a1a] relative overflow-hidden" id="why-us">
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
                Why Choose Us
              </motion.div>
              <h2
                className="text-4xl md:text-5xl font-black mb-4 text-white"
                style={{ letterSpacing: "-2px" }}
              >
                The Premium{" "}
                <span className="text-[#ff6b35]">Automatic</span> Driving
                Experience
              </h2>
              <p className="text-[#888] text-lg max-w-2xl mx-auto">
                We specialise exclusively in automatic driving lessons. No
                clutch, no gears — just focused, faster learning in a
                Mercedes-Benz A-Class.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,107,53,0.3)] transition-all hover:-translate-y-1 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-[#0d0d0d] relative overflow-hidden" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center mb-4 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] px-5 py-2 rounded-full text-sm font-medium text-[#ff6b35]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Car className="h-4 w-4 mr-2" />
                Our Services
              </motion.div>
              <h2
                className="text-4xl md:text-5xl font-black mb-4 text-white"
                style={{ letterSpacing: "-2px" }}
              >
                Automatic Lessons{" "}
                <span className="text-[#ff6b35]">Only</span>
              </h2>
              <p className="text-[#888] text-lg max-w-2xl mx-auto">
                We specialise exclusively in automatic driving lessons for a
                smoother, faster learning experience. All lessons in a
                Mercedes-Benz A-Class.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-[#f5a623] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-14 h-14 bg-[rgba(255,107,53,0.1)] rounded-xl flex items-center justify-center mb-5">
                    <Car className="w-7 h-7 text-[#ff6b35]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#888] text-sm mb-4">
                    {service.description}
                  </p>
                  <a
                    href="#pricing"
                    className="text-[#ff6b35] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    View Pricing <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Intensive Course Cross-Sell */}
            <motion.div
              className="mt-12 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 border border-purple-400/20 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-purple-400" />
                <span className="text-white font-bold text-lg">
                  Need Your Licence Fast?
                </span>
              </div>
              <p className="text-[#888] text-sm max-w-xl mx-auto mb-4">
                Check out our{" "}
                <a
                  href="/intensive-driving-courses-ilford"
                  className="text-[#ff6b35] font-semibold hover:underline"
                >
                  Intensive Driving Courses in Ilford →
                </a>{" "}
                — pass in 1–2 weeks with daily immersive lessons. Klarna
                available.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-[#1a1a1a] relative overflow-hidden" id="pricing">
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
                Transparent Pricing,{" "}
                <span className="text-[#ff6b35]">Great Value</span>
              </h2>
              <p className="text-[#888] text-lg max-w-2xl mx-auto">
                Choose the package that fits your learning journey. All prices
                include door-to-door pickup from your location. Klarna
                interest-free payments available on block bookings and intensive
                courses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricing.map((plan, index) => (
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

                    {/* CTA */}
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

            {/* Special Offers */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.div
                className="bg-gradient-to-br from-[rgba(245,166,35,0.1)] to-[rgba(245,166,35,0.02)] border border-[rgba(245,166,35,0.3)] rounded-2xl p-6 flex items-center gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-[#f5a623] rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">
                    Student Discount
                  </h4>
                  <p className="text-[#888] text-sm">
                    15% off all packages with valid student ID
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[rgba(245,166,35,0.1)] to-[rgba(245,166,35,0.02)] border border-[rgba(245,166,35,0.3)] rounded-2xl p-6 flex items-center gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-[#f5a623] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">
                    Refer a Friend
                  </h4>
                  <p className="text-[#888] text-sm">
                    Get £25 off for each friend who books
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Klarna Promo Strip */}
            <motion.div
              className="mt-8 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 border border-pink-400/20 rounded-2xl p-6 text-center"
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
                Spread the cost of your automatic driving lessons with
                interest-free monthly payments. Available on our 10-Hour Block,
                20-Hour Package, and Intensive Pass Course. No fees, no interest
                — just flexibility.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Areas Section */}
        <section className="py-24 bg-[#0d0d0d] relative overflow-hidden" id="areas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  className="inline-flex items-center mb-4 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] px-5 py-2 rounded-full text-sm font-medium text-[#ff6b35]"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Coverage
                </motion.div>
                <h2
                  className="text-4xl md:text-5xl font-black mb-6 text-white"
                  style={{ letterSpacing: "-2px" }}
                >
                  East London{" "}
                  <span className="text-[#ff6b35]">& Essex</span>
                </h2>
                <p className="text-[#888] text-lg mb-8">
                  We cover a wide area across East London and Essex.
                  Door-to-door pickup included with all automatic driving
                  lessons.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {areas.map((area, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl hover:bg-[rgba(255,107,53,0.1)] hover:border-[rgba(255,107,53,0.3)] transition-all cursor-default"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <MapPin className="w-5 h-5 text-[#ff6b35] flex-shrink-0" />
                      <span className="font-medium text-sm text-white">
                        {area}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-3xl overflow-hidden flex items-center justify-center">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="/images/certifications/dooropen.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#0d0d0d] border-2 border-[#ff6b35] px-6 py-3 rounded-xl whitespace-nowrap">
                  <p className="font-semibold text-white">
                    Learn in Style with{" "}
                    <span className="text-[#ff6b35]">Mercedes-Benz</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <GetStartedSection />

        {/* Testimonials */}
        <NewTestimonialsSection />

        {/* FAQ */}
        <section className="py-24 bg-[#1a1a1a] relative overflow-hidden" id="faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center mb-4 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] px-5 py-2 rounded-full text-sm font-medium text-[#ff6b35]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Sparkles className="h-4 w-4 mr-2" />
                FAQ
              </motion.div>
              <h2
                className="text-4xl md:text-5xl font-black mb-4 text-white"
                style={{ letterSpacing: "-2px" }}
              >
                Frequently Asked{" "}
                <span className="text-[#ff6b35]">Questions</span>
              </h2>
              <p className="text-[#888] text-lg">
                Everything you need to know about learning automatic with Drive
                Dojo.
              </p>
            </div>

            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-[rgba(255,255,255,0.1)]"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center py-6 text-left"
                  >
                    <span className="text-lg font-semibold text-white pr-8">
                      {faq.question}
                    </span>
                    <ArrowRight
                      className={`w-5 h-5 text-[#ff6b35] flex-shrink-0 transition-transform ${
                        faqOpen === index ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      faqOpen === index ? "max-h-60 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-[#888] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-[#0d0d0d] relative overflow-hidden" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <motion.div
                  className="inline-flex items-center mb-4 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] px-5 py-2 rounded-full text-sm font-medium text-[#ff6b35]"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Get in Touch
                </motion.div>
                <h2
                  className="text-4xl font-black mb-4 text-white"
                  style={{ letterSpacing: "-2px" }}
                >
                  Ready to Start{" "}
                  <span className="text-[#ff6b35]">Driving?</span>
                </h2>
                <p className="text-[#888] text-lg mb-10">
                  Book your first automatic driving lesson today and take the
                  first step towards your driving licence.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/447487228866?text=Hi%2C%20I%27d%20like%20to%20book%20automatic%20driving%20lessons"
                    className="flex items-center gap-4 p-5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl hover:bg-[rgba(255,107,53,0.1)] hover:border-[rgba(255,107,53,0.3)] transition-all"
                  >
                    <div className="w-12 h-12 bg-[#25d366] rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white mb-0.5">
                        WhatsApp
                      </h4>
                      <p className="font-medium text-[#888]">
                        Instant Booking
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+447487228866"
                    className="flex items-center gap-4 p-5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl hover:bg-[rgba(255,107,53,0.1)] hover:border-[rgba(255,107,53,0.3)] transition-all"
                  >
                    <div className="w-12 h-12 bg-[#ff6b35] rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white mb-0.5">
                        Call Us
                      </h4>
                      <p className="font-medium text-[#888]">
                        +44 748 722 8866
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:drivedojo@gmail.com"
                    className="flex items-center gap-4 p-5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl hover:bg-[rgba(255,107,53,0.1)] hover:border-[rgba(255,107,53,0.3)] transition-all"
                  >
                    <div className="w-12 h-12 bg-[#ff6b35] rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white mb-0.5">
                        Email Us
                      </h4>
                      <p className="font-medium text-[#888]">
                        drivedojo@gmail.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <motion.div
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  Book Your Automatic Lessons
                </h3>
                <p className="text-[#888] mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-[#888] focus:border-[#ff6b35] focus:bg-[rgba(255,107,53,0.05)] outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Your phone"
                        className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-[#888] focus:border-[#ff6b35] focus:bg-[rgba(255,107,53,0.05)] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-[#888] focus:border-[#ff6b35] focus:bg-[rgba(255,107,53,0.05)] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Select Package
                    </label>
                    <select className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white focus:border-[#ff6b35] focus:bg-[rgba(255,107,53,0.05)] outline-none transition-all">
                      <option value="">Choose a package...</option>
                      <option value="welcome">
                        New Driver Assessment — £70 (2 Hours)
                      </option>
                      <option value="10hour">
                        10-Hour Block — £340 (£34/hr)
                      </option>
                      <option value="20hour">
                        20-Hour Package — £689 (£34.45/hr)
                      </option>
                      <option value="intensive">
                        Intensive Pass Course — £650–£950
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Additional Message
                    </label>
                    <textarea
                      placeholder="Any questions or preferred times?"
                      rows={3}
                      className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-[#888] focus:border-[#ff6b35] focus:bg-[rgba(255,107,53,0.05)] outline-none transition-all resize-none"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-[#ff6b35] hover:bg-[#ff8555] text-white py-4 rounded-xl font-bold"
                    onClick={() => triggerConfetti()}
                  >
                    Send Booking Request
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/447487228866?text=Hi%2C%20I%27d%20like%20to%20book%20automatic%20driving%20lessons"
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

export default AutomaticDrivingLessons;
