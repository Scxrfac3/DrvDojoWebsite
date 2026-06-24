import React, { useRef } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CalendlyWidget from "../ui/CalendlyWidget";
import SEO from "@/components/ui/SEO";
import { Calendar, CheckCircle, Award, Zap, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface IntensivePackage {
  hours: string;
  level: string;
  price: string;
  value: string;
  saving: string;
  features: string;
  whoFor: string;
  duration: string;
  readyIn: string;
  popular: boolean;
  calendlyUrl: string;
  canonical: string;
}

const PACKAGES: Record<string, IntensivePackage> = {
  "12hr": {
    hours: "12 Hours", level: "REFRESHER", price: "£575", value: "Value £606", saving: "You Save £31",
    features: "Automatic · incl. Pass Pledge & Fast-Track Test",
    whoFor: "Almost test-ready and polishing a few final skills.",
    duration: "5–10 days", readyIn: "2–4 weeks", popular: false,
    calendlyUrl: "https://calendly.com/drivedojo-qnua/12-hours-intensive",
    canonical: "https://drivedojodrivingschool.com/booking/intensive-12hr",
  },
  "16hr": {
    hours: "16 Hours", level: "REFRESHER", price: "£715", value: "Value £758", saving: "You Save £43",
    features: "Automatic · incl. Pass Pledge & Fast-Track Test",
    whoFor: "Experienced, with a couple of key areas to sharpen.",
    duration: "1–2 weeks", readyIn: "2–3 weeks", popular: false,
    calendlyUrl: "https://calendly.com/drivedojo-qnua/12-hours-intensive-clone",
    canonical: "https://drivedojodrivingschool.com/booking/intensive-16hr",
  },
  "20hr": {
    hours: "20 Hours", level: "INTERMEDIATE", price: "£850", value: "Value £910", saving: "You Save £60",
    features: "Automatic · incl. Pass Pledge & Fast-Track Test",
    whoFor: "Roughly halfway, with solid basics and more to learn.",
    duration: "2–3 weeks", readyIn: "2–4 weeks", popular: false,
    calendlyUrl: "https://calendly.com/drivedojo-qnua/16-hours-intensive-clone",
    canonical: "https://drivedojodrivingschool.com/booking/intensive-20hr",
  },
  "25hr": {
    hours: "25 Hours", level: "INTERMEDIATE", price: "£1,025", value: "Value £1,100", saving: "You Save £75",
    features: "Automatic · incl. Pass Pledge & Fast-Track Test",
    whoFor: "Coming along well, with a way to go to test standard.",
    duration: "3–4 weeks", readyIn: "3–5 weeks", popular: false,
    calendlyUrl: "https://calendly.com/drivedojo-qnua/20-hours-intensive-clone",
    canonical: "https://drivedojodrivingschool.com/booking/intensive-25hr",
  },
  "30hr": {
    hours: "30 Hours", level: "INTERMEDIATE", price: "£1,180", value: "Value £1,290", saving: "You Save £110",
    features: "Automatic · incl. Pass Pledge & Fast-Track Test",
    whoFor: "Some experience and ready to push on to test-ready.",
    duration: "3–5 weeks", readyIn: "3–6 weeks", popular: true,
    calendlyUrl: "https://calendly.com/drivedojo-qnua/25-hours-intensive-clone",
    canonical: "https://drivedojodrivingschool.com/booking/intensive-30hr",
  },
  "35hr": {
    hours: "35 Hours", level: "BEGINNER", price: "£1,350", value: "Value £1,480", saving: "You Save £130",
    features: "Automatic · incl. Pass Pledge & Fast-Track Test",
    whoFor: "Limited experience, getting to grips with the basics.",
    duration: "3–6 weeks", readyIn: "3–7 weeks", popular: false,
    calendlyUrl: "https://calendly.com/drivedojo-qnua/30-hours-intensive-clone",
    canonical: "https://drivedojodrivingschool.com/booking/intensive-35hr",
  },
  "40hr": {
    hours: "40 Hours", level: "BEGINNER", price: "£1,520", value: "Value £1,670", saving: "You Save £150",
    features: "Automatic · incl. Pass Pledge & Fast-Track Test",
    whoFor: "A beginner and a quick learner, eager to get test-ready.",
    duration: "4–7 weeks", readyIn: "4–8 weeks", popular: false,
    calendlyUrl: "https://calendly.com/drivedojo-qnua/35-hours-intensive-clone",
    canonical: "https://drivedojodrivingschool.com/booking/intensive-40hr",
  },
  "45hr": {
    hours: "45 Hours", level: "BEGINNER", price: "£1,680", value: "Value £1,860", saving: "You Save £180",
    features: "Automatic · incl. Pass Pledge & Fast-Track Test",
    whoFor: "Starting from scratch, all the way to test-ready.",
    duration: "4–10 weeks", readyIn: "4–10 weeks", popular: false,
    calendlyUrl: "https://calendly.com/drivedojo-qnua/40-hours-intensive-clone",
    canonical: "https://drivedojodrivingschool.com/booking/intensive-45hr",
  },
};

interface BookingIntensivePackageProps {
  packageKey: string;
}

const BookingIntensivePackage = ({ packageKey }: BookingIntensivePackageProps) => {
  const pkg = PACKAGES[packageKey];
  const [animateBackground, setAnimateBackground] = React.useState(false);
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center">
        <p>Package not found</p>
      </div>
    );
  }

  const triggerConfetti = () => {
    confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
    setAnimateBackground(true);
    setTimeout(() => setAnimateBackground(false), 2000);
    if (widgetContainerRef.current) {
      widgetContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <SEO
        title={`Book ${pkg.hours} Intensive Driving Course | ${pkg.price} | Drive Dojo`}
        description={`Book your ${pkg.hours} intensive driving course online. ${pkg.features}. ${pkg.saving}. Pay in 3 with Klarna. DVSA-approved, Mercedes-Benz automatic. East London & Essex.`}
        keywords={`intensive driving course ${pkg.hours}, book intensive driving lessons, fast track driving test, driving test package, Klarna driving lessons, East London intensive course`}
        canonical={pkg.canonical}
      />
      <div className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden ${animateBackground ? "animate-background" : ""}`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div key={i} className="absolute rounded-full bg-gradient-to-r from-primary/20 to-orange-400/20 backdrop-blur-sm"
              style={{ width: Math.random() * 40 + 10, height: Math.random() * 40 + 10, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              initial={{ opacity: 0 }} animate={{ opacity: [0, 0.5, 0], scale: [0, 1, 0] }}
              transition={{ duration: Math.random() * 8 + 8, repeat: Infinity, delay: Math.random() * 4 }} />
          ))}
        </div>

        <Navbar />

        <div className="pt-24 pb-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <motion.div className="inline-flex items-center mb-4 bg-primary/20 border border-primary/30 px-5 py-2.5 rounded-full text-sm font-medium text-primary backdrop-blur-sm" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} whileHover={{ scale: 1.05 }}>
              <Zap className="h-4 w-4 mr-2" />
              {pkg.popular ? "⭐ Most Popular Package" : "Intensive Course Booking"}
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-amber-100 to-primary bg-clip-text text-transparent">{pkg.hours}</span>
              <br />
              <span className="text-primary inline-block">Intensive Course</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Book your {pkg.hours} intensive driving package with our premium scheduling system. Klarna Pay in 3 available.</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">{pkg.hours} Package</span>
              </h2>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-orange-500 to-amber-500 rounded-xl opacity-50 group-hover:opacity-75 transition duration-500 blur"></div>
                <div className={`relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl border ${pkg.popular ? "border-primary/40" : "border-slate-800"} shadow-2xl overflow-hidden`}>
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3 bg-primary/30 border border-primary/20">
                            <Award className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{pkg.hours} Intensive</h3>
                            <p className="text-xs text-primary">{pkg.level} · {pkg.popular ? "Most Popular" : pkg.saving}</p>
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">{pkg.price}<span className="text-sm font-normal text-slate-400">/package</span></div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-slate-500 line-through text-sm">{pkg.value}</span>
                          <span className="bg-green-500/15 text-green-400 px-2 py-0.5 rounded-md text-xs font-bold">{pkg.saving}</span>
                        </div>
                        <p className="text-sm mb-4 text-slate-300">{pkg.features}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" /><span className="text-slate-300">{pkg.whoFor}</span></li>
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" /><span className="text-slate-300">Course duration: {pkg.duration}</span></li>
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" /><span className="text-slate-300">Typically ready in: {pkg.readyIn}</span></li>
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" /><span className="text-slate-300">Mercedes-Benz A-Class automatic</span></li>
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" /><span className="text-slate-300">DVSA-approved instructor</span></li>
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" /><span className="text-slate-300">Pass Pledge & Fast-Track Test included</span></li>
                    </ul>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-pink-500/10 border border-pink-400/20 rounded-lg px-3 py-1.5">
                        <span className="text-pink-300 text-xs font-medium">Klarna — Pay in 3 interest-free</span>
                      </div>
                      <div className="bg-white/10 rounded-lg px-3 py-1.5">
                        <span className="text-gray-300 text-xs">Apple Pay / G Pay</span>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg shadow-primary/20" onClick={triggerConfetti}>
                      <Calendar className="h-4 w-4 mr-2" />
                      Book This Package
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-300 mb-4">Other Intensive Packages</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {Object.entries(PACKAGES).filter(([key]) => key !== packageKey).map(([key, p]) => (
                    <Button key={key} variant="outline" className="text-slate-300 border-slate-700 hover:bg-slate-800 hover:border-primary/50 transition-colors text-xs" onClick={() => window.location.href = `/booking/intensive-${key}`}>
                      {p.hours}
                    </Button>
                  ))}
                </div>
                <div className="mt-3">
                  <Button variant="outline" className="text-slate-300 border-slate-700 hover:bg-slate-800 hover:border-primary/50 transition-colors w-full" onClick={() => window.location.href = '/intensive-driving-courses-ilford'}>
                    ← Back to All Courses
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div ref={widgetContainerRef} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="lg:w-1/2 min-h-[80vh]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Select Your Time</h2>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-orange-500 to-amber-500 rounded-xl opacity-40 group-hover:opacity-60 transition duration-500 blur"></div>
                <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl border border-slate-800 shadow-2xl h-full flex flex-col overflow-hidden">
                  <div className="p-5 border-b border-slate-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-300 mb-1">Select your preferred date and time</p>
                        <p className="text-xs text-slate-500">Instant confirmation & secure booking via Calendly</p>
                      </div>
                      <div className="px-3 py-1.5 bg-primary/20 border border-primary/30 rounded-full">
                        <p className="text-xs text-primary font-medium">{pkg.hours}</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden bg-white flex-grow">
                    <CalendlyWidget url={pkg.calendlyUrl} height={650} />
                  </div>
                  <div className="p-4 border-t border-slate-800 text-center bg-slate-900/50">
                    <p className="text-slate-500 text-xs">Powered by <span className="text-slate-400">Calendly</span> • Need help? <span className="text-primary">drivedojo@gmail.com</span></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default BookingIntensivePackage;