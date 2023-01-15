import { TypeTemplate } from "../enums/templateType.enum";
import { OtpTemplate } from "../lib/templates/otpTemplate";

export const selectTemplate = (type: TypeTemplate) => {
  switch (type) {
    case TypeTemplate.SEND_OTP: return OtpTemplate.html;
    case TypeTemplate.VERIFY_OTP: return OtpTemplate.html;
    default: return OtpTemplate.html;
  }
};
