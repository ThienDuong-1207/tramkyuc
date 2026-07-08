import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY — copy .env.local.example to .env.local and fill in your project's values. Audio playback is disabled until then."
  );
}

/** Public, anon-key client. Only used to read from the public "tramkyuc_audio" bucket — no auth, no writes from the client. */
export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

const AUDIO_BUCKET = "tramkyuc_audio";

/**
 * Builds the public URL for a file in the "tramkyuc_audio" storage bucket.
 * Returns null when the path is empty or Supabase isn't configured yet,
 * so callers can render a "not uploaded yet" state instead of crashing.
 */
export function getAudioUrl(path: string): string | null {
  if (!path || !supabase) return null;
  return supabase.storage.from(AUDIO_BUCKET).getPublicUrl(path).data.publicUrl;
}
