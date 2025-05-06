import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowRight,
  Award,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

const IntensiveCourseDetails = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center mb-3 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="h-4 w-4 mr-2" />
            Fast-Track Your Learning
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Intensive Driving Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn to drive in as little as 1-6 days with our comprehensive
            intensive driving courses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              What Are Intensive Courses?
            </h3>
            <p className="text-gray-600 mb-4">
              An intensive (or crash course) gives you the opportunity to learn
              to drive in a very short period of time. Not all students will
              need the same course; some may have already taken lessons with a
              driving instructor or practiced with a family member, others will
              be at the start of their learning and should take a longer course.
            </p>
            <p className="text-gray-600 mb-4">
              Our course advisors will willingly give advice on the best course
              for you based on your experience level and learning goals.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                {
                  icon: <Clock className="h-5 w-5 text-blue-500" />,
                  text: "Courses from 1-6 days",
                },
                {
                  icon: <Shield className="h-5 w-5 text-blue-500" />,
                  text: "Test pass guarantee available",
                },
                {
                  icon: <Car className="h-5 w-5 text-blue-500" />,
                  text: "Manual & automatic options",
                },
                {
                  icon: <Award className="h-5 w-5 text-blue-500" />,
                  text: "DVSA approved instructors",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-blue-50 px-4 py-2 rounded-full"
                >
                  {item.icon}
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Guarantee Test Pass Scheme
            </h3>
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg mb-4">
              <p className="text-gray-700 italic">
                "A Guaranteed Test Pass Scheme acts as insurance; the course is
                exactly the same in content except that should you not pass your
                driving test at the end of your course, we will give you a one
                day course on the day of your retest at no extra cost to
                yourself other than the retest fee."
              </p>
            </div>
            <p className="text-gray-600 mb-4">
              This continues until you pass or you have had three extra days'
              training, but the whole course must be completed within twelve
              months of your original course booking date.
            </p>
            <ul className="space-y-2">
              {[
                "Available for 5 and 6 day courses",
                "Includes up to three extra days of training",
                "Only pay for your retest fee",
                "Complete peace of mind",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            How It Works
          </h3>
          <p className="text-gray-600 mb-6 text-center max-w-3xl mx-auto">
            Choosing the right course can be confusing. To give you an
            approximate idea of which course would be most suitable for you,
            please refer to the following guide:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                days: "1 Day",
                title: "Refresher Course",
                description:
                  "For someone who was not successful on test and requires a refresher or confidence training.",
                color: "from-blue-500 to-blue-600",
              },
              {
                days: "2-3 Days",
                title: "Near Test Standard",
                description:
                  "For someone with reasonable car control who needs to practice road craft and polish up maneuvers.",
                color: "from-purple-500 to-purple-600",
              },
              {
                days: "4-5 Days",
                title: "Some Experience",
                description:
                  "For a new driver with limited driving experience, possibly already had 10 lessons or more.",
                color: "from-pink-500 to-pink-600",
              },
              {
                days: "6 Days",
                title: "Complete Beginner",
                description:
                  "For a new driver with less than 10 previous lessons or no experience at all.",
                color: "from-amber-500 to-amber-600",
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div
                  className={`bg-gradient-to-r ${course.color} text-white p-4 text-center`}
                >
                  <h4 className="font-bold text-lg">{course.days}</h4>
                  <p className="text-sm text-white/90">{course.title}</p>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm italic">
              This information is based on an average pupil and should only be
              used as a guide. If you would like more information, please
              contact our course advisors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntensiveCourseDetails;
