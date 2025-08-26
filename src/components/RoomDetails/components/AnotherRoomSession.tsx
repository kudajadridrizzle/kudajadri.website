import { useNavigate, useParams } from 'react-router-dom';
import { roomData } from '../constants';

interface AnotherRoomSessionProps {
  roomType?: string;
}

const AnotherRoomSession: React.FC<AnotherRoomSessionProps> = ({
  roomType = 'Classic',
}) => {
  const getSectionTitle = () => {
    switch (roomType.toLowerCase()) {
      case 'classic rooms':
        return 'More Room Options at Our Affordable Wayanad Homestays';
      case 'deluxe rooms':
        return 'More Room Options at Our Wayanad Cottages';
      case 'deluxe heritage rooms':
        return 'More Room Options at Our Heritage Wayanad Homestays';
      case 'premium rooms':
        return 'More Room Options at Our Premium Wayanad Homestays';
      default:
        return 'More Room Options at Our Affordable Wayanad Homestays';
    }
  };
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  return (
    <div className="sm:px-[12%] sm:py-32 flex sm:justify-between mobile:px-4 mobile:py-14 mobile:flex-col sm:flex-col gap-[24px] large:px-[18%] ">
      <div className="sm:pb-0 mobile:pb-8">
        <h2 className="text-[#000] sm:text-[44px] mobile:text-[32px] font-ivy">
          {getSectionTitle()}
        </h2>
      </div>
      <div className="flex gap-8 sm:flex-row mobile:flex-col">
        <div className="flex flex-col gap-8 sm:w-[412px] mobile:w-full ">
          <div>
            {id && (
              <img
                src={roomData[id]?.anotherRoomOne?.image}
                alt=""
                className="mobile:w-full"
              />
            )}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#000] text-lg font-albertSans">
              {id && roomData[id]?.anotherRoomOne?.title}
            </span>
            <div className="flex flex-col gap-3">
              <span className="sm:text-4xl mobile:text-[28px] font-light text-primary font-ivy">
                {id && roomData[id]?.anotherRoomOne.roomType}
              </span>
              <span className="text-lg text-secondary font-albertSans">
                {id && roomData[id].anotherRoomOne.description}
              </span>
            </div>
            <div>
              <button
                className="px-10 py-4 capitalize border rounded-full text-primary font-albertSans border-primary"
                onClick={() => {
                  if (id) {
                    navigate(roomData[id].anotherRoomOne.navigate as string);
                  }
                }}
              >
                See room
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 sm:w-[412px]">
          <div>
            <img
              src={id && roomData[id]?.anotherRoomTwo.image}
              alt=""
              className="mobile:w-full"
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="sm:text-4xl mobile:text-[28px] font-light text-primary font-ivy">
              {id && roomData[id]?.anotherRoomTwo.roomType}
            </span>
            <span className="text-lg text-secondary font-albertSans">
              {id && roomData[id]?.anotherRoomTwo.description}
            </span>
            <div>
              <button
                className="px-10 py-4 capitalize border rounded-full text-primary font-albertSans border-primary"
                onClick={() => {
                  if (id) {
                    navigate(roomData[id].anotherRoomTwo.navigate as string);
                  }
                }}
              >
                See room
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 sm:w-[412px]">
          <div>
            <img
              src={id && roomData[id]?.anotherRoomThree.image}
              alt=""
              className="mobile:w-full"
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="sm:text-4xl mobile:text-[28px] font-light text-primary font-ivy">
              {id && roomData[id]?.anotherRoomThree.roomType}
            </span>
            <span className="text-lg text-secondary font-albertSans">
              {id && roomData[id]?.anotherRoomThree.description}
            </span>
            <div>
              <button
                className="px-10 py-4 capitalize border rounded-full text-primary font-albertSans border-primary"
                onClick={() => {
                  if (id) {
                    navigate(roomData[id].anotherRoomThree.navigate as string);
                  }
                }}
              >
                See room
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherRoomSession;
