import Direction from "../Home/components/Direction"
import Faq from "../Home/components/Faq"
import Footer from "../Home/components/Footer"
import FacilitiesSession from "./components/FacilitiesSession"
import Hero from "./components/Hero"
import ImageSession from "./components/ImageSession"
import ListSession from "./components/ListSession"
import { Helmet } from "react-helmet-async";

const FacilitiesPage = () => {
  return (
    <div>
      <Helmet>
        {/* Browser Tab Title */}
        <title>Facilities & Amenities | Kudajadri Homestay Wayanad - Modern Comforts</title>
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Discover modern facilities and amenities at Kudajadri Homestay in Wayanad. Enjoy WiFi, parking, safety features, and comfortable accommodations for your perfect stay." />
        <meta name="keywords" content="kudajadri homestay facilities, wayanad accommodation amenities, wifi parking safety" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        
        {/* Open Graph Meta Tags for Facebook/WhatsApp */}
        <meta property="og:title" content="Facilities & Amenities | Kudajadri Homestay Wayanad - Modern Comforts" />
        <meta property="og:description" content="Discover modern facilities and amenities at Kudajadri Homestay in Wayanad. Enjoy WiFi, parking, safety features, and comfortable accommodations for your perfect stay." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${window.location.origin}/aboutHero.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Facilities & Amenities | Kudajadri Homestay Wayanad - Modern Comforts" />
        <meta name="twitter:description" content="Discover modern facilities and amenities at Kudajadri Homestay in Wayanad. Enjoy WiFi, parking, safety features, and comfortable accommodations for your perfect stay." />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={`${window.location.origin}/aboutHero.jpg`} />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Hero/>
      <div className="flex flex-col items-center self-stretch gap-16 bg-white mobile:p-4 sm:p-14 sm:flex-row">
        <FacilitiesSession/>
        <ImageSession/>
      </div>
      <ListSession/>
      <Direction/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default FacilitiesPage

