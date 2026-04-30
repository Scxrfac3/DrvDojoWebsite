import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Save, ArrowLeft, DollarSign, Clock, Award } from 'lucide-react';
import { GlassCard } from './Layout';
import { useApp } from '../hooks/useApp';

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { settings, updateSettings } = useApp();

  const [formData, setFormData] = useState({
    standard_rate: settings?.standard_rate || 35,
    block_rate: settings?.block_rate || 32,
    intensive_rate: settings?.intensive_rate || 38,
    pass_plus_rate: settings?.pass_plus_rate || 200
  });

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    await updateSettings({
      standard_rate: parseFloat(formData.standard_rate.toString()),
      block_rate: parseFloat(formData.block_rate.toString()),
      intensive_rate: parseFloat(formData.intensive_rate.toString()),
      pass_plus_rate: parseFloat(formData.pass_plus_rate.toString())
    });

    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

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
          <h1 className="text-xl font-bold text-white">Settings</h1>
          <p className="text-sm text-gray-400">Configure your default rates</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Rate Settings */}
        <GlassCard className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Default Base Rates</h3>
              <p className="text-sm text-gray-400">These rates auto-populate in lesson forms</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Standard Hourly Rate */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Standard Hourly Rate</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.standard_rate}
                  onChange={(e) => setFormData({ ...formData, standard_rate: parseFloat(e.target.value) || 0 })}
                  className="w-full pl-8 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                    focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-lg"
                  required
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">/hr</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Most common lesson type</p>
            </div>

            {/* Block Booking Rate */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Block Booking Rate</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.block_rate}
                  onChange={(e) => setFormData({ ...formData, block_rate: parseFloat(e.target.value) || 0 })}
                  className="w-full pl-8 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                    focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-lg"
                  required
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">/hr</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Discounted rate for multiple lessons booked together</p>
            </div>

            {/* Intensive Course Rate */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Intensive Course Rate</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.intensive_rate}
                  onChange={(e) => setFormData({ ...formData, intensive_rate: parseFloat(e.target.value) || 0 })}
                  className="w-full pl-8 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                    focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-lg"
                  required
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">/hr</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Accelerated learning courses (typically 6+ hrs)</p>
            </div>

            {/* Pass Plus Rate */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Pass Plus Rate</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.pass_plus_rate}
                  onChange={(e) => setFormData({ ...formData, pass_plus_rate: parseFloat(e.target.value) || 0 })}
                  className="w-full pl-8 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                    focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-lg"
                  required
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">total</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Fixed price for the Pass Plus certificate course</p>
            </div>
          </div>
        </GlassCard>

        {/* HMRC Info */}
        <GlassCard className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">HMRC Rates (2025/26)</h3>
              <p className="text-sm text-gray-400">Used for automatic tax calculations</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-emerald-400">First 10,000 business miles</span>
              <span className="font-bold text-emerald-400">£0.45/mile</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <span className="text-purple-400">Over 10,000 business miles</span>
              <span className="font-bold text-purple-400">£0.25/mile</span>
            </div>
          </div>
        </GlassCard>

        {/* Save Button */}
        <button
          type="submit"
          disabled={saving}
          className={`w-full py-4 rounded-xl font-semibold transition-all duration-300
            flex items-center justify-center gap-2
            ${saved
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
              : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/25'
            }
            disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {saving ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Save className="w-5 h-5" />
              {saved ? 'Saved!' : 'Save Settings'}
            </>
          )}
        </button>
      </form>
    </div>
  );
};
