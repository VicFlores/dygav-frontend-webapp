import { Schema, model, models } from "mongoose";

const favoriteBlogPostsSchema = new Schema({
  blogPostId: {
    type: String,
    required: true,
  },
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

const Favorite =
  models.FavoriteBlogPosts ||
  model("FavoriteBlogPosts", favoriteBlogPostsSchema);

export default Favorite;
