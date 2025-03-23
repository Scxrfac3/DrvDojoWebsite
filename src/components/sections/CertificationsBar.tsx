import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, Star } from "lucide-react";

interface CertificationProps {
  icon: React.ReactNode;
  text: string;
}

const Certification = ({
  icon,
  text = "Certification",
}: CertificationProps) => {
  return (
    <motion.div
      className="flex items-center gap-2 px-4"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-blue-600">{icon}</div>
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </motion.div>
  );
};

const CertificationsBar = () => {
  const certifications = [
    { icon: <Shield className="h-5 w-5" />, text: "DVSA Approved" },
    { icon: <Award className="h-5 w-5" />, text: "Certified Instructors" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Pass Plus Registered" },
    { icon: <Star className="h-5 w-5" />, text: "5-Star Rated" },
  ];

  return (
    <section className="w-full py-4 bg-gray-50 border-y border-gray-100 shadow-sm">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <Certification key={index} icon={cert.icon} text={cert.text} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsBar;
