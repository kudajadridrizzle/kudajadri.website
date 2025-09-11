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
      imageAlt: 'Kalpetta homestay heritage building surrounded by greenery',
    },
  ];

  // Static URLs for SEO & SSR safety
  const currentUrl = 'https://www.kudajadridrizzle.com/about';
  const heroImage = 'https://www.kudajadridrizzle.com/aboutHero.jpg';

  // FAQ Structured Data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": parsedFaq.attributes.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // LodgingBusiness Structured Data
  const businessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Kudajadri Drizzle Homestay",
    "description":
      "A 100-year-old heritage Jain ancestral home turned into a homestay in Kalpetta, Wayanad. Offers authentic cuisine, swimming pool, games room, and nature experiences.",
    "url": "https://www.kudajadridrizzle.com",
    "logo": "https://www.kudajadridrizzle.com/logo.png",
    "image": heroImage,
    "telephone": "+91 9946 354 511",
    "email": "kudajadri@ymail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kayakkandy House, MR School Road, Kaniyambetta",
      "addressLocality": "Kalpetta",
      "addressRegion": "Wayanad, Kerala",
      "postalCode": "673121",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.616, // Replace with exact coordinates
      "longitude": 76.083 // Replace with exact coordinates
    },
    "sameAs": [
      "https://www.facebook.com/kudajadrihomestay",
      "https://www.instagram.com/kudajadrihomestay/",
      "https://twitter.com/kudajadrihomestay"
    ],
    "awards": "TripAdvisor Best Traveller Choice 2023"
  };

  return (
    <div className="relative">
      <Header type="white" />
      <Helmet>
        <title>
          Best Homestays in Kalpetta for families, Kalpetta Homestays
        </title>
        <meta
          name="description"
          content="Kudajadri Drizzle Homestay in Kalpetta, Wayanad: Heritage 100-year-old home stay with 5-star reviews on Airbnb & TripAdvisor. Perfect for families, couples, and groups."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />

        {/* Open Graph */}
        <meta property="og:title" content="Kalpetta Homestays: #1 Homestays in Kalpetta with Airbnb Reviews" />
        <meta property="og:description" content="Kudajadri Drizzle Homestay in Kalpetta, Wayanad: Heritage 100-year-old home stay with 5-star reviews on Airbnb & TripAdvisor. Perfect for families, couples, and groups." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Kudajadri Drizzle Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={heroImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kalpetta Homestays: #1 Homestays in Kalpetta with Airbnb Reviews" />
        <meta name="twitter:description" content="Kudajadri Drizzle Homestay in Kalpetta, Wayanad: Heritage 100-year-old home stay with 5-star reviews on Airbnb & TripAdvisor. Perfect for families, couples, and groups." />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={heroImage} />

        {/* Canonical */}
        <link rel="canonical" href={currentUrl} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(businessStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
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
        description="Reaching our Kudajadri Drizzle Wayanad Homestay is simple and hassle-free. The property is well-connected by road from Kozhikode, Bengaluru, and Mysuru, making travel convenient by car, taxi, or bus."
        buttonText="View on Map"
        showMap={true}
      />
      <FaqList {...parsedFaq.attributes} />
      <Footer />
    </div>
  );
};

export default About;
