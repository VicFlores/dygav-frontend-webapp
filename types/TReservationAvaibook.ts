export type ReservationAvaibook = {
  id: string;
  status: string;
  occupiedPeriod: OccupiedPeriod;
  unitId: number;
  unitName: UnitName;
  accommodationId: number;
  accommodationName: string;
  paymentUrl: string;
  info: string;
};

export type OccupiedPeriod = {
  unit: number;
  startDate: Date;
  endDate: Date;
  type: string;
  bookingId: string;
};

export type UnitName = {
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
