import { useState, useEffect } from 'react';
import fm from 'front-matter';

// Define the shape of the Wayanad page frontmatter
export interface WayanadFrontMatterAttributes {
  title: string;
  description: string;
  keywords: string;
  author: string;
  heroImage: string;
  heroTitle: string;
  sections: Array<{
    title: string;
    description: string;
    image: string;
  }>;
  faq: {
    title: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
}

interface WayanadCMSData {
  attributes: WayanadFrontMatterAttributes;
  body: string;
}

const useWayanadCMS = (): { data: WayanadCMSData | null; loading: boolean; error: Error | null } => {
  const [data, setData] = useState<WayanadCMSData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // In production, this would be a fetch call to your Netlify CMS endpoint
        // For now, we'll import the markdown file directly
        const wayanadPageRaw = await import('../File/wayanadpage.md?raw');
        const parsed = fm<WayanadFrontMatterAttributes>(wayanadPageRaw.default);
        
        setData({
          attributes: parsed.attributes,
          body: parsed.body
        });
      } catch (err) {
        console.error('Error loading Wayanad page data:', err);
        setError(err instanceof Error ? err : new Error('Failed to load Wayanad page data'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useWayanadCMS;
