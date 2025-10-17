import locationImage from '../../../assets/locationImage.webp';

const LocationImage = () => {
  return (
    <div className="sm:px-[12%] sm:py-24 flex flex-col sm:flex-row mobile:px-4 mobile:py-14 large:px-[18%]">
      <div className="sm:w-1/2">
        <img src={locationImage} alt="" className="object-cover size-full" />
      </div>
      <div className="sm:w-1/2 bg-primary sm:px-24 flex sm:items-center mobile:px-4 mobile:py-12">
        <div className="flex flex-col gap-6">
          <h2 className="text-[#fff] text-base font-albertSans">
            WAYANAD, KERALA
          </h2>
          <div>
            <span className="text-[#fff] font-ivy font-normal sm:text-[44px] mobile:text-[32px]">
              Nature, Comfort, and Serenity Await
            </span>
            <p className="text-secondary font-albertSans sm:text-xl opacity-80">
              Wayanad, Kerala, is a serene paradise nestled in the Western
              Ghats, renowned for its lush green landscapes, misty hills, and
              rich biodiversity. This enchanting destination offers a perfect
              blend of nature, adventure, and culture, making it ideal for
              travelers seeking tranquility and exploration. From sprawling tea
              and spice plantations to pristine waterfalls and wildlife
              sanctuaries, Wayanad captivates every visitor. Its charming
              villages, historical sites, and vibrant local traditions add depth
              to the experience. Whether you are trekking through dense forests,
              visiting ancient temples, or relaxing amidst the scenic beauty,
              Wayanad promises an unforgettable journey into the heart of
              Kerala’s natural and cultural heritage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationImage;
