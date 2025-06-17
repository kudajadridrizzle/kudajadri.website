import { roomData } from '../constants';
import mabileRoomImage from "../../../assets/RoomMbileImage.jpeg";
import { useParams } from 'react-router-dom';

const Hero = () => {
  const {id:roomId} = useParams();
  return (
    <>
    {roomId && roomData[roomId] ? (
      <div className="mobile:hidden sm:flex p-20  gap-2 justify-center">
        <div>
          <img src={roomData[roomId].imageOne} alt="roomImage" />
        </div>
        <div className="flex flex-col gap-2">
          <img src={roomData[roomId].imageTwo} alt="roomImage" />
          <img src={roomData[roomId].imageThree} alt="roomImage" />
        </div>
        <div className="flex flex-col gap-2">
          <img src={roomData[roomId].imageFour} alt="roomImage" />
          <img src={roomData[roomId].imageFive} alt="roomImage" />
        </div>
      </div>
    ) : (
      <div>No room data available</div>
    )}
    <div className='sm:hidden px-4 pb-8'>
      <img src={mabileRoomImage} alt="" className='rounded-[14px]'/>

    </div>
    </>
  );
}

export default Hero
