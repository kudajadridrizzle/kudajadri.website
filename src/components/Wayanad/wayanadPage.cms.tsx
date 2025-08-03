import { Helmet } from "react-helmet-async";
import { Header } from "../Home/components/Header";
import useWayanadCMS from "../../hooks/useWayanadCMS";
import Footer from "../Home/components/Footer";
import { EnhancedAttractionCard } from "./components/EnhancedAttractionCard";
import { ImageManager } from "./components/ImageManager";
import { WayanadFaqs } from "./components/WayanadFaqs";

// FAQ management is handled separately through the CMS faqs collection

const WayanadHero = ({ heroImage, heroTitle }: { heroImage: string; heroTitle: string }) => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className="text-[#ffff] font-staylista sm:text-[72px] h-[100vh] flex flex-col items-center justify-end mobile:text-5xl">
          <h1 className="text-center mb-[114px]">{heroTitle}</h1>
        </div>
      </div>
    </div>
  );
};

// Removed the old AttractionCard component as we're now using EnhancedAttractionCard

export const WayanadPageCMS = () => {
  const { data, loading, error } = useWayanadCMS();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading Wayanad page...</div>;
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error loading Wayanad page: {error?.message || 'Unknown error'}
      </div>
    );
  }

  const { attributes, body } = data;
  const { title, description, keywords, author } = attributes;
  const { heroImage, heroTitle, sections } = attributes;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={author} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${window.location.origin}${heroImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={`${window.location.origin}${heroImage}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <WayanadHero heroImage={heroImage} heroTitle={heroTitle} />

      {/* Attractions Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-ivy font-normal text-gray-900 mb-6">
            Explore the Beauty of Wayanad
          </h2>
          <div 
            className="prose max-w-3xl mx-auto text-gray-600 text-lg"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>

        {/* Attractions List */}
        <div className="space-y-16">
          {sections.map((attraction, index) => (
            <EnhancedAttractionCard
              key={index}
              index={index}
              title={attraction.title}
              description={attraction.description}
              image={attraction.image}
            />
          ))}
        </div>
      </div>

      {/* Optional FAQ Section - managed separately through CMS */}
      <WayanadFaqs />

      <Footer />
      
      {/* Image Manager for Development */}
      {process.env.NODE_ENV === 'development' && <ImageManager />}
    </div>
  );
};

export default WayanadPageCMS;
