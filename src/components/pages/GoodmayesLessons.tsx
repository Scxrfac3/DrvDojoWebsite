import React, { useState } from "react";
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
  BookOpen,
} from "lucide-react";

// FAQPage Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do driving lessons cost in Goodmayes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Driving lessons in Goodmayes start from £45 for a 90-minute session. We offer block booking discounts and intensive courses at Goodmayes DTC for faster learning."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer automatic driving lessons in Goodmayes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer automatic driving lessons in a Mercedes-Benz A-Class. Automatic is popular with learners who want to focus on road skills without the complexity of a clutch."
      }
    },
    {
      "@type": "Question",
      "name": "Which test centre do you prepare students for in Goodmayes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We prepare students specifically for Goodmayes Driving Test Centre (DTC). Our instructor knows the test routes, common faults, and examiner expectations."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve all IG postcodes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we cover all IG postcodes including IG1, IG2, IG3, IG4, IG5, IG6, IG7, IG8, IG9, IG10, and IG11."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer finance for driving lessons?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We accept Klarna Pay in 3 interest-free instalments, so you can spread the cost of your driving lessons. Select Klarna at checkout when booking your block of lessons online."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I start driving lessons in Goodmayes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can start immediately. Our live availability calendar shows real-time slots you can book online in 60 seconds — no waiting for callbacks. Simply enter your postcode and pick your lesson time."
      }
    }
  ]
};

