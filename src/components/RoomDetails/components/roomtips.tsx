'use client';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const RoomTips = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop() || '';

  // Map routes to room-specific tips content
  const tipsMap: Record<string, string> = {
    'classic-rooms': `
## How to Make the Most of Your Stay in Wayanad

If you’re planning your trip, here are a few tips to make it more enjoyable while staying at our budget friendly homestays in Wayanad:

- Start your mornings with a walk around the property to enjoy fresh air  
- Try local dishes offered on request for an authentic taste of Kerala  
- Plan short day trips to nearby attractions and return to relax in your Classic Room  
- Carry a camera to capture the scenic beauty around the homestay  
- Spend your evenings enjoying the calmness instead of rushing around  
`,
    'premium-rooms': `
## Plan Your Stay in Our Luxury Homestays in Wayanad

Booking our premium rooms in Wayanad ensures a memorable and comfortable stay. From scenic views to personalized services, every aspect of your experience is thoughtfully designed. Spend your days exploring Wayanad’s beauty and your evenings in the cozy ambiance of your premium room.

### What Makes Our Luxury Homestays Special

- Prime locations amidst Wayanad’s natural beauty  
- Elegant interiors with modern amenities  
- Personalized services and warm hospitality  
- Peaceful, private, and secure environment  
`,
    'deluxe-heritage-rooms': `
## Plan Your Stay in Our Heritage Homestay in Wayanad

Booking our Deluxe Heritage Rooms guarantees an unforgettable experience of Wayanad. With the perfect combination of culture, comfort, and scenic beauty, these rooms are ideal for those looking to enjoy both heritage and modern amenities.

### Key Advantages of Staying in Deluxe Heritage Rooms

- Prime location with easy access to attractions  
- Authentic traditional interiors and décor  
- Modern facilities for a comfortable stay  
- Personal care and attention from hosts  
`,
    'deluxe-rooms': `
## Plan Your Stay in Our Wayanad Cottages

Booking a Deluxe Room in our cottages in Wayanad guarantees a memorable and relaxing holiday. Whether you are exploring nature, enjoying family time, or on a romantic getaway, these rooms provide the perfect base for your adventures.

### Why Choose Our Cottages

- Premium comfort in a homely environment  
- Close proximity to Wayanad’s attractions  
- Personalized services for every guest  
- Peaceful surroundings amidst greenery  
`,
  };

  const content = tipsMap[path];

  if (!content) return null; // If route doesn't match, render nothing

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

export default RoomTips;
