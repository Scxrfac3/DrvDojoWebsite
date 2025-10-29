import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { BlogArticle } from "@/types/BlogArticle";
import BlogArticleContent from "../blog/BlogArticleContent";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MessageSquare,
  ThumbsUp,
  Eye,
  Share2,
  Bookmark,
  Heart,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
} from "lucide-react";

import { blogArticles } from "../../data/blogArticles";

// Sample blog data (will be replaced with API call)
const sampleBlogArticles: BlogArticle[] = blogArticles;

const BlogArticleDetail = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [copyLinkText, setCopyLinkText] = useState("Copy Link");

  // Get related articles (same category or tags)
  const getRelatedArticles = () => {
    if (!article) return [];

    return sampleBlogArticles
      .filter((a) => a.id !== article.id) // Exclude current article
      .filter(
        (a) =>
          a.category === article.category ||
          a.tags.some((tag) => article.tags.includes(tag)),
      )
      .slice(0, 3); // Get up to 3 related articles
  };

  // Find the article based on the slug
  useEffect(() => {
    if (!slug) {
      setError("No article slug provided");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    // Normalize the slug for comparison (trim whitespace, ensure lowercase)
    const normalizedSlug = slug.trim().toLowerCase();

    console.log("Looking for article with slug:", normalizedSlug);
    console.log(
      "Available articles:",
      sampleBlogArticles.map((a) => a.slug),
    );

    // Simulate API call delay
    setTimeout(() => {
      // Find article with case-insensitive comparison
      const foundArticle = sampleBlogArticles.find(
        (a) => a.slug.toLowerCase() === normalizedSlug,
      );

      if (foundArticle) {
        console.log("Found article:", foundArticle.title);
        setArticle(foundArticle);
        setIsLoading(false);
      } else {
        console.error("Article not found for slug:", normalizedSlug);
        setError("Article not found");
        setIsLoading(false);
      }
    }, 500);
  }, [slug]);

  const handleLike = () => {
    setLiked(!liked);
    // In a real app, you would update the likes count in the database
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    // In a real app, you would save this to the user's bookmarks
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyLinkText("Copied!");
    setTimeout(() => setCopyLinkText("Copy Link"), 2000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
        <Navbar />
        <div className="pt-[120px] pb-20 flex justify-center items-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 bg-slate-200 rounded w-60 mb-4"></div>
            <div className="h-6 bg-slate-200 rounded w-40"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
        <Navbar />
        <div className="pt-[120px] pb-20 container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Oops! Article Not Found</h1>
            <p className="mb-6">
              We couldn't find the article you're looking for.
            </p>
            <Button onClick={() => navigate("/blog")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedArticles = getRelatedArticles();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>

      <Navbar />

      <main className="pt-[120px] pb-20 relative z-10">
        <div className="container mx-auto px-4">
          {/* Back to blog link */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 -ml-3"
              onClick={() => navigate("/blog")}
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Blog
            </Button>
          </motion.div>

          {/* Article header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Link
                to={`/blog?category=${article.category}`}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
              >
                {article.category}
              </Link>
              <span className="text-gray-400">•</span>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>{article.readTime} min read</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              {article.title}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 border-2 border-white mr-3">
                  <img
                    src={
                      article.author.avatar ||
                      `https://api.dicebear.com/7.x/avataaars/svg?seed=${article.author.name}`
                    }
                    alt={article.author.name}
                  />
                </Avatar>
                <div>
                  <div className="font-medium text-gray-900">
                    {article.author.name}
                  </div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.publishedDate}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <motion.button
                  className={`p-2 rounded-full ${liked ? "bg-red-50 text-red-500" : "bg-gray-100 text-gray-500"} hover:bg-red-50 hover:text-red-500 transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleLike}
                >
                  <Heart className={`h-5 w-5 ${liked ? "fill-red-500" : ""}`} />
                </motion.button>

                <motion.button
                  className={`p-2 rounded-full ${bookmarked ? "bg-blue-50 text-blue-500" : "bg-gray-100 text-gray-500"} hover:bg-blue-50 hover:text-blue-500 transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleBookmark}
                >
                  <Bookmark
                    className={`h-5 w-5 ${bookmarked ? "fill-blue-500" : ""}`}
                  />
                </motion.button>

                <div className="relative group">
                  <motion.button
                    className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-purple-50 hover:text-purple-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 className="h-5 w-5" />
                  </motion.button>

                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
                    <div className="py-1">
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                        <Twitter className="h-4 w-4 mr-2" /> Share on Twitter
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                        <Facebook className="h-4 w-4 mr-2" /> Share on Facebook
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                        <Linkedin className="h-4 w-4 mr-2" /> Share on LinkedIn
                      </button>
                      <button
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                        onClick={copyToClipboard}
                      >
                        <Copy className="h-4 w-4 mr-2" /> {copyLinkText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured image */}
          <motion.div
            className="mb-10 rounded-2xl overflow-hidden shadow-lg relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-auto object-cover max-h-[500px] transition-transform duration-700 group-hover:scale-105"
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-yellow-300" />
                <span className="text-white font-medium text-sm">
                  Featured Article
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Article content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white rounded-xl shadow-md p-6 md:p-10 prose prose-lg max-w-none">
                <BlogArticleContent content={article.content} />
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/blog?tag=${tag}`}
                    className="bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    #{tag.replace(/\s+/g, "")}
                  </Link>
                ))}
              </div>

              {/* Author bio */}
              <motion.div
                className="mt-10 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-purple-200/30"
                      style={{
                        width: Math.random() * 60 + 20,
                        height: Math.random() * 60 + 20,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      initial={{ opacity: 0.1, scale: 0 }}
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [0, 1, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        y: [0, Math.random() * 50 - 25, 0],
                      }}
                      transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                      }}
                    />
                  ))}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Avatar className="h-16 w-16 border-2 border-white mr-4 ring-4 ring-purple-100">
                        <img
                          src={
                            article.author.avatar ||
                            `https://api.dicebear.com/7.x/avataaars/svg?seed=${article.author.name}`
                          }
                          alt={article.author.name}
                        />
                      </Avatar>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 flex items-center">
                        About {article.author.name}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.2, 1] }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          <Zap className="ml-2 h-5 w-5 text-yellow-500" />
                        </motion.div>
                      </h3>
                      <p className="text-gray-600">
                        Driving Instructor & Content Creator
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">
                    {article.author.name} is a certified driving instructor with
                    over 5 years of experience helping students pass their
                    tests. They specialize in helping anxious drivers build
                    confidence on the road.
                  </p>
                </div>
              </motion.div>

              {/* Comments section placeholder */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-purple-500" />
                  Comments ({article.comments})
                </h3>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-center py-8">
                    <p className="text-gray-500">Comments are coming soon!</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Related articles */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Related Articles
                </h3>

                <div className="space-y-4">
                  {relatedArticles.map((relatedArticle) => (
                    <div
                      key={relatedArticle.id}
                      className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <img
                        src={relatedArticle.featuredImage}
                        alt={relatedArticle.title}
                        className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                      />
                      <div>
                        <Link
                          to={`/blog/${relatedArticle.slug}`}
                          className="font-medium text-gray-900 hover:text-purple-600 line-clamp-2 transition-colors"
                        >
                          {relatedArticle.title}
                        </Link>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{relatedArticle.readTime} min read</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {relatedArticles.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    No related articles found
                  </p>
                )}
              </div>

              {/* Popular tags */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Popular Tags
                </h3>

                <div className="flex flex-wrap gap-2">
                  {[
                    "driving test",
                    "safety tips",
                    "new drivers",
                    "theory test",
                    "insurance",
                    "wet weather",
                    "night driving",
                    "motorway",
                    "parking",
                  ].map((tag, index) => (
                    <Link
                      key={index}
                      to={`/blog?tag=${tag}`}
                      className="bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      #{tag.replace(/\s+/g, "")}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter signup */}
              <div className="bg-gradient-to-r from-purple-600 via-red-500 to-amber-400 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="mb-4 text-white/90">
                  Get the latest driving tips straight to your inbox — no cap fr
                  fr
                </p>

                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-grow px-4 py-2 rounded-l-md border-0 focus:ring-2 focus:ring-white text-gray-900"
                  />
                  <button className="bg-white text-purple-600 px-4 py-2 rounded-r-md font-medium hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>

                <p className="mt-3 text-xs text-white/70">
                  No spam, just immaculate vibes. Unsubscribe anytime.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Next/Previous article navigation */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <Button
                variant="outline"
                className="mb-4 sm:mb-0 w-full sm:w-auto"
                onClick={() => navigate("/blog")}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous Article
              </Button>

              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => navigate("/blog")}
              >
                Next Article
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticleDetail;
