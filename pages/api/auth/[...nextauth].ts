import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcrypt';
import User from '@/models/user';
import { connectDB } from '@/utils/db/database';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        await connectDB();

        const userFound = await User.findOne({
          email: credentials?.email,
        }).select('+password');

        if (!userFound) throw new Error('Invalid credentials');

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          userFound.password
        );

        if (!passwordMatch) throw new Error('Invalid credentials');

        return userFound;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRECT as string,
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      await connectDB();

      if (account?.provider === 'google') {
        const userFound = await User.findOne({ email: profile?.email });

        if (!userFound) {
          const user = new User({
            fullname: profile?.name,
            email: profile?.email,
          });

          await user.save();

          return true;
        }
      }

      return true;
    },

    jwt({ token, user }) {
      if (user) token.user = user;

      return token;
    },
    session({ session, token }) {
      session.user = token.user as any;

      return session;
    },
  },

  pages: {
    signIn: '/login',
  },
});
