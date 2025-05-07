import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  CheckCircle as CheckCircleIcon,
  Clock,
  Users,
  GraduationCap,
  Star,
  Lightbulb,
} from "lucide-react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DualControlInstallationDetails from "../sections/DualControlInstallationDetails";

interface ServiceDetailsProps {
  service: any;
  onClose: () => void;
  triggerConfetti: () => void;
}

// Service Details Component
const ServiceDetails = ({
  service,
  onClose,
  triggerConfetti,
}: ServiceDetailsProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  // If the service is Dual Control Installation, render the DualControlInstallationDetails component
  if (service.id === "dual-control") {
    return <DualControlInstallationDetails />;
  }

  return (
    <motion.div
      className="min-h-screen w-full py-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.button
          onClick={onClose}
          className="flex items-center text-white mb-6 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-slate-700/50 transition-colors"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="mr-2 h-5 w-5" />
          Back to all services
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left column - Image and quick info */}
          <div className="lg:col-span-2">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center mb-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${service.colorClass}`}
                  >
                    {service.icon}
                  </div>
                  <h1 className="text-2xl font-bold text-white">
                    {service.title}
                  </h1>
                </div>
                <div className="flex items-center text-white/90 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="mr-4">{service.duration}</span>
                  <Users className="h-4 w-4 mr-1" />
                  <span>{service.students}+ students</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-3xl font-bold text-white">
                  {service.price}
                </div>
                <div className="text-lg text-white/70">{service.priceUnit}</div>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group relative overflow-hidden"
                  onClick={() => {
                    triggerConfetti();
                    window.location.href = "/booking";
                  }}
                >
                  Book This Course
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.4 }}
                    style={{ opacity: 0.2 }}
                  />
                </Button>
              </motion.div>

              <div className="mt-4 text-center">
                <p className="text-white/70 text-sm">No payment required now</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                What's included
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right column - Details */}
          <div className="lg:col-span-3">
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Tabs
                defaultValue="overview"
                className="w-full"
                onValueChange={setActiveTab}
              >
                <TabsList className="grid w-full grid-cols-3 bg-slate-800/80 p-1 rounded-t-xl">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="curriculum"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg"
                  >
                    Curriculum
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg"
                  >
                    Reviews
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    About this course
                  </h2>
                  <div className="text-white/90 space-y-4">
                    {service.description.map(
                      (paragraph: string, index: number) => (
                        <p key={index}>{paragraph}</p>
                      ),
                    )}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Learning outcomes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.outcomes.map(
                        (outcome: string, index: number) => (
                          <div key={index} className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-white/90">{outcome}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Who this course is for
                    </h3>
                    <div className="space-y-3">
                      {service.audience.map((item: string, index: number) => (
                        <div key={index} className="flex items-start">
                          <Users className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-white/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="curriculum" className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Course Curriculum
                  </h2>
                  <div className="space-y-4">
                    {service.curriculum.map((module: any, index: number) => (
                      <motion.div
                        key={index}
                        className="bg-slate-700/50 rounded-lg p-4 border border-slate-600"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h3 className="text-lg font-bold text-white mb-2">
                          {module.title}
                        </h3>
                        <div className="text-white/70 text-sm mb-3">
                          {module.duration} • {module.lessons} lessons
                        </div>
                        <ul className="space-y-2">
                          {module.topics.map((topic: string, idx: number) => (
                            <li key={idx} className="flex items-start">
                              <GraduationCap className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-1" />
                              <span className="text-white/90">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">
                      Student Reviews
                    </h2>
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-white mr-2">
                        {service.rating}
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(service.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {service.reviews.map((review: any, index: number) => (
                      <motion.div
                        key={index}
                        className="bg-slate-700/50 rounded-lg p-4 border border-slate-600"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <img
                              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.name}`}
                              alt={review.name}
                              className="w-10 h-10 rounded-full mr-3"
                            />
                            <div>
                              <div className="font-bold text-white">
                                {review.name}
                              </div>
                              <div className="text-white/70 text-sm">
                                {review.date}
                              </div>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-white/90">{review.comment}</p>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>

            <motion.div
              className="mt-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-800/30 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 text-yellow-400 mr-2" />
                <h3 className="text-xl font-bold text-white">
                  Not sure if this is right for you?
                </h3>
              </div>
              <p className="text-white/90 mb-4">
                Our instructors can help you choose the perfect course based on
                your experience level and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-blue-700 hover:bg-gray-100"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Personalized Advice
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => {
                    triggerConfetti();
                    window.location.href = "/booking";
                  }}
                >
                  Book a Trial Lesson
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetails;
