import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/db/database';
import Favorite from '@/models/favoritesAccomodations';
import User from '@/models/user';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      await connectDB();

      const favsAccomodations = await Favorite.find().populate({
        path: 'userId',
        model: User,
      });

      res.status(200).json(favsAccomodations);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      await connectDB();

      const { userId, accomodationId } = req.body;

      if (!userId || !accomodationId)
        return res.status(400).json({ message: 'Missing require fields' });

      const newFavorite = new Favorite({
        userId,
        accomodationId,
      });

      await newFavorite.save();

      res.status(201).json(newFavorite);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      await connectDB();

      const { userId, accomodationId } = req.body;

      const favorite = await Favorite.findOneAndDelete({
        userId,
        accomodationId,
      });

      if (!favorite) {
        return res.status(404).json({ message: 'Favorite not found' });
      }

      res.status(200).json(favorite);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  }
}
