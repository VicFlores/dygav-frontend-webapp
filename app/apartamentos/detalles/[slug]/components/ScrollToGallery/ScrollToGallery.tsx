'use client';

import { useEffect } from 'react';

export const ScrollToGallery = () => {
  useEffect(() => {
    // Small delay to ensure the DOM is fully loaded
    const timer = setTimeout(() => {
      const galleryElement = document.getElementById('photo-gallery');

      if (galleryElement) {
        // Calculate position to scroll to
        const galleryRect = galleryElement.getBoundingClientRect();
        const scrollPosition = window.scrollY + galleryRect.top - 120; // 120px offset to show part of the Hero

        // Scroll to position
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // This component doesn't render anything
  return null;
};
