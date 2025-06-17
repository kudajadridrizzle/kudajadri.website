import HeritageStay from "../../../assets/HeritageStay.svg";
import PaddyFieldView from "../../../assets/PaddyFieldView.svg";
import FastWifi from "../../../assets/FastWiFi.svg";
import EnhancedSafety from "../../../assets/EnhancedSafety.svg";
import AmpleParking from "../../../assets/AmpleParking.svg";
import PeacefulEnvironment from "../../../assets/PeacefulEnvironment.svg";

const Amenities = () => {
  return (
    <div className="sm:px-[6%] sm:py-32 bg-primary mobile:px-4 mobile:py-14" id="a">
      <div className="flex flex-col sm:gap-16 mobile:gap-8">
        <div className="flex flex-col gap-6 sm:items-center mobile:items-start">
          <div className="flex flex-col gap-6 font-albertSans sm:items-center mobile:items-start">
            <p className="uppercase text-[#FFF] font-albertSans">amenities</p>
            <h1 className="text-[#FFF] font-ivy text-[32px]">
              What Awaits You
            </h1>
          </div>
          <p className="font-albertSans text-secondary text-[16px]">
            Discover a perfect blend of heritage, comfort, and nature, designed
            to make your stay truly unforgettable.
          </p>
        </div>

        <div className="flex flex-wrap sm:gap-14 mobile:gap-5 justify-center">
          <AmititiesLogo logo={HeritageStay} title="Heritage Stay" />
          <AmititiesLogo logo={PaddyFieldView} title="Paddy Field View" />
          <AmititiesLogo logo={FastWifi} title="Fast WiFi" />
          <AmititiesLogo logo={EnhancedSafety} title="Enhanced Safety" />
          <AmititiesLogo logo={AmpleParking} title="Ample Parking" />
          <AmititiesLogo
            logo={PeacefulEnvironment}
            title="Peaceful Environment"
          />
        </div>
        <div className="flex flex-wrap sm:gap-14 mobile:gap-5 justify-center">
          <AmititiesLogo logo={HeritageStay} title="Heritage Stay" />
          <AmititiesLogo logo={PaddyFieldView} title="Paddy Field View" />
          <AmititiesLogo logo={FastWifi} title="Fast WiFi" />
          <AmititiesLogo logo={EnhancedSafety} title="Enhanced Safety" />
          <AmititiesLogo logo={AmpleParking} title="Ample Parking" />
          <AmititiesLogo
            logo={PeacefulEnvironment}
            title="Peaceful Environment"
          />
        </div>
      </div>
    </div>
  );
};

export default Amenities;

const AmititiesLogo = ({ logo, title }: { logo: string; title: string }) => {
  return (
    <div className="flex flex-col gap-2 items-center mobile:py-7 sm:py-0 mobile:w-[140px]">
      <div>
        <img src={logo} alt="" />
      </div>
      <p className="text-[#FFF] text-base font-albertSans text-center">{title}</p>
    </div>
  );
};
