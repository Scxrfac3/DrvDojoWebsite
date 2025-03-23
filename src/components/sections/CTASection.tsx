import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CTASection = ({
  title = "Ready to Start Your Driving Journey?",
  description = "Book your first lesson today and take the first step towards driving confidence.",
  primaryButtonText = "Book a Lesson",
  primaryButtonLink = "/booking",
  secondaryButtonText = "Contact Us",
  secondaryButtonLink = "/contact",
}: CTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg group"
              asChild
            >
              <motion.a
                href={primaryButtonLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {primaryButtonText}
                <motion.span
                  className="ml-2 inline-block"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20"
              asChild
            >
              <motion.a
                href={secondaryButtonLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {secondaryButtonText}
              </motion.a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
