import React from "react";
import { motion } from "framer-motion";
import { Zap, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Package {
  badge: string;
  title: string;
  description: string;
  price: string;
  perHour: string;
  saving: string;
  features: string[];
  link: string;
  popular?: boolean;
  bestValue?: boolean;
}

const packages: Package[] = [
  {
    badge: "Pay As You Go",
    title: "2-Hour Assessment",
    description: "Try before you commit",
    price: "£70",
    perHour: "first 2 hours",
    saving: "Then £38/hr ongoing",
    features: [
      "DVSA-approved instructor",
      "Mercedes-Benz A-Class",
      "Personalised assessment",
    ],
    link: "/booking/payg",
  },
  {
    badge: "Starter Package",
    title: "6-Hour Package",
    description: "Build your confidence",
    price: "£220",
    perHour: "~£36.67/hr",
    saving: "Save £8 vs PAYG",
    features: [
      "6 hours of pro tuition",
      "Flexible scheduling",
      "Progress tracking",
    ],
    link: "/booking/6hour",
  },
  {
    badge: "Most Popular",
    title: "10-Hour Package",
    description: "Best value for progression",
    price: "£340",
    perHour: "~£34/hr",
    saving: "Save £40 vs PAYG",
    features: [
      "Dedicated instructor",
      "Flexible pickup included",
      "Live progress dashboard",
    ],
    link: "/booking/10hour",
    popular: true,
  },
  {
    badge: "Best Value",
    title: "20-Hour Package",
    description: "Ultimate test preparation",
    price: "£679",
    perHour: "~£33.95/hr",
    saving: "Save £81 vs PAYG",
    features: [
      "20 hours of pro tuition",
      "2 mock tests included",
      "Theory test support",
    ],
    link: "/booking/20hour",
    bestValue: true,
  },
];

const SpecialOffersSection = () => {
  return (
    <>
      {/* Packages Section - Premium dark matching East London Automatic */}
      <section id="packages" className="py-16 bg-[#0d0d0d]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center mb-3 bg-primary/20 border border-primary/30 px-4 py-2 rounded-full text-sm font-medium text-primary backdrop-blur-sm">
              <Zap className="h-4 w-4 mr-2" />
              East London Offers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Choose Your <span className="text-primary">Package</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. All packages include dedicated
              instructor and Mercedes-Benz vehicle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                className={`bg-white/[0.03] backdrop-blur-md rounded-2xl border overflow-hidden relative h-full ${
                  pkg.popular
                    ? "border-2 border-primary shadow-[0_0_25px_rgba(var(--primary-rgb),0.3)] transform scale-105 z-10"
                    : "border-white/[0.08]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black px-5 py-1.5 rounded-b-lg tracking-wider uppercase shadow-lg">
                    ⭐ Most Popular
                  </div>
                )}
                {pkg.bestValue && (
                  <div className="absolute top-0 left-0 right-0 bg-white/5 text-white text-xs font-bold px-3 py-2 text-center border-b border-white/[0.08]">
                    🎯 Best Value
                  </div>
                )}
                <div
                  className={`pt-12 pb-6 px-6 ${
                    pkg.bestValue ? "pt-12" : ""
                  }`}
                >
                  <h3 className="text-lg font-bold mb-2 text-white">{pkg.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{pkg.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-black text-white">{pkg.price}</span>
                    <span className="text-sm text-gray-400 ml-2">{pkg.perHour}</span>
                  </div>
                  <p className="text-xs text-green-400 font-medium mb-4">{pkg.saving}</p>
                  <ul className="space-y-2 mb-5">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-pink-500/10 border border-pink-400/20 rounded-lg px-2 py-1">
                      <span className="text-pink-300 text-xs font-medium">Klarna — Pay in 3</span>
                    </div>
                    <div className="bg-white/10 rounded-lg px-2 py-1">
                      <span className="text-gray-300 text-xs">Apple Pay</span>
                    </div>
                    <div className="bg-white/10 rounded-lg px-2 py-1">
                      <span className="text-gray-300 text-xs">G Pay</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => (window.location.href = pkg.link)}
                  >
                    Book Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Driving Journey?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join 2000+ successful drivers in East London. Book your lesson today.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 shadow-lg"
              asChild
            >
              <a
                href="https://wa.me/447487228866?text=Hi%20Drive%20Dojo!%20I'm%20interested%20in%20driving%20lessons.%20Can%20you%20help?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Book via WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 font-bold"
              onClick={() => (window.location.href = "/booking/payg")}
            >
              View All Packages
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SpecialOffersSection;
