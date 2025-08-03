import React, { useState } from 'react';
import { Header } from "../../Home/components/Header";
import { isDevelopment } from "../../../utils/env";

interface EnhancedHeroProps {
  heroImage: string;
  heroTitle: string;
}

export const EnhancedHero: React.FC<EnhancedHeroProps> = ({ heroImage, heroTitle }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  
  // Fallback images in order of preference
  const fallbackImages = [
    '/images/hero.jpg',
    '/images/kurumbalakotta_hillock_08.jpg',
    '/images/5a8a9701-1-.jpg',
    '/aboutHero.jpg'
  ];
  
  const displayImage = imageError ? fallbackImages[0] : heroImage;
  
  const handleImageLoad = () => {
    setImageLoading(false);
  };
  
  const handleImageError = () => {
    console.error('Hero image failed to load:', heroImage);
    setImageError(true);
    setImageLoading(false);
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{ 
          backgroundImage: `url('${displayImage}')`,
          opacity: imageLoading ? 0 : 1
        }}
      />
      
      {/* Loading State */}
      {imageLoading && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-gray-500">Loading hero image...</div>
        </div>
      )}
      
      {/* Error State */}
      {imageError && (
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <div className="text-sm">Hero image not available</div>
            <div className="text-xs mt-1">Using fallback image</div>
          </div>
        </div>
      )}
      
      {/* Hidden image for error detection */}
      <img
        src={heroImage}
        alt=""
        className="hidden"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className="text-[#ffff] font-staylista sm:text-[72px] h-[100vh] flex flex-col items-center justify-end mobile:text-5xl">
          <h1 className="text-center mb-[114px]">{heroTitle}</h1>
        </div>
      </div>
      
      {/* Debug info in development */}
      {isDevelopment && (
        <div className="absolute top-20 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
          <div>Hero Image: {heroImage}</div>
          <div>Status: {imageLoading ? 'Loading' : imageError ? 'Error' : 'Loaded'}</div>
          {imageError && <div>Using fallback: {displayImage}</div>}
        </div>
      )}
    </div>
  );
}; 