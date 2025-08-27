import { PackageCard } from './package';
import data from '../Data/data.json';
import img1 from '../../../assets/Image (1).jpg';
import img2 from '../../../assets/Image (2).jpg';
import img3 from '../../../assets/Image (3).jpg';
import { useNavigate } from 'react-router-dom';

export const Packages = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:py-32 sm:px-[12%] mobile:flex-col px-4 py-14 large:px-[18%] flex flex-col gap-10">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-ivy text-center text-black">
        Best Wayanad Tour Packages
      </h2>

      {/* Package Cards */}
      <div className="flex sm:flex-row flex-col justify-between gap-[24px]">
        {data.packages.map((pkg, index) => (
          <PackageCard
            key={index}
            {...pkg}
            image={index === 0 ? img1 : index === 1 ? img2 : img3}
            onClick={() => {
              const encodedTitle = encodeURIComponent(pkg.title);
              navigate(`/tour-packages/${encodedTitle}`, {
                state: { fromDashboard: true },
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};
