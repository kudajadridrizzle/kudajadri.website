import Footer from "../Home/components/Footer";
import ReviewSession from "../Home/components/ReviewSession";
import AboutSession from "./components/AboutSession";
import Hero from "./components/Hero";
import RecognitionSession from "./components/RecognitionSession";
import { usePageMetadata } from '../../hooks/usePageMetadata';
import Faq  from "../Home/components/Faq";


const About = () => {
  usePageMetadata({
    title: `Kalpetta homestays: Top homestay in Kalpetta for family & couple`,
    description: `Kalpetta homestays provide a peaceful retreat for families and couples. 
    Discover the best homestays in Kalpetta with modern amenities and authentic experiences.`
  });

  return (
    <div>
      <Hero />
      <AboutSession/>
      <ReviewSession />
      <RecognitionSession/>
      <Faq/>
      <Footer/>
    </div>
  );
};

export default About;
