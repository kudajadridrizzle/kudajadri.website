import Faq from "../Home/components/Faq";
import Footer from "../Home/components/Footer";
import { Cards } from "./components/cards";
import Hero from "./components/Hero";
import { usePageMetadata } from "../../hooks/usePageMetadata";

export const WayanadPage = () => {
  usePageMetadata({
    title: "Wayanad: Explore Tourist Attractions and Destinations in Wayanad",
    description: "Discover top tourist attractions and must-visit destinations in Wayanad. Plan your perfect trip to explore nature, wildlife, and cultural sites.",
  });

  return (
    <div>
      <Hero/>
      <Cards/>
      <Faq/>
      <Footer/>
    </div>
  );
}