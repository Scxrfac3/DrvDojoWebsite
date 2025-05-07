import React from "react";
import { motion } from "framer-motion";
import { Car } from "lucide-react";
import ServiceCard from "./ServiceCard";

interface ServicesOverviewProps {
  onServiceSelect: (service: any) => void;
  hoveredService: string | null;
  setHoveredService: (id: string | null) => void;
  servicesData: any[];
}

// Services Overview Component
const ServicesOverview = ({
  onServiceSelect,
  hoveredService,
  setHoveredService,
  servicesData,
}: ServicesOverviewProps) => {
  return (
    <section className="py-16 bg-slate-800/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
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
            <Car className="h-4 w-4 mr-2" />
            Driving Courses
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Explore Our Driving Courses
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Choose from our range of professional driving courses designed to
            suit your needs and experience level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={onServiceSelect}
              isHovered={hoveredService === service.id}
              onHover={setHoveredService}
              onLeave={() => setHoveredService(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
