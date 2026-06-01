import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import SEO from "../ui/SEO";
import {
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  BookOpen,
  Star,
  Tag,
  Search,
} from "lucide-react";
import { BlogArticle } from "../../types/BlogArticle";
import { blogArticles } from "../../data/blogArticles";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  date: string;
  slug: string;
  category?: string;
  readTime?: number;
}

// Original blog posts
const originalBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How Many Driving Lessons Do You Need? A Complete Guide",
    excerpt:
      "Discover the optimal number of driving lessons required to pass your test. Learn about the average 40-45 hours of professional instruction and factors that can affect your learning timeline.",
    featuredImage: "/images/certifications/FrontLOW.png",
    date: "August 28, 2023",
    slug: "how-many-driving-lessons-do-you-need",
    category: "Learning Tips",
    readTime: 6,
  },
  {
    id: "2",
    title: "Intensive vs Standard Driving Courses: Which Is Right For You?",
    excerpt:
      "Deciding between intensive and standard driving courses? Learn the pros and cons of each approach to find the best option for your learning style, schedule, and experience level.",
    featuredImage: "/images/certifications/FrontLOW.png",
    date: "August 20, 2023",
    slug: "intensive-vs-standard-driving-courses",
    category: "Learning Tips",
    readTime: 5,
  },
  {
    id: "3",
    title: "Master Your Hazard Perception Test: 10 Essential Tips",
    excerpt:
      "Preparing for the hazard perception test? These expert tips will help you identify potential hazards early, develop proper scanning techniques, and pass your test with confidence.",
    featuredImage: "/images/certifications/FrontLOW.png",
    date: "June 30, 2023",
    slug: "hazard-perception-test-tips",
    category: "Test Preparation",
    readTime: 6,
  },
  {
    id: "4",
    title: "Failed Your Driving Test? 7 Ways to Bounce Back and Pass Next Time",
    excerpt:
      "Failed your driving test? You're not alone—over 50% of learners don't pass first time! Discover 7 proven strategies to bounce back, manage test anxiety, and pass your next driving test with confidence.",
    featuredImage: "/images/certifications/FrontLOW.png",
    date: "January 23, 2023",
    slug: "get-over-failing-your-driving-test",
    category: "Test Preparation",
    readTime: 7,
  },
  {
    id: "5",
    title: "Top 5 Qualities To Look For In A London Driving Instructor",
    excerpt:
      "Looking for the perfect driving instructor in London, especially near Goodmayes test centre? Discover the essential qualities that make a great instructor who'll help you pass your test first time!",
    featuredImage: "/images/certifications/FrontLOW.png",
    date: "April 23, 2023",
    slug: "top-5-qualities-london-driving-instructor-goodmayes",
    category: "Instructor Tips",
    readTime: 6,
  },
  {
    id: "6",
    title: "Becoming a Driving Instructor: A Rewarding Career Path",
    excerpt:
      "Considering a career as a driving instructor? Learn about the qualifications needed, earning potential of £30K+, flexible working hours, and how to join this rewarding profession in London's growing market.",
    featuredImage: "/images/certifications/FrontLOW.png",
    date: "January 20, 2023",
    slug: "why-now-is-perfect-time-to-become-driving-instructor",
    category: "Career Opportunities",
    readTime: 7,
  },
];

