import { Schema, model, models } from 'mongoose';
import { Accomodations } from '@/types';

const UserAccomodationsEmailSchema = new Schema<Accomodations>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  accomodationId: { type: String, required: true },
});

const UserAccomodation =
  models.UserAccomodationsEmail ||
  model('UserAccomodationsEmail', UserAccomodationsEmailSchema);

export default UserAccomodation;
