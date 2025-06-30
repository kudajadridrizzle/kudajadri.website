import Direction from "../Home/components/Direction"
import Faq from "../Home/components/Faq"
import Footer from "../Home/components/Footer"
import FacilitiesSession from "./components/FacilitiesSession"
import Hero from "./components/Hero"
import ImageSession from "./components/ImageSession"
import ListSession from "./components/ListSession"

const FacilitiesPage = () => {
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

