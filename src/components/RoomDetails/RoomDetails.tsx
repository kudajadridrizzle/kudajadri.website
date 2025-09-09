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

import {
  roomData,
  classicRooms,
  deluxeRooms,
  deluxeHeritageRooms,
  premiumRooms,
} from './constants';
import fm from 'front-matter';
import FaqList from '../FaqComponent/FaqList';

import classicRoomFaqRaw from '../../File/classicroomfaqs.md?raw';
import deluxeHeritageRoomFaqRaw from '../../File/deluxeheritageroomfaqs.md?raw';
import deluxeRoomFaqRaw from '../../File/deluxeroomfaqs.md?raw';
import premiumRoomFaqRaw from '../../File/premiumroomfaqs.md?raw';

import { useState, useEffect } from 'react';

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
  const { id } = useParams();
  const [currentUrl, setCurrentUrl] = useState('https://www.kudajadridrizzle.com');

  // Update current URL on client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  // Get the room data with the correct type
  const roomDataItem = roomData[id as keyof typeof roomData] || roomData['classic-rooms'];
  
  // Get the room content for other components
  const roomContent =
    id === 'classic-rooms'
      ? classicRooms
      : id === 'deluxe-heritage-rooms'
      ? deluxeHeritageRooms
      : id === 'deluxe-rooms'
      ? deluxeRooms
      : id === 'premium-rooms'
      ? premiumRooms
      : classicRooms;

  const getMetaContent = () => {
    const defaultImage = roomData['classic-rooms'].imageOne;
    const roomImage = roomData[id || 'classic-rooms']?.imageOne || defaultImage;

    if (id === 'deluxe-heritage-rooms') {
      return {
        title:
          'Heritage Homestay in Wayanad: Traditional Stay with Modern Comfort',
        description:
          'Experience a heritage homestay in Wayanad with traditional charm and modern amenities. Enjoy a peaceful stay surrounded by nature and rich culture.',
        keywords:
          'heritage homestay wayanad, traditional stay wayanad, modern comfort, kudajadri homestay',
        ogTitle:
          'Heritage Homestay in Wayanad: Traditional Stay with Modern Comfort',
        ogDescription:
          'Experience a heritage homestay in Wayanad with traditional charm and modern amenities.',
        ogImage: roomImage,
      };
    }

    if (id === 'deluxe-rooms') {
      return {
        title: 'Wayanad Cottages: Private Cottages in Wayanad for Family, Groups',
        description:
          'Stay at our Wayanad cottages designed for families. Our private cottages in Wayanad offer comfort, scenic views, and a peaceful holiday experience.',
        keywords:
          'wayanad cottages, private cottages wayanad, family stay wayanad, kudajadri homestay',
        ogTitle: 'Wayanad Cottages: Private Cottages in Wayanad for Family',
        ogDescription:
          'Stay at our Wayanad cottages designed for families. Enjoy a peaceful holiday.',
        ogImage: roomImage,
      };
    }

    if (id === 'classic-rooms') {
      return {
        title: 'Affordable Homestay in Wayanad: Best Budget Wayanad Homestay',
        description:
          'Best Budget homestay in Wayanad with affordable rooms for families and travelers.',
        keywords:
          'budget stay wayanad, cheap homestay, family stay wayanad, kudajadri homestay',
        ogTitle: 'Affordable Homestay in Wayanad: Best Budget Wayanad Homestay',
        ogDescription:
          'Budget rooms in Wayanad with comfort and great value for money.',
        ogImage: roomImage,
      };
    }

    if (id === 'premium-rooms') {
      return {
        title: 'Premium Homestay in Wayanad: Best Luxury Wayanad Homestays',
        description:
          'Best premium homestay in Wayanad offering luxury stays with top-tier amenities.',
        keywords:
          'luxury homestay wayanad, premium rooms, private balcony, kudajadri homestay',
        ogTitle: 'Premium Homestay in Wayanad: Best Luxury Wayanad Homestays',
        ogDescription:
          'Luxury rooms with scenic views and modern elegance in Wayanad.',
        ogImage: roomImage,
      };
    }

    return {
      title: `${roomContent.roomType} - Homestay Wayanad`,
      description: `${roomContent.description} Book your stay at Kudajadri Homestay.`,
      keywords: `${roomContent.roomType.toLowerCase()} wayanad, homestay wayanad, kudajadri`,
      ogTitle: `${roomContent.roomType} - Homestay`,
      ogDescription: `Experience luxury with scenic views in Wayanad. Starting at ₹${roomContent.pricePerNight} per night.`,
      ogImage: roomImage,
    };
  };

  const metaContent = getMetaContent();

  // Get the appropriate FAQ markdown and parse it
  const roomFaqMarkdown = getRoomFaqMarkdown(id);
  const parsedFaq = fm<FaqFrontMatterAttributes>(roomFaqMarkdown);

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
          content={metaContent.ogTitle || metaContent.title}
        />
        <meta
          property="og:description"
          content={metaContent.ogDescription || metaContent.description}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content={`${window.location.origin}${metaContent.ogImage}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={metaContent.ogTitle || metaContent.title}
        />
        <meta
          name="twitter:description"
          content={metaContent.ogDescription || metaContent.description}
        />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta
          name="twitter:image"
          content={`${window.location.origin}${metaContent.ogImage}`}
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
