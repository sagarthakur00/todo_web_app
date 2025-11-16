import { z } from "zod";

export const SignupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const TodoSchema = z.object({
  title: z.string().min(3),
});

export const ResetPasswordSchema = z.object({
  token: z.string(),
  newPassword: z.string().min(6),
});
