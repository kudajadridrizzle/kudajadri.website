import Footer from "../Home/components/Footer";
import {Header} from "../Home/components/Header";
import AnotherRoomSession from "./components/AnotherRoomSession";
import Hero from "./components/Hero";
import MorningSession from "./components/MorningSession";
import { RoomPriceSession } from "./components/RoomPriceSession";
import { usePageMetadata } from '../../hooks/usePageMetadata';
import { useParams } from 'react-router-dom';
import { roomDataMap, roomData } from './constants';

const RoomDetails = () => {
  const { id } = useParams();
  const roomContent = roomData[id || "classic-rooms"];
  const roomImages = roomDataMap[id || "classic-rooms"];

  // Define meta content based on room type
  const getMetaContent = () => {
    switch(id) {
      case 'classic-rooms':
        return {
          title: "Classic Rooms - Kudajadri Homestay Wayanad",
          description: "Experience affordable luxury in our Classic Rooms at Kudajadri Homestay. Enjoy scenic views, modern amenities, and authentic Wayanad hospitality starting at ₹3,500 per night.",
          keywords: "classic rooms wayanad, budget homestay wayanad, affordable accommodation wayanad, kudajadri homestay, wayanad homestay",
          ogTitle: "Classic Rooms - Kudajadri Homestay",
          ogDescription: "Affordable luxury with scenic views in Wayanad. Starting at ₹3,500 per night.",
          ogImage: roomImages.imageOne
        };
      case 'deluxe-heritage-rooms':
        return {
          title: "Deluxe Heritage Rooms - Kudajadri Homestay Wayanad",
          description: "Immerse yourself in heritage luxury at our Deluxe Heritage Rooms. Featuring traditional architecture, modern comforts, and stunning views of Wayanad's landscape.",
          keywords: "heritage rooms wayanad, luxury homestay wayanad, traditional accommodation wayanad, kudajadri homestay, wayanad heritage stay",
          ogTitle: "Deluxe Heritage Rooms - Kudajadri Homestay",
          ogDescription: "Experience heritage luxury with modern comforts in Wayanad.",
          ogImage: roomImages.imageOne
        };
      case 'deluxe-rooms':
        return {
          title: "Deluxe Rooms - Kudajadri Homestay Wayanad",
          description: "Indulge in premium comfort in our Deluxe Rooms. Enjoy spacious accommodations, premium amenities, and breathtaking views of Wayanad's natural beauty.",
          keywords: "deluxe rooms wayanad, premium homestay wayanad, luxury accommodation wayanad, kudajadri homestay, wayanad luxury stay",
          ogTitle: "Deluxe Rooms - Kudajadri Homestay",
          ogDescription: "Premium comfort with breathtaking views in Wayanad.",
          ogImage: roomImages.imageOne
        };
      default:
        return {
          title: "Rooms - Kudajadri Homestay Wayanad",
          description: "Discover our range of accommodations at Kudajadri Homestay in Wayanad. From classic to deluxe rooms, experience comfort and luxury in nature's lap.",
          keywords: "wayanad homestay, kudajadri homestay, accommodation wayanad, homestay rooms wayanad",
          ogTitle: "Rooms - Kudajadri Homestay",
          ogDescription: "Experience comfort and luxury in Wayanad's natural beauty.",
          ogImage: roomImages.imageOne
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
