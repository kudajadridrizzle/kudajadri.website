import Footer from "../Home/components/Footer";
import ReviewSession from "../Home/components/ReviewSession";
import AboutSession from "./components/AboutSession";
import Hero from "./components/Hero";
import RecognitionSession from "./components/RecognitionSession";

const About = () => {
  return (
    <div>
      <Hero />
      <AboutSession/>
      <ReviewSession />
      <RecognitionSession/>
      <Footer/>
    </div>
  );
};

export default About;
