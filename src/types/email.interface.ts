export interface IMailSendProps {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  cc?: string | string[];
  bcc?: string | string[];
}

export interface IMailResponse {
  success: boolean;
  message: string;
}
