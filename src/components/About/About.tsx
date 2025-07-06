import Footer from "../Home/components/Footer";
import ReviewSession from "../Home/components/ReviewSession";
import AboutSession from "./components/AboutSession";
import Hero from "./components/Hero";
import RecognitionSession from "./components/RecognitionSession";
import { Helmet } from "react-helmet-async";
import Faq  from "../Home/components/Faq";


const About = () => {
  return (
    <div>
      <Helmet>
        {/* Browser Tab Title */}
        <title>Kalpetta homestays: Top homestay in Kalpetta for family & couple</title>
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Kalpetta homestays provide a peaceful retreat for families and couples. Discover the best homestays in Kalpetta with modern amenities and authentic experiences." />
        <meta name="keywords" content="kalpetta homestays, best homestay kalpetta, family accommodation, couple stays, kudajadri homestay" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        
        {/* Open Graph Meta Tags for Facebook/WhatsApp */}
        <meta property="og:title" content="Kalpetta homestays: Top homestay in Kalpetta for family & couple" />
        <meta property="og:description" content="Kalpetta homestays provide a peaceful retreat for families and couples. Discover the best homestays in Kalpetta with modern amenities and authentic experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${window.location.origin}/aboutHero.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kalpetta homestays: Top homestay in Kalpetta for family & couple" />
        <meta name="twitter:description" content="Kalpetta homestays provide a peaceful retreat for families and couples. Discover the best homestays in Kalpetta with modern amenities and authentic experiences." />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={`${window.location.origin}/aboutHero.jpg`} />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Hero />
      <AboutSession/>
      <ReviewSession />
      <RecognitionSession/>
      <Faq/>
      <Footer/>
    </div>
  );
};

export default About;
