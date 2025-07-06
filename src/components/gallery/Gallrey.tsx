import Footer from "../Home/components/Footer"
import { Header } from "../Home/components/Header"
import { HeroSession } from "./components/HeroSession"
import { ImageSession } from "./components/ImageSession"
import { ResponsiveImageSession } from "./components/ResponsiveImageSession"
import { Helmet } from "react-helmet-async";
import Faq  from "../Home/components/Faq";


export const Gallrey = () => {
  return (
    <div>
      <Helmet>
        {/* Browser Tab Title */}
        <title>Explore Wayanad Homestay Photos – Cozy & Picturesque Accommodations</title>
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Wayanad homestays photo gallery showcasing beautiful stays, scenic views, and cozy accommodations. Discover the perfect homestay experience in Wayanad for families and couples." />
        <meta name="keywords" content="wayanad homestay photos, accommodation gallery, scenic views, cozy stays, kudajadri gallery" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        
        {/* Open Graph Meta Tags for Facebook/WhatsApp */}
        <meta property="og:title" content="Explore Wayanad Homestay Photos – Cozy & Picturesque Accommodations" />
        <meta property="og:description" content="Wayanad homestays photo gallery showcasing beautiful stays, scenic views, and cozy accommodations. Discover the perfect homestay experience in Wayanad for families and couples." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${window.location.origin}/aboutHero.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Explore Wayanad Homestay Photos – Cozy & Picturesque Accommodations" />
        <meta name="twitter:description" content="Wayanad homestays photo gallery showcasing beautiful stays, scenic views, and cozy accommodations. Discover the perfect homestay experience in Wayanad for families and couples." />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={`${window.location.origin}/aboutHero.jpg`} />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
        <Header type="black"/>
        <div className="mobile:mt-12">

        <div className="sm:py-24 mobile:pt-8 mobile:pb-12">
            <HeroSession/>
            <ImageSession/>
            <ResponsiveImageSession/>
        </div>
        </div>
        <Faq/>
        <Footer/>
      
    </div>
  )
}

