import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),

  email: z.string().email("Please enter a valid email address"),

  inquiryType: z.string().optional(),

  subject: z.string().min(5, "Subject must be at least 5 characters"),

  message: z.string().min(20, "Message must be at least 20 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
