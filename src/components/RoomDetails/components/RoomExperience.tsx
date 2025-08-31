'use client';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const RoomExperience = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop() || '';

  // Map routes to room content and images
  const contentMap: Record<string, { content: string; image: string }> = {
    'classic-rooms': {
        image: '/images/Rooms/classic/1 (6).jpg', 
        content: `
## Affordable Homestay in Wayanad with a Touch of Tradition

One of the highlights of our [Wayanad homestay](/) is its traditional design. The Classic Rooms reflect the charm of Kerala’s architecture while blending modern convenience. From wooden accents to open spaces filled with natural light, every detail adds to the authentic experience.

It’s not just about staying—it’s about feeling the culture of Wayanad while enjoying a warm and cozy space.
  
`,
    },
    'premium-rooms': {
        image: '/images/Rooms/premium/1 (2).jpg', 
      content: `
## Authentic Local Hospitality with Premium Comfort

A stay at our **premium homestays in Wayanad** is more than just a room—it’s an experience. Our hosts ensure you feel at home, offering local cuisine, insights into the region, and personalized care. Enjoy the blend of modern luxury and traditional Kerala hospitality in every aspect of your stay.

### Guest Experiences Include

- Home-cooked Kerala meals with fresh ingredients  
- Guidance for offbeat local attractions  
- Opportunities to engage with local culture and traditions  
- Personalized attention for a stress-free stay  
`,
    },
    'deluxe-heritage-rooms': {
        image: '/images/Rooms/deluxe_heritage/1 (4).jpg', 
      content: `
## Authentic Kerala Hospitality in a Traditional Homestay in Wayanad

One of the biggest draws of staying in our **traditional homestay in Wayanad** is the hospitality. From warm welcomes to personalized care, our team ensures every guest feels special. Guests can enjoy home-cooked meals, guidance for local attractions, and tips to explore Wayanad’s hidden gems.

### What Makes Our Heritage Homestay Special

- Personalized guest services for a comfortable stay  
- Home-style Kerala meals with fresh ingredients  
- Warm and welcoming hosts sharing local knowledge  
- Peaceful, scenic surroundings away from crowds  
`,
    },
    'deluxe-rooms': {
      image: '/images/Rooms/deluxe/1 (4).jpg', 
      content: `
## Experience Local Hospitality in Our Wayanad Cottages 

What makes our **Wayanad cottages** special is the warm hospitality. Guests can enjoy home-cooked meals, guidance for local sightseeing, and personalized care throughout their stay. Staying in our Deluxe Rooms gives you a unique opportunity to experience the local culture while enjoying modern comfort.

### Highlights of Guest Experience

- Traditional meals prepared with fresh ingredients  
- Assistance with sightseeing and local attractions  
- Friendly and attentive staff for a comfortable stay  
- Peaceful surroundings away from the city crowd  
`,
    },
  };

  const roomData = contentMap[path];

  if (!roomData) {
    return <p className="text-secondary font-albertSans text-base sm:text-lg">Content not available for this room.</p>;
  }

  return (
    <section className="py-12 px-4 sm:px-12 lg:px-[18%] 2xl:px-[12%]">
      {roomData.image && (
        <div className="mb-8">
          <img
            src={roomData.image}
            alt={`${path} hero`}
            className="w-full h-[400px] rounded-2xl shadow-lg object-cover"
          />
        </div>
      )}
      <div>
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
            p: ({ children }) => (
              <p className="text-secondary font-albertSans text-base sm:text-lg leading-relaxed mb-3">
                {children}
              </p>
            ),
            li: ({ children }) => (
              <li className="ml-4 list-disc text-secondary font-albertSans mb-2">
                {children}
              </li>
            ),
          }}
        >
          {roomData.content}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default RoomExperience;
