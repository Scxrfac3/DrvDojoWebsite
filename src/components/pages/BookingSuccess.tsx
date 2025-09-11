import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";

const BookingSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [isLoading, setIsLoading] = useState(true);
  const [sessionDetails, setSessionDetails] = useState(null);

  useEffect(() => {
    const fetchSessionDetails = async () => {
      if (sessionId) {
        try {
          const response = await fetch(`/api/get-checkout-session?session_id=${sessionId}`);
          const session = await response.json();
          setSessionDetails(session);
          
          // Trigger confetti
          confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
          });
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
              Thank you for your payment! We've received your booking and will contact you shortly to confirm your lesson details.
            </p>

            {/* SuperSaaS Scheduling Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl mt-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Schedule Your Lessons</h3>
              <p className="text-slate-300 mb-6 text-center">
                Use the calendar below to schedule your driving lessons. Your purchased hours will be automatically deducted.
              </p>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Book Another Lesson
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