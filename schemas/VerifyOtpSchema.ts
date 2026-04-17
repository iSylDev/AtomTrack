import { z } from "zod";

const verifyOtpSchema = z.object({
  token: z.string('Invalid OTP').nonempty('Please enter your OTP')
});

export type VerifyOtpSchema = z.infer<typeof verifyOtpSchema>;

export { verifyOtpSchema };
