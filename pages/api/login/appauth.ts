import { NextApiRequest, NextApiResponse } from 'next';
import User from '@/models/user';
import bcrypt from 'bcrypt';
import { connectDB } from '@/utils/db/database';


type TLogin = {
    email: string;
    password: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        const { email, password }:TLogin = req.body;

        await connectDB();

        let userFound = await User.findOne({
          email: email,
        }).select(['+password', '+role'])

        if (!userFound) {
          return res.status(404).json({ message: 'User not found' });
        } 

        const passwordMatch = await bcrypt.compare(
          password,
          userFound.password
        );

        if (!passwordMatch){
          return res.status(404).json({ message: 'Invalid credentials' });
        }

        if (userFound.role != 'admin') {
          return res.status(401).json({ message: 'Unauthorized' });
        }

        userFound = userFound.toObject();

        delete userFound.password;
        delete userFound.role;

        
        res.status(200).json({ message: 'Login successful', userAdmin: true, user: userFound })
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
