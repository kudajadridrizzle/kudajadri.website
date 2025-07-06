import { Header } from "../Home/components/Header";
import Faq  from "../Home/components/Faq";
import Footer from "../Home/components/Footer";
import { Helmet } from "react-helmet-async";

export const FaqPage = () => {
  return (
    <div>
      <Helmet>
        {/* Browser Tab Title */}
        <title>FAQ - Frequently Asked Questions | Kudajadri Homestay Wayanad</title>
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Find answers to frequently asked questions about Kudajadri Homestay in Wayanad. Information about bookings, amenities, location, and more for your perfect stay." />
        <meta name="keywords" content="kudajadri homestay faq, wayanad homestay questions, booking information, accommodation details" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        
        {/* Open Graph Meta Tags for Facebook/WhatsApp */}
        <meta property="og:title" content="FAQ - Frequently Asked Questions | Kudajadri Homestay Wayanad" />
        <meta property="og:description" content="Find answers to frequently asked questions about Kudajadri Homestay in Wayanad. Information about bookings, amenities, location, and more for your perfect stay." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${window.location.origin}/aboutHero.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ - Frequently Asked Questions | Kudajadri Homestay Wayanad" />
        <meta name="twitter:description" content="Find answers to frequently asked questions about Kudajadri Homestay in Wayanad. Information about bookings, amenities, location, and more for your perfect stay." />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={`${window.location.origin}/aboutHero.jpg`} />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
        <Header type="black"/>
        <div className="mobile:mt-12 md:mt-24">
        {/* <HeroSession/> */}
        <Faq/>
        </div>
        <Footer/>
      
    </div>
  );
};
