import { email, z } from "zod";

const signupSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long").nonempty(),
    email: z.email("Invalid email address").nonempty(),
});

const loginSchema = z.object({
    email: z.email().nonempty()
})

export type SignupSchema = z.infer<typeof signupSchema>
export type LoginSchema = z.infer<typeof loginSchema>

export { signupSchema, loginSchema }