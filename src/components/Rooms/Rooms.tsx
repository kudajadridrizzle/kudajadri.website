import Faq from "../Home/components/Faq";
import Footer from "../Home/components/Footer";
import { IndividualRooms } from "../Home/components/IndividualRooms";
import RoomSession from "../Home/components/RoomSession";
import Hero from "./Components/Hero";
import { usePageMetadata } from '../../hooks/usePageMetadata';

const About = () => {
  usePageMetadata({
    title: 'Wayanad Accommodations: Homestays, Cottages, and Family Rooms',
    description: 'Discover peaceful accommodations in Wayanad with cozy homestays, spacious cottages with swimming pool, and family rooms designed for comfort and relaxation',
    keywords: 'wayanad accommodations, homestays, cottages, family rooms, swimming pool, comfort, relaxation',
    ogTitle: 'Wayanad Accommodations: Homestays, Cottages, and Family Rooms',
    ogDescription: 'Discover peaceful accommodations in Wayanad with cozy homestays, spacious cottages with swimming pool, and family rooms designed for comfort and relaxation',
    ogImage: "/aboutHero.jpg",
    ogUrl: window.location.href,
    twitterImage: "/aboutHero.jpg"
  });
  return (
    <div>
      <Hero />
      <RoomSession />
      <IndividualRooms />
      <Faq/>
      <Footer />
    </div>
  );
};

export default About;
