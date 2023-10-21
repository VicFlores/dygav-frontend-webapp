import { Layout, TouristReservationsHistorial } from "@/components";
import { reservations } from "@/utils";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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

const ReservationHistorialPage = () => {
  const { data: session } = useSession();
  const [reservation, setReservation] = useState<Reservation>({
    id: 0,
    src: [],
    imgUrl: "",
    title: "",
    information: "",
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
      <Head>
        <title>Dygav Accomodations</title>
      </Head>

      <Layout session={session}>
        <TouristReservationsHistorial {...reservation} />
      </Layout>
    </section>
  );
};

export default ReservationHistorialPage;
