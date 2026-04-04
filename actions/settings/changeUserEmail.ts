"user server";

import { createClient } from "@/utils/supabase/server";

const changeUserEmail = async (newEmail: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.updateUser({
    email: newEmail,
  });

  if (error) {
    return { success: false, message: error.message };
  }

  return {
    success: true,
    message: "Confirmation link sent to your new email address",
  };
};

export { changeUserEmail }