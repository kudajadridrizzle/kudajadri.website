import {
  Baby,
  Trees,
  MapPin,
  Eye,
  Sprout,
  ChefHat,
  Home,
  Mountain,
  Wifi,
  Shield,
  Car,
  Heart,
} from 'lucide-react';

const Amenities = () => {
  return (
    <div
      className="sm:px-[6%] sm:py-32 bg-primary mobile:px-4 mobile:py-14"
      id="a"
    >
      <div className="flex flex-col sm:gap-16 mobile:gap-8">
        <div className="flex flex-col gap-6 sm:items-center mobile:items-start">
          <div className="flex flex-col gap-6 font-albertSans sm:items-center mobile:items-start">
            <p className="uppercase text-[#FFF] font-albertSans">amenities</p>
            <h2 className="text-[#FFF] font-ivy text-[32px] sm:text-[44px]">
              Wayanad Homestays Highlights
            </h2>
          </div>
          <p className="font-albertSans text-secondary text-[16px] sm:text-[20px] text-start sm:text-center">
            Discover a perfect blend of heritage, comfort, and nature at our
            Wayanad homestays. Enjoy cozy heritage-inspired rooms, scenic paddy
            field views, peaceful surroundings, and engaging activities like
            nature walks and wildlife spotting. With family-friendly spaces,
            Kerala cuisine, and modern amenities, your stay promises relaxation,
            adventure, and unforgettable memories.
          </p>
        </div>

        <div className="flex flex-wrap sm:gap-14 mobile:gap-5 justify-center">
          <AmenityIcon Icon={Home} title="Heritage Stay" />
          <AmenityIcon Icon={Mountain} title="Paddy Field View" />
          <AmenityIcon Icon={Wifi} title="Fast WiFi" />
          <AmenityIcon Icon={Shield} title="Enhanced Safety" />
          <AmenityIcon Icon={Car} title="Ample Parking" />
          <AmenityIcon Icon={Heart} title="Peaceful Environment" />
        </div>

        <div className="flex flex-wrap sm:gap-14 mobile:gap-5 justify-center">
          <AmenityIcon Icon={Baby} title="Kids Play Area" />
          <AmenityIcon Icon={Trees} title="Nature Walks" />
          <AmenityIcon Icon={MapPin} title="Tourist Access" />
          <AmenityIcon Icon={Eye} title="Wildlife Spotting" />
          <AmenityIcon Icon={Sprout} title="Organic Garden" />
          <AmenityIcon Icon={ChefHat} title="Kerala Cuisine" />
        </div>
      </div>
    </div>
  );
};

export default Amenities;

const AmenityIcon = ({
  Icon,
  title,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
}) => {
  return (
    <div className="flex flex-col gap-2 items-center mobile:py-7 sm:py-0 mobile:w-[140px]">
      <div className="text-white">
        <Icon className="w-8 h-8" />
      </div>
      <p className="text-[#FFF] text-base font-albertSans text-center">
        {title}
      </p>
    </div>
  );
};
