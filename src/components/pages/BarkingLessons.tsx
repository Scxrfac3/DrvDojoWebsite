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
      "name": "How much do driving lessons cost in Barking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Driving lessons in Barking start from £45 for a 90-minute session. First 2 hours assessed at £49, then £25/hr. Block booking discounts available."
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
      "name": "How quickly can I start driving lessons in Barking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can start immediately. Our live availability calendar shows real-time slots you can book online in 60 seconds — no waiting for callbacks. Simply enter your postcode and pick your lesson time."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve all IG11 and RM postcodes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we cover IG11, RM8, RM9, and all surrounding areas including Chadwell Heath and Hainault. We specialise in Barking Test Centre preparation."
      }
    }
  ]
};

const BarkingLessons = () => {
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
        title="Book Driving Lessons in Barking Instantly | Live Availability | Drive Dojo"
        description="Skip the waiting lists. View live availability and book your driving lessons instantly in Barking. Learn in a modern Mercedes A-Class with DVSA Approved instructors. Pay in 3 with Klarna. First 2 hours for £49!"
        keywords="driving lessons Barking, driving instructor Barking, automatic driving lessons Barking, book driving lessons online East London, driving school with Klarna London, Barking IG11, Barking test centre"
        canonical="https://drivedojodrivingschool.com/driving-lessons/barking"
        serviceSchema={{
          name: "Driving Lessons in Barking",
          description: "Professional driving lessons in Barking with DVSA approved ADI instructor. First 2 hours £70, then from £34/hr. Automatic Mercedes-Benz A-Class. Covering IG11, RM8, RM9.",
          provider: { name: "Drive Dojo Driving School", url: "https://drivedojodrivingschool.com" },
          price: "70", priceCurrency: "GBP", areaServed: "Barking, IG11, RM8, RM9, East London"
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Drive Dojo Driving School - Barking","description":"DVSA approved driving lessons in Barking. Automatic Mercedes-Benz A-Class. Barking test centre specialists. First 2 hours £70.","url":"https://drivedojodrivingschool.com/driving-lessons/barking","telephone":"+447487228866","email":"drivedojo@gmail.com","areaServed":["Barking","IG11","RM8","RM9","Chadwell Heath","East London"],"address":{"@type":"PostalAddress","addressLocality":"Barking","addressRegion":"East London","postalCode":"IG11","addressCountry":"GB"},"geo":{"@type":"GeoCoordinates","latitude":51.5390,"longitude":0.0810},"priceRange":"£70 - £950","paymentAccepted":"Cash, Credit Card, Klarna"}) }} />
      <div className="min-h-screen bg-[#0d0d0d] text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

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
                  <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                    <div className="flex items-center bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium">DVSA Approved</span>
                    </div>
                    <div className="flex items-center bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-400/30">
                      <span className="text-sm font-medium">Barking Test Centre</span>
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500">
                      Driving Lessons
                    </span>
                    <br />
                    <span className="text-white">in Barking</span>
                  </h1>

                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    DVSA approved instructor and Barking test centre specialist.
                    First 2 hours assessed at <span className="text-primary font-semibold">£49</span>, then
                    <span className="text-primary font-semibold"> £25/hr</span>.
                    Covering IG11, RM8, RM9 and all surrounding areas.
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
                          placeholder="Enter pickup postcode"
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

                  {/* Social Proof */}
                  <div className="flex items-center space-x-6 text-sm mt-6 justify-center lg:justify-start">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-gray-400">4.9/5 rating</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-400">2000+ successful drivers</span>
                    </div>
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
                      alt="Driving lessons in Barking"
                      className="w-full h-auto object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center space-x-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                        <span className="text-white ml-2 font-medium">4.9/5 (2,000+ reviews)</span>
                      </div>
                      <p className="text-white/90 text-sm">
                        "Passed first time at Barking Test Centre!"
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className="absolute -top-5 -right-5 bg-white/10 backdrop-blur-md rounded-full p-4 shadow-lg border border-white/10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <img src="/images/certifications/DVSA-ADI.png" alt="DVSA Approved" className="h-16 w-16 object-contain" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-5 -left-5 bg-white/10 backdrop-blur-md rounded-full p-3 shadow-lg border border-white/10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <img src="/images/certifications/PassPlus.png" alt="Pass Plus" className="h-14 w-14 object-contain" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-[#0d0d0d]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Barking Postcode Coverage</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Comprehensive driving lessons across IG11, RM8, RM9, and surrounding areas.
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
                  <h3 className="text-xl font-bold mb-3 text-white">Barking Test Centre Expert</h3>
                  <p className="text-gray-400">
                    Former Red Driving School and AA instructor. I know the Barking test routes inside out - every junction, every common fault.
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
                  <h3 className="text-xl font-bold mb-3 text-white">98% Pass Rate</h3>
                  <p className="text-gray-400">
                    13% above the national average. Designed to get you test-ready, not just to fill lesson hours.
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
                  <h3 className="text-xl font-bold mb-3 text-white">IG11 & RM Postcodes</h3>
                  <p className="text-gray-400">
                    IG11 (Barking), RM8, RM9 (Dagenham), Chadwell Heath, and Hainault. Automatic Mercedes-Benz with dual controls.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Learn in Barking, Pass with Confidence</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Quiet residential streets mixed with A-road experience around the A13.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">Perfect for Test Preparation</h3>
                  <p className="text-gray-400 mb-6">
                    Barking Test Centre has challenging routes. Your training focuses on the roads, junctions, and manoeuvres examiners test most.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Quiet residential streets in IG11 for beginners",
                      "A13 dual carriageway experience",
                      "Roundabouts and junctions unique to Barking",
                      "Local knowledge of Barking Test Centre routes",
                      "Flexible weekly or intensive course options",
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
                  <img src="/images/certifications/C1.png" alt="Barking driving area" className="w-full h-auto object-cover" />
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
                <h2 className="text-2xl md:text-3xl font-bold text-white">Useful Reading for Barking Learners</h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Driving Lessons in Barking IG11: What New Learners Need to Know",
                    excerpt: "A-roads, one-way systems, and everything else about learning in Barking.",
                    slug: "driving-lessons-barking-ig11",
                    tag: "Local Guide",
                  },
                  {
                    title: "Goodmayes, Ilford & Barking Test Centres Compared",
                    excerpt: "Pass rates, road types, and which centre suits which postcodes.",
                    slug: "east-london-test-centres-compared",
                    tag: "Test Prep",
                  },
                  {
                    title: "Mock Driving Tests in East London",
                    excerpt: "The most effective thing you can do in the 2 weeks before your test.",
                    slug: "mock-driving-test-east-london",
                    tag: "Mock Test",
                  },
                ].map((article, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-primary/40 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block bg-gradient-to-r from-primary to-orange-500 text-white text-xs px-3 py-1 rounded-full mb-3">{article.tag}</span>
                    <h3 className="font-bold text-white mb-2 leading-snug">{article.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>
                    <Link to={`/blog/${article.slug}`} className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors">
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
                Ready to Start in Barking?
              </motion.h2>
              <motion.p
                className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Join hundreds of students who passed first time at Barking Test Centre.
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

export default BarkingLessons;
