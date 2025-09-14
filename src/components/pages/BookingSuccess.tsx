import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, PartyPopper, Calendar, Car, Clock } from "lucide-react";
import confetti from "canvas-confetti";

const BookingSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [isLoading, setIsLoading] = useState(true);
  const [sessionDetails, setSessionDetails] = useState(null);
  const [isBookingCreated, setIsBookingCreated] = useState(false);
  const [isCreatingBooking, setIsCreatingBooking] = useState(false);

  useEffect(() => {
    const fetchSessionDetails = async () => {
      if (sessionId) {
        // Try the API path first, then fall back to the direct Netlify function path
        const apiUrl = `/api/get-checkout-session?session_id=${sessionId}`;
        const netlifyFunctionUrl = `/.netlify/functions/get-checkout-session?session_id=${sessionId}`;
        
        try {
          let response;
          try {
            response = await fetch(apiUrl);
          } catch (error) {
            // If the API path fails, try the direct Netlify function path
            console.log('API path failed, trying direct Netlify function path');
            response = await fetch(netlifyFunctionUrl);
          }
          
          const session = await response.json();
          setSessionDetails(session);
          
          // Trigger confetti
          confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
          });
          
          // Create SuperSaaS booking if payment is successful
          if (session.payment_status === 'paid') {
            // For the new flow, we don't have customer details yet
            // The customer will book their lessons using the SuperSaaS widget
            console.log('Payment successful. Customer will book lessons using SuperSaaS widget.');
          }
        } catch (error) {
          console.error("Error fetching session details:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchSessionDetails();
  }, [sessionId]);

  const createSuperSaaSBooking = async (customerDetailsJson, customerEmail) => {
    try {
      setIsCreatingBooking(true);
      
      // Parse customer details from metadata
      const customerDetails = JSON.parse(customerDetailsJson);
      
      // Try the API path first, then fall back to the direct Netlify function path
      const apiUrl = '/api/create-supersaas-booking';
      const netlifyFunctionUrl = '/.netlify/functions/create-supersaas-booking';
      
      let response;
      
      try {
        // Try the API path first
        response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            customerName: `${customerDetails.firstName} ${customerDetails.lastName}`,
            customerEmail: customerEmail || customerDetails.email,
            customerPhone: customerDetails.phone,
            selectedDate: customerDetails.selectedDate,
            selectedTime: customerDetails.selectedTime,
            packageType: sessionDetails?.metadata?.packageName || 'Standard Lesson',
            address: customerDetails.address,
          }),
        });
        
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success) {
          setIsBookingCreated(true);
        } else {
          console.error('SuperSaaS booking failed:', result.message);
        }
        
      } catch (error) {
        console.log('API path failed, trying direct Netlify function path:', error.message);
        
        // If the API path fails, try the direct Netlify function path
        response = await fetch(netlifyFunctionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            customerName: `${customerDetails.firstName} ${customerDetails.lastName}`,
            customerEmail: customerEmail || customerDetails.email,
            customerPhone: customerDetails.phone,
            selectedDate: customerDetails.selectedDate,
            selectedTime: customerDetails.selectedTime,
            packageType: sessionDetails?.metadata?.packageName || 'Standard Lesson',
            address: customerDetails.address,
          }),
        });
        
        if (!response.ok) {
          throw new Error(`Netlify function request failed with status ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success) {
          setIsBookingCreated(true);
        } else {
          console.error('SuperSaaS booking failed:', result.message);
        }
      }
    } catch (error) {
      console.error('Error creating SuperSaaS booking:', error);
    } finally {
      setIsCreatingBooking(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="h-12 w-12 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Payment Successful!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 shadow-xl mb-8"
          >
            {isLoading ? (
              <p className="text-slate-300">Loading your booking details...</p>
            ) : sessionDetails ? (
              <div className="space-y-4">
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-white mb-4">Booking Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-slate-400 text-sm">Package</p>
                      <p className="text-white font-medium">
                        {sessionDetails.metadata?.packageName || "Driving Lesson Package"}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Amount Paid</p>
                      <p className="text-white font-medium">
                        £{(sessionDetails.amount_total / 100).toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Payment Status</p>
                      <p className="text-white font-medium capitalize">
                        {sessionDetails.payment_status}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Customer Email</p>
                      <p className="text-white font-medium">
                        {sessionDetails.customer_details?.email || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-slate-300">Unable to load booking details.</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <p className="text-slate-300 mb-6">
              Thank you for your payment! Your purchase is complete.
            </p>

            {/* SuperSaaS Scheduling Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl mt-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Schedule Your Driving Lessons</h3>
              <p className="text-slate-300 mb-6 text-center">
                <strong>Next Step:</strong> Use the calendar below to schedule your driving lessons. Your purchased package will be automatically applied when you book.
              </p>
              <div className="bg-blue-900/30 rounded-lg p-4 mb-6 border border-blue-700/50">
                <p className="text-blue-200 text-sm text-center">
                  Please schedule your first lesson within the next 7 days to secure your preferred time slots. You'll need to enter your details when booking.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <iframe
                  src="https://www.supersaas.com/schedule/drive_dojo/Driving_Lessons?api_key=y2Qp49ZINgve0gtnEkz4IA"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="yes"
                  title="Schedule Your Driving Lessons"
                ></iframe>
              </div>
            </motion.div>
            
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-800/30 shadow-xl mt-8">
              <h3 className="text-xl font-bold text-white mb-4 text-center">What's Next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="text-white font-medium mb-2">Book Your Lessons</h4>
                  <p className="text-slate-300 text-sm">Use the calendar above to select your preferred lesson times and enter your details.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-purple-400" />
                  </div>
                  <h4 className="text-white font-medium mb-2">Get Confirmation</h4>
                  <p className="text-slate-300 text-sm">Receive instant confirmation for each lesson you book via email.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Car className="h-6 w-6 text-green-400" />
                  </div>
                  <h4 className="text-white font-medium mb-2">Start Driving</h4>
                  <p className="text-slate-300 text-sm">Your instructor will pick you up at your location for each scheduled lesson.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => (window.location.href = "/")}
              >
                Return to Homepage
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800"
                onClick={() => (window.location.href = "/booking")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Book Another Package
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingSuccess;