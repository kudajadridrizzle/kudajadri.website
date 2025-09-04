import AboutSession from './components/AboutSession';
import Amenities from './components/Amenities';
import Direction from './components/Direction';
import Footer from './components/Footer';
import GallarySession from './components/GallarySession';
import { IndividualRooms } from './components/IndividualRooms';
import LocationImage from './components/LocationImage';
import OurGallery from './components/OurGallery';
import ReviewSession from './components/ReviewSession';
import RoomSession from './components/RoomSession';
import VideoBackground from './components/VideoBackground';
import { Helmet } from 'react-helmet-async';
import fm from 'front-matter';
import homeFaqRaw from '../../File/homefaqs.md?raw';
import FaqList from '../FaqComponent/FaqList';
import { ContentSection } from '../shared';
import { useContentSection } from '../../hooks/useContentSection';
import CardSection from './components/CardSection';
import GuestTestimonials from './components/GuestTestimonials';

// Define the shape of FAQ frontmatter
interface FaqFrontMatterAttributes {
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const Home = () => {
  const parsedFaq = fm<FaqFrontMatterAttributes>(homeFaqRaw);
  const content: FaqFrontMatterAttributes = {
    title: parsedFaq.attributes.title || 'Frequently Asked Questions',
    faqs: parsedFaq.attributes.faqs || [],
  };
  const contentSection = useContentSection('home');

  const siteUrl = "https://www.kudajadridrizzle.com";
  const canonicalUrl = siteUrl + "/";
  const title =
    "Wayanad homestays: Best homestay in Wayanad for family, group";
  const description =
    "Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay: Book top rated nature friendly Homestays in Wayanad for Family & Group.";
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
      <AboutSession />
      <GallarySession />
      <RoomSession />
      <IndividualRooms />
      <Amenities />
      <OurGallery />
      <ReviewSession />
      <GuestTestimonials />
      <LocationImage />
      <Direction />
      {contentSection && (
        <ContentSection
          title={contentSection.title}
          items={contentSection.items}
        />
      )}
      <CardSection sectionKey="facilities" className="bg-gray-50" />
      <FaqList {...content} />
      <Footer />
    </div>
  );
};

export default Home;
