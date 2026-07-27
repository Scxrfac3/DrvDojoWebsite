import React from "react";
import NewHeroSection from "./sections/NewHeroSection";
import NewTestimonialsSection from "./sections/NewTestimonialsSection";
import CertificationsBar from "./sections/CertificationsBar";
import DrivingJourneySection from "./sections/DrivingJourneySection";
import FAQSection from "./sections/FAQSection";
import LatestBlogSection from "./sections/LatestBlogSection";
import PostcodesSection from "./sections/PostcodesSection";
import TestCentreWidget from "./sections/TestCentreWidget";
import AutomaticMatchmakerQuiz from "./sections/AutomaticMatchmakerQuiz";
import JourneyBudgetCalculator from "./sections/JourneyBudgetCalculator";
import DVSASyllabusTracker from "./sections/DVSASyllabusTracker";
import LessonHoursEstimator from "./sections/LessonHoursEstimator";
import PricingOffersSection from "./sections/PricingOffersSection";
import Banner from "./ui/Banner";
import SEO from "./ui/SEO";
import { reviewSchema } from "@/data/reviewSchema";
import { CreditCard } from "lucide-react";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import SuccessStoriesSection from "./sections/SuccessStoriesSection";

const klarnaFaqs = [
  {
    q: "Can I pay for driving lessons with Klarna?",
    a: "Yes. Drive Dojo lets you pay for driving lessons with Klarna — spread the cost interest-free with Klarna's Pay in 3, or choose Buy Now, Pay Later. Select Klarna at online checkout when you book your lessons.",
  },
  {
    q: "How does Klarna Pay in 3 work for driving lessons?",
    a: "Klarna Pay in 3 splits your lesson block into three equal, interest-free payments. You pay the first instalment when you book, then the remaining two every 30 days — no fees if you pay on time.",
  },
  {
    q: "Can I book driving lessons online instantly?",
    a: "Absolutely. Our live availability calendar shows real-time slots — pick your time and book your driving lesson online in about 60 seconds, with no waiting for callbacks.",
  },
];

const klarnaFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: klarnaFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Home = () => {
  return (
    <>
      <SEO
        title="Drive Dojo | DVSA-Approved Driving Lessons in East London"
        description="Learn to drive in East London with Drive Dojo — DVSA-approved instructors and Mercedes-Benz cars. First 2 hours £70, pay later with Klarna."
        keywords="driving lessons East London, DVSA approved instructor, automatic driving lessons, Mercedes driving school, learn to drive London"
        canonical="https://drivedojodrivingschool.com/"
        jsonLd={reviewSchema}
      />
      {/* Main Page Content */}
      <div className="min-h-screen bg-[#0d0d0d] relative overflow-hidden pt-9">
        {/* Background decorative elements - subtle dark theme */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        <Banner />
        <Navbar />

        <main className="pt-0 relative z-10">
          {/* 1. The Hook */}
          <NewHeroSection />

          {/* 2. Instant Trust */}
          <CertificationsBar />

          {/* 3. Interactive Lead Magnet */}
          <LessonHoursEstimator />

          {/* 4. The Pitch — Pricing & Offers */}
          <PricingOffersSection />

          {/* 5. How It Works */}
          <DrivingJourneySection />

          {/* 5b. Interactive Tools — Matchmaker & Budget */}
          <AutomaticMatchmakerQuiz />
          <JourneyBudgetCalculator />

          {/* 5c. DVSA Syllabus Tracker */}
          <DVSASyllabusTracker />

          {/* 6. Social Proof — Success Stories & Testimonials */}
          <SuccessStoriesSection />
          <NewTestimonialsSection />

          {/* 7. Local Reassurance */}
          <TestCentreWidget />
          <PostcodesSection />

          {/* 8. Objection Handling */}
          <FAQSection />

          {/* 8b. Klarna & Instant Booking FAQ — long-tail SEO */}
          <section className="py-16 bg-[#111111]">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <div className="inline-flex items-center mb-3 bg-primary/20 px-4 py-2 rounded-full text-sm font-medium text-primary border border-primary/30">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Klarna & Instant Booking
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Paying for Lessons with Klarna</h2>
              </div>
              <div className="space-y-4">
                {klarnaFaqs.map((faq, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                    <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(klarnaFaqSchema) }} />

          {/* 9. Blog Articles — Internal linking for SEO */}
          <LatestBlogSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
