"use server";
import { createClient } from "@/utils/supabase/server";
import { success } from "zod";

export const toggleThemeAction = async (theme: string) => {
  const supabase = await createClient();

  const {
    data: { user },
    error: getUserError,
  } = await supabase.auth.getUser();

  if (!user || getUserError) {
    return { success: false, message: "Unauthorized. Please log in." };
  }

  const { data, error } = await supabase
    .from("users")
    .update({ theme })
    .eq("user_id", user?.id)

  if (error) {
    return {
      success: false,
      message: error.message || "Failed to update theme",
    };
  }
  
  return { success: true, message: "Theme uupdated successfully" };
};
