import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Clock, Tag, ArrowRight } from "lucide-react";

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

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How Many Driving Lessons Do You Actually Need? The Real Tea 🚗",
    excerpt:
      "Wondering how many driving lessons you'll need before test day? From the average 40-45 hours to hacks for fast-tracking your progress, get the real tea on what affects your learning timeline. No cap!",
    featuredImage:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
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
    featuredImage:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    date: "August 20, 2023",
    slug: "intensive-vs-standard-driving-courses",
    category: "Learning Tips",
    readTime: 5,
  },
  {
    id: "3",
    title: "Ace Your Hazard Perception Test: 10 Fire Tips You Need RN 👀",
    excerpt:
      "Struggling with the hazard perception test? These 10 fire tips will help you spot dangers early, avoid the algorithm checking you for spam clicks, and pass first time! Perfect for Gen Z learners who want practical, no-cap advice.",
    featuredImage:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
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
    featuredImage:
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&q=80",
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
    featuredImage:
      "https://images.unsplash.com/photo-1560009320-c01920eef9f8?w=800&q=80",
    date: "April 23, 2023",
    slug: "top-5-qualities-london-driving-instructor-goodmayes",
    category: "Instructor Tips",
    readTime: 6,
  },
  {
    id: "6",
    title: "Why Now Is The Perfect Time To Become A Driving Instructor 🔥",
    excerpt:
      "Ready for a career that's actually giving? London's driving instructor shortage is your opportunity era! Flexible hours, £30K+ earning potential, and the chance to be your own boss—find out why becoming a driving instructor is the ultimate career move right now.",
    featuredImage:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80",
    date: "January 20, 2023",
    slug: "why-now-is-perfect-time-to-become-driving-instructor",
    category: "Career Opportunities",
    readTime: 7,
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>

      <Navbar />

      <main className="pt-[80px] pb-20 relative z-10">
        {/* Animated Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 mb-12">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10"
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

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <motion.div
                className="inline-flex items-center mb-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">✨</span>
                Latest Driving Tips & Insights
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                  Drive Dojo Blog
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Level up your driving knowledge with our fire content — no cap
                fr fr
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {[
                  "Test Tips",
                  "Learning Hacks",
                  "Instructor Vibes",
                  "Career Moves",
                  "Safety First",
                ].map((tag, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-white/20 cursor-pointer transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    #{tag.replace(/\s+/g, "")}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="relative w-full max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80"
                    alt="Featured blog post"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <div className="bg-purple-600/80 text-white text-xs px-3 py-1 rounded-full w-fit mb-3">
                      Featured Post
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      How Many Driving Lessons Do You Actually Need? The Real
                      Tea 🚗
                    </h2>
                    <p className="text-white/80 mb-4 max-w-2xl">
                      Wondering how many driving lessons you'll need before test
                      day? From the average 40-45 hours to hacks for
                      fast-tracking your progress, get the real tea on what
                      affects your learning timeline. No cap!
                    </p>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white w-fit">
                      Read Featured Post
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-5 -right-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Stay updated with our freshest content to help you become a
              confident and skilled driver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-0 bg-white/80 backdrop-blur-sm">
                  <div className="relative">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="object-cover w-full h-48 transition-transform duration-500 hover:scale-105"
                    />
                    {post.category && (
                      <div className="absolute top-4 left-4 bg-purple-600/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      {post.readTime && (
                        <div className="flex items-center">
                          <Tag className="h-4 w-4 mr-1" />
                          <span>{post.readTime} min read</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.slug}`}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
