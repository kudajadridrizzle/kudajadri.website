import faceBookLogo from "../../../assets/Facebook.svg";
import instaLogo from "../../../assets/Insta.svg";
import youtubeLogo from "../../../assets/youtube.svg";
import twitterLogo from "../../../assets/twitter.svg";
import threadLogo from "../../../assets/Thread.svg";
import { Link, useNavigate } from "react-router-dom";

const whatsappNumber = '+91 9946 354 511'
const email = 'kudajadri@ymail.com';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary">
      <div className="sm:px-[12%] large:px-[18%] sm:py-14 mobile:py-7 mobile:px-4 flex flex-col sm:flex-row sm:justify-between border-b border-[#fff] sm:gap-0 mobile:gap-[30px] items-center">
        <span className="block text-[#fff] font-ivy sm:text-[44px] mobile:text-[32px]">
          Ready to discover nature? Book now.
        </span>
        <div className="w-[100%] flex items-start">
          <button className=" px-6 py-3 bg-[#fff] rounded-full text-primary font-albertSans text-base font-medium capitalize" onClick={() => {navigate("/contact")}}>
            Book Now
          </button>
        </div>
      </div>
      <div className="sm:py-20 flex flex-col  sm:gap-32 sm:px-[12%] large:px-[18%]">
        <div className="flex gap-[52px] mobile:hidden sm:flex">
          <img src={faceBookLogo} alt="facebookLogo" className="size-8" />
          <img src={twitterLogo} alt="twitterLogo" className="size-8" />
          <img src={instaLogo} alt="instaLogo" className="size-8" />
          <img src={threadLogo} alt="threadLogo" className="size-8" />
          <img src={youtubeLogo} alt="youtubeLogo" className="size-8" />
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-[30px] justify-between mobile:gap-11 mobile:py-10 mobile:px-4 sm:p-0">
          <div className="flex flex-col sm:gap-9 mobile:gap-6">
            <span className="text-[#fff] font-albertSans text-base uppercase block">
              CONTACT
            </span>
              <a
                href={import.meta.env.VITE_GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-secondary sm:text-xl leading-8 font-albertSans sm:w-[382px]"
              >
                Kudajadri Drizzle Homestay, Kayakkandy House, MR School Road,
                Kaniyambetta, Wayanad, Kerala - 673122, India.
              </a>
            <div>
              <span className="block text-secondary leading-8 sm:text-xl font-albertSans">
                <a href={`tel:${whatsappNumber}`}>{whatsappNumber}</a>

              </span>
              <span className="block text-secondary leading-8 sm:text-xl font-albertSans">
                <a
                  href={`mailto:${email}`}
                  className="text-secondary text-xl font-albertSans hover:underline"
                >{email}</a>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-[#fff] font-albertSans text-base uppercase block">
              Quick Links
            </span>
            <div className="text-secondary font-albertSans sm:text-xl  flex flex-col gap-2">
              <Link to='/'>Wayanad Homestays</Link>
              <Link to='/about'>Kalpetta Homestays</Link>
              {/* <Link to=''>Room & Tariff</Link>
              <Link to=''>Facilities & Activities</Link> */}
              <Link to='/gallery'>Gallery</Link>
              <Link to='/contact'>Online Reservation</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[#fff] font-albertSans text-base uppercase block">
              Room & Tariff
            </span>
            <div className="text-secondary font-albertSans sm:text-xl  flex flex-col gap-2">
              <Link to='/'>Classic Rooms</Link>
              <Link to='/about'>Deluxe Rooms</Link>
              <Link to='/gallery'>Deluxe Heritage Rooms</Link>
              <Link to='/contact'>Premium Rooms</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[#fff] font-albertSans text-base uppercase block">
              Important Links
            </span>
            <div className="text-secondary font-albertSans sm:text-xl  flex flex-col gap-2">
              <Link to='/'>Placeholder Text</Link>
              <Link to='/about'>Placeholder Text</Link>
              <Link to='/gallery'>Placeholder Text</Link>
              <Link to='/contact'>Placeholder Text</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;




