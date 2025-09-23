import { Helmet } from 'react-helmet-async';
import Footer from '../Home/components/Footer';
import FaqList from '../FaqComponent/FaqList';
import { useRoomsCMS } from '../../hooks/useRoomsCMS';
import CMSHero from './Components/CMSHero';
import CMSRoomSession from './Components/CMSRoomSession';
import CMSIndividualRooms from './Components/CMSIndividualRooms';
import { Header } from '../Home/components/Header';
import { useState, useEffect } from 'react';
import usePageMeta, { PageType } from '../../hooks/usePageMeta';

const Rooms = () => {
  const { seo: defaultSeo, hero, roomsIntro, individualRooms, faq } = useRoomsCMS();
  const { meta: pageMeta, allMeta } = usePageMeta('rooms' as PageType);
  const [currentUrl, setCurrentUrl] = useState('https://www.kudajadridrizzle.com');
  
  // Use meta from pagemeta.md or fallback to CMS data
  const seo = {
    ...defaultSeo,
    title: pageMeta?.title || defaultSeo.title,
    description: pageMeta?.description || defaultSeo.description,
    // Add Open Graph and Twitter meta
    ogTitle: pageMeta?.ogTitle || pageMeta?.title || defaultSeo.title,
    ogDescription: pageMeta?.ogDescription || pageMeta?.description || defaultSeo.description,
    twitterTitle: pageMeta?.twitterTitle || pageMeta?.title || defaultSeo.title,
    twitterDescription: pageMeta?.twitterDescription || pageMeta?.description || defaultSeo.description
  };

  // Get room-specific meta data from pagemeta.md
  const getRoomMeta = (roomId: string) => {
    if (!allMeta?.rooms) return { title: '', description: '' };
    // Handle both snake_case and kebab-case room IDs
    const roomMeta = allMeta.rooms[roomId] || allMeta.rooms[roomId.replace(/-/g, '_')];
    return roomMeta || { title: '', description: '' };
  };

  // Enhance individual rooms with their specific meta data from pagemeta.md
  const enhancedRooms = individualRooms.map(room => {
    // Get room meta from pagemeta.md
    const roomMeta = getRoomMeta(room.id);
    
    // Fallback to CMS data if no meta found in pagemeta.md
    return {
      ...room,
      title: roomMeta?.title || room.title,
      description: roomMeta?.description || room.description,
      meta: {
        title: roomMeta?.title || room.title,
        description: roomMeta?.description || room.description
      }
    };
  });

  // Update current URL on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <div className="relative">
      <Header type="white" />

      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={seo.author} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:image" content="https://www.kudajadridrizzle.com/images/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={seo.twitterTitle} />
        <meta name="twitter:description" content={seo.twitterDescription} />
        <meta name="twitter:image" content="https://www.kudajadridrizzle.com/images/twitter-card.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <CMSHero
        backgroundImage={hero.backgroundImage}
        title={hero.title}
        overlayOpacity={0.6}
      />

      <div className="relative">
        <CMSRoomSession
          heading={roomsIntro.heading}
          content={roomsIntro.content}
          isEditing={false}
          onContentChange={() => {}}
        />
      </div>

      <CMSIndividualRooms rooms={enhancedRooms} />

      <FaqList {...faq} />

      <Footer />
    </div>
  );
};

export default Rooms;
