import { Request, Response, NextFunction } from 'express';
import { verifyOtpSchema } from '../../schemas/email';

export const validateVerifyOtpSchema = (req: Request, res: Response, next: NextFunction) => {
  const isValid = verifyOtpSchema.parse(req.body);
  next();
};
