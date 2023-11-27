import type { NextApiRequest, NextApiResponse } from 'next'
import Accomodation from '@/models/accomodations';
import User from '@/models/user';
import { connectDB } from '@/utils/db/database'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
        await connectDB();
        // Get all accomodations and populate using native mongoose method
        const findAllAccomodations = await Accomodation.find().populate({path: 'userId', model: User});

        return res.status(200).json(findAllAccomodations);
       
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  }
}