'use server'
import { createClient } from "@/utils/supabase/server";

export async function verifyOtpAction({
  email,
  token,
}: {
  email: string;
  token: string;
}) {
  const supabase = await createClient()


  try {
    const {data, error: verificationError} = await supabase.auth.verifyOtp({
      email, token, type: 'email'
    })

    if (verificationError) throw verificationError

    return { success: true, message: 'Email verified sucessfully' }
  }
  catch (err: any) {
    return { success: false, message: err.message}
  }
}
