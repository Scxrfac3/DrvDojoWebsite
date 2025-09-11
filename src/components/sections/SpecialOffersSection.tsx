import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Sparkles, ChevronRight, Tag, Percent, Gift, Copy, Check } from "lucide-react";
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
  const [copiedCodes, setCopiedCodes] = useState<Set<string>>(new Set());

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    const newCopied = new Set(copiedCodes);
    newCopied.add(code);
    setCopiedCodes(newCopied);
    
    // Remove from copied state after 3 seconds
    setTimeout(() => {
      const updatedCopied = new Set(copiedCodes);
      updatedCopied.delete(code);
      setCopiedCodes(updatedCopied);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Gift className="h-8 w-8 text-orange-500 mr-3 animate-bounce" />
            <h2 className="text-5xl font-black text-gray-900">
              Special Offers Just For
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"> You</span> 🎁
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Exclusive deals to kickstart your driving journey!
            <span className="animate-pulse">✨</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Card with border and shadow */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 h-full border-4 border-gray-200">
                {/* Gradient header based on offer color */}
                <div className={`bg-gradient-to-r ${offer.bgColor} p-6 relative`}>
                  {/* Floating discount badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-3 shadow-lg">
                    {offer.discount.includes("%") ? (
                      <Percent className="h-6 w-6 text-white" />
                    ) : (
                      <Tag className="h-6 w-6 text-white" />
                    )}
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mt-12 -mr-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -mb-8 -ml-8"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Expires: {offer.expiryDate}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content area */}
                <div className="p-6">
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Code section */}
                  <div className="bg-gray-50 rounded-2xl p-4 mb-6 border-2 border-dashed border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-500 font-medium mb-1">PROMO CODE</div>
                        <span className="font-mono font-bold text-xl text-gray-900">{offer.code}</span>
                      </div>
                      <motion.button
                        className={`flex items-center space-x-1 px-4 py-2 rounded-xl transition-all duration-300 ${
                          copiedCodes.has(offer.code)
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCopyCode(offer.code)}
                      >
                        {copiedCodes.has(offer.code) ? (
                          <>
                            <Check className="h-4 w-4" />
                            <span className="text-sm font-medium">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            <span className="text-sm font-medium">Copy</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to={offer.link} className="block">
                    <motion.div
                      className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-4 rounded-2xl font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center justify-center">
                        Claim Offer <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.div>
                  </Link>
                </div>
              </div>
              
              {/* Floating emoji */}
              <div className="absolute -top-4 -left-4 text-3xl animate-bounce">
                {index === 0 ? "🎉" : index === 1 ? "🔥" : "💯"}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-3xl">
            <div className="bg-white rounded-3xl px-8 py-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Start Your Journey? 🚗
              </h3>
              <p className="text-gray-600 mb-4">Book your first lesson today and take advantage of these exclusive offers!</p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                <Gift className="mr-2 h-5 w-5" />
                Book My First Lesson!
                <span className="ml-2 animate-bounce">🎯</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
