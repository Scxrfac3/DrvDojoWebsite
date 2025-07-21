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
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Learner Driver – Terms and conditions</h1>

          <section className="mb-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">In order to have driving lessons you must:</h2>
            <ul className="list-disc list-inside ml-4 text-white/90">
              <li>Be aged 17 or older (16 or over if disabled)</li>
              <li>Hold a driving licence that is valid for the UK (provisional, full or an appropriate foreign licence)</li>
            </ul>
            <p className="mt-4 text-white/90">It is your responsibility to provide your instructor with proof that you have a valid licence to drive before the commencement of your first driving lesson. If you fail to provide this proof, your instructor is entitled to refuse to conduct the driving lesson but may still charge you for such driving lesson.</p>
          </section>

          <section className="mb-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">PAYING FOR LESSONS</h2>

            <h3 className="text-xl font-medium mb-2 text-white">PRE-PAYING WITH DrvDojo Driving School</h3>
            <p className="mb-4 text-white/90">DrvDojo Driving School operates its website and its contact centre in order to allow you, the customer, to purchase driving lessons packages with a DrvDojo Driving School driving instructor. You can pay for driving lessons in advance via one of the following methods:</p>
            <ul className="list-disc list-inside ml-4 mb-4 text-white/90">
              <li>Payment by credit or debit card online at drvdojo.co.uk (example URL, please replace with actual)</li>
            </ul>
            <p className="mb-4 text-white/90">As part of its booking service, DrvDojo Driving School confirm and agree that the following shall apply to all pre-paid bookings:</p>
            <ul className="list-disc list-inside ml-4 mb-4 text-white/90">
              <li>Payment from your funds to the instructor for lessons delivered will only be made in circumstances where you have not raised a dispute with DrvDojo Driving School in line with the policy detailed below;</li>
              <li>Following delivery of each driving lesson, your instructor will confirm to DrvDojo Driving School that the driving lesson has been delivered.</li>
            </ul>
            <p className="mb-4 text-white/90">In the event of a query or dispute about any aspect of your driving lessons or your instructor, you should contact DrvDojo Driving School within the time frame detailed above and we will endeavour to resolve the issue promptly.</p>

            <h3 className="text-xl font-medium mb-2 text-white">PAYING YOUR INSTRUCTOR DIRECTLY</h3>
            <p className="mb-4 text-white/90">You can also pay for lessons by paying your instructor directly without involving DrvDojo Driving School. Your instructor will confirm which payment methods they can accept. If you pay your instructor directly you should obtain a receipt. DrvDojo Driving School does not accept any responsibility for any payments you make directly to your instructor.</p>
          </section>

          <section className="mb-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">REFUND POLICY</h2>
            <p className="mb-4 text-white/90">DrvDojo Driving School operates a “No Quibble Refund Guarantee”. If you decide you no longer wish to have driving lessons through DrvDojo Driving School, we will refund any funds remaining in your in line with the refund terms below, with 10% charge.</p>
            <p className="mb-4 text-white/90">For security reasons, any refund of your funds will be made back to the card from which the original payment was taken. If for any reason those card details have become invalid before any refund can be made, DrvDojo Driving School reserves the right to verify the identity of the person requesting the refund and seek verification of the validity of any alternative card or bank account details provided by you.</p>
            <p className="mb-4 text-white/90">Any funds paid directly to your instructor are not protected.</p>
            <p className="mb-4 text-white/90">Funds paid to DrvDojo Driving School for prepaid driving lessons to be provided by your instructor must be applied to driving lessons by you within six months of the date of your original payment to DrvDojo Driving School. You acknowledge that after the expiry of this six month period, you will not be entitled to a refund of any funds not applied to driving lessons or to utilise these funds for booking further driving lessons. If, at any point during this six month period you determine that you do not wish to take any more of your prepaid driving lessons, you are entitled to a refund of the balance of your funds.</p>
            <p className="mb-4 text-white/90">You can only pay for driving lessons via the methods outlined above. You cannot pay for driving lessons via any other method and neither DrvDojo Driving School nor your instructor accept any liability for monies for lessons paid for by any other method than those outlined above. We do not for example arrange driving lessons through any social media channel or auction site or any other website.</p>
          </section>

          <section className="mb-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">REDEEMING PREPAID LESSONS</h2>
            <p className="mb-4 text-white/90">You and your instructor are responsible for agreeing such matters as the timing, location and duration of individual driving lessons.</p>
            <p className="mb-4 text-white/90">You must notify your instructor of any matters existing at any time that may affect your ability or entitlement to have driving lessons, for example, but not limited to, any lack, or loss, of a valid driving licence.</p>
            <p className="mb-4 text-white/90">Your instructor cannot guarantee that they will be available each time you choose.</p>
          </section>

          <section className="mb-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">CANCELLATION OF LESSONS</h2>
            <p className="mb-4 text-white/90">If You or Your Instructor wish to cancel a lesson a minimum of 48 hours’ prior notice should be given. If Your Instructor cancels a lesson without giving this minimum period of notice Your Instructor shall rearrange the lesson. Cancellations made by You must be made through the office or directly between You and Your Instructor. Please note that the office is not open on Sundays. Cancellation requests cannot be actioned outside of office hours.</p>
            <p className="mb-4 text-white/90">If you do not give at least 48 hours’ notice of cancellation You will be charged for the lesson(s) concerned in full.</p>
            <p className="mb-4 text-white/90">In the event of you having booked your driving test, the Driver and Vehicle Standards Agency (DVSA) requires you to give three clear working days to cancel your test. This may mean that you may lose your DVSA test fee if your instructor says you’re not ready for your test within this three-day notice period.</p>
          </section>

          <section className="mb-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">PAYMENTS AND LESSON BOOKINGS</h2>
            <p className="mb-4 text-white/90">You must pay for any tuition at least 48 hours before the start of the lesson. Please note that the office is not open on Sundays. Payments cannot be taken outside office hours. You can use one of the following methods of payment:</p>
            <ul className="list-disc list-inside ml-4 mb-4 text-white/90">
              <li>Voucher and gift cards have no cash value and have to be redeemed against tuition.</li>
              <li>Voucher and gift cards are not transferable once they have been redeemed.</li>
              <li>Payment by cash or cheque direct to Your Instructor (any cheque must be made payable to Your Instructor)</li>
            </ul>
            <p className="mb-4 text-white/90">Please note debit and cards are valid until the date shown thereon.</p>
            <p className="mb-4 text-white/90">DrvDojo Driving School has no responsibility or liability to You for payments made by any other means. If You pay Your Instructor directly by any method, You should obtain a receipt. DrvDojo Driving School accepts no responsibility for any payments made directly to instructors.</p>
          </section>

          <section className="mb-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">PRICE CHANGES</h2>
            <p className="mb-4 text-white/90">The cost of prepaid tuition is based on the lesson price in force at the time of booking and with the exception of the circumstances set out below, will be honoured for 12 months thereafter irrespective of any price increase that may occur between the date of booking and when the lessons are taken. Any unused lessons remaining after 12 months have elapsed shall have any lesson price increase applied prior to the lessons being taken.</p>
          </section>
        </div>
      </main>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default Terms;
