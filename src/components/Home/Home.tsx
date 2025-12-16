import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';
import { Helmet } from 'react-helmet-async';
import { ContentSection } from '../shared';
import { useContentSection } from '../../hooks/useContentSection';
import { Suspense, lazy } from 'react';
import heroDesktop from '../../assets/locationImage.webp';
import heroMobile from '../../assets/mobileheroimg.jpg';

// Define the shape used by FaqList
interface FaqFrontMatterAttributes {
  title: string;
  faqs: Array<{
    question: React.ReactNode;
    answer: React.ReactNode;
  }>;
}

const AboutSession = lazy(() => import('./components/AboutSession'));
const Amenities = lazy(() => import('./components/Amenities'));
const Direction = lazy(() => import('./components/Direction'));
const GallarySession = lazy(() => import('./components/GallarySession'));
const IndividualRooms = lazy(() => import('./components/IndividualRooms').then(m => ({ default: m.IndividualRooms })));
const LocationImage = lazy(() => import('./components/LocationImage'));
const OurGallery = lazy(() => import('./components/OurGallery'));
const ReviewSession = lazy(() => import('./components/ReviewSession'));
const RoomSession = lazy(() => import('./components/RoomSession'));
const GuestTestimonials = lazy(() => import('./components/GuestTestimonials'));
const CardSection = lazy(() => import('./components/CardSection'));
const FaqList = lazy(() => import('../FaqComponent/FaqList'));

