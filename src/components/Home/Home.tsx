import AboutSession from './components/AboutSession';
import Amenities from './components/Amenities';
import CardsSection from './components/CardsSection';
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
import heritage1 from '../../assets/heritage1.jpg';
import { cardsData } from './components/cardsData';

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

  // Sample content for the ContentSection
  const contentItems = [
    {
      image: heritage1,
      title: "Heritage Homestay Experience",
      paragraph: "Step into a world of timeless elegance at Kudajadri Homestay, where every corner tells a story of our rich heritage. Our 100-year-old property has been lovingly preserved to offer you an authentic experience that combines the charm of yesteryears with modern comforts. The traditional architecture, antique furnishings, and warm hospitality create an atmosphere that transports you to a bygone era while ensuring your stay is nothing short of luxurious. Our heritage rooms are thoughtfully designed to maintain the original character while providing all the amenities you need for a comfortable stay. Experience the perfect blend of history and hospitality as you immerse yourself in the cultural richness of our homestay.",
      imageAlt: "Heritage homestay exterior"
    }
  ];

  return (
    <div>
      <Helmet>
        <title>
          Wayanad homestays: Best homestay in Wayanad for family, group
        </title>
        <meta
          name="description"
          content="Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay. Book top-rated, nature-friendly homestays in Wayanad for family & group stays."
        />
        <meta
          name="keywords"
          content="wayanad homestays, best homestay wayanad, family accommodation, couple stays, kudajadri homestay"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        <meta
          property="og:title"
          content="Wayanad homestays: Best homestay in Wayanad for family, group"
        />
        <meta
          property="og:description"
          content="Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay. Book top-rated, nature-friendly homestays in Wayanad for family & group stays."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content={`${window.location.origin}/aboutHero.jpg`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Wayanad homestays: Best homestay in Wayanad for family, group"
        />
        <meta
          name="twitter:description"
          content="Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay. Book top-rated, nature-friendly homestays in Wayanad for family & group stays."
        />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta
          name="twitter:image"
          content={`${window.location.origin}/aboutHero.jpg`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <VideoBackground />
      <AboutSession />
      <GallarySession />
      <RoomSession />
      <IndividualRooms />
      <Amenities />
      <OurGallery />
      <ReviewSession />
      <LocationImage />
      <Direction />
      <ContentSection
        title="Discover Our Homestay"
        items={contentItems}
      />
      <CardsSection
        title="Attractions Near Kudajadri Drizzle Homestay Wayanad"
        subtitle="Experience"
        cards={cardsData}
      />
      <FaqList {...content} />

      <Footer />
    </div>
  );
};

export default Home;
