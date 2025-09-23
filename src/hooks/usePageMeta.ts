import { useEffect, useState } from 'react';
import * as yaml from 'js-yaml';

export type PageType =
  | 'home'
  | 'about'
  | 'gallery'
  | 'rooms'
  | 'wayanad'
  | 'facilities'
  | 'contact'
  | 'tourpackages'
  | 'blog';

interface PageMetaData {
  title: string;
  description: string;
  [key: string]: any; // allow nested structures
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
  const [allMeta, setAllMeta] = useState<AllPageMetaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const response = await fetch('/pagemeta.md?t=' + new Date().getTime());
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        let yamlText = await response.text();

        // Remove frontmatter --- delimiters
        yamlText = yamlText.replace(/^---\s*\n?|\n?---\s*\n?$/g, '').trim();

        const parsedData = yaml.load(yamlText) as Record<string, any>;
        if (!parsedData) throw new Error('Failed to parse YAML content');

        // Recursive function to clean and normalize strings
        const preprocessDescriptions = (obj: any) => {
          Object.keys(obj).forEach(key => {
            const value = obj[key];
            if (value && typeof value === 'object') {
              preprocessDescriptions(value);
            } else if (key === 'description' && Array.isArray(value)) {
              obj[key] = value.join(' ').trim();
            } else if (typeof value === 'string') {
              obj[key] = value.replace(/\s+/g, ' ').trim(); // normalize whitespace
            }
          });
        };
        preprocessDescriptions(parsedData);

        // Normalize room keys: underscore → kebab-case
        if (parsedData.rooms) {
          const normalizedRooms: Record<string, any> = {};
          Object.entries(parsedData.rooms).forEach(([key, value]) => {
            const normalizedKey = key.replace(/_/g, '-');
            normalizedRooms[normalizedKey] = value;
          });
          parsedData.rooms = normalizedRooms;
        }

        setAllMeta(parsedData as AllPageMetaData);

        // Handle page type meta
        let pageMeta = parsedData[pageType];

        // Special handling for tour packages
        if (pageType === 'tourpackages' && parsedData.tourpackages) {
          const packageId = window.location.pathname.split('/').pop();
          if (packageId && packageId in parsedData.tourpackages) {
            pageMeta = parsedData.tourpackages[packageId];
          }
        }

        if (pageMeta) {
          setMeta({
            title: pageMeta.title || '',
            description: pageMeta.description || '',
            ...pageMeta
          });
        } else {
          setMeta({
            title: `Kudajadri Drizzle - ${pageType.charAt(0).toUpperCase() + pageType.slice(1)}`,
            description: `Welcome to Kudajadri Drizzle - ${pageType} page`
          });
        }
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to load metadata');
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeta();
  }, [pageType]);

  const updateMeta = (newMeta: Partial<PageMetaData>) => {
    setMeta(prev => ({ ...prev, ...newMeta }));

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
