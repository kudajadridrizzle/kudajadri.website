import { useEffect, useState, useCallback, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

export interface ImageCarouselProps {
  images: string[];
  autoScrollInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoScrollInterval = 5000,
  showDots = true,
  showArrows = true,
  rounded = 'none',
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // Reset timer when currentIndex or isPaused changes
  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const startTimer = () => {
      timeoutRef.current = setTimeout(() => {
        goToNext();
      }, autoScrollInterval);
    };

    startTimer();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isPaused, images.length, autoScrollInterval, goToNext]);

  const handlePause = useCallback(() => {
    setIsPaused(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const handleResume = useCallback(() => {
    setIsPaused(false);
    // Clear any existing timeout to prevent multiple timers
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Start a new timer immediately when resuming
    if (images.length > 1) {
      timeoutRef.current = setTimeout(goToNext, autoScrollInterval);
    }
  }, [images.length, autoScrollInterval, goToNext]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      handlePause();
      goToNext();
      // Resume auto-scroll after swipe
      const timer = setTimeout(handleResume, autoScrollInterval);
      return () => clearTimeout(timer);
    },
    onSwipedRight: () => {
      handlePause();
      goToPrevious();
      // Resume auto-scroll after swipe
      const timer = setTimeout(handleResume, autoScrollInterval);
      return () => clearTimeout(timer);
    },
    onTouchStartOrOnMouseDown: handlePause,
    onTouchEndOrOnMouseUp: () => {
      // Shorter delay before resuming on touch devices
      const timer = setTimeout(handleResume, 1000);
      return () => clearTimeout(timer);
    },
    trackMouse: true,
    preventScrollOnSwipe: true,
    trackTouch: true,
    delta: 10,
    swipeDuration: 300,
  });

  if (images.length === 0) return null;

  return (
    <div className={`relative w-full overflow-hidden ${rounded !== 'none' ? `rounded-${rounded}` : ''} ${className}`}>
      <div
        {...handlers}
        className="relative w-full h-full overflow-hidden"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out h-full w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0"
              style={{
                opacity: currentIndex === index ? 1 : 0.7,
                transition: 'opacity 0.3s ease-in-out',
              }}
            >
              <img
                src={image}
                alt={`Room view ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && showArrows && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePause();
                goToPrevious();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all focus:outline-none z-10"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePause();
                goToNext();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all focus:outline-none z-10"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {showDots && images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                handlePause();
                goToIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
