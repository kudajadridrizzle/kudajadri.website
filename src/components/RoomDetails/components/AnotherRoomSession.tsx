import { useNavigate, useParams } from "react-router-dom";
import { roomData } from "../constants";

const AnotherRoomSession = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  return (
    <div className="sm:px-[12%] sm:py-32 flex sm:justify-between mobile:px-4 mobile:py-14 mobile:flex-col sm:flex-row large:px-[18%]">
      <div className="sm:pb-0 mobile:pb-8">
        <span className="text-[#000] sm:text-[44px] mobile:text-[32px] font-ivy ">
          There's Room For Everyone
        </span>
      </div>
      <div className="flex gap-8 sm:flex-row mobile:flex-col">
        <div className="flex flex-col gap-8 sm:w-[412px] mobile:w-full">
          <div>
            {id && <img src={roomData[id]?.anotherRoomOne?.image} alt="" className="mobile:w-full" />}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#000] text-lg font-albertSans">
              {id && roomData[id]?.anotherRoomOne?.titlestr}
            </span>
            <div className="flex flex-col gap-3">
              <span className="sm:text-4xl mobile:text-[28px] font-light text-primary font-ivy">
                {id && roomData[id]?.anotherRoomOne.roomType}
              </span>
              <span className="text-secondary font-albertSans text-lg">
                {id && roomData[id].anotherRoomOne.discription}
              </span>
            </div>
            <div>
              <button className="px-10 py-4 text-primary font-albertSans capitalize border border-primary rounded-full" onClick={() => {
                if (id) {
                  navigate(roomData[id].anotherRoomOne.navigate as string);
                }
              }}>
                See room
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 sm:w-[412px]">
          <div>
            <img src={id && roomData[id]?.anotherRoomTwo.image} alt="" className="mobile:w-full" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[#000] text-lg font-albertSans">
              {id && roomData[id]?.anotherRoomTwo.titlestr}
            </span>
            <span className="sm:text-4xl mobile:text-[28px] font-light text-primary font-ivy">
              {id && roomData[id]?.anotherRoomTwo.roomType}
            </span>
            <span className="text-secondary font-albertSans text-lg">
              {id && roomData[id]?.anotherRoomTwo.discription}
            </span>
            <div>
              <button className="px-10 py-4 text-primary font-albertSans capitalize border border-primary rounded-full" onClick={() => {
                if (id) {
                  navigate(roomData[id].anotherRoomTwo.navigate as string);
                }
              }}>
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
