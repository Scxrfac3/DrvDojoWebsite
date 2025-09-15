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
import { loadStripe } from "@stripe/stripe-js";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  const [selectedPackage, setSelectedPackage] = useState("");
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
    selectedDate: "",
    selectedTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [animateBackground, setAnimateBackground] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Update progress based on current step
    const progressValues = {
      1: 50,
      2: 100,
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

  const handlePackageSelect = async (packageName) => {
    setIsLoading(true);
    setSelectedPackage(packageName);
    
    // Find the selected package to get its Stripe Price ID
    const selectedPkg = packages.find(pkg => pkg.id === packageName);
    
    if (selectedPkg && selectedPkg.stripePriceId) {
      // If package has Stripe Price ID, redirect directly to Stripe checkout
      try {
        // Initialize Stripe
        const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_51S6EZwDwpTXQ4PFJLdvKNdpTEXWlUypGmPrrIZOpD4kCnXWFbfRntEpbCY6TCz3mF4yC3sRm2yroUIKeeGPNxzLT00Dny18chv');
        
        // Create a checkout session
        // Try the API path first, then fall back to the direct Netlify function path
        const apiUrl = '/api/create-checkout-session';
        const netlifyFunctionUrl = '/.netlify/functions/create-checkout-session';
        
        let response;
        let session;
        
        try {
          // Try the API path first
          response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              priceId: selectedPkg.stripePriceId,
              packageName: selectedPkg.name,
              customerEmail: '', // Will be collected after payment
              promoCode: '',
              // Include minimal customer details in the session metadata
              customerDetails: {
                packageType: selectedPkg.id,
              }
            }),
          });
          
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `API request failed with status ${response.status}`);
          }
          
          session = await response.json();
          
        } catch (error) {
          console.log('API path failed, trying direct Netlify function path:', error.message);
          
          try {
            // If the API path fails, try the direct Netlify function path
            response = await fetch(netlifyFunctionUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                priceId: selectedPkg.stripePriceId,
                packageName: selectedPkg.name,
                customerEmail: '', // Will be collected after payment
                promoCode: '',
                // Include minimal customer details in the session metadata
                customerDetails: {
                  packageType: selectedPkg.id,
                }
              }),
            });
            
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error || `Netlify function request failed with status ${response.status}`);
            }
            
            session = await response.json();
            
          } catch (innerError) {
            console.error('Both API paths failed:', innerError.message);
            alert('Unable to connect to payment service. Please try again later.');
            setIsLoading(false);
            return;
          }
        }
        
        // Check if session has the required id
        if (!session || !session.id) {
          console.error('Invalid session response:', session);
          alert('Invalid response from payment service. Please try again.');
          setIsLoading(false);
          return;
        }
        
        // Redirect to Stripe Checkout
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
        
        if (result.error) {
          console.error('Stripe checkout error:', result.error.message);
          alert(`Payment error: ${result.error.message}`);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error:', error);
        alert(`Unable to process your request: ${error.message || 'Please try again later.'}`);
        setIsLoading(false);
      }
    } else {
      // If no Stripe Price ID (like for Intensive Lessons), proceed with normal flow
      setTimeout(() => nextStep(), 300);
      setIsLoading(false);
    }
  };


  const nextStep = () => {
    if (step < 2) {
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

  // Note: SuperSaaS booking functionality has been replaced with Calendly widget
  // All bookings now go through Stripe payment flow, then use Calendly for scheduling

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Find the selected package to get its Stripe Price ID
      const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);
      
      if (selectedPkg && selectedPkg.stripePriceId) {
        // Initialize Stripe
        const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_51S6EZwDwpTXQ4PFJLdvKNdpTEXWlUypGmPrrIZOpD4kCnXWFbfRntEpbCY6TCz3mF4yC3sRm2yroUIKeeGPNxzLT00Dny18chv');
        
        // Create a checkout session
        // Try the API path first, then fall back to the direct Netlify function path
        const apiUrl = '/api/create-checkout-session';
        const netlifyFunctionUrl = '/.netlify/functions/create-checkout-session';
        
        let response;
        let session;
        
        try {
          // Try the API path first
          response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              priceId: selectedPkg.stripePriceId,
              packageName: selectedPkg.name,
              customerEmail: formData.email || '',
              promoCode: formData.promoCode || '',
              // Include user details in the session metadata
              customerDetails: {
                firstName: formData.firstName,
                lastName: formData.lastName,
                phone: formData.phone,
                address: formData.address,
                experience: formData.experience,
                specialRequests: formData.specialRequests,
                selectedDate: formData.selectedDate,
                selectedTime: formData.selectedTime
              }
            }),
          });
          
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `API request failed with status ${response.status}`);
          }
          
          session = await response.json();
          
        } catch (error) {
          console.log('API path failed, trying direct Netlify function path:', error.message);
          
          try {
            // If the API path fails, try the direct Netlify function path
            response = await fetch(netlifyFunctionUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                priceId: selectedPkg.stripePriceId,
                packageName: selectedPkg.name,
                customerEmail: formData.email || '',
                promoCode: formData.promoCode || '',
                // Include user details in the session metadata
                customerDetails: {
                  firstName: formData.firstName,
                  lastName: formData.lastName,
                  phone: formData.phone,
                  address: formData.address,
                  experience: formData.experience,
                  specialRequests: formData.specialRequests,
                  selectedDate: formData.selectedDate,
                  selectedTime: formData.selectedTime
                }
              }),
            });
            
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error || `Netlify function request failed with status ${response.status}`);
            }
            
            session = await response.json();
            
          } catch (innerError) {
            console.error('Both API paths failed:', innerError.message);
            
            // Check if it's a promo code error
            if (innerError.message === 'Invalid promo code') {
              alert('The promo code you entered is not valid. Please check and try again.');
            } else {
              alert('Unable to connect to payment service. Please try again later.');
            }
            setIsSubmitting(false);
            return;
          }
        }
        
        // Check if session has the required id
        if (!session || !session.id) {
          console.error('Invalid session response:', session);
          alert('Invalid response from payment service. Please try again.');
          setIsSubmitting(false);
          return;
        }
        
        // Redirect to Stripe Checkout
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
        
        if (result.error) {
          console.error('Stripe checkout error:', result.error.message);
          alert(`Payment error: ${result.error.message}`);
          setIsSubmitting(false);
        }
      } else {
        // All packages now require payment through Stripe
        // After payment, customers will use the Calendly widget to schedule their lessons
        alert('This package requires payment processing. Please select a different package or contact us for assistance.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`Unable to process your request: ${error.message || 'Please try again later.'}`);
      setIsSubmitting(false);
    }
  };

  const packages = [
    {
      id: "payg",
      name: "Pay-as-you-go",
      price: "£76",
      unit: "/2 hours",
      stripePriceId: "price_1S6Hk0RlA1HTbrri5GHxTCBT", // Updated to match live Stripe account
      description: "Perfect for trying us out",
      features: [
        "2 hours lesson",
        "Personalized learning",
        "Beginner friendly",
      ],
      color: "blue",
      icon: <Car className="h-6 w-6" />,
    },
    {
      id: "6hour",
      name: "6-Hour Package",
      price: "£210",
      unit: "/package",
      stripePriceId: "price_1S6HkYRlA1HTbrri9GCcpnJ0", // Updated to match live Stripe account
      description: "Save money with our starter package",
      features: [
        "6 hours of lessons",
        "Structured learning plan",
        "Progress tracking",
      ],
      color: "purple",
      icon: <Award className="h-6 w-6" />,
    },
    {
      id: "10hour",
      name: "10-Hour Package",
      price: "£340",
      unit: "/package",
      stripePriceId: "price_1S6HlURlA1HTbrrixRKO6sUP", // Updated to match live Stripe account
      description: "Most Popular - Best value for money!",
      features: [
        "10 hours of lessons",
        "Progress tracking",
        "Best value for most learners",
      ],
      color: "purple",
      popular: true,
      icon: <Award className="h-6 w-6" />,
    },
    {
      id: "intensive",
      name: "Intensive Lessons",
      price: "£40",
      unit: "/hour",
      stripePriceId: "price_1S6HpsRlA1HTbrriTVRRonz6", // Updated to match live Stripe account
      description: "Fast-track your learning",
      features: [
        "Tailored to student needs",
        "Contact for quote based on location",
        "Comprehensive training",
      ],
      color: "green",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      id: "mocktest",
      name: "Mock Driving Test",
      price: "£90",
      unit: "/test",
      stripePriceId: "price_1S6Hm0RlA1HTbrriSsI96XYS", // Updated to match live Stripe account
      description: "Perfect practice before your test",
      features: [
        "Real test conditions",
        "45 minutes duration",
        "Detailed feedback",
      ],
      color: "blue",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      id: "testrental",
      name: "Driving Test Car Rental",
      price: "£150",
      unit: "/3 hours",
      stripePriceId: "price_1S6Hn4RlA1HTbrriiVZv6sIz", // Updated to match live Stripe account
      description: "3 hours: arrive 15min early, practice maneuvers, home drop-off",
      features: [
        "3 hours booking",
        "Arrive 15 minutes before test",
        "Practice maneuvers",
        "Home drop-off after test",
      ],
      color: "green",
      icon: <Car className="h-6 w-6" />,
    },
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
                Select a Package
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Pick the best plan for your needs. We recommend the 10-hour
                package for best value.
              </p>
              <div className="mt-4 p-4 bg-blue-900/30 rounded-lg border border-blue-700/50">
                <p className="text-blue-200 text-sm">
                  <strong>Note:</strong> After payment, book your lesson times.
                </p>
              </div>
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
                        disabled={isLoading}
                      >
                        {isLoading ? "Processing..." : "Select Package"}
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-400 mb-4">
                All packages include free theory test prep.
              </p>
              <Button
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800"
                onClick={() => nextStep()}
              >
                Continue
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
                Complete Booking
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Almost done! Fill in your details. After payment, book your lesson times.
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
                        Beginner (No experience)
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
                        Some Experience (Few lessons)
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
                        Experienced (Ready for test)
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="selectedDate" className="text-white">
                      Preferred Date
                    </Label>
                    <Input
                      id="selectedDate"
                      name="selectedDate"
                      type="date"
                      value={formData.selectedDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="bg-slate-700/70 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="selectedTime" className="text-white">
                      Preferred Time
                    </Label>
                    <select
                      id="selectedTime"
                      name="selectedTime"
                      value={formData.selectedTime}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/70 border-slate-600 text-white rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none"
                      required
                    >
                      <option value="">Select a time slot</option>
                      <option value="08:00">08:00 - 10:00</option>
                      <option value="10:00">10:00 - 12:00</option>
                      <option value="12:00">12:00 - 14:00</option>
                      <option value="14:00">14:00 - 16:00</option>
                      <option value="16:00">16:00 - 18:00</option>
                      <option value="18:00">18:00 - 20:00</option>
                    </select>
                  </div>
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
                          {selectedPackage && packages.find(pkg => pkg.id === selectedPackage)?.stripePriceId ? "Complete Payment" : "Complete Purchase"}
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
                  Secure Booking
                </h3>
              </div>
              <p className="text-slate-300 mb-2">
                Your data is safe. After payment, access our booking system to schedule lessons.
              </p>
            </div>
          </motion.div>
        );

      default:
        return null;
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
            Expert DVSA-approved training to help you pass first time and drive with confidence.
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
              Step {isComplete ? 2 : step} of 2
            </span>
            <span className="text-slate-400 text-sm">{progress}% Complete</span>
          </div>
          <Progress value={progress} className="h-2 bg-slate-700" />

          <div className="flex justify-between mt-2">
            <div className="flex space-x-1 md:space-x-2">
              {[1, 2].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`text-xs px-2 py-1 rounded ${step === stepNumber ? "bg-blue-600 text-white" : step > stepNumber || isComplete ? "bg-green-600 text-white" : "bg-slate-700 text-slate-300"}`}
                >
                  {stepNumber === 1
                    ? "Plan"
                    : "Info"}
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
