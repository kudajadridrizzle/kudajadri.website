import Direction from "../Home/components/Direction"
import Faq from "../Home/components/Faq"
import Footer from "../Home/components/Footer"
import FacilitiesSession from "./components/FacilitiesSession"
import Hero from "./components/Hero"
import ImageSession from "./components/ImageSession"
import ListSession from "./components/ListSession"
import { usePageMetadata } from "../../hooks/usePageMetadata";

const FacilitiesPage = () => {
  usePageMetadata({
    title: "Facilities & Amenities | Kudajadri Homestay Wayanad - Modern Comforts",
    description: "Discover modern facilities and amenities at Kudajadri Homestay in Wayanad. Enjoy WiFi, parking, safety features, and comfortable accommodations for your perfect stay.",
    keywords: "kudajadri homestay facilities, wayanad accommodation amenities, wifi parking safety",
    ogImage: "/aboutHero.jpg",
    ogUrl: window.location.href,
    twitterImage: "/aboutHero.jpg"
  });

  return (
    <div>
      <Hero/>
      <div className="flex flex-col items-center self-stretch gap-16 bg-white mobile:p-4 sm:p-14 sm:flex-row">
        <FacilitiesSession/>
        <ImageSession/>
      </div>
      <ListSession/>
      <Direction/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default FacilitiesPage

