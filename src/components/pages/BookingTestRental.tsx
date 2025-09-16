import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Car, CheckCircle, ChevronRight, Sparkles, Award, Shield, Zap } from "lucide-react";
import confetti from "canvas-confetti";

const BookingTestRental = () => {
  const [animateBackground, setAnimateBackground] = React.useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
    setAnimateBackground(true);
    setTimeout(() => setAnimateBackground(false), 2000);
  };

  const calendlyEmbedHTML = `
    <!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/drivedojo-qnua/testcarrental" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->
  `;

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden ${animateBackground ? "animate-background" : ""}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.1, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <Navbar />

      <div className="pt-24 pb-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center mb-3 bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="h-4 w-4 mr-2" />
            Book Your Lessons
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-100 to-orange-300 bg-clip-text text-transparent animate-gradient">
              Drive
            </span>
            <br />
            <span className="text-orange-400 animate-bounce inline-block">Smart</span>
            <span className="text-2xl lg:text-3xl ml-4">🏎️</span>
          </h1>

          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Book your driving lessons directly with our easy-to-use scheduling system.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Package Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Book Your Driving Test Car Rental
            </h2>
            <div className="bg-gradient-to-b from-green-900/40 to-green-800/20 rounded-xl overflow-hidden border border-green-700/30 shadow-lg relative">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-green-600/30 text-green-400">
                        <Car className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Driving test car rental
                      </h3>
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">
                      £150
                      <span className="text-sm font-normal">/3 hours</span>
                    </div>
                    <p className="text-sm mb-3 text-green-300">
                      3 hours: arrive 15min early, practice maneuvers, home drop-off
                    </p>
                  </div>
                </div>

                <ul className="space-y-1 mb-4">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-300">3 hours booking</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-300">Arrive 15 minutes before test</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-300">Practice maneuvers</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-300">Home drop-off after test</span>
                  </li>
                </ul>

                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={triggerConfetti}
                >
                  Book This Package
                </Button>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-bold text-white mb-4">Other Packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="text-white border-white/20 hover:bg-white/10"
                  onClick={() => window.location.href = '/booking/payg'}
                >
                  Pay As You Go
                </Button>
                <Button 
                  variant="outline" 
                  className="text-white border-white/20 hover:bg-white/10"
                  onClick={() => window.location.href = '/booking/6hour'}
                >
                  6-Hour Package
                </Button>
                <Button 
                  variant="outline" 
                  className="text-white border-white/20 hover:bg-white/10"
                  onClick={() => window.location.href = '/booking/10hour'}
                >
                  10-Hour Package
                </Button>
                <Button 
                  variant="outline" 
                  className="text-white border-white/20 hover:bg-white/10"
                  onClick={() => window.location.href = '/booking/intensive'}
                >
                  Intensive Course
                </Button>
                <Button 
                  variant="outline" 
                  className="text-white border-white/20 hover:bg-white/10"
                  onClick={() => window.location.href = '/booking/mocktest'}
                >
                  Mock Test
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-1/2 min-h-[80vh]"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Book Your Lesson
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl h-full flex flex-col">
              <div className="mb-4">
                <p className="text-blue-100 mb-2">
                  Select your preferred date and time below.
                </p>
                <p className="text-blue-200 text-sm">
                  All bookings include payment processing through our secure system.
                </p>
                <div className="mt-2 p-3 bg-blue-900/30 rounded-lg border border-blue-700/50">
                  <p className="text-blue-200 text-sm font-medium">
                    Selected: <span className="text-orange-300">Driving test car rental</span>
                  </p>
                </div>
              </div>
              
              {/* Calendly Inline Widget - Using raw HTML embed */}
              <div 
                className="rounded-lg overflow-hidden bg-white flex-grow"
                dangerouslySetInnerHTML={{ __html: calendlyEmbedHTML }}
              />
              
              <div className="mt-4 text-center">
                <p className="text-blue-200 text-sm">
                  Need help? Contact us at <span className="text-blue-300">info@drivedojo.co.uk</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingTestRental;