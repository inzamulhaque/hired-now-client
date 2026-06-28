import { z } from "zod";

export const signupSchema = z
  .object({
    name: z.string().min(2, "Name is required"),

    email: z.string().email("Invalid email address"),

    password: z.string().min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string(),

    terms: z.boolean().refine((value) => value === true, {
      message: "You must accept terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
