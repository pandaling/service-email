import { Request, Response, NextFunction } from 'express';
import { sendOtpSchema } from '../../schemas/email';

export const validateSendOtp = (req: Request, res: Response, next: NextFunction) => {
  const isValid = sendOtpSchema.parse(req.body);
  next();
};
