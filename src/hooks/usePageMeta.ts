import { useEffect, useState } from 'react';

export type PageType = 'home' | 'about' | 'gallery' | 'rooms' | 'wayanad';

interface PageMetaData {
  title: string;
  description: string;
}

interface AllPageMetaData {
  [key: string]: PageMetaData;
  home: PageMetaData;
  about: PageMetaData;
  gallery: PageMetaData;
  rooms: PageMetaData;
  wayanad: PageMetaData;
}

const usePageMeta = (pageType: PageType) => {
  const [meta, setMeta] = useState<PageMetaData>({ title: '', description: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [allMeta, setAllMeta] = useState<AllPageMetaData | null>(null);

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const response = await fetch('/meta/pagemeta.md');
        if (!response.ok) {
          throw new Error('Failed to fetch page meta data');
        }
        
        const text = await response.text();
        const frontMatter = text.match(/^---\n([\s\S]*?)\n---/);
        
        if (frontMatter) {
          const metaData: any = {};
          const yamlContent = frontMatter[1];
          
          // Parse the YAML content
          const pageSections = yamlContent.split('\n\n');
          
          pageSections.forEach(section => {
            const pageMatch = section.match(/^(\w+):/);
            if (pageMatch) {
              const pageName = pageMatch[1];
              metaData[pageName] = {};
              
              // Extract title and description for each page
              const titleMatch = section.match(/  title: "([^"]+)"/);
              const descMatch = section.match(/  description: "([^"]+)"/);
              
              if (titleMatch) metaData[pageName].title = titleMatch[1];
              if (descMatch) metaData[pageName].description = descMatch[1];
            }
          });
          
          setAllMeta(metaData as AllPageMetaData);
          
          // Set the current page meta
          if (metaData[pageType]) {
            setMeta({
              title: metaData[pageType].title || '',
              description: metaData[pageType].description || ''
            });
          }
        }
      } catch (err) {
        setError(err as Error);
        console.error('Error loading page meta data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeta();
  }, [pageType]);

  // Function to get meta for any page
  const getMetaForPage = (type: PageType): PageMetaData => {
    if (!allMeta) return { title: '', description: '' };
    return allMeta[type] || { title: '', description: '' };
  };

  return {
    meta,
    allMeta: allMeta as AllPageMetaData | null,
    loading,
    error,
    getMetaForPage
  };
};

export default usePageMeta;
