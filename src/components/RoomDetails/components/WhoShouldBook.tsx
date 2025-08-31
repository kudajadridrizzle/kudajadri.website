'use client';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const WhoShouldBook = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop() || '';

  // All content in one place
  const contentMap: Record<string, string> = {
    'classic-rooms': `
## Who Should Book Our Classic Rooms

Our rooms are suited for a wide range of travelers. If you fall into any of these categories, you’ll find them ideal:

- **Budget Travelers** – Affordable stay without cutting down on comfort  
- **Families** – Spacious rooms with homely vibes  
- **Couples** – Quiet and private atmosphere  
- **Nature Lovers** – Surrounded by greenery and fresh air  
- **Workation Seekers** – Wi-Fi and peaceful setting for remote work  

No matter your travel purpose, our Classic Rooms give you the best of Wayanad without overspending.
`,

    'premium-rooms': `
## Ideal for Couples, Families, and Solo Travelers

Whether you are traveling with family, a partner, or alone, our **luxury homestays in Wayanad** cater to everyone. Couples enjoy privacy and romance, families get spacious rooms and safety, and solo travelers find a peaceful environment for relaxation.

### Who Should Book Premium Rooms?

- **Couples** – Seeking a romantic getaway  
- **Families** – Wanting comfort and convenience  
- **Solo Travelers** – Looking for a peaceful retreat  
- **Nature Lovers** – Wanting scenic surroundings  
`,

    'heritage-rooms': `
## Ideal for Families, Couples, and Cultural Travelers

Our Deluxe Heritage Rooms are suitable for a variety of travelers. Families appreciate the space and safety, couples enjoy the romantic and peaceful atmosphere, and cultural enthusiasts find inspiration in the traditional décor and heritage vibe.

### Who Should Book Heritage Rooms?

- **Couples** – Seeking a romantic getaway  
- **Families** – Wanting a cultural and cozy stay  
- **Solo Travelers** – Exploring Wayanad’s heritage  
- **Nature & Culture Lovers** – Looking for authentic experiences  
`,

    cottages: `
## Ideal Stay for Families, Couples, and Solo Travelers

Our **cottages in Wayanad** are versatile enough to suit different types of travelers. Families love the space and privacy, couples enjoy a romantic and serene atmosphere, and solo travelers find a peaceful environment to relax.

### Who Should Book Deluxe Rooms

- **Families** – Looking for spacious accommodations  
- **Couples** – Seeking a private getaway  
- **Solo Travelers** – Wanting a calm retreat  
- **Nature Lovers** – Exploring Wayanad’s scenic beauty  
`,
  };

  const content = contentMap[path] || '';

  if (!content) {
    return (
      <p className="">
        {/* Who Should Book content not found. */}
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
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default WhoShouldBook;
