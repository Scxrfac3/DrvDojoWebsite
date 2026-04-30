import React, { useState } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  PlusCircle,
  Receipt,
  Car,
  Target,
  Settings,
  Menu,
  X,
  DollarSign,
  TrendingUp,
  TrendingDown,
  PiggyBank
} from 'lucide-react';
import { useApp } from '../hooks/useApp';
import { format, startOfMonth, endOfMonth } from 'date-fns';
import { getTaxYearDates } from '../lib/supabase';

interface LayoutProps {
  children: React.ReactNode;
}

const GlassCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl ${className}`}>
    {children}
  </div>
);

const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/add-lesson', icon: PlusCircle, label: 'Add Lesson' },
    { to: '/add-expense', icon: Receipt, label: 'Add Expense' },
    { to: '/add-mileage', icon: Car, label: 'Add Mileage' },
    { to: '/goals', icon: Target, label: 'Goals' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-slate-900/95 to-slate-800/95
        backdrop-blur-xl border-r border-white/10 z-50 transform transition-transform duration-300
        lg:translate-x-0 lg:static lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-white">ADI Finance</h1>
              <p className="text-xs text-cyan-400">Financial Planner</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                ${isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

const TopBar: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  const { lessons, expenses, mileageEntries, taxYearFilter, setTaxYearFilter } = useApp();
  const [showFilter, setShowFilter] = useState(false);

  // Calculate MTD figures
  const now = new Date();
  const period = taxYearFilter === 'tax' ? getTaxYearDates(now) : {
    start: startOfMonth(now),
    end: endOfMonth(now)
  };

  const mtdLessons = lessons.filter(l => {
    const date = new Date(l.date);
    return date >= period.start && date <= period.end;
  });

  const mtdExpenses = expenses.filter(e => {
    const date = new Date(e.date);
    return date >= period.start && date <= period.end;
  });

  const totalIncome = mtdLessons.reduce((sum, l) => sum + l.income, 0);
  const totalExpenses = mtdExpenses.reduce((sum, e) => sum + e.deductible_amount, 0);
  const netProfit = totalIncome - totalExpenses;

  return (
    <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h2 className="text-lg font-semibold text-white hidden sm:block">
            {taxYearFilter === 'tax' ? 'Tax Year View' : 'Calendar Year View'}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          {/* Quick Stats */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs text-gray-500">Income</p>
              <p className="font-bold text-emerald-400">£{totalIncome.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Expenses</p>
              <p className="font-bold text-rose-400">£{totalExpenses.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Net Profit</p>
              <p className={`font-bold ${netProfit >= 0 ? 'text-cyan-400' : 'text-rose-400'}`}>
                £{netProfit.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Tax Year Toggle */}
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            {taxYearFilter === 'tax' ? 'UK Tax Year' : 'Calendar Year'}
          </button>
        </div>
      </div>
    </header>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export { GlassCard };
