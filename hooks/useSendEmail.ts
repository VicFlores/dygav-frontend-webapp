import nodemailer from 'nodemailer';

export const useSendEmail = (
  toEmail: string,
  subject: string,
  html: string
) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  const mailOptionClient = {
    to: toEmail,
    subject,
    html,
  };

  return {
    transporter,
    mailOptionClient,
  };
};
