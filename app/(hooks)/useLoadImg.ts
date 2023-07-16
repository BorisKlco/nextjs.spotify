import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function useLoadImg(song: Song) {
  const supabase = useSupabaseClient();

  if (!song) return null;

  const { data: imgData } = supabase.storage
    .from("images")
    .getPublicUrl(song.image_path);

  return imgData.publicUrl;
}
