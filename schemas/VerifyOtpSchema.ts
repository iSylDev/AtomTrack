import { z } from "zod";

const verifiyOtpSchema = z.object({
  token: z.string('Invalid OTP').nonempty('Please enter your OTP')
});

export type VerfiyOtpSchema = z.infer<typeof verifiyOtpSchema>;

export { verifiyOtpSchema };
