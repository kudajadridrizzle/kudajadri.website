import Hero from "../About/components/Hero";
import Direction from "../Home/components/Direction";
import Faq from "../Home/components/Faq";
import Footer from "../Home/components/Footer";
import { Packages } from "./components/packages";
import { Helmet } from "react-helmet-async";

export const TourPackages = () => {
  return (
    <div>
      <Helmet>
        {/* Browser Tab Title */}
        <title>Tour Packages & Activities | Kudajadri Homestay Wayanad</title>
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Explore exciting tour packages and activities in Wayanad with Kudajadri Homestay. Discover nature trails, wildlife, and cultural experiences for an unforgettable vacation." />
        <meta name="keywords" content="wayanad tour packages, kudajadri activities, nature trails, wildlife tours, cultural experiences" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        
        {/* Open Graph Meta Tags for Facebook/WhatsApp */}
        <meta property="og:title" content="Tour Packages & Activities | Kudajadri Homestay Wayanad" />
        <meta property="og:description" content="Explore exciting tour packages and activities in Wayanad with Kudajadri Homestay. Discover nature trails, wildlife, and cultural experiences for an unforgettable vacation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${window.location.origin}/wayanadImg.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tour Packages & Activities | Kudajadri Homestay Wayanad" />
        <meta name="twitter:description" content="Explore exciting tour packages and activities in Wayanad with Kudajadri Homestay. Discover nature trails, wildlife, and cultural experiences for an unforgettable vacation." />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={`${window.location.origin}/wayanadImg.jpg`} />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Hero />
      <Packages />
      <Direction/>
      <Faq/>
      <Footer/>
    </div>
  );
};
