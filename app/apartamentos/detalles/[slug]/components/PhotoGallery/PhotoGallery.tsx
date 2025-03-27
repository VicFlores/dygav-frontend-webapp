'use client';

import React, { FC, useState } from 'react';
import Image from 'next/image';
import {
  FaImages,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaExpand,
} from 'react-icons/fa';

import styles from './PhotoGallery.module.css';

interface PhotoGalleryProps {
  title: string;
  subtitle: string;
  images: { url: string; orientation: 'portrait' | 'landscape' | 'square' }[];
  introductions: string;
}

interface ModalProps {
  images: { url: string; orientation: 'portrait' | 'landscape' | 'square' }[];
  onClose: () => void;
}

interface SlideshowProps {
  images: { url: string; orientation: 'portrait' | 'landscape' | 'square' }[];
  startIndex: number;
  onClose: () => void;
}

export const PhotoGallery: FC<PhotoGalleryProps> = ({
  title,
  subtitle,
  images,
  introductions,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Get the first image regardless of orientation
  const firstImage = images[0];
  const isFirstImageVertical = firstImage?.orientation === 'portrait';

  // For remaining images, we'll still prefer landscape/square for smaller thumbnails
  const remainingImages = images.slice(1);
  const preferredRemainingImages = [
    ...remainingImages.filter(
      (img) => img.orientation === 'landscape' || img.orientation === 'square'
    ),
    ...remainingImages.filter((img) => img.orientation === 'portrait'),
  ];

  // Display more images if the first one is vertical (6 total instead of 5)
  const maxSmallImages = isFirstImageVertical ? 4 : 4;
  const displayedSmallImages = preferredRemainingImages.slice(
    0,
    maxSmallImages
  );
  const allDisplayedImages = [firstImage, ...displayedSmallImages];

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.subtitle}>{subtitle}</p>

      <div className={styles.galleryContainer}>
        <div
          className={`${styles.gallery} ${
            isFirstImageVertical ? styles.verticalFirstImage : ''
          }`}
        >
          {allDisplayedImages.map((image, index) => (
            <figure
              key={index}
              className={`${styles.imageContainer} ${
                index === 0 ? styles.firstImage : ''
              } ${
                image.orientation === 'portrait' ? styles.portraitImage : ''
              }`}
              onClick={openModal}
            >
              <Image
                src={image.url}
                alt={`Image ${index + 1}`}
                fill
                className={styles.image}
                priority={index === 0}
              />
            </figure>
          ))}
        </div>
        <button className={styles.showAllButton} onClick={openModal}>
          <FaImages /> Mostrar todas las fotos
        </button>
        <button className={styles.counterButton} onClick={openModal}>
          <FaExpand className={styles.expandIcon} />
          {images.length} fotos
        </button>
      </div>

      <h1 className={styles.title}>Detalles de tu futuro alojamiento</h1>

      <p className={styles.paragraph}>{introductions}</p>

      {isModalOpen && <Modal images={images} onClose={closeModal} />}
    </section>
  );
};

const Modal: FC<ModalProps> = ({ images, onClose }) => {
  const [slideshowIndex, setSlideshowIndex] = useState<number | null>(null);

  const openSlideshow = (index: number) => {
    setSlideshowIndex(index);
  };

  const closeSlideshow = () => {
    setSlideshowIndex(null);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>

        <div className={styles.modalGallery}>
          {images.map((image, index) => (
            <figure
              key={index}
              className={`${styles.modalImageContainer} ${
                image.orientation === 'portrait'
                  ? styles.portrait
                  : styles.landscape
              }`}
              onClick={() => openSlideshow(index)}
            >
              <Image
                src={image.url}
                alt={`Image ${index + 1}`}
                layout='fill'
                objectFit='cover'
                className={styles.modalImage}
              />
            </figure>
          ))}
        </div>
      </div>

      {slideshowIndex !== null && (
        <Slideshow
          images={images}
          startIndex={slideshowIndex}
          onClose={closeSlideshow}
        />
      )}
    </div>
  );
};

const Slideshow: FC<SlideshowProps> = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.slideshowOverlay} onClick={onClose}>
      <div
        className={styles.slideshowContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.slideshowClose} onClick={onClose}>
          <FaTimes />
        </button>

        <button className={styles.slideshowPrev} onClick={goToPrevious}>
          <FaArrowLeft />
        </button>

        <div className={styles.slideshowImageContainer}>
          <Image
            src={images[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className={styles.slideshowImage}
            sizes='100vw'
            priority
          />
        </div>

        <button className={styles.slideshowNext} onClick={goToNext}>
          <FaArrowRight />
        </button>

        <div className={styles.slideshowCounter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default Modal;
