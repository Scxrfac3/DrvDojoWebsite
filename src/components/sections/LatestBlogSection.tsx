import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  image: string;
  tag: string;
}

const featuredArticles: Article[] = [
  {
    slug: "top-driving-instructor-near-me-canary-wharf",
    title: "Top Driving Instructor Near Me — Drive Dojo Canary Wharf",
    excerpt:
      "The UK pass rate sits at just 48.65%. In Canary Wharf, Hither Green reports only 39.4%. Here's how to find the right instructor and pass first time in East London.",
    date: "May 30, 2025",
    readTime: 15,
    image: "/images/blog/NewLeaflet.png",
    tag: "Local Guide",
  },
  {
    slug: "complete-guide-teenage-driving-lessons-london-2026",
    title: "Complete Guide to Teenage Driving Lessons in London 2026",
    excerpt:
      "Everything parents and teenagers need to know — from costs and provisional licences to the new 2026 DVSA booking rules, test centres, and anxiety management.",
    date: "June 1, 2026",
    readTime: 16,
    image: "/images/blog/NewLeaflet.png",
    tag: "Learning Tips",
  },
];

const LatestBlogSection = () => {
  return (
    <section className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b35]/5 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff6b35]/5 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Header */}
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
            <BookOpen className="h-4 w-4 mr-2" />
            Latest Driving Tips
          </motion.div>

          <h2
            className="text-3xl md:text-4xl font-black mb-4 text-white"
            style={{ letterSpacing: "-2px" }}
          >
            Expert Advice from{" "}
            <span className="text-[#ff6b35]">DVSA-Approved</span> Instructors
          </h2>
          <p className="text-[#888] text-lg max-w-2xl mx-auto">
            In-depth guides to help you pass your test faster, save money, and
            build real driving confidence — written by the instructors who teach
            on East London's roads every day.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredArticles.map((article, index) => (
            <Link to={`/blog/${article.slug}`} key={article.slug}>
              <motion.div
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden hover:border-[rgba(255,107,53,0.3)] transition-all hover:-translate-y-1 group h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff6b35]/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {article.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-[#888] mb-3">
                    <span>{article.date}</span>
                    <span className="w-px h-3 bg-white/10"></span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime} min read
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-[#ff6b35] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#888] text-sm mb-4 line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-1 text-[#ff6b35] text-sm font-semibold group-hover:gap-2 transition-all mt-auto">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,107,53,0.3)] transition-all text-sm font-semibold"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestBlogSection;