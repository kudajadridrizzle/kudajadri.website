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

const Home = () => {
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
