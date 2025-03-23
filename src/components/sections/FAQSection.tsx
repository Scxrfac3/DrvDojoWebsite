import React from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  className?: string;
}

const FAQSection = ({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our driving lessons and services.",
  faqs = [
    {
      question: "How many lessons will I need to pass my test?",
      answer:
        "The number of lessons varies for each student based on their learning pace and prior experience. On average, new drivers typically need between 30-40 hours of professional instruction combined with additional practice. We'll assess your skills during your first lesson and provide a personalized recommendation.",
    },
    {
      question: "What types of payment do you accept?",
      answer:
        "We accept all major credit/debit cards, bank transfers, and cash payments. We also offer convenient package deals with discounted rates when you book multiple lessons in advance.",
    },
    {
      question: "Do you provide the car for the driving test?",
      answer:
        "Yes, we provide the car for your driving test. Our vehicles are dual-controlled, well-maintained, and fully insured for test purposes. You'll also have a lesson right before your test to warm up and calm any nerves.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We provide driving lessons throughout the metropolitan area and surrounding suburbs. Our instructors are familiar with all local test routes and can provide specialized training for the specific test center where you'll be taking your exam.",
    },
    {
      question: "How do I book my first lesson?",
      answer:
        "Booking your first lesson is easy! Simply click the 'Book Lessons' button at the top of the page, select your preferred date and time, and complete the booking form. Alternatively, you can call us directly to schedule your lesson with one of our friendly staff members.",
    },
    {
      question: "What if I need to cancel or reschedule a lesson?",
      answer:
        "We understand that plans can change. We require at least 24 hours' notice for cancellations or rescheduling to avoid any charges. You can easily manage your bookings through your student portal or by contacting your instructor directly.",
    },
  ],
  className = "",
}: FAQSectionProps) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
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

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-lg shadow-md"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={index === 0 ? "border-t" : ""}
              >
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50 text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600">Still have questions?</p>
          <motion.a
            href="/contact"
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
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
