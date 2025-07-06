import { useEffect } from 'react';

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  ogSiteName?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterSite?: string;
}

export const usePageMetadata = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  ogUrl,
  ogSiteName = 'Kudajadri Homestay',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterSite = '@kudajadrihomestay'
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

    // Update or create meta tags
    const updateOrCreateMeta = (property: string, content: string, isProperty = true) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Open Graph tags
    updateOrCreateMeta('og:title', ogTitle || title);
    updateOrCreateMeta('og:description', ogDescription || description);
    if (ogImage) updateOrCreateMeta('og:image', ogImage);
    updateOrCreateMeta('og:type', ogType);
    if (ogUrl) updateOrCreateMeta('og:url', ogUrl);
    updateOrCreateMeta('og:site_name', ogSiteName);
    updateOrCreateMeta('og:locale', 'en_US');

    // Twitter Card tags
    updateOrCreateMeta('twitter:card', twitterCard, false);
    updateOrCreateMeta('twitter:title', twitterTitle || title, false);
    updateOrCreateMeta('twitter:description', twitterDescription || description, false);
    if (twitterImage) updateOrCreateMeta('twitter:image', twitterImage, false);
    updateOrCreateMeta('twitter:site', twitterSite, false);

    // Additional meta tags
    updateOrCreateMeta('robots', 'index, follow', false);
    updateOrCreateMeta('author', 'Kudajadri Homestay', false);
    updateOrCreateMeta('viewport', 'width=device-width, initial-scale=1.0', false);
    
    // Canonical URL
    if (ogUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', ogUrl);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, ogUrl, ogSiteName, twitterCard, twitterTitle, twitterDescription, twitterImage, twitterSite]);
}; 