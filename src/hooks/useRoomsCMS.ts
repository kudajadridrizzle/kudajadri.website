import { useMemo } from 'react';
import fm from 'front-matter';
import roomsPageRaw from '../File/roomspage.md?raw';
import roomsFaqRaw from '../File/roomsfaqs.md?raw';
import {
  getRoomImage,
  RoomImageKey,
  roomImages,
} from '../assets/images/roomImages';

// Helper function to process image - handles both uploaded paths and predefined keys
const processImage = (imageValue: string): string => {
  // Check if it's a predefined image key
  if (imageValue in roomImages) {
    return getRoomImage(imageValue as RoomImageKey);
  }
  // Otherwise, treat it as an uploaded image path
  return imageValue;
};

// Define the shape of rooms page frontmatter
interface RoomsPageCMSAttributes {
  seo: {
    title: string;
    description: string;
    keywords: string;
    author: string;
    twitterSite: string;
    ogImage: string;
  };
  hero: {
    backgroundImage: string; // Can be either image key or uploaded path
    title: string;
    subtitle: string;
    overlayOpacity: number;
  };
  roomsIntro: {
    heading: string;
    content: string;
  };
  individualRooms: Array<{
    id: string;
    title: string;
    description: string;
    image: string; // Can be either image key or uploaded path
    type: 'normal' | 'reverse';
    path: string;
  }>;
}

// Define the shape of FAQ frontmatter
interface FaqFrontMatterAttributes {
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const useRoomsCMS = () => {
  const roomsPageData = useMemo(() => {
    const parsed = fm<RoomsPageCMSAttributes>(roomsPageRaw);
    return parsed.attributes;
  }, []);

  const faqData = useMemo(() => {
    const parsed = fm<FaqFrontMatterAttributes>(roomsFaqRaw);
    return parsed.attributes;
  }, []);

  // Transform image keys/paths to actual image URLs
  const processedData = useMemo(() => {
    return {
      seo: roomsPageData.seo,
      hero: {
        ...roomsPageData.hero,
        backgroundImage: processImage(roomsPageData.hero.backgroundImage),
      },
      roomsIntro: roomsPageData.roomsIntro,
      individualRooms: roomsPageData.individualRooms.map(room => ({
        ...room,
        image: processImage(room.image),
      })),
      faq: faqData,
    };
  }, [roomsPageData, faqData]);

  return processedData;
};
