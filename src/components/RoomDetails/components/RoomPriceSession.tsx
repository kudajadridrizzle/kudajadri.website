import { useNavigate, useParams } from 'react-router-dom';
import { roomDataMap } from '../constants';
import {
  Wifi,
  Tv,
  Shield,
  Home,
  BedDouble,
  Snowflake,
  Droplet,
  Zap,
} from 'lucide-react';

export const RoomPriceSession = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // 'classic-rooms' etc.
  const roomData = roomDataMap[id || 'classic-rooms'];

  const iconMap: {
    [key: string]: React.ComponentType<{ className?: string }>;
  } = {
    'Bunker Beds': BedDouble,
    'Air Conditioning (on request)': Snowflake,
    'Wi-Fi': Wifi,
    'TV': Tv,
    'Hot Water': Droplet,
    'Electric Kettle': Zap,
    'Window Guards': Shield,
    'Essentials': Home,
  };

  // Function to get the display text for the offer
  const getDisplayText = (offer: string) => {
    if ((id === 'premium-rooms' || id === 'deluxe-rooms') && offer === 'Air Conditioning (on request)') {
      return 'Bunker Beds';
    }
    return offer;
  };

  return (
    <div className="sm:px-[12%] sm:pb-32 flex mobile:flex-col sm:flex-row px-4 large:px-[18%]">
      <div className="flex flex-col sm:gap-10 flex-1 mobile:gap-6 mobile:pb-8 sm:pb-0">
        <div className="flex flex-col gap-3">
          <h1 className="text-primary font-ivy mobile:text-[32px] sm:text-[44px]">
            {roomData.roomType}
          </h1>
          <p className="text-secondary sm:text-xl font-albertSans">
            {roomData.description}
          </p>
        </div>
        <div className="flex flex-col sm:gap-12 mobile:gap-5">
          <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl">
            {roomData.offersTitle}
          </h2>
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-primary font-albertSans">
            {roomData.offers.map((offer, i) => {
              const displayText = getDisplayText(offer);
              const Icon = iconMap[displayText] || Home;
              return (
                <div key={`offer-${i}`} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-primary" />
                  <span>{displayText}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="sm:px-6 sm:py-11 flex flex-col gap-5 sm:w-[358px]">
        <div className="flex flex-col gap-1">
          <span className="text-primary font-albertSans text-2xl font-medium">
            ₹{roomData.pricePerNight} /night
          </span>
          <span className="text-secondary font-albertSans text-base">
            {roomData.priceNote}
          </span>
          <div className="mt-2">
            <ul className="list-disc pl-5 space-y-1 text-secondary font-albertSans text-sm">
              {roomData.extraPerson.rules.map((rule, i) => (
                <li key={`extra-${i}`}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col px-2 border-l border-primary">
          <span className="text-primary font-albertSans font-semibold">
            <span className="font-normal">Check-in:</span> {roomData.checkIn}
          </span>
          <span className="text-primary font-albertSans font-semibold">
            <span className="font-normal">Check-out:</span> {roomData.checkOut}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-primary font-albertSans text-lg">
            {roomData.cancellationPolicyTitle}
          </span>
          <ul className="list-disc pl-5 space-y-2 text-secondary font-albertSans">
            {roomData.cancellationPolicy.map((rule, i) => (
              <li key={`cancel-${i}`}>{rule}</li>
            ))}
          </ul>
          <div>
            <button
              className="px-6 py-3 rounded-full bg-primary text-[#fff] font-albertSans"
              onClick={() => {
                navigate(roomData.bookingButtonLink);
              }}
            >
              {roomData.bookingButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
