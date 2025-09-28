import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle as CheckCircleIcon,
  ChevronRight,
} from "lucide-react";
import { Button } from "../ui/button";
import ElectricBorder from "../ui/ElectricBorder";

interface ServiceCardProps {
  service: any;
  onClick: (service: any) => void;
  isHovered: boolean;
  onHover: (id: string) => void;
  onLeave: () => void;
}

// Service Card Component
const ServiceCard = ({
  service,
  onClick,
  isHovered,
  onHover,
  onLeave,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={() => onClick(service)}
      onHoverStart={() => onHover(service.id)}
      onHoverEnd={() => onLeave()}
    >
      <ElectricBorder
        color="#FFD700"
        intensity="medium"
        style={{ borderRadius: 16 }}
        className="h-full"
      >
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg relative h-full">
          <div className="relative h-48 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${service.colorClass}`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-2xl font-bold text-white">{service.price}</div>
              <div className="text-sm text-white/70">{service.priceUnit}</div>
            </div>

            <p className="text-white/80 mb-4 line-clamp-2">
              {service.shortDescription}
            </p>

            <ul className="space-y-2 mb-6">
              {service.features
                .slice(0, 3)
                .map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
            </ul>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                className={`w-full ${service.buttonClass}`}
                onClick={(e) => {
                  if (service.linkTo) {
                    e.stopPropagation();
                    window.location.href = service.linkTo;
                  }
                }}
              >
                View Details
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </ElectricBorder>
    </motion.div>
  );
};

export default ServiceCard;
