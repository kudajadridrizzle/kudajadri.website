"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FacilitySection {
  title: string;
  content: string[];
  list?: string[];
}

const sections: FacilitySection[] = [
  {
    title: "Relax and Refresh at the Swimming Pool",
    content: [
      "Take a break and relax at our swimming pool, the perfect spot to unwind during your stay. The pool is ideal for both adults and children, offering a refreshing escape from the heat. Spend your time swimming, floating, or just lounging by the water. Comfortable seating and shaded areas make it easy to enjoy the pool even if you prefer to stay dry.",
      "A dip in the swimming pool is a great way to refresh your mind and body. It adds a touch of leisure to your stay and makes your premium homestay experience more enjoyable."
    ],
    list: [
      "Morning swims to start your day fresh",
      "Evening relaxation while watching the sunset",
      "Family fun and games in a safe environment"
    ]
  },
  {
    title: "Enjoyable Experiences at Our Homestay",
    content: [
      "Make your stay memorable with a variety of experiences and activities designed for all ages. Whether you love nature, wildlife, or local culture, there’s something for everyone to enjoy.",
      "Take a guided nature walk through the lush greenery surrounding the homestay. Explore nearby Wayanad cottages, enjoy scenic sightseeing, and spot birds, butterflies, and other wildlife while learning about the local flora and fauna. You can also have fun with games like badminton, cricket, caroms, and playing cards with family and friends.",
      "These experiences help you connect with nature, stay active, and unwind, making your heritage homestay stay truly refreshing and enjoyable."
    ],
    list: [
      "Wildlife spotting excursions",
      "Interacting with friendly local hosts",
      "Campfire evenings under the stars"
    ]
  },
  {
    title: "Convenience & Guest Services at Our Homestay",
    content: [
      "We ensure a comfortable stay with a range of guest services. Our team provides daily housekeeping to keep your rooms clean and fresh.",
      "Take advantage of our laundry service to keep your clothes neat during your stay. For easy travel, we offer pick-up and drop-off services, making transportation hassle-free.",
      "Guests also enjoy private parking for their vehicles, ensuring convenience and security. These services are designed to make your stay affordable homestay friendly, relaxing, and worry-free, so you can focus on enjoying your time at the homestay."
    ]
  },
  {
    title: "Security & Supportive Services at Our Homestay",
    content: [
      "We value your safety and comfort throughout your stay. The homestay is equipped with CCTV security, giving you a secure environment where you can truly relax.",
      "Guests also benefit from local guidance, making it easier to discover nearby attractions, plan day trips, and enjoy authentic experiences. Our hosts are always ready to share insights and tips about the area.",
      "With trusted security and personal assistance, you can focus on enjoying your time, knowing that both safety and support are always taken care of in your homestay experience."
    ]
  }
];

const FacilitiesAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-20 px-4 sm:px-12 lg:px-[12%] 2xl:px-[18%]">
      {/* Header */}
      <div className="flex flex-col items-center mb-12">
        <span className="uppercase text-primary tracking-[1.6px] text-sm font-albertSans mb-2">
          Our Facilities
        </span>
        <h2 className="text-primary text-center font-ivy sm:text-[44px] mobile:text-[32px] mb-6">
          Wayanad Homestay with Best Facilities
        </h2>
        <div className="h-1 w-20 bg-primary"></div>
      </div>

      {/* Layout: Accordion + Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Accordion (Left) */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex items-center justify-between p-6 text-left group hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-ivy text-primary">
                  {section.title}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                </motion.div>
              </button>

              {/* Animated Content */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-8 space-y-4">
                      <div className="h-px bg-gray-100 w-full"></div>
                      <div className="space-y-4 text-gray-700 font-albertSans text-base leading-relaxed">
                        {section.content.map((para, i) => (
                          <p key={i} className="text-secondary">
                            {para}
                          </p>
                        ))}

                        {section.list && (
                          <ul className="list-disc list-inside space-y-2 mt-4">
                            {section.list.map((item, i) => (
                              <li key={i} className="text-secondary">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Image (Right) */}
        <div className="w-full h-full">
        <img
            src="/images/pool34.jpg"
            alt="Wayanad Homestay Facilities"
            className="w-full h-64 sm:h-80 lg:h-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FacilitiesAccordion;
