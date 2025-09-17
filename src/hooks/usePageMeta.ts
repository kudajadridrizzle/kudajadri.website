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
        if (!response.ok) {
          throw new Error(`Failed to fetch page meta data: ${response.status} ${response.statusText}`);
        }
        
        const text = await response.text();
        console.log('Raw metadata content:', text);
        
        // Handle both Windows (\r\n) and Unix (\n) line endings
        const yamlMatch = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (!yamlMatch) {
          throw new Error('No YAML frontmatter found in the file');
        }
        
        const yamlContent = yamlMatch[1];
        console.log('YAML content:', yamlContent);
        
        // Parse YAML
        const parsedYaml = yaml.load(yamlContent) as Record<string, { title: string; description: string }>;
        console.log('Parsed YAML:', parsedYaml);
        
        if (!parsedYaml) {
          throw new Error('Failed to parse YAML content');
        }
        
        // Transform to our format
        const metaData: Record<string, PageMetaData> = {};
        Object.entries(parsedYaml).forEach(([key, value]) => {
          if (value && typeof value === 'object' && 'title' in value && 'description' in value) {
            metaData[key] = {
              title: String(value.title || '').trim(),
              description: String(value.description || '').trim()
            };
          }
        });
        
        console.log('Processed meta data:', metaData);
        setAllMeta(metaData as AllPageMetaData);
        
        // Set current page meta
        if (metaData[pageType]) {
          console.log(`Setting meta for ${pageType}:`, metaData[pageType]);
          setMeta(metaData[pageType]);
        } else {
          console.warn(`No metadata found for page type: ${pageType}`);
          setMeta({ title: '', description: '' });
        }
      } catch (err) {
        console.error('Error in fetchMeta:', err);
        setError(err as Error);
        setMeta({ title: '', description: '' });
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
