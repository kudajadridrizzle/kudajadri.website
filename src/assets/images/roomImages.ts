// Room Images - Centralized image imports for CMS
import roomOne from "/src/assets/roomOne.jpg";
import roomTwo from "/src/assets/roomTwo.jpg";
import roomThree from "/src/assets/roomThree.jpg";
import PremiumImg1 from "/src/assets/PremiumImg1.jpg";

// Image mapping for CMS
// Note: aboutHero is in public directory, so we reference it as a public URL
export const roomImages = {
  roomOne,
  roomTwo,
  roomThree,
  PremiumImg1,
  aboutHero: "/aboutHero.jpg", // Public directory image
} as const;

// Type for image keys
export type RoomImageKey = keyof typeof roomImages;

// Helper function to get image by key
export const getRoomImage = (imageKey: RoomImageKey): string => {
  return roomImages[imageKey];
};
