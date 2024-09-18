import React, { useEffect, useState } from 'react';
import { SearcherRealCards } from '@/components';
import { useSession } from 'next-auth/react';
import { axiosConfig } from '../../utils/config/axiosConfig';
import axios from 'axios';
import useDictionary from '@/app/hooks/useDictionary';

export const TouristAccomodationsFav = () => {
  const [favsAccomodations, setFavsAccomodations] = useState([]);
  const [removedAccomodation, setRemovedAccomodation] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    const findFavAccomodationsById = async () => {
      if (session && session.user) {
        const res = await axiosConfig.get(
          `/api/favorites/findFavAccomodationsByUserId/?userId=${
            session.user._id || session.user.id
          }`
        );

        res.data.map(async (item: any) => {
          const resAccomodation = await axios.get(
            `https://api.avaibook.com/api/owner/accommodations/${item.accomodationId}/`,
            {
              headers: {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
              },
            }
          );

          if (resAccomodation.data.id === Number(item.accomodationId)) {
            setFavsAccomodations((prev: any) => {
              const favExists = prev.some(
                (prevFav: any) => prevFav.id === resAccomodation.data.id
              );

              if (!favExists) {
                return [...prev, resAccomodation.data];
              }

              return prev;
            });
          }
        });
      }
    };

    findFavAccomodationsById();
  }, [session]);

  useEffect(() => {
    if (removedAccomodation !== 0) {
      setFavsAccomodations((prev: any) =>
        prev.filter((item: any) => item.id !== removedAccomodation)
      );
    }
  }, [removedAccomodation]);
  const dictionary = useDictionary('favorites');

  return (
    <>
      {favsAccomodations.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32 mb-56 gap-y-20'>
          {favsAccomodations.map((item, index) => (
            <SearcherRealCards
              key={index}
              item={item}
              setRemovedAccomodation={setRemovedAccomodation}
            />
          ))}
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed h-[266px] w-[717px]'>
            <p className=' text-black900/[.7] lg:text-3xl'>
              {dictionary.favorites?.empty}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
