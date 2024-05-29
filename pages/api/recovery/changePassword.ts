import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/db/database';
import User from '@/models/user';
import jwt from 'jsonwebtoken';
import { sendEmail } from '@/helpers';
import bcrypt from 'bcrypt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      await connectDB();

      const { token, newPassword } = req.body;

      if (!token) throw new Error('El token es requerido');
      if (!newPassword) throw new Error('La contraseña es requerida');

      const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET as string);

      if (!decoded.sub) throw new Error('El token es inválido');

      let parts: string[] = [];

      if (decoded.sub && typeof decoded.sub === 'string') {
        parts = decoded.sub.split('-');
      }

      const user = await User.findById(parts[1]).select(['+password']);

      if (!user) throw new Error('El usuario no existe');

      if (`${user.password.slice(-4)}-${user._id}` !== decoded.sub)
        return res.status(400).json({ message: 'El token es inválido' });

      const hash = await bcrypt.hash(newPassword, 10);

      await User.findByIdAndUpdate(user._id, { password: hash });

      return res.status(200).json({ message: 'Contraseña actualizada' });
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  }
}
