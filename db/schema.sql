-- Run this once in Neon's SQL editor.

CREATE TABLE IF NOT EXISTS site_content (
  id         INT PRIMARY KEY DEFAULT 1,
  data       JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS orders (
  id            BIGSERIAL PRIMARY KEY,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name          TEXT,
  phone         TEXT,
  email         TEXT,
  package_name  TEXT,
  option_names  TEXT,
  total_price   TEXT,
  raw           JSONB NOT NULL
);

CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders (created_at DESC);
