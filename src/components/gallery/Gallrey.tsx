import Footer from '../Home/components/Footer';
import { Header } from '../Home/components/Header';
import { HeroSession } from './components/HeroSession';
import { ImageSession } from './components/ImageSession';
import { ResponsiveImageSession } from './components/ResponsiveImageSession';
import { Helmet } from 'react-helmet-async';
 

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://www.kudajadridrizzle.com";
const CANONICAL_URL = `${SITE_URL}/media-gallery`;
const OG_IMAGE = `${SITE_URL}/aboutHero.jpg`;

export const Gallrey = () => {
  // Hardcoded metadata (from public/pagemeta.md)
  const title = 'Photos & videos gallery - Kudajadri Drizzle Homestays';
  const description = 'Browse stunning photos and videos of Kudajadri Drizzle Homestay in Wayanad. Get a visual glimpse of the cozy rooms, scenic surroundings, and peaceful ambiance.';
  return (
    <div>
      <Helmet>
        {/* Browser Tab Title */}
        <title>{title}</title>

        {/* SEO Meta Tags */}
        <meta name="description" content={description} />
        <meta name="keywords" content={''} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Drizzle" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Kudajadri Drizzle" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Canonical URL */}
        <link rel="canonical" href={CANONICAL_URL} />
      </Helmet>

      <Header type="black" />
      <div className="mobile:mt-12">
        <div className="sm:py-24 mobile:pt-8 mobile:pb-12">
          <HeroSession />
          <ImageSession />
          <ResponsiveImageSession />
        </div>
      </div>
      <Footer />
    </div>
  );
};
