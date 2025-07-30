import { Helmet } from "react-helmet-async";
import Hero from "./Components/Hero";
import RoomSession from "../Home/components/RoomSession";
import { IndividualRooms } from "../Home/components/IndividualRooms";
import Footer from "../Home/components/Footer";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

// Rooms FAQ content
const roomsFaqs = [
  {
    question: "What types of accommodations are available in Wayanad?",
    answer:
      "Wayanad offers a wide range of accommodations, including resorts, hotels, cottages, Wayanad homestays, and guesthouses. Whether you want a luxury retreat or a budget stay, Wayanad accommodations cater to solo travelers, families, couples, and groups with options close to nature and major attractions.",
  },
  {
    question: "How can I find the best Wayanad accommodation for my trip?",
    answer:
      "To find the right Wayanad accommodation, consider your budget, group size, and location preference. Use trusted travel platforms, check real guest reviews, and compare amenities. Booking in advance ensures better rates, especially during weekends, holidays, and the tourist season between October and May.",
  },
  {
    question: "Are Wayanad rooms suitable for short weekend trips?",
    answer:
      "Yes, Wayanad rooms are ideal for weekend getaways. Many properties offer flexible check-in, affordable tariffs, and comfortable amenities. Whether you're planning a quick escape or a relaxing break, Wayanad rooms provide convenience, scenic surroundings, and a peaceful atmosphere for a short stay.",
  },
  {
    question: "What amenities are commonly offered in a Wayanad room?",
    answer:
      "A standard Wayanad room includes a clean bed, attached bathroom, hot water, Wi-Fi, and parking. Some rooms may offer extras like balconies, mountain views, or access to common areas like gardens or campfire zones, depending on the property type and budget.",
  },
  {
    question: "Are there budget accommodations in Wayanad for backpackers?",
    answer:
      "Yes, Wayanad has several budget accommodations including hostels, shared rooms, and low-cost lodges. These options provide essential facilities and are perfect for solo travelers or backpackers looking for affordable Wayanad rooms without compromising on cleanliness or location.",
  },
  {
    question: "Can I book Wayanad rooms online?",
    answer:
      "Most Wayanad accommodations offer online booking through travel websites or their official pages. You can view real photos, read reviews, and compare rates. Booking online helps secure your room early, especially during peak seasons or festival weekends.",
  },
  {
    question: "Do Wayanad accommodations offer family-friendly rooms?",
    answer:
      "Yes, many accommodations in Wayanad provide family suites, interconnected rooms, or cottages suitable for families. These Wayanad rooms come with additional beds, larger spaces, and child-friendly facilities to ensure a comfortable stay for all family members.",
  },
  {
    question: "Are Wayanad accommodations safe for solo women travelers?",
    answer:
      "Wayanad is generally safe, and many accommodations are well-reviewed for solo and women travelers. Look for properties with good security, trusted hosts, and positive feedback. Staying in a verified Wayanad accommodation ensures comfort, privacy, and peace of mind.",
  },
  {
    question: "What is the average cost of a room in Wayanad?",
    answer:
      "Wayanad room rates vary based on type and location. Budget rooms start at ₹800–₹1,500 per night, mid-range at ₹2,000–₹4,000, and premium homestay accommodations can go up to ₹6,000+. Booking early often helps in securing better prices and availability.",
  },
  {
    question: "Is it better to stay in a room or a resort in Wayanad?",
    answer:
      "If you want a quick, budget-friendly homestay, a Wayanad room is a great choice. For those seeking more amenities, views, or a relaxed experience, resorts offer luxury. The right option depends on your travel style, budget, and how much time you’ll spend indoors.",
  },
];

// Split into 2 columns
const mid = Math.ceil(roomsFaqs.length / 2);
const roomsListOne = roomsFaqs.slice(0, mid);
const roomsListTwo = roomsFaqs.slice(mid);

const Rooms = () => {
  return (
    <div>
      <Helmet>
        <title>Wayanad Accommodations: Homestays, Cottages, and Family Rooms</title>
        <meta
          name="description"
          content="Discover peaceful accommodations in Wayanad with cozy homestays, spacious cottages with swimming pool, and family rooms designed for comfort and relaxation"
        />
        <meta
          name="keywords"
          content="wayanad accommodations, homestays, cottages, family rooms, swimming pool, comfort, relaxation"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        <meta property="og:title" content="Wayanad Accommodations: Homestays, Cottages, and Family Rooms" />
        <meta
          property="og:description"
          content="Discover peaceful accommodations in Wayanad with cozy homestays, spacious cottages with swimming pool, and family rooms designed for comfort and relaxation"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${window.location.origin}/aboutHero.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wayanad Accommodations: Homestays, Cottages, and Family Rooms" />
        <meta
          name="twitter:description"
          content="Discover peaceful accommodations in Wayanad with cozy homestays, spacious cottages with swimming pool, and family rooms designed for comfort and relaxation"
        />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={`${window.location.origin}/aboutHero.jpg`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Hero />
      <RoomSession />
      <IndividualRooms />

      {/* FAQ Section Hardcoded */}
      <div className="sm:px-[12%] sm:py-24 mobile:px-4 mobile:py-14 large:px-[18%] flex flex-col gap-8">
        <div>
          <h1 className="flex-1 text-primary font-ivy sm:text-[44px] sm:text-center mobile:text-start mobile:text-[32px]">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex sm:flex-row mobile:flex-col gap-[24px]">
          {[roomsListOne, roomsListTwo].map((faqList, colIndex) => (
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

export default Rooms;
