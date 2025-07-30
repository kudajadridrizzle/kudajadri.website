import Footer from "../Home/components/Footer";
import ReviewSession from "../Home/components/ReviewSession";
import AboutSession from "./components/AboutSession";
import Hero from "./components/Hero";
import RecognitionSession from "./components/RecognitionSession";
import { Helmet } from "react-helmet-async";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const faqs = [
  {
    question: "Why is Kalpetta a good location to book a homestay?",
    answer:
      "Kalpetta is the district headquarters of Wayanad and a central base for exploring the region. Booking a Kalpetta homestay gives you quick access to major attractions, shops, and restaurants while enjoying a calm and scenic environment with plenty of local charm.",
  },
  {
    question: "What types of homestays are available in Kalpetta?",
    answer:
      "Homestays in Kalpetta range from budget-friendly homestay rooms to premium homestay cottages. You’ll find family-run homes, eco-friendly villas, and properties with mountain views, all offering a cozy atmosphere and personalized service for a more authentic stay.",
  },
  {
    question: "Are Kalpetta homestays ideal for long stays?",
    answer:
      "Yes, many Kalpetta homestays are well-suited for long stays. They provide essential amenities, peaceful surroundings, and a home-like feel, making them comfortable for digital nomads, remote workers, or anyone seeking an extended holiday in Wayanad.",
  },
  {
    question: "How accessible are Kalpetta homestays from transport hubs?",
    answer:
      "Kalpetta homestays are easily accessible via road and located near the Kalpetta town bus stand. The location is well-connected to Kozhikode and other parts of Kerala, making it convenient for both domestic and interstate travelers.",
  },
  {
    question: "What local experiences can I expect from a Kalpetta homestay?",
    answer:
      "A Kalpetta homestay often includes local Kerala meals, plantation walks, and host-guided recommendations for nearby attractions. Staying with a local family lets you experience Wayanad’s culture more intimately than you would in commercial accommodations.",
  },
  {
    question: "Are there eco-friendly or nature-based homestays in Kalpetta?",
    answer:
      "Yes, Kalpetta has several eco-conscious homestays built using sustainable materials, surrounded by greenery, and offering a closer connection to nature. These homestays in Kalpetta are ideal for responsible travelers looking to reduce their carbon footprint.",
  },
  {
    question: "Do Kalpetta homestays offer food and dining options?",
    answer:
      "Most Kalpetta homestays provide home-cooked meals, often featuring traditional Kerala dishes. Some include complimentary breakfast, while others offer full meal plans on request. It’s a great way to enjoy fresh, local cuisine during your stay.",
  },
  {
    question: "What are the peak seasons for homestays in Kalpetta?",
    answer:
      "The busiest seasons for Kalpetta, Wayanad homestays are from October to March, during the cooler months. These periods are perfect for outdoor activities, sightseeing, and experiencing the beauty of Wayanad, so booking early is recommended.",
  },
  {
    question: "Can I find homestays in Kalpetta with scenic views?",
    answer:
      "Yes, many homestays in Kalpetta are located in elevated areas or near plantations, offering stunning views of the Western Ghats, misty hills, or lush greenery. These views add to the relaxing charm of your homestay experience.",
  },
  {
    question: "Are Kalpetta homestays affordable for budget travelers?",
    answer:
      "Absolutely. Kalpetta offers a wide range of homestays to suit different budgets. Even low-cost options provide clean, comfortable stays with warm hospitality, making it a favorite choice for backpackers, solo travelers, and budget-conscious families.",
  },
];

const About = () => {
  const middleIndex = Math.ceil(faqs.length / 2);
  const listOne = faqs.slice(0, middleIndex);
  const listTwo = faqs.slice(middleIndex);

  return (
    <div>
      <Helmet>
        <title>
          Kalpetta Homestays: #1 Homestays in Kalpetta with Airbnb reviews
        </title>
        <meta
          name="description"
          content="Kudajadri Drizzle Homestay in Kalpetta, Wayanad: #1 Kalpetta Home stay with 5 star reviews on Airbnb, TripAdvisor. Homestay cottage for family & group."
        />
        <meta
          name="keywords"
          content="kalpetta homestays, best homestay kalpetta, family accommodation, couple stays, kudajadri homestay"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        <meta
          property="og:title"
          content="Kalpetta Homestays: #1 Homestays in Kalpetta with Airbnb reviews"
        />
        <meta
          property="og:description"
          content="Kudajadri Drizzle Homestay in Kalpetta, Wayanad: #1 Kalpetta Home stay with 5 star reviews on Airbnb, TripAdvisor. Homestay cottage for family & group."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content={`${window.location.origin}/aboutHero.jpg`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kalpetta Homestays: #1 Homestays in Kalpetta with Airbnb reviews"
        />
        <meta
          name="twitter:description"
          content="Kudajadri Drizzle Homestay in Kalpetta, Wayanad: #1 Kalpetta Home stay with 5 star reviews on Airbnb, TripAdvisor. Homestay cottage for family & group."
        />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta
          name="twitter:image"
          content={`${window.location.origin}/aboutHero.jpg`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Hero />
      <AboutSession />
      <ReviewSession />
      <RecognitionSession />

      {/* FAQ Section Hardcoded */}
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

export default About;
