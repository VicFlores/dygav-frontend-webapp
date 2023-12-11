import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const axiosGet = async (url: string) => {
        return await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
          },
        });
      };

      const { location, people, checkin, checkout } = req.body;

      const findAllAccomodations = await axiosGet(
        'https://api.avaibook.com/api/owner/accommodations/'
      );

      const resAccomodationFullInfo = await Promise.all(
        findAllAccomodations.data.map(async (accomodation: any) => {
          const findOneAccomodation = await axiosGet(
            `https://api.avaibook.com/api/owner/accommodations/${accomodation.id}/`
          );
          return { accomodationFull: findOneAccomodation.data };
        })
      );

      const filterByLocationAndPeople = resAccomodationFullInfo.filter(
        ({
          accomodationFull: {
            location: { city },
            units: [{ additionalCapacity }],
          },
        }: any) => {
          return city === location && additionalCapacity >= people;
        }
      );

      const filterByDates = await Promise.all(
        filterByLocationAndPeople.map(async (accomodation: any) => {
          const findAvailabilityAccomodation = await axiosGet(
            `https://api.avaibook.com/api/owner/accommodations/${accomodation.accomodationFull.id}/availability/?startDate=${checkin}&endDate=${checkout}`
          );

          return {
            accomodationFull: accomodation.accomodationFull,
            availability: findAvailabilityAccomodation.data,
          };
        })
      );

      const availableAccommodations = filterByDates.filter(
        (accommodation: any) => accommodation.availability === 1
      );

      return res.status(200).json(availableAccommodations);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  }
}
