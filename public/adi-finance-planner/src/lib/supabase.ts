import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface UserSettings {
  id: string;
  standard_rate: number;
  block_rate: number;
  intensive_rate: number;
  pass_plus_rate: number;
  created_at: string;
  updated_at: string;
}

export interface Lesson {
  id: string;
  date: string;
  day: string;
  lesson_type: 'Hourly' | 'Block' | 'Intensive' | 'Pass Plus';
  hours: number;
  rate_override: number | null;
  income: number;
  payment_method: 'Cash' | 'Card' | 'Bank';
  notes: string | null;
  created_at: string;
}

export interface Expense {
  id: string;
  date: string;
  category: string;
  description: string;
  total_amount: number;
  business_use_percent: number;
  receipt_url: string | null;
  deductible_amount: number;
  created_at: string;
}

export interface MileageEntry {
  id: string;
  date: string;
  start_odo: number;
  end_odo: number;
  total_miles: number;
  business_miles: number;
  purpose: string;
  tax_deduction: number;
  created_at: string;
}

export interface Goal {
  id: string;
  name: string;
  target_amount: number;
  current_saved: number;
  monthly_contribution: number;
  created_at: string;
  updated_at: string;
}

export const EXPENSE_CATEGORIES = [
  'Fuel',
  'Insurance',
  'Franchise',
  'Maintenance',
  'Marketing',
  'App Subscriptions',
  'Phone',
  'Clothing',
  'Training',
  'Other'
] as const;

export const LESSON_TYPES = ['Hourly', 'Block', 'Intensive', 'Pass Plus'] as const;

export const PAYMENT_METHODS = ['Cash', 'Card', 'Bank'] as const;

// HMRC rates for 2025/26 tax year
export const HMRC_RATES = {
  first_10000_rate: 0.45,
  over_10000_rate: 0.25,
  personal_allowance: 12570,
  basic_rate: 0.20,
  higher_rate: 0.40
} as const;

// UK Tax Year: April 6 to April 5
export const getTaxYearDates = (date: Date = new Date()) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  // If before April 6, we're in previous tax year
  if (month < 3 || (month === 3 && date.getDate() < 6)) {
    return {
      start: new Date(year - 1, 3, 6),
      end: new Date(year, 3, 5)
    };
  }

  // Otherwise, we're in current tax year
  return {
    start: new Date(year, 3, 6),
    end: new Date(year + 1, 3, 5)
  };
};

// Calculate mileage tax deduction
export const calculateMileageDeduction = (totalBusinessMiles: number, taxYearStart: Date = getTaxYearDates().start) => {
  // In a real app, you'd calculate cumulative miles from tax year start
  // For simplicity, using the provided total
  const first10000Miles = Math.min(totalBusinessMiles, 10000);
  const over10000Miles = Math.max(0, totalBusinessMiles - 10000);

  return (first10000Miles * HMRC_RATES.first_10000_rate) +
         (over10000Miles * HMRC_RATES.over_10000_rate);
};

// Calculate expense deduction
export const calculateExpenseDeduction = (totalAmount: number, businessUsePercent: number) => {
  return totalAmount * (businessUsePercent / 100);
};
