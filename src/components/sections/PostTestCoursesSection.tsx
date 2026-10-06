import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Award, RefreshCw } from "lucide-react";

/**
 * Shared Pass Plus + Refresher Lessons cards.
 * Used on the /services page and every /driving-lessons/* location page
 * so learners see the post-test options everywhere.
 */
const PostTestCoursesSection = () => {
  return (
    <section className="py-16 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center mb-3 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium text-primary">
            <Award className="h-4 w-4 mr-2" />
            Already passed? Keep improving
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            Post-Test Courses in East London
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passed your test? Take it further with Pass Plus, or rebuild your confidence with refresher lessons — both in our automatic Mercedes A-Class.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pass Plus */}
          <motion.div
            className="bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.08] overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white">Pass Plus Course</h3>
              </div>
              <p className="text-sm text-gray-400 mb-3">Up to 30% off insurance · no test at the end</p>
              <div className="mb-2">
                <span className="text-3xl font-black text-white">£250</span>
                <span className="text-sm text-gray-400 ml-2">/6 hours</span>
              </div>
              <ul className="space-y-2 mb-5">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">Motorway, night & all-weather driving</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">Automatic Mercedes A-Class</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">Klarna Pay in 3</span></li>
              </ul>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="/pass-plus"
                  className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-bold rounded-xl transition-all"
                >
                  Book Pass Plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Refresher */}
          <motion.div
            className="bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.08] overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white">Refresher Lessons</h3>
              </div>
              <p className="text-sm text-gray-400 mb-3">Regain your confidence behind the wheel</p>
              <div className="mb-2">
                <span className="text-3xl font-black text-white">£45</span>
                <span className="text-sm text-gray-400 ml-2">/hour · min 2 hours</span>
              </div>
              <ul className="space-y-2 mb-5">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">Motorway, night & city practice</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">Automatic Mercedes A-Class</span></li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-300">DVSA-approved instructor</span></li>
              </ul>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="/refresher-lessons"
                  className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all"
                >
                  Find Out More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PostTestCoursesSection;