import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase, UserSettings, Lesson, Expense, MileageEntry, Goal } from '../lib/supabase';
import toast from 'react-hot-toast';

interface AppContextType {
  // User Settings
  settings: UserSettings | null;
  updateSettings: (settings: Partial<UserSettings>) => Promise<void>;

  // Lessons
  lessons: Lesson[];
  addLesson: (lesson: Omit<Lesson, 'id' | 'created_at'>) => Promise<void>;
  updateLesson: (id: string, lesson: Partial<Lesson>) => Promise<void>;
  deleteLesson: (id: string) => Promise<void>;

  // Expenses
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, 'id' | 'created_at'>) => Promise<void>;
  updateExpense: (id: string, expense: Partial<Expense>) => Promise<void>;
  deleteExpense: (id: string) => Promise<void>;

  // Mileage
  mileageEntries: MileageEntry[];
  addMileage: (entry: Omit<MileageEntry, 'id' | 'created_at'>) => Promise<void>;
  updateMileage: (id: string, entry: Partial<MileageEntry>) => Promise<void>;
  deleteMileage: (id: string) => Promise<void>;

  // Goals
  goals: Goal[];
  addGoal: (goal: Omit<Goal, 'id' | 'created_at' | 'updated_at'>) => Promise<void>;
  updateGoal: (id: string, goal: Partial<Goal>) => Promise<void>;
  deleteGoal: (id: string) => Promise<void>;

  // Tax Year Filter
  taxYearFilter: 'calendar' | 'tax';
  setTaxYearFilter: (filter: 'calendar' | 'tax') => void;

  // Loading states
  loading: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [mileageEntries, setMileageEntries] = useState<MileageEntry[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [taxYearFilter, setTaxYearFilter] = useState<'calendar' | 'tax'>('tax');
  const [loading, setLoading] = useState(true);

  // Initialize with demo data
  useEffect(() => {
    const initData = async () => {
      try {
        // Check for user settings
        const { data: settingsData } = await supabase
          .from('user_settings')
          .select('*')
          .single();

        if (settingsData) {
          setSettings(settingsData);
        } else {
          // Create default settings
          const defaultSettings = {
            standard_rate: 35,
            block_rate: 32,
            intensive_rate: 38,
            pass_plus_rate: 200
          };
          const { data: newSettings } = await supabase
            .from('user_settings')
            .insert(defaultSettings)
            .select()
            .single();
          if (newSettings) setSettings(newSettings);
        }

        // Load lessons
        const { data: lessonsData } = await supabase
          .from('lessons')
          .select('*')
          .order('date', { ascending: false });
        if (lessonsData) setLessons(lessonsData);

        // Load expenses
        const { data: expensesData } = await supabase
          .from('expenses')
          .select('*')
          .order('date', { ascending: false });
        if (expensesData) setExpenses(expensesData);

        // Load mileage
        const { data: mileageData } = await supabase
          .from('mileage')
          .select('*')
          .order('date', { ascending: false });
        if (mileageData) setMileageEntries(mileageData);

        // Load goals
        const { data: goalsData } = await supabase
          .from('goals')
          .select('*')
          .order('created_at');
        if (goalsData) setGoals(goalsData);

      } catch (error) {
        console.log('Using offline mode - Supabase not configured');
        // Initialize with demo data for offline use
        setSettings({
          id: 'demo',
          standard_rate: 35,
          block_rate: 32,
          intensive_rate: 38,
          pass_plus_rate: 200,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });
      }
      setLoading(false);
    };

    initData();
  }, []);

  const updateSettings = async (newSettings: Partial<UserSettings>) => {
    if (!settings) return;
    const updated = { ...settings, ...newSettings, updated_at: new Date().toISOString() };
    setSettings(updated);
    try {
      await supabase.from('user_settings').update(updated).eq('id', settings.id);
      toast.success('Settings saved');
    } catch (error) {
      toast.success('Settings updated (offline mode)');
    }
  };

  const addLesson = async (lesson: Omit<Lesson, 'id' | 'created_at'>) => {
    try {
      const { data, error } = await supabase
        .from('lessons')
        .insert(lesson)
        .select()
        .single();
      if (data) {
        setLessons(prev => [data, ...prev]);
        toast.success('Lesson added');
      }
    } catch (error) {
      // Offline mode
      const newLesson: Lesson = {
        ...lesson,
        id: crypto.randomUUID(),
        created_at: new Date().toISOString()
      };
      setLessons(prev => [newLesson, ...prev]);
      toast.success('Lesson added (offline mode)');
    }
  };

  const updateLesson = async (id: string, lesson: Partial<Lesson>) => {
    setLessons(prev => prev.map(l => l.id === id ? { ...l, ...lesson } : l));
    try {
      await supabase.from('lessons').update(lesson).eq('id', id);
      toast.success('Lesson updated');
    } catch (error) {
      toast.success('Lesson updated (offline mode)');
    }
  };

  const deleteLesson = async (id: string) => {
    setLessons(prev => prev.filter(l => l.id !== id));
    try {
      await supabase.from('lessons').delete().eq('id', id);
      toast.success('Lesson deleted');
    } catch (error) {
      toast.success('Lesson deleted (offline mode)');
    }
  };

  const addExpense = async (expense: Omit<Expense, 'id' | 'created_at'>) => {
    try {
      const { data, error } = await supabase
        .from('expenses')
        .insert(expense)
        .select()
        .single();
      if (data) {
        setExpenses(prev => [data, ...prev]);
        toast.success('Expense added');
      }
    } catch (error) {
      const newExpense: Expense = {
        ...expense,
        id: crypto.randomUUID(),
        created_at: new Date().toISOString()
      };
      setExpenses(prev => [newExpense, ...prev]);
      toast.success('Expense added (offline mode)');
    }
  };

  const updateExpense = async (id: string, expense: Partial<Expense>) => {
    setExpenses(prev => prev.map(e => e.id === id ? { ...e, ...expense } : e));
    try {
      await supabase.from('expenses').update(expense).eq('id', id);
      toast.success('Expense updated');
    } catch (error) {
      toast.success('Expense updated (offline mode)');
    }
  };

  const deleteExpense = async (id: string) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
    try {
      await supabase.from('expenses').delete().eq('id', id);
      toast.success('Expense deleted');
    } catch (error) {
      toast.success('Expense deleted (offline mode)');
    }
  };

  const addMileage = async (entry: Omit<MileageEntry, 'id' | 'created_at'>) => {
    try {
      const { data, error } = await supabase
        .from('mileage')
        .insert(entry)
        .select()
        .single();
      if (data) {
        setMileageEntries(prev => [data, ...prev]);
        toast.success('Mileage entry added');
      }
    } catch (error) {
      const newEntry: MileageEntry = {
        ...entry,
        id: crypto.randomUUID(),
        created_at: new Date().toISOString()
      };
      setMileageEntries(prev => [newEntry, ...prev]);
      toast.success('Mileage entry added (offline mode)');
    }
  };

  const updateMileage = async (id: string, entry: Partial<MileageEntry>) => {
    setMileageEntries(prev => prev.map(m => m.id === id ? { ...m, ...entry } : m));
    try {
      await supabase.from('mileage').update(entry).eq('id', id);
      toast.success('Mileage entry updated');
    } catch (error) {
      toast.success('Mileage entry updated (offline mode)');
    }
  };

  const deleteMileage = async (id: string) => {
    setMileageEntries(prev => prev.filter(m => m.id !== id));
    try {
      await supabase.from('mileage').delete().eq('id', id);
      toast.success('Mileage entry deleted');
    } catch (error) {
      toast.success('Mileage entry deleted (offline mode)');
    }
  };

  const addGoal = async (goal: Omit<Goal, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('goals')
        .insert(goal)
        .select()
        .single();
      if (data) {
        setGoals(prev => [...prev, data]);
        toast.success('Goal added');
      }
    } catch (error) {
      const newGoal: Goal = {
        ...goal,
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      setGoals(prev => [...prev, newGoal]);
      toast.success('Goal added (offline mode)');
    }
  };

  const updateGoal = async (id: string, goal: Partial<Goal>) => {
    setGoals(prev => prev.map(g => g.id === id ? { ...g, ...goal, updated_at: new Date().toISOString() } : g));
    try {
      await supabase.from('goals').update({ ...goal, updated_at: new Date().toISOString() }).eq('id', id);
      toast.success('Goal updated');
    } catch (error) {
      toast.success('Goal updated (offline mode)');
    }
  };

  const deleteGoal = async (id: string) => {
    setGoals(prev => prev.filter(g => g.id !== id));
    try {
      await supabase.from('goals').delete().eq('id', id);
      toast.success('Goal deleted');
    } catch (error) {
      toast.success('Goal deleted (offline mode)');
    }
  };

  return (
    <AppContext.Provider
      value={{
        settings,
        updateSettings,
        lessons,
        addLesson,
        updateLesson,
        deleteLesson,
        expenses,
        addExpense,
        updateExpense,
        deleteExpense,
        mileageEntries,
        addMileage,
        updateMileage,
        deleteMileage,
        goals,
        addGoal,
        updateGoal,
        deleteGoal,
        taxYearFilter,
        setTaxYearFilter,
        loading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
