import { useParams, useNavigate } from 'react-router-dom';
import packageDetails from './Data/packageDetails.json';
import { Header } from '../Home/components/Header';
import cloud from '/cloud.jpg';
import Footer from '../Home/components/Footer';
import { Helmet } from 'react-helmet-async';
 

// TypeScript interfaces for tour package structure
interface PackageMeta {
  title: string;
  description: string;
  keywords: string;
}

interface PackagePrice {
  current_price: string;
  original_price: string;
  note: string;
}

interface PackageDetail {
  title: string;
  body: string[];
}

interface TourPackage {
  title: string;
  description: string;
  duration: string;
  pickup_drop: string;
  meta?: PackageMeta;
  price: PackagePrice;
  details: PackageDetail[];
}

interface PackageDetailsData {
  tour_package: TourPackage[];
}

const TourPackagesDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Hardcoded per-package metadata (from public/pagemeta.md)
  const packageMetaMap: Record<string, { title: string; description: string }> = {
    'green-wayanad-tour-package': {
      title: 'Green Wayanad tour package: Wild Life Sanctuaries, Edakkal Cave, Kuruva Island, Pookkode Lake',
      description: 'Green Wayanad Tour Package: Explore lush wildlife sanctuaries, ancient Edakkal Cave, serene Kuruva Island, and scenic Pookkode Lake for a perfect nature getaway.'
    },
    'vibrant-wayanad-tour-package': {
      title: 'Vibrant Wayanad Tour Package: Soochippara Water falls, Lakkidi View Point, Karapauzha Dam',
      description: 'Vibrant Wayanad Tour Package: Explore thrilling Soochippara Waterfalls, panoramic views from Lakkidi View Point, and the tranquil charm of Karapuzha Dam.'
    },
    'dream-wayanad-tour-packages': {
      title: 'Dream Wayanad Tour Packages: Edakkal Caves, Kuruva Island, Chembra Peak, Thirunelli Temple',
      description: 'Dream Wayanad Tour Package: Explore mystical Edakkal Caves, lush Kuruva Island, breathtaking Chembra Peak, and the spiritual vibes of Thirunelli Temple.'
    }
  };
  
  // Convert URL parameter back to original title format, handling special characters and capitalization
  const getOriginalTitle = (urlTitle: string) => {
    const decodedTitle = decodeURIComponent(urlTitle);
    return decodedTitle
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const originalTitle = id ? getOriginalTitle(id) : '';
  
  const selectedPackage = (packageDetails as PackageDetailsData).tour_package.find(
    (pkg) => pkg.title.toLowerCase() === originalTitle.toLowerCase()
  );

  // Get the package slug for metadata lookup
  const getPackageSlug = (title: string): string => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
  };

  const packageSlug = selectedPackage ? getPackageSlug(selectedPackage.title) : '';
  // Map to our hardcoded keys (convert underscores to dashes)
  const normalizedSlug = packageSlug.replace(/_/g, '-');
  const packageMeta = normalizedSlug ? packageMetaMap[normalizedSlug] : null;
  
  // Set metadata with fallbacks
  const meta = {
    title: packageMeta?.title || selectedPackage?.meta?.title || `${selectedPackage?.title || 'Tour Package'} | Kudajadri Drizzle`,
    description: packageMeta?.description || selectedPackage?.meta?.description || selectedPackage?.description || 'Experience the best of Wayanad with our exclusive tour packages.',
    keywords: selectedPackage?.meta?.keywords || 'wayanad tour, kudajadri drizzle, wayanad travel, kerala tourism'
  };

  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Package not found</p>
      </div>
    );
  }

  const currentUrl = `https://www.kudajadridrizzle.com/tour-packages/${id}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Drizzle" />

        {/* Open Graph */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Kudajadri Drizzle" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://kudajadridrizzle.com/tour-packages-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta name="twitter:image" content="https://kudajadridrizzle.com/tour-packages-preview.jpg" />

        <link rel="canonical" href={currentUrl} />

        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TouristAttraction',
            'name': meta.title,
            'description': meta.description,
            'url': currentUrl,
            'image': 'https://kudajadridrizzle.com/tour-packages-preview.jpg',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Wayanad',
              'addressRegion': 'Kerala',
              'addressCountry': 'IN'
            },
            'offers': {
              '@type': 'Offer',
              'url': currentUrl,
              'priceCurrency': 'INR',
              'price': selectedPackage.price?.current_price?.replace(/[^0-9]/g, '') || '',
              'availability': 'https://schema.org/InStock',
              'validFrom': new Date().toISOString()
            },
            'touristType': ['Family', 'Couples', 'Solo', 'Group']
          })}
        </script>
      </Helmet>

      <Header type="white" />
      <div className="package-details mt-[60px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16">
        <PackageCard
          title={selectedPackage.title}
          description={selectedPackage.description}
          price={selectedPackage.price}
          duration={selectedPackage.duration}
          pickupDrop={selectedPackage.pickup_drop}
          navigate={navigate} // ✅ pass navigate down
        />
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          {selectedPackage.details &&
            selectedPackage.details.map((detail, index) => (
              <BodyCard
                key={index}
                title={detail.title}
                description={detail.body}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const PackageCard = ({
  title,
  description,
  price,
  duration,
  pickupDrop,
  navigate, // ✅ receive navigate
}: {
  title: string;
  description: string;
  price: {
    current_price: string;
    original_price: string;
    note: string;
  };
  duration: string;
  pickupDrop: string;
  navigate: (path: string) => void; // ✅ typing for navigate
}): JSX.Element => {
  return (
    <div
      className="package-card relative flex flex-col lg:flex-row p-6 sm:p-8 md:p-12 lg:p-14 xl:p-16 justify-between shadow-lg rounded-2xl sm:rounded-3xl lg:rounded-[32px] h-auto lg:h-[351px] w-full bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${cloud})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[32px] pointer-events-none z-0"></div>
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-9 z-10 text-white w-full lg:w-2/3">
        <div className="flex flex-col gap-2 sm:gap-3 opacity-100 border-l-2 sm:border-l-[1px] pt-1 pr-4 sm:pr-5 pb-1 pl-4 sm:pl-5">
          <h2 className="font-albert font-medium text-3xl sm:text-4xl md:text-[44px] leading-tight tracking-normal capitalize text-white">
            {title}
          </h2>
          <p className="text-sm sm:text-base font-medium leading-relaxed tracking-normal capitalize font-albert text-[#CDCDCD] mt-1 sm:mt-2">
            {description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-16 lg:gap-20 text-white mt-4 sm:mt-0">
          <div className="flex flex-col gap-1 sm:gap-2">
            <p className="font-tertiary font-normal text-xs sm:text-sm leading-none tracking-[10%] align-middle uppercase">
              Duration
            </p>
            <p className="font-albert font-medium text-lg sm:text-xl md:text-2xl leading-none tracking-normal align-middle capitalize">
              {duration}
            </p>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <p className="font-tertiary font-normal text-xs sm:text-sm leading-none tracking-[10%] align-middle uppercase">
              Pick up & Drop
            </p>
            <p className="font-albert font-medium text-lg sm:text-xl md:text-2xl leading-none tracking-normal align-middle capitalize">
              {pickupDrop}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full lg:w-auto mt-6 lg:mt-0 p-4 sm:p-6 lg:p-4 gap-4 z-10 bg-white/10 lg:bg-transparent rounded-lg lg:rounded-none">
        <PriceCard price={price} navigate={navigate} /> {/* ✅ pass navigate */}
      </div>
    </div>
  );
};

const PriceCard = ({
  price,
  navigate, // ✅ accept navigate
}: {
  price: { current_price: string; original_price: string; note: string };
  navigate: (path: string) => void;
}): JSX.Element => {
  return (
    <div className="price-card flex flex-col w-full p-4 sm:p-6 gap-4 sm:gap-6 bg-white/90 backdrop-blur-sm shadow-md rounded-lg sm:rounded-xl">
      <div className="flex flex-col items-start gap-[8px]">
        <div className="flex flex-col items-start gap-[4px]">
          <span className="text-sm font-medium leading-none tracking-normal capitalize align-middle">
            Package price
          </span>
          <p className="text-2xl font-semibold leading-none tracking-normal capitalize align-middle font-albert">
            {price.current_price}
          </p>
          <p className="text-base font-medium leading-none tracking-normal line-through capitalize align-middle font-albert text-[#A0A0A0]">
            {price.original_price}
          </p>
        </div>
        <p className="text-base font-medium leading-none tracking-normal capitalize align-middle font-albert text-[#A0A0A0]">
          {price.note}
        </p>
      </div>

      {/* ✅ FIXED BUTTON */}
      <button
        onClick={() => navigate('/contact')}
        className="w-full bg-[#292626] text-white py-[12px] px-[24px] rounded-[99px] text-base font-medium leading-none tracking-normal text-center align-middle capitalize hover:bg-[#1a1a1a] transition-colors"
      >
        Check Availability & Book
      </button>
    </div>
  );
};

const BodyCard = (body: { title: string; description: string[] }) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <h3 className="font-albert font-medium text-xl sm:text-2xl leading-tight tracking-normal capitalize">
        {body.title}
      </h3>
      <div className="flex flex-col gap-2 sm:gap-3">
        {body.description.map((item, index) => (
          <p
            key={index}
            className="font-albert font-medium text-sm sm:text-base leading-relaxed tracking-normal align-middle capitalize text-[#555] sm:text-[#737373]"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TourPackagesDetails;
