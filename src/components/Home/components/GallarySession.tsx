import ImageCarousel from '../../RoomDetails/components/ImageCarousel';
import img1 from '/src/assets/HomeAutoScroll/1.jpg';
import img2 from '/src/assets/HomeAutoScroll/2.jpg';
import img3 from '/src/assets/HomeAutoScroll/3.jpg';
import img4 from '/src/assets/HomeAutoScroll/4.jpg';

const images = [img1, img2, img3, img4];

const GallarySession = () => {
  return (
    <>
      {/* Desktop / Tablet Layout */}
      <div className="flex sm:flex mobile:hidden">
        <div className="flex-1">
          <img src={img1} className="h-full w-full object-cover" alt="Gallery image 1" />
        </div>
        <div className="flex-1">
          <img src={img2} className="h-full w-full object-cover" alt="Gallery image 2" />
        </div>
        <div className="flex-1">
          <img src={img3} className="h-full w-full object-cover" alt="Gallery image 3" />
        </div>
        <div className="flex-1">
          <img src={img4} className="h-full w-full object-cover" alt="Gallery image 4" />
        </div>
      </div>

      {/* Mobile View - Swipeable Auto-Scrolling Carousel */}
      <div className="sm:hidden w-full h-64">
        <ImageCarousel 
          images={images} 
          autoScrollInterval={5000} 
          showDots={false} 
          showArrows={false}
          rounded="none"
          className="" // ensure no rounded classes
        />
      </div>
    </>
  );
};

export default GallarySession;
