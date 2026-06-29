-- 1. Create table
CREATE TABLE IF NOT EXISTS public.registrations (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at  TIMESTAMPTZ NOT NULL    DEFAULT now(),
  first_name  TEXT        NOT NULL,
  last_name   TEXT        NOT NULL,
  phone       TEXT        NOT NULL UNIQUE
);

-- 2. Enable Row Level Security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- 3. Allow anonymous INSERT only (no SELECT / UPDATE / DELETE for anon)
CREATE POLICY "anon_insert_only"
  ON public.registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);
