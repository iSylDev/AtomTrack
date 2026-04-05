"use server";

import { createClient } from "@/utils/supabase/server";

export const mutateUserDataAction = async (payload: Record<string, any>) => {
  // Create client in server
  const supabse = await createClient();

  //Check the user that is currently logged in
  const {
    data: { user },
    error: getUserError,
  } = await supabse.auth.getUser();

  if (!user || getUserError) {
    return { success: false, message: "Unauthorized. Please log in" };
  }

  // Update the user's data on supabase:
  const { data, error: mutateError } = await supabse
    .from("users")
    .update(payload)
    .eq("user_id", user?.id);

  if (mutateError) {
    return {
      success: false,
      message: mutateError.message || "Failed to Update user settings",
    };
  }

  return { success: true, message: "Changes saved sucessfully" };
};
