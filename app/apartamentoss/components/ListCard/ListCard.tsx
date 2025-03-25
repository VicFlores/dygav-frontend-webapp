import React from 'react';
import { AccommodationsListCard } from '@/app/shared';
import { getAccommodationsByCategory } from '@/app/shared/utils';

import { Category } from '../../interfaces';
import styles from './ListCard.module.css';

import { getAccommodations, getCategories } from '../../services';

export const ListCard = async () => {
  const accommodations = await getAccommodations();
  const categories = await getCategories();

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Descubre nuestros alojamientos turísticos
      </h1>

      {categories.map((category: Category) => {
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
      })}
    </section>
  );
};
