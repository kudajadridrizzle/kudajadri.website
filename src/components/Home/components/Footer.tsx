import faceBookLogo from '../../../assets/Facebook.svg';
import instaLogo from '../../../assets/Insta.svg';
import youtubeLogo from '../../../assets/youtube.svg';
import twitterLogo from '../../../assets/twitter.svg';
import threadLogo from '../../../assets/Thread.svg';
import { Link, useNavigate } from 'react-router-dom';

const whatsappNumber = '+91 9946 354 511';
const email = 'kudajadri@ymail.com';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary">
      {/* Top CTA Section */}
      <div className="sm:px-[12%] large:px-[18%] sm:py-14 mobile:py-7 mobile:px-4 flex flex-col sm:flex-row gap-x-[30px] items-center border-b border-[#fff]">
        <span className="block text-[#fff] font-ivy sm:text-[44px] mobile:text-[32px]">
          Book Kudajadri Drizzle Homestays in Wayanad Now{' '}
        </span>
        <div className="w-[100%] flex items-start justify-end sm:justify-between">
          <button
            className="px-6 py-3 bg-[#fff] rounded-full text-primary font-albertSans text-base font-medium capitalize"
            onClick={() => {
              navigate('/contact');
            }}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="sm:py-20 flex flex-col sm:gap-32 sm:px-[12%] large:px-[18%]">
        {/* Social Icons */}
        <div className="flex gap-[52px] mobile:hidden sm:flex">
          <img src={faceBookLogo} alt="facebookLogo" className="size-8" />
          <img src={twitterLogo} alt="twitterLogo" className="size-8" />
          <img src={instaLogo} alt="instaLogo" className="size-8" />
          <img src={threadLogo} alt="threadLogo" className="size-8" />
          <img src={youtubeLogo} alt="youtubeLogo" className="size-8" />
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row sm:gap-[30px] justify-between mobile:gap-11 mobile:py-10 mobile:px-4 sm:p-0">
          {/* Contact Section */}
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
                >
                  {email}
                </a>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <span className="text-[#fff] font-albertSans text-base uppercase block">
              Quick Links
            </span>
            <div className="text-secondary font-albertSans sm:text-xl flex flex-col gap-2">
              <Link to="/about" className="no-underline hover:underline">About Us</Link>
              <Link to="/rooms" className="no-underline hover:underline">Rooms</Link>
              <Link to="/gallery" className="no-underline hover:underline">Gallery</Link>
              <Link to="/wayanad" className="no-underline hover:underline">Wayanad</Link>
              <Link to="/facilities" className="no-underline hover:underline">Facilities</Link>
              <Link to="/contact" className="no-underline hover:underline">Contact Us</Link>
              <Link to="/blog" className="no-underline hover:underline">Blog</Link>
              <Link to="/tour-packages" className="no-underline hover:underline">Wayanad Tour Packages</Link>
            </div>
          </div>

          {/* Important Links */}
          <div className="flex flex-col gap-6">
            <span className="text-[#fff] font-albertSans text-base uppercase block">
              Important Links
            </span>
            <div className="text-secondary font-albertSans sm:text-xl flex flex-col gap-2">
              <Link to="/" className="no-underline hover:underline">Wayanad Homestays</Link>
              <Link to="/about" className="no-underline hover:underline">Kalpetta Homestays</Link>
              <Link to="/contact" className="no-underline hover:underline">Wayanad Homestay Bookings</Link>
              <Link to="/facilities" className="no-underline hover:underline">Homestay with Swimming Pool</Link>
              <Link to="/gallery" className="no-underline hover:underline">Homestay in Wayanad Photos</Link>
              <Link to="/rooms" className="no-underline hover:underline">Wayanad Accommodations</Link>
              <Link to="/rooms/premium-rooms" className="no-underline hover:underline">
                Premium Homestays in Wayanad
              </Link>
              <Link to="/rooms/deluxe-heritage-rooms" className="no-underline hover:underline">
                Heritage Homestays in Wayanad
              </Link>
            </div>
          </div>

          {/* Room & Tariff */}
          <div className="flex flex-col gap-6">
            <span className="text-[#fff] font-albertSans text-base uppercase block">
              Room & Tariff
            </span>
            <div className="text-secondary font-albertSans sm:text-xl flex flex-col gap-2">
              <Link to="/rooms/classic-rooms" className="no-underline hover:underline">Classic Rooms</Link>
              <Link to="/rooms/deluxe-rooms" className="no-underline hover:underline">Deluxe Rooms</Link>
              <Link to="/rooms/deluxe-heritage-rooms" className="no-underline hover:underline">
                Deluxe Heritage Rooms
              </Link>
              <Link to="/rooms/premium-rooms" className="no-underline hover:underline">Premium Rooms</Link>
              <Link to="/contact" className="no-underline hover:underline">Book Rooms in Wayanad</Link>
              <Link to="/rooms/deluxe-rooms" className="no-underline hover:underline">Wayanad Cottage</Link>
              <Link to="/rooms/premium-rooms" className="no-underline hover:underline">Luxury Wayanad Homestays</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
