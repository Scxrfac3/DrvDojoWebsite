import { useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { DollarSign, Clock, TrendingDown, TrendingUp, ArrowRight, AlertTriangle } from 'lucide-react';

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
}

function AnimatedNumber({ value, prefix = '', suffix = '' }: AnimatedNumberProps) {
  const motionValue = useMotionValue(value);
  const roundedValue = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useState(() => {
    const controls = animate(motionValue, value, { duration: 0.3, ease: 'easeOut' });
    return () => controls.stop;
  });

  return (
    <motion.span className="tabular-nums inline-block">
      {prefix}{roundedValue}{suffix}
    </motion.span>
  );
}

interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
  icon: React.ReactNode;
  accentColor: string;
}

function SliderInput({ label, value, min, max, step, unit, onChange, icon, accentColor }: SliderInputProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-gray-400">
          {icon}
          <span className="text-sm font-medium uppercase tracking-wider">{label}</span>
        </div>
        <div className="flex items-center gap-1 text-2xl font-bold">
          <span style={{ color: accentColor }}>{value}</span>
          <span className="text-gray-500 text-sm">{unit}</span>
        </div>
      </div>
      <div className="relative">
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ width: `${percentage}%`, backgroundColor: accentColor }}
            layoutId="roiSliderFill"
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none"
        />
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-600">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
}

export default function ROICalculator() {
  const [adminHours, setAdminHours] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(40);

  // Calculations
  const lostIncome = adminHours * hourlyRate * 52;
  const recoveredIncome = (adminHours - 1) * hourlyRate * 52;
  const netSavings = recoveredIncome;

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="bg-gray-900/50 backdrop-blur rounded-3xl border border-gray-800 p-8 md:p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">Hidden Cost Alert</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Time is Money
            </span>
          </h2>
          <p className="text-gray-400">
            See how much income you're losing to manual admin work every year
          </p>
        </motion.div>

        {/* Sliders */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <SliderInput
              label="Admin Hours per Week"
              value={adminHours}
              min={1}
              max={10}
              step={1}
              unit=" hrs"
              onChange={setAdminHours}
              icon={<Clock className="w-4 h-4" />}
              accentColor="#f59e0b"
            />
            <p className="text-gray-500 text-xs mt-2">
              Invoicing, receipts, diary management
            </p>
          </div>
          <div>
            <SliderInput
              label="Your Hourly Lesson Rate"
              value={hourlyRate}
              min={30}
              max={50}
              step={1}
              unit="/hr"
              onChange={setHourlyRate}
              icon={<DollarSign className="w-4 h-4" />}
              accentColor="#10b981"
            />
            <p className="text-gray-500 text-xs mt-2">
              What you charge per lesson hour
            </p>
          </div>
        </div>

        {/* Results Display */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Lost Income - Warning */}
          <motion.div
            className="bg-gradient-to-br from-red-900/30 to-red-950/50 rounded-2xl p-6 border border-red-500/30"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="w-5 h-5 text-red-400" />
              <span className="text-red-400 text-sm uppercase tracking-wider font-medium">
                Your Current Loss
              </span>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">
              <AnimatedNumber value={lostIncome} prefix="£" />
            </div>
            <p className="text-red-300/70 text-sm">
              Lost annually from admin tasks
            </p>
          </motion.div>

          {/* Recovered Income - Success */}
          <motion.div
            className="bg-gradient-to-br from-emerald-900/30 to-emerald-950/50 rounded-2xl p-6 border border-emerald-500/30"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 text-sm uppercase tracking-wider font-medium">
                With Blueprint
              </span>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
              <AnimatedNumber value={recoveredIncome} prefix="£" />
            </div>
            <p className="text-emerald-300/70 text-sm">
              Recovered annually (admin reduced to 1hr)
            </p>
          </motion.div>
        </div>

        {/* Big Number */}
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-emerald-900/20 rounded-2xl p-8 text-center border border-emerald-500/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
            Your Potential Annual Savings
          </p>
          <motion.div
            className="text-5xl md:text-6xl font-bold"
            key={netSavings}
          >
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              £<AnimatedNumber value={netSavings} />
            </span>
          </motion.div>
          <p className="text-gray-500 mt-3 text-sm">
            That's an extra <span className="text-emerald-400 font-semibold">£{Math.round(netSavings / 12).toLocaleString()}/month</span> in your pocket
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="w-full mt-8 py-5 px-8 bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-900 font-bold text-lg rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-shadow"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open('#checkout', '_blank')}
        >
          <span className="flex items-center justify-center gap-3">
            Stop Losing Money
            <ArrowRight className="w-5 h-5" />
          </span>
        </motion.button>

        <p className="text-center text-gray-500 text-xs mt-4">
          The Blueprint automates invoicing, mileage tracking, and expense logging
        </p>
      </motion.div>
    </div>
  );
}