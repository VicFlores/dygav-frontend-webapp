import { ObjectId } from 'mongoose';

export type Accomodations = {
  userId: ObjectId;
  accomodationId: string;
};
