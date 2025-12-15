import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';
import { Helmet } from 'react-helmet-async';
import fm from 'front-matter';
import homeFaqRaw from '../../File/homefaqs.md?raw';
import { ContentSection } from '../shared';
import { useContentSection } from '../../hooks/useContentSection';
import { Suspense, lazy } from 'react';
import heroDesktop from '../../assets/locationImage.webp';
import heroMobile from '../../assets/mobileheroimg.jpg';

// Define the shape of FAQ frontmatter
interface FaqFrontMatterAttributes {
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const AboutSession = lazy(() => import('./components/AboutSession'));
const Amenities = lazy(() => import('./components/Amenities'));
const Direction = lazy(() => import('./components/Direction'));
const GallarySession = lazy(() => import('./components/GallarySession'));
const IndividualRooms = lazy(() => import('./components/IndividualRooms').then(m => ({ default: m.IndividualRooms })));
const LocationImage = lazy(() => import('./components/LocationImage'));
const OurGallery = lazy(() => import('./components/OurGallery'));
const ReviewSession = lazy(() => import('./components/ReviewSession'));
const RoomSession = lazy(() => import('./components/RoomSession'));
const GuestTestimonials = lazy(() => import('./components/GuestTestimonials'));
const CardSection = lazy(() => import('./components/CardSection'));
const FaqList = lazy(() => import('../FaqComponent/FaqList'));

const Home = () => {
  const parsedFaq = fm<FaqFrontMatterAttributes>(homeFaqRaw);
  const content: FaqFrontMatterAttributes = {
    title: parsedFaq.attributes.title || 'Frequently Asked Questions',
    faqs: parsedFaq.attributes.faqs || [],
  };
  const contentSection = useContentSection('home');
  // Hardcoded SEO metadata (migrated from src/File/homemeta.md)
  const siteUrl = "https://www.kudajadridrizzle.com";
  const canonicalUrl = siteUrl + "/";
  const title = "Wayanad homestays: Best homestay in Wayanad for family, groups";
  const description = "Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay: Book top rated nature friendly Homestays in Wayanad for Family & Group.";
  const image = `${siteUrl}/aboutHero.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Kudajadri Drizzle Homestay",
    description,
    url: siteUrl,
    image,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kayakkandy House, MR School Road, Kaniyambetta",
      addressLocality: "Kalpetta",
      addressRegion: "Wayanad",
      postalCode: "673122",
      addressCountry: "India",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.6854,
      longitude: 76.1320,
    },
    priceRange: "₹₹",
    telephone: "+91 9946 354 511", // ✅ use real number
    sameAs: [
      "https://www.facebook.com/kudajadrihomestay",
      "https://www.instagram.com/kudajadrihomestay/",
      "https://twitter.com/kudajadrihomestay"
    ],
  };

  // Render the page even while meta is loading to avoid showing a loading text

  return (
    <div>
      <Helmet>
        {/* Basic SEO */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content=""
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Drizzle Homestay" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Preload LCP images (desktop and mobile) */}
        <link
          rel="preload"
          as="image"
          href={heroDesktop}
          fetchPriority="high"
          imageSizes="100vw"
        />
        <link
          rel="preload"
          as="image"
          href={heroMobile}
          fetchPriority="high"
          imageSizes="100vw"
          media="(max-width: 767px)"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Kudajadri Drizzle Homestay" />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={new Date().toISOString()} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={image} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <VideoBackground />
      <Suspense fallback={<div />}> 
        <AboutSession />
      </Suspense>
      <Suspense fallback={<div />}> 
        <GallarySession />
      </Suspense>
      <Suspense fallback={<div />}> 
        <RoomSession />
      </Suspense>
      <Suspense fallback={<div />}> 
        <IndividualRooms />
      </Suspense>
      <Suspense fallback={<div />}> 
        <Amenities />
      </Suspense>
      <Suspense fallback={<div />}> 
        <OurGallery />
      </Suspense>
      <Suspense fallback={<div />}> 
        <ReviewSession />
      </Suspense>
      <Suspense fallback={<div />}> 
        <GuestTestimonials />
      </Suspense>
      <Suspense fallback={<div />}> 
        <LocationImage />
      </Suspense>
      <Suspense fallback={<div />}> 
        <Direction />
      </Suspense>
      {contentSection && (
        <ContentSection
          title={contentSection.title}
          items={contentSection.items}
        />
      )}
      <Suspense fallback={<div />}> 
        <CardSection sectionKey="facilities" className="bg-gray-50" />
      </Suspense>
      <Suspense fallback={<div />}> 
        <FaqList {...content} />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;
