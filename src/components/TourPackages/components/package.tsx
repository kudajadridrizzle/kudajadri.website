interface packagesProps {
  image: string;
  title: string;
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
}: packagesProps) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 rounded-[30px] border border-[color:var(--border-color,#D7D9DB)] bg-white font-albertSans">
      <img
        src={image}
        alt={title}
        className="w-full h-[269px] object-cover rounded-t-[30px]"
      />
      <div className="px-[24px] py-[28px] flex flex-col gap-4 w-full">
          <div className="gap-[12px] flex flex-col">
            <span className="text-black font-manrope text-[24px] font-bold leading-none">{title}</span>
            <div className="flex justify-between gap-[16px] ">
                 <div className="flex items-center gap-2">
                    <i className="material-icons text-[12px] filled">schedule</i>
                    <span className="text-[color:var(--secondary-color,#737373)] font-primary text-[16px] font-medium leading-[26px]">{days}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="material-icons filled text-[12px]">person</span>
                    <span className="text-[color:var(--secondary-color,#737373)] font-primary text-[16px] font-medium leading-[26px]">{people}</span>
                 </div>
            </div>
          </div>
          <div className="flex items-center self-stretch justify-between">
            <span className="text-black font-manrope text-[24px] font-bold leading-none">{price}</span>
            <button onClick={handleClick} className="flex items-center justify-center gap-1 px-5 py-3 rounded-full border border-[color:var(--border-color,#D7D9DB)] bg-[#F2F4F6]">{'View Details'}</button>
          </div>
      </div>
    </div>
  );
}