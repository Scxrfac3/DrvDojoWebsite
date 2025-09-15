import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles, Zap, Trophy, MapPin } from "lucide-react";

interface GetStartedSectionProps {
  steps?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  ctaText?: string;
  ctaLink?: string;
  location?: string;
}

const GetStartedSection = ({
  steps = [
    {
      icon: <Zap className="h-10 w-10 text-yellow-400" />,
      title: "Choose Your Schedule",
      description:
        "Select a time that works best for you - weekends, after school, or evenings. We offer flexible scheduling to accommodate your busy life.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-purple-500" />,
      title: "Meet Your Instructor",
      description:
        "Get paired with a professional instructor who understands your learning style. Our instructors focus on building practical skills in a supportive environment.",
    },
    {
      icon: <Trophy className="h-10 w-10 text-blue-500" />,
      title: "Build Your Skills",
      description:
        "Practice in our modern, well-maintained vehicles and develop the confidence and abilities you need to become a safe, skilled driver.",
    },
  ],
  ctaText = "Start Your Journey",
  ctaLink = "/booking",
  location = "Phoenix",
}: GetStartedSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-white-subtle text-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100/50 backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [Math.random() * 100, Math.random() * -100],
              x: [Math.random() * 100, Math.random() * -100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-600">
                Drive Dojo
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-blue-600 to-orange-500">
            Start Your Driving Journey
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Getting your license with Drive Dojo is straightforward and
            efficient. Follow these three simple steps to start your journey to
            driving freedom on the London roads.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-gray-200 flex flex-col items-center text-center h-full relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-purple-100/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              <motion.div
                className="mb-4 p-4 rounded-full bg-white/80 relative z-10"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {step.icon}
              </motion.div>

              <h3 className="text-xl font-bold mb-2 text-gray-800 relative z-10">
                {step.title}
              </h3>

              <p className="text-gray-600 flex-grow relative z-10">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="h-6 w-6 text-pink-400" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg shadow-lg border-2 border-white/20"
            asChild
          >
            <motion.a
              href={ctaLink}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center font-bold"
            >
              {ctaText}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </motion.a>
          </Button>

          <motion.p
            className="mt-4 text-sm text-gray-600 opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Join over 1,000 successful {location} drivers who started their
            journey with Drive Dojo
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;
