// import Example from "../../a";
import AboutSession from "./components/AboutSession";
import Amenities from "./components/Amenities";
import Direction from "./components/Direction";
import Footer from "./components/Footer";
import GallarySession from "./components/GallarySession";
import { IndividualRooms } from "./components/IndividualRooms";
import LocationImage from "./components/LocationImage";
import OurGallery from "./components/OurGallery";
import ReviewSession from "./components/ReviewSession";
import RoomSession from "./components/RoomSession";
import VideoBackground from "./components/VideoBackground";
import { usePageMetadata } from '../../hooks/usePageMetadata';

const Home = () => {
  usePageMetadata({
    title: "Wayanad homestays: Best homestays in Wayanad for families & couples",
    description: "Wayanad homestays offer the perfect getaway for families and couples with cozy, comfortable accommodations. Explore the best homestays in Wayanad for a memorable stay."
  });

  return (
    <div>
      <VideoBackground />
      <AboutSession />
      <GallarySession/>
      {/* <Example /> */}
      <RoomSession />
      <IndividualRooms/>
      <Amenities />
      <OurGallery />
      <ReviewSession />
      <LocationImage />
      <Direction />
      <Footer />
    </div>
  );
};

export default Home;
