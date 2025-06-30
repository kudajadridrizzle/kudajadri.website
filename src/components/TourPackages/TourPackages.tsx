import Hero from "../About/components/Hero";
import Direction from "../Home/components/Direction";
import Faq from "../Home/components/Faq";
import Footer from "../Home/components/Footer";
import { Packages } from "./components/packages";

export const TourPackages = () => {
  return (
    <div>
      <Hero />
      <Packages />
      <Direction/>
      <Faq/>
      <Footer/>
    </div>
  );
};
