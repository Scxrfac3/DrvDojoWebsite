import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import SEO from "@/components/ui/SEO";
import { MapPin, BookOpen, Car, Shield, Award, ArrowRight } from "lucide-react";

const SitemapPage = () => {
  return (
    <>
      <SEO
        title="Sitemap | Drive Dojo Driving School"
        description="Complete sitemap for Drive Dojo Driving School. Find driving lessons in all East London locations, blog articles, test centre guides, and more."
        canonical="https://drivedojodrivingschool.com/sitemap"
      />
      <div className="min-h-screen bg-[#0d0d0d] text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        <Navbar />

        <main className="pt-[120px] pb-20 relative z-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500">
                  Sitemap
                </span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Complete page listing for Drive Dojo Driving School. All pages use standard
                anchor tags for search engine crawling.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Main Pages */}
              <motion.div
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h2 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Main Pages
                </h2>
                <ul className="space-y-2">
                  {[
                    { name: "Home", path: "/" },
                    { name: "Services & Pricing", path: "/services" },
                    { name: "Automatic Driving Lessons", path: "/automatic-driving-lessons" },
                    { name: "Intensive Driving Courses (Ilford)", path: "/intensive-driving-courses-ilford" },
                    { name: "East London Automatic", path: "/east-london-automatic" },
                    { name: "About Us", path: "/about" },
                    { name: "Contact Us", path: "/contact" },
                    { name: "Blog", path: "/blog" },
                    { name: "Terms of Service", path: "/terms" },
                    { name: "Sitemap", path: "/sitemap" },
                  ].map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-1.5"
                      >
                        <ArrowRight className="h-3 w-3 flex-shrink-0" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Location Pages */}
              <motion.div
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h2 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location Pages
                </h2>
                <ul className="space-y-2">
                  {[
                    { name: "Ilford (IG1-IG6)", path: "/driving-lessons/ilford" },
                    { name: "Goodmayes (IG3, IG4)", path: "/driving-lessons/goodmayes" },
                    { name: "Barking (IG11)", path: "/driving-lessons/barking" },
                    { name: "Romford (RM1-RM7)", path: "/driving-lessons/romford" },
                    { name: "East Ham (E6)", path: "/driving-lessons/east-ham" },
                    { name: "Forest Gate (E7)", path: "/driving-lessons/forest-gate" },
                    { name: "Canning Town (E16)", path: "/driving-lessons/canning-town" },
                    { name: "Docklands (E14)", path: "/driving-lessons/docklands" },
                    { name: "Walthamstow (E10, E11, E17)", path: "/driving-lessons/walthamstow" },
                    { name: "Isle of Dogs (E14)", path: "/driving-lessons/isle-of-dogs" },
                  ].map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-1.5"
                      >
                        <ArrowRight className="h-3 w-3 flex-shrink-0" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Booking Pages */}
              <motion.div
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h2 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Booking Pages
                </h2>
                <ul className="space-y-2">
                  {[
                    { name: "Pay As You Go", path: "/booking/payg" },
                    { name: "6-Hour Block", path: "/booking/6hour" },
                    { name: "10-Hour Block", path: "/booking/10hour" },
                    { name: "20-Hour Block", path: "/booking/20hour" },
                    { name: "Intensive Course", path: "/booking/intensive" },
                    { name: "12-Hour Intensive", path: "/booking/intensive-12hr" },
                    { name: "16-Hour Intensive", path: "/booking/intensive-16hr" },
                    { name: "20-Hour Intensive", path: "/booking/intensive-20hr" },
                    { name: "25-Hour Intensive", path: "/booking/intensive-25hr" },
                    { name: "30-Hour Intensive (Popular)", path: "/booking/intensive-30hr" },
                    { name: "35-Hour Intensive", path: "/booking/intensive-35hr" },
                    { name: "40-Hour Intensive", path: "/booking/intensive-40hr" },
                    { name: "45-Hour Intensive", path: "/booking/intensive-45hr" },
                    { name: "Mock Test", path: "/booking/mocktest" },
                    { name: "Test Rental", path: "/booking/testrental" },
                  ].map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-1.5"
                      >
                        <ArrowRight className="h-3 w-3 flex-shrink-0" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Free Resources */}
              <motion.div
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h2 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Free Resources
                </h2>
                <ul className="space-y-2">
                  {[
                    { name: "Test Centre Explorer", path: "/test-centres" },
                    { name: "Show Me Tell Me", path: "/practical-test-prep/show-me-tell-me" },
                  ].map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-1.5"
                      >
                        <ArrowRight className="h-3 w-3 flex-shrink-0" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h3 className="text-sm font-bold mt-6 mb-3 text-gray-300">Test Centres</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Goodmayes Test Centre", path: "/driving-test-centres/goodmayes" },
                    { name: "Wood Green Test Centre", path: "/driving-test-centres/wood-green" },
                    { name: "Barking Test Centre", path: "/driving-test-centres/barking" },
                    { name: "Hornchurch Test Centre", path: "/driving-test-centres/hornchurch" },
                    { name: "Chingford Test Centre", path: "/driving-test-centres/chingford" },
                    { name: "Wanstead Test Centre", path: "/driving-test-centres/wanstead" },
                  ].map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-1.5"
                      >
                        <ArrowRight className="h-3 w-3 flex-shrink-0" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Learn to Drive */}
              <motion.div
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <h2 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Learn to Drive
                </h2>
                <h3 className="text-sm font-bold mb-2 text-gray-300">Driving Skills</h3>
                <ul className="space-y-2 mb-4">
                  {[
                    { name: "Roundabouts", path: "/learn-to-drive/skills/roundabouts" },
                    { name: "Junctions", path: "/learn-to-drive/skills/junctions" },
                    { name: "Emergency Stop", path: "/learn-to-drive/skills/emergency-stop" },
                  ].map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-1.5"
                      >
                        <ArrowRight className="h-3 w-3 flex-shrink-0" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <h3 className="text-sm font-bold mb-2 text-gray-300">Manoeuvres</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Parallel Parking", path: "/learn-to-drive/driving-manoeuvres/parallel-parking" },
                  ].map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-1.5"
                      >
                        <ArrowRight className="h-3 w-3 flex-shrink-0" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h3 className="text-sm font-bold mt-6 mb-3 text-gray-300">Specialty Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "International Licence Conversion", path: "/international-licence-conversion" },
                    { name: "Female Driving Instructors", path: "/female-driving-instructors" },
                    { name: "Refresher Driving Lessons", path: "/refresher-driving-lessons" },
                    { name: "Pass Plus Courses", path: "/pass-plus-courses" },
                    { name: "Dual Control Installation", path: "/dual-control-installation" },
                  ].map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-1.5"
                      >
                        <ArrowRight className="h-3 w-3 flex-shrink-0" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Blog Articles */}
              <motion.div
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <h2 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Blog Articles
                </h2>
                <ul className="space-y-2">
                  {[
                    { name: "How Many Driving Lessons Do You Need?", path: "/blog/how-many-driving-lessons-do-you-need" },
                    { name: "Intensive vs Standard Courses", path: "/blog/intensive-vs-standard-driving-courses" },
                    { name: "Hazard Perception Test Tips", path: "/blog/hazard-perception-test-tips" },
                    { name: "Get Over Failing Your Driving Test", path: "/blog/get-over-failing-your-driving-test" },
                    { name: "Top 5 Qualities of a Good Instructor", path: "/blog/top-5-qualities-london-driving-instructor-goodmayes" },
                    { name: "Why Now is the Perfect Time to Become an Instructor", path: "/blog/why-now-is-perfect-time-to-become-driving-instructor" },
                    { name: "How Many Lessons to Pass?", path: "/blog/how-many-driving-lessons-to-pass" },
                    { name: "How Much Do Lessons Cost?", path: "/blog/how-much-driving-lessons-cost" },
                    { name: "How Many Lessons to Pass the Test?", path: "/blog/how-many-driving-lessons-to-pass-test" },
                    { name: "Why Are Lessons So Expensive?", path: "/blog/why-are-driving-lessons-so-expensive" },
                    { name: "Which Type of Lessons?", path: "/blog/which-type-of-driving-lessons" },
                    { name: "Where to Find a Good Instructor", path: "/blog/where-to-find-good-driving-instructor" },
                    { name: "Pass at Goodmayes: Tips", path: "/blog/pass-driving-test-goodmayes-tips" },
                    { name: "Ilford Driving Lessons Guide 2025", path: "/blog/driving-lessons-ilford-guide-2025" },
                    { name: "Cost of Lessons East London 2025", path: "/blog/driving-lessons-cost-east-london-2025" },
                    { name: "Failed at Goodmayes?", path: "/blog/failed-driving-test-goodmayes-what-to-do" },
                    { name: "Intensive Course Ilford Guide", path: "/blog/intensive-driving-course-ilford-guide" },
                    { name: "East London Test Centres Compared", path: "/blog/east-london-test-centres-compared" },
                    { name: "Mock Driving Test East London", path: "/blog/mock-driving-test-east-london" },
                    { name: "Lessons for Nervous Drivers", path: "/blog/driving-lessons-nervous-drivers-east-london" },
                    { name: "Stratford E15 Driving Lessons", path: "/blog/driving-lessons-stratford-e15" },
                    { name: "Romford RM7 Driving Lessons", path: "/blog/driving-lessons-romford-rm7" },
                    { name: "Barking IG11 Driving Lessons", path: "/blog/driving-lessons-barking-ig11" },
                    { name: "Canning Town E16 Driving Lessons", path: "/blog/driving-lessons-canning-town-e16" },
                    { name: "East Ham E6 Driving Lessons", path: "/blog/driving-lessons-east-ham-e6" },
                    { name: "Walthamstow E10 Driving Lessons", path: "/blog/driving-lessons-walthamstow-e10" },
                    { name: "Forest Gate E7 Driving Lessons", path: "/blog/driving-lessons-forest-gate-e7" },
                    { name: "Dagenham RM9 Driving Lessons", path: "/blog/driving-lessons-dagenham-rm9" },
                    { name: "Chadwell Heath RM6 Driving Lessons", path: "/blog/driving-lessons-chadwell-heath-rm6" },
                    { name: "Isle of Dogs E14 Driving Lessons", path: "/blog/driving-lessons-isle-of-dogs-e14" },
                    { name: "How Long to Pass in London?", path: "/blog/how-long-to-pass-driving-test-london" },
                    { name: "Goodmayes Pass Rate", path: "/blog/goodmayes-driving-test-pass-rate" },
                    { name: "Choose an Instructor in East London", path: "/blog/choose-driving-instructor-east-london" },
                    { name: "First Lesson: What to Expect", path: "/blog/first-driving-lesson-what-to-expect" },
                    { name: "Learn to Drive in 2 Weeks Intensive", path: "/blog/learn-to-drive-two-weeks-intensive" },
                    { name: "Are Automatic Lessons Easier?", path: "/blog/are-automatic-driving-lessons-easier" },
                    { name: "Auto vs Manual East London", path: "/blog/automatic-vs-manual-east-london" },
                    { name: "Overcome Driving Anxiety", path: "/blog/overcome-driving-anxiety-east-london" },
                    { name: "Common Reasons to Fail UK Test", path: "/blog/common-reasons-fail-driving-test-uk" },
                    { name: "Theory Test Revision Tips 2025", path: "/blog/theory-test-revision-tips-2025" },
                    { name: "Pass Hazard Perception 2025", path: "/blog/pass-hazard-perception-test-2025" },
                    { name: "Book DVSA Test East London", path: "/blog/book-dvsa-driving-test-east-london" },
                    { name: "Top Instructor Near Me Canary Wharf", path: "/blog/top-driving-instructor-near-me-canary-wharf" },
                    { name: "Complete Guide Teenage Lessons London 2026", path: "/blog/complete-guide-teenage-driving-lessons-london-2026" },
                    { name: "How to Avoid Losing Your Licence UK", path: "/blog/how-to-avoid-losing-driving-licence-uk-east-london" },
                  ].map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-primary transition-colors text-xs flex items-center gap-1.5"
                      >
                        <ArrowRight className="h-2.5 w-2.5 flex-shrink-0" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SitemapPage;