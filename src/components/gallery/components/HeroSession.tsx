'use client';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

// Markdown content with regular HTML links
const heroText = `
Explore the **Kudajadri Drizzle Homestay through our photos and video gallery**. Each image captures the serene surroundings, lush greenery, and charming architecture of our property. From cozy heritage rooms to relaxing common areas, the gallery showcases every corner of this Wayanad homestay. Watch our videos to get a real feel of the ambiance, activities, and experiences awaiting you. See guests enjoying the [swimming pool](/facilities-amenities), nature walks, and recreational games, giving you a glimpse of a memorable stay. Our gallery is designed to help you visualize your stay and plan your visit to one of the [best Wayanad homestays](/).
`;

export const HeroSession = () => {
  return (
    <section className="w-full h-[vh] flex justify-center items-center px-4 sm:px-12">
      <div className="flex flex-col items-center text-center max-w-5xl gap-6">
        {/* Small Label */}
        <span className="uppercase font-albertSans text-base tracking-wider text-[#000]">
          Gallery
        </span>

        {/* Heading */}
        <h1 className="font-staylista text-[32px] sm:text-[72px] leading-tight">
          Photo & Video Gallery of Kudajadri Drizzle Homestay
        </h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="text-[#6E6E6E] font-albertSans text-base sm:text-xl leading-relaxed"
        >
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
            }}
          >
            {heroText}
          </ReactMarkdown>
        </motion.div>
      </div>
    </section>
  );
};
