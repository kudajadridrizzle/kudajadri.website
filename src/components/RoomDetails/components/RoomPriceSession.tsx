import { useNavigate, useParams } from "react-router-dom";
import { roomDataMap } from "../constants";


export const RoomPriceSession = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // 'classic-rooms' etc.
  const roomData = roomDataMap[id || "classic-rooms"]
  return (
    <div className="sm:px-[12%] sm:pb-32 flex mobile:flex-col sm:flex-row px-4 large:px-[18%]">
      <div className="flex flex-col sm:gap-10 flex-1 mobile:gap-6 mobile:pb-8 sm:pb-0">
        <div className="flex flex-col gap-3">
          <h1 className="text-primary font-ivy mobile:text-[32px] sm:text-[44px]">
            {roomData.roomType}
          </h1>
          <p className="text-secondary sm:text-xl">{roomData.description}</p>
        </div>
        <div className="flex flex-col sm:gap-12 mobile:gap-5">
          <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl">
            {roomData.offersTitle}
          </h2>
          <div className="flex gap-24 text-primary font-albertSans">
            <div className="flex flex-col gap-3.5">
              {roomData.offers.map((offer, i) => (
                <span key={`offer-1-${i}`}>{offer}</span>
              ))}
            </div>
            <div className="flex flex-col gap-3.5">
              {roomData.offers.map((offer, i) => (
                <span key={`offer-2-${i}`}>{offer}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-6 sm:py-11 flex flex-col gap-5 sm:w-[358px]">
        <div className="flex flex-col gap-1">
          <h2 className="text-primary font-albertSans text-2xl font-medium">
            ₹{roomData.pricePerNight} night
          </h2>
          <span className="text-secondary font-albertSans text-base">
            {roomData.priceNote}
          </span>
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
          <h2 className="text-primary font-albertSans text-lg">
            {roomData.cancellationPolicyTitle}
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-secondary font-albertSans">
            {roomData.cancellationPolicy.map((rule, i) => (
              <li key={`cancel-${i}`}>{rule}</li>
            ))}
          </ul>
          <h1 className="text-primary font-albertSans">{roomData.extraPerson.note}</h1>
          <ul className="list-disc pl-5 space-y-2 text-secondary font-albertSans">
            {roomData.extraPerson.rules.map((rule, i) => (
              <li key={`extra-${i}`}>{rule}</li>
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
