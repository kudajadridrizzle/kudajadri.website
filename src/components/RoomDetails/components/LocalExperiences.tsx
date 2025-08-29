'use client';
import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Room experiences content
const roomExperiences = {
  'classic-rooms': {
    title: 'Local Experiences Around Our Budget Friendly Homestays in Wayanad',
    description: `
## Local Experiences Around Our Budget Friendly Homestays in Wayanad

Staying at Kudajadri Drizzle places you close to some of the most beautiful attractions in Wayanad. From waterfalls to wildlife, you’ll have plenty of options to explore.

### Nearby Places You Can Visit

- Edakkal Caves – Famous for ancient carvings
- Pookode Lake – A scenic freshwater lake
- Soochipara Waterfalls – Perfect for adventure lovers
- Wayanad Wildlife Sanctuary – Spot elephants and other wildlife
- Chembra Peak – Popular trekking destination

After a day of sightseeing, you can return to your Classic Room and relax in comfort.

    `,
    images: [
      '/images/wayanad/chembra_peak.jpg',
      '/images/wayanad/chembra_peak.jpg',
      '/images/wayanad/chembra_peak.jpg',
      '/images/wayanad/chembra_peak.jpg',
    ],
  },

  'premium-rooms': {
    title: 'Explore Wayanad While Staying in Premium Rooms',
    description: `
## Explore Wayanad While Staying in Premium Rooms

Staying in our **luxury homestays in Wayanad** places you close to some of the region’s most popular attractions. From waterfalls to wildlife sanctuaries, you can explore everything at your own pace and return to the comfort of your premium room.

### Nearby Attractions

- Edakkal Caves – Ancient rock carvings and history
- Pookode Lake – Boating and scenic walks
- Banasura Sagar Dam – Stunning landscapes and leisure spots
- Wayanad Wildlife Sanctuary – Safari and nature experiences
- Chembra Peak – Trekking and panoramic views
    `,
    images: [
      '/images/wayanad/chembra_peak.jpg',
      '/images/wayanad/chembra_peak.jpg',
      '/images/wayanad/chembra_peak.jpg',
      '/images/wayanad/chembra_peak.jpg',
    ],
  },

  'deluxe-heritage-rooms': {
    title: 'Explore Wayanad While Staying in Heritage Rooms',
    description: `
## Explore Wayanad While Staying in Heritage Rooms

Staying at our **heritage homestay in Wayanad** puts you close to nature and cultural attractions. You can enjoy the serenity of the hills while planning visits to famous landmarks, waterfalls, and plantations.

### Nearby Attractions

- Edakkal Caves – Ancient rock carvings and history
- Banasura Sagar Dam – Scenic views and leisure activities
- Pookode Lake – Boating and nature walks
- Wayanad Wildlife Sanctuary – Wildlife spotting
- Chembra Peak – Trekking and panoramic vistas
    `,
    images: [
      '/images/wayanad/chembra_peak.jpg',
      '/images/wayanad/chembra_peak.jpg',
      '/images/wayanad/chembra_peak.jpg',
      '/images/wayanad/chembra_peak.jpg',
    ],
  },

  'deluxe-rooms': {
    title: 'Explore Wayanad from Our Cottages',
    description: `
## Explore Wayanad from Our Cottages

Booking one of our **Wayanad cottages** places you close to all the major attractions of the region. You can explore waterfalls, wildlife sanctuaries, trekking trails, and plantations while enjoying the privacy and comfort of your Deluxe Room.

### Nearby Attractions

- Edakkal Caves – Ancient carvings and history
- Pookode Lake – Boating and walking trails
- Banasura Sagar Dam – Scenic views and adventure activities
- Wayanad Wildlife Sanctuary – Safari and nature exploration
- Chembra Peak – Trekking and panoramic vistas
    `,
    images: [
      '/images/wayanad/chembra_peak.jpg',
      '/images/wayanad/chembra_peak.jpg',
      '/images/wayanad/chembra_peak.jpg',
      '/images/wayanad/chembra_peak.jpg',
    ],
  },
};

const RoomExperiences = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop() || '';
  const room = roomExperiences[path];

  if (!room)
    return (
      <p className="text-red-500 text-center py-10">
        Experiences not found
      </p>
    );

  return (
    <section className="py-12 px-4 sm:px-12 lg:px-[18%] 2xl:px-[12%]">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Left: Text */}
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
            {room.description}
          </ReactMarkdown>
        </div>

        {/* Right: Image Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {room.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${room.title} ${idx + 1}`}
              className="w-full h-48 object-cover rounded-2xl shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomExperiences;
