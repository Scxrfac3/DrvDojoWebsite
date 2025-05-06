import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  MessageSquare,
  ThumbsUp,
  Eye,
  ChevronDown,
  Bookmark,
  Share2,
  TrendingUp,
} from "lucide-react";
import { BlogArticle } from "@/types/BlogArticle";

interface BlogArticleCardProps {
  article: BlogArticle;
  featured?: boolean;
}

const BlogArticleCard = ({
  article,
  featured = false,
}: BlogArticleCardProps) => {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full flex flex-col ${featured ? "md:flex-row" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Image */}
      <div
        className={`${featured ? "md:w-2/5" : ""} relative group overflow-hidden`}
      >
        <img
          src={
            article.featuredImage ||
            "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80"
          }
          alt={article.title}
          className={`w-full h-48 ${featured ? "md:h-full" : ""} object-cover transition-transform duration-500 group-hover:scale-110`}
          loading="lazy"
        />
        {/* Trending indicator */}
        {article.views > 1500 && (
          <motion.div
            className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            <TrendingUp className="w-3 h-3 mr-1" /> Trending
          </motion.div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {article.category}
        </div>
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between">
          <Link
            to={`/blog/${article.slug}`}
            className="bg-white/20 backdrop-blur-sm text-white text-sm py-2 px-4 rounded-full inline-flex items-center hover:bg-white/30 transition-colors"
          >
            Read Now <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
          </Link>
          <div className="flex space-x-2">
            <motion.button
              className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bookmark className="h-4 w-4" />
            </motion.button>
            <motion.button
              className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Share2 className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`p-6 flex flex-col flex-grow ${featured ? "md:w-3/5" : ""}`}
      >
        <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-purple-600 transition-colors">
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>

        {/* Key takeaway - new section */}
        {featured && (
          <div className="mb-3 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
            <p className="text-sm font-medium text-purple-800">Key Takeaway:</p>
            <p className="text-sm text-purple-700">
              {article.excerpt.split(". ")[0] + "."}
            </p>
          </div>
        )}

        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md hover:bg-purple-100 hover:text-purple-600 cursor-pointer transition-colors"
            >
              #{tag.replace(/\s+/g, "")}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-y-2">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1 text-purple-400" />
            <span>{article.publishedDate}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-purple-400" />
            <span>{article.readTime} min read</span>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-y-3">
          <div className="flex items-center">
            <div className="relative">
              <img
                src={
                  article.author.avatar ||
                  `https://api.dicebear.com/7.x/avataaars/svg?seed=${article.author.name}`
                }
                alt={article.author.name}
                className="w-8 h-8 rounded-full mr-2 border-2 border-white ring-2 ring-purple-100"
                loading="lazy"
              />
              <span className="absolute bottom-0 right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
            </div>
            <span className="text-sm font-medium">{article.author.name}</span>
          </div>

          <div className="flex items-center space-x-3 text-gray-400 text-xs">
            <motion.div
              className="flex items-center hover:text-purple-500 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye className="h-3 w-3 mr-1" />
              <span>{article.views || 0}</span>
            </motion.div>
            <motion.div
              className="flex items-center hover:text-red-500 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ThumbsUp className="h-3 w-3 mr-1" />
              <span>{article.likes || 0}</span>
            </motion.div>
            <motion.div
              className="flex items-center hover:text-blue-500 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageSquare className="h-3 w-3 mr-1" />
              <span>{article.comments || 0}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogArticleCard;
