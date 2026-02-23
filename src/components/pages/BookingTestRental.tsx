import React, { useRef } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Car, CheckCircle, ChevronRight, Sparkles, Award, Shield, Zap } from "lucide-react";
import confetti from "canvas-confetti";

const BookingTestRental = () => {
  const [animateBackground, setAnimateBackground] = React.useState(false);
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  const calendlyEmbedHTML = `
    <div class="calendly-inline-widget" data-url="https://calendly.com/drivedojo-qnua/testcarrental" style="min-width:320px;height:700px;"></div>
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
  `;

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
    setAnimateBackground(true);
    setTimeout(() => setAnimateBackground(false), 2000);
    
    // Scroll to the Calendly widget
    if (widgetContainerRef.current) {
      widgetContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden ${animateBackground ? "animate-background" : ""}`}
    >
      {/* Premium dark background with subtle grid pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent"></div>
      </div>

      {/* Animated accent lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-rose-400/20 to-pink-400/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 4,
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
            className="inline-flex items-center mb-4 bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 px-5 py-2.5 rounded-full text-sm font-medium text-rose-300 backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="h-4 w-4 mr-2 text-rose-400" />
            Premium Booking Experience
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-rose-100 to-pink-300 bg-clip-text text-transparent">
              Drive
            </span>
            <br />
            <span className="text-rose-400 inline-block">Smart</span>
            <span className="text-2xl lg:text-3xl ml-4">🏎️</span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Book your driving test car rental with our premium scheduling system.
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
              <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                Test Car Rental
              </span>
            </h2>
            
            {/* Premium card with electric border effect */}
            <div className="relative group">
              {/* Electric border gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 rounded-xl opacity-50 group-hover:opacity-75 transition duration-500 blur"></div>
              
              <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl border border-slate-800 shadow-2xl overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3 bg-gradient-to-br from-rose-500/30 to-pink-600/30 border border-rose-500/20">
                          <Car className="h-6 w-6 text-rose-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            Test Car Rental
                          </h3>
                          <p className="text-xs text-rose-400">3-Hour Package</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">
                        £150
                        <span className="text-sm font-normal text-slate-400">/3 hours</span>
                      </div>
                      <p className="text-sm mb-4 text-slate-300">
                        Hire a dual-control car for your driving test. Includes 15 minutes early arrival, practice maneuvers, and home drop-off.
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-rose-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">3 hours total booking</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-rose-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">Arrive 15 minutes before test</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-rose-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">Practice maneuvers included</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-rose-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">Home drop-off after test</span>
                    </li>
                  </ul>

                  <Button
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg shadow-rose-500/20"
                    onClick={triggerConfetti}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book This Rental
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-300 mb-4">Other Packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="text-slate-300 border-slate-700 hover:bg-slate-800 hover:border-rose-500/50 transition-colors"
                  onClick={() => window.location.href = '/booking/payg'}
                >
                  Pay As You Go
                </Button>
                <Button
                  variant="outline"
                  className="text-slate-300 border-slate-700 hover:bg-slate-800 hover:border-rose-500/50 transition-colors"
                  onClick={() => window.location.href = '/booking/6hour'}
                >
                  6-Hour Package
                </Button>
                <Button
                  variant="outline"
                  className="text-slate-300 border-slate-700 hover:bg-slate-800 hover:border-rose-500/50 transition-colors"
                  onClick={() => window.location.href = '/booking/10hour'}
                >
                  10-Hour Package
                </Button>
                <Button
                  variant="outline"
                  className="text-slate-300 border-slate-700 hover:bg-slate-800 hover:border-rose-500/50 transition-colors"
                  onClick={() => window.location.href = '/booking/intensive'}
                >
                  Intensive Course
                </Button>
                <Button
                  variant="outline"
                  className="text-slate-300 border-slate-700 hover:bg-slate-800 hover:border-rose-500/50 transition-colors"
                  onClick={() => window.location.href = '/booking/mocktest'}
                >
                  Mock Test
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Calendly Widget */}
          <motion.div
            ref={widgetContainerRef}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-1/2 min-h-[80vh]"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Select Your Time
            </h2>
            
            {/* Premium widget container with electric border */}
            <div className="relative group">
              {/* Electric border gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 rounded-xl opacity-40 group-hover:opacity-60 transition duration-500 blur"></div>
              
              <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl border border-slate-800 shadow-2xl h-full flex flex-col overflow-hidden">
                <div className="p-5 border-b border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-300 mb-1">
                        Select your preferred date and time
                      </p>
                      <p className="text-xs text-slate-500">
                        Instant confirmation & secure booking
                      </p>
                    </div>
                    <div className="px-3 py-1.5 bg-rose-500/20 border border-rose-500/30 rounded-full">
                      <p className="text-xs text-rose-400 font-medium">
                        Test Car Rental
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Calendly Widget Container */}
                <div 
                  className="rounded-lg overflow-hidden bg-white flex-grow"
                  dangerouslySetInnerHTML={{ __html: calendlyEmbedHTML }}
                />
                
                <div className="p-4 border-t border-slate-800 text-center bg-slate-900/50">
                  <p className="text-slate-500 text-xs">
                    Powered by <span className="text-slate-400">Calendly</span> • Need help? <span className="text-rose-400">drivedojo@gmail.com</span>
                  </p>
                </div>
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
