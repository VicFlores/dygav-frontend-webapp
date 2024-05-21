export interface TAvaibookAccomodations {
  id: number;
  name: string;
  rentalType: RentalType;
  status: Status;
  updatedAt: Date;
  units: Unit[];
  reservations: TReservations[];
}

export enum RentalType {
  Full = 'FULL',
}

export enum Status {
  Active = 'ACTIVE',
}

export interface Unit {
  id: number;
  name: Name;
  status: Status;
  updatedAt: Date;
}

export interface Name {
  es: string;
  en: string;
  ca: string;
  de: string;
  fr: string;
  it: string;
  pt: string;
  nl: string;
  ru: string;
}

export interface TReservations {
  unit: string;
  startDate: Date;
  endDate: Date;
  type: Type;
  booking: string;
  partnerName: string;
  travellerName: string;
}

export enum Type {
  PaidWebsite = 'PAID_WEBSITE',
  Blocked = 'BLOCKED',
}
