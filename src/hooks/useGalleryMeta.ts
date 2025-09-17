import { useEffect, useState } from 'react';

interface GalleryMetaData {
  title: string;
  description: string;
}

const useGalleryMeta = () => {
  const [meta, setMeta] = useState<GalleryMetaData>({
    title: '',
    description: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const response = await fetch('/gallerymeta.md');
        if (!response.ok) {
          throw new Error('Failed to fetch gallery meta data');
        }
        const text = await response.text();
        const frontMatter = text.match(/^---\n([\s\S]*?)\n---/);
        
        if (frontMatter) {
          const metaData: Partial<GalleryMetaData> = {};
          const metaLines = frontMatter[1].split('\n');
          
          metaLines.forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length > 0) {
              const value = valueParts.join(':').trim().replace(/^['"](.*)['"]$/, '$1');
              if (key === 'title') metaData.title = value;
              if (key === 'description') metaData.description = value;
            }
          });
          
          setMeta(metaData as GalleryMetaData);
        }
      } catch (err) {
        setError(err as Error);
        console.error('Error loading gallery meta data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeta();
  }, []);

  return { meta, loading, error };
};

export default useGalleryMeta;
