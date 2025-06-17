import { useEffect } from 'react';

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const usePageMetadata = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage
}: PageMetadata) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords || '');

    // Update Open Graph tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    if (ogTitle) updateOrCreateMeta('og:title', ogTitle);
    if (ogDescription) updateOrCreateMeta('og:description', ogDescription);
    if (ogImage) updateOrCreateMeta('og:image', ogImage);
  }, [title, description, keywords, ogTitle, ogDescription, ogImage]);
}; 