import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, addDays } from 'date-fns';
import { Car, Save, ArrowLeft, Calculator, MapPin } from 'lucide-react';
import { GlassCard } from './Layout';
import { useApp } from '../hooks/useApp';
import { calculateMileageDeduction, HMRC_RATES, getTaxYearDates } from '../lib/supabase';

export const AddMileage: React.FC = () => {
  const navigate = useNavigate();
  const { mileageEntries, addMileage, taxYearFilter } = useApp();

  const [formData, setFormData] = useState({
    date: format(new Date(), 'yyyy-MM-dd'),
    start_odo: '',
    end_odo: '',
    total_miles: '',
    business_miles: '',
    purpose: ''
  });

  const [saving, setSaving] = useState(false);

  // Calculate total miles if start/end odometer provided
  const calculatedMiles = useMemo(() => {
    const start = parseFloat(formData.start_odo) || 0;
    const end = parseFloat(formData.end_odo) || 0;
    return end > start ? end - start : 0;
  }, [formData.start_odo, formData.end_odo]);

  // Calculate YTD business miles for tier calculation
  const ytdBusinessMiles = useMemo(() => {
    const period = getTaxYearDates();
    return mileageEntries
      .filter(entry => {
        const date = new Date(entry.date);
        return taxYearFilter === 'tax'
          ? date >= period.start && date <= period.end
          : new Date(entry.date).getFullYear() === new Date().getFullYear();
      })
      .reduce((sum, entry) => sum + entry.business_miles, 0);
  }, [mileageEntries, taxYearFilter]);

  // Calculate tax deduction with tier logic
  const taxDeduction = useMemo(() => {
    const totalMiles = parseFloat(formData.business_miles) || 0;
    const currentYtd = ytdBusinessMiles;

    // Calculate tier breakdown
    const firstTierMiles = Math.min(totalMiles, Math.max(0, 10000 - currentYtd));
    const secondTierMiles = Math.max(0, totalMiles - Math.max(0, 10000 - currentYtd));

    return (firstTierMiles * HMRC_RATES.first_10000_rate) +
           (secondTierMiles * HMRC_RATES.over_10000_rate);
  }, [formData.business_miles, ytdBusinessMiles]);

  // Remaining miles at first tier rate
  const remainingFirstTier = Math.max(0, 10000 - ytdBusinessMiles);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const totalMiles = formData.end_odo
      ? parseFloat(formData.end_odo) - parseFloat(formData.start_odo)
      : parseFloat(formData.total_miles);

    await addMileage({
      date: formData.date,
      start_odo: parseFloat(formData.start_odo) || 0,
      end_odo: parseFloat(formData.end_odo) || 0,
      total_miles: totalMiles,
      business_miles: parseFloat(formData.business_miles) || totalMiles,
      purpose: formData.purpose,
      tax_deduction: taxDeduction
    });

    setSaving(false);
    navigate('/');
  };

  const quickDates = [
    { label: 'Today', date: format(new Date(), 'yyyy-MM-dd') },
    { label: 'Yesterday', date: format(addDays(new Date(), -1), 'yyyy-MM-dd') }
  ];

  const purposePresets = [
    'Driving lesson',
    'Test route',
    'Pick up pupil',
    'Admin/Shopping'
  ];

  return (
    <div className="max-w-lg mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/')}
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-xl font-bold text-white">Log Mileage</h1>
          <p className="text-sm text-gray-400">Track your business miles</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Date Selection */}
        <GlassCard className="p-5">
          <label className="block text-sm font-medium text-gray-400 mb-3">Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
              focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50
              transition-all cursor-pointer"
            required
          />
          <div className="flex gap-2 mt-3">
            {quickDates.map((qd) => (
              <button
                key={qd.label}
                type="button"
                onClick={() => setFormData({ ...formData, date: qd.date })}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
                  ${formData.date === qd.date
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                  }`}
              >
                {qd.label}
              </button>
            ))}
          </div>
        </GlassCard>

        {/* Odometer Readings */}
        <GlassCard className="p-5">
          <label className="block text-sm font-medium text-gray-400 mb-3">
            Odometer Readings (Optional)
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-2">Start ODO</label>
              <input
                type="number"
                placeholder="0"
                value={formData.start_odo}
                onChange={(e) => setFormData({ ...formData, start_odo: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                  focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-600"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-2">End ODO</label>
              <input
                type="number"
                placeholder="0"
                value={formData.end_odo}
                onChange={(e) => setFormData({ ...formData, end_odo: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                  focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-600"
              />
            </div>
          </div>
          {calculatedMiles > 0 && (
            <p className="text-sm text-cyan-400 mt-2">
              Calculated distance: {calculatedMiles} miles
            </p>
          )}
        </GlassCard>

        {/* Total Miles (Manual Entry) */}
        <GlassCard className="p-5">
          <label className="block text-sm font-medium text-gray-400 mb-2">Total Miles</label>
          <div className="relative">
            <input
              type="number"
              step="0.1"
              min="0"
              placeholder="Or enter total miles manually"
              value={formData.total_miles}
              onChange={(e) => setFormData({ ...formData, total_miles: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-600 text-lg"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">miles</span>
          </div>
        </GlassCard>

        {/* Business Miles */}
        <GlassCard className="p-5">
          <label className="block text-sm font-medium text-gray-400 mb-2">Business Miles</label>
          <input
            type="number"
            step="0.1"
            min="0"
            placeholder={formData.total_miles || calculatedMiles.toString() || "0"}
            value={formData.business_miles}
            onChange={(e) => setFormData({ ...formData, business_miles: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
              focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-600 text-lg"
            required
          />
          <p className="text-xs text-gray-500 mt-2">
            YTD business miles: {ytdBusinessMiles.toLocaleString()} (first tier remaining: {remainingFirstTier.toLocaleString()})
          </p>
        </GlassCard>

        {/* Purpose */}
        <GlassCard className="p-5">
          <label className="block text-sm font-medium text-gray-400 mb-3">Journey Purpose</label>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {purposePresets.map((purpose) => (
              <button
                key={purpose}
                type="button"
                onClick={() => setFormData({ ...formData, purpose })}
                className={`p-3 rounded-xl text-sm font-medium transition-all
                  ${formData.purpose === purpose
                    ? 'bg-cyan-500/20 text-cyan-400 border-2 border-cyan-500/50'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                  }`}
              >
                {purpose}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Or enter custom purpose..."
            value={formData.purpose}
            onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
              focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-600"
          />
        </GlassCard>

        {/* Tax Deduction Preview */}
        <GlassCard className="p-5 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Tax Deduction</p>
              <p className="text-3xl font-bold text-cyan-400">
                £{taxDeduction.toFixed(2)}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Based on HMRC mileage rates
              </p>
            </div>
            <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <Calculator className="w-7 h-7 text-cyan-400" />
            </div>
          </div>

          {/* Rate Breakdown */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-emerald-400 font-medium">First 10,000 miles</p>
                <p className="text-lg font-bold text-emerald-400">£0.45/mile</p>
              </div>
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <p className="text-purple-400 font-medium">Over 10,000 miles</p>
                <p className="text-lg font-bold text-purple-400">£0.25/mile</p>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={saving}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold
            hover:from-cyan-400 hover:to-blue-400 transition-all duration-300
            shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-center gap-2"
        >
          {saving ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Save className="w-5 h-5" />
              Save Mileage
            </>
          )}
        </button>
      </form>
    </div>
  );
};
