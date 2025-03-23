import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CalendarIcon,
  BookOpenIcon,
  GraduationCapIcon,
  UserIcon,
  ClockIcon,
  CheckCircleIcon,
  CarIcon,
  MapIcon,
} from "lucide-react";

// Components for the portal
const Navbar = () => {
  return (
    <nav className="bg-slate-800/50 backdrop-blur-md border-b border-slate-700 py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <CarIcon className="h-6 w-6 text-blue-400" />
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Drive Dojo
        </span>
      </div>
      <div className="flex items-center space-x-6">
        <Button
          variant="ghost"
          className="text-slate-300 hover:text-white hover:bg-slate-700"
        >
          Dashboard
        </Button>
        <Button
          variant="ghost"
          className="text-slate-300 hover:text-white hover:bg-slate-700"
        >
          Lessons
        </Button>
        <Button
          variant="ghost"
          className="text-slate-300 hover:text-white hover:bg-slate-700"
        >
          Resources
        </Button>
        <Avatar className="h-8 w-8 cursor-pointer">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=student1" />
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

const BackgroundElements = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 bg-blue-500/10 w-96 h-96 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 bg-purple-500/10 w-96 h-96 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-500/5 w-[800px] h-[800px] rounded-full filter blur-3xl"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557683304-673a23048d34?w=800&q=80')] bg-fixed opacity-5 mix-blend-overlay"></div>
    </>
  );
};

const DashboardTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-200 flex items-center">
              <ClockIcon className="h-5 w-5 mr-2 text-blue-400" />
              Next Lesson
            </CardTitle>
            <CardDescription className="text-slate-400">
              Upcoming scheduled lesson
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              Tomorrow, 2:00 PM
            </div>
            <div className="text-slate-300 mt-1">Parallel Parking Practice</div>
            <div className="flex items-center mt-2 text-slate-400">
              <MapIcon className="h-4 w-4 mr-1" />
              <span>Downtown Practice Area</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              View Details
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-200 flex items-center">
              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-400" />
              Progress
            </CardTitle>
            <CardDescription className="text-slate-400">
              Your learning journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Overall Completion</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="h-2 bg-slate-700" />
              </div>
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Highway Driving</span>
                  <span>80%</span>
                </div>
                <Progress value={80} className="h-2 bg-slate-700" />
              </div>
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Parking Skills</span>
                  <span>50%</span>
                </div>
                <Progress value={50} className="h-2 bg-slate-700" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              View Full Progress
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-200 flex items-center">
              <GraduationCapIcon className="h-5 w-5 mr-2 text-purple-400" />
              Test Readiness
            </CardTitle>
            <CardDescription className="text-slate-400">
              Exam preparation status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">75% Ready</div>
            <div className="text-slate-300 mt-1">
              Estimated 3 more lessons needed
            </div>
            <div className="mt-3">
              <Progress value={75} className="h-2 bg-slate-700" />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              Practice Test
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-200">Recent Activity</CardTitle>
          <CardDescription className="text-slate-400">
            Your latest driving lessons and achievements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-500/20 p-2 rounded-full mr-4">
                <CarIcon className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-slate-200 font-medium">
                  Completed Lesson: City Driving
                </h4>
                <p className="text-slate-400 text-sm">
                  You successfully navigated downtown traffic and complex
                  intersections.
                </p>
                <p className="text-slate-500 text-xs mt-1">2 days ago</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-500/20 p-2 rounded-full mr-4">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <h4 className="text-slate-200 font-medium">
                  Skill Mastered: Lane Changing
                </h4>
                <p className="text-slate-400 text-sm">
                  Your instructor noted excellent awareness and signaling during
                  lane changes.
                </p>
                <p className="text-slate-500 text-xs mt-1">4 days ago</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-500/20 p-2 rounded-full mr-4">
                <BookOpenIcon className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-slate-200 font-medium">
                  Completed Module: Road Signs
                </h4>
                <p className="text-slate-400 text-sm">
                  You scored 95% on the road signs and signals knowledge test.
                </p>
                <p className="text-slate-500 text-xs mt-1">1 week ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const LessonsTab = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-200">Upcoming Lessons</CardTitle>
          <CardDescription className="text-slate-400">
            Your scheduled driving sessions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-700">
              <div className="flex items-center">
                <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                  <CalendarIcon className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">
                    Parallel Parking Practice
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Tomorrow, 2:00 PM - 3:30 PM
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    Instructor: Sarah Johnson
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Reschedule
                </Button>
                <Button variant="default" size="sm">
                  Confirm
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-700">
              <div className="flex items-center">
                <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                  <CalendarIcon className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">
                    Highway Driving Session
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Friday, 10:00 AM - 12:00 PM
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    Instructor: Michael Chen
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Reschedule
                </Button>
                <Button variant="default" size="sm">
                  Confirm
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-700">
              <div className="flex items-center">
                <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                  <CalendarIcon className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">
                    Night Driving Introduction
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Next Monday, 7:00 PM - 9:00 PM
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    Instructor: Sarah Johnson
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Reschedule
                </Button>
                <Button variant="default" size="sm">
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Book New Lesson</Button>
        </CardFooter>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-200">Completed Lessons</CardTitle>
          <CardDescription className="text-slate-400">
            Your past driving sessions and feedback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700">
              <div className="flex justify-between">
                <h4 className="text-slate-200 font-medium">City Driving</h4>
                <span className="text-slate-400 text-sm">2 days ago</span>
              </div>
              <p className="text-slate-400 text-sm mt-1">
                Instructor: Michael Chen
              </p>
              <div className="mt-3">
                <h5 className="text-slate-300 text-sm font-medium">
                  Instructor Feedback:
                </h5>
                <p className="text-slate-400 text-sm mt-1">
                  Good awareness of surroundings and traffic signals. Need to
                  work on maintaining consistent speed in varying traffic
                  conditions.
                </p>
              </div>
              <div className="mt-3 flex items-center">
                <span className="text-slate-300 text-sm mr-2">Rating:</span>
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <CheckCircleIcon
                      key={star}
                      className="h-4 w-4 text-green-400"
                    />
                  ))}
                  <CheckCircleIcon className="h-4 w-4 text-slate-600" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700">
              <div className="flex justify-between">
                <h4 className="text-slate-200 font-medium">
                  Parking Fundamentals
                </h4>
                <span className="text-slate-400 text-sm">1 week ago</span>
              </div>
              <p className="text-slate-400 text-sm mt-1">
                Instructor: Sarah Johnson
              </p>
              <div className="mt-3">
                <h5 className="text-slate-300 text-sm font-medium">
                  Instructor Feedback:
                </h5>
                <p className="text-slate-400 text-sm mt-1">
                  Excellent progress with perpendicular parking. Parallel
                  parking needs more practice, particularly judging distances
                  from the curb.
                </p>
              </div>
              <div className="mt-3 flex items-center">
                <span className="text-slate-300 text-sm mr-2">Rating:</span>
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <CheckCircleIcon
                      key={star}
                      className="h-4 w-4 text-green-400"
                    />
                  ))}
                  <CheckCircleIcon className="h-4 w-4 text-slate-600" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ResourcesTab = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-200">Learning Materials</CardTitle>
          <CardDescription className="text-slate-400">
            Study resources for your driving education
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700 flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-purple-500/20 p-3 rounded-full mr-4">
                  <BookOpenIcon className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">
                    Road Signs and Signals Guide
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Comprehensive visual guide to all traffic signs and signals
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                View
              </Button>
            </div>

            <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700 flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-purple-500/20 p-3 rounded-full mr-4">
                  <BookOpenIcon className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">
                    Defensive Driving Techniques
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Learn how to anticipate and respond to potential hazards
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                View
              </Button>
            </div>

            <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700 flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-purple-500/20 p-3 rounded-full mr-4">
                  <BookOpenIcon className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">
                    Parking Mastery Guide
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Step-by-step instructions for all parking scenarios
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                View
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-200">Practice Tests</CardTitle>
          <CardDescription className="text-slate-400">
            Prepare for your written and practical exams
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700 flex items-center justify-between">
              <div>
                <h4 className="text-slate-200 font-medium">
                  Written Test Simulation
                </h4>
                <p className="text-slate-400 text-sm">
                  50 questions based on the official DMV test
                </p>
                <div className="mt-2 flex items-center">
                  <span className="text-slate-300 text-sm mr-2">
                    Best Score:
                  </span>
                  <span className="text-green-400 font-medium">92%</span>
                </div>
              </div>
              <Button>Start Test</Button>
            </div>

            <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700 flex items-center justify-between">
              <div>
                <h4 className="text-slate-200 font-medium">Road Signs Quiz</h4>
                <p className="text-slate-400 text-sm">
                  Test your knowledge of essential road signs
                </p>
                <div className="mt-2 flex items-center">
                  <span className="text-slate-300 text-sm mr-2">
                    Best Score:
                  </span>
                  <span className="text-green-400 font-medium">85%</span>
                </div>
              </div>
              <Button>Start Quiz</Button>
            </div>

            <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700 flex items-center justify-between">
              <div>
                <h4 className="text-slate-200 font-medium">
                  Hazard Perception Test
                </h4>
                <p className="text-slate-400 text-sm">
                  Interactive video scenarios to test your hazard awareness
                </p>
                <div className="mt-2 flex items-center">
                  <span className="text-slate-300 text-sm mr-2">
                    Best Score:
                  </span>
                  <span className="text-yellow-400 font-medium">78%</span>
                </div>
              </div>
              <Button>Start Test</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ProfileTab = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-200">Personal Information</CardTitle>
          <CardDescription className="text-slate-400">
            Manage your account details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=student1" />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                Change Photo
              </Button>
            </div>

            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-400 block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value="Alex Johnson"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-400 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value="alex.johnson@example.com"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-400 block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value="(555) 123-4567"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-400 block mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    value="May 15, 2000"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-400 block mb-1">
                  Address
                </label>
                <input
                  type="text"
                  value="123 Main Street, Apt 4B, Cityville, ST 12345"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  readOnly
                />
              </div>
              <div className="flex justify-end">
                <Button>Edit Information</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-200">License Information</CardTitle>
          <CardDescription className="text-slate-400">
            Your driving permit details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-400 block mb-1">
                  Permit Type
                </label>
                <input
                  type="text"
                  value="Learner's Permit"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  readOnly
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-400 block mb-1">
                  Permit Number
                </label>
                <input
                  type="text"
                  value="LP-12345678"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  readOnly
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-400 block mb-1">
                  Issue Date
                </label>
                <input
                  type="text"
                  value="January 10, 2023"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  readOnly
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-400 block mb-1">
                  Expiration Date
                </label>
                <input
                  type="text"
                  value="January 10, 2024"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  readOnly
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-400 block mb-1">
                Restrictions
              </label>
              <input
                type="text"
                value="Must be accompanied by licensed driver age 21 or older"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                readOnly
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Portal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Simulate login check
  useEffect(() => {
    // In a real app, check for auth token or session
    const checkLoginStatus = () => {
      // Simulating a logged in user
      setIsLoggedIn(true);
    };

    checkLoginStatus();
  }, []);

  // Login form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  // Main portal content when logged in
  return (
    <div className="bg-slate-900 min-h-screen relative overflow-hidden">
      <BackgroundElements />
      <Navbar />

      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=student1" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Welcome back, Alex
              </h1>
              <p className="text-slate-400">Continue your driving journey</p>
            </div>
          </div>

          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-slate-700 rounded-lg p-1">
              <TabsTrigger
                value="dashboard"
                className="data-[state=active]:bg-slate-700 data-[state=active]:text-white"
              >
                Dashboard
              </TabsTrigger>
              <TabsTrigger
                value="lessons"
                className="data-[state=active]:bg-slate-700 data-[state=active]:text-white"
              >
                Lessons
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="data-[state=active]:bg-slate-700 data-[state=active]:text-white"
              >
                Resources
              </TabsTrigger>
              <TabsTrigger
                value="profile"
                className="data-[state=active]:bg-slate-700 data-[state=active]:text-white"
              >
                Profile
              </TabsTrigger>
            </TabsList>
            <div className="mt-6">
              <TabsContent value="dashboard">
                <DashboardTab />
              </TabsContent>
              <TabsContent value="lessons">
                <LessonsTab />
              </TabsContent>
              <TabsContent value="resources">
                <ResourcesTab />
              </TabsContent>
              <TabsContent value="profile">
                <ProfileTab />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Portal;
