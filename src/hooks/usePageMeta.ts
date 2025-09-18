import { useEffect, useState } from 'react';
import * as yaml from 'js-yaml';

export type PageType = 'home' | 'about' | 'gallery' | 'rooms' | 'wayanad' | 'facilities' | 'contact' | 'tourpackages' | 'blog';

interface PageMetaData {
  title: string;
  description: string;
  [key: string]: any; // Allow additional properties for nested structures
}

interface AllPageMetaData {
  [key: string]: any;
  home: PageMetaData;
  about: PageMetaData;
  gallery: PageMetaData;
  rooms: PageMetaData;
  wayanad: PageMetaData;
  facilities: PageMetaData;
  contact: PageMetaData;
  tourpackages: PageMetaData & {
    [key: string]: PageMetaData;
  };
  blog: PageMetaData;
}

const usePageMeta = (pageType: PageType) => {
  const [meta, setMeta] = useState<PageMetaData>({ title: '', description: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [allMeta, setAllMeta] = useState<AllPageMetaData | null>(null);

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        console.log('Fetching metadata from /pagemeta.md');
        const response = await fetch('/pagemeta.md?t=' + new Date().getTime()); // Add cache buster
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const yamlText = await response.text();
        console.log('Raw YAML content:', yamlText);
        
        // Remove the YAML frontmatter delimiters
        const cleanYaml = yamlText.replace(/^---\s*\n?|\n?---\s*\n?$/g, '').trim();
        
        // Parse the YAML
        const parsedData = yaml.load(cleanYaml || yamlText) as Record<string, any>;
        
        // For tourpackages, we want to keep the nested structure
        if (pageType === 'tourpackages' && parsedData.tourpackages) {
          setAllMeta(parsedData as AllPageMetaData);
          setMeta({
            title: parsedData.tourpackages.title || '',
            description: parsedData.tourpackages.description || '',
            ...parsedData.tourpackages // Include all nested package data
          });
        } else {
          // For other pages, use the existing behavior
          const data = Object.keys(parsedData).reduce((acc, key) => {
            if (typeof parsedData[key] === 'object' && parsedData[key] !== null) {
              acc[key] = {
                title: parsedData[key].title || '',
                description: parsedData[key].description || ''
              };
            }
            return acc;
          }, {} as AllPageMetaData);
          
          setAllMeta(data);
          setMeta(data[pageType] || { title: '', description: '' });
        }
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to load metadata');
        console.error('Error loading metadata:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeta();
  }, [pageType]);

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

  return { meta, allMeta, loading, error, updateMeta };
};

export { usePageMeta };

export default usePageMeta;
