import Footer from "../Home/components/Footer";
import {Header} from "../Home/components/Header";
import AnotherRoomSession from "./components/AnotherRoomSession";
import Hero from "./components/Hero";
import MorningSession from "./components/MorningSession";
import { RoomPriceSession } from "./components/RoomPriceSession";
import { usePageMetadata } from '../../hooks/usePageMetadata';
import { useParams } from 'react-router-dom';
import { roomDataMap } from './constants';

const RoomDetails = () => {
  const { id } = useParams();
  const roomData = roomDataMap[id || "classic-rooms"];

  // Define meta content based on room type
  const getMetaContent = () => {
    switch(id) {
      case 'classic-rooms':
        return {
          title: "Classic Rooms - Homestay Wayanad",
          description: "Experience affordable luxury in our Classic Rooms at Homestay. Enjoy scenic views, modern amenities, and authentic Wayanad hospitality starting at ₹3,500 per night.",
          keywords: "classic rooms wayanad, budget homestay wayanad, affordable accommodation wayanad,  homestay, wayanad homestay",
          ogTitle: "Classic Rooms - Homestay",
          ogDescription: "Affordable luxury with scenic views in Wayanad. Starting at ₹3,500 per night.",
          ogImage: roomData.imageOne
        };
      case 'deluxe-heritage-rooms':
        return {
          title: "Deluxe Heritage Rooms - Homestay Wayanad",
          description: "Immerse yourself in heritage luxury at our Deluxe Heritage Rooms. Featuring traditional architecture, modern comforts, and stunning views of Wayanad's landscape.",
          keywords: "heritage rooms wayanad, luxury homestay wayanad, traditional accommodation wayanad,  homestay, wayanad heritage stay",
          ogTitle: "Deluxe Heritage Rooms - Homestay",
          ogDescription: "Experience heritage luxury with modern comforts in Wayanad.",
          ogImage: roomData.imageOne
        };
      case 'deluxe-rooms':
        return {
          title: "Deluxe Rooms - Homestay Wayanad",
          description: "Indulge in premium comfort in our Deluxe Rooms. Enjoy spacious accommodations, premium amenities, and breathtaking views of Wayanad's natural beauty.",
          keywords: "deluxe rooms wayanad, premium homestay wayanad, luxury accommodation wayanad, homestay, wayanad luxury stay",
          ogTitle: "Deluxe Rooms - Homestay",
          ogDescription: "Premium comfort with breathtaking views in Wayanad.",
          ogImage: roomData.imageOne
        };
      default:
        return {
          title: "Rooms -Homestay Wayanad",
          description: "Discover our range of accommodations at Homestay in Wayanad. From classic to deluxe rooms, experience comfort and luxury in nature's lap.",
          keywords: "wayanad homestay, homestay, accommodation wayanad, homestay rooms wayanad",
          ogTitle: "Rooms -  Homestay",
          ogDescription: "Experience comfort and luxury in Wayanad's natural beauty.",
          ogImage: roomData.imageOne
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