const convertToBlogPost = (article: BlogArticle): BlogPost => ({
  id: article.id,
  title: article.title,
  excerpt: article.excerpt,
  featuredImage: article.featuredImage || "/images/certifications/FrontLOW.png",
  date: new Date(article.publishedDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
  slug: article.slug,
  category: article.category,
  readTime: article.readTime || 5,
});

const newBlogPosts: BlogPost[] = blogArticles.map(convertToBlogPost);

const groupArticlesByQuestionType = (articles: BlogPost[]) => {
  const groups: Record<string, BlogPost[]> = {};

  articles.forEach((article) => {
    const title = article.title.toLowerCase();
    let questionType = "Other";

    if (title.startsWith("how ")) questionType = "HOW";
    else if (title.startsWith("why ")) questionType = "WHY";
    else if (title.startsWith("which ")) questionType = "WHICH";
    else if (title.startsWith("where ")) questionType = "WHERE";
    else if (title.startsWith("when ")) questionType = "WHEN";
    else if (title.startsWith("what ")) questionType = "WHAT";
    else if (title.startsWith("can ")) questionType = "CAN";
    else if (title.startsWith("are ")) questionType = "ARE";

    if (!groups[questionType]) {
      groups[questionType] = [];
    }
    groups[questionType].push(article);
  });

  return groups;
};

const articleGroups = groupArticlesByQuestionType(newBlogPosts);

export default function BlogPage() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (questionType: string) => {
    setOpenDropdown(openDropdown === questionType ? null : questionType);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] relative overflow-hidden">
      <SEO
        title="Driving Tips & Blog | Drive Dojo | DVSA Approved Instructor Insights"
        description="Expert driving tips, test preparation guides, and instructor insights from Drive Dojo. DVSA approved advice for learners in East London. Read our blog for driving test tips, intensive course guides, and more."
        keywords="driving blog, driving tips blog, learn to drive blog UK, driving test tips blog, driving instructor blog London, DVSA blog driving lessons, intensive driving course blog, automatic driving lessons blog, East London driving blog"
        canonical="https://drivedojodrivingschool.com/blog"
      />

      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <Navbar />

      <main className="pt-[100px] pb-20 relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-primary/10"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0.1, scale: 0 }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [0, 1, 0],
                  x: [0, Math.random() * 100 - 50, 0],
                  y: [0, Math.random() * 100 - 50, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <div className="flex flex-col items-center justify-center text-center">
              <motion.div
                className="inline-flex items-center mb-4 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] px-5 py-2 rounded-full text-sm font-medium text-[#ff6b35]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Latest Driving Tips & Insights
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white"
                style={{ letterSpacing: "-3px" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Drive Dojo{" "}
                <span className="text-[#ff6b35]">Blog</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-[rgba(255,255,255,0.8)] mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Expert driving tips and insights from DVSA-approved instructors
                to help you pass your test with confidence.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 justify-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {[
                  "Test Preparation",
                  "Learning Techniques",
                  "Instructor Advice",
                  "Career Opportunities",
                  "Road Safety",
                ].map((tag, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-gray-300 text-sm hover:bg-white/10 hover:border-white/20 cursor-pointer transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    #{tag.replace(/\s+/g, "")}
                  </motion.div>
                ))}
              </motion.div>

              {/* Featured Post Hero Card */}
              <motion.div
                className="relative w-full max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src="/images/certifications/FrontLOW.png"
                    alt="Featured blog post"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <div className="bg-[#ff6b35]/80 text-white text-xs px-3 py-1 rounded-full w-fit mb-3">
                      Featured Post
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      How Many Driving Lessons Do You Need? A Complete Guide
                    </h2>
                    <p className="text-white/70 mb-4 max-w-2xl text-sm md:text-base">
                      Discover the optimal number of driving lessons required to
                      pass your test. Learn about the average 40-45 hours of
                      professional instruction and factors that can affect your
                      learning timeline.
                    </p>
                    <Link to="/blog/how-many-driving-lessons-do-you-need">
                      <Button className="bg-[#ff6b35] hover:bg-[#ff8555] text-white w-fit shadow-[0_8px_30px_rgba(255,107,53,0.4)]">
                        Read Featured Post
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-5 -right-5 bg-gradient-to-r from-[#ff6b35] to-[#f5a623] rounded-full p-3 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <BookOpen className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Automatic Driving Lessons Promotion */}
        <section className="py-16 bg-[#1a1a1a] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b35]/5 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff6b35]/5 rounded-full opacity-30 blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center mb-4 bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg">
                    <span className="mr-2">🚗</span>
                    Special Offer
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-4 text-white" style={{ letterSpacing: "-2px" }}>
                    Learn to Drive in an{" "}
                    <span className="text-[#ff6b35]">Automatic Car</span>
                  </h2>
                  <p className="text-lg text-[#888] mb-6">
                    Discover the benefits of automatic driving lessons with our
                    DVSA-approved instructors. No clutch, no stalling — just
                    smooth, confident driving from day one!
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Easier to learn — no clutch control needed",
                      "Perfect for nervous drivers and city driving",
                      "Quick progress — most students learn faster",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[rgba(255,255,255,0.8)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/automatic-driving-lessons">
                    <Button className="bg-[#ff6b35] hover:bg-[#ff8555] text-white shadow-[0_8px_30px_rgba(255,107,53,0.4)] group">
                      Explore Automatic Lessons
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg border border-white/10">
                    <img
                      src="/images/certifications/FrontLOW.png"
                      alt="Automatic driving lesson"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-[#ff6b35] text-white px-4 py-2 rounded-full inline-block mb-2 text-sm font-semibold">
                        Automatic Only
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Specialized Automatic Tuition
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center mb-4 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] px-5 py-2 rounded-full text-sm font-medium text-[#ff6b35]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Star className="h-4 w-4 mr-2" />
                Featured Articles
              </motion.div>
              <h2
                className="text-3xl md:text-4xl font-black mb-4 text-white"
                style={{ letterSpacing: "-2px" }}
              >
                Popular Driving{" "}
                <span className="text-[#ff6b35]">Tips & Guides</span>
              </h2>
              <p className="text-[#888] text-lg max-w-2xl mx-auto">
                Our most popular driving tips and guides to help you on your
                journey to becoming a confident driver.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {originalBlogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden hover:border-[rgba(255,107,53,0.3)] transition-all hover:-translate-y-1 h-full flex flex-col">
                    <div className="relative">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="object-cover w-full h-48 transition-transform duration-500 hover:scale-105"
                      />
                      {post.category && (
                        <div className="absolute top-4 left-4 bg-[#ff6b35]/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          {post.category}
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        {post.readTime && (
                          <div className="flex items-center gap-1">
                            <Tag className="h-4 w-4" />
                            <span>{post.readTime} min read</span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[#888] text-sm mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <Link to={`/blog/${post.slug}`}>
                        <Button className="w-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] text-white border border-[rgba(255,255,255,0.1)] group">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SEO Article Collection */}
          <div className="pb-16">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center mb-4 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] px-5 py-2 rounded-full text-sm font-medium text-[#ff6b35]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Search className="h-4 w-4 mr-2" />
                Article Library
              </motion.div>
              <h2
                className="text-3xl md:text-4xl font-black mb-4 text-white"
                style={{ letterSpacing: "-2px" }}
              >
                Browse by{" "}
                <span className="text-[#ff6b35]">Topic</span>
              </h2>
              <p className="text-[#888] text-lg max-w-2xl mx-auto">
                Browse our comprehensive collection of articles organized by
                question type to find exactly what you're looking for.
              </p>
            </motion.div>

            <div className="space-y-4">
              {Object.entries(articleGroups).map(([questionType, articles]) => (
                <motion.div
                  key={questionType}
                  className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden hover:border-[rgba(255,107,53,0.2)] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleDropdown(questionType)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-white/[0.02] transition-colors"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {questionType} Articles
                      </h3>
                      <p className="text-[#888] text-sm">
                        {articles.length} article{articles.length !== 1 ? "s" : ""} in this category
                      </p>
                    </div>
                    {openDropdown === questionType ? (
                      <ChevronUp className="h-5 w-5 text-[#ff6b35]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openDropdown === questionType && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-[rgba(255,255,255,0.06)]"
                      >
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {articles.map((article, index) => (
                            <motion.div
                              key={article.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              className="flex gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-colors"
                            >
                              <div className="flex-shrink-0">
                                <img
                                  src={article.featuredImage}
                                  alt={article.title}
                                  className="w-20 h-20 rounded-lg object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-white text-sm mb-1 line-clamp-2">
                                  {article.title}
                                </h4>
                                <p className="text-[#888] text-xs mb-2 line-clamp-2">
                                  {article.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center text-xs text-gray-500">
                                    <Clock className="h-3 w-3 mr-1" />
                                    <span>{article.readTime} min read</span>
                                  </div>
                                  <Link
                                    to={`/blog/${article.slug}`}
                                    className="text-[#ff6b35] hover:text-[#ff8555] text-xs font-medium inline-flex items-center gap-1"
                                  >
                                    Read
                                    <ArrowRight className="h-3 w-3" />
                                  </Link>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
