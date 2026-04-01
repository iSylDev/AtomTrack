"use server";

import { createClient } from "@/utils/supabase/server";
import { LoginSchema } from "@/schemas/AuthSchema";



export async function authAction(data: LoginSchema) {
  const supabase = await createClient();

  try {
    const { error: authError } = await supabase.auth.signInWithOtp({
      email: data.email,
      options: {
        data: {
          username: "username" in data ? data.username : undefined,
        },
      },
    });

    if (authError) throw authError;

    return {
      success: true,
      message: "Check your email for a confirmation OTP!",
    };
  } catch (err: any) {
    return { success: false, message: err.message };
  }
}
