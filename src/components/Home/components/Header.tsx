import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import kudajadrilogo from "../../../assets/kudajadriLogo.svg";
import kudajadriDarkLogo from "../../../assets/kudajadriDarkLogo.svg";
import menuIcon from "/src/assets/menuIconHeader.svg";
import logoIcon from "/src/assets/homeMobileHeader.svg";
import whatAppIcon from "/src/assets/whatappHeader.svg";
import whatAppBlackIcon from "/src/assets/KudajadriMobileWhatapp.svg";
import HomeBlackIcon from "/src/assets/kudajadriHomeMobile.svg";
import MenuBlackIcon from "/src/assets/KudajadriMobileMenu.svg";
import { useEffect, useState } from "react";

interface HeaderProps {
  type?: "white" | "black";
}

export const Header = ({ type = "white" }: HeaderProps) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isHome =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/rooms" ||
    location.pathname === "/attractions" ||
    location.pathname === "/wayanad";
  const headerColor = scrolled ? "black" : type;

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      const heroHeight = 700;
      setScrolled(window.scrollY > heroHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-end justify-center gap-24 sm:py-6 mobile:hidden sm:flex">
        <NavLink
          to="/"
          className={`px-4 py-2 ${
            headerColor === "white" ? "text-[#FFF]" : "text-primary"
          } font-albertSans`}
        >
          Wayanad Homestays
        </NavLink>
        <NavLink
          to="/about"
          className={`px-4 py-2 ${
            headerColor === "white" ? "text-[#FFF]" : "text-primary"
          } font-albertSans`}
        >
          About Us
        </NavLink>
        <NavLink
          to="/rooms"
          className={`px-4 py-2 ${
            headerColor === "white" ? "text-[#FFF]" : "text-primary"
          } font-albertSans`}
        >
          Rooms
        </NavLink>
        <NavLink to="/">
          <div>
            {headerColor === "white" ? (
              <img src={kudajadrilogo} alt="Logo" />
            ) : (
              <img src={kudajadriDarkLogo} alt="Logo" />
            )}
          </div>
        </NavLink>
        <NavLink
          to="/gallery"
          className={`px-4 py-2 ${
            headerColor === "white" ? "text-[#FFF]" : "text-primary"
          } font-albertSans`}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/wayanad"
          className={`px-4 py-2 ${
            headerColor === "white" ? "text-[#FFF]" : "text-primary"
          } font-albertSans`}
        >
          Wayanad
        </NavLink>
        <NavLink
          to="/contact"
          className={`px-4 py-2 ${
            headerColor === "white" ? "text-[#FFF]" : "text-primary"
          } font-albertSans`}
        >
          Contact Us
        </NavLink>
      </div>
      <PhoneHeader headerColor={headerColor} />
    </div>
  );
};

const PhoneHeader = ({ headerColor }: { headerColor?: "white" | "black" }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prevState) => !prevState);

  const openWhatsApp = () => {
    const phoneNumber = '919946354511';
    const message = "Hi, I’m checking room availability.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`flex justify-between p-4 sm:hidden ${isSidebarOpen ? "bg-[#292626]" : ""}`}>
      <div>
        <img
          src={headerColor === "black" && !isSidebarOpen ? MenuBlackIcon : menuIcon}
          alt="Menu"
          onClick={toggleSidebar}
          className="cursor-pointer"
        />
      </div>
      <div>
        <img
          src={headerColor === "black" && !isSidebarOpen ? HomeBlackIcon : logoIcon}
          alt="Home"
          onClick={() => navigate("/")}
          className="cursor-pointer"
        />
      </div>
      <div>
        <img
          src={headerColor === "black" && !isSidebarOpen ? whatAppBlackIcon : whatAppIcon}
          alt="WhatsApp"
          onClick={openWhatsApp}
          className="cursor-pointer"
        />
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex mt-[60px]">      
          <div
            className={`w-full bg-[#292626] p-4 transform transition-all duration-500 ease-in-out shadow-lg flex flex-col gap-[48px] justify-center ${
              isSidebarOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <div className="text-black">
              <ul className="flex flex-col gap-[12px]">
                <li className="text-center">
                  <Link to="/" className="text-[32px] leading-[32px] font-normal tracking-[0em] text-center font-ivy text-white" onClick={toggleSidebar}>
                    Wayanad Homestays
                  </Link>
                </li>
                <li className="text-center">
                  <Link to="/about" className="text-[32px] leading-[32px] font-normal tracking-[0em] text-center font-ivy text-white" onClick={toggleSidebar}>
                    About Us
                  </Link>
                </li>
                <li className="text-center">
                  <Link to="/rooms" className="text-[32px] leading-[32px] font-normal tracking-[0em] text-center font-ivy text-white" onClick={toggleSidebar}>
                    Rooms
                  </Link>
                </li>
                <li className="text-center">
                  <Link to="/rooms/classic-rooms" className="text-[32px] leading-[32px] font-normal tracking-[0em] text-center font-ivy text-[#808080]" onClick={toggleSidebar}>
                    Classic Rooms
                  </Link>
                </li>
                <li className="text-center">
                  <Link to="/rooms/deluxe-rooms" className="text-[32px] leading-[32px] font-normal tracking-[0em] text-center font-ivy text-[#808080]" onClick={toggleSidebar}>
                    Deluxe Rooms
                  </Link>
                </li>
                <li className="text-center">
                  <Link to="/rooms/deluxe-heritage-rooms" className="text-[32px] leading-[32px] font-normal tracking-[0em] text-center font-ivy text-[#808080]" onClick={toggleSidebar}>
                    Deluxe Heritage Rooms
                  </Link>
                </li>
                <li className="text-center">
                  <Link to="/rooms/premium-rooms" className="text-[32px] leading-[32px] font-normal tracking-[0em] text-center font-ivy text-[#808080]" onClick={toggleSidebar}>
                    Premium Rooms
                  </Link>
                </li>
                <li className="text-center">
                  <Link to="/gallery" className="text-[32px] leading-[32px] font-normal tracking-[0em] text-center font-ivy text-white  " onClick={toggleSidebar}>
                    Gallery
                  </Link>
                </li>
                <li className="text-center">
                  <Link to="/wayanad" className="text-[32px] leading-[32px] font-normal tracking-[0em] text-center font-ivy text-white" onClick={toggleSidebar}>
                    Wayanad
                  </Link>
                </li>
                <li className="text-center">
                  <Link to="/contact" className="text-[32px] leading-[32px] font-normal tracking-[0em] text-center font-ivy text-white" onClick={toggleSidebar}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <button
                onClick={toggleSidebar}
                className="text-lg font-semibold text-black focus:outline-none w-[44px] h-[44px]"
              >
                <span className="material-icons text-[44px] text-white">close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneHeader;
