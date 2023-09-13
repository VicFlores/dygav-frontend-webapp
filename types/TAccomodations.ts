export type Accomodation = {
  name: string;
  web: string;
  bookingMode: string;
  accommodationType: string;
  environment: string;
  location: Location;
  rentalType: string;
  cancellationPolicy: CancellationPolicy;
  advance: Advance;
  privatePrivacyPolicy: BookingConditions;
  bookingConditions: BookingConditions;
  entryTime: string;
  departureTime: string;
  fullPayment: boolean;
  depositAmount: number;
  depositCharge: number;
  depositType: string;
  depositRefund: number;
  depositPayment: number;
  minBookingPeriod: number;
  maxBookingPeriod: number;
  description: BookingConditions;
  introduction: BookingConditions;
  tradeName: BookingConditions;
  units: Unit[];
};

export type Advance = {
  type: string;
  num: number;
};

export type BookingConditions = {
  es: string;
  en: string;
  ca: string;
  de: string;
  fr: string;
  it: string;
  pt: string;
  nl: string;
  ru: string;
};

export type CancellationPolicy = {
  type: string;
  days: number;
  additionalPolicy: BookingConditions;
};

export type Location = {
  address: string;
  zipCode: string;
  city: string;
  region: string;
  country: string;
  area: string;
  longitude: number;
  latitude: number;
};

export type Unit = {
  name: BookingConditions;
  tradeName: BookingConditions;
  description: BookingConditions;
  capacity: number;
  additionalCapacity: number;
  extraCapacity: number;
  checkInDay: string;
  departureDay: string;
  forceWeekend: boolean;
  minimumStay: number;
  weekPrice: number;
  weekendPrice: number;
  additionalPricePerPerson: number;
  unitSeasons: any[];
  unitExtras: any[];
};
