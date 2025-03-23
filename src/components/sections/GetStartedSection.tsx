import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle, Calendar, CreditCard } from "lucide-react";

interface GetStartedSectionProps {
  steps?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  ctaText?: string;
  ctaLink?: string;
}

const GetStartedSection = ({
  steps = [
    {
      icon: <Calendar className="h-10 w-10 text-blue-500" />,
      title: "Book Your First Lesson",
      description:
        "Choose a convenient time slot that works for your schedule.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-green-500" />,
      title: "Meet Your Instructor",
      description:
        "Get paired with a professional, friendly instructor who'll guide your learning journey.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-purple-500" />,
      title: "Start Learning",
      description:
        "Begin your driving lessons with confidence in our modern, dual-control vehicles.",
    },
  ],
  ctaText = "Book Your First Lesson",
  ctaLink = "/booking",
}: GetStartedSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            How to Get Started
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting on the road is easier than you think. Follow these simple
            steps to begin your driving journey with Drive Dojo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="mb-4 p-3 rounded-full bg-gray-50">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 flex-grow">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg shadow-lg"
            asChild
          >
            <motion.a
              href={ctaLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;
