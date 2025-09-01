import { Helmet } from 'react-helmet-async';
import Footer from '../Home/components/Footer';
import FaqList from '../FaqComponent/FaqList';
import { useRoomsCMS } from '../../hooks/useRoomsCMS';
import CMSHero from './Components/CMSHero';
import CMSRoomSession from './Components/CMSRoomSession';
import CMSIndividualRooms from './Components/CMSIndividualRooms';
import { Header } from '../Home/components/Header';

const Rooms = () => {
  const { seo, hero, roomsIntro, individualRooms, faq } = useRoomsCMS();

  return (
    <div className="relative">
      <Header type="white" />

      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={seo.author} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content={`${window.location.origin}${seo.ogImage}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:site" content={seo.twitterSite} />
        <meta
          name="twitter:image"
          content={`${window.location.origin}${seo.ogImage}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
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

      <CMSIndividualRooms rooms={individualRooms} />

      {/* Shared Content Section (centralized JSON)
      {contentSection && (
        <ContentSection
          title={contentSection.title}
          items={contentSection.items}
        />
      )} */}

      <FaqList {...faq} />

      <Footer />
    </div>
  );
};

export default Rooms;
