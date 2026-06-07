-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  bio TEXT,
  phone_number TEXT,
  is_verified BOOLEAN DEFAULT false,
  wallet_balance DECIMAL(12, 2) DEFAULT 0.00,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Listings table
CREATE TABLE listings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  seller_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT CHECK (category IN ('app', 'code', 'project', 'file')) NOT NULL,
  price DECIMAL(12, 2) NOT NULL,
  file_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Transactions table
CREATE TABLE transactions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  buyer_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  listing_id UUID REFERENCES listings(id) ON DELETE SET NULL,
  platform_fee DECIMAL(12, 2) NOT NULL,
  seller_payout DECIMAL(12, 2) NOT NULL,
  status TEXT CHECK (status IN ('pending', 'completed', 'failed')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone." ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile." ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile." ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Listings policies
CREATE POLICY "Listings are viewable by everyone." ON listings
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own listings." ON listings
  FOR INSERT WITH CHECK (auth.uid() = seller_id);

CREATE POLICY "Users can update their own listings." ON listings
  FOR UPDATE USING (auth.uid() = seller_id);

CREATE POLICY "Users can delete their own listings." ON listings
  FOR DELETE USING (auth.uid() = seller_id);

-- Transactions policies
CREATE POLICY "Users can view their own transactions as buyer." ON transactions
  FOR SELECT USING (auth.uid() = buyer_id);

CREATE POLICY "Users can view their own transactions as seller." ON transactions
  FOR SELECT USING (auth.uid() IN (
    SELECT seller_id FROM listings WHERE id = transactions.listing_id
  ));
