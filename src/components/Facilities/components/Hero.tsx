import { Header } from '../../Home/components/Header';

const Hero = () => {
  return (
    <div className="relative h-screen bg-[url('/images/pool34.jpg')] bg-no-repeat bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className="text-[#ffff] h-[100vh] px-1 flex flex-col items-center justify-end gap-2">
          <h2 className="text-center font-staylista  mobile:text-[48px] sm:text-[72px]">
            Facilities & Amenities at Kudajadri Drizzle Homestay
          </h2>
          <div className="text-[#CACACA] text-xl mb-[120px] font-albertSans flex flex-col text-center">
            <span>
              Welcome to our 100-year-old Jain Tharavadu, where tradition meets
              modern comfort. Here’s
            </span>
            <span>
              everything waiting for you at Kudajadri Drizzle Homestay:
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
