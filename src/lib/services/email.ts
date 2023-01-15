import { createTransport } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { IMailSendProps } from '../../types/email.interface';

const transportOptions: SMTPTransport.Options = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465 ? true : false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
};

const transporter = createTransport(transportOptions);

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

export const sendEmail = async ({
  to,
  subject,
  html,
}: IMailSendProps) => {
  const mailOptions = {
    from: process.env.SMTP_EMAIL_FROM,
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    const { messageId, response } = info;
    console.log('Message sent: %s', messageId);
    return { success: true, message: messageId };
  }
  catch (e) {
    console.log('App exception: ', e);
    return { success: false, message: 'Failed to send email.' };
  }
}