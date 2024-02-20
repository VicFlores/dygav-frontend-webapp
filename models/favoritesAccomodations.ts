import { Schema, model, models } from 'mongoose';

const favoriteSchema = new Schema({
  accomodationId: {
    type: String,
    required: true,
  },
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
});

const Favorite = models.Favorite || model('Favorite', favoriteSchema);

export default Favorite;
