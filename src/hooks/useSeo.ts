import { useEffect } from 'react';
import usePageMeta, { PageType } from './usePageMeta';

const useSeo = (pageType: PageType) => {
  const { meta, loading, error } = usePageMeta(pageType);

  useEffect(() => {
    if (loading || error) return;

    // Update document title
    if (meta.title) {
      document.title = meta.title;
    }

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (meta.description) {
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', meta.description);
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

    // Set default Open Graph tags
    updateOpenGraphTag('og:title', meta.title || 'Kudajadri - Your Perfect Getaway in Wayanad');
    updateOpenGraphTag('og:description', meta.description || 'Experience the best of Wayanad with Kudajadri Homestay. Luxury accommodations in the heart of nature.');
    
    // Update canonical URL if needed
    if (typeof window !== 'undefined') {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', window.location.href.split('?')[0]);
    }

    // Cleanup function
    return () => {
      document.title = 'Kudajadri - Your Perfect Getaway in Wayanad';
    };
  }, [meta, loading, error]);

  return { meta, loading, error };
};

export default useSeo;
