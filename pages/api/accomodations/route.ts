import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/db/database';
import { Accomodations } from '@/types';
import Accomodation from '@/models/accomodations';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const body: Accomodations = req.body;

    try {
      await connectDB();

      const savedAccomodation = await Accomodation.create(body);

      res.status(200).json(savedAccomodation);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      await connectDB();

      const findAllAccomodations = await Accomodation.find();

      return res.status(200).json(findAllAccomodations);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  } else return res.status(201).json('Cant access');
}
