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
  const isHome = location.pathname === "/" || location.pathname === "/about" || location.pathname === "/rooms" || location.pathname === "/attractions" || location.pathname === "/wayanad";
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
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
      <div className="flex items-end justify-center gap-24 sm:py-6 mobile:hidden sm:flex">
        <NavLink to="/" className={`px-4 py-2 ${headerColor === "white" ? "text-[#FFF]" : "text-primary"} font-albertSans`}>
          Wayanad Homestays
        </NavLink>
        <NavLink to="/about" className={`px-4 py-2 ${headerColor === "white" ? "text-[#FFF]" : "text-primary"} font-albertSans`}>
          About Us
        </NavLink>
        <NavLink to="/rooms" className={`px-4 py-2 ${headerColor === "white" ? "text-[#FFF]" : "text-primary"} font-albertSans`}>
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
        <NavLink to="/gallery" className={`px-4 py-2 ${headerColor === "white" ? "text-[#FFF]" : "text-primary"} font-albertSans`}>
          Gallery
        </NavLink>
        <NavLink to="/wayanad" className={`px-4 py-2 ${headerColor === "white" ? "text-[#FFF]" : "text-primary"} font-albertSans`}>
          Wayanad
        </NavLink>
        <NavLink to="/contact" className={`px-4 py-2 ${headerColor === "white" ? "text-[#FFF]" : "text-primary"} font-albertSans`}>
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
    const phoneNumber = '+91 9946 354 511';
    const message = "Hello, I would like to inquire about your resort services.";
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="flex justify-between p-4 sm:hidden">
      <div>
        <img src={headerColor === "black" ? MenuBlackIcon : menuIcon} alt="Menu" onClick={toggleSidebar} className="cursor-pointer" />
      </div>
      <div>
        <img src={headerColor === "black" ? HomeBlackIcon : logoIcon} alt="Home" onClick={() => navigate("/")} className="cursor-pointer" />
      </div>
      <div>
        <img src={headerColor === "black" ? whatAppBlackIcon : whatAppIcon} alt="WhatsApp" onClick={openWhatsApp} />
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 transition-opacity duration-300 bg-black bg-opacity-50" onClick={toggleSidebar}></div>
          <div className={`w-64 bg-white p-4 transform transition-all duration-500 ease-in-out shadow-lg ${isSidebarOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
            <div className="flex justify-end">
              <button onClick={toggleSidebar} className="text-lg font-semibold text-black focus:outline-none">
                Close
              </button>
            </div>
            <div className="text-black">
              <ul className="mt-6 space-y-4">
                <li><Link to="/" className="text-lg font-medium" onClick={toggleSidebar}>Wayanad Homestays</Link></li>
                <li><Link to="/about" className="text-lg font-medium" onClick={toggleSidebar}>About Us</Link></li>
                <li><Link to="/rooms" className="text-lg font-medium" onClick={toggleSidebar}>Rooms</Link></li>
                <li><Link to="/gallery" className="text-lg font-medium" onClick={toggleSidebar}>Gallery</Link></li>
                <li><Link to="/attractions" className="text-lg font-medium" onClick={toggleSidebar}>Wayanad</Link></li>
                <li><Link to="/contact" className="text-lg font-medium" onClick={toggleSidebar}>Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneHeader;
