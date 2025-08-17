import { useNavigate } from 'react-router-dom';
import { IndividualRoomSession } from './IndividualRoomSession';
import roomOne from '/src/assets/roomOne.jpg';
import roomTwo from '/src/assets/roomTwo.jpg';
import roomThree from '/src/assets/roomThree.jpg';
import PremiumImg1 from '/src/assets/PremiumImg1.jpg';
export const IndividualRooms = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col justify-center px-4 py-16 sm:px-[12%] sm:py-32 gap-16 large:px-[18%]">
      <IndividualRoomSession
        // subTitle="ESSENTIAL"
        title="Classic Wayanad Homestay Rooms"
        discription="Classic Rooms offer affordable homestays in Wayanad, combining comfort and convenience. Enjoy cozy interiors, essential amenities, and warm hospitality. Perfect for travelers seeking budget-friendly stays without compromising quality, these rooms provide a peaceful retreat while exploring Wayanad’s natural beauty and popular attractions."
        image={roomThree}
        type="reverse"
        onClick={() => handleClick('/rooms/classic-rooms')}
      />
      <IndividualRoomSession
        // subTitle="ESSENTIAL"
        title="Deluxe Wayanad Homestay Rooms"
        discription="Deluxe Rooms provide cottage-style homestays in Wayanad, offering spacious interiors and modern amenities. Perfect for families and travelers seeking a blend of comfort and rustic charm, these rooms ensure a relaxing stay. Enjoy the serene surroundings, personalized hospitality, and easy access to Wayanad’s scenic spots and natural beauty."
        image={roomOne}
        onClick={() => handleClick('/rooms/deluxe-rooms')}
      />
      <IndividualRoomSession
        // subTitle="ESSENTIAL"
        title="Deluxe Heritage Wayanad Homestay Rooms"
        discription="Deluxe Heritage Rooms offer traditional homestays in Wayanad, combining heritage charm with modern comfort. Experience authentic Kerala-style interiors, cozy spaces, and warm hospitality. Ideal for travelers seeking a cultural and peaceful stay, these rooms let you enjoy Wayanad’s scenic beauty while immersing yourself in local traditions and heritage."
        image={roomTwo}
        type="reverse"
        onClick={() => handleClick('/rooms/deluxe-heritage-rooms')}
      />
      <IndividualRoomSession
        // subTitle="ESSENTIAL"
        title="Premium Luxury Wayanad Homestay Rooms"
        discription="Premium Rooms offer luxury homestays in Wayanad, featuring elegant interiors, modern amenities, and personalized services. Perfect for travelers seeking comfort and sophistication, these rooms provide a serene retreat amidst Wayanad’s natural beauty, ensuring a memorable and relaxing stay with stunning views and exceptional hospitality."
        image={PremiumImg1}
        onClick={() => handleClick('/rooms/premium-rooms')}
      />
    </div>
  );
};
