import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/db/database';
import Accomodation from '@/models/accomodations';
import { Types } from 'mongoose';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      await connectDB();

      const { userId: id } = req.query;

      if (typeof id !== 'string') {
        res.status(400).send('Invalid identification');
      }

      const accomodationsByUserId = await Accomodation.find({
        userId: new Types.ObjectId(id as string),
      }).exec();

      res.status(200).json(accomodationsByUserId);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  }
}
