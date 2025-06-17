  import Footer from "../Home/components/Footer";
import {Header} from "../Home/components/Header";
import AnotherRoomSession from "./components/AnotherRoomSession";
import Hero from "./components/Hero";
import MorningSession from "./components/MorningSession";
import { RoomPriceSession } from "./components/RoomPriceSession";


const RoomDetails = () => {



  return (
    <div>
      <Header type="black" />
      <Hero/>
      <RoomPriceSession/>
      <MorningSession/>
      <AnotherRoomSession/>
      <Footer/>
     
    </div>
  );
};

export default RoomDetails;
