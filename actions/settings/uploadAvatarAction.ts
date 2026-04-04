"use server";

import { createClient } from "@/utils/supabase/server";

export const uploadAvatarAction = async (formData: FormData) => {
  // Create client in server
  const supabase = await createClient();
  const file = formData.get("file") as File;

  // Clean file name
  const cleanFileName = file.name.replace(/[^a-zA-Z0-9.]/g, "_");

  const { data, error } = await supabase.storage
    .from("pfps")
    .upload(`${Date.now()}-${cleanFileName}`, file, {
      cacheControl: '3600',
      upsert: true,
    });

  if (error) return { success: false, message: error.message };

  const {
    data: { publicUrl },
  } = supabase.storage.from("pfps").getPublicUrl(data.path);

  return { success: true, url: publicUrl };
};
