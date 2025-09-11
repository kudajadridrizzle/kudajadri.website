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

  return (
    <div>
      <Helmet>
        <title>
          Wayanad Holiday Tour Packages: Best Trip Deals for Families & Couples
        </title>
        <meta
          name="description"
          content="Discover the best Wayanad holiday tour packages with top deals for families, groups, and couples. Enjoy a perfect getaway with nature, adventure, and comfort."
        />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Tour Packages & Activities | Kudajadri Homestay Wayanad"
        />
        <meta
          property="og:description"
          content="Explore exciting tour packages and activities in Wayanad with Kudajadri Homestay. Discover nature trails, wildlife, and cultural experiences for an unforgettable vacation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content={`${window.location.origin}/wayanadImg.jpg`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tour Packages & Activities | Kudajadri Homestay Wayanad"
        />
        <meta
          name="twitter:description"
          content="Explore exciting tour packages and activities in Wayanad with Kudajadri Homestay. Discover nature trails, wildlife, and cultural experiences for an unforgettable vacation."
        />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta
          name="twitter:image"
          content={`${window.location.origin}/wayanadImg.jpg`}
        />

        {/* Misc */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={currentUrl} />
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
