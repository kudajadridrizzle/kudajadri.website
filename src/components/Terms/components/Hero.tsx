import React from 'react';
import drone1 from '../../../assets/drone1.jpg';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={drone1}
        alt="Kudajadri Drizzle Homestay"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          // Fallback to a solid background if image fails
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="font-ivy text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Terms & Conditions
        </h1>
        <p className="text-lg md:text-xl font-albertSans max-w-3xl mx-auto text-secondary">
          Please read our terms and conditions carefully before making a reservation
        </p>
      </div>
    </div>
  );
};

export default Hero;
