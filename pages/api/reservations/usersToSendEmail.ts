import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/db/database';
import UserAccomodation from '@/models/userAccomodationsEmail';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      await connectDB();

      const { userId, accomodationId } = req.query;

      if (!userId || !accomodationId) {
        throw new Error('Missing fields');
      }

      const userAccomodation = await UserAccomodation.findOne({
        userId,
        accomodationId,
      });

      res.status(200).json(userAccomodation);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      await connectDB();

      const { userId, accomodationId } = req.body;

      if (!userId || !accomodationId) {
        throw new Error('Missing fields');
      }

      const newUserAccomodationEmail = new UserAccomodation({
        userId,
        accomodationId,
      });

      await newUserAccomodationEmail.save();

      res.status(201).json(newUserAccomodationEmail);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      await connectDB();

      const { userId, accomodationId } = req.body;

      const userAccomodation = await UserAccomodation.findOneAndDelete({
        userId,
        accomodationId,
      });

      if (!userAccomodation) {
        return res.status(404).json({ message: 'User accomodation not found' });
      }

      res.status(200).json(userAccomodation);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  }
}
