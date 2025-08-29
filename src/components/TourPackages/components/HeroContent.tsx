'use client';
import { Link } from 'react-router-dom';

// Example images from /public/images
const tourImages = [
  '/images/1 (1).jpg',
  '/images/1 (2).jpg',
  '/images/1 (3).jpg',
  '/images/1 (4).jpg',
];

export const TourPackages = () => {
  return (
    <section className="w-full px-4 sm:px-12 lg:px-[18%] 2xl:px-[12%] py-12 sm:py-20">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Heading */}
          <div className="flex flex-col mb-6">
            <span className="uppercase text-primary tracking-[1.6px] text-sm font-albertSans mb-2">
              Wayanad Tours
            </span>
            <h1 className="text-primary font-ivy sm:text-[44px] mobile:text-[32px] mb-2">
              Wayanad Tour Packages
            </h1>
            <div className="h-1 w-20 bg-primary"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 text-secondary font-albertSans text-base sm:text-lg leading-relaxed">
            <p>
              Explore{' '}
              <Link to="/wayanad" className="text-primary underline">
                Wayanad
              </Link>{' '}
              like never before with our specially designed tour packages.
              Whether you are seeking adventure, relaxation, or cultural
              experiences, our packages cater to every traveler’s needs.
            </p>
            <p>
              Our tours include comfortable{' '}
              <Link to="/rooms">Wayanad accommodations</Link> and{' '}
              <Link to="/">authentic Wayanad homestays</Link>, ensuring a cozy
              and memorable stay. Activities cover:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Nature & Adventure Tours</strong> – Trekking, wildlife
                safaris, and plantation walks.
              </li>
              <li>
                <strong>Family-Friendly Tours</strong> – Scenic spots,
                kid-friendly activities, and comfortable stays.
              </li>
              <li>
                <strong>Heritage & Cultural Tours</strong> – Temples, historical
                sites, and local traditions.
              </li>
              <li>
                <strong>Romantic Getaways</strong> – Peaceful locations, cozy
                stays, and serene experiences for couples.
              </li>
            </ul>

            <p>
              All tours include accommodation, local transportation, and guided
              experiences. Enjoy the best of waterfalls, wildlife, and lush
              landscapes without any hassle.
            </p>

            <p>
              Plan your trip now and make the most of your Wayanad adventure.
            </p>
          </div>
        </div>

        {/* Right: Image Grid */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
          <img
            src={tourImages[0]}
            alt="Wayanad Tour 1"
            className="w-full h-full object-cover rounded-2xl col-span-2 row-span-1"
          />
          <img
            src={tourImages[1]}
            alt="Wayanad Tour 2"
            className="w-full h-full object-cover rounded-2xl"
          />
          <img
            src={tourImages[2]}
            alt="Wayanad Tour 3"
            className="w-full h-full object-cover rounded-2xl"
          />
          <img
            src={tourImages[3]}
            alt="Wayanad Tour 4"
            className="w-full h-full object-cover rounded-2xl col-span-2 row-span-1"
          />
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
