'use client';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const RoomBookingCTA = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop() || '';

  // Map routes to booking CTA content
  const bookingMap: Record<string, string> = {
    'classic-rooms': `
## Book Your Budget Friendly Homestay in Wayanad Today

Finding the right place to stay can make or break your trip. If you’re looking for an **affordable homestay in Wayanad** that feels like home, Kudajadri Drizzle’s Classic Rooms are the perfect choice. With budget-friendly pricing, cozy interiors, and a location close to major attractions, your stay will be both relaxing and memorable.Reserve your Classic Room today and experience the best of Wayanad without stretching your budget.
`,
    'premium-rooms': `
## Book Your Premium Homestay in Wayanad Today

If you’re searching for **luxury homestays in Wayanad** that combine elegance, comfort, and authenticity, look no further. Our **premium homestays in Wayanad** offer the perfect base for your adventures, ensuring a relaxing and memorable stay. Book your premium room today and experience Wayanad the way it’s meant to be enjoyed—peaceful, scenic, and luxurious.
`,
    'deluxe-heritage-rooms': `
## Book Your Heritage Homestay in Wayanad Today

If you’re looking for a **heritage homestay in Wayanad** or a **traditional homestay in Wayanad**, our Deluxe Heritage Rooms offer the perfect solution. Enjoy cultural authenticity, modern comfort, and scenic surroundings while exploring Wayanad. Reserve your stay today and experience Wayanad in style and tradition.
`,
    'deluxe-rooms': `
## Book Your Cottage in Wayanad

If you are looking for the best **Wayanad cottages** or **cottages in Wayanad** for a comfortable and memorable stay, our Deluxe Rooms are the ideal choice. Experience privacy, scenic beauty, and modern comfort while exploring everything Wayanad has to offer. Reserve your Deluxe Room today for an unforgettable holiday.
`,
  };

  const content = bookingMap[path];

  if (!content) return null; // Render nothing if route doesn't match

  return (
    <section className="py-12 px-4 sm:px-12 lg:px-[18%] 2xl:px-[12%] bg-primary/5 rounded-lg text-center">
      <ReactMarkdown
        components={{
          h2: ({ children }) => (
            <h2 className="text-3xl sm:text-4xl font-ivy text-primary mb-6">
              {children}
            </h2>
          ),
          p: ({ children }) => (
            <p className="text-secondary font-albertSans text-base sm:text-lg leading-relaxed mb-4">
              {children}
            </p>
          ),
        }}
      >
        {content}
      </ReactMarkdown>

      {/* Book Now Button */}
      <div className="mt-6">
        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default RoomBookingCTA;
