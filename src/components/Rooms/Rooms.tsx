import Faq from "../Home/components/Faq";
import Footer from "../Home/components/Footer";
import { IndividualRooms } from "../Home/components/IndividualRooms";
import RoomSession from "../Home/components/RoomSession";
import Hero from "./Components/Hero";

const About = () => {
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
