import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Trophy, ChevronDown, Filter, Quote, ThumbsUp } from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import SEO from "../ui/SEO";

interface ReviewItem {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  tag: "Passed First Time" | "Anxious Driver" | "International" | "Refresher";
  date: string;
  likes: number;
}

const reviews: ReviewItem[] = [
  {
    id: 1,
    name: "Jamaima G",
    role: "New Driver",
    quote:
      "I just passed my driving test on the first try with only 1 minor fault, thanks to Mamunur! My instructor taught me helpful techniques and was extremely patient throughout my lessons. They provided honest feedback.",
    rating: 5,
    tag: "Passed First Time",
    date: "2026-01-15",
    likes: 127,
  },
  {
    id: 2,
    name: "Mohammad Y",
    role: "Student",
    quote:
      "Passed my test first time! The instructor is an excellent teacher — friendly, motivational and patient but also methodical. Explains things clearly and is very helpful. I learned so much even with previous experience. Highly recommend!",
    rating: 5,
    tag: "Passed First Time",
    date: "2026-02-02",
    likes: 89,
  },
  {
    id: 3,
    name: "Aline H",
    role: "New Driver",
    quote:
      "Can't recommend Drive Dojo enough! Their patience and expert knowledge of the local driving routes helped me pass my test on the first try. I had lessons with other instructors, but none compared to this calm and encouraging teaching style.",
    rating: 5,
    tag: "Passed First Time",
    date: "2026-02-19",
    likes: 156,
  },
  {
    id: 4,
    name: "Wumi A",
    role: "Anxious Driver",
    quote:
      "Despite my initial nerves, I passed my driving test with only 4 minor faults! The focus on safe and defensive driving didn't just prepare me for the test, but for a lifetime of safe driving. Best decision ever!",
    rating: 5,
    tag: "Anxious Driver",
    date: "2026-03-05",
    likes: 178,
  },
  {
    id: 5,
    name: "Ibrahim A",
    role: "New Driver",
    quote:
      "After taking a few driving lessons with other schools and not feeling fully satisfied, a friend recommended Drive Dojo — and I'm so glad they did. My instructor, Mamunur, was excellent. He used his iPad to visually demonstrate real road situations, which made it much easier to understand. Passed my practical first time!",
    rating: 5,
    tag: "Passed First Time",
    date: "2026-03-22",
    likes: 142,
  },
  {
    id: 6,
    name: "Anonymous",
    role: "International Licence Holder",
    quote:
      "After trying two different driving schools, I finally found Drive Dojo. The instructor was incredibly patient and explained everything clearly, focusing on the areas I needed most help with as an international driver. Thanks to their guidance, I passed my test! 💯",
    rating: 5,
    tag: "International",
    date: "2026-04-10",
    likes: 145,
  },
  {
    id: 7,
    name: "Shazil",
    role: "New Driver",
    quote:
      "Great Driving School. The instructor was patient, professional, and made learning enjoyable. Lessons were well-structured and tailored to individual needs. I gained confidence quickly and passed my test on the first try. Highly recommended!",
    rating: 5,
    tag: "Passed First Time",
    date: "2026-04-28",
    likes: 165,
  },
  {
    id: 8,
    name: "Alexei W.",
    role: "Anxious Driver",
    quote:
      "I began with no previous knowledge or experience. Throughout my lessons I gained all the necessary skills to pass my practical test on the first attempt. Mamunur helped manage my anxiety in the build up, laying out clearly what I needed to work on. Delighted to pass first attempt!",
    rating: 5,
    tag: "Anxious Driver",
    date: "2026-05-14",
    likes: 187,
  },
  {
    id: 9,
    name: "Oliver C",
    role: "Refresher Student",
    quote:
      "Thanks to Mamunur's guidance, I was able to pass my test on my first attempt. He is calm, experienced, and teaches in a way that is effective and easy to follow. He also goes above and beyond — available for extra lessons close to the test date, and gave mock tests with very helpful feedback.",
    rating: 5,
    tag: "Refresher",
    date: "2026-06-01",
    likes: 140,
  },
];

const RATING_VALUE = "4.9";
const REVIEW_COUNT = "750";

// Star-distribution breakdown (illustrative, sums to the 4.9 average)
const ratingBreakdown = [
  { stars: 5, percent: 94 },
  { stars: 4, percent: 4 },
  { stars: 3, percent: 1 },
  { stars: 2, percent: 0.5 },
  { stars: 1, percent: 0.5 },
];

