import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/db/database';
import Favorite from '@/models/favoritesAccomodations';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { userId } = req.query;

      if (!userId) {
        throw new Error('userId is required');
      }

      await connectDB();

      const accomodationsByUserId = await Favorite.find({
        userId,
      }).exec();

      res.status(200).json(accomodationsByUserId);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  }
}
