import { Header } from "../Home/components/Header";
import Faq  from "../Home/components/Faq";
import Footer from "../Home/components/Footer";

export const FaqPage = () => {
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
