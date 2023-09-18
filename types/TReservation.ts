import { Accomodations } from '.';

export type TReservation = {
  id: string;
  externalId: string;
  status: string;
  origin: string;
  createdAt: Date;
  checkInDate: Date;
  checkOutDate: Date;
  checkinTime: string;
  checkoutTime: string;
  bookingMode: string;
  antiFraudGuarantee: boolean;
  paymentMethod: string;
  cancellationPolicy: CancellationPolicy;
  travellers: Travellers;
  totalAmount: number;
  advance: number;
  partnerFee: number;
  avaibookFee: number;
  firstPayment: number;
  secondPayment: number;
  travellerEmail: string;
  travellerName: string;
  expirationDate: null;
  cancellationPreviousState: null;
  occupiedPeriod: OccupiedPeriod;
  unitId: number;
  unitName: UnitName;
  accommodationId: number;
  accommodationName: string;
  partnerName: string;
  defaultLeaderPhone: string;
  numberOfguests: number;
};

type CancellationPolicy = {
  type: string;
  days: number;
  additionalPolicy: UnitName;
};

type UnitName = {
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

type OccupiedPeriod = {
  unit: number;
  startDate: Date;
  endDate: Date;
  type: string;
  bookingId: string;
};

type Travellers = {
  standard: number;
  additional: number;
};
