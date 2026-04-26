-- Create purchases table to track all Stripe transactions
CREATE TABLE IF NOT EXISTS public.purchases (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  stripe_session_id TEXT UNIQUE NOT NULL,
  stripe_payment_intent TEXT,
  amount_paid INTEGER, -- Amount in cents
  currency TEXT DEFAULT 'gbp',
  product TEXT NOT NULL, -- e.g., 'adi-blueprint', 'driving-lesson', etc.
  package_name TEXT,
  purchased_at TIMESTAMPTZ DEFAULT NOW(),
  access_granted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Users can only read their own purchases
CREATE POLICY "Users can view own purchases"
  ON public.purchases
  FOR SELECT
  USING (auth.uid() = user_id);

-- Service role can do anything (for webhook operations)
CREATE POLICY "Service role can do anything on purchases"
  ON public.purchases
  FOR ALL
  USING (auth.role() = 'service_role');

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_purchases_user_id ON public.purchases(user_id);
CREATE INDEX IF NOT EXISTS idx_purchases_email ON public.purchases(email);
CREATE INDEX IF NOT EXISTS idx_purchases_stripe_session_id ON public.purchases(stripe_session_id);
CREATE INDEX IF NOT EXISTS idx_purchases_product ON public.purchases(product);
CREATE INDEX IF NOT EXISTS idx_purchases_purchased_at ON public.purchases(purchased_at DESC);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_purchase_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update updated_at on purchase changes
DROP TRIGGER IF EXISTS on_purchase_updated ON public.purchases;
CREATE TRIGGER on_purchase_updated
  BEFORE UPDATE ON public.purchases
  FOR EACH ROW EXECUTE FUNCTION public.handle_purchase_updated_at();
