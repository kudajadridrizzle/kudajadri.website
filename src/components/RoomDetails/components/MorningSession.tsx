import { roomData } from "../constants";

const MorningSession = () => {
  return (
    <div className="sm:px-[12%] sm:py-32 flex gap-8 mobile:px-4 mobile:py-14 mobile:flex-col-reverse sm:flex-row sm:items-center large:px-[18%]">
      <div className="flex flex-col gap-6">
        <span className="text-[#000] font-ivy sm:text-[44px] mobile:text-[32px]">
          {roomData["deluxe-rooms"].sesstion.titile}
        </span>
        <span className="text-secondary sm:text-xl font-albertSans">{roomData["deluxe-rooms"].sesstion.subTitlestr}</span>
        <div>
          <button className="px-6 py-3 rounded-full bg-primary text-[#fff] font-albertSans font-medium">
            Book Now
          </button>
        </div>
      </div>
      <div className="sm:w-[880px] sm:h-[657px] mobile:w-full mobile:h[204px]">
        <img
          src={roomData["deluxe-rooms"].sesstion.image}
          alt=""
          className="size-full object-cover"
        />
      </div>
    </div>
  );
};

export default MorningSession;
