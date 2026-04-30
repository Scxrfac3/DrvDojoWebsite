import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, addDays } from 'date-fns';
import { Receipt, Save, ArrowLeft, Percent, Calculator } from 'lucide-react';
import { GlassCard } from './Layout';
import { useApp } from '../hooks/useApp';
import { EXPENSE_CATEGORIES, calculateExpenseDeduction } from '../lib/supabase';

export const AddExpense: React.FC = () => {
  const navigate = useNavigate();
  const { addExpense } = useApp();

  const [formData, setFormData] = useState({
    date: format(new Date(), 'yyyy-MM-dd'),
    category: 'Fuel' as typeof EXPENSE_CATEGORIES[number],
    description: '',
    total_amount: '',
    business_use_percent: '100',
    receipt_url: ''
  });

  const [saving, setSaving] = useState(false);

  // Calculate deductible amount
  const deductibleAmount = calculateExpenseDeduction(
    parseFloat(formData.total_amount) || 0,
    parseFloat(formData.business_use_percent) || 0
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    await addExpense({
      date: formData.date,
      category: formData.category,
      description: formData.description,
      total_amount: parseFloat(formData.total_amount),
      business_use_percent: parseFloat(formData.business_use_percent),
      receipt_url: formData.receipt_url || null,
      deductible_amount: deductibleAmount
    });

    setSaving(false);
    navigate('/');
  };

  const quickDates = [
    { label: 'Today', date: format(new Date(), 'yyyy-MM-dd') },
    { label: 'Yesterday', date: format(addDays(new Date(), -1), 'yyyy-MM-dd') }
  ];

  const businessUsePresets = [
    { label: '100%', value: 100 },
    { label: '75%', value: 75 },
    { label: '50%', value: 50 },
    { label: '25%', value: 25 }
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
          <h1 className="text-xl font-bold text-white">Add Expense</h1>
          <p className="text-sm text-gray-400">Track your business expense</p>
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

        {/* Category */}
        <GlassCard className="p-5">
          <label className="block text-sm font-medium text-gray-400 mb-3">Category</label>
          <div className="grid grid-cols-3 gap-2">
            {EXPENSE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFormData({ ...formData, category: cat })}
                className={`p-3 rounded-xl text-sm font-medium transition-all
                  ${formData.category === cat
                    ? 'bg-rose-500/20 text-rose-400 border-2 border-rose-500/50'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </GlassCard>

        {/* Description */}
        <GlassCard className="p-5">
          <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
          <input
            type="text"
            placeholder="e.g., Shell fuel station, AA subscription"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
              focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-600"
            required
          />
        </GlassCard>

        {/* Amount */}
        <GlassCard className="p-5">
          <label className="block text-sm font-medium text-gray-400 mb-2">Total Amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">£</span>
            <input
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              value={formData.total_amount}
              onChange={(e) => setFormData({ ...formData, total_amount: e.target.value })}
              className="w-full pl-8 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-600 text-lg"
              required
            />
          </div>
        </GlassCard>

        {/* Business Use % */}
        <GlassCard className="p-5">
          <label className="block text-sm font-medium text-gray-400 mb-3">
            Business Use Percentage
          </label>
          <div className="flex gap-2 mb-3">
            {businessUsePresets.map((preset) => (
              <button
                key={preset.value}
                type="button"
                onClick={() => setFormData({ ...formData, business_use_percent: preset.value.toString() })}
                className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all
                  ${parseInt(formData.business_use_percent) === preset.value
                    ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-500/50'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                  }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={formData.business_use_percent}
              onChange={(e) => setFormData({ ...formData, business_use_percent: e.target.value })}
              className="w-full h-2 rounded-full appearance-none cursor-pointer
                bg-white/10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500
                [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-purple-500/50"
            />
            <div className="flex justify-between mt-2">
              <span className="text-xs text-gray-500">0%</span>
              <span className="text-lg font-bold text-purple-400">{formData.business_use_percent}%</span>
              <span className="text-xs text-gray-500">100%</span>
            </div>
          </div>
        </GlassCard>

        {/* Receipt Upload URL (optional) */}
        <GlassCard className="p-5">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Receipt Upload URL (Optional)
          </label>
          <input
            type="url"
            placeholder="https://..."
            value={formData.receipt_url}
            onChange={(e) => setFormData({ ...formData, receipt_url: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
              focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-600"
          />
        </GlassCard>

        {/* Deductible Preview */}
        <GlassCard className="p-5 bg-gradient-to-br from-rose-500/10 to-purple-500/10 border-rose-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Tax Deductible Amount</p>
              <p className="text-3xl font-bold text-rose-400">
                £{deductibleAmount.toFixed(2)}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                (£{formData.total_amount || '0'} × {formData.business_use_percent}%)
              </p>
            </div>
            <div className="w-14 h-14 rounded-xl bg-rose-500/20 flex items-center justify-center">
              <Calculator className="w-7 h-7 text-rose-400" />
            </div>
          </div>
        </GlassCard>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={saving}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-500 to-purple-500 text-white font-semibold
            hover:from-rose-400 hover:to-purple-400 transition-all duration-300
            shadow-lg shadow-rose-500/25 disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-center gap-2"
        >
          {saving ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Save className="w-5 h-5" />
              Save Expense
            </>
          )}
        </button>
      </form>
    </div>
  );
};
