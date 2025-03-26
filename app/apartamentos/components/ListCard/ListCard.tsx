import React, { FC } from 'react';
import { AccommodationsListCard } from '@/app/shared';
import { getAccommodationsByCategory } from '@/app/shared/utils';

import { Accommodation, Category } from '../../interfaces';
import styles from './ListCard.module.css';

import { getCategories } from '../../services';
import Image from 'next/image';

export const ListCard: FC<{ accommodations: Accommodation[] }> = async ({
  accommodations,
}) => {
  const categories = await getCategories();

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Descubre nuestros alojamientos turísticos
      </h1>

      {accommodations.length === 0 ? (
        <div className='col-start-1 col-end-4 flex flex-col justify-center items-center mx-12 my-20'>
          <div className='border border-p600 px-14 py-8 flex flex-col justify-center items-center rounded-xl'>
            <figure className='relative h-60 w-60 md:h-80 md:w-80'>
              <Image
                src='https://multimedia.dygav.es/wp-content/uploads/2024/04/notfound_t5mgaw.svg'
                alt='No se encontraron alojamientos'
                layout='fill'
                className=''
              />
            </figure>

            <p className='text-p600 text-base md:text-lg lg:text-xl text-center lg:text-start'>
              ¡Upsss…! Parece que no hemos encontrado ningún alojamiento
              disponible para tu búsqueda.{' '}
            </p>
          </div>
        </div>
      ) : (
        categories.map((category: Category) => {
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
