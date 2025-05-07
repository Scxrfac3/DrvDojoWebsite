import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Sparkles, ChevronRight, Tag, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  discount: string;
  code: string;
  expiryDate: string;
  bgColor: string;
  link: string;
}

interface SpecialOffersSectionProps {
  offers?: SpecialOffer[];
}

// Default offers if none are provided
const defaultOffers: SpecialOffer[] = [
  {
    id: "1",
    title: "First Lesson 50% Off",
    description:
      "Book your first driving lesson today and get 50% off! Perfect for beginners.",
    discount: "50%",
    code: "FIRST50",
    expiryDate: "June 30, 2024",
    bgColor: "from-blue-500 to-purple-600",
    link: "/booking?promo=FIRST50",
  },
  {
    id: "2",
    title: "Intensive Course Deal",
    description:
      "Save £150 on our 30-hour intensive driving course. Pass your test faster!",
    discount: "£150",
    code: "INTENSE150",
    expiryDate: "July 15, 2024",
    bgColor: "from-amber-500 to-red-500",
    link: "/booking?promo=INTENSE150",
  },
  {
    id: "3",
    title: "Student Special",
    description:
      "Students get 10% off all lesson packages with valid student ID.",
    discount: "10%",
    code: "STUDENT10",
    expiryDate: "Ongoing",
    bgColor: "from-green-500 to-teal-500",
    link: "/booking?promo=STUDENT10",
  },
];

const SpecialOffersSection = ({
  offers = defaultOffers,
}: SpecialOffersSectionProps) => {
  return (
    <section className="py-10 px-4 md:px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="h-6 w-6 text-purple-500 mr-2" />
          <h2 className="text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Special Offers Just For You
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className={`rounded-xl overflow-hidden shadow-lg relative bg-gradient-to-br ${offer.bgColor} text-white h-full`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mt-12 -mr-12"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -mb-8 -ml-8"></div>

              <div className="p-6 relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{offer.title}</h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Expires: {offer.expiryDate}</span>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    {offer.discount.includes("%") ? (
                      <Percent className="h-5 w-5" />
                    ) : (
                      <Tag className="h-5 w-5" />
                    )}
                  </div>
                </div>

                <p className="text-white/90 mb-4 flex-grow">
                  {offer.description}
                </p>

                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-4 flex items-center justify-between">
                  <span className="font-mono font-bold">{offer.code}</span>
                  <motion.button
                    className="text-xs bg-white/30 hover:bg-white/40 px-2 py-1 rounded transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigator.clipboard.writeText(offer.code)}
                  >
                    Copy
                  </motion.button>
                </div>

                <Link to={offer.link}>
                  <Button
                    className="w-full bg-white text-purple-700 hover:bg-white/90 flex items-center justify-center"
                    size="sm"
                  >
                    Claim Offer <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
