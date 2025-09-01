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
  
  // Convert URL parameter back to original title format (replace hyphens with spaces and capitalize words)
  const getOriginalTitle = (urlTitle: string) => {
    return urlTitle
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const originalTitle = id ? getOriginalTitle(id) : '';
  const packageDetailsData = (packageDetails as PackageDetailsData).tour_package.find(
    pkg => pkg.title.toLowerCase() === originalTitle.toLowerCase()
  ) as TourPackage | undefined;

  const defaultMeta: PackageMeta = {
    title: "Tour Package Details | Kudajadri Homestay Wayanad",
    description:
      "Explore our exclusive tour packages in Wayanad. Discover the best deals for families, couples, and groups with comfortable accommodation and exciting activities.",
    keywords:
      "wayanad tour packages, kudajadri homestay, wayanad tourism, tour packages wayanad",
  };

  const metaInfo = packageDetailsData?.meta || defaultMeta;

  return (
    <div>
      <Helmet>
        <title>{metaInfo.title}</title>
        <meta name="description" content={metaInfo.description} />
        <meta name="keywords" content={metaInfo.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        <meta property="og:title" content={metaInfo.title} />
        <meta property="og:description" content={metaInfo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content={`${window.location.origin}/wayanadImg.jpg`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaInfo.title} />
        <meta name="twitter:description" content={metaInfo.description} />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        <meta
          name="twitter:image"
          content={`${window.location.origin}/wayanadImg.jpg`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Header type="white" />
      {packageDetailsData ? (
        <div className="package-details mt-[60px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16">
          <PackageCard
            title={packageDetailsData.title}
            description={packageDetailsData.description}
            price={packageDetailsData.price}
            duration={packageDetailsData.duration}
            pickupDrop={packageDetailsData.pickup_drop}
            navigate={navigate} // ✅ pass navigate down
          />
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
            {packageDetailsData.details &&
              packageDetailsData.details.map((detail, index) => (
                <BodyCard
                  key={index}
                  title={detail.title}
                  description={detail.body}
                />
              ))}
          </div>
        </div>
      ) : (
        <div className="package-details mt-[60px] px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-20 text-center">
          <h1 className="text-3xl font-bold text-center text-white">
            {originalTitle}
          </h1>
          <p className="text-gray-600 mb-8">
            The tour package "{originalTitle}" could not be found.
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-[#292626] text-white py-3 px-6 rounded-full hover:bg-[#1a1a1a] transition-colors"
          >
            Go Back
          </button>
        </div>
      )}
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
