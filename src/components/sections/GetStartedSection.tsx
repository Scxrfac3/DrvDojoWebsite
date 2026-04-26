import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, MapPin, Search, Calendar, User, Sparkles } from "lucide-react";

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
      icon: <Search className="h-10 w-10 text-orange-400" />,
      title: "Enter Your Postcode",
      description:
        "Quickly check if we cover your area for driving lessons.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-blue-400" />,
      title: "Book Your Lesson",
      description:
        "Choose a time that fits your schedule and book instantly.",
    },
    {
      icon: <User className="h-10 w-10 text-green-400" />,
      title: "Meet Your Instructor",
      description:
        "Get matched with a DVSA-approved instructor who'll guide you to success.",
    },
  ],
  ctaText = "Book Your First Lesson",
  ctaLink = "/booking",
  location = "London",
}: GetStartedSectionProps) => {
  
  // Additional steps for ADI Blueprint section
  const adiSteps = [
    {
      icon: <Sparkles className="h-10 w-10 text-yellow-400" />,
      title: "Become a Driving Instructor",
      description:
        "Use our free ADI Blueprint guide to start your journey to becoming a qualified Approved Driving Instructor.",
    },
  ];
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
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#0d0d0d] text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
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
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                East London & Essex
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">
              Start Your Journey
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Three simple steps to get you on the road to driving success with our expert instructors.
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
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col items-center text-center h-full relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              <motion.div
                className="mb-4 p-4 rounded-full bg-white/5 relative z-10"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {step.icon}
              </motion.div>

              <h3 className="text-xl font-bold mb-2 text-white relative z-10">
                {step.title}
              </h3>

              <p className="text-gray-400 flex-grow relative z-10">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* ADI Blueprint Section for aspiring driving instructors */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/30 flex items-center justify-center">
                  <Sparkles className="h-10 w-10 text-yellow-400" />
                </div>
              </motion.div>
              
              <div className="flex-grow text-center lg:text-left">
                <motion.div
                  className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="text-yellow-400 text-sm font-medium">🎓 Free Guide</span>
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                  Want to Become a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    Driving Instructor?
                  </span>
                </h3>
                
                <p className="text-gray-400 mb-6 max-w-2xl">
                  Our comprehensive ADI Blueprint guide shows you exactly how to qualify as an Approved Driving 
                  Instructor — including how to avoid the £2,279/month franchise trap, pass all 3 ADI exams, 
                  and build your own profitable driving school. Completely free.
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <a
                    href="/adi-blueprint"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Sparkles className="h-5 w-5" />
                    Get Your Free ADI Blueprint
                  </a>
                  <span className="flex items-center text-sm text-gray-500">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Free • No signup required
                  </span>
                </div>
              </div>
            </div>
          </div>
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
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl text-lg shadow-glow hover:shadow-glow-lg"
            asChild
          >
            <motion.a
              href={ctaLink}
              whileHover={{
                scale: 1.05,
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
            className="mt-4 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Join over 2,000 successful {location} drivers who passed first time with Drive Dojo
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;
