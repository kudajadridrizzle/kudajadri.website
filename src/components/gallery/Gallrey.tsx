import Footer from '../Home/components/Footer';
import { Header } from '../Home/components/Header';
import { HeroSession } from './components/HeroSession';
import { ImageSession } from './components/ImageSession';
import { ResponsiveImageSession } from './components/ResponsiveImageSession';
import { Helmet } from 'react-helmet-async';

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://www.kudajadridrizzle.com";
const CANONICAL_URL = `${SITE_URL}/gallery`;
const OG_IMAGE = `${SITE_URL}/aboutHero.jpg`;

export const Gallrey = () => {
  return (
    <div>
      <Helmet>
        {/* Browser Tab Title */}
        <title>
          Photos & Videos Gallery - Kudajadri Drizzle Homestays in Wayanad
        </title>

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Browse stunning photos and videos of Kudajadri Drizzle Homestay in Wayanad. Get a visual glimpse of the cozy rooms, scenic surroundings, and peaceful ambiance."
        />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Photos & Videos Gallery - Kudajadri Drizzle Homestays in Wayanad"
        />
        <meta
          property="og:description"
          content="Browse stunning photos and videos of Kudajadri Drizzle Homestay in Wayanad. Get a visual glimpse of the cozy rooms, scenic surroundings, and peaceful ambiance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Photos & Videos Gallery - Kudajadri Drizzle Homestays in Wayanad"
        />
        <meta
          name="twitter:description"
          content="Browse stunning photos and videos of Kudajadri Drizzle Homestay in Wayanad. Get a visual glimpse of the cozy rooms, scenic surroundings, and peaceful ambiance."
        />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
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
