CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS Articles (
  id SERIAL PRIMARY KEY,
  embedding vector(384), /* 384 is the dimension of the Embedding model */
  text text,
  created_at timestamptz DEFAULT now()
);