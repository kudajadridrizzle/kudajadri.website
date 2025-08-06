import { ContentCard } from './ContentCard';

interface ContentItem {
  image: string;
  title: string;
  paragraph: string;
  imageAlt?: string;
}

interface ContentSectionProps {
  title?: string;
  items: ContentItem[];
  className?: string;
}

export const ContentSection = ({ 
  title, 
  items, 
  className = "" 
}: ContentSectionProps) => {
  return (
    <div className={`sm:px-[12%] sm:py-24 mobile:px-4 mobile:py-14 large:px-[18%] ${className}`}>
      {title && (
        <div className="text-center mb-16">
          <h1 className="text-primary font-ivy sm:text-[44px] mobile:text-[32px]">
            {title}
          </h1>
        </div>
      )}
      
      <div className="flex flex-col gap-16">
        {items.map((item, index) => (
          <ContentCard
            key={index}
            image={item.image}
            title={item.title}
            paragraph={item.paragraph}
            imageAlt={item.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}; 