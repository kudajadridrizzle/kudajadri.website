import Footer from "../Home/components/Footer"
import { Header } from "../Home/components/Header"
import { HeroSession } from "./components/HeroSession"
import { ImageSession } from "./components/ImageSession"
import { ResponsiveImageSession } from "./components/ResponsiveImageSession"
import { usePageMetadata } from '../../hooks/usePageMetadata';

export const Gallrey = () => {
  usePageMetadata({
    title: "ExplorWayanadad Homestay Photos – Cozy & Picturesque Accommodations",
    description: "Wayanad homestays photo gallery showcasing beautiful stays, scenic views, and cozy accommodations. Discover the perfect homestay experience in Wayanad for families and couples."
  });

  return (
    <div>
        <Header type="black"/>
        <div className="mobile:mt-12">

        <div className="sm:py-24 mobile:pt-8 mobile:pb-12">
            <HeroSession/>
            <ImageSession/>
            <ResponsiveImageSession/>
        </div>
        </div>
        <Footer/>
      
    </div>
  )
}

