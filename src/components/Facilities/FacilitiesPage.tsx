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
import usePageMeta from '../../hooks/usePageMeta';

// Define the shape of FAQ frontmatter
interface FaqFrontMatterAttributes {
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://www.kudajadridrizzle.com";
const CANONICAL_URL = `${SITE_URL}/facilities-amenities`;
const OG_IMAGE = `${SITE_URL}/aboutHero.jpg`;

const FacilitiesPage = () => {
  const parsedFaq = fm<FaqFrontMatterAttributes>(facilitiesFaqRaw);
  const { meta, loading, error } = usePageMeta('facilities');

  if (loading) return <div>Loading...</div>;
  if (error) console.error('Error loading page metadata:', error);

  return (
    <div>
      <Helmet>
        <title>{meta?.title || 'Facilities at Kudajadri Drizzle'}</title>
        <meta name="description" content={meta?.description || 'Experience premium facilities at Kudajadri Drizzle. Enjoy modern amenities and excellent services.'} />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />

        {/* Open Graph */}
        <meta property="og:title" content={meta?.title || 'Facilities at Kudajadri Drizzle'} />
        <meta property="og:description" content={meta?.description || 'Experience premium facilities at Kudajadri Drizzle. Enjoy modern amenities and excellent services.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta?.title || 'Facilities at Kudajadri Drizzle'} />
        <meta name="twitter:description" content={meta?.description || 'Experience premium facilities at Kudajadri Drizzle. Enjoy modern amenities and excellent services.'} />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* General */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": meta?.title || 'Facilities at Kudajadri Drizzle',
            "description": meta?.description || 'Experience premium facilities at Kudajadri Drizzle. Enjoy modern amenities and excellent services.',
            "url": CANONICAL_URL,
            "publisher": {
              "@type": "Organization",
              "name": "Kudajadri Homestay",
              "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/logo.png`
              }
            }
          })}
        </script>
      </Helmet>

      <Hero />
      <main className="flex flex-col items-center self-stretch gap-16 bg-white mobile:p-4 sm:p-14 sm:flex-row 2xl:px-[18%] lg:px-[12%]">
        <FacilitiesSession />
      </main>
      <ListSession />
      <FacilitiesAccordion />
      <Direction
        title="Swimming Pool Homestays in Wayanad – How to Reach"
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
