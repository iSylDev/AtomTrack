import { z } from "zod";

const verifiyOtpSchema = z.object({
  token: z.string(),
});

export type VerfiyOtpSchema = z.infer<typeof verifiyOtpSchema>;

export { verifiyOtpSchema };
