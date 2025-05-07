-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable row level security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting messages (anyone can insert)
DROP POLICY IF EXISTS "Anyone can insert contact messages" ON contact_messages;
CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages
  FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

-- Create policy for viewing messages (only authenticated users)
DROP POLICY IF EXISTS "Only authenticated users can view contact messages" ON contact_messages;
CREATE POLICY "Only authenticated users can view contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Enable realtime
alter publication supabase_realtime add table contact_messages;