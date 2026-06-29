import { createClient } from '@supabase/supabase-js'

// Read from runtime globals (public/config.js) or build-time env vars (.env)
const w = window as unknown as Record<string, string>
const supabaseUrl      = w.__SUPABASE_URL__      || import.meta.env.VITE_SUPABASE_URL      as string
const supabaseAnonKey  = w.__SUPABASE_ANON_KEY__ || import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(
  supabaseUrl      || 'https://placeholder.supabase.co',
  supabaseAnonKey  || 'placeholder',
)

export interface Registration {
  first_name: string
  last_name: string
  phone: string
}

export async function registerForWebinar(data: Registration) {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase environment variables are not configured.')
  }
  const { error } = await supabase.from('registrations').insert([data])

  if (error) {
    if (error.code === '23505') {
      throw new Error('DUPLICATE_PHONE')
    }
    throw new Error(error.message)
  }
}
