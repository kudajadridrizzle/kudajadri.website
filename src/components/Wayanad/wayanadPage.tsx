import Faq from "../Home/components/Faq";
import Footer from "../Home/components/Footer";
import { Cards } from "./components/cards";
import Hero from "./components/Hero";
import { Helmet } from "react-helmet-async";

export const WayanadPage = () => {
  return (
    <div>
      <Helmet>
        {/* Browser Tab Title */}
        <title>Wayanad: Explore Tourist Attractions and Destinations in Wayanad</title>
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Discover top tourist attractions and must-visit destinations in Wayanad. Plan your perfect trip to explore nature, wildlife, and cultural sites." />
        <meta name="keywords" content="wayanad tourist attractions, wayanad destinations, nature trails, wildlife, cultural sites, kudajadri wayanad" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        
        {/* Open Graph Meta Tags for Facebook/WhatsApp */}
        <meta property="og:title" content="Wayanad: Explore Tourist Attractions and Destinations in Wayanad" />
        <meta property="og:description" content="Discover top tourist attractions and must-visit destinations in Wayanad. Plan your perfect trip to explore nature, wildlife, and cultural sites." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${window.location.origin}/wayanadImg.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wayanad: Explore Tourist Attractions and Destinations in Wayanad" />
        <meta name="twitter:description" content="Discover top tourist attractions and must-visit destinations in Wayanad. Plan your perfect trip to explore nature, wildlife, and cultural sites." />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={`${window.location.origin}/wayanadImg.jpg`} />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Hero/>
      <Cards/>
      <Faq/>
      <Footer/>
    </div>
  );
}