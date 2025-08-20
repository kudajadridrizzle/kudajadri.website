import imageOne from '../../../assets/imageOne.jpg';
import aboutLegacyImage from '../../../assets/aboutLegacyImage.jpg';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

const AboutSession = () => {
  // Hardcoded content
  const heading = 'Kudajadri Drizzle Homestay – The Best Kalpetta Homestay';
  const content = 'Welcome to Kudajadri Drizzle Homestay, one of the finest Kalpetta homestays, offering a unique blend of heritage, nature, and comfort. Nestled amidst the lush greenery of Wayanad, our 100-year-old Jain Tharavadu provides a serene retreat for families, couples, solo travelers, and groups. Whether you are seeking a peaceful escape or an adventure-filled getaway, Kudajadri Drizzle ensures an unforgettable experience.';
  
  const legacyHeading = 'Welcome to Our Kalpetta Homestay';
  const legacyContent = 'At Kudajadri Drizzle Homestay, we combine the charm of traditional architecture with modern comforts. Guests enjoy spacious, airy surroundings, panoramic views of Wayanad’s misty hills, and a calm atmosphere that rejuvenates the mind and soul. Our homestay in Kalpetta is ideal for travelers who value both comfort and authenticity. Each visit promises a culturally immersive experience that highlights Wayanad’s natural beauty and rich heritage.';
  
  const idealForAllHeading = 'Our Heritage – A Kalpetta Homestay with a Story';
  const idealForAllContent = 'Kudajadri Drizzle is more than a homestay in Kalpetta; it is a piece of Wayanad’s history. Originally a 100-year-old Jain Tharavadu, the homestay preserves its cultural charm while offering modern amenities. Guests can feel the warmth of traditional architecture, wooden interiors, and heritage décor that reflect the local culture. Staying at one of our Kalpetta homestays provides a rare opportunity to experience Wayanad’s history firsthand.';
  
  const experienceHeading = 'Ideal for Every Traveler';
  const experienceContent = 'Our homestay in Kalpetta welcomes all types of travelers. Families find a safe and comfortable environment, honeymoon couples enjoy privacy and scenic surroundings, and solo travelers can immerse themselves in nature and local culture. The tranquil location offers relief from urban stress, while panoramic views enhance relaxation. Kudajadri Drizzle stands out among Kalpetta homestays for its versatility, catering to different travel needs without compromising on comfort.';
  
  const cuisineHeading = 'Authentic Kerala Experience';
  const cuisineContent = 'Kudajadri Drizzle is ideally located, equidistant from Bathery, Mananthavady, Kalpetta, and Meppadi. This strategic position allows guests to easily explore Wayanad’s natural beauty, from spice plantations to serene lakes, wildlife sanctuaries, trekking trails, and cultural sites. Staying at our homestay in Kalpetta ensures convenient access to Wayanad’s top attractions while offering a peaceful retreat at the end of the day.';
  
  // New sections
  const natureHeading = ' Equidistant Location for Easy Exploration';
  const natureContent = 'Surround yourself with Wayanad\'s breathtaking natural beauty. Our homestay offers guided nature walks through spice plantations, bird watching tours, and visits to nearby waterfalls. Experience the region\'s rich biodiversity with our expert naturalists who will help you spot exotic birds, butterflies, and if you\'re lucky, even some of the local wildlife.';
  
  const cultureHeading = 'Our Commitment to Comfort and Safety';
  const cultureContent = 'At Kudajadri Drizzle, every detail is designed for guest comfort and safety. Our team ensures attentive service, clean and hygienic spaces, and a secure environment for families, solo travelers, and couples. Guests can relax knowing they are in one of the most trusted Kalpetta home stays, where comfort, privacy, and genuine care are our top priorities.';
  
  const amenitiesHeading = 'Sustainable Tourism and Community Support';
  const amenitiesContent = 'We believe in responsible tourism that preserves Wayanad’s culture and environment. Kudajadri Drizzle sources ingredients locally, supports regional artisans, and follows eco-friendly practices throughout the property. Guests at our Kalpetta homestay contribute to sustainable tourism while enjoying an immersive and authentic experience. Staying here means enjoying Wayanad’s beauty while helping preserve it for future travelers.';
  
  const sustainabilityHeading = 'Immersive Wayanad Experiences';
  const sustainabilityContent = 'Staying at Kudajadri Drizzle allows guests to connect deeply with Wayanad. Our homestay offers guided nature walks, visits to spice plantations, and cultural activities that reflect local traditions. Whether exploring the rich flora and fauna or enjoying storytelling sessions about Wayanad’s history, guests at our homestays in Kalpetta gain a richer understanding of the region. Every moment at our homestay brings travelers closer to the heart of Wayanad.';
  
  const [expanded, setExpanded] = useState(false);
  const [expandedOne, setExpandedOne] = useState(false);
  const [expandedTwo, setExpandedTwo] = useState(false);
  const maxChars = 400;

  const isLong = content.length > maxChars;
  const preview = isLong ? content.slice(0, maxChars) + '...' : content;

  const isLongOne = legacyContent.length > maxChars;
  const previewOne = isLongOne
    ? legacyContent.slice(0, maxChars) + '...'
    : legacyContent;

  const isLongTwo = idealForAllContent.length > maxChars;
  const previewTwo = isLongTwo
    ? idealForAllContent.slice(0, maxChars) + '...'
    : idealForAllContent;

  return (
    <div className="sm:px-[6%] sm:py-32 large:px-[18%] px-4 py-14">
      <div className="flex flex-col gap-12">
        <div className="flex gap-4 sm:flex-row flex-col">
          <h1 className="block sm:w-1/2 text-[#000] font-ivy sm:text-[44px] text-[32px]">
            {heading}
          </h1>
          <div className="sm:w-1/2 text-secondary font-albertSans sm:text-xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {expanded || !isLong ? content : preview}
            </ReactMarkdown>
            {isLong && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 block text-sm text-primary hover:underline focus:outline-none"
              >
                {expanded ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>
        </div>
        <div className="h-[415px] mt-8">
          <img
            src={imageOne}
            alt="Kudajadri Drizzle Homestay"
            className="object-cover size-full rounded-[32px]"
          />
        </div>
      </div>
      <div className="flex gap-4 sm:py-32 py-14 flex-col sm:flex-row">
        <h2 className="text-[#000] sm:text-[44px] text-[32px] font-ivy font-normal flex-1">
          {legacyHeading}
        </h2>
        <div className="flex flex-col gap-8 flex-1">
          <div className="text-secondary sm:text-xl font-albertSans">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {expandedOne || !isLongOne ? legacyContent : previewOne}
            </ReactMarkdown>
            {isLongOne && (
              <button
                onClick={() => setExpandedOne(!expandedOne)}
                className="mt-2 block text-sm text-primary hover:underline focus:outline-none"
              >
                {expandedOne ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>
          <div className="h-[415px]">
            <img
              src={aboutLegacyImage}
              alt=""
              className="size-full object-cover rounded-[32px]"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 sm:py-32 py-14 flex-col sm:flex-row">
        <h2 className="text-[#000] sm:text-[44px] text-[32px] font-ivy font-normal flex-1">
          {idealForAllHeading}
        </h2>
        <div className="flex flex-col gap-8 flex-1">
          <div className="text-secondary sm:text-xl font-albertSans">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {expandedTwo || !isLongTwo ? idealForAllContent : previewTwo}
            </ReactMarkdown>
            {isLongTwo && (
              <button
                onClick={() => setExpandedTwo(!expandedTwo)}
                className="mt-2 block text-sm text-primary hover:underline focus:outline-none"
              >
                {expandedTwo ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>
          <div className="h-[415px]">
            <img
              src={imageOne}
              alt="Ideal for all travelers at Kudajadri"
              className="size-full object-cover rounded-[32px]"
            />
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 sm:py-32 py-14 flex-col sm:flex-row">
        <h2 className="text-[#000] sm:text-[44px] text-[32px] font-ivy font-normal flex-1">
          {experienceHeading}
        </h2>
        <div className="flex flex-col gap-8 flex-1">
          <div className="text-secondary sm:text-xl font-albertSans">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {experienceContent}
            </ReactMarkdown>
          </div>
          <div className="h-[415px]">
            <img
              src={aboutLegacyImage}
              alt="Experience nature at Kudajadri"
              className="size-full object-cover rounded-[32px]"
            />
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 sm:py-32 py-14 flex-col sm:flex-row">
        <h2 className="text-[#000] sm:text-[44px] text-[32px] font-ivy font-normal flex-1">
          {cuisineHeading}
        </h2>
        <div className="flex flex-col gap-8 flex-1">
          <div className="text-secondary sm:text-xl font-albertSans">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {cuisineContent}
            </ReactMarkdown>
          </div>
          <div className="h-[415px]">
            <img
              src={imageOne}
              alt="Authentic cuisine at Kudajadri"
              className="size-full object-cover rounded-[32px]"
            />
          </div>
        </div>
      </div>
      
      {/* New Nature Section */}
      <div className="flex gap-4 sm:py-32 py-14 flex-col sm:flex-row">
        <h2 className="text-[#000] sm:text-[44px] text-[32px] font-ivy font-normal flex-1">
          {natureHeading}
        </h2>
        <div className="flex flex-col gap-8 flex-1">
          <div className="text-secondary sm:text-xl font-albertSans">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {natureContent}
            </ReactMarkdown>
          </div>
          <div className="h-[415px]">
            <img
              src={imageOne}
              alt="Immersive nature experiences at Kudajadri"
              className="size-full object-cover rounded-[32px]"
            />
          </div>
        </div>
      </div>
      
      {/* Cultural Immersion Section */}
      <div className="flex gap-4 sm:py-32 py-14 flex-col sm:flex-row">
        <h2 className="text-[#000] sm:text-[44px] text-[32px] font-ivy font-normal flex-1">
          {cultureHeading}
        </h2>
        <div className="flex flex-col gap-8 flex-1">
          <div className="h-[415px]">
            <img
              src={aboutLegacyImage}
              alt="Cultural immersion experiences at Kudajadri"
              className="size-full object-cover rounded-[32px]"
            />
          </div>
          <div className="text-secondary sm:text-xl font-albertSans">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {cultureContent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      
      {/* Modern Amenities Section */}
      <div className="flex gap-4 sm:py-32 py-14 flex-col sm:flex-row">
        <h2 className="text-[#000] sm:text-[44px] text-[32px] font-ivy font-normal flex-1">
          {amenitiesHeading}
        </h2>
        <div className="flex flex-col gap-8 flex-1">
          <div className="text-secondary sm:text-xl font-albertSans">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {amenitiesContent}
            </ReactMarkdown>
          </div>
          <div className="h-[415px]">
            <img
              src={imageOne}
              alt="Modern amenities at Kudajadri"
              className="size-full object-cover rounded-[32px]"
            />
          </div>
        </div>
      </div>
      
      {/* Sustainable Tourism Section */}
      <div className="flex gap-4 sm:py-32 py-14 flex-col sm:flex-row">
        <h2 className="text-[#000] sm:text-[44px] text-[32px] font-ivy font-normal flex-1">
          {sustainabilityHeading}
        </h2>
        <div className="flex flex-col gap-8 flex-1">
          <div className="h-[415px]">
            <img
              src={aboutLegacyImage}
              alt="Sustainable tourism at Kudajadri"
              className="size-full object-cover rounded-[32px]"
            />
          </div>
          <div className="text-secondary sm:text-xl font-albertSans">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {sustainabilityContent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSession;
