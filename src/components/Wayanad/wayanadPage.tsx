import { WayanadPageCMS } from './wayanadPage.cms';
import { Helmet } from 'react-helmet-async';

// Re-export the CMS version of the Wayanad page
export const WayanadPage = () => {
  return (
    <>
      <Helmet>
        <title>Wayanad: Explore Tourist Attractions and Destinations in Wayanad</title>
        <meta
          name="description"
          content="Discover top tourist attractions and must-visit destinations in Wayanad. Plan your perfect trip to explore nature, wildlife, and cultural sites."
        />
        <meta
          name="keywords"
          content="wayanad tourist attractions, wayanad destinations, nature trails, wildlife, cultural sites, kudajadri wayanad"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
      
      <WayanadPageCMS />
    </>
  );
};

export default WayanadPage;
