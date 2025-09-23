import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import Footer from '../Home/components/Footer';
import usePageMeta, { PageType } from '../../hooks/usePageMeta';
import { EnhancedAttractionCard } from './components/EnhancedAttractionCard';
import { EnhancedHero } from './components/EnhancedHero';
import { WayanadFaqs } from './components/WayanadFaqs';
import wayanadData from './Data/wayanadPageData.json';
import { ContentSection } from '../shared';
import { useContentSection } from '../../hooks/useContentSection';

export const WayanadPage = () => {
  const { pageMetadata, heroSection, attractions, faqs } = wayanadData;
  const { meta } = usePageMeta('wayanad' as PageType);
  const contentSection = useContentSection('wayanad');
  const [currentUrl, setCurrentUrl] = useState('https://www.kudajadridrizzle.com/wayanad');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>{meta?.title || pageMetadata.title}</title>
        <meta name="description" content={meta?.description || pageMetadata.description} />
        <meta name="keywords" content="" />
        <meta name="robots" content={meta?.robots || pageMetadata.robots} />
        <meta name="author" content={meta?.author || pageMetadata.author} />

        {/* Open Graph */}
        <meta property="og:title" content={meta?.title || pageMetadata.title} />
        <meta property="og:description" content={meta?.description || pageMetadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta?.title || pageMetadata.title} />
        <meta name="twitter:description" content={meta?.description || pageMetadata.description} />
        <meta name="twitter:site" content="@kudajadrihomestay" />

        {/* Misc */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={currentUrl} />
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

      {/* Shared Content Section */}
      {contentSection && (
        <ContentSection
          title={contentSection.title}
          items={contentSection.items}
        />
      )}

      {/* FAQ Section */}
      <WayanadFaqs faqs={faqs} />

      <Footer />
    </div>
  );
};

export default WayanadPage;
