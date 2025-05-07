import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  MessageCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  title = "Your Questions Answered",
  subtitle = "Everything you need to know about our driving lessons and services to get you on the road with confidence.",
  faqs = [
    {
      question: "How many lessons will I need to pass my test?",
      answer:
        "The number of lessons varies for each student based on their learning pace and prior experience. On average, new drivers typically need between 30-40 hours of professional instruction combined with additional practice. We'll assess your skills during your first lesson and provide a personalized recommendation.",
      category: "Lessons",
    },
    {
      question: "What types of payment do you accept?",
      answer:
        "We accept all major credit/debit cards, bank transfers, and cash payments. We also offer convenient package deals with discounted rates when you book multiple lessons in advance.",
      category: "Payment",
    },
    {
      question: "Do you provide the car for the driving test?",
      answer:
        "Yes, we provide the car for your driving test. Our vehicles are dual-controlled, well-maintained, and fully insured for test purposes. You'll also have a lesson right before your test to warm up and calm any nerves.",
      category: "Testing",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We provide driving lessons throughout the metropolitan area and surrounding suburbs. Our instructors are familiar with all local test routes and can provide specialized training for the specific test center where you'll be taking your exam.",
      category: "Location",
    },
    {
      question: "How do I book my first lesson?",
      answer:
        "Booking your first lesson is easy! Simply click the 'Book Lessons' button at the top of the page, select your preferred date and time, and complete the booking form. Alternatively, you can call us directly to schedule your lesson with one of our friendly staff members.",
      category: "Booking",
    },
    {
      question: "What if I need to cancel or reschedule a lesson?",
      answer:
        "We understand that plans can change. We require at least 24 hours' notice for cancellations or rescheduling to avoid any charges. You can easily manage your bookings through your student portal or by contacting your instructor directly.",
      category: "Booking",
    },
    {
      question: "Do you offer intensive driving courses?",
      answer:
        "Yes, we offer intensive driving courses designed to help you pass your test in a shorter timeframe. These courses typically involve multiple lessons per week and are ideal for those with a deadline or who prefer to learn in a concentrated period.",
      category: "Lessons",
    },
    {
      question: "Are your instructors certified and experienced?",
      answer:
        "All our instructors are fully certified, licensed, and have extensive experience teaching drivers of all skill levels. They undergo regular training to stay updated with the latest driving techniques and test requirements.",
      category: "Instructors",
    },
  ],
  className = "",
}: FAQSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

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
      className={`py-16 bg-gradient-to-b from-white to-blue-50 ${className}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center mb-3 bg-blue-100 px-4 py-2 rounded-full text-sm font-medium text-blue-700">
            <HelpCircle className="h-4 w-4 mr-2" />
            Support
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Search and filter */}
        <motion.div
          className="max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search for answers..."
              className="pl-10 py-3 bg-white shadow-sm border-gray-200 focus:ring-blue-500 focus:border-blue-500 rounded-lg w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            <Button
              variant={!activeCategory ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(null)}
              className="rounded-full"
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filteredFaqs.length > 0 ? (
            <Accordion
              type="single"
              collapsible
              className="bg-white rounded-lg shadow-md divide-y divide-gray-100"
            >
              {filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={"overflow-hidden"}
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-base font-medium group transition-all">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span>{faq.question}</span>
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 0 }}
                        exit={{ rotate: 180 }}
                        className="text-blue-500 flex-shrink-0 ml-2"
                      >
                        <ChevronDown className="h-5 w-5 group-data-[state=open]:hidden" />
                        <ChevronUp className="h-5 w-5 hidden group-data-[state=open]:block" />
                      </motion.div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 animate-in fade-in-50 duration-300">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                      {faq.category && (
                        <span className="inline-block mt-2 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {faq.category}
                        </span>
                      )}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <motion.div
              className="text-center py-8 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-600 mb-4">
                No results found for "{searchTerm}"
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setShowContactForm(true);
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Ask us directly
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Contact form or additional help */}
        <AnimatePresence>
          {showContactForm && (
            <motion.div
              className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md border border-blue-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Ask Your Question
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Close
                </Button>
              </div>
              <div className="space-y-4">
                <Input placeholder="Your name" className="w-full" />
                <Input
                  placeholder="Your email"
                  type="email"
                  className="w-full"
                />
                <textarea
                  placeholder="Your question"
                  className="w-full min-h-[100px] p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Submit Question
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600">Still have questions?</p>
          <motion.button
            onClick={() => setShowContactForm(true)}
            className="inline-flex items-center mt-2 text-blue-600 font-medium hover:text-blue-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact our support team
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
