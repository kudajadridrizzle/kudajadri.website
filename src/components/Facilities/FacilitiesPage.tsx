import { Helmet } from 'react-helmet-async';
import fm from 'front-matter';
import Direction from '../Home/components/Direction';
import Footer from '../Home/components/Footer';
import FacilitiesSession from './components/FacilitiesSession';
import Hero from './components/Hero';
import ListSession from './components/ListSession';
import facilitiesFaqRaw from '../../File/facilitiesfaqs.md?raw';
import FaqList from '../FaqComponent/FaqList';
import FacilitiesAccordion from './components/FacilitiesAccordion';

// Define the shape of FAQ frontmatter
interface FaqFrontMatterAttributes {
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://www.kudajadridrizzle.com";
const CANONICAL_URL = `${SITE_URL}/facilities`;
const OG_IMAGE = `${SITE_URL}/aboutHero.jpg`;

const FacilitiesPage = () => {
  const parsedFaq = fm<FaqFrontMatterAttributes>(facilitiesFaqRaw);

  return (
    <div>
      <Helmet>
        <title>
          Swimming pool homestays in Wayanad: homestay with swimming pool
        </title>
        <meta
          name="description"
          content="Homestays in Wayanad with swimming pools offer the best facilities, comfort, and scenic views for a perfect relaxing getaway with family and friends."
        />

        <meta name="keywords" content="" />

  
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Swimming pool homestays in Wayanad: homestay with swimming pool"
        />
        <meta
          property="og:description"
          content="Homestays in Wayanad with swimming pools offer the best facilities, comfort, and scenic views for a perfect relaxing getaway with family and friends."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Swimming pool homestays in Wayanad: homestay with swimming pool"
        />
        <meta
          name="twitter:description"
          content="Homestays in Wayanad with swimming pools offer the best facilities, comfort, and scenic views for a perfect relaxing getaway with family and friends."
        />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Misc */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={CANONICAL_URL} />
      </Helmet>

      <Hero />
      <div className="flex flex-col items-center self-stretch gap-16 bg-white mobile:p-4 sm:p-14 sm:flex-row 2xl:px-[18%] lg:px-[12%]">
        <FacilitiesSession />
      </div>
      <ListSession />
      <FacilitiesAccordion />
      <Direction
        title="Wayanad Homestays with Pools – How to Reach"
        description="Reaching our Kudajadri Drizzle Wayanad Homestay is simple and hassle-free. The property is well-connected by road from Kozhikode, Bengaluru, and Mysuru, making travel convenient by car, taxi, or bus. Along the way, you’ll pass through scenic hills and lush plantations, offering a beautiful glimpse of Wayanad’s charm even before you arrive. The journey is smooth, pleasant, and sets the tone for a relaxing stay."
        buttonText="View on Map"
        showMap={true}
      />
      <FaqList {...parsedFaq.attributes} />
      <Footer />
    </div>
  );
};

export default FacilitiesPage;
