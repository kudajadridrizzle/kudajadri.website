import leafOne from "../../../assets/ReviwLeaf1.svg";
import leafTwo from "../../../assets/ReviwLeaf2.svg";
const ReviewSession = () => {
  return (
    <div className="sm:py-32 sm:px-[12%] flex flex-col gap-6 items-center mobile:px-4 mobile:py-14 large:px-[18%]">
      <div className="flex gap-4 items-center justify-center">
        <div>
          <img src={leafOne} alt="" />
        </div>
        <span className="block sm:text-[100px] mobile:text-[52px] font-albertSans text-primary">
          4.6
        </span>
        <div>
          <img src={leafTwo} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-primary font-ivy sm:text-[44px] mobile:text-[32px] font-normal">
          Guest favorite
        </h1>
        <p className="sm:text-xl text-secondary text-center font-albertSans">
          One of the most loved homes! Highly rated for its exceptional reviews,
          reliability, and welcoming atmosphere. A truly unforgettable stay!
        </p>
      </div>
      <div>
        <button className="px-6 py-3 rounded-full border border-primary text-primary font-albertSans font-medium text-base" onClick={() => {
          window.open(
            'https://www.google.com/maps/place/Kudajadri+Drizzle+-+Best+Wayanad+Homestays/@11.6944682,76.0899646,17z/data=!4m11!3m10!1s0x3ba6752bf8e8c185:0x5bf951fa893c48b4!5m2!4m1!1i2!8m2!3d11.6944682!4d76.0925395!9m1!1b1!16s%2Fg%2F1ptwp6yd6?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D',
            'noopener,noreferrer' 
          );
        }}
        >
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default ReviewSession;
