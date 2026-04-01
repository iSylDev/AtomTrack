"use server";

import { createClient } from "@/utils/supabase/server";

const createUser = async () => {
  const supabase = await createClient();

  // Get the authenticated user from the session
  const {
    data: { user },
    error: getUserError,
  } = await supabase.auth.getUser();

  if (!user || getUserError) {
    return { success: false, message: "Error fetching user details." };
  }

  //  Upsert the profile
  const { error: upsertError } = await supabase.from("users").upsert(
    {
      user_id: user.id,
      email: user.email,
      username:
        user.user_metadata?.username || user.email?.split("@")[0] || "New User",
      profile_picture: "",
      theme: "dark",
      task_deadline: true,
      weekly_reports: true,
      marketing_updates: true,
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
};

export default createUser;
