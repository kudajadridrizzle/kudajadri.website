import { Header } from "../Home/components/Header";
import Faq  from "../Home/components/Faq";
import Footer from "../Home/components/Footer";
import { usePageMetadata } from "../../hooks/usePageMetadata";

export const FaqPage = () => {
  usePageMetadata({
    title: "FAQ - Frequently Asked Questions | Kudajadri Homestay Wayanad",
    description: "Find answers to frequently asked questions about Kudajadri Homestay in Wayanad. Information about bookings, amenities, location, and more for your perfect stay.",
    keywords: "kudajadri homestay faq, wayanad homestay questions, booking information, accommodation details",
    ogImage: "/aboutHero.jpg",
    ogUrl: window.location.href,
    twitterImage: "/aboutHero.jpg"
  });

  return (
    <div>
        <Header type="black"/>
        <div className="mobile:mt-12 md:mt-24">
        {/* <HeroSession/> */}
        <Faq/>
        </div>
        <Footer/>
      
    </div>
  );
};
