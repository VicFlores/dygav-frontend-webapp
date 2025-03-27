import { useRef, useEffect } from 'react';

export const useAccommodationsListCard = (styles: Record<string, string>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  let startX: number;
  let scrollLeft: number;

  const scrollLeftHandler = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRightHandler = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach((card) => observer.observe(card));

    // Add wheel event handler for touchpad scrolling
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current) {
        // Prevent the default vertical scroll when we're handling horizontal scroll
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          e.preventDefault();
        }

        // Use deltaX for horizontal touchpad gestures
        // Use deltaY with shift key as an alternative horizontal scroll
        const scrollAmount = e.deltaX || (e.shiftKey ? e.deltaY : 0);
        containerRef.current.scrollLeft += scrollAmount;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [styles]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current) {
      startX = e.touches[0].pageX - containerRef.current.offsetLeft;
      scrollLeft = containerRef.current.scrollLeft;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (containerRef.current) {
      const x = e.touches[0].pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 1; // scroll-fast
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Add mouse drag support for better touchpad interaction
  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      startX = e.pageX - containerRef.current.offsetLeft;
      scrollLeft = containerRef.current.scrollLeft;
      containerRef.current.style.cursor = 'grabbing';

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll-fast, slightly faster than touch
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return {
    containerRef,
    scrollLeftHandler,
    scrollRightHandler,
    handleTouchStart,
    handleTouchMove,
    handleMouseDown,
  };
};
