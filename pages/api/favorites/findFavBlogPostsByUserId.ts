import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/utils/db/database";
import FavoriteBlogPosts from "@/models/favoriteBlogPosts";
import axios from "axios";
import { BlogPost } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { userId } = req.query;

      if (!userId) {
        throw new Error("userId is required");
      }

      await connectDB();

      const blogPostByUserId = await FavoriteBlogPosts.find({
        userId,
      }).exec();

      res.status(200).json(blogPostByUserId);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  }
}
