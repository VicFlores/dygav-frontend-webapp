import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/db/database';
import axios from 'axios';
import AccomodationCalendar from '@/models/accomodationCalendar';
import UserAccomodationsEmailSchema from '@/models/userAccomodationsEmail';
import nodemailer from 'nodemailer';
import { ReservationAvaibook } from '@/types';
import User from '@/models/user';
import { useSendEmail } from '@/hooks/useSendEmail';
import statusReservationTemplate from '@/utils/emails/templates/statusReservationTemplate';
import newReservationTemplate from '@/utils/emails/templates/newReservationTemplate';

let intervalId: NodeJS.Timeout | null = null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (intervalId) {
      clearInterval(intervalId);
    }

    intervalId = setInterval(async () => {
      await connectDB();

      const dateOneAgo = new Date();
      const dateSixLater = new Date();

      dateOneAgo.setMonth(dateOneAgo.getMonth() - 1);
      dateSixLater.setMonth(dateSixLater.getMonth() + 6);

      const oneMonthAgo = dateOneAgo.toISOString().split('T')[0];
      const sixMonthsLater = dateSixLater.toISOString().split('T')[0];

      const accomodationCalendar =
        await AccomodationCalendar.find<ReservationAvaibook>();

      const response = await axios.get<ReservationAvaibook[]>(
        `https://api.avaibook.biz/api/owner/bookings/?createdAtStartDate=${oneMonthAgo}&createdAtEndDate=${sixMonthsLater}`,
        {
          headers: {
            'X-AUTH-TOKEN':
              '7fd52cc3b7e215ac8e5173cd1a0d176eabe0ced50fdf1dd346676fd36d051920',
          },
        }
      );

      if (accomodationCalendar.length === 0) {
        response.data.forEach(async (reservation) => {
          await AccomodationCalendar.create(reservation);
        });
      } else {
        response.data.forEach(async (reservation) => {
          const found = accomodationCalendar.find(
            (calendar) => calendar.id === reservation.id
          );

          if (found) {
            if (found.status !== reservation.status) {
              const userAccomodations = await UserAccomodationsEmailSchema.find(
                {
                  accomodationId: reservation.accommodationId,
                }
              ).populate({ path: 'userId', model: User });

              if (userAccomodations) {
                userAccomodations.map((userAccomodation) => {
                  console.log('Enviar email, status changed');

                  function getStatus(status: string): string {
                    switch (status) {
                      case 'PENDING_PAYMENT':
                        return 'Pendiente de pago';
                      case 'CONFIRMED':
                        return 'Confirmada';
                      case 'CANCELLED':
                        return 'Cancelada';
                      case 'PENDING_OWNER':
                        return 'Pendiente de confirmación';
                      default:
                        return 'Desconocido';
                    }
                  }

                  const reservationStatus = getStatus(reservation.status);
                  const foundStatus = getStatus(found.status);

                  const { transporter, mailOptionClient } = useSendEmail(
                    userAccomodation.userId.email,
                    `Cambio de estado en reserva: ${reservation.accommodationName}`,
                    statusReservationTemplate(
                      reservation.accommodationName,
                      foundStatus,
                      reservationStatus
                    )
                  );

                  transporter.sendMail(mailOptionClient, function (error) {
                    if (error) {
                      return res.status(400).json({ message: error.message });
                    } else {
                      return res
                        .status(200)
                        .json({ message: 'Correo enviado' });
                    }
                  });
                });
              }

              await AccomodationCalendar.findOneAndUpdate(
                { id: reservation.id },
                { status: reservation.status }
              );
            }
          }

          if (!found) {
            const userAccomodations = await UserAccomodationsEmailSchema.find({
              accomodationId: reservation.accommodationId,
            }).populate({ path: 'userId', model: User });

            if (userAccomodations) {
              userAccomodations.map((userAccomodation) => {
                console.log('Enviar email, new reservation');

                const { transporter, mailOptionClient } = useSendEmail(
                  userAccomodation.userId.email,
                  `Nueva reserva en ${reservation.accommodationName}`,
                  newReservationTemplate(
                    reservation.occupiedPeriod,
                    reservation.accommodationName
                  )
                );

                transporter.sendMail(mailOptionClient, function (error) {
                  if (error) {
                    return res.status(400).json({ message: error.message });
                  } else {
                    return res.status(200).json({ message: 'Correo enviado' });
                  }
                });
              });
            }

            await AccomodationCalendar.create(reservation);
          }
        });
      }

      return res.status(200).json({
        accomodationCalendar,
        bookings: response.data,
      });
    }, 5000);
  } catch (error) {
    if (error instanceof Error)
      return res.status(400).json({ message: error.message });
  }
}
