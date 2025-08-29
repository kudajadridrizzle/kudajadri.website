'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';

const roomServicesContents = {
  "classic-rooms": {
    title: "Facilities at Our Affordable Homestay in Wayanad",
    description: `
## Facilities at Our Affordable Homestay in Wayanad

We believe in keeping things simple yet satisfying. Our Classic Rooms come with everything you need for a comfortable stay.

### Room Amenities

- Clean and cozy double beds
- Private bathrooms with hot water
- Free Wi-Fi to stay connected
- Seating area for relaxation

### Property Features

- Safe parking space
- Traditional Kerala-style architecture
- Common areas to sit and unwind
- Lush greenery all around
    `,
  },

  "premium-rooms": {
    title: "Personalized Services at Our Luxury Homestays",
    description: `
## Personalized Services at Our Luxury Homestays in Wayanad

At our premium [Wayanad homestays](/), every guest is treated with care and attention. Our team ensures that your stay is seamless, providing personalized services from check-in to check-out.

### Services You Can Expect

- Daily housekeeping and room service
- Assistance with local sightseeing and excursions
- Home-cooked meals highlighting local flavors
- Travel guidance for Wayanad attractions
    `,
  },

  "deluxe-heritage-rooms": {
    title: "Personalized Services in Our Traditional Homestay",
    description: `
## Personalized Services in Our Traditional Homestay in Wayanad

We ensure that your stay in our traditional homestay in Wayanad is comfortable and memorable. Our staff provides personalized attention, helping with sightseeing, meals, and any special requests to make your experience seamless.

### Guest Services Include

- Home-cooked Kerala meals on request
- Assistance with local travel and excursions
- Housekeeping and room service
- Guidance on cultural and heritage tours
    `,
  },

  "deluxe-rooms": {
    title: "Modern Comfort in Traditional Cottages",
    description: `
## Modern Comfort in Traditional Cottages

Our Deluxe Rooms provide a perfect mix of modern comfort and rustic charm. The interiors reflect the natural aesthetics of Wayanad while offering all the facilities you need for a comfortable stay.

### Amenities in Our Deluxe Rooms

- Comfortable bedding with fresh linens
- Air-conditioning for hot and humid days
- Free Wi-Fi and entertainment options
- Daily housekeeping for a clean stay
- Private balconies with stunning views
    `,
  },
};

const RoomServices: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop() || "";
  const room = roomServicesContents[path];

  if (!room) {
    return (
      <p className="text-red-500 text-center py-10">
        Room services not found
      </p>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-12 lg:px-[18%] 2xl:px-[12%]">
   

      {/* Markdown Content */}
      <ReactMarkdown
        components={{
          h2: ({ children }) => (
            <h2 className="text-3xl sm:text-4xl font-ivy text-primary mb-6">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl sm:text-3xl font-ivy text-black mb-4">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-secondary font-albertSans text-base sm:text-lg leading-relaxed mb-3">{children}</p>
          ),
          li: ({ children }) => (
            <li className="ml-4 list-disc text-secondary font-albertSans mb-1">{children}</li>
          ),
        }}
      >
        {room.description}
      </ReactMarkdown>
    </section>
  );
};

export default RoomServices;
