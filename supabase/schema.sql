-- Create clients table
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  business_name TEXT NOT NULL,
  business_type TEXT,
  theme TEXT,
  whatsapp_number TEXT NOT NULL,
  whatsapp_message TEXT,
  hero_title TEXT NOT NULL,
  hero_lead TEXT,
  primary_cta TEXT,
  secondary_cta TEXT,
  accent_label TEXT,
  hero_asset_url TEXT,
  products_title TEXT,
  products JSONB, -- Array of { "name": "...", "price": "...", "desc": "..." }
  highlights JSONB, -- Array of strings
  stats JSONB, -- Array of { "value": "...", "label": "..." }
  proof_title TEXT,
  proof_items JSONB, -- Array of strings
  testimonial_quote TEXT,
  testimonial_person TEXT,
  final_title TEXT,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
