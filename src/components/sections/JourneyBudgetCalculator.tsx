import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CreditCard,
  Calculator,
  Wallet,
  CheckCircle,
  ShieldCheck,
  BookOpen,
  Car,
  FileText,
  Info,
  Star,
} from 'lucide-react';

// ─── CONSTANTS ─────────────────────────────────────────────

const HOURLY_RATE = 36;
const BLOCK_HOURS = 10;
const BLOCK_PRICE = 340;

const DVSA_FEES = {
  provisional: { label: 'Provisional Licence', cost: 34, icon: FileText },
  theory: { label: 'Theory Test', cost: 23, icon: BookOpen },
  practical: { label: 'Practical Test', cost: 62, icon: Car },
};

const TEST_RENTAL = { label: 'Test Day Car Rental', cost: 150, icon: Car };

// ─── COMPONENT ─────────────────────────────────────────────

export default function JourneyBudgetCalculator() {
  const [hours, setHours] = useState(20);
  const [includeFees, setIncludeFees] = useState<Record<string, boolean>>({
    provisional: false,
    theory: false,
    practical: false,
  });
  const [includeRental, setIncludeRental] = useState(false);

  const toggleFee = (key: string) => {
    setIncludeFees((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const breakdown = useMemo(() => {
    const tuition = hours * HOURLY_RATE;
    const feesTotal = Object.entries(DVSA_FEES).reduce(
      (sum, [key, fee]) => sum + (includeFees[key] ? fee.cost : 0),
      0,
    );
    const rentalCost = includeRental ? TEST_RENTAL.cost : 0;
    const total = tuition + feesTotal + rentalCost;

    // Block booking comparison
    const blocksNeeded = Math.ceil(hours / BLOCK_HOURS);
    const blockCost = blocksNeeded * BLOCK_PRICE;
    const blockSavings = tuition - blockCost;

    return { tuition, feesTotal, rentalCost, total, blocksNeeded, blockCost, blockSavings };
  }, [hours, includeFees, includeRental]);

  const barMax = Math.max(breakdown.total * 1.2, 500);

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-[#0d0d0d] text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 60 + 30,
              height: Math.random() * 60 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.03, 0.08, 0.03], scale: [0, 1, 0] }}
            transition={{ duration: Math.random() * 8 + 8, repeat: Infinity, delay: Math.random() * 4 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Budget Calculator</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Your Total <span className="text-primary">Journey Cost</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Estimate the full cost of learning to drive — tuition plus all DVSA fees.
          </p>
        </motion.div>

        <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 md:p-8">
          {/* Hours slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <Car className="w-4 h-4 text-primary" />
                Estimated Lesson Hours
              </h3>
              <span className="text-2xl font-black text-primary">{hours} hrs</span>
            </div>
            <input
              type="range"
              min={5}
              max={60}
              step={1}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>5 hrs</span>
              <span>60 hrs</span>
            </div>
          </div>

          {/* Tuition line */}
          <div className="mb-6 p-4 bg-white/[0.02] border border-white/[0.06] rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">
                Tuition ({hours} hrs × £{HOURLY_RATE}/hr)
              </span>
              <span className="text-white font-bold">£{breakdown.tuition}</span>
            </div>
          </div>

          {/* DVSA fees toggles */}
          <div className="mb-4">
            <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Info className="w-3.5 h-3.5" />
              DVSA & Test Fees
            </h4>
            <div className="space-y-2">
              {Object.entries(DVSA_FEES).map(([key, fee]) => {
                const FeeIcon = fee.icon;
                const isChecked = includeFees[key];
                return (
                  <button
                    key={key}
                    onClick={() => toggleFee(key)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                      isChecked
                        ? 'border-primary/30 bg-primary/5'
                        : 'border-white/[0.06] bg-white/[0.01] hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isChecked ? 'bg-primary/20' : 'bg-white/5'}`}>
                        <FeeIcon className={`w-4 h-4 ${isChecked ? 'text-primary' : 'text-gray-500'}`} />
                      </div>
                      <span className="text-gray-300 text-sm">{fee.label}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white text-sm">£{fee.cost}</span>
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        isChecked ? 'border-primary bg-primary' : 'border-white/20'
                      }`}>
                        {isChecked && <CheckCircle className="w-3 h-3 text-white" />}
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Test rental toggle */}
              <button
                onClick={() => setIncludeRental(!includeRental)}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                  includeRental
                    ? 'border-primary/30 bg-primary/5'
                    : 'border-white/[0.06] bg-white/[0.01] hover:border-white/15'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${includeRental ? 'bg-primary/20' : 'bg-white/5'}`}>
                    <Car className={`w-4 h-4 ${includeRental ? 'text-primary' : 'text-gray-500'}`} />
                  </div>
                  <span className="text-gray-300 text-sm">{TEST_RENTAL.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white text-sm">£{TEST_RENTAL.cost}</span>
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                    includeRental ? 'border-primary bg-primary' : 'border-white/20'
                  }`}>
                    {includeRental && <CheckCircle className="w-3 h-3 text-white" />}
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Visual breakdown bar */}
          <div className="mb-6">
            <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Cost Breakdown</h4>
            <div className="h-8 bg-white/5 rounded-full overflow-hidden flex">
              {breakdown.tuition > 0 && (
                <motion.div
                  className="h-full bg-primary flex items-center justify-center text-[10px] font-bold text-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${(breakdown.tuition / barMax) * 100}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  {((breakdown.tuition / breakdown.total) * 100) > 12 ? `Tuition £${breakdown.tuition}` : ''}
                </motion.div>
              )}
              {breakdown.feesTotal > 0 && (
                <motion.div
                  className="h-full bg-amber-500 flex items-center justify-center text-[10px] font-bold text-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${(breakdown.feesTotal / barMax) * 100}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                >
                  {((breakdown.feesTotal / breakdown.total) * 100) > 12 ? `Fees £${breakdown.feesTotal}` : ''}
                </motion.div>
              )}
              {breakdown.rentalCost > 0 && (
                <motion.div
                  className="h-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${(breakdown.rentalCost / barMax) * 100}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                >
                  {((breakdown.rentalCost / breakdown.total) * 100) > 12 ? `Rental £${breakdown.rentalCost}` : ''}
                </motion.div>
              )}
            </div>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-primary" /> Tuition: £{breakdown.tuition}
              </span>
              {breakdown.feesTotal > 0 && (
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-amber-500" /> DVSA Fees: £{breakdown.feesTotal}
                </span>
              )}
              {breakdown.rentalCost > 0 && (
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-purple-500" /> Car Rental: £{breakdown.rentalCost}
                </span>
              )}
            </div>
          </div>

          {/* Total */}
          <div className="mb-6 p-5 bg-gradient-to-r from-primary/10 to-amber-500/5 border border-primary/20 rounded-xl text-center">
            <p className="text-gray-400 text-sm mb-1">Total Estimated Cost</p>
            <p className="text-4xl md:text-5xl font-black text-white">
              £{breakdown.total}
            </p>
          </div>

          {/* Smart tip */}
          {breakdown.blockSavings > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 p-4 bg-green-500/5 border border-green-500/15 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-green-400 fill-green-400" />
                <span className="text-green-400 font-semibold text-sm">Smart Saver Tip</span>
              </div>
              <p className="text-gray-300 text-sm">
                {breakdown.blocksNeeded === 1
                  ? `One 10-hour block booking at £${BLOCK_PRICE} saves you £${breakdown.blockSavings} vs. paying hourly.`
                  : `${breakdown.blocksNeeded} × 10-hour blocks at £${BLOCK_PRICE} each = £${breakdown.blockCost} — saving you £${breakdown.blockSavings} vs. hourly.`}
              </p>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/30 rounded-2xl p-5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px]" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-white font-bold">10-Hour Block Booking — £340</h4>
                <p className="text-gray-400 text-sm">
                  or 3 interest-free payments of <span className="text-white font-semibold">£113.33</span> with Klarna
                </p>
              </div>
              <Link
                to="/booking/10hour"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Secure Your Block
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