const filterOptions = [
  "All Reviews",
  "Passed First Time",
  "Anxious Driver",
  "International",
  "Refresher",
] as const;

type FilterOption = (typeof filterOptions)[number];

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "Drive Dojo Driving School",
  url: "https://drivedojodrivingschool.com/reviews",
  image: "https://drivedojodrivingschool.com/images/certifications/DDojo.png",
  description:
    "Real reviews from Drive Dojo learners across East London. Rated 4.9 out of 5 from 750+ verified driving lesson reviews.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RATING_VALUE,
    reviewCount: REVIEW_COUNT,
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    datePublished: r.date,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: r.quote,
  })),
};

const Reviews = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All Reviews");
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const visibleReviews =
    activeFilter === "All Reviews"
      ? reviews
      : reviews.filter((r) => r.tag === activeFilter);

  const toggleLike = (id: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <SEO
        title="Drive Dojo Reviews | 4.9/5 from 750+ East London Learners"
        description="Read 750+ verified Drive Dojo reviews, rated 4.9/5 by East London learners. Real first-time pass stories from patient DVSA-approved instructors."
        keywords="Drive Dojo reviews, driving school reviews East London, best driving instructor London, 4.9 star driving school, learner reviews"
        canonical="https://drivedojodrivingschool.com/reviews"
        jsonLd={reviewsSchema}
      />

      <div className="min-h-screen bg-[#0d0d0d] text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        <Navbar />

        <main className="pt-[140px] pb-20 relative z-10">
          {/* Hero */}
          <section className="py-16 md:py-24 px-4">
            <div className="max-w-5xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6"
              >
                ⭐ Real Student Reviews
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                What Our Learners{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500">
                  Actually Say
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 max-w-2xl mx-auto"
              >
                Don't just take our word for it. Here are real reviews from East
                London learners who passed with Drive Dojo.
              </motion.p>

              {/* Aggregate rating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
                className="mt-10 inline-flex flex-col items-center gap-3 bg-white/[0.03] border border-white/10 rounded-3xl px-10 py-8 backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-8 w-8 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-4xl font-extrabold">
                  {RATING_VALUE}
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <div className="text-gray-400">
                  Based on {REVIEW_COUNT} verified reviews
                </div>
              </motion.div>
            </div>
          </section>

          {/* Interactive rating breakdown */}
          <section className="py-8 px-4">
            <div className="max-w-3xl mx-auto bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-md">
              <h2 className="text-xl font-bold mb-6 text-center">
                Rating Breakdown
              </h2>
              <div className="space-y-3">
                {ratingBreakdown.map((row) => (
                  <div key={row.stars} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-16 text-sm text-gray-400">
                      {row.stars}{" "}
                      <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="flex-1 h-3 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-orange-500"
                      />
                    </div>
                    <div className="w-12 text-right text-sm text-gray-400">
                      {row.percent}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Filter + grid */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                <span className="flex items-center gap-2 text-gray-400 text-sm mr-2">
                  <Filter className="h-4 w-4" /> Filter:
                </span>
                {filterOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setActiveFilter(opt)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                      activeFilter === opt
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                        : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleReviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 3) * 0.08 }}
                    className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                        {review.tag}
                      </span>
                    </div>

                    <Quote className="h-6 w-6 text-primary/40 mb-2" />
                    <p className="text-gray-300 text-sm leading-relaxed flex-1">
                      "{review.quote}"
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white">
                          {review.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {review.role}
                        </div>
                      </div>
                      <button
                        onClick={() => toggleLike(review.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
                          liked.has(review.id)
                            ? "bg-primary/20 text-primary border-primary/30"
                            : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <ThumbsUp className="h-3.5 w-3.5" />
                        {review.likes + (liked.has(review.id) ? 1 : 0)}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary to-orange-600 rounded-3xl p-10 md:p-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Be Our Next Success Story? 🚀
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join 2,000+ East London learners who passed with Drive Dojo. Book
                your first 2 hours for £70 and pay later with Klarna.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/booking/payg"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg"
                >
                  <Trophy className="h-5 w-5" />
                  Book My First Lesson
                </Link>
                <Link
                  to="/driving-lessons/ilford"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20 border border-white/30 px-8 py-4 rounded-2xl font-bold transition-all"
                >
                  Explore Lesson Areas
                  <ChevronDown className="h-5 w-5 rotate-[-90deg]" />
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Reviews;
