'use client';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const DeluxeRoomTips = () => {
  const location = useLocation();
  const path = location.pathname;

  // Only render for /rooms/deluxe-rooms
  if (path !== '/rooms/deluxe-rooms') {
    return null;
  }

  const content = `
## Comfort, Privacy, and Scenic Views

Our Deluxe Rooms in Wayanad cottages offer the ideal combination of comfort, privacy, and nature. Each room provides a serene environment where you can relax after a day of sightseeing. The spacious layout and private balconies ensure a peaceful retreat while enjoying the beauty of Wayanad.

### Room Advantages

- Spacious and well-lit interiors  
- Comfortable beds with premium linens  
- Modern amenities including Wi-Fi and air-conditioning  
- Scenic views from private balconies  
- Peaceful, secure, and homely environment  
`;

  return (
    <section className="py-12 px-4 sm:px-12 lg:px-[18%] 2xl:px-[12%]">
      <ReactMarkdown
        components={{
          h2: ({ children }) => (
            <h2 className="text-3xl sm:text-4xl font-ivy text-primary mb-6">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl sm:text-2xl font-ivy text-primary mb-4">
              {children}
            </h3>
          ),
          li: ({ children }) => (
            <li className="ml-4 list-disc text-secondary font-albertSans mb-2">
              {children}
            </li>
          ),
          p: ({ children }) => (
            <p className="text-secondary font-albertSans text-base sm:text-lg leading-relaxed mb-3">
              {children}
            </p>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </section>
  );
};

export default DeluxeRoomTips;
