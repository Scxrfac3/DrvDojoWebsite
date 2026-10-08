import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  MapPin,
  Star,
  ShieldCheck,
  Car,
  Clock,
  CreditCard,
  X,
  Award,
} from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import SpecialOffersSection from "../sections/SpecialOffersSection";
import AreasWeCoverSection from "../sections/AreasWeCoverSection";
import PostTestCoursesSection from "../sections/PostTestCoursesSection";
import SEO from "../ui/SEO";
import { Button } from "@/components/ui/button";

const StratfordLessons = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white relative overflow-hidden">
      <SEO
        title="Driving Lessons in Stratford E15 | Book Online, Klarna"
        description="Driving lessons in Stratford E15 with a DVSA-approved instructor. Automatic Mercedes A-Class, door-to-door pickup across E15. First 2 hours £70, then £38/hr. Book online in 60 seconds."
        keywords="driving lessons Stratford, driving instructor Stratford E15, automatic driving lessons Stratford, driving school Stratford London, book driving lessons online East London, driving lessons with Klarna London, Newham driving lessons, Stratford E15"
        canonical="https://drivedojodrivingschool.com/driving-lessons/stratford"
      />

      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <Navbar />

      <main className="relative z-10">
        {/* ─── HERO ─────────────────────────────────────── */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <motion.div
              className="inline-flex items-center bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium text-primary mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <MapPin className="h-4 w-4 mr-2" />
              Serving all E15 postcodes
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Driving Lessons in <span className="text-primary">Stratford</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Learn to drive in one of East London's busiest transport hubs with a DVSA-approved instructor.
              Automatic Mercedes-Benz A-Class, door-to-door pickup across E15, and booking that takes about 60 seconds.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4"
                onClick={() => (window.location.href = "/booking/payg")}
              >
                Book Your First Lesson — £70
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link
                to="/booking"
                className="inline-flex items-center px-8 py-4 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded-xl text-white font-semibold transition-all"
              >
                View All Packages
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> 5.0/5 rating
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-primary mr-1" /> DVSA-approved ADI
              </span>
              <span className="flex items-center gap-1">
                <Car className="h-4 w-4 text-primary mr-1" /> Mercedes A-Class automatic
              </span>
              <span className="flex items-center gap-1">
                <CreditCard className="h-4 w-4 text-primary mr-1" /> Klarna Pay in 3
              </span>
            </motion.div>
          </div>
        </section>

        {/* ─── PRICING HIGHLIGHT ────────────────────────── */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: Clock, title: "First 2 Hours — £70", desc: "A full 2-hour assessment with a DVSA-approved instructor. Was £95." },
                { icon: Car, title: "Then £38/hr", desc: "Pay-as-you-go automatic lessons in a Mercedes A-Class. No commitment." },
                { icon: CreditCard, title: "Klarna Pay in 3", desc: "Split any package into three interest-free payments at checkout." },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <card.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY STRATFORD ────────────────────────────── */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why learn to drive in <span className="text-primary">Stratford</span>?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Stratford gives you every road type within a short drive — and a test centre on your doorstep.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
              {[
                "Westfield Stratford City and the Olympic Park — busy multi-lane junctions, pedestrian zones and complex roundabouts that build real-world judgement fast.",
                "The A12, A406 North Circular and A118 — dual carriageway and high-speed road practice without leaving your area.",
                "Quiet residential streets around Maryland and Leytonstone for early confidence-building lessons.",
                "Wanstead Driving Test Centre (E12) is your nearest test centre — we train on its exact routes.",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white text-center">How Drive Dojo Is Different in Stratford</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Book live in 60 seconds — no waiting list",
                  "Fully qualified DVSA ADI, never a trainee",
                  "Same 1-to-1 instructor every lesson",
                  "2024 Mercedes-Benz A-Class (automatic)",
                  "Klarna Pay in 3, interest-free",
                  "All-inclusive pricing, no hidden fees",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => (window.location.href = "/booking/payg")}
                >
                  Book Your First Lesson — £70
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link
                  to="/driving-test-centres/wanstead"
                  className="inline-flex items-center justify-center text-primary hover:text-primary/80 font-medium"
                >
                  See the Wanstead test centre routes
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHAT TO WATCH FOR ────────────────────────── */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What to Watch For When Choosing Driving Lessons in Stratford
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Not all driving schools are the same. Before you book with a national franchise or an independent, here is what East London learners tell us they wish they had known.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Instructor churn — franchise instructors pay high weekly fees, so they take on huge student numbers. That can mean less 1-to-1 attention and lessons that feel rushed.",
                "Long waiting lists — popular franchises often have weeks of backlog before your first lesson.",
                "Trainee PDIs — some franchise lessons are with trainee instructors still building their hours, not fully qualified ADIs.",
                "Hidden fees — franchise overheads can creep into lesson pricing, with costs that are not clear upfront.",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start">
                    <X className="h-5 w-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────── */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Stratford Driving Lessons — FAQs
            </motion.h2>
            <div className="space-y-4">
              {[
                {
                  q: "Do you pick up from anywhere in Stratford?",
                  a: "Yes. We pick up from home, work, Stratford station or anywhere across E15 — including Maryland, Leytonstone borders and the Olympic Park area.",
                },
                {
                  q: "Which test centre will I use?",
                  a: "Most Stratford learners sit their test at Wanstead Driving Test Centre (E12), about 15 minutes away. We train on its actual routes so nothing surprises you on test day.",
                },
                {
                  q: "Are the lessons automatic or manual?",
                  a: "All our lessons are automatic, in a 2024 Mercedes-Benz A-Class with dual controls. No clutch, no stalling — you focus entirely on the road.",
                },
                {
                  q: "How much do driving lessons in Stratford cost?",
                  a: "Your first 2 hours are £70 (was £95), then £38 per hour pay-as-you-go. Block bookings start at £340 for 10 hours (£34/hr), and Klarna Pay in 3 is available on every package.",
                },
                {
                  q: "How many lessons will I need?",
                  a: "The DVSA averages around 45 hours of practice. Stratford's mix of quiet streets and busy junctions means most of our learners are test-ready in 30–45 hours with regular weekly lessons.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-400">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── AREAS WE COVER ───────────────────────────── */}
        <AreasWeCoverSection />

        {/* ─── POST-TEST COURSES ────────────────────────── */}
        <PostTestCoursesSection />

        {/* ─── SPECIAL OFFERS ───────────────────────────── */}
        <SpecialOffersSection />

        {/* ─── FINAL CTA ────────────────────────────────── */}
        <section className="py-16 bg-gradient-to-r from-primary to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to Start Driving in Stratford?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join learners across E15 who booked online in 60 seconds and paid later with Klarna.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-white text-[#0d0d0d] hover:bg-gray-100 font-bold px-10 py-4"
                onClick={() => (window.location.href = "/booking/payg")}
              >
                Book Your First Lesson — £70
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StratfordLessons;