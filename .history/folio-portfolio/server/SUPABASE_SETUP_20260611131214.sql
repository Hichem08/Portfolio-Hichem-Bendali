-- ✅ CORRECTED SQL FOR FOLIO PORTFOLIO
-- This fixes the bytea to bigint casting error

-- Drop existing table if it exists (optional, for testing)
-- DROP TABLE IF EXISTS sections;

-- Create sections table with simple BIGSERIAL ID
CREATE TABLE IF NOT EXISTS sections (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  content TEXT,
  image_url TEXT,
  "order" INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert sample data
INSERT INTO sections (title, type, content, image_url, "order") VALUES
('Hero Section', 'hero', 'We''re proud to work with a diverse range of companies.', NULL, 1),
('Portfolio Project 1', 'portfolio', 'Cutter mobile app project', NULL, 2),
('Services', 'services', 'Featured Services', NULL, 3),
('About', 'about', 'About me section', NULL, 4),
('Profile', 'profile', 'Profile section', NULL, 5),
('Blogs', 'blogs', 'Latest news and articles', NULL, 6),
('Contact', 'contact', 'Get in touch with us', NULL, 7);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_sections_order ON sections("order");

-- Success! Your table is ready to use.
-- Now you can edit sections in the Supabase Editor or via the API.
