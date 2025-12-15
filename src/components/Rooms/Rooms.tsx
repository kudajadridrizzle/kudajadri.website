import { Helmet } from 'react-helmet-async';
import Footer from '../Home/components/Footer';
import FaqList from '../FaqComponent/FaqList';
import { useRoomsCMS } from '../../hooks/useRoomsCMS';
import CMSHero from './Components/CMSHero';
import CMSRoomSession from './Components/CMSRoomSession';
import CMSIndividualRooms from './Components/CMSIndividualRooms';
import { Header } from '../Home/components/Header';
import { useState, useEffect } from 'react';
 

const Rooms = () => {
  const { seo: defaultSeo, hero, roomsIntro, individualRooms, faq } = useRoomsCMS();
  const [currentUrl, setCurrentUrl] = useState('https://www.kudajadridrizzle.com');
  
  // Hardcoded Rooms listing metadata (from public/pagemeta.md)
  const seo = {
    ...defaultSeo,
    title: 'Wayanad accommodations: homestays, cottages, family rooms',
    description: 'Discover peaceful accommodations in Wayanad with cozy homestays, spacious cottages with swimming pool, and family rooms designed for comfort and relaxation',
    ogTitle: 'Wayanad accommodations: homestays, cottages, family rooms',
    ogDescription: 'Discover peaceful accommodations in Wayanad with cozy homestays, spacious cottages with swimming pool, and family rooms designed for comfort and relaxation',
    twitterTitle: 'Wayanad accommodations: homestays, cottages, family rooms',
    twitterDescription: 'Discover peaceful accommodations in Wayanad with cozy homestays, spacious cottages with swimming pool, and family rooms designed for comfort and relaxation'
  };

  // Hardcoded room-specific meta mapping (from public/pagemeta.md)
  const roomMetaMap: Record<string, { title: string; description: string }> = {
    'classic-rooms': {
      title: 'Affordable homestay in Wayanad: Best budget Wayanad homestay',
      description: 'Best Budget homestay in Wayanad with affordable rooms for families and travelers. Discover the best low-cost Wayanad homestays with comfort and convenience.'
    },
    'deluxe-rooms': {
      title: 'Wayanad Cottages: Private Cottages in Wayanad for Family, Group',
      description: 'Stay at our Wayanad cottages designed for families. Our private cottages in Wayanad offer comfort, scenic views, and a peaceful holiday experience.'
    },
    'family-rooms': {
      title: 'Family Rooms - Spacious Accommodation in Wayanad',
      description: 'Perfect for families, our spacious rooms provide comfort and convenience for everyone.'
    },
    'premium-rooms': {
      title: 'Premium homestay in Wayanad: Best luxury Wayanad homestays',
      description: 'Best Premium homestay in Wayanad offering deluxe and luxury stays with top-tier amenities. Enjoy elegant rooms, scenic views, and a peaceful retreat in Wayanad'
    },
    'deluxe-heritage-rooms': {
      title: 'Heritage homestays in Wayanad: Traditional Wayanad homestays',
      description: 'Experience a heritage homestay in Wayanad with traditional charm and modern amenities. Enjoy a peaceful stay surrounded by nature and rich culture.'
    }
  };

  // Enhance individual rooms with their specific meta data from pagemeta.md
  const enhancedRooms = individualRooms.map(room => {
    const roomMeta = roomMetaMap[room.id] || roomMetaMap[room.id.replace(/_/g, '-')];
    
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
