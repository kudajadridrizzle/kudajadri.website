import { roomData } from '../constants';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full">
      <div
        {...handlers}
        className="relative w-full h-full overflow-hidden rounded-lg"
      >
        <div
          className="flex transition-transform duration-300 ease-in-out h-full w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <img
                src={image}
                alt={`Room view ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all focus:outline-none z-10"
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
                goToNext();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all focus:outline-none z-10"
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

      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
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

const Hero = () => {
  const { id: roomId } = useParams();

  if (!roomId || !roomData[roomId]) {
    return <div>No room data available</div>;
  }

  const room = roomData[roomId];
  const roomImages = [
    room.imageOne,
    room.imageTwo,
    room.imageThree,
    room.imageFour,
    room.imageFive,
  ].filter(Boolean) as string[];

  // Calculate padding based on viewport width
  const desktopPadding = window.innerWidth > 2000 ? '18vw' : '12vw';

  return (
    <div className="w-full">
      {/* Desktop Layout */}
      <div
        className="hidden md:block w-full h-[80vh] py-12"
        style={{
          paddingLeft: desktopPadding,
          paddingRight: desktopPadding,
        }}
      >
        <div className="grid grid-cols-4 grid-rows-2 gap-2 w-full h-full">
          {/* Large image - spans 2 columns and 2 rows */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-xl w-full h-full">
            <img
              src={room.imageOne}
              alt="Room overview"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 2x2 grid of smaller images */}
          {[room.imageTwo, room.imageThree, room.imageFour, room.imageFive].map(
            (img, index) => (
              <div key={index} className="overflow-hidden rounded-xl w-full h-full">
                <img
                  src={img}
                  alt={`Room view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Mobile Layout with Carousel */}
      <div className="md:hidden px-4 pt-8 pb-8 mt-4">
        <div className="relative w-full overflow-hidden rounded-xl aspect-video">
          <ImageCarousel images={roomImages} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
