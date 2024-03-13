import blockDaysTemplate from '@/utils/emails/templates/blockDaysTemplate';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { fullname, owner, email, startDate, endDate, accomodation } =
        req.body;

      if (
        !fullname ||
        !owner ||
        !email ||
        !startDate ||
        !endDate ||
        !accomodation
      ) {
        return res
          .status(400)
          .json({ message: 'Por favor, rellene todos los campos' });
      }

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.USER_PASSWORD,
        },
      });

      const mailOptionClient = {
        to: 'reservas@dygav.es',
        subject: `Bloqueo de fechas en ${accomodation}`,
        html: blockDaysTemplate(
          fullname,
          owner,
          email,
          startDate,
          endDate,
          accomodation
        ),
      };

      transporter.sendMail(mailOptionClient, function (error) {
        if (error) {
          return res.status(400).json({ message: error.message });
        } else {
          return res.status(200).json({ message: 'Correo enviado' });
        }
      });
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  }
}
