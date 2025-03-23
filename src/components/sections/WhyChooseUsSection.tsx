import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Clock, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description = "" }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full bg-white border-none shadow-md hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Certified Instructors",
      description:
        "All our instructors are fully certified with years of teaching experience.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "High Pass Rate",
      description:
        "We pride ourselves on a 95% first-time pass rate, well above the national average.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description:
        "Book lessons at times that work for you, including evenings and weekends.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalized Learning",
      description:
        "Tailored instruction based on your learning style and progress.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Modern Vehicles",
      description:
        "Learn in our fleet of well-maintained, dual-control vehicles with the latest safety features.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Comprehensive Curriculum",
      description:
        "From basics to advanced maneuvers, our curriculum covers everything you need to know.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-200 rounded-full opacity-20 blur-3xl -ml-32 -mb-32"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Drive Dojo?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the highest quality driving education
            with a focus on safety, confidence, and success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="/about"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            Learn more about our approach
            <svg
              className="ml-2 w-4 h-4"
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
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
