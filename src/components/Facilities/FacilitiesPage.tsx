import Direction from "../Home/components/Direction"
import Footer from "../Home/components/Footer"
import FacilitiesSession from "./components/FacilitiesSession"
import Hero from "./components/Hero"
import ImageSession from "./components/ImageSession"
import ListSession from "./components/ListSession"

const FacilitiesPage = () => {
  return (
    <div>
      <Hero/>
      <div className="flex flex-col mobile:p-4 sm:p-14 items-center gap-16 self-stretch  bg-white sm:flex-row">
        <FacilitiesSession/>
        <ImageSession/>
      </div>
      <ListSession/>
      <Direction/>
      <Footer/>
    </div>
  )
}

export default FacilitiesPage

