export type Accommodation = {
  aviabook_id: string;
  accomodationid: number;
  name: string;
  images: string[];
  reservations: Reservation[];
};

export type Booking = {
  partnername: string;
  totalamount: number;
  accommodation: string;
  images: string[];
};

interface Reservation {
  id: string;
  status: string;
  origin: string;
  createdAt: Date;
  checkInDate: Date;
  checkOutDate: Date;
  checkinTime: string;
  checkoutTime: string;
  bookingMode: string;
  paymentMethod: string;
  totalAmount: number;
  advance: number;
  partnerFee: number;
  avaibookFee: number;
  firstPayment: number;
  secondPayment: number;
  travellerEmail: string;
  travellerName: string;
  unitId: number;
  accommodationId: number;
  accommodationName: string;
  partnerName: string;
  defaultLeaderPhone: string;
  numberOfguests: number;
  cancelledDate: string;
}
