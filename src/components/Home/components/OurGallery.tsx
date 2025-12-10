'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Images
import imageOne from '../../../assets/imageOne.jpg';
import imageTwo from '../../../assets/imageTwo.jpg';
import imageThree from '../../../assets/imageThree.jpg';
import heritage1 from '../../../assets/heritage1.jpg';
import heritage2 from '../../../assets/heritage2.jpg';
import heritage3 from '../../../assets/heritage3.jpg';
import nature1 from '../../../assets/nature1.jpg';
import nature2 from '../../../assets/nature2.jpg';
import nature3 from '../../../assets/nature3.jpg';
import room1 from '../../../assets/room1.jpeg';
import room2 from '../../../assets/room2.jpeg';
import room3 from '../../../assets/room3.jpeg';

const HEADING = 'Our Gallery - Wayanad Homestays Visual Tour';

const CONTENT = `
Take a visual tour of our beautiful property through our gallery. Explore images of our well-appointed rooms, traditional architecture, and serene outdoor spaces surrounded by lush greenery. Each photograph captures the comfort, warmth, and natural beauty of our **homestay in Wayanad**, offering you a glimpse of the peaceful retreat awaiting your arrival. Let our gallery inspire your next stay with us.
`.trim();

type ImageSize = 'tall' | 'wide' | 'square';

const GALLERY_IMAGES: { src: string; alt: string; size: ImageSize }[] = [
  { src: imageOne, alt: 'Homestay exterior view', size: 'tall' },
  { src: imageTwo, alt: 'Cozy room interior', size: 'wide' },
  { src: imageThree, alt: 'Garden and sit-out', size: 'square' },

  { src: heritage1, alt: 'Traditional architecture detail', size: 'square' },
  { src: heritage2, alt: 'Courtyard and pathway', size: 'tall' },
  { src: heritage3, alt: 'Veranda seating area', size: 'wide' },

  { src: nature1, alt: 'Greenery around the homestay', size: 'wide' },
  { src: nature2, alt: 'Mist and hills of Wayanad', size: 'tall' },
  { src: nature3, alt: 'Calm outdoor relaxation spot', size: 'square' },

  { src: room1, alt: 'Bedroom with warm lighting', size: 'square' },
  { src: room2, alt: 'Room with window view', size: 'wide' },
  { src: room3, alt: 'Spacious room interior', size: 'tall' },
];

const MAX_CHARS = 380;

export default function OurGallery() {
  const [expanded, setExpanded] = useState(false);

  const isLong = CONTENT.length > MAX_CHARS;
  const preview = isLong ? `${CONTENT.slice(0, MAX_CHARS)}...` : CONTENT;

  const getImageHeightClass = (size: ImageSize) => {
    switch (size) {
      case 'tall':
        return 'h-80 sm:h-96';
      case 'wide':
        return 'h-56 sm:h-64';
      case 'square':
      default:
        return 'h-64 sm:h-72';
    }
  };

  return (
    <section className="mobile:py-14 mobile:px-4 sm:py-24 sm:px-[12%] large:px-[18%] flex flex-col gap-12">
      {/* Heading + Content */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
        <h2 className="flex-1 text-primary font-ivy mobile:text-[30px] sm:text-[40px] leading-tight">
          {HEADING}
        </h2>

        <div className="flex-1 text-secondary sm:text-lg font-albertSans">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {expanded || !isLong ? CONTENT : preview}
          </ReactMarkdown>

          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-sm text-primary hover:underline"
            >
              {expanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
      </div>

      {/* Masonry Grid with different ratios */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-2">
        {GALLERY_IMAGES.map(({ src, alt, size }, index) => (
          <div
            key={index}
            className="relative inline-block w-full overflow-hidden rounded-[16px] group"
            style={{ breakInside: 'avoid' }}
          >
            <div className={`w-full ${getImageHeightClass(size)}`}>
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
            </div>

            {/* Hover gradient overlay (no text) */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}
