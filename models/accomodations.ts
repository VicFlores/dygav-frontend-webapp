import { Schema, model, models } from 'mongoose';
import { Accomodations } from '@/types';

const AccomodationSchema = new Schema<Accomodations>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  accomodationId: { type: String, required: true },
});

const Accomodation =
  models.Accomodation || model('Accomodation', AccomodationSchema);

export default Accomodation;
