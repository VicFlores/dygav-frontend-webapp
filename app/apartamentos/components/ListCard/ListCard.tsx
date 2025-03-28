import React, { FC } from 'react';
import { AccommodationsListCard } from '@/app/shared';
import { getAccommodationsByCategory } from '@/app/shared/utils';

import { Accommodation, Category } from '../../interfaces';
import styles from './ListCard.module.css';

import { getCategories } from '../../services';
import Image from 'next/image';

// Define order of priority for categories
const CATEGORY_ORDER = [
  'Viviendas turísticas en Costa Blanca',
  'Viviendas turísticas en Pirineos',
  'Viviendas turísticas en Madrid',
];

export const ListCard: FC<{ accommodations: Accommodation[] }> = async ({
  accommodations,
}) => {
  const categories = await getCategories();

  // Sort categories based on priority order
  const sortedCategories = [...categories].sort((a, b) => {
    const indexA = CATEGORY_ORDER.indexOf(a.category_name);
    const indexB = CATEGORY_ORDER.indexOf(b.category_name);

    // If both categories are in our priority list
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    // If only a is in our priority list
    if (indexA !== -1) {
      return -1;
    }

    // If only b is in our priority list
    if (indexB !== -1) {
      return 1;
    }

    // If neither are in our priority list, maintain original order
    return 0;
  });

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Descubre nuestros alojamientos turísticos
      </h1>

      {accommodations.length === 0 ? (
        <div className='col-start-1 col-end-4 flex flex-col justify-center items-center mx-12 my-20'>
          <div className='border border-p600 px-14 py-8 flex flex-col justify-center items-center rounded-xl'>
            <figure className='relative h-60 w-60 md:h-[18rem] md:w-[18rem]'>
              <Image
                src='https://multimedia.dygav.es/wp-content/uploads/2024/04/notfound_t5mgaw.svg'
                alt='No se encontraron alojamientos'
                layout='fill'
                className=''
              />
            </figure>

            <p className='text-p600 text-base md:text-lg lg:text-xl text-center lg:text-start'>
              ¡Upsss! Parece que no hemos encontrado ningún alojamiento
              disponible para tu búsqueda.
            </p>

            <p className='text-p600 text-base md:text-lg lg:text-xl text-center lg:text-start mt-4'>
              ¡Actualiza tu busqueda para encontrar tu alojamiento!
            </p>
          </div>
        </div>
      ) : (
        sortedCategories.map((category: Category) => {
          const categoryAccommodations = getAccommodationsByCategory(
            accommodations,
            category.category_id
          );

          return categoryAccommodations.length > 0 ? (
            <div key={category.category_id}>
              <h2 className={styles.subtitle}>{category.category_name}</h2>
              <AccommodationsListCard accommodations={categoryAccommodations} />
            </div>
          ) : null;
        })
      )}
    </section>
  );
};
