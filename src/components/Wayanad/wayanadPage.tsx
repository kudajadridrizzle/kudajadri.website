import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Footer from "../Home/components/Footer";
import Hero from "./components/Hero";
import { Cards } from "./components/cards";
import { Helmet } from "react-helmet-async";
import fm from "front-matter";
import wayanadFaqRaw from "../../File/wayanadfaqs.md?raw";
import ReactMarkdown from "react-markdown";

// Define the shape of FAQ frontmatter
interface FaqFrontMatterAttributes {
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const WayanadPage = () => {
  const parsedFaq = fm<FaqFrontMatterAttributes>(wayanadFaqRaw);
  const faqs = parsedFaq.attributes.faqs || [];
  
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

      {/* FAQ Section from CMS */}
      <div className="sm:px-[12%] sm:py-24 mobile:px-4 mobile:py-14 large:px-[18%] flex flex-col gap-8">
        <h1 className="text-primary font-ivy sm:text-[44px] sm:text-center mobile:text-start mobile:text-[32px]">
          {parsedFaq.attributes.title || "Frequently Asked Questions"}
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
                    <ReactMarkdown>{faq.answer}</ReactMarkdown>
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
