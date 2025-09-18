import { useState, useEffect } from 'react';
import * as yaml from 'js-yaml';

interface FacilitiesPageData {
  title: string;
  description: string;
  [key: string]: any; // Allow for additional properties
}

const useFacilitiesCMS = () => {
  const [pageData, setPageData] = useState<FacilitiesPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/facilitiespage.md');
        const text = await response.text();
        const parsed = yaml.load(text) as FacilitiesPageData;
        setPageData(parsed);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load facilities page data'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { pageData, loading, error };
};

export default useFacilitiesCMS;
