import React from "react";
import NewHeroSection from "./sections/NewHeroSection";
import NewTestimonialsSection from "./sections/NewTestimonialsSection";
import CertificationsBar from "./sections/CertificationsBar";
import DrivingJourneySection from "./sections/DrivingJourneySection";
import FAQSection from "./sections/FAQSection";
import CTASection from "./sections/CTASection";
import PostcodesSection from "./sections/PostcodesSection";
import TestCentreWidget from "./sections/TestCentreWidget";
import AutomaticMatchmakerQuiz from "./sections/AutomaticMatchmakerQuiz";
import JourneyBudgetCalculator from "./sections/JourneyBudgetCalculator";
import DVSASyllabusTracker from "./sections/DVSASyllabusTracker";
import LessonHoursEstimator from "./sections/LessonHoursEstimator";
import PricingOffersSection from "./sections/PricingOffersSection";
import Banner from "./ui/Banner";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import SuccessStoriesSection from "./sections/SuccessStoriesSection";

const Home = () => {
  return (
    <>
      {/* Main Page Content */}
      <div className="min-h-screen bg-[#0d0d0d] relative overflow-hidden">
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

          {/* 9. Final Close */}
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
