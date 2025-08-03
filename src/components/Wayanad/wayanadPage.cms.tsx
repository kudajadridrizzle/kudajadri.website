import { Helmet } from 'react-helmet-async';
import useWayanadCMS from '../../hooks/useWayanadCMS';
import Footer from '../Home/components/Footer';
import { EnhancedAttractionCard } from './components/EnhancedAttractionCard';
import { ImageManager } from './components/ImageManager';
import { EnhancedHero } from './components/EnhancedHero';
import { isDevelopment } from '../../utils/env';


export const WayanadPageCMS = () => {
  const { data, loading, error } = useWayanadCMS();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading Wayanad page...
      </div>
    );
  }
  
  //error handling

  if (error || !data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
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
        <meta
          property="og:image"
          content={`${window.location.origin}${heroImage}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta
          name="twitter:image"
          content={`${window.location.origin}${heroImage}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <EnhancedHero heroImage={heroImage} heroTitle={heroTitle} />

      {/* Attractions Section */}
      <div className="px-4 py-16 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-normal text-gray-900 font-ivy">
            Explore the Beauty of Wayanad
          </h2>
          <div
            className="max-w-3xl mx-auto text-lg prose text-gray-600"
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

 

      <Footer />

      {/* Image Manager for Development */}
      {isDevelopment && <ImageManager />}
    </div>
  );
};

export default WayanadPageCMS;
