import { Request, Response, NextFunction } from 'express';
import { IRoles } from '../../enums/role.enum';

export const permission = function (allowedRoles: IRoles[]) {
  return async function (req: Request, res: Response, next: NextFunction) {
    const payload = req.body;

    if (!payload) {
      return res
        .status(403)
        .send({
          success: false,
          message: 'Forbidden',
        });
    }

    if (allowedRoles.includes(payload['userRole'])) {
      next();
    } else {
      res
        .status(403)
        .send({
          success: false,
          message: 'Forbidden',
        });
    }
  }
};
