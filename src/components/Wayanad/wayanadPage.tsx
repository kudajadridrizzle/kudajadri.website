import { Helmet } from 'react-helmet-async';
import Footer from '../Home/components/Footer';
import { EnhancedAttractionCard } from './components/EnhancedAttractionCard';
import { EnhancedHero } from './components/EnhancedHero';
import { WayanadFaqs } from './components/WayanadFaqs';
import wayanadData from './Data/wayanadPageData.json';

export const WayanadPage = () => {
  const { pageMetadata, heroSection, attractions, faqs } = wayanadData;

  return (
    <div>
      <Helmet>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords} />
        <meta name="robots" content={pageMetadata.robots} />
        <meta name="author" content={pageMetadata.author} />
        <meta property="og:title" content={pageMetadata.title} />
        <meta property="og:description" content={pageMetadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <EnhancedHero 
        heroImage="/images/wayanadImg.jpg" 
        heroTitle={heroSection.heroTitle} 
      />

      {/* Hero Description Section */}
      <div className="px-4 py-16 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-normal text-gray-900 font-ivy">
            {heroSection.heroTitle}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {heroSection.heroDescription}
          </p>
        </div>
      </div>

      {/* Attractions Section */}
      <div className="px-4 py-16 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-normal text-gray-900 font-ivy">
            Explore the Beauty of Wayanad
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Discover the most captivating tourist attractions and destinations that make Wayanad a paradise for nature lovers and adventure seekers.
          </p>
        </div>

        {/* Attractions List */}
        <div className="space-y-16">
          {attractions.map((attraction, index) => (
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

      {/* FAQ Section */}
      <WayanadFaqs faqs={faqs} />

      <Footer />
    </div>
  );
};

export default WayanadPage;
