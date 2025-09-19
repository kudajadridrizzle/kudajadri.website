import Footer from '../Home/components/Footer';
import { Header } from '../Home/components/Header';
import { HeroSession } from './components/HeroSession';
import { ImageSession } from './components/ImageSession';
import { ResponsiveImageSession } from './components/ResponsiveImageSession';
import { Helmet } from 'react-helmet-async';
import usePageMeta, { PageType } from '../../hooks/usePageMeta';

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://www.kudajadridrizzle.com";
const CANONICAL_URL = `${SITE_URL}/media-gallery`;
const OG_IMAGE = `${SITE_URL}/aboutHero.jpg`;

export const Gallrey = () => {
  const { meta } = usePageMeta('gallery' as PageType);
  return (
    <div>
      <Helmet>
        {/* Browser Tab Title */}
        <title>{meta?.title || 'Gallery - Kudajadri Drizzle'}</title>

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content={meta?.description || 'Browse stunning photos and videos of Kudajadri Drizzle Homestay in Wayanad'}
        />
        <meta name="keywords" content={meta?.keywords || ''} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Drizzle" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={meta?.ogTitle || meta?.title || 'Gallery - Kudajadri Drizzle'}
        />
        <meta
          property="og:description"
          content={meta?.ogDescription || meta?.description || 'Explore our gallery showcasing the beautiful Kudajadri Drizzle Homestay in Wayanad'}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Kudajadri Drizzle" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={meta?.ogImage || OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={meta?.twitterTitle || meta?.title || 'Gallery - Kudajadri Drizzle'}
        />
        <meta
          name="twitter:description"
          content={meta?.twitterDescription || meta?.description || 'Explore our gallery showcasing the beautiful Kudajadri Drizzle Homestay in Wayanad'}
        />
        <meta name="twitter:image" content={meta?.ogImage || OG_IMAGE} />

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
