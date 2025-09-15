interface PackagesProps {
  image: string;
  title: string;
  urlSlug: string;
  price: string;
  days: string;
  people?: string;
  onClick?: () => void;
}

export const PackageCard = ({
  image,
  title,
  days,
  people,
  price,
  onClick,
}: PackagesProps) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 rounded-2xl border border-[color:var(--border-color,#D7D9DB)] bg-white font-albertSans shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Package Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[269px] object-cover rounded-t-2xl"
      />

      {/* Package Details */}
      <div className="px-6 py-7 flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-black font-ivy text-xl sm:text-2xl font-bold leading-none">
            {title}
          </h3>

          <div className="flex justify-between gap-4">
            <div className="flex items-center gap-2">
              <i className="material-icons text-[12px] filled">schedule</i>
              <span className="text-[color:var(--secondary-color,#737373)] font-primary text-sm sm:text-base font-medium leading-6">
                {days}
              </span>
            </div>

            {people && (
              <div className="flex items-center gap-2">
                <span className="material-icons filled text-[12px]">person</span>
                <span className="text-[color:var(--secondary-color,#737373)] font-primary text-sm sm:text-base font-medium leading-6">
                  {people}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between w-full mt-2">
          <span className="text-black font-manrope text-xl sm:text-2xl font-bold leading-none">
            {price}
          </span>
          <button
            onClick={handleClick}
            className="flex items-center justify-center gap-1 px-5 py-3 rounded-full border border-[color:var(--border-color,#D7D9DB)] bg-[#F2F4F6] hover:bg-[#e0e3e6] transition-colors duration-300 text-sm sm:text-base"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
