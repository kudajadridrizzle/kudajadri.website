import { useNavigate } from 'react-router-dom';
import { IndividualRoomSession } from './IndividualRoomSession';

type RoomType = 'default' | 'reverse';

interface RoomContent {
  title: string;
  description: string;
  image: string;
  type: RoomType;
  path: string;
}

const ROOMS_CONTENT: RoomContent[] = [
  {
    title: "Classic Wayanad Homestay Rooms",
    description:
      "Classic Rooms offer affordable **homestays in Wayanad**, combining comfort and convenience. Enjoy cozy interiors, essential amenities, and warm hospitality. Perfect for travelers seeking budget-friendly stays without compromising quality, these rooms provide a peaceful retreat while exploring Wayanad’s natural beauty and popular attractions.",
    image: "/images/Rooms/classic/1 - Copy.webp",
    type: "reverse",
    path: "/rooms/classic-rooms",
  },
  {
    title: "Deluxe Heritage Wayanad Homestay Rooms",
    description:
      "Deluxe Heritage Rooms offer traditional homestays in Wayanad, combining heritage charm with modern comfort. Experience authentic Kerala-style interiors, cozy spaces, and warm hospitality. Ideal for travelers seeking a cultural and peaceful stay, these rooms let you enjoy Wayanad’s scenic beauty while immersing yourself in local traditions and heritage.",
    image: "/images/Rooms/deluxe_heritage/DeluxeHeritage.webp",
    type: "default",
    path: "/rooms/deluxe-heritage-rooms",
  },
  {
    title: "Premium Luxury Wayanad Homestay Rooms",
    description:
      "Premium Rooms offer luxury homestays in Wayanad, featuring elegant interiors, modern amenities, and personalized services. Perfect for travelers seeking comfort and sophistication, these rooms provide a serene retreat amidst Wayanad’s natural beauty, ensuring a memorable and relaxing stay with stunning views and exceptional hospitality.",
    image: "/images/Rooms/premium/PremiumRoom.webp",
    type: "reverse",
    path: "/rooms/premium-rooms",
  },
  {
    title: "Deluxe Wayanad Homestay Rooms",
    description:
      "Deluxe Rooms provide cottage-style homestays in Wayanad, offering spacious interiors and modern amenities. Perfect for families and travelers seeking a blend of comfort and rustic charm, these rooms ensure a relaxing stay. Enjoy the serene surroundings, personalized hospitality, and easy access to Wayanad's scenic spots.",
    image: "/images/Rooms/deluxe/DeluxeRoom.webp",
    type: "default",
    path: "/rooms/deluxe-rooms",
  },
];

export const IndividualRooms = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col justify-center px-4 py-16 sm:px-[12%] sm:py-32 gap-16 large:px-[18%]">
      {ROOMS_CONTENT.map((room, index) => (
        <IndividualRoomSession
          key={index}
          title={room.title}
          discription={room.description}
          image={room.image}
          type={room.type}
          onClick={() => handleClick(room.path)}
        />
      ))}
    </div>
  );
};
