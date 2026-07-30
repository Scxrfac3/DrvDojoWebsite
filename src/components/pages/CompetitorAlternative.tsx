import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";
import SEO from "@/components/ui/SEO";
import { competitors, DD_DIFFERENTIATORS } from "@/data/competitors";
import {
  CheckCircle,
  X,
  ArrowRight,
  Clock,
  Car,
  Shield,
  Users,
  Wallet,
  Award,
  Star,
} from "lucide-react";

const DIFF_ICONS = [Clock, Car, Shield, Users, Wallet, Award];

const CompetitorAlternative = () => {
  const { slug } = useParams<{ slug: string }>();
  const competitor = competitors.find((c) => c.slug === slug);

  if (!competitor) {
    return <Navigate to="/alternatives" replace />;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: competitor.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const others = competitors.filter((c) => c.slug !== competitor.slug);
  const localAreas = [
    { name: "Goodmayes", path: "/driving-lessons/goodmayes" },
    { name: "Ilford", path: "/driving-lessons/ilford" },
    { name: "Romford", path: "/driving-lessons/romford" },
    { name: "Isle of Dogs", path: "/driving-lessons/isle-of-dogs" },
    { name: "Walthamstow", path: "/driving-lessons/walthamstow" },
  ];

  return (
    <>
      <SEO
        title={competitor.metaTitle}
        description={competitor.metaDescription}
        keywords={competitor.keywords}
        canonical={`https://drivedojodrivingschool.com/alternatives/${competitor.slug}`}
        jsonLd={faqSchema}
      />
      <div className="min-h-screen bg-[#0d0d0d] text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        <Navbar />

        <main className="pt-[140px] pb-20 relative z-10">
          {/* Hero */}
          <section className="relative py-16 md:py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="flex items-center bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm font-medium">Drive Dojo Alternative</span>
                  </div>
                  <div className="flex items-center bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-400/30">
                    <span className="text-sm font-medium">East London</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500">
                    {competitor.name} Alternatives
                  </span>
                </h1>

                <p className="text-xl text-gray-400 mb-8 leading-relaxed">{competitor.intro}</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white"
                    onClick={() => (window.location.href = "/booking/payg")}
                  >
                    {competitor.ctaText}
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

          {/* Pain points — why people look for alternatives */}
          <section className="py-16 bg-[#0d0d0d]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Why East London Learners Look for {competitor.shortName} Alternatives
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  {competitor.name} works for some, but these are the common frustrations we hear from learners who switched.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {competitor.painPoints.map((point, index) => (
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
                      <p className="text-gray-300">{point}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Comparison table */}
          <section className="py-16 bg-[#111111]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Drive Dojo vs {competitor.name}: Side-by-Side
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  A clear comparison so you can decide what matters for your lessons.
                </p>
              </div>

              <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10">
                <div className="grid grid-cols-3 bg-white/5 text-sm font-semibold text-white">
                  <div className="p-4">Feature</div>
                  <div className="p-4 text-primary">Drive Dojo</div>
                  <div className="p-4 text-gray-300">{competitor.shortName}</div>
                </div>
                {competitor.comparison.map((row, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 text-sm ${
                      index % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                    }`}
                  >
                    <div className="p-4 font-medium text-white">{row.label}</div>
                    <div className="p-4 text-gray-200 flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {row.driveDojo}
                    </div>
                    <div className="p-4 text-gray-400 flex items-start">
                      <span className="mr-2 flex-shrink-0 mt-0.5">–</span>
                      {row.competitor}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Drive Dojo — differentiators */}
          <section className="py-16 bg-[#0d0d0d]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Why Drive Dojo Is the Smarter Switch
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Everything that makes lessons in East London calmer, faster, and better value.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {competitor.differentiators.map((diff, index) => {
                  const Icon = DIFF_ICONS[index % DIFF_ICONS.length];
                  return (
                    <motion.div
                      key={index}
                      className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{diff.title}</h3>
                      <p className="text-gray-400">{diff.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Who should switch — honest framing */}
          <section className="py-16 bg-[#111111]">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-primary/20">
                  <h2 className="text-2xl font-bold mb-4 text-white">Who Should Choose Drive Dojo</h2>
                  <ul className="space-y-3">
                    {[
                      "You want to start this week, not wait on a list",
                      "You'd rather learn in a calm, modern automatic car",
                      "You want to spread the cost with Klarna instalments",
                      "You expect a guaranteed, fully qualified ADI every lesson",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    When {competitor.shortName} Might Suit You
                  </h2>
                  <p className="text-gray-400 mb-4">
                    {competitor.category === "national"
                      ? `If you specifically want a nationwide brand with physical offices, or you've been personally referred to a particular ${competitor.shortName} instructor you trust, that can work well. Just go in aware that waiting lists and trainee instructors are common.`
                      : `If you've found an independent instructor you trust and their diary fits yours, that personal relationship can be valuable. Drive Dojo is simply the choice when you want the same local knowledge plus live availability and backup cover.`}
                  </p>
                  <p className="text-gray-400">
                    Either way, we'd always recommend meeting your instructor first and checking they're a fully qualified ADI.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ with schema */}
          <section className="py-16 bg-[#0d0d0d]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Honest answers about switching from {competitor.shortName} to Drive Dojo in East London.
                </p>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                {competitor.faqs.map((faq, index) => (
                  <motion.details
                    key={index}
                    className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-5 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-white list-none">
                      {faq.question}
                      <span className="text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                    </summary>
                    <p className="text-gray-400 mt-3 leading-relaxed">{faq.answer}</p>
                  </motion.details>
                ))}
              </div>
            </div>
          </section>

          {/* Compare other schools — internal linking */}
          <section className="py-16 bg-[#111111]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Compare Drive Dojo to Other Driving Schools
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {others.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/alternatives/${c.slug}`}
                    className="inline-flex items-center bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 rounded-full px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {c.name}
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Local areas — internal linking + local relevance */}
          <section className="py-12 bg-[#0d0d0d]">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <p className="text-gray-400 mb-4">
                  Drive Dojo covers all of East London — including:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {localAreas.map((area) => (
                    <Link
                      key={area.path}
                      to={area.path}
                      className="text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      Driving Lessons in {area.name}
                    </Link>
                  ))}
                </div>
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
                Ready to Switch to Drive Dojo?
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
                from 2,000+ East London learners. Book live in 60 seconds — no waiting list.
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
                  {competitor.ctaText}
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

export default CompetitorAlternative;
