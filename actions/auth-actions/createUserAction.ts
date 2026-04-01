"use client";

import { createClient } from "@/utils/supabase/server";

export async function createUser() {
  const supabase = await createClient();

  const createUser = async () => {
    const {
      data: { user },
      error: getUserError,
    } = await supabase.auth.getUser();

    if (!user || getUserError) {
      throw new Error("Error fetching user details.");
    }

    const { error: createUserError } = await supabase.from("users").upsert(
      {
        user_id: user.id,
        email: user.email,
        username: user.user_metadata?.username,
        profile_picture: "",
        theme: "dark",
        task_deadline: true,
        weekly_reports: true,
        marketing_updates: true,
      },
      { onConflict: "user_id" },
    );

    if (createUserError)
      throw new Error("Error Creating user profile. Please try again.");
  };
}
