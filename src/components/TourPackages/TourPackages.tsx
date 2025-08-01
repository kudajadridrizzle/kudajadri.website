import Hero from "../About/components/Hero";
import Direction from "../Home/components/Direction";
import Footer from "../Home/components/Footer";
import { Packages } from "./components/packages";
import { Helmet } from "react-helmet-async";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import fm from "front-matter";
import tourPackagesFaqRaw from "../../File/tourpackagesfaqs.md?raw";
import ReactMarkdown from "react-markdown";

// Define the shape of FAQ frontmatter
interface FaqFrontMatterAttributes {
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const TourPackages = () => {
  const parsedFaq = fm<FaqFrontMatterAttributes>(tourPackagesFaqRaw);
  const faqs = parsedFaq.attributes.faqs || [];
  
  const middleIndex = Math.ceil(faqs.length / 2);
  const listOne = faqs.slice(0, middleIndex);
  const listTwo = faqs.slice(middleIndex);

  return (
    <div>
      <Helmet>
        <title>Wayanad Holiday Tour Packages: Best Trip Deals for Families & Couples</title>
        <meta
          name="description"
          content="Discover the best Wayanad holiday tour packages with top deals for families, groups, and couples. Enjoy a perfect getaway with nature, adventure, and comfort."
        />
        <meta
          name="keywords"
          content="wayanad tour packages, kudajadri activities, nature trails, wildlife tours, cultural experiences"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        <meta
          property="og:title"
          content="Tour Packages & Activities | Kudajadri Homestay Wayanad"
        />
        <meta
          property="og:description"
          content="Explore exciting tour packages and activities in Wayanad with Kudajadri Homestay. Discover nature trails, wildlife, and cultural experiences for an unforgettable vacation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content={`${window.location.origin}/wayanadImg.jpg`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tour Packages & Activities | Kudajadri Homestay Wayanad"
        />
        <meta
          name="twitter:description"
          content="Explore exciting tour packages and activities in Wayanad with Kudajadri Homestay. Discover nature trails, wildlife, and cultural experiences for an unforgettable vacation."
        />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta
          name="twitter:image"
          content={`${window.location.origin}/wayanadImg.jpg`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Hero />
      <Packages />
      <Direction />

      {/* FAQ Section from CMS */}
      <div className="sm:px-[12%] sm:py-24 mobile:px-4 mobile:py-14 large:px-[18%] flex flex-col gap-8">
        <div>
          <h1 className="flex-1 text-primary font-ivy sm:text-[44px] sm:text-center mobile:text-start mobile:text-[32px]">
            {parsedFaq.attributes.title || "Frequently Asked Questions"}
          </h1>
        </div>
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
                      <ChevronDownIcon className="h-5 w-5 transition-transform duration-200 font-albertSans group-data-[state=open]:rotate-180" />
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
