import { useEffect, useState } from 'react';

interface AboutMetaData {
  title: string;
  description: string;
}

const useAboutMeta = () => {
  const [meta, setMeta] = useState<AboutMetaData>({
    title: '',
    description: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const response = await fetch('/aboutmeta.md');
        if (!response.ok) {
          throw new Error('Failed to fetch about meta data');
        }
        const text = await response.text();
        const frontMatter = text.match(/^---\n([\s\S]*?)\n---/);
        
        if (frontMatter) {
          const metaData: Partial<AboutMetaData> = {};
          const metaLines = frontMatter[1].split('\n');
          
          metaLines.forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length > 0) {
              const value = valueParts.join(':').trim().replace(/^['"](.*)['"]$/, '$1');
              if (key === 'title') metaData.title = value;
              if (key === 'description') metaData.description = value;
            }
          });
          
          setMeta(metaData as AboutMetaData);
        }
      } catch (err) {
        setError(err as Error);
        console.error('Error loading about meta data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeta();
  }, []);

  return { meta, loading, error };
};

export default useAboutMeta;
