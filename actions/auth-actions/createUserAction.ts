"use server";

import getRandomPfp from "@/helpers/pfpSelector";
import { createClient } from "@/utils/supabase/server";

export async function createUser() {
  const randomPfp = getRandomPfp();
  const supabase = await createClient();

  // Get the authenticated user from the session
  const {
    data: { user },
    error: getUserError,
  } = await supabase.auth.getUser();
  console.log(user);
  

  if (!user || getUserError) {
    return { success: false, message: "Error fetching user details." };
  }

  // Check if profile exists
  const { data: existingProfile } = await supabase
    .from("users")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

    // return here if profile already exists
  if (existingProfile) {
    return { success: true, message: "Profile already exists" };
  }

  //  Inset the profile if it's a new user
  const { error: insertError } = await supabase.from("users").insert({
    user_id: user.id,
    email: user.email,
    username: user.user_metadata?.username || user.email?.split("@")[0] || "New User",
    profile_picture: randomPfp,
    theme: "dark",
    task_deadline_notif: true,
    weekly_reports_notif: true,
    marketing_updates_notif: true,
  });

  if (insertError) {
    console.error("Insert Error:", insertError);
    return {
      success: false,
      message: "Error Creating user profile. Please try again.",
    };
  }
  return { success: true, message: "Profile Synced Successfully" };
}
