import Footer from "../Home/components/Footer"
import { Header } from "../Home/components/Header"
import { HeroSession } from "./components/HeroSession"
import { ImageSession } from "./components/ImageSession"
import { ResponsiveImageSession } from "./components/ResponsiveImageSession"

export const Gallrey = () => {
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

