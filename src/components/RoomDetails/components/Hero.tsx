import { roomData } from '../constants';
import mabileRoomImage from '../../../assets/RoomMbileImage.jpeg';
import { useParams } from 'react-router-dom';

const Hero = () => {
  const { id: roomId } = useParams();
  
  if (!roomId || !roomData[roomId]) {
    return <div>No room data available</div>;
  }

  const room = roomData[roomId];
  
  return (
    <div className="w-full">
      {/* Desktop Layout */}
      <div className="hidden md:block w-full max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[60vh]">
          {/* Large image - spans 2 columns and 2 rows */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-xl">
            <img 
              src={room.imageOne} 
              alt="Room overview" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* 2x2 grid of smaller images */}
          {[room.imageTwo, room.imageThree, room.imageFour, room.imageFive].map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl">
              <img 
                src={img} 
                alt={`Room view ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Layout */}
      <div className="md:hidden px-4 pb-8">
        <img 
          src={mabileRoomImage} 
          alt="Room overview" 
          className="w-full h-auto rounded-[14px]" 
        />
      </div>
    </div>
  );
};

export default Hero;
