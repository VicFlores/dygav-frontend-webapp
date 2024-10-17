import useDictionary from '@/app/hooks/useDictionary';
import { Booking, Accommodation } from '@/app/types';
import { getOwnerAccommodations } from '@/app/utils';
import { avaibookExtraction } from '@/app/utils/axiosConfig/avaibookExtraction';
import { FC, useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { subMonths, format } from 'date-fns';

export const LineChart = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const dictionary = useDictionary('ownersAccount');

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const accommodations = await getOwnerAccommodations();

        const accommodationDetails = await fetchAccommodationDetails(
          accommodations
        );

        if (accommodationDetails.length > 0) {
          const bookings = await fetchBookings(accommodationDetails);

          setBookings(bookings);
        }
      } catch (error) {
        console.error('Error fetching accommodations:', error);
      }
    };

    fetchAccommodations();
  }, []);

  const fetchBookings = async (
    accommodations: Accommodation[]
  ): Promise<Booking[]> => {
    const dateRanges = calculateDateRanges();

    const bookings = await Promise.all(
      accommodations.map(async (item) => {
        const monthlyBookings = await Promise.all(
          dateRanges.map(async ({ startDate, endDate }) => {
            const { data } = await avaibookExtraction.get(
              `/bookings/${item.accomodationid}?startDate=${startDate}&endDate=${endDate}`
            );

            return data.map((booking: any) => ({
              ...booking,
              accommodation: item.name,
              images: item.images,
            }));
          })
        );

        return monthlyBookings.flat();
      })
    );

    return bookings.flat();
  };

  const fetchAccommodationDetails = async (
    accommodations: any[]
  ): Promise<Accommodation[]> => {
    const details = await Promise.all(
      accommodations.map(async (item) => {
        const { data } = await avaibookExtraction.get(
          `/accomodation/${item.aviabook_id}/`
        );
        return data;
      })
    );
    return details.flat();
  };

  const calculateEarnings = (bookings: Booking[]): number[] => {
    const earnings = [0, 0, 0, 0];
    const now = new Date();

    bookings.forEach((booking) => {
      const bookingDate = new Date(booking.indate);
      const monthDiff =
        now.getMonth() -
        bookingDate.getMonth() +
        (now.getFullYear() - bookingDate.getFullYear()) * 12;

      if (monthDiff > 0 && monthDiff <= 4) {
        earnings[4 - monthDiff] += booking.totalamount;
      }
    });

    return earnings;
  };

  const calculateDateRanges = () => {
    const currentDate = new Date();
    const dateRanges = [];

    for (let i = 4; i > 0; i--) {
      const startDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - i,
        1
      );
      const endDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - i + 1,
        0
      );

      dateRanges.push({
        startDate: startDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
        endDate: endDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
      });
    }

    return dateRanges;
  };

  const labels = Array.from({ length: 4 }, (_, i) =>
    format(subMonths(new Date(), 4 - i), 'MMMM')
  );
  const earningsData = calculateEarnings(bookings);

  const data = {
    labels,
    datasets: [
      {
        label: 'Earnings',
        data: earningsData,
        fill: false,
        backgroundColor: '#ff385c',
        borderColor: '#ff385c',
        pointBorderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};
