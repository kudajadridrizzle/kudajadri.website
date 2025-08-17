import React from 'react';
import { useCardsSection, type CardsPageKey } from '../../../hooks/useCardsSection';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

interface CardsSectionProps {
  sectionKey: CardsPageKey;
  className?: string;
}

export const CardSection: React.FC<CardsSectionProps> = ({ sectionKey, className = '' }) => {
  const section = useCardsSection(sectionKey);

  if (!section) return null;

  return (
    <div className={`sm:px-[12%] sm:py-32 px-4 py-14 large:px-[18%] ${className}`}>
      {/* Header Section */}
      <div className="flex flex-col gap-6 sm:items-center mobile:items-start mb-16">
        {section.subtitle && (
          <p className="uppercase text-primary font-albertSans tracking-[1.6px] text-sm">
            {section.subtitle}
          </p>
        )}
        <h2 className="sm:text-[44px] text-[32px] font-ivy text-primary text-center sm:text-center mobile:text-left">
          {section.title}
        </h2>
        {section.subParagraph && (
          <p className="font-albertSans text-lg text-gray-600 mt-2 max-w-3xl text-center sm:text-center mobile:text-left">
            {section.subParagraph}
          </p>
        )}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {section.cards.map((card: CardProps, index: number) => (
          <div
            key={index}
            className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-48 relative overflow-hidden">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-10" />
            </div>
            <div className="flex-1 p-6 flex flex-col">
              <h3 className="text-xl font-ivy text-primary mb-3">
                {card.title}
              </h3>
              <p className="text-secondary font-albertSans text-base leading-relaxed flex-1">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
