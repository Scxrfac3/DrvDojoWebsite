import React, { useState } from "react";
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
} from "lucide-react";

const DocklandsLessons = () => {
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/services?postcode=${encodeURIComponent(postcode)}`;
  };

  return (
    <>
      <SEO
        title="Book Driving Lessons in Docklands Instantly | Live Availability | Drive Dojo"
        description="Book your driving lessons instantly and spread the cost. We accept Klarna - pay in 3 interest-free! View live availability and book 10-hour blocks online in 60 seconds with Drive Dojo. DVSA approved, Mercedes-Benz automatic, first 2 hours £70. Covering E14, E16, Canary Wharf & Isle of Dogs."
        keywords="driving lessons Docklands, driving instructor Docklands, automatic driving lessons Canary Wharf, intensive driving lessons Docklands, DVSA approved driving instructor Docklands, driving school Docklands, E14 driving lessons, Canary Wharf driving instructor, Isle of Dogs driving lessons, cheap driving lessons Docklands"
        canonical="https://drivedojodrivingschool.com/driving-lessons/docklands"
        serviceSchema={{
          name: "Driving Lessons in Docklands & Canary Wharf",
          description: "Professional driving lessons in Docklands with DVSA approved ADI instructor. First 2 hours £70, then from £34/hr. Automatic Mercedes-Benz A-Class. Covering E14, E16, Isle of Dogs.",
          provider: { name: "Drive Dojo Driving School", url: "https://drivedojodrivingschool.com" },
          price: "70", priceCurrency: "GBP", areaServed: "Docklands, Canary Wharf, Isle of Dogs, E14, E16, East London"
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Drive Dojo Driving School - Docklands","description":"DVSA approved driving lessons in Docklands and Canary Wharf. Automatic Mercedes-Benz A-Class. First 2 hours £70. Covering E14, E16.","url":"https://drivedojodrivingschool.com/driving-lessons/docklands","telephone":"+447487228866","areaServed":["Docklands","Canary Wharf","Isle of Dogs","E14","E16","East London"],"address":{"@type":"PostalAddress","addressLocality":"Docklands","addressRegion":"East London","postalCode":"E14","addressCountry":"GB"},"geo":{"@type":"GeoCoordinates","latitude":51.5050,"longitude":-0.0200},"priceRange":"£70 - £950","paymentAccepted":"Cash, Credit Card, Klarna"}) }} />
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
                      <span className="text-sm font-medium">E14 & E16</span>
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500">
                      Driving Lessons
                    </span>{" "}
                    <br className="hidden md:block" />
                    <span className="text-white">in Docklands</span>
                  </h1>

                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    DVSA approved instructor covering E14, E16, Canary Wharf, and Isle of Dogs.
                    First 2 hours assessed at <span className="text-primary font-semibold">£49</span>, then
                    <span className="text-primary font-semibold"> £25/hr</span>.
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
                          placeholder="Enter E14, E16, or other Docklands postcode"
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
                      src="/images/certifications/BANNER_MAIN3276.png"
                      alt="Driving lessons in Docklands"
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
                        <span className="text-white ml-2 font-medium">4.9/5 (2,000+ reviews)</span>
                      </div>
                      <p className="text-white/90 text-sm">
                        "Passed first time - lessons in Docklands made all the difference."
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Learn in Docklands</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  DVSA approved instructor who works E14 and E16 daily. No guesswork, just real local knowledge.
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
                  <h3 className="text-xl font-bold mb-3 text-white">DVSA Approved</h3>
                  <p className="text-gray-400">
                    Fully qualified instructor. Experience at Red Driving School and AA Driving School. Your lessons are structured and professional from day one.
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
                    13% above the national average. I teach at your pace and only put you in for your test when you are ready.
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
                  <h3 className="text-xl font-bold mb-3 text-white">Mercedes-Benz A-Class</h3>
                  <p className="text-gray-400">
                    Automatic transmission. Modern dual controls. You focus on the road, not the clutch.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Driving in Docklands</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  E14, E16, Canary Wharf, Isle of Dogs, Poplar - every road type from quiet residential to A-road dual carriageway.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">Know the Routes Before Your Test</h3>
                  <p className="text-gray-400 mb-6">
                    Isle of Dogs, Poplar, A1261, Aspen Way, Limehouse Link - your lessons target the roads examiners use.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Serving E14, E16, and all Docklands postcodes",
                      "Canary Wharf roundabouts and busy junctions",
                      "A1261 and Aspen Way dual carriageway practice",
                      "Isle of Dogs and Poplar test route knowledge",
                      "Mock tests to DVSA standard before your real test",
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
                  <img src="/images/certifications/C6.png" alt="Docklands driving area" className="w-full h-auto object-cover" />
                </motion.div>
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
                Ready to Start in Docklands?
              </motion.h2>
              <motion.p
                className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Book your first lesson today. Covering all E14 and E16 postcodes.
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

export default DocklandsLessons;
