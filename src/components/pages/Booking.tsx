import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  Clock,
  Car,
  User,
  CreditCard,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Sparkles,
  Award,
  Shield,
  Zap,
  CalendarClock,
  PartyPopper,
} from "lucide-react";
import confetti from "canvas-confetti";
import supabase from "@/lib/supabase";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(20);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    experience: "beginner",
    specialRequests: "",
    promoCode: "",
    agreeToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [animateBackground, setAnimateBackground] = useState(false);

  useEffect(() => {
    // Update progress based on current step
    const progressValues = {
      1: 20,
      2: 40,
      3: 60,
      4: 80,
      5: 100,
    };
    setProgress(progressValues[step] || 0);

    // Animate background when completing booking
    if (isComplete) {
      setAnimateBackground(true);
      // Trigger confetti
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
      });
    }
  }, [step, isComplete]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (checked) => {
    setFormData({ ...formData, agreeToTerms: checked });
  };

  const handlePackageSelect = (packageName) => {
    setSelectedPackage(packageName);
    setTimeout(() => nextStep(), 300);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setTimeout(() => nextStep(), 300);
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
      setStep(5);
    }, 1500);
  };

  const packages = [
    {
      id: "starter",
      name: "Starter Package",
      price: "£30",
      unit: "/hour",
      description: "Perfect for beginners",
      features: [
        "Pay-as-you-go flexibility",
        "Personalized learning",
        "Beginner friendly",
      ],
      color: "blue",
      icon: <Car className="h-6 w-6" />,
    },
    {
      id: "popular",
      name: "10-Hour Package",
      price: "£300",
      unit: "/package",
      description: "Save £50 compared to hourly rate",
      features: [
        "Structured learning plan",
        "Progress tracking",
        "Best value for most learners",
      ],
      color: "purple",
      popular: true,
      icon: <Award className="h-6 w-6" />,
    },
    {
      id: "intensive",
      name: "Intensive Course",
      price: "£589",
      unit: "/20 hours",
      description: "Fast-track your learning",
      features: [
        "Comprehensive training",
        "Theory test support",
        "Test preparation included",
      ],
      color: "green",
      icon: <Zap className="h-6 w-6" />,
    },
  ];

  // Generate dates for the next 7 days starting from today
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split("T")[0]); // Format as YYYY-MM-DD
    }

    return dates;
  };

  const availableDates = generateAvailableDates();

  const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const formatDate = (dateString) => {
    const options = { weekday: "long", month: "long", day: "numeric" } as const;
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Choose Your Perfect Package
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Select the package that best fits your learning style and goals.
                Not sure which one? We recommend our most popular 10-hour
                package.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  className={`bg-gradient-to-b ${pkg.color === "blue" ? "from-blue-900/40 to-blue-800/20" : pkg.color === "purple" ? "from-purple-900/40 to-purple-800/20" : "from-green-900/40 to-green-800/20"} rounded-xl overflow-hidden border ${pkg.color === "blue" ? "border-blue-700/30" : pkg.color === "purple" ? "border-purple-700/30" : "border-green-700/30"} shadow-lg relative`}
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
                  <div className="p-6 cursor-pointer">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${pkg.color === "blue" ? "bg-blue-600/30 text-blue-400" : pkg.color === "purple" ? "bg-purple-600/30 text-purple-400" : "bg-green-600/30 text-green-400"}`}
                    >
                      {pkg.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-3xl font-bold text-white mb-2">
                      {pkg.price}
                      <span className="text-sm font-normal">{pkg.unit}</span>
                    </div>
                    <p
                      className={`text-sm mb-4 ${pkg.color === "blue" ? "text-blue-300" : pkg.color === "purple" ? "text-purple-300" : "text-green-300"}`}
                    >
                      {pkg.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle
                            className={`h-5 w-5 ${pkg.color === "blue" ? "text-blue-500" : pkg.color === "purple" ? "text-purple-500" : "text-green-500"} mr-2 flex-shrink-0 mt-0.5`}
                          />
                          <span className="text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        className={`w-full ${pkg.color === "blue" ? "bg-blue-600 hover:bg-blue-700" : pkg.color === "purple" ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" : "bg-green-600 hover:bg-green-700"}`}
                      >
                        Select Package
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-400 mb-4">
                All packages include a free theory test preparation app and
                access to our online learning portal.
              </p>
              <Button
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800"
                onClick={() => nextStep()}
              >
                I'm not sure yet, let me continue
              </Button>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Choose Your Preferred Date
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Select a date for your first lesson. Don't worry, you can always
                reschedule if needed.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableDates.map((date) => (
                  <motion.div
                    key={date}
                    className={`p-4 rounded-lg border ${selectedDate === date ? "border-blue-500 bg-blue-900/30" : "border-slate-700 bg-slate-800/50"} cursor-pointer hover:border-blue-400 hover:bg-slate-700/50 transition-colors`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleDateSelect(date)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${selectedDate === date ? "bg-blue-600/50 text-blue-200" : "bg-slate-700 text-slate-300"}`}
                      >
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          {formatDate(date)}
                        </p>
                        <p className="text-slate-400 text-sm">
                          {new Date(date).toLocaleDateString("en-GB", {
                            weekday: "long",
                          })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex justify-between">
                <Button
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800"
                  onClick={prevStep}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={nextStep}
                  disabled={!selectedDate}
                >
                  Continue
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-800/30 shadow-lg">
              <div className="flex items-center mb-4">
                <CalendarClock className="h-5 w-5 text-blue-400 mr-2" />
                <h3 className="text-xl font-bold text-white">
                  Flexible Scheduling
                </h3>
              </div>
              <p className="text-slate-300 mb-2">
                Can't find a suitable date? We offer flexible scheduling options
                to accommodate your needs.
              </p>
              <p className="text-slate-400 text-sm">
                You can also call us at +44 20 1234 5678 for personalized
                scheduling assistance.
              </p>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Choose Your Preferred Time
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Select a time slot that works best for you on{" "}
                {selectedDate && formatDate(selectedDate)}.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {availableTimes.map((time) => (
                  <motion.div
                    key={time}
                    className={`p-4 rounded-lg border ${selectedTime === time ? "border-blue-500 bg-blue-900/30" : "border-slate-700 bg-slate-800/50"} cursor-pointer hover:border-blue-400 hover:bg-slate-700/50 transition-colors`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleTimeSelect(time)}
                  >
                    <div className="flex items-center justify-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${selectedTime === time ? "bg-blue-600/50 text-blue-200" : "bg-slate-700 text-slate-300"}`}
                      >
                        <Clock className="h-4 w-4" />
                      </div>
                      <p className="text-white font-medium">{time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex justify-between">
                <Button
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800"
                  onClick={prevStep}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={nextStep}
                  disabled={!selectedTime}
                >
                  Continue
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-800/30 shadow-lg">
                <div className="flex items-center mb-4">
                  <Shield className="h-5 w-5 text-purple-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">
                    Our Guarantee
                  </h3>
                </div>
                <p className="text-slate-300 mb-2">
                  If you need to reschedule, you can do so up to 24 hours before
                  your lesson at no extra cost.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-800/30 shadow-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">
                    Pick-up Point
                  </h3>
                </div>
                <p className="text-slate-300 mb-2">
                  Your instructor will pick you up from your preferred location
                  within our service area.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Complete Your Booking
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                We're almost there! Fill in your details to confirm your
                booking.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="bg-slate-700/70 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Smith"
                      className="bg-slate-700/70 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="bg-slate-700/70 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+44 7123 456789"
                      className="bg-slate-700/70 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-white">
                    Pick-up Address
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main St, London"
                    className="bg-slate-700/70 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-white">Driving Experience</Label>
                  <RadioGroup
                    defaultValue="beginner"
                    name="experience"
                    className="flex flex-col space-y-2"
                    value={formData.experience}
                    onValueChange={(value) =>
                      setFormData({ ...formData, experience: value })
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="beginner"
                        id="beginner"
                        className="border-blue-500 text-blue-500"
                      />
                      <Label
                        htmlFor="beginner"
                        className="text-slate-300 cursor-pointer"
                      >
                        Complete Beginner (Never driven before)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="some-experience"
                        id="some-experience"
                        className="border-blue-500 text-blue-500"
                      />
                      <Label
                        htmlFor="some-experience"
                        className="text-slate-300 cursor-pointer"
                      >
                        Some Experience (Had a few lessons)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="experienced"
                        id="experienced"
                        className="border-blue-500 text-blue-500"
                      />
                      <Label
                        htmlFor="experienced"
                        className="text-slate-300 cursor-pointer"
                      >
                        Experienced (Preparing for test)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequests" className="text-white">
                    Special Requests (Optional)
                  </Label>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Any specific requirements or questions..."
                    className="bg-slate-700/70 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="promoCode" className="text-white">
                    Promo Code (Optional)
                  </Label>
                  <Input
                    id="promoCode"
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={handleInputChange}
                    placeholder="Enter promo code"
                    className="bg-slate-700/70 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                  />
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={handleCheckboxChange}
                    className="border-slate-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                  <Label
                    htmlFor="terms"
                    className="text-slate-300 text-sm cursor-pointer"
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      terms and conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      privacy policy
                    </a>
                    .
                  </Label>
                </div>

                <div className="pt-4 flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-slate-600 text-white hover:bg-slate-800"
                    onClick={prevStep}
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 relative overflow-hidden group"
                      disabled={isSubmitting || !formData.agreeToTerms}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <>
                          Complete Booking
                          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          <motion.div
                            className="absolute inset-0 bg-white"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.4 }}
                            style={{ opacity: 0.2 }}
                          />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </form>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-800/30 shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="h-5 w-5 text-blue-400 mr-2" />
                <h3 className="text-xl font-bold text-white">
                  Secure Booking Promise
                </h3>
              </div>
              <p className="text-slate-300 mb-2">
                Your personal information is encrypted and secure. No payment is
                required now - you'll pay directly to your instructor.
              </p>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12 max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <PartyPopper className="h-12 w-12 text-white" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Booking Confirmed!
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 mb-8"
            >
              <p className="text-xl text-slate-300">
                Your driving lesson has been successfully booked.
              </p>
              <p className="text-slate-400">
                We've sent a confirmation email to{" "}
                <span className="text-white font-medium">
                  {formData.email || "your email address"}
                </span>
                . Your instructor will contact you 24 hours before your lesson.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-xl mb-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Booking Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-slate-400 text-sm">Package</p>
                  <p className="text-white font-medium">
                    {selectedPackage === "starter"
                      ? "Starter Package"
                      : selectedPackage === "popular"
                        ? "10-Hour Package"
                        : selectedPackage === "intensive"
                          ? "Intensive Course"
                          : "Custom Package"}
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Date & Time</p>
                  <p className="text-white font-medium">
                    {selectedDate && formatDate(selectedDate)},{" "}
                    {selectedTime || "Time to be confirmed"}
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Student</p>
                  <p className="text-white font-medium">
                    {formData.firstName} {formData.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-white font-medium">
                    {formData.address || "Address to be confirmed"}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <p className="text-slate-300">What would you like to do next?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  View My Bookings
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800"
                  onClick={() => (window.location.href = "/")}
                >
                  Return to Homepage
                </Button>
              </div>
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`bg-slate-900 min-h-screen relative overflow-hidden ${animateBackground ? "animate-background" : ""}`}
    >
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-600/20 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-green-600/20 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-600/20 rounded-full opacity-20 blur-3xl"></div>

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
            className="inline-flex items-center mb-3 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Book Your Lessons
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Start Your
            </span>
            <span className="text-white"> Driving Journey</span>
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Just a few steps away from becoming a confident driver. Book your
            lessons now and get on the road to success!
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex justify-between mb-2">
            <span className="text-slate-400 text-sm">
              Step {isComplete ? 5 : step} of 5
            </span>
            <span className="text-slate-400 text-sm">{progress}% Complete</span>
          </div>
          <Progress value={progress} className="h-2 bg-slate-700" />

          <div className="flex justify-between mt-2">
            <div className="flex space-x-1 md:space-x-2">
              {[1, 2, 3, 4, 5].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`text-xs px-2 py-1 rounded ${step === stepNumber ? "bg-blue-600 text-white" : step > stepNumber || isComplete ? "bg-green-600 text-white" : "bg-slate-700 text-slate-300"}`}
                >
                  {stepNumber === 1
                    ? "Package"
                    : stepNumber === 2
                      ? "Date"
                      : stepNumber === 3
                        ? "Time"
                        : stepNumber === 4
                          ? "Details"
                          : "Confirm"}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
