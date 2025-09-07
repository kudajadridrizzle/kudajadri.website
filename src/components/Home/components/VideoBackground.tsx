import { useState } from 'react';
import video from '../../../assets/videoBackGround.mp4';
import mobileVideo from '../../../assets/0907.mp4';
import { Header } from './Header';
import { useNavigate } from 'react-router-dom';
import Preloader from './Preloader';

const VideoBackground = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Desktop Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mobile Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="md:hidden absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover z-0"
      >
        <source src={mobileVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Shade Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="absolute top-0 left-0 right-0 z-20 h-[100%]">
        <Header />
        <div className="flex flex-col gap-5 h-[100%] justify-end">
          <div className="flex flex-col gap-5 items-center sm:pt-[30%] mobile:p-4 sm:p-0">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5">
                <div className="border border-[#FFF] flex-1" />
                <h2 className="sm:text-3xl uppercase text-[#FFF] font-ivy mobile:text-sm">
                  Kudajadri Drizzle Homestay in Wayanad
                </h2>
                <div className="border border-[#FFF] flex-1" />
              </div>
              <span className="sm:text-7xl text-[#FFF] font-staylista mobile:text-5xl sm:w-full text-center m-auto">
                Experience True Serenity
              </span>
            </div>
          </div>
          <div className="flex justify-center mb-[120px]">
            <button
              className="px-6 py-3 rounded-full border text-[#FFF] hover:bg-white hover:text-amber-700 transition-colors duration-300"
              onClick={() => {
                navigate('/contact');
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
