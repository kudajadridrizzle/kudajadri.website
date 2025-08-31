import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Booking from './components/Booking/Booking';
import RoomDetails from './components/RoomDetails/RoomDetails';
import { ContactPage } from './components/Contact/ContactPage';
import { Gallrey } from './components/gallery/Gallrey';
import CurtainTransition from './curtain-scroll';
import ScrollToTop from './components/Home/components/ScrollTop';
import Rooms from './components/Rooms/Rooms';
import { FaqPage } from './components/FAQ/Faq';
import { TourPackages } from './components/TourPackages/TourPackages';
import FacilitiesPage from './components/Facilities/FacilitiesPage';
import { WayanadPage } from './components/Wayanad/wayanadPage';
import BlogList from './components/Blog/BlogList';
import BlogDetail from './components/Blog/BlogDetail';
import TourPackagesDetails from './components/TourPackages/TourPackagesDetails';
import NotFound from './pages/NotFound';


const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<Booking />} /> {/* This slides up */}
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/gallery" element={<Gallrey />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/tour-packages" element={<TourPackages />} />
        <Route path="/tour-packages/:id" element={<TourPackagesDetails />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/wayanad" element={<WayanadPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        {/* 404 - Catch all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <CurtainTransition>
        <AppContent />
      </CurtainTransition>
    </Router>
  );
};

export default App;
