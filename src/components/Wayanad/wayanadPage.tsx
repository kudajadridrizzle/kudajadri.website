import Faq from "../Home/components/Faq";
import Footer from "../Home/components/Footer";
import { Cards } from "./components/cards";
import Hero from "./components/Hero";

export const WayanadPage = () => {
  return (
    <div>
      <Hero/>
      <Cards/>
      <Faq/>
      <Footer/>
    </div>
  );
}