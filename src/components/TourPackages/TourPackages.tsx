import Hero from "../About/components/Hero";
import Direction from "../Home/components/Direction";
import Footer from "../Home/components/Footer";
import { Packages } from "./components/packages";
import { Helmet } from "react-helmet-async";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

// Tour Package FAQs – split into two columns
const listOne = [
  {
    question: "What is included in a typical Wayanad tour package?",
    answer:
      "Most Wayanad tour packages include accommodation, transportation, guided sightseeing, and entry fees to major attractions. Some packages also offer meals, jeep safaris, trekking, and cultural experiences depending on the itinerary and duration.",
  },
  {
    question: "How many days are ideal for a Wayanad tour?",
    answer:
      "A 3-day, 2-night Wayanad tour package is ideal to cover popular spots like Edakkal Caves, Pookode Lake, Soochipara Falls, and Banasura Sagar Dam. Longer packages (4–5 days) allow a more relaxed experience and time for offbeat locations.",
  },
  {
    question: "Are Wayanad holiday packages available from major cities?",
    answer:
      "Yes, Wayanad holiday packages are available from cities like Bangalore, Mysore, Kozhikode, and Kochi. These packages typically include round-trip transport, stay, sightseeing, and local support.",
  },
  {
    question: "Do Wayanad packages include homestay options?",
    answer:
      "Many Wayanad tour packages offer the option to stay in Wayanad homestays, providing a local and personalized experience. Guests can choose between homestays, resorts, or hotels based on their comfort and budget preferences.",
  },
  {
    question: "Are there Wayanad tour packages for couples or honeymooners?",
    answer:
      "Yes, several Wayanad honeymoon packages include private stays, romantic setups, candlelight dinners, and scenic spots. These packages are ideal for couples seeking a peaceful getaway in nature.",
  },
];

const listTwo = [
  {
    question: "Can I customize a Wayanad holiday tour package?",
    answer:
      "Most travel providers allow customization of Wayanad packages to suit your needs. You can choose the number of days, type of accommodation, specific sightseeing spots, and even add-on experiences like trekking or boating.",
  },
  {
    question: "What is the average cost of a Wayanad tour package?",
    answer:
      "Wayanad tour packages generally range from ₹4,000 to ₹12,000 per person depending on duration, accommodation type, and inclusions. Budget, standard, and luxury packages are available for all kinds of travelers.",
  },
  {
    question: "Are group and family packages available for Wayanad?",
    answer:
      "Yes, Wayanad group tour packages are available for families, students, and corporate teams. These packages include large vehicle transport, multiple room bookings, and tailored itineraries for a smooth group travel experience.",
  },
  {
    question: "Do Wayanad tour packages cover all major attractions?",
    answer:
      "Most packages cover key attractions like Edakkal Caves, Meenmutty Falls, Wayanad Wildlife Sanctuary, Kuruva Island, and viewpoints. Customized packages can include offbeat places, trekking spots, and cultural visits on request.",
  },
  {
    question: "When should I book a Wayanad tour package?",
    answer:
      "The best time to book a Wayanad tour package is during the pleasant season from October to May. Advance booking is recommended during holidays and weekends to get the best stay and travel slots.",
  },
];

export const TourPackages = () => {
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

      {/* FAQ Section */}
      <div className="sm:px-[12%] sm:py-24 mobile:px-4 mobile:py-14 large:px-[18%] flex flex-col gap-8">
        <div>
          <h1 className="flex-1 text-primary font-ivy sm:text-[44px] sm:text-center mobile:text-start mobile:text-[32px]">
            Frequently Asked Questions
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
