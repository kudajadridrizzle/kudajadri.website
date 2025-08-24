import React, { useEffect, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "Kudajadri Drizzle was the most peaceful stay I've ever had. The surroundings were calm and serene, and the hospitality was exceptional.",
    guest: "Anjali R.",
  },
  {
    text: "The authentic cultural experiences and personal attention to detail made our stay truly special. The food was absolutely delicious!",
    guest: "Rajesh K.",
  },
  {
    text: "The homely feel, scenic views, and immersive Kerala experiences made our trip unforgettable. Can't wait to visit again!",
    guest: "Meera S.",
  },
  {
    text: "The perfect blend of comfort and nature. Waking up to the misty mountains was a dream come true. Highly recommended!",
    guest: "Vikram P.",
  },
  {
    text: "The perfect blend of comfort and nature. Waking up to the misty mountains was a dream come true. Highly recommended!",
    guest: "Vikram P.",
  },
  {
    text: "The perfect blend of comfort and nature. Waking up to the misty mountains was a dream come true. Highly recommended!",
    guest: "Vikram P.",
  },
  {
    text: "The perfect blend of comfort and nature. Waking up to the misty mountains was a dream come true. Highly recommended!",
    guest: "Vikram P.",
  },
];

const GuestTestimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
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
        Many travelers consider Kudajadri Drizzle among the best Kalpetta homestays. Guests highlight the serene surroundings, authentic cultural experiences, and personal attention that makes each visit memorable. Our reviews often mention the homely feel, scenic views, and immersive Kerala experiences. Reading guest testimonials can help new visitors understand why Kudajadri Drizzle stands out among other homestays in Kalpetta.
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="mt-12 flex gap-6 overflow-x-hidden pb-8 -mx-4 px-4"
      >
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[30%] xl:w-[23%] bg-white p-6 rounded-2xl border border-gray-200"
          >
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <FaQuoteLeft className="text-primary text-2xl mb-4 opacity-70" />
                <p className="text-secondary text-base leading-relaxed font-albertSans mb-6">
                  {item.text}
                </p>
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
