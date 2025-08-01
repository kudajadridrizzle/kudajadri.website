import Footer from "../Home/components/Footer";
import ReviewSession from "../Home/components/ReviewSession";
import AboutSession from "./components/AboutSession";
import Hero from "./components/Hero";
import RecognitionSession from "./components/RecognitionSession";
import { Helmet } from "react-helmet-async";
import fm from "front-matter";
import aboutFaqRaw from "../../File/aboutfaqs.md?raw";
import FaqList from "../FaqComponent/FaqList";

// Define the shape of FAQ frontmatter
interface FaqFrontMatterAttributes {
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const About = () => {
  const parsedFaq = fm<FaqFrontMatterAttributes>(aboutFaqRaw);

  return (
    <div>
      <Helmet>
        <title>
          Kalpetta Homestays: #1 Homestays in Kalpetta with Airbnb reviews
        </title>
        <meta
          name="description"
          content="Kudajadri Drizzle Homestay in Kalpetta, Wayanad: #1 Kalpetta Home stay with 5 star reviews on Airbnb, TripAdvisor. Homestay cottage for family & group."
        />
        <meta
          name="keywords"
          content="kalpetta homestays, best homestay kalpetta, family accommodation, couple stays, kudajadri homestay"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        <meta
          property="og:title"
          content="Kalpetta Homestays: #1 Homestays in Kalpetta with Airbnb reviews"
        />
        <meta
          property="og:description"
          content="Kudajadri Drizzle Homestay in Kalpetta, Wayanad: #1 Kalpetta Home stay with 5 star reviews on Airbnb, TripAdvisor. Homestay cottage for family & group."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content={`${window.location.origin}/aboutHero.jpg`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kalpetta Homestays: #1 Homestays in Kalpetta with Airbnb reviews"
        />
        <meta
          name="twitter:description"
          content="Kudajadri Drizzle Homestay in Kalpetta, Wayanad: #1 Kalpetta Home stay with 5 star reviews on Airbnb, TripAdvisor. Homestay cottage for family & group."
        />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta
          name="twitter:image"
          content={`${window.location.origin}/aboutHero.jpg`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Hero />
      <AboutSession />
      <ReviewSession />
      <RecognitionSession />

      {/* FAQ Section from CMS */}
      <FaqList {...parsedFaq.attributes} />

      <Footer />
    </div>
  );
};

export default About;
