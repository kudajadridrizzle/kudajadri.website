import Footer from "../Home/components/Footer";
import { Header } from "../Home/components/Header";
import AnotherRoomSession from "./components/AnotherRoomSession";
import Hero from "./components/Hero";
import MorningSession from "./components/MorningSession";
import { RoomPriceSession } from "./components/RoomPriceSession";
import { usePageMetadata } from '../../hooks/usePageMetadata';
import { useParams } from 'react-router-dom';
import { roomData, classicRooms, deluxeRooms, deluxeHeritageRooms, premiumRooms } from './constants';

const RoomDetails = () => {
  const { id } = useParams();
  const roomContent = id === 'classic-rooms' ? classicRooms :
                     id === 'deluxe-heritage-rooms' ? deluxeHeritageRooms :
                     id === 'deluxe-rooms' ? deluxeRooms : 
                     id === 'premium-rooms' ? premiumRooms : classicRooms;
  const getMetaContent = () => {
    const defaultImage = roomData['classic-rooms'].imageOne;
    const roomImage = roomData[id || 'classic-rooms']?.imageOne || defaultImage;

    // Custom meta for specific rooms
    if (id === 'deluxe-heritage-rooms') {
      return {
        title: 'Heritage Homestay in Wayanad: Traditional Stay with Modern Comfort',
        description: 'Experience a heritage homestay in Wayanad with traditional charm and modern amenities. Enjoy a peaceful stay surrounded by nature and rich culture.',
        keywords: 'heritage homestay wayanad, traditional stay wayanad, modern comfort, kudajadri homestay',
        ogTitle: 'Heritage Homestay in Wayanad: Traditional Stay with Modern Comfort',
        ogDescription: 'Experience a heritage homestay in Wayanad with traditional charm and modern amenities. Enjoy a peaceful stay surrounded by nature and rich culture.',
        ogImage: roomImage
      };
    }
    if (id === 'deluxe-rooms') {
      return {
        title: 'Wayanad Cottages: Private Cottages in Wayanad for Family',
        description: 'Stay at our Wayanad cottages designed for families. Our private cottages in Wayanad offer comfort, scenic views, and a peaceful holiday experience.',
        keywords: 'wayanad cottages, private cottages wayanad, family stay wayanad, kudajadri homestay',
        ogTitle: 'Wayanad Cottages: Private Cottages in Wayanad for Family',
        ogDescription: 'Stay at our Wayanad cottages designed for families. Our private cottages in Wayanad offer comfort, scenic views, and a peaceful holiday experience.',
        ogImage: roomImage
      };
    }

    return {
      title: `${roomContent.roomType} -  Homestay Wayanad`,
      description: `${roomContent.description} Book your stay at  Homestay in Wayanad.`,
      keywords: `${roomContent.roomType.toLowerCase()} wayanad, homestay wayanad, accommodation wayanad, kudajadri homestay`,
      ogTitle: `${roomContent.roomType} -  Homestay`,
      ogDescription: `Experience luxury with scenic views in Wayanad. Starting at ₹${roomContent.pricePerNight} per night.`,
      ogImage: roomImage
    };
  };

  const metaContent = getMetaContent();
  usePageMetadata(metaContent);

  return (
    <div>
      <Header type="black" />
      <Hero />
      <RoomPriceSession />
      <MorningSession />
      <AnotherRoomSession />
      <Footer />
    </div>
  );
};

export default RoomDetails;
