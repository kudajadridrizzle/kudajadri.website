import { useState, useEffect } from 'react';

type PageType = 'home' | 'about' | 'rooms' | 'wayanad' | 'default';

interface SeoData {
  metaTitle: string;
  metaDescription: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const useSeoMetadata = (pageType: PageType = 'default', initialData: Partial<SeoData> = {}) => {
  const [seoData, setSeoData] = useState<SeoData>({
    metaTitle: '',
    metaDescription: '',
    ...initialData
  });

  const updateSeoData = (newData: Partial<SeoData>) => {
    setSeoData(prev => ({
      ...prev,
      ...newData
    }));
  };

  // Update document head when seoData changes
  useEffect(() => {
    // Set default values based on page type if not provided
    const defaultTitle = {
      home: 'Kudajadri - Luxury Homestay in Wayanad',
      about: 'About Kudajadri - Experience the Best of Wayanad',
      rooms: 'Luxury Rooms & Accommodation - Kudajadri',
      wayanad: 'Explore Wayanad - Kudajadri Homestay',
      default: 'Kudajadri - Your Perfect Getaway in Wayanad'
    }[pageType];

    const defaultDescription = {
      home: 'Experience luxury and comfort at Kudajadri, your perfect homestay in the heart of Wayanad. Book your stay now for an unforgettable experience.',
      about: 'Discover the beauty of Wayanad with Kudajadri. Experience luxury amidst nature with our premium accommodations and exceptional hospitality.',
      rooms: 'Discover our luxurious rooms and suites at Kudajadri, designed to provide the ultimate comfort during your stay in Wayanad.',
      wayanad: 'Explore the breathtaking beauty of Wayanad with Kudajadri. Discover local attractions, wildlife, and natural wonders.',
      default: 'Experience the best of Wayanad with Kudajadri Homestay. Luxury accommodations in the heart of nature.'
    }[pageType];

    const title = seoData.metaTitle || defaultTitle;
    const description = seoData.metaDescription || defaultDescription;

    if (title) {
      document.title = title;
    }

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (description) {
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph tags
    const updateOpenGraphTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    if (seoData.ogTitle) updateOpenGraphTag('og:title', seoData.ogTitle);
    if (seoData.ogDescription) updateOpenGraphTag('og:description', seoData.ogDescription);
    if (seoData.ogImage) updateOpenGraphTag('og:image', seoData.ogImage);

    // Update canonical URL if provided
    if (seoData.canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', seoData.canonicalUrl);
    }

    // Cleanup function
    return () => {
      // Reset document title to default
      document.title = 'Kudajadri - Your Perfect Getaway in Wayanad';
    };
  }, [seoData, pageType]);

  return {
    seoData,
    updateSeoData,
    setSeoData
  };
};

export default useSeoMetadata;
