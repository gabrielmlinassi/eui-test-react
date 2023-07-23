import { createClient } from "@supabase/supabase-js";
import { envs } from "./envs";

const supabaseUrl = envs.SUPABASE_URL;
const supabaseAnonKey = envs.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
