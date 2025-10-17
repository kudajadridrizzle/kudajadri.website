import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import CurtainTransition from './curtain-scroll';
import ScrollToTop from './components/Home/components/ScrollTop';

const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Booking = lazy(() => import('./components/Booking/Booking'));
const RoomDetails = lazy(() => import('./components/RoomDetails/RoomDetails'));
const ContactPage = lazy(() => import('./components/Contact/ContactPage').then(m => ({ default: m.ContactPage })));
const Gallrey = lazy(() => import('./components/gallery/Gallrey').then(m => ({ default: m.Gallrey })));
const Rooms = lazy(() => import('./components/Rooms/Rooms'));
const FaqPage = lazy(() => import('./components/FAQ/Faq').then(m => ({ default: m.FaqPage })));
const TourPackages = lazy(() => import('./components/TourPackages/TourPackages').then(m => ({ default: m.TourPackages })));
const FacilitiesPage = lazy(() => import('./components/Facilities/FacilitiesPage'));
const WayanadPage = lazy(() => import('./components/Wayanad/wayanadPage'));
const BlogList = lazy(() => import('./components/Blog/BlogList'));
const BlogDetail = lazy(() => import('./components/Blog/BlogDetail'));
const TourPackagesDetails = lazy(() => import('./components/TourPackages/TourPackagesDetails'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Terms = lazy(() => import('./components/Terms/Terms'));

const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div />}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/media-gallery" element={<Gallrey />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/tour-packages" element={<TourPackages />} />
          <Route path="/tour-packages/:id" element={<TourPackagesDetails />} />
          <Route path="/facilities-amenities" element={<FacilitiesPage />} />
          <Route path="/wayanad" element={<WayanadPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/terms" element={<Terms />} />
          {/* 404 - Catch all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
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
