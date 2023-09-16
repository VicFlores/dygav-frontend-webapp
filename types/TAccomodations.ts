import { ObjectId } from 'mongoose';

export type Accomodations = {
  _id: ObjectId;
  userId: ObjectId;
  name: string;
  web?: string;
  image: string;
  bookingMode?: string;
  accommodationType: string;
  environment: string;
  location: Location;
  rentalType: string;
  cancellationPolicy?: CancellationPolicy;
  advance?: Advance;
  bookingConditions: BookingConditions;
  entryTime: string;
  departureTime: string;
  fullPayment?: boolean;
  description: BookingConditions;
  introduction: BookingConditions;
  units: Unit[];
};

export type Advance = {
  type: string;
  num: number;
};

export type BookingConditions = {
  es: string;
};

export type CancellationPolicy = {
  type: string;
  days: number;
};

export type Location = {
  address: string;
  zipCode: string;
  city: string;
  region: string;
  country: string;
  area: string;
  longitude?: number;
  latitude?: number;
};

export type Unit = {
  name: BookingConditions;
  tradeName?: BookingConditions;
  description: BookingConditions;
  capacity: number;
  additionalCapacity: number;
  extraCapacity: number;
  forceWeekend?: boolean;
  minimumStay: number;
  weekPrice: number;
  weekendPrice: number;
  additionalPricePerPerson: number;
};
