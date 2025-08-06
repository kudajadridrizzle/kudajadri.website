import { useState } from 'react';

interface ContentCardProps {
  image: string;
  title: string;
  paragraph: string;
  imageAlt?: string;
  className?: string;
}

export const ContentCard = ({ 
  image, 
  title, 
  paragraph, 
  imageAlt = "Content image",
  className = ""
}: ContentCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Count words in paragraph - more accurate counting
  const wordCount = paragraph.trim().split(/\s+/).filter(word => word.length > 0).length;
  const shouldShowReadMore = wordCount > 100;
  
  // Truncate paragraph if not expanded and over 100 words
  const displayText = shouldShowReadMore && !isExpanded 
    ? paragraph.trim().split(/\s+/).slice(0, 100).join(' ') + '...'
    : paragraph;

  return (
    <div className={`flex sm:flex-row mobile:flex-col gap-8 items-center ${className}`}>
      {/* Image Section */}
      <div className="sm:w-1/2 mobile:w-full">
        <img 
          src={image} 
          alt={imageAlt}
          className="w-full h-[300px] object-cover rounded-lg shadow-lg"
        />
      </div>
      
      {/* Content Section */}
      <div className="sm:w-1/2 mobile:w-full flex flex-col gap-4">
        <h2 className="text-2xl font-ivy text-primary font-semibold">
          {title}
        </h2>
        <p className="text-gray-700 font-albertSans leading-relaxed">
          {displayText}
        </p>
        {shouldShowReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary font-albertSans font-medium hover:text-primary/80 transition-colors self-start"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>
    </div>
  );
}; 