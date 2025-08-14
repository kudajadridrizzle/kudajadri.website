import React, { useState } from 'react';

interface AttractionCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export const EnhancedAttractionCard: React.FC<AttractionCardProps> = ({
  title,
  description,
  image,
  index
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const formattedIndex = index < 10 ? `0${index + 1}` : `${index + 1}`;
  
  const fallbackImage = '/images/wayanad/placeholder.svg';
  
  const handleImageLoad = () => {
    setImageLoading(false);
  };
  
  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };
  
  const displayImage = imageError ? fallbackImage : image;

  return (
    <div className="flex flex-col items-center self-stretch bg-white sm:flex-row mb-16">
      <div className="w-full sm:w-1/2 flex items-center p-0 pr-custom-padding pb-[73px] mobile:pb-[24px] flex-[1_0_0] self-stretch mobile:p-[16px]">
        <div className="relative w-full">
          {imageLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-[16px] flex items-center justify-center">
              <div className="text-gray-500">Loading...</div>
            </div>
          )}
          <img
            src={displayImage}
            alt={title}
            className={`object-cover w-full h-auto rounded-[16px] aspect-[16/9] transition-opacity duration-300 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          {imageError && (
            <div className="absolute inset-0 bg-gray-100 rounded-[16px] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-sm">Image not available</div>
                <div className="text-xs mt-1">Using placeholder</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <div className="flex items-start self-stretch gap-8 flex-row">
          <div className="flex justify-start h-full align-top text-start text-[#1D1D1D] text-[32px] font-normal leading-normal font-ivy">
            {formattedIndex}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-normal leading-normal text-[#1D1D1D] font-ivy">
              {title}
            </h2>
            <div 
              className="text-[#6E6E6E] text-base font-medium leading-6 font-albertSans"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 