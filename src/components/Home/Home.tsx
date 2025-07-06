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
import Faq from "./components/Faq";

const Home = () => {
  usePageMetadata({
    title: "Wayanad homestays: Best homestays in Wayanad for families & couples",
    description: "Wayanad homestays offer the perfect getaway for families and couples with cozy, comfortable accommodations. Explore the best homestays in Wayanad for a memorable stay.",
    keywords: "wayanad homestays, best homestay wayanad, family accommodation, couple stays, kudajadri homestay",
    ogImage: "/aboutHero.jpg",
    ogUrl: window.location.href,
    twitterImage: "/aboutHero.jpg"
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
      <Faq/>
      <Footer />
    </div>
  );
};

export default Home;
