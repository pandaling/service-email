import { z } from "zod";
import { TypeTemplate } from "../enums/templateType.enum";

export const sendOtpSchema = z.object({
  to: z.string().email({ message: 'Invalid email address' }),
  subject: z.string(),
  userRole: z.string(),
  type: z.nativeEnum(TypeTemplate),
});

export const verifyOtpSchema = z.object({
  to: z.string().email({ message: 'Invalid email address' }),
  subject: z.string(),
  userRole: z.string(),
  type: z.nativeEnum(TypeTemplate),
});