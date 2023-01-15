import { Router, Request, Response } from 'express';
import { EmailController } from '../controllers/email.controller';
import { IRoles } from '../enums/role.enum';
import { permission } from '../lib/middlewares/permission.middleware';
import { validateVerifyOtpSchema } from '../validations/email/verifyOtp.validation';

export class EmailRoute {
  router: Router;
  emailController: EmailController = new EmailController();

  constructor() {
    this.router = Router();

    this.routes();
  }

  routes() {
    this.router.get('/my/test', (req: Request, res: Response) => {
      res.send('Hello boss!!!');
    });

    this.router.post(
      '/my/register/verify',
      validateVerifyOtpSchema,
      permission([IRoles.ADMIN]),
      async (req: Request, res: Response) => this.emailController.emailVerify(req, res),
    );
  }
}
