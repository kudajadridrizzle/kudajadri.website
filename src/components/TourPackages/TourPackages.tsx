import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import Hero from '../About/components/Hero';
import Direction from '../Home/components/Direction';
import Footer from '../Home/components/Footer';
import { Packages } from './components/packages';
import fm from 'front-matter';
import tourPackagesFaqRaw from '../../File/tourpackagesfaqs.md?raw';
import FaqList from '../FaqComponent/FaqList';
import HeroContent from './components/HeroContent';
import TourCategories from './components/TourCategories';
 

// Define FAQ frontmatter type
interface FaqFrontMatterAttributes {
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const TourPackages = () => {
  const parsedFaq = fm<FaqFrontMatterAttributes>(tourPackagesFaqRaw);
  const [currentUrl, setCurrentUrl] = useState(
    'https://www.kudajadridrizzle.com/tour-packages'
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const defaultTitle = 'Wayanad holiday tour packages: Best trip deals for families & couples';
  const defaultDescription = 'Discover the best Wayanad holiday tour packages with top deals for families, groups, and couples. Enjoy a perfect getaway with nature, adventure, and comfort.';

  return (
    <div>
      <Helmet>
        <title>{defaultTitle}</title>
        <meta
          name="description"
          content={defaultDescription}
        />
        <meta name="keywords" content="Wayanad tour packages, holiday packages Wayanad, family tour packages, couple packages Wayanad, weekend getaways Wayanad" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />

        {/* Open Graph */}
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://kudajadridrizzle.com/tour-packages-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content="https://kudajadridrizzle.com/tour-packages-preview.jpg" />

        <link rel="canonical" href={currentUrl} />

        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TouristAttraction',
            'name': defaultTitle,
            'description': defaultDescription,
            'url': currentUrl,
            'image': 'https://kudajadridrizzle.com/tour-packages-preview.jpg',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Wayanad',
              'addressRegion': 'Kerala',
              'addressCountry': 'IN'
            },
            'offers': {
              '@type': 'Offer',
              'url': currentUrl,
              'priceCurrency': 'INR',
              'availability': 'https://schema.org/InStock'
            }
          })}
        </script>
      </Helmet>

      <Hero />
      <HeroContent />
      <Packages />
      <TourCategories />
      <Direction />
      <FaqList {...parsedFaq.attributes} />
      <Footer />
    </div>
  );
};
