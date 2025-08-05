import { useParams } from 'react-router-dom';
import packageDetails from './Data/packageDetails.json';
import { Header } from '../Home/components/Header';
import cloud from '/cloud.jpg';
import Footer from '../Home/components/Footer';

const TourPackagesDetails = () => {
  // This component will display the details of a specific tour package
  const { id } = useParams<{ id: string }>();
  const decodedTitle = id ? decodeURIComponent(id) : '';
  const packageDetailsData = packageDetails.tour_package.find(
    pkg => pkg.title === decodedTitle
  );
  return (
    <div>
      <Header />
      {packageDetailsData ? (
        <div className="package-details  mt-[60px] p-[80px]">
          <PackageCard
            title={packageDetailsData.title}
            description={packageDetailsData.description}
            price={packageDetailsData.price}
            duration={packageDetailsData.duration}
            pickupDrop={packageDetailsData.pickup_drop}
          />
          <div className="flex flex-col gap-[44px] mt-[96px]">
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
        <div className="package-details mt-[60px] p-[80px] text-center">
          <h1 className="text-2xl font-bold mb-4">Package Not Found</h1>
          <p className="text-gray-600 mb-8">
            The tour package "{decodedTitle}" could not be found.
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
}): JSX.Element => {
  return (
    <div
      className="package-card relative flex p-[56px] justify-between shadow-lg rounded-[32px] gap-[64px] h-[351px] w-full bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${cloud})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[32px] pointer-events-none z-0"></div>
      <div className="flex flex-col gap-[36px] z-10 text-white">
        <div className="flex flex-col  gap-[8px] opacity-100 border-l-[1px] pt-1 pr-5 pb-1 pl-5">
          <h2 className="font-albert font-medium text-[44px] leading-none tracking-normal align-middle capitalize text-white">
            {title}
          </h2>
          <p className="text-base font-medium leading-none tracking-normal capitalize align-middle font-albert text-[#CDCDCD]">
            {description}
          </p>
        </div>
        <div className="flex gap-[72px] text-white ">
          <div className="flex flex-col gap-[8px]">
            <p className="font-tertiary font-normal text-sm leading-none tracking-[10%] align-middle uppercase">
              Duration
            </p>
            <p className="font-albert font-medium text-[24px] leading-none tracking-normal align-middle capitalize">
              {duration}
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="font-tertiary font-normal text-sm leading-none tracking-[10%] align-middle uppercase">
              Pick up & Drop
            </p>
            <p className="font-albert font-medium text-[24px] leading-none tracking-normal align-middle capitalize">
              {pickupDrop}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start p-[16px] gap-[16px] z-10">
        <PriceCard
          price={{
            current_price: price.current_price,
            original_price: price.original_price,
            note: price.note,
          }}
        />
      </div>
    </div>
  );
};

const PriceCard = ({
  price,
}: {
  price: { current_price: string; original_price: string; note: string };
}): JSX.Element => {
  return (
    <div className="price-card flex flex-col p-[24px] gap-[24px] bg-white shadow-md rounded-[16px]">
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
      <button className="w-full bg-[#292626] text-white py-[12px] px-[24px] rounded-[99px] text-base font-medium leading-none tracking-normal text-center align-middle capitalize">
        Check Availability & Book
      </button>
    </div>
  );
};

const BodyCard = (body: { title: string; description: string[] }) => {
  return (
    <div className="flex ">
      <span className="font-albert font-medium text-[36px] leading-none tracking-normal align-middle capitalize w-[50%]">
        {body.title}
      </span>
      <div className="flex flex-col w-[50%]">
        {body.description.length > 0 &&
          body.description.map((item, index) => (
            <p
              key={index}
              className="font-albert font-medium text-base leading-[1.5] tracking-normal align-middle capitalize text-[#737373]"
            >
              {item}
            </p>
          ))}
      </div>
    </div>
  );
};

export default TourPackagesDetails;
