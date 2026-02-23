import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import GetStartedSection from "../sections/GetStartedSection";
import NewTestimonialsSection from "../sections/NewTestimonialsSection";
import FAQSection from "../sections/FAQSection";
import { Button } from "../ui/button";
import { ArrowRight, Car, CheckCircle, MapPin, Star, Users, Zap, Phone, Mail, MessageCircle } from "lucide-react";

const AutomaticDrivingLessons = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  useEffect(() => {
    // Add scroll animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(40px);
        transition: all 0.8s ease;
      }
      .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    return () => {
      document.head.removeChild(style);
      observer.disconnect();
    };
  }, []);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const stats = [
    { number: 87, suffix: "%", label: "Pass Rate" },
    { number: 98, suffix: "%", label: "First-Time Pass Rate" },
    { number: 2000, suffix: "+", label: "Students Taught" },
    { number: 8, suffix: "+", label: "Years Experience" },
  ];

  const features = [
    {
      title: "Mercedes-Benz A-Class",
      description: "Learn in style with our premium automatic vehicles. Modern, safe, and comfortable for the best learning experience.",
      icon: Car
    },
    {
      title: "DVSA Approved Instructors",
      description: "All our instructors are DVSA approved, ORDIT certified, and DBS checked for your peace of mind.",
      icon: CheckCircle
    },
    {
      title: "Flexible Scheduling",
      description: "Book lessons that fit your lifestyle. Early mornings, evenings, and weekends available.",
      icon: Zap
    },
    {
      title: "Test Car Provided",
      description: "Use our car for your driving test. No need to worry about hiring a vehicle on test day.",
      icon: Star
    }
  ];

  const services = [
    {
      title: "Beginner Automatic Lessons",
      description: "Start your driving journey with patient, step-by-step instruction tailored for complete beginners."
    },
    {
      title: "Intensive Fast-Track Course",
      description: "Pass in as little as 2 weeks with our intensive course. 30 hours of focused training."
    },
    {
      title: "Pass Plus Training",
      description: "Enhance your skills after passing. Learn motorway driving and advanced techniques."
    },
    {
      title: "Refresher Courses",
      description: "Regain your confidence on the road. Perfect for drivers returning after a break."
    },
    {
      title: "Theory Test Preparation",
      description: "Free access to our DVSA-approved theory app with 3000+ practice questions."
    },
    {
      title: "Door-to-Door Pickup",
      description: "We pick you up from your home, work, or college. Maximum convenience for learners."
    }
  ];

  const pricing = [
    {
      title: "Welcome Offer",
      description: "Perfect introduction to driving",
      price: 49,
      original: 79,
      savings: "Save £30",
      features: [
        "2 Hours of Driving",
        "Mercedes-Benz A-Class",
        "DVSA Approved Instructor",
        "Free Theory App Access"
      ],
      popular: false
    },
    {
      title: "10-Hour Package",
      description: "For confident learners",
      price: 350,
      original: 400,
      savings: "Save £50",
      features: [
        "10 Hours of Driving",
        "Flexible Scheduling",
        "Progress Reports",
        "Test Route Practice"
      ],
      popular: false
    },
    {
      title: "20-Hour Package",
      description: "Complete beginner to test ready",
      price: 650,
      original: 800,
      savings: "Save £150",
      features: [
        "20 Hours of Driving",
        "Test Day Car Included",
        "Mock Test Sessions",
        "Priority Booking"
      ],
      popular: true
    },
    {
      title: "Intensive Course",
      description: "Pass in just 2 weeks",
      price: 999,
      original: 1200,
      savings: "Save £201",
      features: [
        "30 Hours over 2 Weeks",
        "Daily Practice Sessions",
        "Fast-Track to Test",
        "Test Day Support"
      ],
      popular: false
    }
  ];

  const areas = [
    "Ilford", "Goodmayes", "Barking", "Romford", "East Ham", "Forest Gate", "Canning Town", "Docklands", "Walthamstow", "Isle of Dogs"
  ];

  const faqs = [
    {
      question: "Why should I learn in an automatic car?",
      answer: "Automatic cars are easier to learn in because you don't need to worry about clutch control or gear changes. This lets you focus on road awareness and hazard perception. Plus, with most new cars being automatic, you'll be future-ready!"
    },
    {
      question: "How many lessons will I need to pass?",
      answer: "On average, learners need 20-25 hours of professional instruction. Complete beginners may need more, while those with some experience may need less. Our 20-hour package is designed to take most beginners to test standard."
    },
    {
      question: "Do you provide a car for the driving test?",
      answer: "Yes! All our packages include use of our Mercedes-Benz A-Class for your driving test. We'll pick you up, take you to the test centre, and be there when you pass."
    },
    {
      question: "What areas do you cover?",
      answer: "We cover all of East London and Essex including Ilford, Goodmayes, Barking, Romford, East Ham, Forest Gate, Canning Town, Docklands, Walthamstow, and Isle of Dogs. Door-to-door pickup is included."
    },
    {
      question: "Can I book an intensive course?",
      answer: "Yes! Our intensive fast-track course includes 30 hours over 2 weeks. Many students pass within this time. It's perfect if you need to learn quickly for a job or have a deadline."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <Navbar />

      <main className="pt-[100px]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          >
            <source src="/images/certifications/mercxdrivedojo.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d]/90 via-[#0d0d0d]/70 to-[#0d0d0d]/80" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
            {/* Hero Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] px-5 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Star className="w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" />
              4.9 Star Rating | East London & Essex
            </motion.div>

            {/* Hero Title */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[80px] font-black mb-6 leading-tight"
              style={{ letterSpacing: "-3px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Master the Road
              <span className="block text-[#ff6b35]">with Confidence</span>
            </motion.h1>

            {/* Hero Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-[rgba(255,255,255,0.8)] mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Premium automatic driving lessons in a Mercedes-Benz A-Class. DVSA approved instructors with 87% pass rate.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-[#ff6b35] hover:bg-[#ff8555] text-white px-8 py-6 rounded-xl font-bold text-base shadow-[0_8px_30px_rgba(255,107,53,0.4)] hover:shadow-[0_12px_40px_rgba(255,107,53,0.5)] hover:-translate-y-1 transition-all"
                asChild
              >
                <a href="/services">
                  Book Your Lessons
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
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

            {/* Trust Items */}
            <motion.div
              className="flex flex-wrap justify-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { text: "DVSA Approved" },
                { text: "87% Pass Rate" },
                { text: "2000+ Students" },
                { text: "Automatic Only" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-[rgba(255,255,255,0.7)] text-sm">
                  <CheckCircle className="w-5 h-5 fill-green-500 text-green-500" />
                  {item.text}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Welcome Offer Banner */}
        <div className="bg-gradient-to-r from-[#ff6b35] to-[#f5a623] py-4 text-center">
          <p className="font-semibold">
            <strong>Welcome Offer:</strong> First 2 Hours for just £49 - Save £30! <strong>Limited slots available.</strong>
          </p>
        </div>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-[#1a1a1a]" id="why-us">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#ff6b35] text-sm font-semibold uppercase tracking-wider mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ letterSpacing: "-2px" }}>
                The Premium Driving Experience
              </h2>
              <p className="text-[#888] text-lg max-w-2xl mx-auto">
                Learn to drive in style with our fleet of Mercedes-Benz A-Class vehicles and expert instructors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,107,53,0.3)] transition-all hover:-translate-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#f5a623] rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-[#888] text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-[#0d0d0d]" id="services">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#ff6b35] text-sm font-semibold uppercase tracking-wider mb-4 block">Our Services</span>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ letterSpacing: "-2px" }}>
                Automatic Lessons Only
              </h2>
              <p className="text-[#888] text-lg max-w-2xl mx-auto">
                We specialise exclusively in automatic driving lessons for a smoother, faster learning experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-[#888] text-sm mb-4">{service.description}</p>
                  <a href="#contact" className="text-[#ff6b35] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-[#1a1a1a]" id="pricing">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#ff6b35] text-sm font-semibold uppercase tracking-wider mb-4 block">Pricing</span>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ letterSpacing: "-2px" }}>
                Transparent Pricing, Great Value
              </h2>
              <p className="text-[#888] text-lg max-w-2xl mx-auto">
                Choose the package that fits your learning journey. All prices include pickup from your location.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`bg-[rgba(255,255,255,0.03)] border rounded-2xl p-8 relative transition-all hover:-translate-y-1 ${
                    plan.popular
                      ? 'border-[#ff6b35] bg-gradient-to-b from-[rgba(255,107,53,0.1)] to-[rgba(255,107,53,0.02)] scale-[1.02]'
                      : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,107,53,0.5)]'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff6b35] text-white px-5 py-1 rounded-full text-xs font-bold uppercase">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-[#888] text-sm mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-extrabold">£{plan.price}</span>
                    <span className="text-[#888] line-through">£{plan.original}</span>
                  </div>
                  <div className="bg-[rgba(16,185,129,0.15)] text-green-500 px-3 py-1 rounded-lg text-sm font-semibold inline-block mb-6">
                    {plan.savings}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 fill-green-500 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full justify-center ${
                      plan.popular
                        ? 'bg-[#ff6b35] hover:bg-[#ff8555]'
                        : 'bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)]'
                    }`}
                    asChild
                  >
                    <a href="/services">Book Now</a>
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Special Offers */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="bg-gradient-to-br from-[rgba(245,166,35,0.1)] to-[rgba(245,166,35,0.02)] border border-[rgba(245,166,35,0.3)] rounded-2xl p-6 flex items-center gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-[#f5a623] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Student Discount</h4>
                  <p className="text-[#888] text-sm">15% off all packages with valid student ID</p>
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
                  <Star className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Refer a Friend</h4>
                  <p className="text-[#888] text-sm">Get £25 off for each friend who books</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#ff6b35]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ff6b35]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-4 gap-12 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/0 via-[#ff6b35]/20 to-[#ff6b35]/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 backdrop-blur-sm">
                    <h2 className="text-5xl md:text-7xl font-black mb-2 bg-gradient-to-r from-white to-[rgba(255,255,255,0.7)] bg-clip-text text-transparent">
                      {stat.number}{stat.suffix}
                    </h2>
                    <p className="font-medium text-[rgba(255,255,255,0.7)]">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section className="py-24 bg-[#1a1a1a]" id="areas">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#ff6b35] text-sm font-semibold uppercase tracking-wider mb-4 block">Coverage</span>
                <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ letterSpacing: "-2px" }}>
                  East London & Essex
                </h2>
                <p className="text-[#888] text-lg mb-8">
                  We cover a wide area across East London and Essex. Door-to-door pickup included with all lessons.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {areas.map((area, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl hover:bg-[rgba(255,107,53,0.1)] hover:border-[rgba(255,107,53,0.3)] transition-all cursor-pointer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <MapPin className="w-5 h-5 text-[#ff6b35] flex-shrink-0" />
                      <span className="font-medium text-sm">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-3xl overflow-hidden flex items-center justify-center">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/images/certifications/dooropen.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#0d0d0d] border-2 border-[#ff6b35] px-6 py-3 rounded-xl whitespace-nowrap">
                  <p className="font-semibold">Learn in Style with <span className="text-[#ff6b35]">Mercedes-Benz</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <NewTestimonialsSection />

        {/* FAQ Section */}
        <section className="py-24 bg-[#1a1a1a]" id="faq">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#ff6b35] text-sm font-semibold uppercase tracking-wider mb-4 block">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ letterSpacing: "-2px" }}>
                Frequently Asked Questions
              </h2>
              <p className="text-[#888] text-lg">
                Everything you need to know about learning with Drive Dojo.
              </p>
            </div>

            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[rgba(255,255,255,0.1)]">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center py-6 text-left"
                  >
                    <span className="text-lg font-semibold pr-8">{faq.question}</span>
                    <ArrowRight className={`w-5 h-5 text-[#ff6b35] flex-shrink-0 transition-transform ${faqOpen === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${faqOpen === index ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                    <p className="text-[#888] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-[#0d0d0d]" id="contact">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl font-black mb-4" style={{ letterSpacing: "-2px" }}>
                  Ready to Start Driving?
                </h2>
                <p className="text-[#888] text-lg mb-10">
                  Book your first lesson today and take the first step towards your driving licence.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/447487228866?text=Hi%2C%20I%27d%20like%20to%20book%20driving%20lessons"
                    className="flex items-center gap-4 p-5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl hover:bg-[rgba(255,107,53,0.1)] hover:border-[rgba(255,107,53,0.3)] transition-all"
                  >
                    <div className="w-12 h-12 bg-[#25d366] rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-0.5">WhatsApp</h4>
                      <p className="font-medium">Instant Booking</p>
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
                      <h4 className="font-semibold text-sm mb-0.5">Call Us</h4>
                      <p className="font-medium">+44 748 722 8866</p>
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
                      <h4 className="font-semibold text-sm mb-0.5">Email Us</h4>
                      <p className="font-medium">drivedojo@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-2">Book Your Lessons</h3>
                <p className="text-[#888] mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-[#888] focus:border-[#ff6b35] focus:bg-[rgba(255,107,53,0.05)] outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="Your phone"
                        className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-[#888] focus:border-[#ff6b35] focus:bg-[rgba(255,107,53,0.05)] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-[#888] focus:border-[#ff6b35] focus:bg-[rgba(255,107,53,0.05)] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Select Package</label>
                    <select className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white focus:border-[#ff6b35] focus:bg-[rgba(255,107,53,0.05)] outline-none transition-all">
                      <option value="">Choose a package...</option>
                      <option value="welcome">Welcome Offer - £49 (2 Hours)</option>
                      <option value="10hour">10-Hour Package - £340</option>
                      <option value="20hour">20-Hour Package - £680</option>
                      <option value="intensive">Intensive Course - £999</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Additional Message</label>
                    <textarea
                      placeholder="Any questions or preferred times?"
                      rows={3}
                      className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-[#888] focus:border-[#ff6b35] focus:bg-[rgba(255,107,53,0.05)] outline-none transition-all resize-none"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-[#ff6b35] hover:bg-[#ff8555] text-white py-4 rounded-xl font-bold"
                  >
                    Send Booking Request
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/447487228866?text=Hi%2C%20I%27d%20like%20to%20book%20driving%20lessons"
          target="_blank"
          className="flex items-center gap-3 bg-[#25d366] text-white px-6 py-4 rounded-full font-semibold shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all"
        >
          <MessageCircle className="w-6 h-6" />
          <span>Book via WhatsApp</span>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default AutomaticDrivingLessons;
