import { Request, Response } from "express";
import { AppException } from "../lib/exceptions/AppExceptions";
import { selectTemplate } from "../utils/selectTemplate";
import { sendEmail } from "../lib/services/email";

export class EmailController {
  constructor() { }

  async emailVerify(req: Request, res: Response) {
    const {
      to,
      subject,
      type,
    } = req.body;

    try {
      await sendEmail({
        to,
        subject,
        html: selectTemplate(type),
      });

      res.status(200).send('Success');
    }
    catch (e) {
      throw new AppException('Something went wrong.',);
    }
  }
}
