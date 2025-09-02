import { supabase } from './supabase'
import type { AllergyCard, AllergyProfile } from './supabase'

export class DatabaseService {
  // Allergy Cards
  static async createAllergyCard(card: Omit<AllergyCard, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('allergy_cards')
      .insert([card])
      .select()
      .single()

    if (error) throw error
    return data
  }

  static async getAllergyCards(userId: string) {
    const { data, error } = await supabase
      .from('allergy_cards')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }

  static async getAllergyCard(id: string) {
    const { data, error } = await supabase
      .from('allergy_cards')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  }

  static async updateAllergyCard(id: string, updates: Partial<AllergyCard>) {
    const { data, error } = await supabase
      .from('allergy_cards')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  }

  static async deleteAllergyCard(id: string) {
    const { error } = await supabase
      .from('allergy_cards')
      .delete()
      .eq('id', id)

    if (error) throw error
  }

  // Allergy Profiles
  static async createAllergyProfile(profile: Omit<AllergyProfile, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('allergy_profiles')
      .insert([profile])
      .select()
      .single()

    if (error) throw error
    return data
  }

  static async getAllergyProfiles(userId: string) {
    const { data, error } = await supabase
      .from('allergy_profiles')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }

  static async updateAllergyProfile(id: string, updates: Partial<AllergyProfile>) {
    const { data, error } = await supabase
      .from('allergy_profiles')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  }

  static async deleteAllergyProfile(id: string) {
    const { error } = await supabase
      .from('allergy_profiles')
      .delete()
      .eq('id', id)

    if (error) throw error
  }

  // User Profile
  static async updateUserProfile(userId: string, updates: { first_name?: string; last_name?: string }) {
    const { data, error } = await supabase
      .from('profiles')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', userId)
      .select()
      .single()

    if (error) throw error
    return data
  }

  static async getUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (error) throw error
    return data
  }
}
