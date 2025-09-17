import { useEffect, useState } from 'react';
import * as yaml from 'js-yaml';

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
        console.log('Fetching metadata from /meta/pagemeta.md');
        const response = await fetch('/meta/pagemeta.md');
        const yamlText = await response.text();
        const data = yaml.load(yamlText) as { page_meta: AllPageMetaData };
        
        console.log('Fetched YAML data:', data);
        
        if (data && data.page_meta) {
          setAllMeta(data.page_meta);
          setMeta(data.page_meta[pageType] || { title: '', description: '' });
        } else {
          console.warn('No page_meta found in YAML data');
        }
      } catch (err) {
        console.error('Error loading metadata:', err);
        setError(err instanceof Error ? err : new Error('Failed to load metadata'));
      } finally {
        setLoading(false);
      }
    };

    fetchMeta();
  }, [pageType]);

  // Update meta when pageType changes
  useEffect(() => {
    if (allMeta && allMeta[pageType]) {
      setMeta(allMeta[pageType]);
    }
  }, [pageType, allMeta]);

  const updateMeta = (newMeta: Partial<PageMetaData>) => {
    setMeta(prev => ({
      ...prev,
      ...newMeta
    }));

    if (allMeta) {
      setAllMeta(prev => ({
        ...prev!,
        [pageType]: {
          ...prev![pageType],
          ...newMeta
        }
      }));
    }
  };

  return {
    meta,
    allMeta,
    loading,
    error,
    updateMeta
  };
};

export default usePageMeta;
