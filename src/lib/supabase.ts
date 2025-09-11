import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dyxlwmpsxfjtvpmmuyxv.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5eGx3bXBzeGZqdHZwbW11eXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3NzIzNzIsImV4cCI6MjA3MjM0ODM3Mn0.zoBGJKCYGfN_GuIMh1JiMBkIIK05cAqzcA7NonCNSSs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export interface User {
  id: string
  email: string
  first_name?: string
  last_name?: string
  created_at: string
  updated_at: string
}

export interface AllergyCard {
  id: string
  user_id: string
  allergies: string[]
  language: string
  name?: string
  created_at: string
  updated_at: string
}

export interface AllergyProfile {
  id: string
  user_id: string
  allergy_name: string
  severity: 'mild' | 'moderate' | 'severe'
  notes?: string
  created_at: string
  updated_at: string
}

export interface NewsletterSubscription {
  id: string
  email: string
  subscribed_at: string
  is_active: boolean
  source: string
}
