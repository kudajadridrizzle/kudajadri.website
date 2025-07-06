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
import { Helmet } from "react-helmet-async";
import Faq from "./components/Faq";

const Home = () => {
  return (
    <div>
      <Helmet>
        {/* Browser Tab Title */}
        <title>Wayanad homestays: Best homestays in Wayanad for families & couples</title>
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Wayanad homestays offer the perfect getaway for families and couples with cozy, comfortable accommodations. Explore the best homestays in Wayanad for a memorable stay." />
        <meta name="keywords" content="wayanad homestays, best homestay wayanad, family accommodation, couple stays, kudajadri homestay" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        
        {/* Open Graph Meta Tags for Facebook/WhatsApp */}
        <meta property="og:title" content="Wayanad homestays: Best homestays in Wayanad for families & couples" />
        <meta property="og:description" content="Wayanad homestays offer the perfect getaway for families and couples with cozy, comfortable accommodations. Explore the best homestays in Wayanad for a memorable stay." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${window.location.origin}/aboutHero.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wayanad homestays: Best homestays in Wayanad for families & couples" />
        <meta name="twitter:description" content="Wayanad homestays offer the perfect getaway for families and couples with cozy, comfortable accommodations. Explore the best homestays in Wayanad for a memorable stay." />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={`${window.location.origin}/aboutHero.jpg`} />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
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
