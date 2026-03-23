"use server";

import { createClient } from "@/utils/supabase/server";
import {
  SignupSchema,
  LoginSchema,
  signupSchema,
  loginSchema,
} from "@/schemas/AuthSchema";

export async function authAction({
  mode,
  data,
}: {
  mode: string | null;
  data: LoginSchema | SignupSchema;
}) {
  const currentSchema = mode === "sign-up" ? signupSchema : loginSchema;

  const supabase = await createClient();

  try {
    const { error: authError } = await supabase.auth.signInWithOtp({
      email: data.email,
      options: {
        data: {
          username: "username" in data ? data.username : undefined,
        },
        shouldCreateUser: mode === "sign-up",
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
