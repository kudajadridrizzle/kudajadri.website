import React from 'react';

export interface CardData {
  imageUrl: string;
  title: string;
  description: string;
}

interface CardsSectionProps {
  title: string;
  subtitle: string;
  cards: CardData[];
}

const CardsSection: React.FC<CardsSectionProps> = ({ title, subtitle, cards }) => {
  if (!cards || cards.length === 0) return null;

  return (
    <div className="sm:px-[12%] sm:py-32 px-4 py-14 large:px-[18%] bg-white">
      {/* Header Section */}
      <div className="flex flex-col gap-6 sm:items-center mobile:items-start mb-16">
        <p className="uppercase text-primary font-albertSans tracking-[1.6px] text-sm">
          {subtitle}
        </p>
        <h2 className="sm:text-[44px] text-[32px] font-ivy text-primary text-center sm:text-center mobile:text-left">
          {title}
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mobile:grid-cols-1">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ minHeight: '400px' }}
          >
            {/* Card Image */}
            <div
              className="relative h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-4 flex flex-col">
              <h3 className="text-xl font-ivy text-primary mb-3">{card.title}</h3>
              <div className="text-secondary font-albertSans text-base leading-relaxed flex-1">
                {card.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
