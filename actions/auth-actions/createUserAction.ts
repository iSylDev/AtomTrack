"use server";

import { createClient } from "@/utils/supabase/server";

export async function createUser() {
  console.log("Hello");

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

  //  Upsert the profile
  const { error: upsertError } = await supabase.from("users").upsert(
    {
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
  console.log('Upsert Success');
  

  if (upsertError) {
    console.error("Upsert Error:", upsertError);
    return {
      success: false,
      message: "Error Creating user profile. Please try again.",
    };
  }
  return { success: true, message: "Profile Synced Successfully" };
}
