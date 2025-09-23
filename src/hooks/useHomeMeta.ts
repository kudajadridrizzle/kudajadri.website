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
        const response = await fetch('/data/home-meta.json');
        if (!response.ok) throw new Error('Failed to fetch home meta data');
        const data = await response.json();
        setMetaData({
          title: data.title || '',
          description: data.description || ''
        });
      } catch (error) {
        console.error('Error loading home meta data:', error);
        // Fallback to default values if the fetch fails
        setMetaData({
          title: 'Wayanad homestays: Best homestay in Wayanad for family, groups',
          description: 'Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay: Book top rated nature friendly Homestays in Wayanad for Family & Group.'
        });
      }
    };

    fetchMetaData();
  }, []);

  return metaData;
};
