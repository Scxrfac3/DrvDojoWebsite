import React from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import SEO from "@/components/ui/SEO";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Award,
  Shield,
  Car,
  MapPin,
  Clock,
  Users,
  Trophy,
  Phone,
  MessageCircle,
} from "lucide-react";

const EastLondonAutomatic = () => {
  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SEO
        title="Automatic Driving Lessons in East London | Mercedes-Benz | Drive Dojo"
        description="Book automatic driving lessons in East London. DVSA-approved instructor, Mercedes-Benz A-Class automatic. First 2 hours £70, then £38/hr. Pay in 3 with Klarna. Covering Ilford, Goodmayes, Barking, Romford, Tower Hamlets, Newham & all East London."
        keywords="automatic driving lessons East London, automatic driving lessons Ilford, learn automatic car East London, Mercedes automatic driving lessons, automatic driving instructor Ilford, automatic driving school East London, DVSA automatic lessons, automatic driving lessons Barking, automatic driving lessons Goodmayes, automatic driving lessons Romford, automatic driving lessons Forest Gate, automatic driving lessons Walthamstow, automatic driving lessons Docklands, automatic driving lessons Tower Hamlets, automatic driving lessons Newham, automatic driving lessons Hackney, cheap automatic driving lessons London, book automatic driving lessons online, driving school with Klarna London"
        canonical="https://drivedojodrivingschool.com/east-london-automatic"
      />
      <div className="min-h-screen bg-[#0d0d0d] text-white relative overflow-hidden">
        {/* Background decorative elements - matching homepage premium aesthetic */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        <Navbar />

        <main className="pt-[100px] pb-20 relative z-10">
          {/* Hero Section - Premium dark matching homepage */}
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
                      <span className="text-sm font-medium">Automatic Only</span>
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500">
                      Automatic Driving Lessons
                    </span>{" "}
                    <br className="hidden md:block" />
                    <span className="text-white">in East London</span>
                  </h1>

                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    DVSA approved instructor covering all East London postcodes. Automatic Mercedes-Benz A-Class.
                    First 2 hours <span className="text-primary font-semibold">£70</span>, then
                    <span className="text-primary font-semibold"> £38/hr</span>. Pay in 3 with Klarna.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                    <div className="flex items-center bg-white/5 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                      <Car className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium">Mercedes-Benz A-Class</span>
                    </div>
                    <div className="flex items-center bg-white/5 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium">ADI Qualified</span>
                    </div>
                    <div className="flex items-center bg-white/5 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                      <Star className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium">98% Pass Rate</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white shadow-lg"
                      onClick={scrollToPackages}
                    >
                      View Packages
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                      asChild
                    >
                      <a
                        href="https://wa.me/447487228866?text=Hi%20Drive%20Dojo!%20I'm%20interested%20in%20automatic%20lessons%20in%20East%20London.%20Can%20you%20help?"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        WhatsApp Us
                      </a>
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-80 lg:h-96 object-cover rounded-3xl"
                    >
                      <source src="/images/certifications/kling_20260203_Image_to_Video_create_a_s_5324_0.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center space-x-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                        <span className="text-white ml-2 font-medium">4.9/5 (2,000+ reviews)</span>
                      </div>
                      <p className="text-white/90 text-sm">"Passed first time — automatic was the right choice!"</p>
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

          {/* Areas Covered */}
          <section className="py-8 bg-[#0d0d0d]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium text-gray-400 mb-4">Areas We Cover in East London</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Goodmayes", "Barking", "Chingford", "Ilford", "East Ham", "Forest Gate", "Gants Hill", "Leytonstone", "Canary Wharf", "Docklands", "Walthamstow", "Romford"].map((area) => (
                    <div
                      key={area}
                      className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white font-medium hover:border-primary/40 transition-colors"
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us - Premium dark styling */}
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
                  Why East London Drivers Choose <span className="text-primary">Drive Dojo</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  East London's premium automatic-only driving school with fully qualified ADI instructors.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Award, title: "Fully Qualified ADI", description: "Not a PDI — your instructor is fully qualified with years of experience teaching in East London." },
                  { icon: Car, title: "Mercedes-Benz Fleet", description: "Learn in premium automatic vehicles. The easiest way to learn to drive." },
                  { icon: Shield, title: "98% Pass Rate", description: "Our structured approach means most students pass first time." },
                  { icon: MapPin, title: "Local Knowledge", description: "We know all the test routes at East London test centres." },
                  { icon: Clock, title: "Flexible Booking", description: "Book lessons that fit your schedule. Quick response within 24 hours." },
                  { icon: MessageCircle, title: "WhatsApp Booking", description: "Quick and easy booking via WhatsApp. Start your journey today!" },
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Packages Section - Premium dark matching homepage */}
          <section id="packages" className="py-16 bg-[#0d0d0d]">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center mb-3 bg-primary/20 border border-primary/30 px-4 py-2 rounded-full text-sm font-medium text-primary backdrop-blur-sm">
                  <Zap className="h-4 w-4 mr-2" />
                  East London Offers
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Choose Your <span className="text-primary">Package</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Transparent pricing with no hidden fees. All packages include dedicated instructor and Mercedes-Benz vehicle.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 2-Hour Assessment */}
                <motion.div
                  className="bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.08] overflow-hidden relative h-full"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 left-0 right-0 bg-white/5 text-white text-xs font-bold px-3 py-2 text-center border-b border-white/[0.08]">Pay As You Go</div>
                  <div className="pt-12 pb-6 px-6">
                    <h3 className="text-lg font-bold mb-2 text-white">2-Hour Assessment</h3>
                    <p className="text-sm text-gray-400 mb-3">Try before you commit</p>
                    <div className="mb-2"><span className="text-4xl font-black text-white">£70</span><span className="text-sm text-gray-400 ml-2">first 2 hours</span></div>
                    <p className="text-xs text-gray-500 mb-4">Then £38/hr ongoing</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">DVSA-approved instructor</span></li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">Mercedes-Benz A-Class</span></li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">Personalised assessment</span></li>
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => window.location.href = '/booking/payg'}>Book Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </div>
                </motion.div>

                {/* 6-Hour Package */}
                <motion.div
                  className="bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.08] overflow-hidden relative h-full"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 left-0 right-0 bg-white/5 text-white text-xs font-bold px-3 py-2 text-center border-b border-white/[0.08]">Starter Package</div>
                  <div className="pt-12 pb-6 px-6">
                    <h3 className="text-lg font-bold mb-2 text-white">6-Hour Package</h3>
                    <p className="text-sm text-gray-400 mb-3">Build your confidence</p>
                    <div className="mb-2"><span className="text-4xl font-black text-white">£220</span><span className="text-sm text-gray-400 ml-2">~£36.67/hr</span></div>
                    <p className="text-xs text-primary font-medium mb-4">Save £8 vs PAYG</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">6 hours of pro tuition</span></li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">Flexible scheduling</span></li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">Progress tracking</span></li>
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => window.location.href = '/booking/6hour'}>Book Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </div>
                </motion.div>

                {/* 10-Hour Package — FOCUS CARD */}
                <motion.div
                  className="bg-white/[0.03] backdrop-blur-md rounded-2xl border-2 border-primary shadow-[0_0_25px_rgba(var(--primary-rgb),0.3)] overflow-hidden relative h-full transform scale-105 z-10"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} viewport={{ once: true }} whileHover={{ y: -5 }}
                >
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black px-5 py-1.5 rounded-b-lg tracking-wider uppercase shadow-lg">⭐ Most Popular</div>
                  <div className="pt-14 pb-6 px-6">
                    <h3 className="text-lg font-bold mb-2 text-white">10-Hour Package</h3>
                    <p className="text-sm text-gray-400 mb-3">Best value for progression</p>
                    <div className="mb-2"><span className="text-4xl font-black text-white">£340</span><span className="text-sm text-gray-400 ml-2">~£34/hr</span></div>
                    <p className="text-xs text-green-400 font-medium mb-4">Save £40 vs PAYG</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">Dedicated instructor</span></li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">Flexible pickup included</span></li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">Live progress dashboard</span></li>
                    </ul>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-pink-500/10 border border-pink-400/20 rounded-lg px-2 py-1"><span className="text-pink-300 text-xs font-medium">Klarna — Pay in 3</span></div>
                      <div className="bg-white/10 rounded-lg px-2 py-1"><span className="text-gray-300 text-xs">Apple Pay</span></div>
                      <div className="bg-white/10 rounded-lg px-2 py-1"><span className="text-gray-300 text-xs">G Pay</span></div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => window.location.href = '/booking/10hour'}>Book Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </div>
                </motion.div>

                {/* 20-Hour Package */}
                <motion.div
                  className="bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.08] overflow-hidden relative h-full"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 left-0 right-0 bg-white/5 text-white text-xs font-bold px-3 py-2 text-center border-b border-white/[0.08]">🎯 Best Value</div>
                  <div className="pt-12 pb-6 px-6">
                    <h3 className="text-lg font-bold mb-2 text-white">20-Hour Package</h3>
                    <p className="text-sm text-gray-400 mb-3">Ultimate test preparation</p>
                    <div className="mb-2"><span className="text-4xl font-black text-white">£679</span><span className="text-sm text-gray-400 ml-2">~£33.95/hr</span></div>
                    <p className="text-xs text-green-400 font-medium mb-4">Save £81 vs PAYG</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">20 hours of pro tuition</span></li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">2 mock tests included</span></li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">Theory test support</span></li>
                    </ul>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-pink-500/10 border border-pink-400/20 rounded-lg px-2 py-1"><span className="text-pink-300 text-xs font-medium">Klarna — Pay in 3</span></div>
                      <div className="bg-white/10 rounded-lg px-2 py-1"><span className="text-gray-300 text-xs">Apple Pay</span></div>
                      <div className="bg-white/10 rounded-lg px-2 py-1"><span className="text-gray-300 text-xs">G Pay</span></div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => window.location.href = '/booking/20hour'}>Book Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-primary to-orange-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
              >
                Ready to Start Your Driving Journey?
              </motion.h2>
              <motion.p
                className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
              >
                Join 2000+ successful drivers in East London. Book your automatic lesson today.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
              >
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-lg" asChild>
                  <a href="https://wa.me/447487228866?text=Hi%20Drive%20Dojo!%20I'm%20interested%20in%20automatic%20lessons%20in%20East%20London.%20Can%20you%20help?" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book via WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 font-bold" onClick={scrollToPackages}>
                  View Packages
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

export default EastLondonAutomatic;
