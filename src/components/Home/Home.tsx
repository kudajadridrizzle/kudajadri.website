import AboutSession from "./components/AboutSession";
import Amenities from "./components/Amenities";
import Direction from "./components/Direction";
import Footer from "./components/Footer";
import GallarySession from "./components/GallarySession";
import { IndividualRooms } from "./components/IndividualRooms";
import LocationImage from "./components/LocationImage";
import OurGallery from "./components/OurGallery";
import ReviewSession from "./components/ReviewSession";
import RoomSession from "./components/RoomSession";
import VideoBackground from "./components/VideoBackground";
import { Helmet } from "react-helmet-async";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const faqs = [
  {
    question: "What are Wayanad homestays and how are they different from hotels?",
    answer:
      "Wayanad homestays are accommodations provided by local hosts, offering a homely atmosphere, personal attention, and cultural experiences. Unlike hotels, homestays in Wayanad focus on simplicity, local food, and authentic hospitality, making them ideal for travelers seeking a peaceful and immersive stay in the scenic hills of Wayanad.",
  },
  {
    question: "Are homestays in Wayanad suitable for families, couples, and groups?",
    answer:
      "Yes, homestays in Wayanad are a great choice for all types of travelers. Whether you're a couple looking for privacy, a family with kids, or a group of friends, Wayanad homestays offer spacious rooms, friendly hosts, and a peaceful environment perfect for bonding and relaxation.",
  },
  {
    question: "How can I find the best homestay in Wayanad?",
    answer:
      "To find the best Wayanad homestay, explore reviews on trusted travel websites, compare facilities, and check the location’s proximity to tourist attractions. Many homestays in Wayanad are listed with real guest photos, ratings, and verified contact details to help travelers make informed and safe bookings online.",
  },
  {
    question: "What amenities do Wayanad homestays typically offer?",
    answer:
      "Most Wayanad homestays offer essential amenities like clean rooms, hot water, free Wi-Fi, and home-cooked meals. Additional features may include parking, campfires, trekking guidance, or plantation visits. Homestays in Wayanad combine comfort with local charm, providing a memorable stay amidst nature without the cost of luxury hotels.",
  },
  {
    question: "Are meals included in Wayanad homestay bookings?",
    answer:
      "Many Wayanad homestays include breakfast with the booking, while lunch and dinner are available upon request. Meals are often homemade and reflect the rich flavors of Kerala cuisine. Staying at a homestay in Wayanad allows you to enjoy local food prepared fresh with care and authenticity.",
  },
  {
    question: "Is it safe to stay in a homestay in Wayanad?",
    answer:
      "Yes, staying in a homestay in Wayanad is generally safe. These accommodations are run by local families who prioritize guest safety and comfort. Most homestays have gated premises, private rooms, and hosts who are always available to assist, making them suitable for solo travelers and women too.",
  },
  {
    question: "What is the average price range for Wayanad homestays?",
    answer:
      "The cost of Wayanad homestays typically ranges from ₹1,000 to ₹5,000 per night. Budget options offer basic comforts, while premium homestays provide extra amenities and scenic views. Prices may vary based on the season, location, and facilities offered, but they remain affordable homestays compared to resorts or hotels.",
  },
  {
    question: "Can I book Wayanad homestays online?",
    answer:
      "Yes, most homestays in Wayanad can be booked online through popular travel platforms or the homestay's own website. Online booking is quick, secure, and allows you to view photos, read guest reviews, and choose the best Wayanad homestay that fits your preferences and travel dates easily.",
  },
  {
    question: "Are there luxury or premium homestays in Wayanad?",
    answer:
      "Yes, Wayanad offers premium homestays with modern comforts like private cottages, mountain views, and curated local experiences. These high-end homestays in Wayanad combine luxury with personalized service, making them ideal for honeymooners, weekend escapes, and guests seeking a peaceful stay in an upscale yet natural setting.",
  },
  {
    question: "When is the best time to book a homestay in Wayanad?",
    answer:
      "The best time to book a homestay in Wayanad is from October to May. During this period, the weather is cool and pleasant, perfect for sightseeing, trekking, and exploring nature. Advance booking is recommended during weekends and holidays as many Wayanad homestays get fully booked early.",
  },
];

const Home = () => {
  const middleIndex = Math.ceil(faqs.length / 2);
  const listOne = faqs.slice(0, middleIndex);
  const listTwo = faqs.slice(middleIndex);

  return (
    <div>
      <Helmet>
        <title>Wayanad homestays: Best homestay in Wayanad for family, group</title>
        <meta
          name="description"
          content="Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay. Book top-rated, nature-friendly homestays in Wayanad for family & group stays."
        />
        <meta
          name="keywords"
          content="wayanad homestays, best homestay wayanad, family accommodation, couple stays, kudajadri homestay"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        <meta property="og:title" content="Wayanad homestays: Best homestay in Wayanad for family, group" />
        <meta
          property="og:description"
          content="Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay. Book top-rated, nature-friendly homestays in Wayanad for family & group stays."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${window.location.origin}/aboutHero.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wayanad homestays: Best homestay in Wayanad for family, group" />
        <meta
          name="twitter:description"
          content="Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay. Book top-rated, nature-friendly homestays in Wayanad for family & group stays."
        />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={`${window.location.origin}/aboutHero.jpg`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <VideoBackground />
      <AboutSession />
      <GallarySession />
      <RoomSession />
      <IndividualRooms />
      <Amenities />
      <OurGallery />
      <ReviewSession />
      <LocationImage />
      <Direction />
      
      {/* FAQ Section */}
      <div className="sm:px-[12%] sm:py-24 mobile:px-4 mobile:py-14 large:px-[18%] flex flex-col gap-8">
        <div>
          <h2 className="flex-1 text-primary font-ivy sm:text-[44px] sm:text-center mobile:text-start mobile:text-[32px]">
          Wayanad Homestays - FAQs          </h2>
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

export default Home;
