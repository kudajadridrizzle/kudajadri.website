import { Header } from './Header';
import mobileimg from '../../../assets/mobileheroimg.jpg';
import droneimg from '../../../assets/locationImage.webp';
import { useNavigate } from 'react-router-dom';

const VideoBackground = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Desktop Background */}
      <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0">
        <img
          src={droneimg}
          alt="Kudajadri Drizzle Homestay"
          width={1920}       // Add actual image width
          height={1080}      // Add actual image height
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Background */}
      <img
        src={mobileimg}
        alt="Kudajadri Drizzle Homestay Mobile"
        width={768}          // Add actual mobile image width
        height={1024}        // Add actual mobile image height
        loading="eager"
        fetchPriority="high"
        className="md:hidden absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover z-0"
      />

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
                <h2 className="sm:text-3xl uppercase text-[#FFF] font-ivy mobile:text-sm text-center">
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
              onClick={() => navigate('/contact')}
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