const Home = () => {
  const content: FaqFrontMatterAttributes = {
    title: 'Wayanad Homestays - FAQs',
    faqs: [
      {
        question: (
          <span><strong>What are Wayanad homestays and how are they different from hotels?</strong></span>
        ),
        answer: (
          <span>
            <strong>Wayanad homestays</strong> are accommodations provided by local hosts, offering a homely atmosphere, personal attention, and cultural experiences. Unlike hotels, homestays in Wayanad focus on simplicity, local food, and authentic hospitality, making them ideal for travelers seeking a peaceful and immersive stay in the scenic hills of <a href="https://www.kudajadridrizzle.com/wayanad">Wayanad</a>.
          </span>
        ),
      },
      {
        question: (
          <span><strong>Are homestays in Wayanad suitable for families, couples, and groups?</strong></span>
        ),
        answer: (
          <span>
            Yes, <strong>homestays in Wayanad</strong> are a great choice for all types of travelers. Whether you're a couple looking for privacy, a family with kids, or a group of friends, Wayanad homestays offer spacious rooms, friendly hosts, and a peaceful environment perfect for bonding and relaxation.
          </span>
        ),
      },
      {
        question: (
          <span><strong>How can I find the best homestay in Wayanad?</strong></span>
        ),
        answer: (
          <span>
            To find the best Wayanad homestay, explore reviews on trusted travel websites, compare facilities, and check the location’s proximity to tourist attractions. Many homestays in Wayanad are listed with real guest photos, ratings, and verified contact details to help travelers make informed and safe bookings online.
          </span>
        ),
      },
      {
        question: (
          <span><strong>What amenities do Wayanad homestays typically offer?</strong></span>
        ),
        answer: (
          <span>
            Most Wayanad homestays offer essential amenities like clean rooms, hot water, free Wi-Fi, and home-cooked meals. Additional features may include parking, campfires, trekking guidance, or plantation visits. Homestays in Wayanad combine comfort with local charm, providing a memorable stay amidst nature without the cost of luxury hotels.
          </span>
        ),
      },
      {
        question: (
          <span><strong>Are meals included in Wayanad homestay bookings?</strong></span>
        ),
        answer: (
          <span>
            Many Wayanad homestays include breakfast with the booking, while lunch and dinner are available upon request. Meals are often homemade and reflect the rich flavors of Kerala cuisine. Staying at a <strong>homestay in Wayanad</strong> allows you to enjoy local food prepared fresh with care and authenticity.
          </span>
        ),
      },
      {
        question: (
          <span><strong>Is it safe to stay in a homestay in Wayanad?</strong></span>
        ),
        answer: (
          <span>
            Yes, staying in a homestay in Wayanad is generally safe. These <a href="https://www.kudajadridrizzle.com/rooms">accommodations</a> are run by local families who prioritize guest safety and comfort. Most homestays have gated premises, private rooms, and hosts who are always available to assist, making them suitable for solo travelers and women too.
          </span>
        ),
      },
      {
        question: (
          <span><strong>What is the average price range for Wayanad homestays?</strong></span>
        ),
        answer: (
          <span>
            The cost of Wayanad homestays typically ranges from ₹1,000 to ₹5,000 per night. Budget options offer basic comforts, while <a href="https://www.kudajadridrizzle.com/rooms/premium-rooms">premium homestays</a> provide extra amenities and scenic views. Prices may vary based on the season, location, and facilities offered, but they remain <a href="https://www.kudajadridrizzle.com//rooms/classic-rooms">affordable homestays</a> compared to resorts or hotels.
          </span>
        ),
      },
      {
        question: (
          <span><strong>Can I book Wayanad homestays online?</strong></span>
        ),
        answer: (
          <span>
            Yes, most homestays in Wayanad can be booked online through popular travel platforms or the homestay's own website. Online booking is quick, secure, and allows you to view photos, read guest reviews, and choose the best <strong>Wayanad homestay</strong> that fits your preferences and travel dates easily.
          </span>
        ),
      },
      {
        question: (
          <span><strong>Are there luxury or premium homestays in Wayanad?</strong></span>
        ),
        answer: (
          <span>
            Yes, Wayanad offers premium homestays with modern comforts like private cottages, mountain views, and curated local experiences. These high-end homestays in Wayanad combine luxury with personalized service, making them ideal for honeymooners, weekend escapes, and guests seeking a peaceful stay in an upscale yet natural setting.
          </span>
        ),
      },
      {
        question: (
          <span><strong>When is the best time to book a homestay in Wayanad?</strong></span>
        ),
        answer: (
          <span>
            The best time to book a homestay in Wayanad is from October to May. During this period, the weather is cool and pleasant, perfect for sightseeing, trekking, and exploring nature. Advance booking is recommended during weekends and holidays as many Wayanad homestays get fully booked early.
          </span>
        ),
      },
    ],
  };
  const contentSection = useContentSection('home');
  // Hardcoded SEO metadata (migrated from src/File/homemeta.md)
  const siteUrl = "https://www.kudajadridrizzle.com";
  const canonicalUrl = siteUrl + "/";
  const title = "Wayanad homestays: Best homestay in Wayanad for family, groups";
  const description = "Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay: Book top rated nature friendly Homestays in Wayanad for Family & Group.";
  const image = `${siteUrl}/aboutHero.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Kudajadri Drizzle Homestay",
    description,
    url: siteUrl,
    image,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kayakkandy House, MR School Road, Kaniyambetta",
      addressLocality: "Kalpetta",
      addressRegion: "Wayanad",
      postalCode: "673122",
      addressCountry: "India",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.6854,
      longitude: 76.1320,
    },
    priceRange: "₹₹",
    telephone: "+91 9946 354 511", // ✅ use real number
    sameAs: [
      "https://www.facebook.com/kudajadrihomestay",
      "https://www.instagram.com/kudajadrihomestay/",
      "https://twitter.com/kudajadrihomestay"
    ],
  };

  // Render the page even while meta is loading to avoid showing a loading text

  return (
    <div>
      <Helmet>
        {/* Basic SEO */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content=""
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Drizzle Homestay" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Preload LCP images (desktop and mobile) */}
        <link
          rel="preload"
          as="image"
          href={heroDesktop}
          fetchPriority="high"
          imageSizes="100vw"
        />
        <link
          rel="preload"
          as="image"
          href={heroMobile}
          fetchPriority="high"
          imageSizes="100vw"
          media="(max-width: 767px)"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Kudajadri Drizzle Homestay" />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={new Date().toISOString()} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content={image} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <VideoBackground />
      <Suspense fallback={<div />}> 
        <AboutSession />
      </Suspense>
      <Suspense fallback={<div />}> 
        <GallarySession />
      </Suspense>
      <Suspense fallback={<div />}> 
        <RoomSession />
      </Suspense>
      <Suspense fallback={<div />}> 
        <IndividualRooms />
      </Suspense>
      <Suspense fallback={<div />}> 
        <Amenities />
      </Suspense>
      <Suspense fallback={<div />}> 
        <OurGallery />
      </Suspense>
      <Suspense fallback={<div />}> 
        <ReviewSession />
      </Suspense>
      <Suspense fallback={<div />}> 
        <GuestTestimonials />
      </Suspense>
      <Suspense fallback={<div />}> 
        <LocationImage />
      </Suspense>
      <Suspense fallback={<div />}> 
        <Direction />
      </Suspense>
      {contentSection && (
        <ContentSection
          title={contentSection.title}
          items={contentSection.items}
        />
      )}
      <Suspense fallback={<div />}> 
        <CardSection sectionKey="facilities" className="bg-gray-50" />
      </Suspense>
      <Suspense fallback={<div />}> 
        <FaqList {...content} />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;
