-- MyAllergies Database Schema for Supabase
-- Run this in your Supabase SQL Editor

-- Enable Row Level Security
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create allergy_cards table
CREATE TABLE IF NOT EXISTS public.allergy_cards (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  allergies TEXT[] NOT NULL,
  language TEXT NOT NULL DEFAULT 'English',
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create allergy_profiles table
CREATE TABLE IF NOT EXISTS public.allergy_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  allergy_name TEXT NOT NULL,
  severity TEXT CHECK (severity IN ('mild', 'moderate', 'severe')) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,
  source TEXT DEFAULT 'website' -- track where the subscription came from
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.allergy_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.allergy_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create RLS policies for allergy_cards
CREATE POLICY "Users can view own allergy cards" ON public.allergy_cards
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own allergy cards" ON public.allergy_cards
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own allergy cards" ON public.allergy_cards
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own allergy cards" ON public.allergy_cards
  FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for allergy_profiles
CREATE POLICY "Users can view own allergy profiles" ON public.allergy_profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own allergy profiles" ON public.allergy_profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own allergy profiles" ON public.allergy_profiles
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own allergy profiles" ON public.allergy_profiles
  FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for newsletter_subscriptions
-- Allow anyone to subscribe (no auth required)
CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscriptions
  FOR INSERT WITH CHECK (true);

-- Only allow users to view their own subscriptions (if they have an account)
CREATE POLICY "Users can view own newsletter subscriptions" ON public.newsletter_subscriptions
  FOR SELECT USING (email = auth.jwt() ->> 'email');

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_allergy_cards_updated_at
  BEFORE UPDATE ON public.allergy_cards
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_allergy_profiles_updated_at
  BEFORE UPDATE ON public.allergy_profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_allergy_cards_user_id ON public.allergy_cards(user_id);
CREATE INDEX IF NOT EXISTS idx_allergy_profiles_user_id ON public.allergy_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_allergy_cards_created_at ON public.allergy_cards(created_at);
CREATE INDEX IF NOT EXISTS idx_allergy_profiles_created_at ON public.allergy_profiles(created_at);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON public.newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_subscribed_at ON public.newsletter_subscriptions(subscribed_at);
