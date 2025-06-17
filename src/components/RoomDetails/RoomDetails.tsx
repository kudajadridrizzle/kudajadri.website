import Footer from "../Home/components/Footer";
import {Header} from "../Home/components/Header";
import AnotherRoomSession from "./components/AnotherRoomSession";
import Hero from "./components/Hero";
import MorningSession from "./components/MorningSession";
import { RoomPriceSession } from "./components/RoomPriceSession";
import { usePageMetadata } from '../../hooks/usePageMetadata';
import { useParams } from 'react-router-dom';
import { roomData, classicRooms, deluxeRooms, deluxeHeritageRooms } from './constants';

const RoomDetails = () => {
  const { id } = useParams();
  const roomImages = roomData[id || "classic-rooms"];
  
  // Get room content based on id
  const getRoomContent = () => {
    switch(id) {
      case 'classic-rooms':
        return classicRooms;
      case 'deluxe-heritage-rooms':
        return deluxeHeritageRooms;
      case 'deluxe-rooms':
        return deluxeRooms;
      default:
        return classicRooms;
    }
  };

  const roomContent = getRoomContent();

  // Define meta content based on room type
  const getMetaContent = () => {
    switch(id) {
      case 'classic-rooms':
        return {
          title: `${roomContent.roomType} - Kudajadri Homestay Wayanad`,
          description: `${roomContent.description} Book your stay at Kudajadri Homestay in Wayanad.`,
          keywords: "classic rooms wayanad, budget homestay wayanad, affordable accommodation wayanad, kudajadri homestay, wayanad homestay",
          ogTitle: `${roomContent.roomType} - Kudajadri Homestay`,
          ogDescription: `Affordable luxury with scenic views in Wayanad. Starting at ₹${roomContent.pricePerNight} per night.`,
          ogImage: roomImages?.imageOne || ''
        };
      case 'deluxe-heritage-rooms':
        return {
          title: `${roomContent.roomType} - Kudajadri Homestay Wayanad`,
          description: `${roomContent.description} Book your stay at Kudajadri Homestay in Wayanad.`,
          keywords: "heritage rooms wayanad, luxury homestay wayanad, traditional accommodation wayanad, kudajadri homestay, wayanad heritage stay",
          ogTitle: `${roomContent.roomType} - Kudajadri Homestay`,
          ogDescription: `Experience heritage luxury with modern comforts in Wayanad. Starting at ₹${roomContent.pricePerNight} per night.`,
          ogImage: roomImages?.imageOne || ''
        };
      case 'deluxe-rooms':
        return {
          title: `${roomContent.roomType} - Kudajadri Homestay Wayanad`,
          description: `${roomContent.description} Book your stay at Kudajadri Homestay in Wayanad.`,
          keywords: "deluxe rooms wayanad, premium homestay wayanad, luxury accommodation wayanad, kudajadri homestay, wayanad luxury stay",
          ogTitle: `${roomContent.roomType} - Kudajadri Homestay`,
          ogDescription: `Premium comfort with breathtaking views in Wayanad. Starting at ₹${roomContent.pricePerNight} per night.`,
          ogImage: roomImages?.imageOne || ''
        };
      default:
        return {
          title: "Rooms - Kudajadri Homestay Wayanad",
          description: "Discover our range of accommodations at Kudajadri Homestay in Wayanad. From classic to deluxe rooms, experience comfort and luxury in nature's lap.",
          keywords: "wayanad homestay, kudajadri homestay, accommodation wayanad, homestay rooms wayanad",
          ogTitle: "Rooms - Kudajadri Homestay",
          ogDescription: "Experience comfort and luxury in Wayanad's natural beauty.",
          ogImage: roomImages?.imageOne || ''
        };
    }
  };

  const metaContent = getMetaContent();
  usePageMetadata(metaContent);

  return (
    <div>
      <Header type="black" />
      <Hero/>
      <RoomPriceSession/>
      <MorningSession/>
      <AnotherRoomSession/>
      <Footer/>
    </div>
  );
};

export default RoomDetails;
