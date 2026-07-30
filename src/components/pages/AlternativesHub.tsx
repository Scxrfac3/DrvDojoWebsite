import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";
import SEO from "@/components/ui/SEO";
import { competitors } from "@/data/competitors";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

const AlternativesHub = () => {
  const nationals = competitors.filter((c) => c.category === "national");
  const locals = competitors.filter((c) => c.category === "local");

  return (
    <>
      <SEO
        title="Driving School Alternatives in East London | Drive Dojo"
        description="Comparing RED, AA, BSM and local East London driving schools? See why learners switch to Drive Dojo — no waiting lists, a Mercedes-Benz A-Class, Klarna payments and a fully qualified ADI. Book in 60 seconds."
        keywords="driving school alternatives East London, RED alternative, AA alternative, BSM alternative, driving instructor alternatives Ilford, Drive Dojo vs franchises"
        canonical="https://drivedojodrivingschool.com/alternatives"
      />
      <div className="min-h-screen bg-[#0d0d0d] text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        <Navbar />

        <main className="pt-[140px] pb-20 relative z-10">
          {/* Hero */}
          <section className="relative py-16 md:py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="flex items-center bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm font-medium">Driving School Alternatives</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500">
                    Driving School Alternatives
                  </span>{" "}
                  in East London
                </h1>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Considering a national franchise or a local independent? Here's an honest look at how Drive Dojo
                  compares — and why so many East London learners make the switch.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white"
                    onClick={() => (window.location.href = "/booking/payg")}
                  >
                    Book Your First Lesson — £70
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center text-primary hover:text-primary/80 font-medium"
                  >
                    View Lesson Packages
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Why switch */}
          <section className="py-16 bg-[#0d0d0d]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Why East London Learners Switch to Drive Dojo
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  The big franchises and solo independents each have strengths — but here's what you get with us.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    title: "No Waiting Lists",
                    body: "Book live in 60 seconds. No callbacks, no weeks of backlog before your first lesson.",
                  },
                  {
                    title: "Premium Car, Calmer Lessons",
                    body: "A 2024 automatic Mercedes-Benz A-Class with dual controls — not a standard franchise hatchback.",
                  },
                  {
                    title: "Fully Qualified ADI",
                    body: "Every lesson with a DVSA Approved Driving Instructor. Never a trainee PDI, never a stranger.",
                  },
                  {
                    title: "1-to-1, Same Instructor",
                    body: "Consistent tuition from the same instructor every time — no churn between lessons.",
                  },
                  {
                    title: "Klarna Pay in 3",
                    body: "Spread the cost interest-free. Book your block of lessons and pay in 3 instalments.",
                  },
                  {
                    title: "Hundreds of Local Passes",
                    body: "98% first-time pass rate, 13% above the national average, across East London.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary mb-3" />
                    <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* National franchises */}
          <section className="py-16 bg-[#111111]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  National Driving School Alternatives
                </h2>
                <p className="text-gray-400 mt-2">RED, AA, BSM and the big franchise brands</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {nationals.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/alternatives/${c.slug}`}
                    className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-colors group"
                  >
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                      {c.name} Alternatives
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{c.intro}</p>
                    <span className="inline-flex items-center text-primary text-sm font-medium">
                      Compare now <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Local independents */}
          <section className="py-16 bg-[#0d0d0d]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Local & Independent East London Instructors
                </h2>
                <p className="text-gray-400 mt-2">Including Ilford and surrounding areas</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {locals.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/alternatives/${c.slug}`}
                    className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-colors group"
                  >
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{c.intro}</p>
                    <span className="inline-flex items-center text-primary text-sm font-medium">
                      Compare now <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-gradient-to-r from-primary to-orange-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to Start in East London?
              </motion.h2>
              <motion.p
                className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-1 mr-2">
                  <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                  4.9/5
                </span>
                from 2,000+ learners. Book live in 60 seconds — no waiting list.
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
                  onClick={() => (window.location.href = "/booking/payg")}
                >
                  Book Your First Lesson — £70
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

export default AlternativesHub;
