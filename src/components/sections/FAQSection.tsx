import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  MessageCircle,
} from "lucide-react";


interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  className?: string;
}

const FAQSection = ({
    title = "Got Questions?",
    subtitle = "Quick answers to get you on the road with confidence! 🚀",
  faqs = [
    {
      question: "How many lessons do I need? 🚗",
      answer: "Usually 30-40 hours total, but it varies by person. We'll assess you and give a personalized plan after your first lesson.",
      category: "Lessons",
    },
    {
      question: "What's your pass rate? 📈",
      answer: "98% of our students pass first time. That's why we're London's top-rated driving school!",
      category: "Results",
    },
    {
      question: "Do you provide test cars? ✅",
      answer: "Yes! We provide modern, dual-controlled cars for all tests. They're fully insured and DVSA approved.",
      category: "Testing",
    },
    {
      question: "Where do you teach? 📍",
      answer: "East London, Romford, Ilford & postal codes E14, RM7, IG1. We can meet you anywhere in these areas.",
      category: "Location",
    },
    {
      question: "How do I book lessons? 📅",
      answer: "Super easy! Click 'Book Now', pick your time, or call/whatsapp us. Online portal tracks everything.",
      category: "Booking",
    },
    {
      question: "Can I cancel/reschedule? ❌",
      answer: "Definitely! 24 hours notice needed to avoid fees. Manage everything through your student portal.",
      category: "Cancellations",
    },
    {
      question: "Are instructors qualified? 👨‍🏫",
      answer: "All are DVSA certified with 500+ hours each. We recruit the best - London streets aren't easy!",
      category: "Instructors",
    },
    {
      question: "What's included in lessons? 📋",
      answer: "Everything! Pick-up/drop-off, professional guidance, mock tests, and unlimited theory practice.",
      category: "Included",
    },
  ],
  className = "",
}: FAQSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Extract unique categories
  const categories = Array.from(
    new Set(faqs.map((faq) => faq.category || "General")),
  );

  // Filter FAQs based on search term and active category
  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !activeCategory ||
      faq.category === activeCategory ||
      (!faq.category && activeCategory === "General");
    return matchesSearch && matchesCategory;
  });

  return (
    <section
      className={`relative py-20 bg-gradient-white-subtle overflow-hidden ${className}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-400 rounded-full opacity-10 animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-yellow-400 rounded-full opacity-15 animate-pulse"></div>
      </div>
      <div className="relative container mx-auto px-4 z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center mb-6 bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-400/30 text-sm font-bold text-orange-600">
            <HelpCircle className="h-5 w-5 mr-2 text-orange-500" />
            Get Your Questions Answered! 💬
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-orange-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        </motion.div>

        {/* Search and filter */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Search Box */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 shadow-2xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="🔍 Search for answers..."
                className="pl-16 py-4 bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:bg-gray-50 focus:border-orange-400 focus:ring-orange-400 rounded-2xl text-lg w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  !activeCategory
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg scale-110'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                🌟 All Questions
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg scale-110'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200 overflow-hidden hover:scale-102 transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="w-full px-8 py-6 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-gray-800 text-left mb-2 group-hover:text-orange-600 transition-colors">
                          {faq.question}
                        </h3>
                        {faq.category && (
                          <span className="inline-block text-xs font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
                            {faq.category}
                          </span>
                        )}
                      </div>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-orange-500 ml-4 flex-shrink-0"
                      >
                        <ChevronDown className="h-6 w-6" />
                      </motion.div>
                    </div>
                  </button>
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-8 pb-6"
                      >
                        <div className="text-gray-600 text-lg leading-relaxed pt-2 border-t border-gray-200">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-12 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-6xl mb-4">🤷‍♀️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No answers found for "{searchTerm}"</h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Let us help you personally!
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setShowContactForm(true);
                }}
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-3"
              >
                <MessageCircle className="h-5 w-5" />
                Ask Us Directly
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Contact form or additional help */}
        <AnimatePresence>
          {showContactForm && (
            <motion.div
              className="max-w-3xl mx-auto mt-12 p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-gray-200 shadow-2xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  ✉️ Ask Your Question
                </h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <ChevronUp className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="👤 Your name"
                  className="w-full bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:bg-gray-50 focus:border-orange-400 rounded-2xl px-4 py-3"
                />
                <input
                  type="email"
                  placeholder="📧 Your email"
                  className="w-full bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:bg-gray-50 focus:border-orange-400 rounded-2xl px-4 py-3"
                />
                <textarea
                  placeholder="💭 What can we help you with?"
                  className="w-full min-h-[120px] p-4 bg-white border border-gray-300 text-gray-600 placeholder-gray-500 focus:bg-gray-50 focus:border-orange-400 rounded-2xl resize-none"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
                  📬 Send Question
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-orange-300/50 inline-block">
            <p className="text-orange-700 mb-2">Still have questions? 🤔</p>
            <motion.button
              onClick={() => setShowContactForm(true)}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-5 w-5" />
              Contact Support Team
              <span className="animate-bounce">👋</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
