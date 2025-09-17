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
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const yamlText = await response.text();
        console.log('Raw YAML content:', yamlText);
        
        // Remove the YAML frontmatter delimiters if they exist
        const cleanYaml = yamlText.replace(/^---\s*\n?|\n?---\s*\n?$/g, '').trim();
        
        // Try to parse the YAML
        try {
          const data = yaml.load(cleanYaml) as AllPageMetaData;
          console.log('Parsed YAML data:', data);
          
          if (data) {
            setAllMeta(data);
            setMeta(data[pageType] || { title: '', description: '' });
          } else {
            console.warn('No meta data found in YAML');
          }
        } catch (yamlError) {
          console.error('YAML parsing error:', yamlError);
          const errorMessage = yamlError instanceof Error ? yamlError.message : 'Unknown YAML parsing error';
          throw new Error(`Failed to parse YAML: ${errorMessage}`);
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
