import type { NextApiRequest, NextApiResponse } from 'next';
import User from '@/models/user';
import bcrypt from 'bcrypt';
import { connectDB } from '@/utils/db/database';

type TSignup = {
  fullname: string;
  email: string;
  password: string;
  role: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { fullname, email, password, role }: TSignup = req.body;

    if (!password || password.length < 6)
      return res
        .status(400)
        .json({ message: 'Password must be at least 6 characters' });

    try {
      await connectDB();

      const userFound = await User.findOne({ email });

      if (userFound)
        return res.status(400).json({ message: 'Email already exists' });

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({
        fullname,
        email,
        password: hashedPassword,
        role,
      });

      const savedUser = await user.save();

      return res.status(200).json({
        _id: savedUser._id,
        fullname: savedUser.fullname,
        email: savedUser.email,
      });
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  } else return res.status(201).json('Cant access');
}