const GoodmayesLessons = () => {
  const [postcode, setPostcode] = useState("");

  // Inject FAQPage schema for SEO
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/services?postcode=${encodeURIComponent(postcode)}`;
  };

  return (
    <>
      <SEO
        title="Book Driving Lessons in Goodmayes Instantly | Live Availability | Drive Dojo"
        description="Skip the waiting lists. View live availability and book your driving lessons instantly in Goodmayes & Seven Kings. Learn in a modern Mercedes A-Class with DVSA Approved instructors. Pay in 3 with Klarna. First 2 hours for £70!"
        keywords="driving lessons Goodmayes, driving instructor Goodmayes, automatic driving lessons Seven Kings, driving school with Klarna London, book driving lessons online East London, IG postcodes driving lessons, Mercedes automatic driving lessons Goodmayes"
        canonical="https://drivedojodrivingschool.com/driving-lessons/goodmayes"
        serviceSchema={{
          name: "Driving Lessons in Goodmayes",
          description: "Professional driving lessons in Goodmayes with DVSA approved ADI instructor. First 2 hours £70, then from £34/hr. Automatic Mercedes-Benz A-Class. Goodmayes DTC specialists. Covering all IG postcodes.",
          provider: { name: "Drive Dojo Driving School", url: "https://drivedojodrivingschool.com" },
          price: "70", priceCurrency: "GBP", areaServed: "Goodmayes, Seven Kings, IG postcodes, East London"
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Drive Dojo Driving School - Goodmayes","description":"DVSA approved driving lessons in Goodmayes and Seven Kings. Automatic Mercedes-Benz A-Class. Goodmayes DTC specialists. First 2 hours £70.","url":"https://drivedojodrivingschool.com/driving-lessons/goodmayes","telephone":"+447487228866","email":"drivedojo@gmail.com","areaServed":["Goodmayes","Seven Kings","IG1","IG2","IG3","IG4","IG5","IG6","East London"],"address":{"@type":"PostalAddress","addressLocality":"Goodmayes","addressRegion":"East London","postalCode":"IG3","addressCountry":"GB"},"geo":{"@type":"GeoCoordinates","latitude":51.5588,"longitude":0.0736},"priceRange":"£70 - £950","paymentAccepted":"Cash, Credit Card, Klarna"}) }} />
      <div className="min-h-screen bg-[#0d0d0d] relative overflow-hidden">
        {/* Background decorative elements - matching homepage premium aesthetic */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        <Navbar />

        <main className="pt-[100px] pb-20 relative z-10">
          {/* Hero Section - Premium redesign matching homepage */}
          <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                    <div className="flex items-center bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium">DVSA Approved</span>
                    </div>
                    <div className="flex items-center bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-400/30">
                      <span className="text-sm font-medium">Goodmayes DTC Specialist</span>
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500">
                      Driving Lessons
                    </span>{" "}
                    <br className="hidden md:block" />
                    <span className="text-white">in Goodmayes</span>
                  </h1>

                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    DVSA approved instructor and Goodmayes DTC specialist. Automatic Mercedes-Benz A-Class.
                    First 2 hours assessed at <span className="text-primary font-semibold">£70</span>, then
                    <span className="text-primary font-semibold"> £38/hr</span>. Covering all IG postcodes.
                  </p>

                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-glow max-w-md mx-auto lg:mx-0">
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col sm:flex-row gap-3"
                    >
                      <div className="relative flex-grow">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                        <Input
                          type="text"
                          placeholder="Enter IG1, IG2, IG3, or other IG postcode"
                          className="pl-10 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          value={postcode}
                          onChange={(e) => setPostcode(e.target.value)}
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg"
                      >
                        Check Availability
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
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500">
                    <img
                      src="/images/certifications/c5.png"
                      alt="Driving lessons in Goodmayes"
                      className="w-full h-auto object-cover rounded-3xl"
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
                        "Excellent instructor - passed first time at Goodmayes Test Centre."
                      </p>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <motion.div
                    className="absolute -top-5 -right-5 bg-white/10 backdrop-blur-md rounded-full p-4 shadow-lg border border-white/10"
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
                    className="absolute -bottom-5 -left-5 bg-white/10 backdrop-blur-md rounded-full p-3 shadow-lg border border-white/10"
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

          {/* Features Section - Premium styling matching homepage */}
          <section className="py-16 bg-[#0d0d0d]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Why Goodmayes Learners Choose Drive Dojo
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  DVSA approved instructor with 8+ years experience and specialist knowledge of Goodmayes DTC.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Goodmayes DTC Expert
                  </h3>
                  <p className="text-gray-400">
                    Former instructor with Red Driving School and AA Driving School. I know every test route in and out of Goodmayes DTC, so your training targets the roads you will actually drive on test day.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    98% Pass Rate
                  </h3>
                  <p className="text-gray-400">
                    13% above the national average. I teach until you are test-ready, not until the lesson block runs out. That is why so many Goodmayes students pass first time.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Car className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Covers All IG Postcodes
                  </h3>
                  <p className="text-gray-400">
                    IG1 through IG11, including Seven Kings, Ilford, Barkingside, and all surrounding areas. Automatic Mercedes-Benz A-Class with dual controls. No clutch, just focus on the road.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Live Availability & Pay in 3 with Klarna */}
          <section className="py-8 bg-[#0d0d0d]">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 text-center">
                  <h3 className="text-lg font-bold text-white mb-2">Live Availability</h3>
                  <p className="text-gray-400 text-sm">View real-time slots and book your driving lesson online in 60 seconds. No waiting for callbacks.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 text-center">
                  <h3 className="text-lg font-bold text-white mb-2">Pay in 3 with Klarna</h3>
                  <p className="text-gray-400 text-sm">Spread the cost with Klarna interest-free instalments. Select Klarna at checkout when booking your block of lessons.</p>
                </div>
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
                  What Makes Goodmayes Ideal for Learner Drivers
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Residential streets, the A12 Eastern Avenue, and Goodmayes DTC routes all within a few miles.
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
                    Expert Knowledge of Goodmayes Test Routes
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Goodmayes DTC tests on a mix of quiet residential roads and faster A-roads. I design your lessons around the exact routes the examiners use, so you are not learning blind.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Covering all IG postcodes: IG1 through IG11",
                      "Specialist automatic lessons in Seven Kings and Ilford",
                      "Training on A12 Eastern Avenue and surrounding dual carriageways",
                      "Practice on complex junctions around Goodmayes and Seven Kings",
                      "Mock tests run to DVSA standard before your real test",
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
                        <span className="text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="rounded-2xl overflow-hidden shadow-2xl"
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
                <div className="inline-flex items-center mb-3 bg-primary/20 px-4 py-2 rounded-full text-sm font-medium text-primary border border-primary/30">
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
                    excerpt: "Step-by-step recovery plan - from DL25 to resit success.",
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
                    className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-primary/40 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block bg-gradient-to-r from-primary to-orange-500 text-white text-xs px-3 py-1 rounded-full mb-3">
                      {article.tag}
                    </span>
                    <h3 className="font-bold text-white mb-2 leading-snug text-sm">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-4">{article.excerpt}</p>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
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
          <section className="py-16 bg-gradient-to-r from-primary to-orange-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to Start in Goodmayes?
              </motion.h2>

              <motion.p
                className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Join hundreds of students who passed first time at Goodmayes DTC.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 shadow-lg"
                  onClick={() => (window.location.href = "/services")}
                >
                  Book Your Lesson
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
