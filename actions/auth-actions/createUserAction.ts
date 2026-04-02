"use server";

import { createClient } from "@/utils/supabase/server";

export async function createUser() {
  const supabase = await createClient();

  // Get the authenticated user from the session
  const {
    data: { user },
    error: getUserError,
  } = await supabase.auth.getUser();

  if (!user || getUserError) {
    return { success: false, message: "Error fetching user details." };
  }

  // Check if profile exists
  const { data: exisitingProfile } = await supabase
    .from("users")
    .select("user_id")
    .eq("user_id", user.id)
    .single();

    // return here if profile already exists
  if (exisitingProfile) {
    return { success: true, message: "Profile already exists" };
  }

  //  Upsert the profile if its a new user
  const { error: upsertError } = await supabase.from("users").upsert(
    {
      user_id: user.id,
      email: user.email,
      username:
        user.user_metadata?.username || user.email?.split("@")[0] || "New User",
      profile_picture: "",
      theme: "dark",
      task_deadline_notif: true,
      weekly_reports_notif: true,
      marketing_updates_notif: true,
    },
    { onConflict: "user_id" },
  );

  if (upsertError) {
    console.error("Upsert Error:", upsertError);
    return {
      success: false,
      message: "Error Creating user profile. Please try again.",
    };
  }
  return { success: true, message: "Profile Synced Successfully" };
}
