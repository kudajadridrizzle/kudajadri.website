import Footer from '../Home/components/Footer';
import ReviewSession from './components/ReviewSession';
import AboutSession from './components/AboutSession';
import Hero from './components/Hero';
import RecognitionSession from './components/RecognitionSession';
import { ContentSection } from '../shared/ContentSection';
import { Helmet } from 'react-helmet-async';
import fm from 'front-matter';
import aboutFaqRaw from '../../File/aboutfaqs.md?raw';
import FaqList from '../FaqComponent/FaqList';
import { Header } from '../Home/components/Header';
import Direction from '../Home/components/Direction';

// Define the shape of FAQ frontmatter
interface FaqFrontMatterAttributes {
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const About = () => {
  const parsedFaq = fm<FaqFrontMatterAttributes>(aboutFaqRaw);

  const contentItems = [
    {
      image: 'images/1 (1).jpg',
      title: 'Nature and heritage at Kalpetta homestays',
      paragraph:
        'Whether for a family vacation, honeymoon, or solo trip, Kudajadri Drizzle offers a perfect combination of heritage, comfort, and natural beauty. Guests can relax, enjoy authentic cuisine, and immerse themselves in Wayanad’s culture. Book your stay at one of the most loved Kalpetta homestays for an unforgettable retreat surrounded by the tranquility of the Western Ghats, rich heritage, and warm hospitality. Kudajadri Drizzle is where nature, comfort, and culture meet to create a truly exceptional stay.',
      imageAlt: 'Description of the image',
    },
  ];

  return (
    <div className="relative">
      <Header type="white" />
      <Helmet>
        <title>
          Kalpetta Homestays: #1 Homestays in Kalpetta with Airbnb reviews
        </title>
        <meta
          name="description"
          content="Kudajadri Drizzle Homestay in Kalpetta, Wayanad: #1 Kalpetta Home stay with 5 star reviews on Airbnb, TripAdvisor. Homestay cottage for family & group."
        />
        <meta
          name="keywords"
          content="kalpetta homestays, best homestay kalpetta, family accommodation, couple stays, kudajadri homestay"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Kalpetta Homestays: #1 Homestays in Kalpetta with Airbnb reviews"
        />
        <meta
          property="og:description"
          content="Kudajadri Drizzle Homestay in Kalpetta, Wayanad: #1 Kalpetta Home stay with 5 star reviews on Airbnb, TripAdvisor. Homestay cottage for family & group."
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

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kalpetta Homestays: #1 Homestays in Kalpetta with Airbnb reviews"
        />
        <meta
          name="twitter:description"
          content="Kudajadri Drizzle Homestay in Kalpetta, Wayanad: #1 Kalpetta Home stay with 5 star reviews on Airbnb, TripAdvisor. Homestay cottage for family & group."
        />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta
          name="twitter:image"
          content={`${window.location.origin}/aboutHero.jpg`}
        />

        {/* Misc */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Hero />
      <AboutSession />
      <ReviewSession />
      <RecognitionSession />
      <ContentSection
        title="Experience Kudajadri Drizzle – Your Kalpetta Homestay Retreat"
        items={contentItems}
      />
      <Direction
        title="Kalpetta Homestays with Pools – How to Reach"
        description="Reaching our Kudajadri Drizzle Wayanad Homestay is simple and hassle-free. The property is well-connected by road from Kozhikode, Bengaluru, and Mysuru, making travel convenient by car, taxi, or bus. Along the way, you’ll pass through scenic hills and lush plantations, offering a beautiful glimpse of Wayanad’s charm even before you arrive. The journey is smooth, pleasant, and sets the tone for a relaxing stay."
        buttonText="View on Map"
        showMap={true}
      />
      <FaqList {...parsedFaq.attributes} />
      <Footer />
    </div>
  );
};

export default About;
