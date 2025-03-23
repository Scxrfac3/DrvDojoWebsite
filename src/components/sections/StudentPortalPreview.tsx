import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import {
  Calendar,
  Clock,
  BookOpen,
  Award,
  CheckCircle,
  BarChart,
} from "lucide-react";

interface StudentPortalPreviewProps {
  title?: string;
  description?: string;
  defaultTab?: string;
}

const StudentPortalPreview = ({
  title = "Student Portal",
  description = "Track your progress, schedule lessons, and access learning materials all in one place.",
  defaultTab = "dashboard",
}: StudentPortalPreviewProps) => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white opacity-70"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-sm font-medium">student.drivedojo.com</div>
              <div className="w-6"></div>
            </div>
          </div>

          <Tabs defaultValue={defaultTab} className="w-full">
            <div className="border-b border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center px-6 py-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    DD
                  </div>
                  <span className="font-semibold text-gray-800">
                    Drive Dojo Portal
                  </span>
                </div>
                <TabsList className="grid grid-cols-3 w-auto">
                  <TabsTrigger value="dashboard" className="px-4">
                    <BarChart className="w-4 h-4 mr-2" />
                    Dashboard
                  </TabsTrigger>
                  <TabsTrigger value="lessons" className="px-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    Lessons
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="px-4">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Resources
                  </TabsTrigger>
                </TabsList>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=student"
                      alt="Student avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <TabsContent value="dashboard" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">75%</div>
                    <Progress value={75} className="h-2 mt-2" />
                    <CardDescription className="mt-2 text-xs">
                      15 of 20 lessons completed
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Next Lesson
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-semibold">Highway Driving</div>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Tomorrow, 2:00 PM</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Theory Test
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-semibold">
                      Practice Test Score
                    </div>
                    <div className="flex items-center mt-2 text-sm text-green-600">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      <span>42/50 - Passing</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Skill Progress</CardTitle>
                  <CardDescription>
                    Track your driving skills development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Parallel Parking</span>
                        <span>Good</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Highway Merging</span>
                        <span>Needs Practice</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>City Driving</span>
                        <span>Excellent</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Night Driving</span>
                        <span>Good</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View Detailed Report
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="lessons" className="p-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Lessons</CardTitle>
                  <CardDescription>
                    Schedule and manage your driving lessons
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Highway Driving</h4>
                          <p className="text-sm text-gray-500">
                            Tomorrow, 2:00 PM - 4:00 PM
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-100 p-2 rounded-full">
                          <Calendar className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Night Driving</h4>
                          <p className="text-sm text-gray-500">
                            Friday, 7:00 PM - 9:00 PM
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-100 p-2 rounded-full">
                          <Calendar className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Advanced Maneuvers</h4>
                          <p className="text-sm text-gray-500">
                            Next Tuesday, 10:00 AM - 12:00 PM
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View All Lessons</Button>
                  <Button>Book New Lesson</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="p-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Resources</CardTitle>
                  <CardDescription>
                    Study materials to help you prepare for your tests
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <BookOpen className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Theory Test Handbook</h4>
                          <p className="text-sm text-gray-500">
                            Complete guide to passing your theory test
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Award className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Practice Tests</h4>
                          <p className="text-sm text-gray-500">
                            Multiple choice questions with answers
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Start
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="bg-amber-100 p-2 rounded-full">
                          <Clock className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">
                            Hazard Perception Videos
                          </h4>
                          <p className="text-sm text-gray-500">
                            Interactive videos to test your awareness
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Watch
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Browse All Resources
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Sign In to Student Portal
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            New student?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Create an account
            </a>{" "}
            after booking your first lesson
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentPortalPreview;
