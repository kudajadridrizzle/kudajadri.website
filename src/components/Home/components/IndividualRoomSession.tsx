interface IndivdualRoomsSessionProp {
  image?: string;
  title?: string;
  discription?: string;
  subTitle?: string;
  type?: "default" | "reverse";
  onClick?: () => void;
}

export const IndividualRoomSession = ({
  image,
  title,
  discription,
  subTitle,
  type = "default",
  onClick,
}: IndivdualRoomsSessionProp) => {
  const isReverse = type === "reverse";
  return (
    <div
      className={`flex flex-col sm:gap-8 sm:flex-row ${
        isReverse && "sm:flex-row-reverse"
      }`}
    >
      <div className="sm:flex-1 ">
        <img
          src={image}
          alt=""
          className="object-cover size-full rounded-[16px]"
        />
      </div>
      <div className="sm:p-6 sm:flex-1">
        <div className="flex flex-col gap-4 h-full justify-center mobile:pt-6 sm:pt-0">
          <h1 className="font-albertSans sm:text-base mobile:text-sm text-primary">
            {subTitle}
          </h1>
          <div className="flex flex-col gap-3">
            <h1 className="text-primary sm:text-[44px] mobile:text-[28px] font-ivy">
              {title}
            </h1>
            <p className="text-primary opacity-50 font-albertSans">
              {discription}
            </p>
          </div>
          <div>
            <button
              className="rounded-full px-6 py-3 border border-primary text-base"
              onClick={onClick}
            >
              View Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
