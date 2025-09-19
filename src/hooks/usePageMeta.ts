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
        const response = await fetch('/pagemeta.md?t=' + new Date().getTime());
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let yamlText = await response.text();
        
        // Remove the YAML frontmatter delimiters if they exist
        yamlText = yamlText.replace(/^---\s*\n?|\n?---\s*\n?$/g, '').trim();
        
        // Parse the YAML content
        const parsedData = yaml.load(yamlText) as Record<string, any>;
        
        // Normalize room keys to handle both kebab-case and snake_case
        if (parsedData.rooms) {
          const normalizedRooms: Record<string, any> = {};
          Object.entries(parsedData.rooms).forEach(([key, value]) => {
            // Convert keys to kebab-case for consistency
            const normalizedKey = key.replace(/_/g, '-');
            normalizedRooms[normalizedKey] = value;
          });
          parsedData.rooms = normalizedRooms;
        }
        console.log('Parsed YAML data:', parsedData);
        
        if (!parsedData) {
          throw new Error('Failed to parse YAML content');
        }
        
        // Set all meta data
        setAllMeta(parsedData as AllPageMetaData);
        
        // Handle different page types and their meta data structure
        let pageMeta = parsedData[pageType];
        
        // For tour packages, we might have nested meta data
        if (pageType === 'tourpackages' && parsedData.tourpackages) {
          // If there's a specific package ID in the URL, use that meta
          const packageId = window.location.pathname.split('/').pop();
          if (packageId && packageId in parsedData.tourpackages) {
            pageMeta = parsedData.tourpackages[packageId];
          }
        }
        
        if (pageMeta) {
          const metaData = {
            title: pageMeta.title || '',
            description: pageMeta.description || '',
            ...pageMeta // Include all other properties
          };
          
          console.log(`Setting meta for ${pageType}:`, metaData);
          setMeta(metaData);
        } else {
          console.warn(`No meta data found for page type: ${pageType}`);
          setMeta({ 
            title: `Kudajadri Drizzle - ${pageType.charAt(0).toUpperCase() + pageType.slice(1)}`,
            description: `Welcome to Kudajadri Drizzle - ${pageType} page`
          });
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
