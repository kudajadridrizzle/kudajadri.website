import Footer from '../Home/components/Footer';
import { Header } from '../Home/components/Header';
import AnotherRoomSession from './components/AnotherRoomSession';
import Hero from './components/Hero';
import MorningSession from './components/MorningSession';
import { RoomPriceSession } from './components/RoomPriceSession';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import WhyThisRoom from './components/WhyThisRoom';
import RoomServices from './components/RoomServices';
import LocalExperiences from './components/LocalExperiences';
import RoomOverview from "./components/RoomOverview";
import WhoShouldBook from "./components/WhoShouldBook";
import RoomExperience from "./components/RoomExperience";
import RoomTips from "./components/roomtips";
import DeluxeRoomOverview from "./components/DeluxeRoomOverview";
import RoomBookingCTA from "./components/RoomBookingCTA";

import { roomData } from './constants';
import fm from 'front-matter';
import FaqList from '../FaqComponent/FaqList';

import classicRoomFaqRaw from '../../File/classicroomfaqs.md?raw';
import deluxeHeritageRoomFaqRaw from '../../File/deluxeheritageroomfaqs.md?raw';
import deluxeRoomFaqRaw from '../../File/deluxeroomfaqs.md?raw';
import premiumRoomFaqRaw from '../../File/premiumroomfaqs.md?raw';

import { useState, useEffect, useMemo } from 'react';
import { useRoomsCMS } from '../../hooks/useRoomsCMS';

// Define the shape of FAQ frontmatter
interface FaqFrontMatterAttributes {
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

// Function to get the appropriate FAQ markdown based on room type
const getRoomFaqMarkdown = (roomId: string | undefined): string => {
  switch (roomId) {
    case 'classic-rooms':
      return classicRoomFaqRaw;
    case 'deluxe-heritage-rooms':
      return deluxeHeritageRoomFaqRaw;
    case 'deluxe-rooms':
      return deluxeRoomFaqRaw;
    case 'premium-rooms':
      return premiumRoomFaqRaw;
    default:
      return classicRoomFaqRaw; // fallback to classic room FAQs
  }
};

const RoomDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [currentUrl, setCurrentUrl] = useState('https://www.kudajadridrizzle.com');
  
  // Get room data with proper type safety
  const roomId = id || 'classic-rooms';
  const roomDataItem = roomData[roomId as keyof typeof roomData] || roomData['classic-rooms'];
  
  // Get room data from CMS and page meta
  const { individualRooms } = useRoomsCMS();
  
  // Hardcoded per-room meta mapping (from public/pagemeta.md)
  const roomMetaMap: Record<string, { title: string; description: string }> = {
    'classic-rooms': {
      title: 'Affordable homestay in Wayanad: Best budget Wayanad homestay',
      description: 'Best Budget homestay in Wayanad with affordable rooms for families and travelers. Discover the best low-cost Wayanad homestays with comfort and convenience.'
    },
    'deluxe-heritage-rooms': {
      title: 'Heritage homestays in Wayanad: Traditional Wayanad homestays',
      description: 'Experience a heritage homestay in Wayanad with traditional charm and modern amenities. Enjoy a peaceful stay surrounded by nature and rich culture.'
    },
    'deluxe-rooms': {
      title: 'Wayanad Cottages: Private Cottages in Wayanad for Family, Group',
      description: 'Stay at our Wayanad cottages designed for families. Our private cottages in Wayanad offer comfort, scenic views, and a peaceful holiday experience.'
    },
    'premium-rooms': {
      title: 'Premium homestay in Wayanad: Best luxury Wayanad homestays',
      description: 'Best Premium homestay in Wayanad offering deluxe and luxury stays with top-tier amenities. Enjoy elegant rooms, scenic views, and a peaceful retreat in Wayanad'
    }
  };
  
  // Find the current room in CMS data
  const cmsRoomData = useMemo(() => {
    if (!individualRooms) return null;
    return individualRooms.find(room => room.id === roomId);
  }, [individualRooms, roomId]);
  
  // Determine title and description with fallbacks
  const mappedMeta = roomMetaMap[roomId] || roomMetaMap[roomId.replace(/_/g, '-')];
  const roomTitle = mappedMeta?.title || cmsRoomData?.title || roomDataItem.roomType;
  const roomDescription = mappedMeta?.description || cmsRoomData?.description || '';

  // Update current URL on client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  // Room content constants are available for future use:
  // - classicRooms
  // - deluxeHeritageRooms
  // - deluxeRooms
  // - premiumRooms

  const getSeoData = (id: string) => {
    // Get room-specific meta data from hardcoded map
    const roomMeta = roomMetaMap[id] || roomMetaMap[id.replace(/-/g, '_')] || {};
    
    // Fallback values
    const defaultTitle = roomTitle;
    const defaultDescription = roomDescription || `Experience the comfort of our ${defaultTitle} at Kudajadri Drizzle.`;
    
    const defaultImage = roomData['classic-rooms'].imageOne;
    const roomImage = roomData[id || 'classic-rooms']?.imageOne || defaultImage;

    return {
      title: (roomMeta as any)?.title || defaultTitle,
      description: (roomMeta as any)?.description || defaultDescription,
      keywords: '',
      ogTitle: (roomMeta as any)?.title || defaultTitle,
      ogDescription: (roomMeta as any)?.description || defaultDescription,
      ogImage: roomImage,
    };
  };

  // Get the SEO data for the current room
  const metaContent = getSeoData(roomId);

  // Debug logging
  useEffect(() => {
    console.log('Current meta content:', metaContent);
  }, [roomId, metaContent]);

  // Get the appropriate FAQ markdown and parse it
  const roomFaqMarkdown = getRoomFaqMarkdown(roomId);
  const parsedFaq = fm<FaqFrontMatterAttributes>(roomFaqMarkdown);
  
  // Ensure window is defined (for SSR)
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <div className="min-h-screen pt-[40px] md:pt-[70px] pb-8">
      <Header type="white" />
      <Helmet>
        <title>{metaContent.title}</title>
        <meta name="description" content={metaContent.description} />
        <meta name="keywords" content={metaContent.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        <meta
          property="og:title"
          content={metaContent.ogTitle}
        />
        <meta
          property="og:description"
          content={metaContent.ogDescription}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content={`${baseUrl}${metaContent.ogImage}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={metaContent.ogTitle}
        />
        <meta
          name="twitter:description"
          content={metaContent.ogDescription}
        />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta
          name="twitter:image"
          content={`${baseUrl}${metaContent.ogImage}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <Header type="black" />
      <Hero />
      <RoomPriceSession />
      <MorningSession roomData={roomDataItem} />
      <WhyThisRoom />
      <RoomServices />
      <LocalExperiences />
      <RoomOverview />
      <WhoShouldBook />
      <RoomExperience />
      <DeluxeRoomOverview />
      <RoomTips />
      <RoomBookingCTA />
      <AnotherRoomSession roomType={roomDataItem.roomType} />
      <FaqList {...parsedFaq.attributes} />
      <Footer />
    </div>
  );
};

export default RoomDetails;
