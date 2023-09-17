import { Schema, model, models } from 'mongoose';
import { Accomodations } from '@/types';

const AccomodationSchema = new Schema<Accomodations>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  accomodationId: { type: String, required: true },
  name: { type: String, required: [true, 'Name is required'] },
  web: { type: String, default: 'Dygav' },
  image: { type: String, required: [true, 'Image is required'] },
  bookingMode: { type: String, default: 'ON-LINE' },
  environment: { type: String, required: [true, 'Environment is required'] },
  rentalType: { type: String, required: [true, 'Rental type is required'] },
  entryTime: { type: String, required: [true, 'Entry time is required'] },
  fullPayment: { type: Boolean },

  departureTime: {
    type: String,
    required: [true, 'Departure time is required'],
  },

  accommodationType: {
    type: String,
    required: [true, 'Accomodation type is required'],
  },

  advance: {
    type: { type: String, default: 'PERCENTAGE' },
    num: { type: Number, default: 25 },
  },

  location: {
    address: { type: String, required: [true, 'Address is required'] },
    zipCode: { type: String, required: [true, 'Zip Code is required'] },
    city: { type: String, required: [true, 'City is required'] },
    region: { type: String, required: [true, 'Region is required'] },
    country: { type: String, required: [true, 'Country is required'] },
    area: { type: String, required: [true, 'Area is required'] },
    longitude: { type: Number, default: 0 },
    latitude: { type: Number, default: 0 },
  },

  cancellationPolicy: {
    type: {
      type: String,
      default: 'ADVANCE',
    },
    days: {
      type: Number,
      default: 3,
    },
  },

  bookingConditions: {
    es: { type: String, required: [true, 'Booking conditions is required'] },
  },

  description: {
    es: { type: String, required: [true, 'Description is required'] },
  },

  introduction: {
    es: { type: String, required: [true, 'Introduccion is required'] },
  },

  units: [
    {
      name: {
        es: { type: String, required: [true, 'Unit name is required'] },
      },

      description: {
        es: { type: String, required: [true, 'Unit is required'] },
      },

      capacity: { type: Number, required: [true, 'Capacity is required'] },
      additionalCapacity: {
        type: Number,
        required: [true, 'Additional capacity is required'],
      },
      extraCapacity: {
        type: Number,
        required: [true, 'Extra capacity is required'],
      },
      forceWeekend: { type: Boolean, default: true },
      minimumStay: {
        type: Number,
        required: [true, 'Minium stay is required'],
      },
      weekPrice: { type: Number, required: [true, 'Week price is required'] },
      weekendPrice: {
        type: Number,
        required: [true, 'Weekend price is required'],
      },
      additionalPricePerPerson: {
        type: Number,
        required: [true, 'Additional price person is required'],
      },
    },
  ],
});

const Accomodation =
  models.Accomodation || model('Accomodation', AccomodationSchema);

export default Accomodation;
