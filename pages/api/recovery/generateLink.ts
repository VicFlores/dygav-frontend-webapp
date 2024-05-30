import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/db/database';
import User from '@/models/user';
import jwt from 'jsonwebtoken';
import { sendEmail } from '@/helpers';
import recoveryPasswordTemplate from '@/utils/emails/templates/recoveryPassword';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      await connectDB();

      const { email } = req.body;

      if (!email) throw new Error('El correo es requerido');

      const isExistEmail = await User.findOne({ email }).select(['+password']);

      if (!isExistEmail) throw new Error('El correo no existe');

      const payload = {
        sub: `${isExistEmail.password.slice(-4)}-${isExistEmail._id}`,
      };

      const token = jwt.sign(payload, process.env.NEXTAUTH_SECRET as string, {
        expiresIn: '15m',
      });

      const link = `${process.env.NEXTAUTH_URL}/recovery/reset-password?token=${token}`;

      const mail = {
        from: process.env.USER_EMAIL,
        to: email,
        subject: 'Recuperar contraseña',
        html: recoveryPasswordTemplate(link),
      };

      const response = await sendEmail(mail);

      return res.status(200).json(response);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  }
}
