import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import RoomDetails from "./components/RoomDetails/RoomDetails";
import { ContactPage } from "./components/Contact/ContactPage";
import { Gallrey } from "./components/gallery/Gallrey";
import CurtainTransition from "./curtain-scroll";
import ScrollToTop from "./components/Home/components/ScrollTop";
import Rooms from "./components/Rooms/Rooms";
import { FaqPage } from "./components/FAQ/Faq";
import { TourPackages } from "./components/TourPackages/TourPackages";
import FacilitiesPage from "./components/Facilities/FacilitiesPage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <CurtainTransition />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<Booking />} /> {/* This slides up */}
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/gallery" element={<Gallrey />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/tour-packages" element={<TourPackages />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        </Routes>
    </Router>
  );
};

export default App;
