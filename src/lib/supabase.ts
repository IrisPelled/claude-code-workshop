import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

// createClient requires non-empty strings — use placeholders so the module
// loads without crashing; the actual values are validated at submit time.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder',
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
    // Unique violation on phone = duplicate registration
    if (error.code === '23505') {
      throw new Error('DUPLICATE_PHONE')
    }
    throw new Error(error.message)
  }
}
