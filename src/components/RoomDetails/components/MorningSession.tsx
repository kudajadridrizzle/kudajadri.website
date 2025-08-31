import { Room } from '../constants';

interface MorningSessionProps {
  roomData: Room;
}

const MorningSession = ({ roomData }: MorningSessionProps) => {
  return (
    <div className="w-full sm:px-[12%] sm:py-32 flex gap-8 mobile:px-4 mobile:py-8 mobile:flex-col-reverse sm:flex-row sm:items-stretch large:px-[18%] h-auto min-h-0">
      <div className="flex-1 flex flex-col justify-center gap-6 py-8">
        <h2 className="text-[#000] font-ivy sm:text-[44px] mobile:text-[32px]">
          {roomData.session.titile}
        </h2>
        <div
          className="text-secondary sm:text-xl font-albertSans whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: roomData.session.subTitlestr }}
        />
        <div className="mt-4">
          <button className="px-6 py-3 rounded-full bg-primary text-[#fff] font-albertSans font-medium hover:bg-opacity-90 transition-colors">
            Book Now
          </button>
        </div>
      </div>
      <div className="flex-1 relative w-full aspect-[4/3] sm:aspect-auto sm:h-auto">
        <img
          src={roomData.session.image}
          alt={roomData.session.titile}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default MorningSession;
