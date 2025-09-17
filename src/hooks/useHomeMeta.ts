import { useEffect, useState } from 'react';

interface HomeMetaData {
  title: string;
  description: string;
}

export const useHomeMeta = (): HomeMetaData | null => {
  const [metaData, setMetaData] = useState<HomeMetaData | null>(null);

  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        const response = await fetch('/homemeta.md');
        const text = await response.text();
        
        // Parse the frontmatter from the markdown file
        const titleMatch = text.match(/title: "(.*?)"/);
        const descMatch = text.match(/description: "(.*?)"/);
        
        if (titleMatch && descMatch) {
          setMetaData({
            title: titleMatch[1],
            description: descMatch[1].replace(/\"/g, '"')
          });
        }
      } catch (error) {
        console.error('Error loading home meta data:', error);
      }
    };

    fetchMetaData();
  }, []);

  return metaData;
};
