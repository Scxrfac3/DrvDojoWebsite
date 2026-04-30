import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Plus, Save, ArrowLeft, Trash2, Edit2, X } from 'lucide-react';
import { GlassCard } from './Layout';
import { useApp } from '../hooks/useApp';

export const GoalsPage: React.FC = () => {
  const navigate = useNavigate();
  const { goals, addGoal, updateGoal, deleteGoal } = useApp();

  const [showForm, setShowForm] = useState(false);
  const [editingGoal, setEditingGoal] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    target_amount: '',
    current_saved: '',
    monthly_contribution: ''
  });

  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    if (editingGoal) {
      await updateGoal(editingGoal, {
        name: formData.name,
        target_amount: parseFloat(formData.target_amount),
        current_saved: parseFloat(formData.current_saved),
        monthly_contribution: parseFloat(formData.monthly_contribution)
      });
    } else {
      await addGoal({
        name: formData.name,
        target_amount: parseFloat(formData.target_amount),
        current_saved: parseFloat(formData.current_saved) || 0,
        monthly_contribution: parseFloat(formData.monthly_contribution)
      });
    }

    setSaving(false);
    setShowForm(false);
    setEditingGoal(null);
    setFormData({ name: '', target_amount: '', current_saved: '', monthly_contribution: '' });
  };

  const startEditing = (goal: typeof goals[0]) => {
    setEditingGoal(goal.id);
    setFormData({
      name: goal.name,
      target_amount: goal.target_amount.toString(),
      current_saved: goal.current_saved.toString(),
      monthly_contribution: goal.monthly_contribution.toString()
    });
    setShowForm(true);
  };

  const openNewForm = () => {
    setFormData({ name: '', target_amount: '', current_saved: '', monthly_contribution: '' });
    setEditingGoal(null);
    setShowForm(true);
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingGoal(null);
    setFormData({ name: '', target_amount: '', current_saved: '', monthly_contribution: '' });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-white">Financial Goals</h1>
            <p className="text-sm text-gray-400">Track your savings progress</p>
          </div>
        </div>
        <button
          onClick={openNewForm}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium
            hover:from-emerald-400 hover:to-cyan-400 transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          <span className="hidden sm:inline">Add Goal</span>
        </button>
      </div>

      {/* Goals List */}
      {goals.length === 0 ? (
        <GlassCard className="p-12 text-center">
          <Target className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">No Goals Yet</h3>
          <p className="text-gray-500 mb-6">Set a financial goal to track your progress</p>
          <button
            onClick={openNewForm}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium
              hover:from-emerald-400 hover:to-cyan-400 transition-all inline-flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create Your First Goal
          </button>
        </GlassCard>
      ) : (
        <div className="grid gap-4">
          {goals.map((goal) => {
            const progress = Math.min((goal.current_saved / goal.target_amount) * 100, 100);
            const remaining = goal.target_amount - goal.current_saved;
            const monthsLeft = goal.monthly_contribution > 0
              ? Math.ceil(remaining / goal.monthly_contribution)
              : null;

            return (
              <GlassCard key={goal.id} className="p-5 hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20
                      flex items-center justify-center border border-emerald-500/30">
                      <Target className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{goal.name}</h3>
                      <p className="text-sm text-gray-400">
                        £{goal.current_saved.toLocaleString()} of £{goal.target_amount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEditing(goal)}
                      className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteGoal(goal.id)}
                      className="p-2 rounded-lg bg-rose-500/20 text-rose-400 hover:text-rose-300 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-4 bg-white/10 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-cyan-400 font-medium">{progress.toFixed(1)}% complete</span>
                  <span className="text-gray-500">
                    £{remaining.toLocaleString()} remaining
                  </span>
                </div>

                {monthsLeft !== null && monthsLeft > 0 && (
                  <p className="text-xs text-gray-500 mt-2">
                    At £{goal.monthly_contribution}/month, you'll reach your goal in ~{monthsLeft} months
                  </p>
                )}
              </GlassCard>
            );
          })}
        </div>
      )}

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={cancelForm} />
          <GlassCard className="relative w-full max-w-md p-6 z-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">
                {editingGoal ? 'Edit Goal' : 'Create New Goal'}
              </h3>
              <button
                onClick={cancelForm}
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Goal Name</label>
                <input
                  type="text"
                  placeholder="e.g., New Tuition Car"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                    focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Target Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="15000"
                    value={formData.target_amount}
                    onChange={(e) => setFormData({ ...formData, target_amount: e.target.value })}
                    className="w-full pl-8 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                      focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-600"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Current Saved</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0"
                    value={formData.current_saved}
                    onChange={(e) => setFormData({ ...formData, current_saved: e.target.value })}
                    className="w-full pl-8 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                      focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-600"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Monthly Contribution</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="500"
                    value={formData.monthly_contribution}
                    onChange={(e) => setFormData({ ...formData, monthly_contribution: e.target.value })}
                    className="w-full pl-8 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                      focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-600"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={saving}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold
                  hover:from-emerald-400 hover:to-cyan-400 transition-all flex items-center justify-center gap-2"
              >
                {saving ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    {editingGoal ? 'Update Goal' : 'Create Goal'}
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </div>
      )}
    </div>
  );
};
