import { Header } from './Header';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="/images/Hero.webp"
        alt="Kudajadri Drizzle Homestay in Wayanad"
        width={1920}
        height={1080}
        loading="eager"
        fetchPriority="high"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20">
        <Header />

        <div className="flex flex-col h-full justify-end gap-5">
          <div className="flex flex-col items-center gap-5 sm:pt-[30%] mobile:p-4">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5">
                <div className="border border-white flex-1" />
                <h1 className="sm:text-3xl uppercase text-white font-ivy mobile:text-sm text-center">
                  Kudajadri Drizzle Homestay in Wayanad
                </h1>
                <div className="border border-white flex-1" />
              </div>

              <span className="sm:text-7xl text-white font-staylista mobile:text-5xl text-center">
                Experience True Serenity
              </span>
            </div>
          </div>

          <div className="flex justify-center mb-[120px]">
            <Button onClick={() => navigate('/contact')}>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
