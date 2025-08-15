import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import kudajadrilogo from '../../../assets/kudajadriLogo.svg';
import kudajadriDarkLogo from '../../../assets/kudajadriDarkLogo.svg';
import menuIcon from '/src/assets/menuIconHeader.svg';
import logoIcon from '/src/assets/homeMobileHeader.svg';
import whatAppIcon from '/src/assets/whatappHeader.svg';
import whatAppBlackIcon from '/src/assets/KudajadriMobileWhatapp.svg';
import HomeBlackIcon from '/src/assets/kudajadriHomeMobile.svg';
import MenuBlackIcon from '/src/assets/KudajadriMobileMenu.svg';
import { useEffect, useState } from 'react';

interface HeaderProps {
  type?: 'white' | 'black';
}

export const Header = ({ type = 'white' }: HeaderProps) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const isHome =
    location.pathname === '/' ||
    location.pathname === '/about' ||
    location.pathname === '/rooms' ||
    location.pathname === '/attractions' ||
    location.pathname === '/wayanad' ||
    location.pathname === '/facilities' ||
    location.pathname === '/tour-packages';
  const headerColor = scrolled ? 'black' : type;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = isHome ? 700 : 100; // Smaller threshold for non-home pages
      
      // Set scrolled state for transparency
      setScrolled(currentScrollY > heroHeight - 80);
      
      // Handle header visibility
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Set initial scrolled state based on current scroll position
    const heroHeight = isHome ? 700 : 100;
    setScrolled(window.scrollY > heroHeight - 80);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, lastScrollY]);

  // Check if mobile view
  const isMobile = window.innerWidth < 640; // Tailwind's sm breakpoint

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled || isMobile ? 'bg-white shadow-sm' : isMobile ? 'bg-white' : 'bg-transparent'
      } ${
        isVisible || isMobile ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-end justify-center gap-24 sm:py-6 mobile:hidden sm:flex">
        <NavLink
          to="/"
          className={`px-4 py-2 ${
            headerColor === 'white' ? 'text-[#FFF]' : 'text-primary'
          } font-albertSans`}
        >
          Wayanad Homestays
        </NavLink>
        <NavLink
          to="/about"
          className={`px-4 py-2 ${
            headerColor === 'white' ? 'text-[#FFF]' : 'text-primary'
          } font-albertSans`}
        >
          About Us
        </NavLink>
        <NavLink
          to="/rooms"
          className={`px-4 py-2 ${
            headerColor === 'white' ? 'text-[#FFF]' : 'text-primary'
          } font-albertSans`}
        >
          Rooms
        </NavLink>
        <NavLink to="/">
          <div>
            {headerColor === 'white' ? (
              <img src={kudajadrilogo} alt="Logo" />
            ) : (
              <img src={kudajadriDarkLogo} alt="Logo" />
            )}
          </div>
        </NavLink>
        <NavLink
          to="/facilities"
          className={`px-4 py-2 ${
            headerColor === 'white' ? 'text-[#FFF]' : 'text-primary'
          } font-albertSans`}
        >
          Facilities
        </NavLink>
        <NavLink
          to="/gallery"
          className={`px-4 py-2 ${
            headerColor === 'white' ? 'text-[#FFF]' : 'text-primary'
          } font-albertSans`}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/contact"
          className={`px-4 py-2 ${
            headerColor === 'white' ? 'text-[#FFF]' : 'text-primary'
          } font-albertSans`}
        >
          Contact Us
        </NavLink>
      </div>
      <PhoneHeader headerColor={headerColor} />
    </div>
  );
};

const PhoneHeader = ({ headerColor }: { headerColor?: 'white' | 'black' }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [, setIsVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
    setIsVisible(prev => !prev);
  };

  const openWhatsApp = () => {
    const phoneNumber = '919946354511';
    const message = 'Hi, I\'m checking room availability.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Header Bar */}
      <div className={`fixed top-0 left-0 w-full z-50 flex justify-between p-4 sm:hidden transition-all duration-500 ease-in-out ${
        isSidebarOpen ? 'bg-[#292626]' : headerColor === 'white' ? 'bg-transparent' : 'bg-white shadow-sm'
      }`}>
        <div>
          <img
            src={headerColor === 'black' && !isSidebarOpen ? MenuBlackIcon : menuIcon}
            alt="Menu"
            onClick={toggleSidebar}
            className="cursor-pointer w-6 h-6"
          />
        </div>
        <div>
          <img
            src={headerColor === 'black' && !isSidebarOpen ? HomeBlackIcon : logoIcon}
            alt="Home"
            onClick={() => navigate('/')}
            className="cursor-pointer h-6"
          />
        </div>
        <div>
          <img
            src={headerColor === 'black' && !isSidebarOpen ? whatAppBlackIcon : whatAppIcon}
            alt="WhatsApp"
            onClick={openWhatsApp}
            className="cursor-pointer w-6 h-6"
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300" 
          onClick={toggleSidebar}
          style={{ height: '100dvh' }}
        >
          <div 
            className="fixed top-0 left-0 w-full h-[100dvh] bg-[#292626] overflow-y-auto p-6 pt-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-8 pt-4">
              <ul className="flex flex-col gap-3">
                {[/* eslint-disable @typescript-eslint/no-unused-vars */
                  { to: "/", text: "Wayanad Homestays" },
                  { to: "/about", text: "About Us" },
                  { to: "/rooms", text: "Rooms" },{ to: "/rooms/classic-rooms", text: "Classic Rooms", className: "text-[#808080] text-[24px]" },
                  { to: "/rooms/deluxe-rooms", text: "Deluxe Rooms", className: "text-[#808080] text-[24px]" },
                  { to: "/rooms/deluxe-heritage-rooms", text: "Deluxe Heritage", className: "text-[#808080] text-[24px]" },
                  { to: "/rooms/premium-rooms", text: "Premium Rooms", className: "text-[#808080] text-[24px]" },
                  { to: "/facilities", text: "Facilities" },
                  { to: "/gallery", text: "Gallery" },
                  { to: "/wayanad", text: "Wayanad" },
                  // { to: "/attractions", text: "Attractions" },
                  // { to: "/tour-packages", text: "Tour Packages" },
                  { to: "/contact", text: "Contact Us" },
                ].map((item) => (
                  <li key={item.to} className="text-center">
                    <Link
                      to={item.to}
                      className={`text-3xl leading-8 font-normal tracking-wide font-ivy ${
                        item.className || 'text-white'
                      }`}
                      onClick={toggleSidebar}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-center">
                <button
                  onClick={toggleSidebar}
                  className="w-11 h-11 flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <span className="material-icons text-4xl text-white">
                    close
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneHeader;
