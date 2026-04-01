import { z } from "zod";

const loginSchema = z.object({
  email: z.email().nonempty(),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export { loginSchema };
