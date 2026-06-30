// In order to create users, you need to connect the login part of the frontend to supabase

import { createClient } from '@supabase/supabase-js';

// in order to connect, you need to fetch the supabase url

export const supabaseClient = createClient(
    process.env.EXPO_PUBLIC_SUPABASE_URL,
    process.env.EXPO_PUBLIC_SUPABSE_PUBLISHABLE_KEY
)