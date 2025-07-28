import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Clock,
  Users,
  CheckCircle,
  Zap,
  Star,
  BadgeCheck,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
}

const FeatureCard = ({
  icon,
  title,
  description,
  color,
  index,
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30",
      green:
        "bg-green-500/20 text-green-300 border-green-400/30 hover:bg-green-500/30",
      purple:
        "bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30",
      amber:
        "bg-amber-500/20 text-amber-300 border-amber-400/30 hover:bg-amber-500/30",
      indigo:
        "bg-indigo-500/20 text-indigo-300 border-indigo-400/30 hover:bg-indigo-500/30",
      pink: "bg-pink-500/20 text-pink-300 border-pink-400/30 hover:bg-pink-500/30",
    };
    return colorMap[color] || colorMap.blue;
  };

  const colorClasses = getColorClasses(color);
  const iconColorClass = `text-${color}-300`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 },
      }}
    >
      <Card
        className={`h-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-${color}-400/50 transition-all duration-300 group`}
      >
        <CardContent className="p-6 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          <div
            className={`mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full ${colorClasses.split(" ")[0]} transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
          >
            <motion.div
              animate={isHovered ? { rotate: [0, -5, 5, -5, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-purple-100">{description}</p>

          <motion.div
            className="w-full h-1 mt-4 bg-white/20 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={`h-full bg-gradient-to-r from-${color}-400 to-${color}-600`}
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  index: number;
}

const StatCard = ({ value, label, icon, index }: StatCardProps) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      <div className="p-6 text-center relative z-10">
        <motion.div
          className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
        <motion.div
          className="text-3xl font-bold text-white mb-1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
          viewport={{ once: true }}
        >
          {value}
        </motion.div>
        <p className="text-purple-200">{label}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Certified Instructors",
      description:
        "All our instructors are DVSA-approved with extensive teaching experience in London's diverse road conditions.",
      color: "blue",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "High Pass Rate",
      description:
        "We maintain a 95% first-time pass rate across London test centers, significantly above the national average.",
      color: "green",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description:
        "Book lessons at times that work for you throughout London, including evenings and weekends to fit your busy lifestyle.",
      color: "purple",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalized Learning",
      description:
        "We adapt our teaching methods to your individual learning style, ensuring you progress confidently at your own pace.",
      color: "amber",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Modern Vehicles",
      description:
        "Learn in our fleet of well-maintained, dual-control vehicles equipped with the latest safety features for London roads.",
      color: "indigo",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "London Test Routes",
      description:
        "Practice on actual test routes in your local London area, giving you the familiarity and confidence for test day.",
      color: "pink",
    },
  ];

  const stats = [
    {
      value: "98%",
      label: "Pass Rate",
      icon: <Star className="h-6 w-6" />,
    },
    {
      value: "10,000+",
      label: "London Students",
      icon: <Users className="h-6 w-6" />,
    },
    {
      value: "4.9/5",
      label: "Student Rating",
      icon: <Award className="h-6 w-6" />,
    },
    {
      value: "12+",
      label: "Years Experience",
      icon: <BadgeCheck className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
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

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center mb-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-pink-300 border border-white/20 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BadgeCheck className="h-4 w-4 mr-2" />
            London's Premier Driving School
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
            Why Choose Drive Dojo?
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            We're committed to providing the highest quality driving education
            in London with a focus on safety, confidence, and success.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              index={index}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              index={index}
            />
          ))}
        </div>

        {/* Testimonial Highlight */}
        <motion.div
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 text-white shadow-xl mb-12 relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <motion.div
                className="w-24 h-24 rounded-full border-4 border-white/30 overflow-hidden shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=instructor"
                  alt="Lead Instructor"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <p className="text-xl mb-4">
                We're committed to providing the highest quality driving education
                in London with a focus on safety, confidence, and success.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/booking"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium rounded-full text-lg shadow-lg border-2 border-white/20"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your First Lesson
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="ml-2"
            >
              <svg
                className="w-5 h-5"
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
            </motion.div>
          </motion.a>

          <motion.p
            className="mt-4 text-sm text-purple-200 opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Join over 10,000 successful London drivers who started their journey
            with Drive Dojo
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
