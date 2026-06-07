import { createClient } from '@supabase/supabase-js';

// These are the credentials for the "Test" project on Supabase (ukkeaheoqyherwmzsapb)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ukkeaheoqyherwmzsapb.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_NbFhumtFBOidqC0Vd_OBMw_vCunQVPA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
