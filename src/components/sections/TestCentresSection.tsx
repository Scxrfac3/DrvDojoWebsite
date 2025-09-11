import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Award, Star, TrendingUp } from "lucide-react";

interface TestCentre {
  id: string;
  name: string;
  address: string;
  passRate: string;
  distance?: string;
}

const testCentres: TestCentre[] = [
  {
    id: "laughton",
    name: "Laughton",
    address: "The Driving Test Centre, 9 High Street, Laughton, LE16 6DE",
    passRate: "62%",
    distance: "15 miles"
  },
  {
    id: "goodmayes",
    name: "Goodmayes",
    address: "Goodmayes Driving Test Centre, 254 High Road, Goodmayes, IG3 8EW",
    passRate: "58%",
    distance: "8 miles"
  },
  {
    id: "hornchurch",
    name: "Hornchurch",
    address: "Hornchurch Driving Test Centre, 116 High Street, Hornchurch, RM12 4UJ",
    passRate: "60%",
    distance: "12 miles"
  },
  {
    id: "barking",
    name: "Barking",
    address: "Barking Driving Test Centre, 47 Ripple Road, Barking, IG11 7NT",
    passRate: "55%",
    distance: "5 miles"
  },
  {
    id: "chingford",
    name: "Chingford",
    address: "Chingford Driving Test Centre, 2 Station Road, Chingford, E4 6AL",
    passRate: "61%",
    distance: "10 miles"
  },
  {
    id: "wanstead",
    name: "Wanstead",
    address: "Wanstead Driving Test Centre, 106 High Street, Wanstead, E12 5AA",
    passRate: "59%",
    distance: "7 miles"
  }
];

export default function TestCentresSection() {
  const [hoveredCentre, setHoveredCentre] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center mb-3 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="h-4 w-4 mr-2" />
            Test Centres We Cover
          </motion.div>
          
          <motion.h2
            className="text-5xl font-black text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Local Driving <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Test Centres</span> 🎯
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We provide comprehensive training and familiarization with all major test centres in the area.
            <span className="text-blue-500 font-bold"> Increase your chances of passing first time!</span> 🏆
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testCentres.map((centre, index) => (
            <motion.div
              key={centre.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 relative h-full transition-all duration-300 ${
                hoveredCentre === centre.id ? 'ring-2 ring-blue-500 transform -translate-y-1' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredCentre(centre.id)}
              onMouseLeave={() => setHoveredCentre(null)}
            >
              {/* Header with gradient background */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 relative">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full -mb-6 -ml-6"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{centre.name}</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{centre.distance} away</span>
                  </div>
                </div>
              </div>
              
              {/* Content area */}
              <div className="p-6">
                {/* Address */}
                <div className="mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm leading-relaxed">{centre.address}</p>
                  </div>
                </div>

                {/* Pass Rate */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 mb-6 border border-green-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="h-6 w-6 text-green-500 mr-2" />
                      <div>
                        <div className="text-xs text-gray-500 font-medium">PASS RATE</div>
                        <div className="text-2xl font-bold text-green-600">{centre.passRate}</div>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(parseInt(centre.passRate) / 20)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Success Rate</span>
                    <span>{centre.passRate}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${parseInt(centre.passRate)}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    Practice Routes <TrendingUp className="ml-2 h-4 w-4" />
                  </span>
                </motion.button>
              </div>
              
              {/* Floating emoji */}
              <div className="absolute -top-3 -right-3 text-2xl animate-bounce">
                {index === 0 ? "🏆" : index === 1 ? "🎯" : index === 2 ? "⭐" : index === 3 ? "🚗" : index === 4 ? "🛣️" : "📍"}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-3xl">
            <div className="bg-white rounded-3xl px-8 py-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Ace Your Test? 🎉
              </h3>
              <p className="text-gray-600 mb-4">Get expert training tailored to your local test centre routes!</p>
              <motion.button
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = "/booking"}
              >
                <Award className="mr-2 h-5 w-5" />
                Book Your Training
                <span className="ml-2 animate-bounce">🚀</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}