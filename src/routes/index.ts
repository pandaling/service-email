import { Application, NextFunction, Request, Response } from 'express';
import { EmailRoute } from './email.route';

export class RoutesV1 {
  private readonly app: Application;

  constructor(app: Application) {
    this.app = app;
    this.app.use('/v1/test', this.auth, new EmailRoute().router);
  }

  auth(req: Request, res: Response, next: NextFunction) {
    // ...add authentication middleware

    next();
  }
}
