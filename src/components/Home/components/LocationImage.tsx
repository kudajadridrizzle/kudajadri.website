import locationImage from "../../../assets/locationImage.jpg";
const LocationImage = () => {
  return (
    <div className="sm:px-[12%] sm:py-24 flex flex-col sm:flex-row mobile:px-4 mobile:py-14 large:px-[18%]">
      <div className="sm:w-1/2">
        <img src={locationImage} alt="" className="object-cover size-full" />
      </div>
      <div className="sm:w-1/2 bg-primary sm:px-24 flex sm:items-center mobile:px-4 mobile:py-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-[#fff] text-base font-albertSans">
            WAYANAD, KERALA
          </h1>
          <div>
            <h1 className="text-[#fff] font-ivy font-normal sm:text-[44px] mobile:text-[32px]">
              Land Of Paddy Fields
            </h1>
            <p className="text-secondary font-albertSans sm:text-xl opacity-80">
              A picturesque plateau surrounded by mountains, waterfalls, lush
              forests, and diverse flora and fauna, enriched by the charm of a
              century-old Jain Tharavadu, preserving the rich folklore and
              tribal culture of Wayanad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationImage;
