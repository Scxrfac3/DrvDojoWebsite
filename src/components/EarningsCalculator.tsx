import { useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { DollarSign, Users, Calendar, TrendingUp, ArrowRight } from 'lucide-react';

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

function AnimatedNumber({ value, prefix = '', suffix = '', decimals = 0 }: AnimatedNumberProps) {
  const motionValue = useMotionValue(value);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const controls = animate(motionValue, value, { duration: 0.3, ease: 'easeOut' });
    return controls.stop;
  }, [value, motionValue]);

  useEffect(() => {
    const unsubscribe = motionValue.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [motionValue]);

  const formattedValue = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.round(displayValue).toLocaleString();

  return (
    <span className="tabular-nums">
      {prefix}{formattedValue}{suffix}
    </span>
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
}

function SliderInput({ label, value, min, max, step, unit, onChange, icon }: SliderInputProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-gray-400">
          {icon}
          <span className="text-sm font-medium uppercase tracking-wider">{label}</span>
        </div>
        <div className="flex items-center gap-1 text-2xl font-bold">
          <span className="text-cyan-400">{value}</span>
          <span className="text-gray-500 text-sm">{unit}</span>
        </div>
      </div>
      <div className="relative">
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
            style={{ width: `${percentage}%` }}
            layoutId="sliderFill"
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

interface ResultCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  highlight?: boolean;
  bgClass?: string;
}

function ResultCard({ icon, label, value, prefix = '', suffix = '', decimals = 0, highlight = false, bgClass = 'bg-gray-900' }: ResultCardProps) {
  return (
    <motion.div
      className={`${bgClass} rounded-2xl p-5 border ${highlight ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' : 'border-gray-800'}`}
      whileHover={{ scale: highlight ? 1.02 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className={`${highlight ? 'text-cyan-400' : 'text-gray-500'}`}>
          {icon}
        </div>
        <span className="text-gray-400 text-xs uppercase tracking-wider">{label}</span>
      </div>
      <div className={`font-bold ${highlight ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
        <span className={highlight ? 'text-white' : 'text-gray-200'}>
          {prefix}
        </span>
        <span className={highlight ? 'text-cyan-400' : 'text-emerald-400'}>
          <AnimatedNumber value={value} decimals={decimals} />
        </span>
        <span className={highlight ? 'text-white' : 'text-gray-200'}>
          {suffix}
        </span>
      </div>
    </motion.div>
  );
}

interface CTAButtonProps {
  amount: number;
  onClick?: () => void;
}

function CTAButton({ amount }: CTAButtonProps) {
  const handlePurchase = () => {
    // Scroll to pricing section
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      className="w-full mt-8 py-5 px-8 bg-gradient-to-r from-cyan-500 to-emerald-500 text-gray-900 font-bold text-lg rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow"
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={handlePurchase}
    >
      <span className="flex items-center justify-center gap-3">
        Ready to earn <span className="text-xl">£{amount.toLocaleString()}</span>?
        <span>Get The ADI Blueprint Now</span>
        <ArrowRight className="w-5 h-5" />
      </span>
    </motion.button>
  );
}

export default function EarningsCalculator() {
  const [workingHours, setWorkingHours] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(40);

  // Calculations
  const studentsNeeded = workingHours / 2;
  const weeklyEarnings = workingHours * hourlyRate;
  const monthlyEarnings = weeklyEarnings * 4.33;
  const annualSalary = weeklyEarnings * 52;

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Driving Instructor Earnings Calculator
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            See exactly how much you can earn as an ADI with the Drive Dojo Blueprint
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          className="bg-gray-900/50 backdrop-blur rounded-3xl border border-gray-800 p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Sliders Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <SliderInput
                label="Working Hours per Week"
                value={workingHours}
                min={12}
                max={40}
                step={2}
                unit=" hrs"
                onChange={setWorkingHours}
                icon={<Calendar className="w-4 h-4" />}
              />
              <p className="text-gray-500 text-xs mt-2">
                12 hrs = Part-time • 40 hrs = Full diary
              </p>
            </div>
            <div>
              <SliderInput
                label="Hourly Rate"
                value={hourlyRate}
                min={30}
                max={50}
                step={1}
                unit="/hr"
                onChange={setHourlyRate}
                icon={<DollarSign className="w-4 h-4" />}
              />
              <p className="text-gray-500 text-xs mt-2">
                Average market rate: £35-£45/hr
              </p>
            </div>
          </div>

          {/* Key Metric - Annual Salary (Big Reveal) */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 via-gray-900 to-cyan-900/20 rounded-2xl p-8 mb-8 border border-cyan-500/30"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
                <span className="text-gray-400 text-sm uppercase tracking-wider">
                  Annual Earning Potential
                </span>
              </div>
              <motion.div
                className="text-6xl md:text-7xl lg:text-8xl font-bold"
                key={annualSalary}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
              >
                <span className="text-gray-400">£</span>
                <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  <AnimatedNumber value={annualSalary} />
                </span>
              </motion.div>
              <p className="text-gray-500 mt-4 text-sm">
                Based on {workingHours} hours/week × £{hourlyRate}/hour
              </p>
            </div>
          </motion.div>

          {/* Supporting Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ResultCard
              icon={<Users className="w-4 h-4" />}
              label="Students Needed"
              value={studentsNeeded}
              suffix=" students"
            />
            <ResultCard
              icon={<Calendar className="w-4 h-4" />}
              label="Weekly Earnings"
              value={weeklyEarnings}
              prefix="£"
            />
            <ResultCard
              icon={<DollarSign className="w-4 h-4" />}
              label="Monthly Earnings"
              value={monthlyEarnings}
              prefix="£"
            />
            <ResultCard
              icon={<TrendingUp className="w-4 h-4" />}
              label="Annual Salary"
              value={annualSalary}
              prefix="£"
              highlight
              bgClass="bg-gradient-to-br from-cyan-900/30 to-emerald-900/30"
            />
          </div>

          {/* CTA Button */}
          <CTAButton amount={annualSalary} />
        </motion.div>

        {/* Info Footer */}
        <motion.div
          className="mt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            <span className="text-cyan-400">💡</span> ADIs using the Drive Dojo Blueprint typically achieve £40-50/hr within 6 months
          </p>
        </motion.div>
      </div>
    </div>
  );
}