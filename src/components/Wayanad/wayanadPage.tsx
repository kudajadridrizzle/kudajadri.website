import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Footer from "../Home/components/Footer";
import Hero from "./components/Hero";
import { Cards } from "./components/cards";
import { Helmet } from "react-helmet-async";

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
      "Yes, Wayanad is a District considered a safe destination for tourists, including solo and women travelers. Local people are friendly, and crime rates are low. Still, like any destination, it’s wise to follow basic precautions and travel responsibly.",
  },
  {
    question: "What kind of accommodation is available in Wayanad?",
    answer:
      "Wayanad offers a variety of accommodations including resorts, hotels, Wayanad homestays, cottages, and hostels. Whether you're seeking luxury, mid-range, or budget options, Wayanad has plenty of choices suited for families, solo travelers, and honeymooners.",
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

export const WayanadPage = () => {
  const middleIndex = Math.ceil(faqs.length / 2);
  const listOne = faqs.slice(0, middleIndex);
  const listTwo = faqs.slice(middleIndex);

  return (
    <div>
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
        <meta property="og:title" content="Wayanad: Explore Tourist Attractions and Destinations in Wayanad" />
        <meta
          property="og:description"
          content="Discover top tourist attractions and must-visit destinations in Wayanad. Plan your perfect trip to explore nature, wildlife, and cultural sites."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${window.location.origin}/wayanadImg.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wayanad: Explore Tourist Attractions and Destinations in Wayanad" />
        <meta
          name="twitter:description"
          content="Discover top tourist attractions and must-visit destinations in Wayanad. Plan your perfect trip to explore nature, wildlife, and cultural sites."
        />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={`${window.location.origin}/wayanadImg.jpg`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Hero />
      <Cards />

      {/* FAQ Section Hardcoded */}
      <div className="sm:px-[12%] sm:py-24 mobile:px-4 mobile:py-14 large:px-[18%] flex flex-col gap-8">
        <h1 className="text-primary font-ivy sm:text-[44px] sm:text-center mobile:text-start mobile:text-[32px]">
          Frequently Asked Questions
        </h1>
        <div className="flex sm:flex-row mobile:flex-col gap-[24px]">
          {[listOne, listTwo].map((faqList, colIndex) => (
            <Accordion.Root
              key={colIndex}
              type="single"
              collapsible
              className="w-full mx-auto bg-white shadow-sm"
            >
              {faqList.map((faq, index) => (
                <Accordion.Item
                  key={`${colIndex}-${index}`}
                  value={`item-${colIndex}-${index}`}
                  className="border-b"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center font-albertSans justify-between px-4 py-3 text-left text-lg font-medium hover:bg-gray-100 transition">
                      {faq.question}
                      <ChevronDownIcon className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-4 pb-2 pt-2 text-gray-600 font-albertSans text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    {faq.answer}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
