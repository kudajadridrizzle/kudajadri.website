import { useState } from 'react';

const RoomSession = () => {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 400;

  const fullText = "Wayanad Homestays invite you to explore our comfortable rooms, designed for a relaxing and cozy stay. Each room combines modern amenities with a warm, homely atmosphere, ensuring a memorable experience. Perfect for nature lovers and travelers seeking peace, our Wayanad homestays offer comfort, convenience, and stunning surroundings";
  const isLong = fullText.length > maxChars;
  const preview = isLong ? fullText.slice(0, maxChars) + '...' : fullText;

  return (
    <div className="sm:px-[12%] sm:pt-32 sm:pb-0 bg-[#FFF] px-4 mobile:pt-14 mobile:pb-6 large:px-[18%]">
      <div className="sm:py-12 flex flex-col sm:flex-row justify-center">
        {/* Heading */}
        <h2 className="flex-1 sm:text-[44px] text-[32px] font-ivy mb-4 sm:mb-16">
          Wayanad Homestays – Explore Our Rooms
        </h2>

        {/* Paragraph */}
        <div className="sm:w-[466px] sm:text-xl font-albertSans text-secondary sm:ml-16">
          <p>
            {expanded || !isLong ? (
              <>
                <strong>Wayanad Homestays</strong> invite you to explore our comfortable rooms, designed for a relaxing and cozy stay. Each room combines modern amenities with a warm, homely atmosphere, ensuring a memorable experience. Perfect for nature lovers and travelers seeking peace, our Wayanad homestays offer comfort, convenience, and stunning surroundings
              </>
            ) : (
              preview
            )}
          </p>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 block text-sm text-primary hover:underline focus:outline-none"
            >
              {expanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomSession;
