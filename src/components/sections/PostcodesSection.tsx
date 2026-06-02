import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, CheckCircle, CreditCard } from "lucide-react";

interface AreaEntry {
  name: string;
  path: string;
  postcode: string;
}

const areas: AreaEntry[] = [
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

const PostcodesSection = () => {
  return (
    <section className="py-20 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ff6b35]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#ff6b35]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-[#f5a623]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center mb-4 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] px-5 py-2 rounded-full text-sm font-medium text-[#ff6b35]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MapPin className="h-4 w-4 mr-2" />
            Areas We Cover
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-black mb-4 text-white"
            style={{ letterSpacing: "-2px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Serving{" "}
            <span className="text-[#ff6b35]">East London & Essex</span>
          </motion.h2>

          <motion.p
            className="text-lg text-[#888] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            We provide professional driving lessons across multiple postcodes in East London and Essex.
            Door-to-door pickup included. Click your area to view local prices and book.
          </motion.p>
        </motion.div>

        {/* Area Cards — Glassmorphism Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <Link
                to={area.path}
                className="block bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-[rgba(255,107,53,0.5)] hover:bg-white/[0.14] transition-all hover:-translate-y-1 group active:scale-[0.98]"
              >
                <MapPin className="h-5 w-5 mx-auto mb-2 text-[#ff6b35] group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold text-sm block group-hover:text-[#ff6b35] transition-colors">
                  {area.name}
                </span>
                <span className="text-[#888] text-xs mt-0.5 block">{area.postcode}</span>
                <span className="inline-flex items-center gap-1 text-[#ff6b35] text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Lessons
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Klarna + CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#ff6b35]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#ff6b35]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  Don't see your area? We likely cover it.
                </h3>
                <p className="text-[#888] text-sm">
                  Contact us to check availability in your location — door-to-door pickup across East London.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-400/20 rounded-lg px-4 py-2 text-sm">
                <CreditCard className="w-4 h-4 text-pink-400" />
                <span className="text-pink-300 font-medium text-xs whitespace-nowrap">
                  Klarna — Pay in 3
                </span>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#ff6b35] hover:bg-[#ff8555] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-[0_8px_30px_rgba(255,107,53,0.3)] hover:-translate-y-0.5 whitespace-nowrap"
              >
                Check My Postcode
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PostcodesSection;