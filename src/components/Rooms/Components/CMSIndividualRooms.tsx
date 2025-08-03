import { useNavigate } from 'react-router-dom';
import { IndividualRoomSession } from '../../Home/components/IndividualRoomSession';

interface Room {
  id: string;
  title: string;
  description: string;
  image: string; // Already processed image URL
  type: 'normal' | 'reverse';
  path: string;
}

interface CMSIndividualRoomsProps {
  rooms: Room[];
}

const CMSIndividualRooms = ({ rooms }: CMSIndividualRoomsProps) => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col justify-center px-4 py-16 sm:px-[12%] sm:py-32 gap-16 large:px-[18%]">
      {rooms.map(room => (
        <IndividualRoomSession
          key={room.id}
          title={room.title}
          discription={room.description}
          image={room.image}
          type={room.type === 'reverse' ? 'reverse' : undefined}
          onClick={() => handleClick(room.path)}
        />
      ))}
    </div>
  );
};

export default CMSIndividualRooms;
