import Footer from "../Home/components/Footer";
import ReviewSession from "../Home/components/ReviewSession";
import AboutSession from "./components/AboutSession";
import Hero from "./components/Hero";
import RecognitionSession from "./components/RecognitionSession";
import { usePageMetadata } from '../../hooks/usePageMetadata';

const About = () => {
  usePageMetadata({
    title: "Kalpetta homestays: Top homestay in Kalpetta for family & couple
",
    description: "Kalpetta homestays provide a peaceful retreat for families and couples. Discover the best homestays in Kalpetta with comfort, privacy, and scenic surroundings."
  });

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
