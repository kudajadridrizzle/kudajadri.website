import Faq from "../Home/components/Faq";
import Footer from "../Home/components/Footer";
import { IndividualRooms } from "../Home/components/IndividualRooms";
import RoomSession from "../Home/components/RoomSession";
import Hero from "./Components/Hero";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        {/* Browser Tab Title */}
        <title>Wayanad Accommodations: Homestays, Cottages, and Family Rooms</title>
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Discover peaceful accommodations in Wayanad with cozy homestays, spacious cottages with swimming pool, and family rooms designed for comfort and relaxation" />
        <meta name="keywords" content="wayanad accommodations, homestays, cottages, family rooms, swimming pool, comfort, relaxation" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        
        {/* Open Graph Meta Tags for Facebook/WhatsApp */}
        <meta property="og:title" content="Wayanad Accommodations: Homestays, Cottages, and Family Rooms" />
        <meta property="og:description" content="Discover peaceful accommodations in Wayanad with cozy homestays, spacious cottages with swimming pool, and family rooms designed for comfort and relaxation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${window.location.origin}/aboutHero.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wayanad Accommodations: Homestays, Cottages, and Family Rooms" />
        <meta name="twitter:description" content="Discover peaceful accommodations in Wayanad with cozy homestays, spacious cottages with swimming pool, and family rooms designed for comfort and relaxation" />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={`${window.location.origin}/aboutHero.jpg`} />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Hero />
      <RoomSession />
      <IndividualRooms />
      <Faq/>
      <Footer />
    </div>
  );
};

export default About;
