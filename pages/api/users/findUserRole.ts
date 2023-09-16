import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/db/database';
import User from '@/models/user';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      await connectDB();

      const userByRole = await User.find({
        role: 'owner',
      }).exec();

      res.status(200).json(userByRole);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  }
}
