import { useMemo } from 'react';
import fm from 'front-matter';
import roomsPageRaw from '../File/roomspage.md?raw';
import roomsFaqRaw from '../File/roomsfaqs.md?raw';
import { getRoomImage, RoomImageKey } from '../assets/images/roomImages';

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
    backgroundImage: RoomImageKey;
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
    image: RoomImageKey;
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

  // Transform image keys to actual image URLs
  const processedData = useMemo(() => {
    return {
      seo: roomsPageData.seo,
      hero: {
        ...roomsPageData.hero,
        backgroundImage: getRoomImage(roomsPageData.hero.backgroundImage),
      },
      roomsIntro: roomsPageData.roomsIntro,
      individualRooms: roomsPageData.individualRooms.map(room => ({
        ...room,
        image: getRoomImage(room.image),
      })),
      faq: faqData,
    };
  }, [roomsPageData, faqData]);

  return processedData;
};
