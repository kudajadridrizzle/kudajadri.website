import { Helmet } from "react-helmet-async";
import { Header } from "../Home/components/Header";
import FaqList from "../FaqComponent/FaqList";
import useWayanadCMS from "../../hooks/useWayanadCMS";
import { useEffect, useState } from "react";

// Define the shape of FAQ frontmatter for compatibility with FaqList
interface FaqFrontMatterAttributes {
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const WayanadHero = ({ heroImage, heroTitle }: { heroImage: string; heroTitle: string }) => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className="text-[#ffff] font-staylista sm:text-[72px] h-[100vh] flex flex-col items-center justify-end mobile:text-5xl">
          <h1 className="text-center mb-[114px]">{heroTitle}</h1>
        </div>
      </div>
    </div>
  );
};

const AttractionCard = ({ 
  title, 
  description, 
  image,
  index 
}: { 
  title: string; 
  description: string; 
  image: string;
  index: number;
}) => {
  const formattedIndex = index < 10 ? `0${index + 1}` : `${index + 1}`;
  
  return (
    <div className="flex flex-col items-center self-stretch bg-white sm:flex-row mb-16">
      <div className="w-full sm:w-1/2 flex items-center p-0 pr-custom-padding pb-[73px] mobile:pb-[24px] flex-[1_0_0] self-stretch mobile:p-[16px]">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-auto rounded-[16px] aspect-[16/9]"
          loading="lazy"
        />
      </div>
      <div className="w-full sm:w-1/2">
        <div className="flex items-start self-stretch gap-8 flex-row">
          <div className="flex justify-start h-full align-top text-start text-[#1D1D1D] text-[32px] font-normal leading-normal font-ivy">
            {formattedIndex}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-normal leading-normal text-[#1D1D1D] font-ivy">
              {title}
            </h2>
            <div 
              className="text-[#6E6E6E] text-base font-medium leading-6 font-albertSans"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const WayanadPageCMS = () => {
  const { data, loading, error } = useWayanadCMS();
  const [faqData, setFaqData] = useState<FaqFrontMatterAttributes | null>(null);

  useEffect(() => {
    if (data) {
      // Transform the FAQ data to match the expected format for FaqList
      setFaqData({
        title: data.attributes.faq.title,
        faqs: data.attributes.faq.faqs.map(item => ({
          question: item.question,
          answer: item.answer
        }))
      });
    }
  }, [data]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading Wayanad page...</div>;
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error loading Wayanad page: {error?.message || 'Unknown error'}
      </div>
    );
  }

  const { attributes, body } = data;
  const { title, description, keywords, author } = attributes;
  const { heroImage, heroTitle, sections } = attributes;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={author} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${window.location.origin}${heroImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={`${window.location.origin}${heroImage}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <WayanadHero heroImage={heroImage} heroTitle={heroTitle} />

      {/* Attractions Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-ivy font-normal text-gray-900 mb-6">
            Explore the Beauty of Wayanad
          </h2>
          <div 
            className="prose max-w-3xl mx-auto text-gray-600 text-lg"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>

        {/* Attractions List */}
        <div className="space-y-16">
          {sections.map((attraction, index) => (
            <AttractionCard
              key={index}
              index={index}
              title={attraction.title}
              description={attraction.description}
              image={attraction.image}
            />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      {faqData && <FaqList {...faqData} />}
    </div>
  );
};

export default WayanadPageCMS;
