import type { ReactNode } from 'react';

interface RoomSessionContent {
  heading: string;
  paragraphs: ReactNode[];
}

const ROOM_SESSION_CONTENT: RoomSessionContent = {
  heading: 'Wayanad Homestays – Explore Our Rooms',
  paragraphs: [
    (
      <p>
        <strong>Wayanad Homestays</strong> invite you to explore our comfortable rooms, designed for
        a relaxing and cozy stay. Each room combines modern amenities with a warm, homely atmosphere,
        ensuring a memorable experience. Perfect for nature lovers and travelers seeking peace, our
        Wayanad homestays offer comfort, convenience, and stunning surroundings.
      </p>
    ),
  ],
};

const RoomSession = () => {
  return (
    <div className="sm:px-[12%] sm:pt-32 sm:pb-0 bg-[#FFF] px-4 mobile:pt-14 mobile:pb-6 large:px-[18%]">
      <div className="sm:py-12 flex flex-col sm:flex-row justify-center">
        <h2 className="flex-1 sm:text-[44px] text-[32px] font-ivy mb-4 sm:mb-16">
          {ROOM_SESSION_CONTENT.heading}
        </h2>

        <div className="sm:w-[466px] sm:text-xl font-albertSans text-secondary sm:ml-16 space-y-4">
          {ROOM_SESSION_CONTENT.paragraphs.map((node, idx) => (
            <div key={idx}>{node}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomSession;
