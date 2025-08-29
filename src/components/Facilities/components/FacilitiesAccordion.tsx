'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';


const facilities = [
  {
    title: 'Relax and Refresh at the Swimming Pool',
    content: `
Take a break and relax at our **swimming pool**, the perfect spot to unwind during your stay. The pool is ideal for both adults and children, offering a refreshing escape from the heat.

Spend your time swimming, floating, or just lounging by the water. Comfortable seating and shaded areas make it easy to enjoy the pool even if you prefer to stay dry.

You can also use the pool area for:
- Morning swims to start your day fresh
- Evening relaxation while watching the sunset
- Family fun and games in a safe environment

A dip in the **swimming pool** is a great way to refresh your mind and body. It adds a touch of leisure to your stay and makes your [premium homestay experience](rooms/premium-rooms) more enjoyable.
    `,
  },
  {
    title: 'Enjoyable Experiences at Our Homestay',
    content: `
Make your stay memorable with a variety of experiences and activities designed for all ages. Whether you love nature, wildlife, or local culture, there’s something for everyone to enjoy.

Take a guided nature walk through the lush greenery surrounding the homestay. Explore nearby [Wayanad cottages](rooms/deluxe-rooms), enjoy scenic sightseeing, and spot birds, butterflies, and other wildlife while learning about the local flora and fauna.

You can also have fun with games like badminton, cricket, caroms, and playing cards with family and friends.

Other activities include:
- Wildlife spotting excursions
- Interacting with friendly local hosts
- Campfire evenings under the stars

These experiences help you connect with nature, stay active, and unwind, making your [heritage homestay](rooms/delux-heritage-rooms) stay truly refreshing and enjoyable.
    `,
  },
  {
    title: 'Convenience & Guest Services at Our Homestay',
    content: `
We ensure a comfortable stay with a range of guest services. Our team provides daily housekeeping to keep your rooms clean and fresh.

Take advantage of our laundry service to keep your clothes neat during your stay. For easy travel, we offer pick-up and drop-off services, making transportation hassle-free.

Guests also enjoy private parking for their vehicles, ensuring convenience and security. These services are designed to make your stay [affordable homestay](rooms/classic-rooms), friendly, relaxing, and worry-free, so you can focus on enjoying your time at the homestay.
    `,
  },
  {
    title: 'Security & Supportive Services at Our Homestay',
    content: `
We value your safety and comfort throughout your stay. The homestay is equipped with CCTV security, giving you a secure environment where you can truly relax.

Guests also benefit from local guidance, making it easier to discover nearby attractions, plan day trips, and enjoy authentic experiences. Our hosts are always ready to share insights and tips about the area.

With trusted security and personal assistance, you can focus on enjoying your time, knowing that both safety and support are always taken care of in your homestay experience.
    `,
  },
];

const FacilitiesAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-20 px-4 sm:px-12 lg:px-[12%] 2xl:px-[18%]">
      <h2 className="text-3xl sm:text-4xl font-ivy text-center text-primary mb-10">
        Facilities & Services at Kudajadri Drizzle
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left - Accordion */}
        <div className="space-y-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="font-ivy text-xl sm:text-2xl text-black">
                  {facility.title}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-primary" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary" />
                )}
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-[1000px] opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6 flex flex-col gap-4">
                  <ReactMarkdown
                    components={{
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          className="text-primary underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                      strong: ({ children }) => <strong>{children}</strong>,
                      li: ({ children }) => (
                        <li className="ml-4 list-disc text-secondary font-albertSans">
                          {children}
                        </li>
                      ),
                      p: ({ children }) => (
                        <p className="text-secondary font-albertSans text-base sm:text-lg leading-relaxed">
                          {children}
                        </p>
                      ),
                    }}
                  >
                    {facility.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Sticky Image */}
        <div className="w-full h-full">
          <div className="sticky top-24 aspect-square">
            <img
              src="/images/pool34.jpg"
              alt="Facilities at Kudajadri Drizzle"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesAccordion;
