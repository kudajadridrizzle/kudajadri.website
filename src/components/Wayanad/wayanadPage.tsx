import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import Footer from "../Home/components/Footer";
import { EnhancedHero } from "./components/EnhancedHero";
import { WayanadFaqs } from "./components/WayanadFaqs";
 
import { ImageContentSectionGrid } from "./components/ImageContentSectionGrid";

export const WayanadPage = () => {
  // Hardcoded metadata (from public/pagemeta.md)
  const title = 'Wayanad: Explore tourist attractions & destinations in Wayanad';
  const description = 'Discover top tourist attractions and must-visit destinations in Wayanad. Plan your perfect trip to explore nature, wildlife, and cultural sites.';

  const [currentUrl, setCurrentUrl] = useState(
    "https://www.kudajadridrizzle.com/wayanad"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  // Default SEO metadata
  const defaultMeta = {
    title,
    description,
    robots: "index, follow",
    author: "Kudajadri Drizzle Homestay",
  };

  // Hero section data
  const heroSection = {
    heroTitle: "Explore Wayanad: Nature, Serenity & Adventure",
  };

  // ✅ Full FAQ content (your text added)
  const faqs = [
    {
      question: "Where is Wayanad located?",
      answer:
        "Wayanad is a scenic district in the northeastern part of Kerala, India. Known for its hills, forests, and waterfalls, it shares borders with Karnataka and Tamil Nadu, making it a popular destination for nature lovers and weekend travelers from nearby states.",
    },
    {
      question: "What is the best time to visit Wayanad?",
      answer:
        "The best time to visit Wayanad, Kerala is from October to May. The weather is cool and pleasant, ideal for sightseeing, trekking, and outdoor activities. Monsoon months (June to September) are also beautiful but best suited for those who enjoy rain and lush green landscapes.",
    },
    {
      question: "How do I reach Wayanad?",
      answer:
        "Wayanad has no railway station or airport. The nearest railway station is in Kozhikode (Calicut), about 85 km away. From there, travelers can take taxis or buses. The closest airport is also in Kozhikode. Wayanad is well connected by road from major cities in Kerala and Karnataka.",
    },
    {
      question: "What are the top attractions in Wayanad?",
      answer:
        "Popular tourist spots in Wayanad include Edakkal Caves, Pookode Lake, Soochipara Waterfalls, Banasura Sagar Dam, Kuruva Island, and Wayanad Wildlife Sanctuary. The region also offers trekking trails, viewpoints, and plantations for a full nature and adventure experience.",
    },
    {
      question: "Is Wayanad safe for tourists?",
      answer:
        "Yes, Wayanad is considered a safe destination for tourists, including solo and women travelers. Local people are friendly, and crime rates are low. Still, like any destination, it’s wise to follow basic precautions and travel responsibly.",
    },
    {
      question: "What kind of accommodation is available in Wayanad?",
      answer:
        "Wayanad offers a variety of accommodations including resorts, hotels, homestays, cottages, and hostels. Whether you're seeking luxury, mid-range, or budget options, Wayanad has plenty of choices suited for families, solo travelers, and honeymooners.",
    },
    {
      question: "What should I pack for a trip to Wayanad?",
      answer:
        "Pack light cotton clothes for daytime and a light jacket for cooler evenings. Include comfortable walking shoes, rain gear (if visiting during monsoon), insect repellent, and sunscreen. Wayanad’s weather can vary, so layers are helpful.",
    },
    {
      question: "Are there adventure activities in Wayanad?",
      answer:
        "Yes, Wayanad offers several adventure activities such as trekking to Chembra Peak, camping, boating, zip-lining, and wildlife safaris. The terrain is ideal for nature trails and plantation walks, especially for travelers looking for eco-tourism experiences.",
    },
    {
      question: "Can I travel to Wayanad with kids or elderly people?",
      answer:
        "Wayanad is a family-friendly destination with many easy-to-reach spots and relaxing environments. While some activities like trekking may not suit elderly travelers, there are many gentle nature experiences and scenic drives they can enjoy.",
    },
    {
      question: "How many days are enough to explore Wayanad?",
      answer:
        "A 3-day trip is ideal to cover major attractions and enjoy the natural beauty of Wayanad. However, if you want a relaxed stay with time for local experiences and offbeat spots, consider staying for 4 to 5 days.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>{defaultMeta.title}</title>
        <meta name="description" content={defaultMeta.description} />
        <meta name="robots" content={defaultMeta.robots} />
        <meta name="author" content={defaultMeta.author} />

        {/* Open Graph */}
        <meta property="og:title" content={defaultMeta.title} />
        <meta property="og:description" content={defaultMeta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultMeta.title} />
        <meta name="twitter:description" content={defaultMeta.description} />
        <meta name="twitter:site" content="@kudajadrihomestay" />

        {/* Misc */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      {/* Hero Section */}
      <EnhancedHero
        heroImage="/images/wayanadImg.jpg"
        heroTitle={heroSection.heroTitle}
      />

      {/* Attractions */}
      <ImageContentSectionGrid />

      {/* FAQ Section */}
      <WayanadFaqs faqs={faqs} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WayanadPage;
