import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";

// Add type declaration for Calendly
declare global {
  interface Window {
    Calendly: any;
  }
}
import {
  Calendar,
  Car,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Award,
  Shield,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";

const Booking = () => {
  const [animateBackground, setAnimateBackground] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("payg");
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  // Initialize with a default URL to prevent null/undefined values
  const [calendlyUrl, setCalendlyUrl] = useState("https://calendly.com/drivedojo-qnua/120min?background_color=b8c7ff");
  const [isLoading, setIsLoading] = useState(true);
  const calendlyWidgetRef = useRef(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Read package from URL parameter and set the Calendly URL
    const packageParam = searchParams.get('package');
    let packageId = "payg"; // Default package
    
    if (packageParam) {
      // Map URL parameter values to package IDs
      const packageMapping = {
        'payg': 'payg',
        '6hour': '6hour',
        '10hour': '10hour',
        'intensive': 'intensive',
        'mocktest': 'mocktest',
        'testrental': 'testrental'
      };
      
      if (packageMapping[packageParam]) {
        packageId = packageMapping[packageParam];
      }
    }
    
    setSelectedPackage(packageId);
    
    // Find the selected package and set its Calendly URL
    const selectedPkg = packages.find(pkg => pkg.id === packageId);
    if (selectedPkg && selectedPkg.calendlyUrl) {
      setCalendlyUrl(selectedPkg.calendlyUrl);
    } else {
      // Fallback to default package URL if something goes wrong
      setCalendlyUrl("https://calendly.com/drivedojo-qnua/120min?background_color=b8c7ff");
    }
    
    setIsLoading(false);
  }, [searchParams]);

  useEffect(() => {
    // Load Calendly widget script
    const loadCalendlyScript = () => {
      if (window.Calendly) {
        setIsCalendlyLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        setIsCalendlyLoaded(true);
      };
      document.body.appendChild(script);
      
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    };

    loadCalendlyScript();
  }, []);

  useEffect(() => {
    // Update Calendly widget when package changes or URL is set
    if (isCalendlyLoaded && calendlyWidgetRef.current && calendlyUrl) {
      // Destroy existing widget
      calendlyWidgetRef.current.innerHTML = '';
      
      // Initialize new widget only if we have a valid URL
      if (window.Calendly && calendlyUrl) {
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: calendlyWidgetRef.current,
          prefill: {},
          styles: {
            height: '100%',
            width: '100%'
          }
        });
      }
    }
  }, [selectedPackage, isCalendlyLoaded, calendlyUrl]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
    setAnimateBackground(true);
    setTimeout(() => setAnimateBackground(false), 2000);
  };

  const packages = [
    {
      id: "payg",
      name: "Pay As You Go Lesson 2 hours",
      price: "£76",
      unit: "/2 hours",
      description: "Perfect for trying us out",
      features: [
        "2 hours lesson",
        "Personalized learning",
        "Beginner friendly",
      ],
      color: "blue",
      icon: <Car className="h-6 w-6" />,
      calendlyUrl: "https://calendly.com/drivedojo-qnua/120min?background_color=b8c7ff"
    },
    {
      id: "6hour",
      name: "6-Hour Package",
      price: "£210",
      unit: "/package",
      description: "Save money with our starter package",
      features: [
        "6 hours of lessons",
        "Structured learning plan",
        "Progress tracking",
      ],
      color: "purple",
      icon: <Award className="h-6 w-6" />,
      calendlyUrl: "https://calendly.com/drivedojo-qnua/6-hour-package?background_color=c2e5ff"
    },
    {
      id: "10hour",
      name: "10-Hour Package",
      price: "£340",
      unit: "/package",
      description: "Most Popular - Best value for money!",
      features: [
        "10 hours of lessons",
        "Progress tracking",
        "Best value for most learners",
      ],
      color: "purple",
      popular: true,
      icon: <Award className="h-6 w-6" />,
      calendlyUrl: "https://calendly.com/drivedojo-qnua/6-hour-package-clone?background_color=96bdff"
    },
    {
      id: "intensive",
      name: "Intensive Driving Course",
      price: "£600",
      unit: "/course",
      description: "Fast-track your learning",
      features: [
        "Comprehensive training",
        "Flexible scheduling",
        "Test preparation included",
      ],
      color: "green",
      icon: <Zap className="h-6 w-6" />,
      calendlyUrl: "https://calendly.com/drivedojo-qnua/intensive?background_color=ffa5f0"
    },
    {
      id: "mocktest",
      name: "Mock driving test",
      price: "£90",
      unit: "/test",
      description: "Perfect practice before your test",
      features: [
        "Real test conditions",
        "45 minutes duration",
        "Detailed feedback",
      ],
      color: "blue",
      icon: <CheckCircle className="h-6 w-6" />,
      calendlyUrl: "https://calendly.com/drivedojo-qnua/10-hour-package-clone?background_color=ff87df"
    },
    {
      id: "testrental",
      name: "Driving test car rental",
      price: "£150",
      unit: "/3 hours",
      description: "3 hours: arrive 15min early, practice maneuvers, home drop-off",
      features: [
        "3 hours booking",
        "Arrive 15 minutes before test",
        "Practice maneuvers",
        "Home drop-off after test",
      ],
      color: "green",
      icon: <Car className="h-6 w-6" />,
      calendlyUrl: "https://calendly.com/drivedojo-qnua/10-hour-package-clone"
    },
  ];

  const handlePackageSelect = (packageId) => {
    setSelectedPackage(packageId);
    
    // Update the Calendly URL when a package is selected
    const selectedPkg = packages.find(pkg => pkg.id === packageId);
    if (selectedPkg && selectedPkg.calendlyUrl) {
      setCalendlyUrl(selectedPkg.calendlyUrl);
    }
    
    triggerConfetti();
    
    // Scroll to Calendly widget on mobile
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        const widgetElement = document.getElementById('calendly-widget-container');
        if (widgetElement) {
          widgetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  };

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
          {/* Calendly Widget - Now first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            id="calendly-widget-container"
            className="lg:w-1/2 min-h-[80vh]"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Book Your Lesson
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl h-full flex flex-col">
              <div className="mb-4">
                <p className="text-blue-100 mb-2">
                  Select a package below, then choose your preferred date and time.
                </p>
                <p className="text-blue-200 text-sm">
                  All bookings include payment processing through our secure system.
                </p>
                <div className="mt-2 p-3 bg-blue-900/30 rounded-lg border border-blue-700/50">
                  <p className="text-blue-200 text-sm font-medium">
                    Selected: <span className="text-orange-300">{packages.find(p => p.id === selectedPackage)?.name}</span>
                  </p>
                </div>
              </div>
              
              {/* Calendly Inline Widget */}
              {isLoading ? (
                <div className="flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-white">Loading booking calendar...</p>
                  </div>
                </div>
              ) : calendlyUrl ? (
                <div
                  ref={calendlyWidgetRef}
                  className="calendly-inline-widget rounded-lg overflow-hidden bg-white flex-grow"
                  style={{ minWidth: '100%', height: '100%' }}
                ></div>
              ) : (
                <div className="flex items-center justify-center h-96 bg-red-50 rounded-lg">
                  <div className="text-center p-6">
                    <p className="text-red-600 mb-4">Unable to load booking calendar. Please select a package below.</p>
                    <Button
                      onClick={() => {
                        const defaultPkg = packages.find(pkg => pkg.id === "payg");
                        if (defaultPkg) {
                          setCalendlyUrl(defaultPkg.calendlyUrl);
                          setSelectedPackage("payg");
                        }
                      }}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Load Default Package
                    </Button>
                  </div>
                </div>
              )}
              
              <div className="mt-4 text-center">
                <p className="text-blue-200 text-sm">
                  Need help? Contact us at <span className="text-blue-300">info@drivedojo.co.uk</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Package Selection - Now second on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-1/2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Select Your Package
            </h2>
            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  className={`bg-gradient-to-b ${pkg.color === "blue" ? "from-blue-900/40 to-blue-800/20" : pkg.color === "purple" ? "from-purple-900/40 to-purple-800/20" : "from-green-900/40 to-green-800/20"} rounded-xl overflow-hidden border ${pkg.color === "blue" ? "border-blue-700/30" : pkg.color === "purple" ? "border-purple-700/30" : "border-green-700/30"} shadow-lg relative cursor-pointer ${selectedPackage === pkg.id ? 'ring-2 ring-orange-400' : ''}`}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                  }}
                  onClick={() => handlePackageSelect(pkg.id)}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${pkg.color === "blue" ? "bg-blue-600/30 text-blue-400" : pkg.color === "purple" ? "bg-purple-600/30 text-purple-400" : "bg-green-600/30 text-green-400"}`}
                          >
                            {pkg.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white">
                            {pkg.name}
                          </h3>
                        </div>
                        <div className="text-2xl font-bold text-white mb-2">
                          {pkg.price}
                          <span className="text-sm font-normal">{pkg.unit}</span>
                        </div>
                        <p
                          className={`text-sm mb-3 ${pkg.color === "blue" ? "text-blue-300" : pkg.color === "purple" ? "text-purple-300" : "text-green-300"}`}
                        >
                          {pkg.description}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-1 mb-4">
                      {pkg.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle
                            className={`h-4 w-4 ${pkg.color === "blue" ? "text-blue-500" : pkg.color === "purple" ? "text-purple-500" : "text-green-500"} mr-2 flex-shrink-0`}
                          />
                          <span className="text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${selectedPackage === pkg.id ? 'bg-orange-600 hover:bg-orange-700' : pkg.color === "blue" ? "bg-blue-600 hover:bg-blue-700" : pkg.color === "purple" ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" : "bg-green-600 hover:bg-green-700"}`}
                    >
                      {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
