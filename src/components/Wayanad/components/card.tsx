interface CardProps {
  image?: string;
  title?: string;
  index?: string;
  description?: string;
}

const Card = (props: CardProps) => {
    return (
        <div className="flex flex-col items-center self-stretch bg-white sm:flex-row">
            <div className="w-[50%] flex items-center p-0 pr-custom-padding pb-[73px] mobile:pb-[24px] mobile:w-full flex-[1_0_0] self-stretch mobile:p-[16px]">
                <img
                    src={props.image}
                    alt=""
                    className="object-cover size-full rounded-[16px] sm:w-[355.556px] mobile:w-full aspect-[355.556/200]"
                />
            </div>
            <div className="sm:w-[50%] mobile:w-full">
                <div className="flex items-start self-stretch gap-[64px] flex-row">
                    <div className="flex justify-start h-full align-top text-start text-[#1D1D1D] text-[32px] font-normal leading-normal font-ivy ">{props.index}</div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="text-[44px] font-normal leading-normal text-[#1D1D1D] font-ivy ">{props.title}</div>
                        <div className="text-[#6E6E6E] text-[16px] font-medium leading-[24px] font-albertSans">{props.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
