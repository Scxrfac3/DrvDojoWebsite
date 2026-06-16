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

// FAQPage Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do driving lessons cost in East Ham?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Driving lessons in East Ham start from £45 for a 90-minute session. First 2 hours assessed at £49, then £25/hr. Block booking discounts available."
      }
    },
    {
      "@type": "Question",
      "name": "Which test centres do you prepare students for in East Ham?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We prepare students for Wanstead driving test centre and Goodmayes DTC. Both are within easy reach of East Ham."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer automatic driving lessons in East Ham?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer automatic driving lessons in a Mercedes-Benz A-Class. Automatic is ideal for busy East London roads."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve all E6 postcodes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we cover all E6 postcodes and surrounding areas including E7, E12, E13, E15, and E16."
      }
    }
  ]
};

const EastHamLessons = () => {
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
        title="Book Driving Lessons in East Ham Instantly | Live Availability | Drive Dojo"
        description="Book your driving lessons instantly and spread the cost. We accept Klarna - pay in 3 interest-free! View live availability and book 10-hour blocks online in 60 seconds with Drive Dojo. DVSA approved, Mercedes-Benz automatic, first 2 hours £70. Wanstead & Goodmayes test centre prep. Covering E6 & surrounding E postcodes."
        keywords="driving lessons East Ham, driving instructor East Ham, automatic driving lessons East Ham, intensive driving lessons East Ham, DVSA approved driving instructor East Ham, driving school East Ham, E6 driving lessons, Wanstead test centre, Goodmayes DTC, cheap driving lessons East Ham"
        canonical="https://drivedojodrivingschool.com/driving-lessons/east-ham"
        serviceSchema={{
          name: "Driving Lessons in East Ham",
          description: "Professional driving lessons in East Ham with DVSA approved ADI instructor. First 2 hours £70, then from £34/hr. Automatic Mercedes-Benz A-Class. Covering E6 and surrounding E postcodes.",
          provider: { name: "Drive Dojo Driving School", url: "https://drivedojodrivingschool.com" },
          price: "70", priceCurrency: "GBP", areaServed: "East Ham, E6, E7, E12, E13, E15, E16, East London"
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Drive Dojo Driving School - East Ham","description":"DVSA approved driving lessons in East Ham. Automatic Mercedes-Benz A-Class. Wanstead & Goodmayes test centre preparation. First 2 hours £70.","url":"https://drivedojodrivingschool.com/driving-lessons/east-ham","telephone":"+447487228866","areaServed":["East Ham","E6","E7","E12","E13","E15","E16","East London"],"address":{"@type":"PostalAddress","addressLocality":"East Ham","addressRegion":"East London","postalCode":"E6","addressCountry":"GB"},"geo":{"@type":"GeoCoordinates","latitude":51.5288,"longitude":0.0520},"priceRange":"£70 - £950","paymentAccepted":"Cash, Credit Card, Klarna"}) }} />
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
                      <span className="text-sm font-medium">E6 & Surrounding</span>
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500">
                      Driving Lessons
                    </span>{" "}
                    <br className="hidden md:block" />
                    <span className="text-white">in East Ham</span>
                  </h1>

                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    DVSA approved instructor covering all E6 postcodes. Automatic Mercedes-Benz A-Class.
                    First 2 hours assessed at <span className="text-primary font-semibold">£49</span>, then
                    <span className="text-primary font-semibold"> £25/hr</span>.
                    Prep for Wanstead and Goodmayes test centres.
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
                          placeholder="Enter E6, E7, E12, or other East London postcode"
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
                      src="/images/certifications/C2.png"
                      alt="Driving lessons in East Ham"
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
                        "Could not have asked for a better instructor. Passed first time in East Ham!"
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
                  Why East Ham Learners Choose Drive Dojo
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  DVSA approved instructor with years of experience across E6 and surrounding postcodes.
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
                    DVSA Approved Instruction
                  </h3>
                  <p className="text-gray-400">
                    Fully qualified DVSA approved instructor with experience at Red Driving School and AA Driving School. I know the East Ham roads inside out.
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
                    Wanstead & Goodmayes Prep
                  </h3>
                  <p className="text-gray-400">
                    Your test will be at Wanstead or Goodmayes DTC. I tailor every lesson to the specific routes and common pitfalls at your chosen test centre.
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
                    Covers E6 & Beyond
                  </h3>
                  <p className="text-gray-400">
                    Serving E6, E7, E12, E13, E15, and E16. Automatic Mercedes-Benz A-Class with dual controls. You learn smooth, modern driving without the clutch.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  What Makes East Ham Ideal for Learners
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Straight roads, residential estates, and easy access to Wanstead and Goodmayes test routes.
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
                    Test-Focused Training
                  </h3>
                  <p className="text-gray-400 mb-6">
                    East Ham sits between two major test centres. Whether you book Wanstead or Goodmayes DTC, your lessons cover the approaches, junctions, and road types you will actually see on test day.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Serving E6, E7, E12, E13, E15, and E16 postcodes",
                      "Specialist automatic lessons across East Ham",
                      "Test route training for Wanstead and Goodmayes DTC",
                      "Practice on A13, A118, and surrounding East London roads",
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
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto object-cover rounded-2xl"
                  >
                    <source src="/images/certifications/mercedesCTA.mp4" type="video/mp4" />
                  </video>
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
                Ready to Start in East Ham?
              </motion.h2>

              <motion.p
                className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Book your first lesson today and start training for your test at Wanstead or Goodmayes.
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

export default EastHamLessons;
