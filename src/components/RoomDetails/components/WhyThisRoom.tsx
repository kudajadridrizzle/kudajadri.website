'use client';
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";

// Types
type RoomData = {
  title: string;
  description: string;
  images: string[];
};

type RoomContents = {
  [key: string]: RoomData;
} & {
  "classic-rooms": RoomData;
  "premium-rooms": RoomData;
  "deluxe-heritage-rooms": RoomData;
  "deluxe-rooms": RoomData;
};

// Room contents
const roomContents: RoomContents = {
  "classic-rooms": {
    title: "Classic Rooms",
    description: `
## Why Choose Our Classic Rooms in Wayanad

Our Classic Rooms are more than just a place to sleep—they are a complete experience of Wayanad’s hospitality. Whether you’re visiting for a short weekend or a long vacation, you’ll find everything you need here.

### Great Value for Money

Travelers often struggle to balance affordability and comfort. At Kudajadri Drizzle, you don’t have to compromise. The Classic Rooms combine both—giving you a neat, well-maintained space at a reasonable price.

### Perfect for All Types of Travelers

- Families will enjoy the spacious rooms and safe environment
- Couples will love the peaceful, private setting
- Solo travelers will find it affordable and homely
- Group travelers can book multiple rooms together
    `,
    images: [
      "/images/Rooms/classic/1 (1).jpg",
      "/images/Rooms/classic/1 (2).jpg",
    ],
  },

  "premium-rooms": {
    title: "Premium Rooms",
    description: `
## Luxury Homestays in Wayanad with Scenic Views

**Our premium homestays in Wayanad** are nestled in serene locations surrounded by nature. Wake up to the misty hills, breathe in fresh mountain air, and enjoy a sense of calm that only Wayanad can offer. These rooms are perfect for those who want a luxurious experience while staying close to nature.

### Highlights of Luxury Stays

- Panoramic views of lush valleys and plantations
- Peaceful environment for relaxation and rejuvenation
- Tasteful décor blending modern and traditional styles
- Perfect for weekend getaways, romantic trips, or family vacations
    `,
    images: [
      "/images/Rooms/premium/1 (1).jpg",
      "/images/Rooms/premium/1 (2).jpg",
    ],
  },

  "deluxe-heritage-rooms": {
    title: "Heritage Rooms",
    description: `
## Heritage Homestays in Wayanad with Authentic Charm

A stay in our Deluxe Heritage Rooms is like stepping back in time while enjoying all the comforts of today. The heritage-inspired décor, antique furniture, and locally crafted accents create a unique ambiance. Guests often appreciate the combination of tradition and luxury, making these rooms one of the top **heritage homestays in Wayanad.**

### Unique Features of Heritage Rooms

- High ceilings with traditional wooden beams
- Vintage décor and art pieces reflecting local culture
- Peaceful and scenic surroundings
- Natural ventilation and sunlight for a refreshing stay
    `,
    images: [
      "/images/Rooms/deluxe_heritage/1 (1).jpg",
      "/images/Rooms/deluxe_heritage/1 (2).jpg",
    ],
  },

  "deluxe-rooms": {
    title: "Deluxe Rooms",
    description: `
## Why Choose Our Cottages in Wayanad

Staying in our **cottages in Wayanad** gives you more than just a room; it’s an experience of living close to nature. Unlike regular hotels, our cottages offer privacy, serenity, and a homely environment.

### Benefits of Choosing Our Wayanad Deluxe Rooms

- Peaceful surroundings for relaxation
- Perfect for couples, families, and solo travelers
- Access to scenic gardens and nature trails
- Personalized hospitality for every guest
    `,
    images: [
      "/images/Rooms/deluxe/1 (1).jpg",
      "/images/Rooms/deluxe/1 (2).jpg",
    ],
  },
};

const WhyThisRoom = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop() || "";
  const room = (roomContents as RoomContents)[path as keyof RoomContents];

  if (!room)
    return (
      <p className="text-red-500 text-center py-10">
        Room not found
      </p>
    );

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

      {/* Images */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {room.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${room.title} ${idx + 1}`}
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default WhyThisRoom;
