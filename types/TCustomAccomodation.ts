export interface TCustomAccomodation {
  id: number;
  name: Name;
  rentalType: string;
  status: string;
  updatedAt: Date;
  units: Unit[];
  reservations: Reservation[];
}

enum Name {
  Ancora4ApartamentoEnUrbanizaciónConPiscina = 'Ancora 4: Apartamento en urbanización con piscina',
  Empty = '',
}

interface Reservation {
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
  accommodationName: Name;
  partnerName: string;
  defaultLeaderPhone: string;
  numberOfguests: number;
  cancelledDate: string;
}

interface CancellationPolicy {
  type: string;
  days: number;
  additionalPolicy: UnitName;
}

interface UnitName {
  es: Name;
  en: Name;
  ca: Name;
  de: Name;
  fr: Name;
  it: Name;
  pt: Name;
  nl: Name;
  ru: Name;
}

interface OccupiedPeriod {
  unit: string;
  startDate: Date;
  endDate: Date;
  type: string;
  booking: string;
}

interface Travellers {
  standard: number;
  additional: number;
}

interface Unit {
  id: number;
  name: UnitName;
  status: string;
  updatedAt: Date;
}
