import React, { useEffect, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const googleMapsUrl =
  "https://www.google.com/maps/place/Kudajadri+Drizzle+-+Best+Wayanad+Homestays/@11.6944682,76.0899646,17z/data=!4m11!3m10!1s0x3ba6752bf8e8c185:0x5bf951fa893c48b4!5m2!4m1!1i2!8m2!3d11.6944682!4d76.0925395!9m1!1b1!16s%2Fg%2F1ptwp6yd6?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"; // Replace with exact link to your Google reviews

const testimonials = [
  {
    text: "Home Away Homestay in Wayanad, Kerala. Veg Only food, quick booking, spotless rooms, and helpful directions from Vinoop. Guidance on sightseeing made our trip memorable. Thank you Vinoop and family!",
    guest: "Narayan, Bangalore, India",
  },
  {
    text: "Rejuvenating Experience in #1 Home Stay in Wayanad! Truly homely vibes, caring hosts, and comfortable stay. Central location, easy access to attractions. Thanks Vinoop, Ganesh uncle, and family for warm hospitality.",
    guest: "Guest",
  },
  {
    text: "Cool Homestays for Family :) Kudajadri is the best homestay I’ve experienced. Stayed twice and always loved it! Clean, hygienic rooms, great food, and warm hospitality. Felt like family with Vinoop’s care.",
    guest: "Anantha Acharya, Bangalore, India",
  },
  {
    text: "Best Homestay in Wayanad! Loved it! Clean, hygienic, and full of Kerala delicacies. Vinoop and family pampered us throughout the stay. Care, warmth, and hospitality truly stood out. Highly recommended stay experience.",
    guest: "Suma Vijay, Bangalore, India",
  },
];

const truncateWords = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const GuestTestimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 0.5;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="sm:py-32 sm:px-[12%] mobile:px-4 mobile:py-14 large:px-[18%] bg-gray-50">
      <div className="flex flex-col gap-6 items-center">
        <h2 className="text-primary font-ivy sm:text-[44px] mobile:text-[32px] font-normal text-center">
          Guest Testimonials – What Visitors Say
        </h2>
        <p className="sm:text-xl text-secondary text-center font-albertSans max-w-4xl">
          Many travelers consider Kudajadri Drizzle among the best Kalpetta homestays. 
          Guests highlight serene surroundings, authentic cultural experiences, and personal 
          attention that makes each visit memorable.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="mt-12 flex gap-6 overflow-x-hidden pb-8"
      >
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[95%] sm:w-[50%] lg:w-[38%] xl:w-[30%] bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
          >
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <FaQuoteLeft className="text-primary text-2xl mb-4 opacity-70" />
                <p className="text-secondary text-base leading-relaxed font-albertSans mb-4">
                  {truncateWords(item.text, 30)}
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="font-medium text-primary">{item.guest}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuestTestimonials;
