import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import Navbar from '../layout/Navbar'; // Import Navbar
import Footer from '../layout/Footer'; // Import Footer

const Terms = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorative elements - similar to Services.tsx */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-600/20 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-green-600/20 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-600/20 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>

      {/* Animated particles - similar to Services.tsx */}
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

      <Navbar /> {/* Add Navbar */}

      <main className="pt-[100px] relative z-10">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Terms of Service</h1>

          <section className="mb-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-lg">
            <p className="text-lg text-white/90 mb-6">Welcome to Drive Dojo Driving School! We are committed to providing you with the highest quality of driving tuition. Please take a moment to read through our terms of service, which govern our lessons and services.</p>
            
            <div className="bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-6 rounded">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">Important Policy: Driving Test Car Hire</h3>
              <p className="text-white/90">Please note that the hire of a Drive Dojo Driving School car for a practical driving test is exclusively available to students who have completed a minimum of 10 hours of practical training with one of our instructors.</p>
            </div>
          </section>

          <section className="mb-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Your Lessons & Instructor</h2>
            
            <h3 className="text-xl font-medium mb-2 text-blue-300">Provisional Licence</h3>
            <p className="mb-4 text-white/90">You are required to be in possession of a current, valid UK provisional driving licence. On your first lesson, you must present this to your instructor for verification. It is your responsibility to inform your instructor of any changes to your licence.</p>
            
            <h3 className="text-xl font-medium mb-2 text-blue-300">Instructor Relationship</h3>
            <p className="mb-4 text-white/90">Your instructor is a self-employed franchisee of Drive Dojo Driving School. You and your instructor are responsible for agreeing on all matters relating to the timing, location, and duration of individual lessons.</p>
            
            <h3 className="text-xl font-medium mb-2 text-blue-300">Payments</h3>
            <p className="mb-4 text-white/90">Financial transactions for lessons are made directly between you and your instructor. Any refund or reimbursement must be claimed from your instructor directly. Lesson fees shall be paid in advance of each session.</p>
            
            <h3 className="text-xl font-medium mb-2 text-blue-300">Block Bookings</h3>
            <p className="text-white/90">Any block lessons paid for must be taken within 6 months of purchase. Refunds for partially used block bookings will be calculated based on the lessons taken, charged at the standard non-discounted hourly rate.</p>
          </section>

          <section className="mb-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. The Practical Driving Test</h2>
            
            <h3 className="text-xl font-medium mb-2 text-blue-300">Instructor's Discretion</h3>
            <p className="mb-4 text-white/90">Your instructor reserves the right to refuse the use of their car for a practical test if they feel you have not reached a safe and competent standard of driving.</p>
            
            <h3 className="text-xl font-medium mb-2 text-blue-300">Vehicle Responsibility</h3>
            <p className="mb-4 text-white/90">During the practical driving test, you (not the examiner or instructor) are responsible for the vehicle. In the unlikely event of a road traffic accident, you would be liable for any insurance excess (up to £800).</p>
            
            <h3 className="text-xl font-medium mb-2 text-blue-300">Short Notice Tests</h3>
            <p className="text-white/90">A "short notice test" is defined as a test booked with two weeks or less notice from the first planned lesson. These packages require a minimum purchase of five hours of tuition (2-hour assessment, 3-hour test day hire). If your instructor deems you are not test-ready after the assessment, they are not obligated to take you, and we are not liable for any lost DVSA test fees.</p>
          </section>

          <section className="mb-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Cancellations, Changes & Refunds</h2>
            
            <h3 className="text-xl font-medium mb-2 text-blue-300">Cancelling a Lesson</h3>
            <p className="mb-4 text-white/90">You must give your instructor a minimum of 48 hours' notice to cancel a scheduled lesson. Cancellations made with less than 48 hours' notice will be charged in full. This must be done by contacting your instructor directly.</p>
            
            <h3 className="text-xl font-medium mb-2 text-blue-300">Instructor Cancellations</h3>
            <p className="mb-4 text-white/90">If your instructor needs to cancel a lesson due to mechanical breakdown or any other cause, they reserve the right to rearrange the lesson to a time convenient for both parties.</p>
            
            <h3 className="text-xl font-medium mb-2 text-blue-300">Cancelling a Driving Test</h3>
            <p className="mb-4 text-white/90">The DVSA requires 10 clear working days to cancel or reschedule a driving test. You may lose your DVSA test fee if you do not provide sufficient notice.</p>
            
            <h3 className="text-xl font-medium mb-2 text-blue-300">Refunds</h3>
            <p className="text-white/90">Refunds for pre-paid tuition are subject to our cancellation policy. Partial block booking refunds will be calculated pro-rata, with lessons already taken being charged at the full standard rate.</p>
          </section>

          <section className="mb-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. General Terms</h2>
            
            <h3 className="text-xl font-medium mb-2 text-blue-300">Changes to Terms</h3>
            <p className="mb-4 text-white/90">We may change the terms of this Agreement at any time by publishing modified terms on our website. Your continued use of our services after a change has been posted will signify your acceptance of the modified terms.</p>
            
            <h3 className="text-xl font-medium mb-2 text-blue-300">Transferability</h3>
            <p className="mb-4 text-white/90">You cannot sell or transfer lessons which have been purchased in your name to any other person.</p>
            
            <h3 className="text-xl font-medium mb-2 text-blue-300">Your Rights</h3>
            <p className="text-white/90">Your statutory rights as a consumer are not affected by these terms. If you have just changed your mind about our services, you may be able to get a refund if you are within the 14-day cooling-off period, subject to deductions for any services already provided.</p>
          </section>
        </div>
      </main>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default Terms;
