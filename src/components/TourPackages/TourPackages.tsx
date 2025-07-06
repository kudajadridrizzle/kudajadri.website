import Hero from "../About/components/Hero";
import Direction from "../Home/components/Direction";
import Faq from "../Home/components/Faq";
import Footer from "../Home/components/Footer";
import { Packages } from "./components/packages";
import { usePageMetadata } from "../../hooks/usePageMetadata";

export const TourPackages = () => {
  usePageMetadata({
    title: "Tour Packages & Activities | Kudajadri Homestay Wayanad",
    description: "Explore exciting tour packages and activities in Wayanad with Kudajadri Homestay. Discover nature trails, wildlife, and cultural experiences for an unforgettable vacation.",
    keywords: "wayanad tour packages, kudajadri activities, nature trails, wildlife tours, cultural experiences",
    ogImage: "/wayanadImg.jpg",
    ogUrl: window.location.href,
    twitterImage: "/wayanadImg.jpg"
  });

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
