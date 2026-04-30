-- ADI Finance Planner Tables
-- These tables store financial data for ADI driving instructors

-- User Settings (rates configuration)
CREATE TABLE IF NOT EXISTS user_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  standard_rate DECIMAL(10, 2) NOT NULL DEFAULT 35.00,
  block_rate DECIMAL(10, 2) NOT NULL DEFAULT 32.00,
  intensive_rate DECIMAL(10, 2) NOT NULL DEFAULT 38.00,
  pass_plus_rate DECIMAL(10, 2) NOT NULL DEFAULT 200.00,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Lessons (income tracking)
CREATE TABLE IF NOT EXISTS lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  day VARCHAR(20) NOT NULL,
  lesson_type VARCHAR(20) NOT NULL CHECK (lesson_type IN ('Hourly', 'Block', 'Intensive', 'Pass Plus')),
  hours DECIMAL(4, 1) NOT NULL,
  rate_override DECIMAL(10, 2),
  income DECIMAL(10, 2) NOT NULL,
  payment_method VARCHAR(10) NOT NULL CHECK (payment_method IN ('Cash', 'Card', 'Bank')),
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Expenses (business expenses)
CREATE TABLE IF NOT EXISTS expenses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  category VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  business_use_percent DECIMAL(5, 2) NOT NULL DEFAULT 100.00,
  receipt_url TEXT,
  deductible_amount DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Mileage Entries (HMRC mileage allowance)
CREATE TABLE IF NOT EXISTS mileage_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  start_odo INTEGER NOT NULL,
  end_odo INTEGER NOT NULL,
  total_miles DECIMAL(10, 1) NOT NULL,
  business_miles DECIMAL(10, 1) NOT NULL,
  purpose TEXT NOT NULL,
  tax_deduction DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Financial Goals
CREATE TABLE IF NOT EXISTS goals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  target_amount DECIMAL(12, 2) NOT NULL,
  current_saved DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
  monthly_contribution DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Finance Access (tracks which users have purchased finance planner access)
CREATE TABLE IF NOT EXISTS finance_access (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_session_id VARCHAR(255),
  purchased_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Row Level Security Policies
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE mileage_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE finance_access ENABLE ROW LEVEL SECURITY;

-- User Settings policies
CREATE POLICY "Users can view their own settings" ON user_settings
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own settings" ON user_settings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own settings" ON user_settings
  FOR UPDATE USING (auth.uid() = user_id);

-- Lessons policies
CREATE POLICY "Users can view their own lessons" ON lessons
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own lessons" ON lessons
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own lessons" ON lessons
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own lessons" ON lessons
  FOR DELETE USING (auth.uid() = user_id);

-- Expenses policies
CREATE POLICY "Users can view their own expenses" ON expenses
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own expenses" ON expenses
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own expenses" ON expenses
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own expenses" ON expenses
  FOR DELETE USING (auth.uid() = user_id);

-- Mileage policies
CREATE POLICY "Users can view their own mileage" ON mileage_entries
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own mileage" ON mileage_entries
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own mileage" ON mileage_entries
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own mileage" ON mileage_entries
  FOR DELETE USING (auth.uid() = user_id);

-- Goals policies
CREATE POLICY "Users can view their own goals" ON goals
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own goals" ON goals
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own goals" ON goals
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own goals" ON goals
  FOR DELETE USING (auth.uid() = user_id);

-- Finance Access policies
CREATE POLICY "Users can view their own finance access" ON finance_access
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own finance access" ON finance_access
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Auto-create user_settings when a user is created
CREATE OR REPLACE FUNCTION create_user_settings()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_settings (user_id, standard_rate, block_rate, intensive_rate, pass_plus_rate)
  VALUES (NEW.id, 35.00, 32.00, 38.00, 200.00);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION create_user_settings();

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_lessons_user_date ON lessons(user_id, date DESC);
CREATE INDEX IF NOT EXISTS idx_expenses_user_date ON expenses(user_id, date DESC);
CREATE INDEX IF NOT EXISTS idx_mileage_user_date ON mileage_entries(user_id, date DESC);
CREATE INDEX IF NOT EXISTS idx_goals_user ON goals(user_id);
