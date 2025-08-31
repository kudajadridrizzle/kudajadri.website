'use client';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Define types
type RouteContent = {
  title: string;
  description: string;
};

const contents: Record<string, RouteContent> = {
  'classic-rooms': {
    title: 'The Charm of Staying in a Homestay in Wayanad',
    description: `
## The Charm of Staying in a Homestay in Wayanad

Hotels may provide luxury, but homestays offer something unique—warmth and personal care. Our Classic Rooms give you the chance to experience Wayanad’s culture and lifestyle closely.

### Benefits of choosing a homestay over hotels:
- Friendly and personalized hospitality
- Homely atmosphere with local touch
- Authentic Kerala food on request
- Peaceful surroundings away from crowds

This is why travelers looking for an **affordable homestay in Wayanad** prefer our Classic Rooms.
    `,
  },

  'premium-rooms': {
    title: 'Comfort and Elegance in Every Room',
    description: `
## Comfort and Elegance in Every Room

Our **premium rooms in Wayanad** are designed to provide a balance of luxury and homely comfort. Spacious layouts, stylish furniture, and ambient lighting make every room relaxing. Whether you want to read, rest, or simply enjoy the view, these rooms create the perfect environment.

### Room Amenities Include
- King-size or queen beds with premium linens
- Air-conditioning for added comfort
- Flat-screen TVs and Wi-Fi connectivity
- Private seating areas and balconies
- Luxury toiletries and essentials
    `,
  },

  'deluxe-heritage-rooms': {
    title: 'Comfort and Tradition Combined',
    description: `
## Comfort and Tradition Combined

Our Deluxe Heritage Rooms are designed to offer both luxury and the warmth of tradition. Spacious layouts, traditional woodwork, and thoughtful amenities create a memorable stay. Guests enjoy the blend of modern convenience and cultural authenticity, making our [Wayanad homestay](/) a preferred choice among travelers seeking **heritage homestays in Wayanad**.

### Room Amenities Include
- Comfortable beds with premium linens
- Air-conditioning for added comfort
- Private seating areas and balconies
- Modern bathrooms with hot water and toiletries
- Free Wi-Fi and entertainment options
    `,
  },

  'deluxe-rooms': {
    title: 'Ideal Stay for Families, Couples, and Solo Travelers',
    description: `
## Ideal Stay for Families, Couples, and Solo Travelers

Our **cottages in Wayanad** are versatile enough to suit different types of travelers. Families love the space and privacy, couples enjoy a romantic and serene atmosphere, and solo travelers find a peaceful environment to relax.

### Who Should Book Deluxe Rooms
- Families looking for spacious accommodations
- Couples seeking a private getaway
- Solo travelers wanting a calm retreat
- Nature lovers exploring Wayanad’s scenic beauty
    `,
  },
};

const RoomDetails = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop() || '';
  const content = path in contents ? contents[path] : null;

  if (!content) {
    return (
      <p className="text-red-500 text-center py-10">
        Room details not found
      </p>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-12 lg:px-[18%] 2xl:px-[12%]">
      <div>
        <ReactMarkdown
          components={{
            h2: ({ children }) => (
              <h2 className="text-3xl sm:text-4xl font-ivy text-primary mb-6">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl sm:text-3xl font-ivy text-black mb-4">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-secondary font-albertSans text-base sm:text-lg leading-relaxed mb-3">
                {children}
              </p>
            ),
            li: ({ children }) => (
              <li className="ml-4 list-disc text-secondary font-albertSans mb-1">
                {children}
              </li>
            ),
          }}
        >
          {content.description}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default RoomDetails;
