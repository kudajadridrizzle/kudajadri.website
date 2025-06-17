import Footer from "../Home/components/Footer";
import { Header } from "../Home/components/Header";
import AnotherRoomSession from "./components/AnotherRoomSession";
import Hero from "./components/Hero";
import MorningSession from "./components/MorningSession";
import { RoomPriceSession } from "./components/RoomPriceSession";
import { usePageMetadata } from '../../hooks/usePageMetadata';
import { useParams } from 'react-router-dom';
import { roomData, classicRooms, deluxeRooms, deluxeHeritageRooms } from './constants';

const RoomDetails = () => {
  const { id } = useParams();
  const roomContent = id === 'classic-rooms' ? classicRooms :
                     id === 'deluxe-heritage-rooms' ? deluxeHeritageRooms :
                     id === 'deluxe-rooms' ? deluxeRooms : classicRooms;

  const getMetaContent = () => {
    const defaultImage = roomData['classic-rooms'].imageOne;
    const roomImage = roomData[id || 'classic-rooms']?.imageOne || defaultImage;

    return {
      title: `${roomContent.roomType} - Kudajadri Homestay Wayanad`,
      description: `${roomContent.description} Book your stay at Kudajadri Homestay in Wayanad.`,
      keywords: `${roomContent.roomType.toLowerCase()} wayanad, homestay wayanad, accommodation wayanad, kudajadri homestay`,
      ogTitle: `${roomContent.roomType} - Kudajadri Homestay`,
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
