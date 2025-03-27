'use client';

import React, { FC, useState } from 'react';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from '@vis.gl/react-google-maps';
import styles from './AmenitiesUbicacion.module.css';

interface Amenities {
  CATEGORY_EN: string;
  CATEGORY_ES: string;
  DYGAV_ENGLISH: string;
  DYGAV_SPANISH: string;
}

interface AmenitiesUbicacionProps {
  amenities: Amenities[];
  location: {
    latitude: number;
    longitude: number;
  };
}

export const AmenitiesUbicacion: FC<AmenitiesUbicacionProps> = ({
  amenities,
  location,
}) => {
  // Add capitalize utility function
  const capitalize = (str: string) => {
    return str
      .replace(/_/g, ' ') // Replace underscores with spaces
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  // Get unique categories
  const uniqueCategories = Array.from(
    new Set(amenities.map((item) => item.CATEGORY_ES))
  );

  // Define the custom order
  const customOrder = [
    'UBICACION',
    'GENERAL',
    'ALOJAMIENTO',
    'ACCESIBILIDAD',
    'EXTERIOR',
    'DORMITORIO',
    'COCINA',
    'VENTILACION',
    'ENTRETENIMIENTO',
    'INTERNET',
    'LIMPIEZA',
    'BAÑO',
    'DETALLES_PRINCIPALES',
  ];

  // Sort the uniqueCategories based on the custom order
  const sortedCategories = [...uniqueCategories].sort((a, b) => {
    const indexA = customOrder.indexOf(a);
    const indexB = customOrder.indexOf(b);

    // If both items are in the custom order, sort by their position
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    // If only one item is in the custom order, prioritize it
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    // If neither item is in the custom order, maintain their original order
    return 0;
  });

  const [selectedCategory, setSelectedCategory] = useState<string>(
    sortedCategories.length > 0 ? sortedCategories[0] : ''
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Comodidades</h1>

      <ul className={styles.amenties}>
        {sortedCategories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={
              category === selectedCategory ? styles.selectedCategory : ''
            }
          >
            {capitalize(category)}
          </li>
        ))}
      </ul>

      {selectedCategory && (
        <ul
          key={selectedCategory} // Add key to force re-render
          className={`${styles.amenities_service} ${styles.fadeIn}`}
        >
          {amenities
            .filter((item) => item.CATEGORY_ES === selectedCategory)
            .map((item, index) => (
              <li key={index} className={styles.amenity_item}>
                <MdOutlineCheckCircleOutline className={styles.icon} />{' '}
                {item.DYGAV_SPANISH}
              </li>
            ))}
        </ul>
      )}

      <h1 className={styles.title}>Ubicacion del alojamiento</h1>

      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
        <Map
          className={styles.map}
          defaultCenter={{
            lat: location.latitude,
            lng: location.longitude,
          }}
          defaultZoom={17}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID} // Add map ID here
        >
          <AdvancedMarker
            position={{
              lat: location.latitude,
              lng: location.longitude,
            }}
          >
            <Pin background={'#F4511E'} glyphColor={'#fff'} scale={1.4} />
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </section>
  );
};
