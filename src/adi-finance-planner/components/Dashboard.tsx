import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { DollarSign, TrendingUp, TrendingDown, Receipt, Car, Target, PiggyBank, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { GlassCard } from './Layout';
import { useApp } from '../hooks/useApp';
import { getTaxYearDates } from '../lib/supabase';
import { format, startOfMonth, endOfMonth, subMonths, isWithinInterval } from 'date-fns';

interface MetricCardProps {
  title: string;
  value: string;
  change?: number;
  icon: React.ReactNode;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon, color }) => (
  <GlassCard className="p-5 hover:bg-white/10 transition-all duration-300">
    <div className="flex items-start justify-between mb-3">
      <div className={`p-2.5 rounded-xl ${color}`}>
        {icon}
      </div>
      {change !== undefined && (
        <div className={`flex items-center gap-1 text-sm font-medium ${change >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
          {change >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          {Math.abs(change).toFixed(1)}%
        </div>
      )}
    </div>
    <p className="text-gray-400 text-sm mb-1">{title}</p>
    <p className="text-2xl font-bold text-white">{value}</p>
  </GlassCard>
);

export const Dashboard: React.FC = () => {
  const { lessons, expenses, mileageEntries, goals, taxYearFilter } = useApp();

  const now = new Date();
  const period = taxYearFilter === 'tax'
    ? getTaxYearDates(now)
    : { start: new Date(now.getFullYear(), 0, 1), end: new Date(now.getFullYear(), 11, 31) };

  // Filter data for selected period
  const periodLessons = lessons.filter(l => {
    const date = new Date(l.date);
    return isWithinInterval(date, { start: period.start, end: period.end });
  });

  const periodExpenses = expenses.filter(e => {
    const date = new Date(e.date);
    return isWithinInterval(date, { start: period.start, end: period.end });
  });

  const periodMileage = mileageEntries.filter(m => {
    const date = new Date(m.date);
    return isWithinInterval(date, { start: period.start, end: period.end });
  });

  // Calculate totals
  const totalIncome = periodLessons.reduce((sum, l) => sum + l.income, 0);
  const totalExpenses = periodExpenses.reduce((sum, e) => sum + e.deductible_amount, 0);
  const mileageDeduction = periodMileage.reduce((sum, m) => sum + m.tax_deduction, 0);
  const netProfit = totalIncome - totalExpenses;
  const totalDeductions = totalExpenses + mileageDeduction;

  // Generate monthly data
  const monthlyData = useMemo(() => {
    const months = [];
    const monthsToShow = taxYearFilter === 'tax' ? 12 : 6;

    for (let i = monthsToShow - 1; i >= 0; i--) {
      const date = subMonths(now, i);
      const monthStart = startOfMonth(date);
      const monthEnd = endOfMonth(date);

      const monthLessons = periodLessons.filter(l => {
        const d = new Date(l.date);
        return isWithinInterval(d, { start: monthStart, end: monthEnd });
      });

      const monthExpenses = periodExpenses.filter(e => {
        const d = new Date(e.date);
        return isWithinInterval(d, { start: monthStart, end: monthEnd });
      });

      const income = monthLessons.reduce((sum, l) => sum + l.income, 0);
      const expense = monthExpenses.reduce((sum, e) => sum + e.deductible_amount, 0);

      months.push({
        name: format(date, 'MMM'),
        income,
        expenses: expense,
        profit: income - expense
      });
    }
    return months;
  }, [periodLessons, periodExpenses, taxYearFilter]);

  // Goal progress
  const goalProgress = goals.map(goal => ({
    name: goal.name,
    progress: Math.min((goal.current_saved / goal.target_amount) * 100, 100),
    saved: goal.current_saved,
    target: goal.target_amount
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Financial Command Center</h1>
          <p className="text-gray-400 text-sm mt-1">
            {taxYearFilter === 'tax'
              ? `Tax Year: ${format(period.start, 'dd MMM yyyy')} - ${format(period.end, 'dd MMM yyyy')}`
              : `Calendar Year: ${format(period.start, 'dd MMM yyyy')} - ${format(period.end, 'dd MMM yyyy')}`
            }
          </p>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Income"
          value={`£${totalIncome.toLocaleString()}`}
          icon={<DollarSign className="w-5 h-5 text-emerald-400" />}
          color="bg-emerald-500/20"
        />
        <MetricCard
          title="Total Expenses"
          value={`£${totalExpenses.toLocaleString()}`}
          icon={<Receipt className="w-5 h-5 text-rose-400" />}
          color="bg-rose-500/20"
        />
        <MetricCard
          title="Net Profit"
          value={`£${netProfit.toLocaleString()}`}
          icon={netProfit >= 0 ? <TrendingUp className="w-5 h-5 text-cyan-400" /> : <TrendingDown className="w-5 h-5 text-rose-400" />}
          color={netProfit >= 0 ? "bg-cyan-500/20" : "bg-rose-500/20"}
        />
        <MetricCard
          title="Tax Deductions"
          value={`£${totalDeductions.toLocaleString()}`}
          icon={<PiggyBank className="w-5 h-5 text-purple-400" />}
          color="bg-purple-500/20"
        />
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Income vs Expenses Chart */}
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Income vs Expenses Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(v) => `£${v}`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                  formatter={(value: number) => [`£${value.toLocaleString()}`, '']}
                />
                <Bar dataKey="income" fill="#10b981" radius={[4, 4, 0, 0]} name="Income" />
                <Bar dataKey="expenses" fill="#f43f5e" radius={[4, 4, 0, 0]} name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Profit Trend Chart */}
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Net Profit Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(v) => `£${v}`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                  formatter={(value: number) => [`£${value.toLocaleString()}`, '']}
                />
                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke="#06b6d4"
                  strokeWidth={3}
                  dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: '#22d3ee' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      {/* Bottom Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Mileage Summary */}
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Mileage Allowance</h3>
            <Car className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-white/10">
              <div>
                <p className="text-gray-400 text-sm">Total Business Miles</p>
                <p className="text-2xl font-bold text-white">
                  {periodMileage.reduce((sum, m) => sum + m.business_miles, 0).toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm">Tax Deduction</p>
                <p className="text-2xl font-bold text-cyan-400">
                  £{mileageDeduction.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <p className="text-xs text-gray-400 mb-1">First 10,000 miles</p>
                <p className="text-lg font-bold text-cyan-400">£0.45/mile</p>
              </div>
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <p className="text-xs text-gray-400 mb-1">Over 10,000 miles</p>
                <p className="text-lg font-bold text-purple-400">£0.25/mile</p>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Goals Progress */}
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Financial Goals</h3>
            <Target className="w-5 h-5 text-emerald-400" />
          </div>
          {goalProgress.length === 0 ? (
            <div className="text-center py-8">
              <PiggyBank className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-500">No goals set yet</p>
              <p className="text-sm text-gray-600">Add a goal to track your savings</p>
            </div>
          ) : (
            <div className="space-y-4">
              {goalProgress.map((goal, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{goal.name}</span>
                    <span className="text-gray-400 text-sm">
                      £{goal.saved.toLocaleString()} / £{goal.target.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <p className="text-right text-sm text-cyan-400 mt-1">
                    {goal.progress.toFixed(1)}%
                  </p>
                </div>
              ))}
            </div>
          )}
        </GlassCard>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <a href="/add-lesson" className="GlassCard p-4 text-center hover:bg-white/10 transition-all group">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <DollarSign className="w-6 h-6 text-emerald-400" />
          </div>
          <p className="text-white font-medium">Add Lesson</p>
          <p className="text-xs text-gray-500 mt-1">Log income</p>
        </a>
        <a href="/add-expense" className="GlassCard p-4 text-center hover:bg-white/10 transition-all group">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Receipt className="w-6 h-6 text-rose-400" />
          </div>
          <p className="text-white font-medium">Add Expense</p>
          <p className="text-xs text-gray-500 mt-1">Track spending</p>
        </a>
        <a href="/add-mileage" className="GlassCard p-4 text-center hover:bg-white/10 transition-all group">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Car className="w-6 h-6 text-cyan-400" />
          </div>
          <p className="text-white font-medium">Log Mileage</p>
          <p className="text-xs text-gray-500 mt-1">Track business miles</p>
        </a>
        <a href="/goals" className="GlassCard p-4 text-center hover:bg-white/10 transition-all group">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Target className="w-6 h-6 text-purple-400" />
          </div>
          <p className="text-white font-medium">Set Goal</p>
          <p className="text-xs text-gray-500 mt-1">Save for future</p>
        </a>
      </div>
    </div>
  );
};
