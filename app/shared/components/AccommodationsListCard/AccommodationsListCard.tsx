'use client';

import React, { FC, useState } from 'react';
import Link from 'next/link';
import { PiBedLight, PiToiletLight, PiPencilRuler } from 'react-icons/pi';
import { GoPeople } from 'react-icons/go';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import styles from './AccommodationsListCard.module.css';
import { useAccommodationsListCard } from '../../hooks';
import { AccommodationsList } from '../../interfaces';
import { ImagesCarousel } from '@/app/apartamentos/components';

export const AccommodationsListCard: FC<{
  accommodations: AccommodationsList[];
}> = ({ accommodations }) => {
  const [expandedIds, setExpandedIds] = useState<Set<string | number>>(
    new Set()
  );

  const {
    containerRef,
    scrollLeftHandler,
    scrollRightHandler,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
  } = useAccommodationsListCard(styles);

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  const toggleDescription = (id: string | number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newExpandedIds = new Set(expandedIds);
    if (expandedIds.has(id)) {
      newExpandedIds.delete(id);
    } else {
      newExpandedIds.add(id);
    }
    setExpandedIds(newExpandedIds);
  };

  // Check if accommodation is from fake data (has numeric ID)
  const isFakeAccommodation = (id: string | number) => {
    return typeof id === 'string';
  };

  return (
    <div className={styles.wrapper}>
      <CiCircleChevLeft
        className={styles.leftArrow}
        onClick={scrollLeftHandler}
      />

      <div
        className={styles.container}
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        style={{ cursor: 'grab' }}
      >
        {accommodations.map((accommodation) => {
          const isExpanded = expandedIds.has(accommodation.id);
          const description =
            accommodation.description || accommodation.introductions?.es || '';
          const needsExpansion = description.length > 160;
          const isFake = isFakeAccommodation(accommodation.id);

          return (
            <div
              key={accommodation.id}
              className={`${styles.card} ${isExpanded ? styles.expanded : ''} ${
                styles.visible
              } ${isFake ? styles.unavailable : ''}`}
            >
              <Link
                href={`/apartamentos/detalles/${accommodation.slug}`}
                className={styles.cardLink}
                onClick={(e) => isFake && e.preventDefault()}
              >
                <figure className={styles.imageContainer}>
                  <AiOutlineHeart className={styles.heartIcon} />

                  <ImagesCarousel
                    images={accommodation.images}
                    alt={accommodation.alt}
                  />

                  {isFake && (
                    <div className={styles.unavailableOverlay}>
                      <span className={styles.unavailableText}>
                        No Disponible temporalmente
                      </span>
                    </div>
                  )}
                </figure>

                <h3 className={styles.cardTitle}>{accommodation.title}</h3>

                <div className={styles.cardDescriptionContainer}>
                  <p className={styles.cardDescription}>
                    {isExpanded
                      ? description
                      : truncateDescription(description, 145)}
                  </p>

                  {needsExpansion && (
                    <button
                      onClick={(e) => toggleDescription(accommodation.id, e)}
                      className={styles.readMoreButton}
                    >
                      {isExpanded ? (
                        <>
                          Ver menos{' '}
                          <FiChevronUp className={styles.expandIcon} />
                        </>
                      ) : (
                        <>
                          Ver más{' '}
                          <FiChevronDown className={styles.expandIcon} />
                        </>
                      )}
                    </button>
                  )}
                </div>

                <div className={styles.card_amenities}>
                  <div className={styles.card_amenities_item}>
                    <PiBedLight className={styles.card_amenities_icon} />
                    {accommodation.bedrooms}
                  </div>

                  <div className={styles.card_amenities_item}>
                    <PiToiletLight className={styles.card_amenities_icon} />
                    {accommodation.bathrooms}
                  </div>

                  <div className={styles.card_amenities_item}>
                    <PiPencilRuler className={styles.card_amenities_icon} />
                    {accommodation.size}
                  </div>

                  <div className={styles.card_amenities_item}>
                    <GoPeople className={styles.card_amenities_icon} />
                    {accommodation.maxGuests}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <CiCircleChevRight
        className={styles.rightArrow}
        onClick={scrollRightHandler}
      />
    </div>
  );
};
