import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://doyomdhqqrgxznpwbcwo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRveW9tZGhxcXJneHpucHdiY3dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5NzQ3OTEsImV4cCI6MjAwODU1MDc5MX0.sYASC7CnY09SX9_iLUh7nrgeOuyESvCziubgEbGy3rE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
