import { useRef, useEffect, useState } from 'react';

export const useAccommodationsListCard = (styles: Record<string, string>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(335); // Default card width from CSS
  let startX: number;
  let scrollLeft: number;
  let startTime: number;
  let lastX: number;
  let velocity: number = 0;
  let animationFrameId: number;

  useEffect(() => {
    // Calculate card width including gap when component mounts
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(`.${styles.card}`);
      if (cards.length > 0) {
        const firstCard = cards[0] as HTMLElement;
        const cardStyle = window.getComputedStyle(firstCard);
        const cardFullWidth =
          firstCard.offsetWidth +
          parseInt(cardStyle.marginLeft || '0') +
          parseInt(cardStyle.marginRight || '0') +
          14; // Adding the gap from CSS

        setCardWidth(cardFullWidth);
      }
    }
  }, [styles]);

  const scrollLeftHandler = () => {
    if (containerRef.current) {
      // Scroll by 4 cards at a time
      containerRef.current.scrollBy({
        left: -cardWidth * 4,
        behavior: 'smooth',
      });
    }
  };

  const scrollRightHandler = () => {
    if (containerRef.current) {
      // Scroll by 4 cards at a time
      containerRef.current.scrollBy({
        left: cardWidth * 4,
        behavior: 'smooth',
      });
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
      // Cancel any ongoing momentum scrolling
      cancelAnimationFrame(animationFrameId);

      startX = e.touches[0].pageX - containerRef.current.offsetLeft;
      scrollLeft = containerRef.current.scrollLeft;
      startTime = Date.now();
      lastX = startX;
      velocity = 0;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (containerRef.current) {
      const x = e.touches[0].pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;

      // Calculate velocity (pixels per millisecond)
      const now = Date.now();
      const elapsed = now - startTime;
      if (elapsed > 0) {
        velocity = (lastX - x) / elapsed;
        startTime = now;
        lastX = x;
      }
    }
  };

  const handleTouchEnd = () => {
    if (containerRef.current && Math.abs(velocity) > 0.1) {
      // Start momentum scrolling
      const momentumScroll = () => {
        if (Math.abs(velocity) < 0.01 || !containerRef.current) {
          return;
        }

        containerRef.current.scrollLeft += velocity * 10;
        velocity *= 0.95; // Deceleration factor

        animationFrameId = requestAnimationFrame(momentumScroll);
      };

      momentumScroll();
    }
  };

  // Add mouse drag support for better touchpad interaction
  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      // Cancel any ongoing momentum scrolling
      cancelAnimationFrame(animationFrameId);

      startX = e.pageX - containerRef.current.offsetLeft;
      scrollLeft = containerRef.current.scrollLeft;
      startTime = Date.now();
      lastX = startX;
      velocity = 0;
      containerRef.current.style.cursor = 'grabbing';

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      containerRef.current.scrollLeft = scrollLeft - walk;

      // Calculate velocity (pixels per millisecond)
      const now = Date.now();
      const elapsed = now - startTime;
      if (elapsed > 0) {
        velocity = (lastX - x) / elapsed;
        startTime = now;
        lastX = x;
      }
    }
  };

  const handleMouseUp = () => {
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';

      if (Math.abs(velocity) > 0.1) {
        // Start momentum scrolling
        const momentumScroll = () => {
          if (Math.abs(velocity) < 0.01 || !containerRef.current) {
            return;
          }

          containerRef.current.scrollLeft += velocity * 10;
          velocity *= 0.95; // Deceleration factor

          animationFrameId = requestAnimationFrame(momentumScroll);
        };

        momentumScroll();
      }
    }

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // Clean up any pending animations when component unmounts
  useEffect(() => {
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    containerRef,
    scrollLeftHandler,
    scrollRightHandler,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd, // Added touch end handler
    handleMouseDown,
  };
};
