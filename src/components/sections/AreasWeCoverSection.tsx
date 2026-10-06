import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import PostcodeChecker from "../ui/PostcodeChecker";

const AREAS = [
  { name: "Ilford", path: "/driving-lessons/ilford", postcode: "IG1–IG6" },
  { name: "Goodmayes", path: "/driving-lessons/goodmayes", postcode: "IG3, IG4" },
  { name: "Barking", path: "/driving-lessons/barking", postcode: "IG11" },
  { name: "Romford", path: "/driving-lessons/romford", postcode: "RM1–RM7" },
  { name: "East Ham", path: "/driving-lessons/east-ham", postcode: "E6" },
  { name: "Forest Gate", path: "/driving-lessons/forest-gate", postcode: "E7" },
  { name: "Canning Town", path: "/driving-lessons/canning-town", postcode: "E16" },
  { name: "Docklands", path: "/driving-lessons/docklands", postcode: "E14" },
  { name: "Walthamstow", path: "/driving-lessons/walthamstow", postcode: "E10, E11, E17" },
  { name: "Isle of Dogs", path: "/driving-lessons/isle-of-dogs", postcode: "E14" },
];

/**
 * Shared "Areas We Cover" section: postcode checker + locations grid.
 * Used on the landing pages and every /driving-lessons/* location page.
 */
const AreasWeCoverSection = () => {
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
            <MapPin className="h-4 w-4 mr-2" />
            Areas We Cover
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            Serving <span className="text-primary">East London</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We pick you up from home, work or anywhere in our coverage area. Check your postcode or click your area.
          </p>
        </motion.div>

        <motion.div
          className="max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <PostcodeChecker
            onPostcodeChecked={() => {}}
            onLessonSelected={() => {}}
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {AREAS.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <Link
                to={area.path}
                className="block bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 text-center hover:border-primary/40 hover:bg-white/[0.06] transition-all hover:-translate-y-1 group"
              >
                <MapPin className="h-5 w-5 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold text-sm block group-hover:text-primary transition-colors">
                  {area.name}
                </span>
                <span className="text-gray-500 text-xs mt-0.5 block">{area.postcode}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasWeCoverSection;