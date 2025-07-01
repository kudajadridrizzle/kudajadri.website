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
  // subTitle,
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
        <div className="flex flex-col justify-center h-full gap-4 mobile:pt-6 sm:pt-0">
          {/* <h1 className="font-albertSans sm:text-base mobile:text-sm text-primary">
            {subTitle}
          </h1> */}
          <div className="flex flex-col gap-3">
            <h1 className="text-primary sm:text-[44px] mobile:text-[28px] font-ivy">
              {title}
            </h1>
            <p className="opacity-50 text-primary font-albertSans">
              {discription}
            </p>
          </div>
          <div>
            <button
              className="px-6 py-3 text-base border rounded-full border-primary"
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
