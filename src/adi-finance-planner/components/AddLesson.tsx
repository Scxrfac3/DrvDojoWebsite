import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, addDays } from 'date-fns';
import { DollarSign, Clock, CreditCard, FileText, Save, ArrowLeft } from 'lucide-react';
import { GlassCard } from './Layout';
import { useApp } from '../hooks/useApp';
import { LESSON_TYPES, PAYMENT_METHODS, calculateExpenseDeduction } from '../lib/supabase';

export const AddLesson: React.FC = () => {
  const navigate = useNavigate();
  const { settings, addLesson } = useApp();

  const [formData, setFormData] = useState({
    date: format(new Date(), 'yyyy-MM-dd'),
    lesson_type: 'Hourly' as typeof LESSON_TYPES[number],
    hours: '',
    rate_override: '',
    payment_method: 'Cash' as typeof PAYMENT_METHODS[number],
    notes: ''
  });

  const [saving, setSaving] = useState(false);

  // Get default rate based on lesson type
  const getDefaultRate = () => {
    if (!settings) return 35;
    switch (formData.lesson_type) {
      case 'Hourly': return settings.standard_rate;
      case 'Block': return settings.block_rate;
      case 'Intensive': return settings.intensive_rate;
      case 'Pass Plus': return settings.pass_plus_rate;
      default: return settings.standard_rate;
    }
  };

  // Calculate income based on hours and rate
  const calculateIncome = () => {
    const rate = formData.rate_override ? parseFloat(formData.rate_override) : getDefaultRate();
    const hours = parseFloat(formData.hours) || 0;
    if (formData.lesson_type === 'Pass Plus') {
      return rate;
    }
    return rate * hours;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const rate = formData.rate_override ? parseFloat(formData.rate_override) : getDefaultRate();
    const hours = formData.lesson_type === 'Pass Plus' ? 1 : parseFloat(formData.hours) || 0;
    const income = formData.lesson_type === 'Pass Plus' ? rate : rate * hours;

    await addLesson({
      date: formData.date,
      day: format(new Date(formData.date), 'EEEE'),
      lesson_type: formData.lesson_type,
      hours,
      rate_override: formData.rate_override ? parseFloat(formData.rate_override) : null,
      income,
      payment_method: formData.payment_method,
      notes: formData.notes || null
    });

    setSaving(false);
    navigate('/');
  };

  const quickDates = [
    { label: 'Today', date: format(new Date(), 'yyyy-MM-dd') },
    { label: 'Yesterday', date: format(addDays(new Date(), -1), 'yyyy-MM-dd') },
    { label: '2 days ago', date: format(addDays(new Date(), -2), 'yyyy-MM-dd') }
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
          <h1 className="text-xl font-bold text-white">Add Lesson</h1>
          <p className="text-sm text-gray-400">Log your driving lesson income</p>
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

        {/* Lesson Type */}
        <GlassCard className="p-5">
          <label className="block text-sm font-medium text-gray-400 mb-3">Lesson Type</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {LESSON_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, lesson_type: type })}
                className={`p-3 rounded-xl text-sm font-medium transition-all
                  ${formData.lesson_type === type
                    ? 'bg-cyan-500/20 text-cyan-400 border-2 border-cyan-500/50'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </GlassCard>

        {/* Hours (for non-Pass Plus) */}
        {formData.lesson_type !== 'Pass Plus' && (
          <GlassCard className="p-5">
            <label className="block text-sm font-medium text-gray-400 mb-3">Hours</label>
            <div className="flex gap-2">
              {[0.5, 1, 1.5, 2, 2.5, 3].map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => setFormData({ ...formData, hours: h.toString() })}
                  className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all
                    ${parseFloat(formData.hours) === h
                      ? 'bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500/50'
                      : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                    }`}
                >
                  {h}h
                </button>
              ))}
            </div>
          </GlassCard>
        )}

        {/* Rate Override & Payment */}
        <GlassCard className="p-5 space-y-4">
          {formData.lesson_type !== 'Pass Plus' && (
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Rate Override (£{getDefaultRate()}/hr default)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                <input
                  type="number"
                  step="0.01"
                  placeholder={getDefaultRate().toString()}
                  value={formData.rate_override}
                  onChange={(e) => setFormData({ ...formData, rate_override: e.target.value })}
                  className="w-full pl-8 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                    focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-600"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-3">Payment Method</label>
            <div className="grid grid-cols-3 gap-2">
              {PAYMENT_METHODS.map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setFormData({ ...formData, payment_method: method })}
                  className={`p-3 rounded-xl text-sm font-medium transition-all
                    ${formData.payment_method === method
                      ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-500/50'
                      : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                    }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Notes */}
        <GlassCard className="p-5">
          <label className="block text-sm font-medium text-gray-400 mb-2">Notes (Optional)</label>
          <textarea
            rows={2}
            placeholder="Add any notes about this lesson..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
              focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-600 resize-none"
          />
        </GlassCard>

        {/* Income Preview */}
        <GlassCard className="p-5 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Calculated Income</p>
              <p className="text-3xl font-bold text-emerald-400">
                £{calculateIncome().toFixed(2)}
              </p>
            </div>
            <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <DollarSign className="w-7 h-7 text-emerald-400" />
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
              Save Lesson
            </>
          )}
        </button>
      </form>
    </div>
  );
};
