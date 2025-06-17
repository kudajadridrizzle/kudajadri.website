import recognitionSessionLogo1 from "../../../assets/recognitionSessionLogo1.svg";
import recognitionSessionLogo2 from "../../../assets/recognitionSessionLogo2.svg";
import recognitionSessionLogo3 from "../../../assets/recognitionSessionLogo3.svg";
import recognitionSessionLogo4 from "../../../assets/recognitionSessionLogo4.svg";

const RecognitionSession = () => {
  return (
    <div className="sm:px-[6%] sm:py-32 flex flex-col gap-10 px-4 py-14">
      <div className="flex flex-col gap-4 items-center">
        <span className="block text-[#000] font-ivy sm:text-[44px] text-[32px]">
          Recognized & Trusted by Leading Travel Platforms
        </span>
        <span className="text-secondary sm:text-xl font-albertSans">
          We are proud to be honored by our guests and top travel sites for
          providing exceptional service
        </span>
      </div>
      <div className="flex gap-[50px] justify-center flex-wrap">
        <img
          src={recognitionSessionLogo1}
          alt=""
          className="w-[86px] sm:w-fit"
        />
        <img
          src={recognitionSessionLogo2}
          alt=""
          className="w-[86px] sm:w-fit"
        />
        <img
          src={recognitionSessionLogo3}
          alt=""
          className="w-[86px] sm:w-fit"
        />
        <img
          src={recognitionSessionLogo4}
          alt=""
          className="w-[86px] sm:w-fit"
        />
        <img
          src={recognitionSessionLogo4}
          alt=""
          className="w-[86px] sm:w-fit"
        />
      </div>
    </div>
  );
};

export default RecognitionSession;
