import { Layout, TouristAccomodations } from '@/components';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { reservations } from '@/utils';

type Reservation = {
  id: number;
  src?: string[];
  imgUrl?: string;
  title: string;
  information: string;
  currentsReservations: {
    start: string;
    end: string;
    checkin: string;
    checkout: string;
    paymentStatus: string;
  }[];
  reservationHistorial: {
    start: string;
    end: string;
    checkin: string;
    checkout: string;
    paymentStatus: string;
  }[];
};

export default function TouristAccomodationPage() {
  const { data: session } = useSession();
  const [reservation, setReservation] = useState<Reservation>({
    id: 0,
    src: [],
    imgUrl: '',
    title: '',
    information: '',
    currentsReservations: [],
    reservationHistorial: [],
  });
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    const reservationById = reservations.find(
      (reservation: Reservation) => reservation.id === Number(id)
    );

    if (reservationById) {
      setReservation(reservationById);
    }
  }, [reservation, id]);

  return (
    <section>
      <Layout session={session} title='Dygav Accomodations'>
        <TouristAccomodations {...reservation} />
      </Layout>
    </section>
  );
}
