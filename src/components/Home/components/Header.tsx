import { useLocation } from 'react-router-dom';
import { AnimatedLink } from '../../../curtain-scroll';
import kudajadrilogo from '../../../assets/kudajadriLogo.svg';
import kudajadriDarkLogo from '../../../assets/kudajadriDarkLogo.svg';
import menuIcon from '/src/assets/menuIconHeader.svg';
import NavLink from '../../ui/NavLink';
import homeIcon from '/src/assets/homeMobileHeader.svg';
import whatAppIcon from '/src/assets/whatappHeader.svg';
import whatAppBlackIcon from '/src/assets/KudajadriMobileWhatapp.svg';
import HomeBlackIcon from '/src/assets/kudajadriHomeMobile.svg';
import MenuBlackIcon from '/src/assets/KudajadriMobileMenu.svg';
import { useEffect, useState } from 'react';
import HeaderDropdown from './HeaderDropdown';

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
    location.pathname === '/facilities-amenities' ||
    location.pathname === '/tour-packages';
    
  const isDetailPage = location.pathname.startsWith('/tour-packages/');
  const headerColor = scrolled || isDetailPage ? 'black' : type;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = isHome ? 700 : 100; 
      
      setScrolled(currentScrollY > heroHeight - 80);
      
      // Always show header when at the top of the page
      if (currentScrollY <= 0) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } 
      // Show header when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const heroHeight = isHome ? 700 : 100;
    setScrolled(window.scrollY > heroHeight - 80);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, lastScrollY]);

  const isMobile = window.innerWidth < 640;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
        scrolled || isMobile || isDetailPage ? 'bg-white shadow-sm' : isMobile ? 'bg-white' : 'bg-transparent'
      } ${isVisible || isMobile || isDetailPage ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Desktop Header */}
      <div className="flex items-end justify-center gap-24 sm:py-6 mobile:hidden sm:flex">
        <NavLink to="/" headerColor={headerColor}>
          Wayanad Homestays
        </NavLink>
        <NavLink to="/about" headerColor={headerColor}>
          About Us
        </NavLink>
        <HeaderDropdown headerColor={headerColor} />
        <AnimatedLink to="/">
          <div>
            {headerColor === 'white' ? (
              <img src={kudajadrilogo} alt="Logo" />
            ) : (
              <img src={kudajadriDarkLogo} alt="Logo" />
            )}
          </div>
        </AnimatedLink>
        <NavLink to="/facilities-amenities" headerColor={headerColor}>
          Facilities
        </NavLink>
        <NavLink to="/media-gallery" headerColor={headerColor}>
          Gallery
        </NavLink>
        <NavLink to="/contact" headerColor={headerColor}>
          Contact Us
        </NavLink>
      </div>

      <PhoneHeader headerColor={scrolled ? 'black' : type} />
    </div>
  );
};

const PhoneHeader = ({ headerColor }: { headerColor?: 'white' | 'black' }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [, setIsVisible] = useState(true);
  
  const menuItems = [
    { to: "/", text: "Wayanad Homestays" },
    { to: "/about", text: "About Us" },
    { to: "/rooms", text: "Rooms" },
    { to: "/rooms/classic-rooms", text: "Classic Rooms" },
    { to: "/rooms/deluxe-rooms", text: "Deluxe Rooms" },
    { to: "/rooms/deluxe-heritage-rooms", text: "Deluxe Heritage" },
    { to: "/rooms/premium-rooms", text: "Premium Rooms" },
    { to: "/facilities-amenities", text: "Facilities" },
    { to: "/gallery", text: "Gallery" },
    { to: "/contact", text: "Contact Us" },
  ];

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
      {/* Mobile Header Bar */}
      <div className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 sm:hidden transition-all duration-500 ease-in-out ${
        isSidebarOpen ? 'bg-[#292626]' : headerColor === 'white' ? 'bg-transparent' : 'bg-white shadow-sm'
      }`} style={{ height: '70px', boxSizing: 'border-box' }}>
        <div>
          <img
            src={headerColor === 'black' && !isSidebarOpen ? MenuBlackIcon : menuIcon}
            alt="Menu"
            onClick={toggleSidebar}
            className="cursor-pointer w-6 h-6"
          />
        </div>
        <div>
          <AnimatedLink to="/">
            <img
              src={headerColor === 'black' && !isSidebarOpen ? HomeBlackIcon : homeIcon}
              alt="Home"
              className="cursor-pointer h-6"
            />
          </AnimatedLink>
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

      {/* Ivy Style Mobile Menu */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-overlay"
          onClick={toggleSidebar}
          style={{ height: '100dvh', width: '100vw', zIndex: 50 }}
        >
          <div 
            className="fixed top-0 left-0 w-full h-[100dvh] bg-[#292626] overflow-y-auto py-12 flex flex-col items-center z-50"
            onClick={(e) => e.stopPropagation()}
            style={{
              transition: 'transform 0.3s ease-in-out',
              transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
            }}
          >
            <ul className="flex flex-col text-center py-2">
              {menuItems.map((item) => {
                const isRoom = item.to.startsWith("/rooms/");
                return (
                  <li key={item.to} className="leading-none">
                    <NavLink
                      to={item.to}
                      className={`
                        ${isRoom 
                          ? "text-[24px] font-normal text-white/50" 
                          : "text-[32px] font-medium text-white"
                        } font-ivy block
                      `}
                      onClick={toggleSidebar}
                    >
                      {item.text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            
            {/* Close Button */}
            <div className="fixed bottom-8 left-0 w-full flex justify-center">
              <button
                onClick={toggleSidebar}
                className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-200"
                aria-label="Close menu"
              >
                <span className="material-icons text-3xl text-white">
                  close
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneHeader;
