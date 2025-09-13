import { useState, useRef, useEffect } from 'react';
import { AnimatedLink } from '../../../curtain-scroll';

const rooms = [
  {
    title: 'Deluxe Room',
    image: '/images/Rooms/deluxe/1 (4).jpg',
    route: '/rooms/deluxe-rooms',
  },
  {
    title: 'Deluxe Heritage Room',
    image: '/images/Rooms/deluxe_heritage/1 (2).jpg',
    route: '/rooms/deluxe-heritage-rooms',
  },
  {
    title: 'Classic Room',
    image: '/images/Rooms/classic/1.jpg',
    route: '/rooms/classic-rooms',
  },
  {
    title: 'Premium Rooms',
    image: '/images/Rooms/premium/1 (2).jpg',
    route: '/rooms/premium-rooms',
  },
];

const HeaderDropdown = ({ headerColor = 'white' }: { headerColor?: 'white' | 'black' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when scrolling down
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsOpen(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Cleanup function for event listeners
  useEffect(() => {
    return () => {
      // Cleanup any potential side effects
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'ArrowDown' && !isOpen) {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <div 
      className="relative group" 
      ref={dropdownRef}
      onKeyDown={handleKeyDown}
      role="navigation"
      aria-label="Rooms navigation"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        // Add a small delay to allow moving to the dropdown
        setTimeout(() => {
          if (!dropdownRef.current?.matches(':hover')) {
            setIsOpen(false);
          }
        }, 200);
      }}
    >
      <div className="relative">
        <button
          className={`px-4 py-2 no-underline font-albertSans relative group/button w-full text-left ${
            headerColor === 'white' 
              ? 'text-white hover:text-white/90' 
              : 'text-primary hover:text-primary/90'
          }`}
          onFocus={() => setIsOpen(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setIsOpen(false);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls="rooms-dropdown"
          type="button"
        >
          <span className="relative inline-block">
            <span className="relative z-10">Rooms</span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
              headerColor === 'white' ? 'bg-white' : 'bg-primary'
            } origin-left transform scale-x-0 group-hover/button:scale-x-100 transition-transform duration-300 ease-out`}></span>
          </span>
          <span className="sr-only">Toggle dropdown menu</span>
        </button>

        {/* Dropdown Menu */}
        <div
          id="rooms-dropdown"
          className={`fixed left-0 right-0 top-full transform w-screen px-2 sm:px-4 transition-all duration-300 ease-out z-50 ${
            isOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto visible'
              : 'opacity-0 -translate-y-4 pointer-events-none invisible'
          }`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onClick={(e) => e.stopPropagation()}
          role="region"
          aria-label="Rooms selection"
          aria-hidden={!isOpen}
          tabIndex={-1}
        >
          <div className="max-w-[100vw] mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 w-full max-w-[94vw] mx-auto">
              <div className="mb-6 px-2 sm:px-0">
                <h3 className="text-xl sm:text-2xl font-ivy font-bold text-gray-900 mb-2">Our Rooms & Suites</h3>
                <p className="text-gray-600 font-albertSans text-sm sm:text-base">Experience luxury and comfort in our carefully designed accommodations.</p>
              </div>
              <div className="w-full">
              <div className="flex flex-row gap-4 sm:gap-6">
              {/* View All Card */}
                  <div className="w-full">
                    <AnimatedLink
                      to="/rooms"
                      className="group flex flex-col h-full rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-gray-50 border-2 border-dashed border-gray-200 hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 no-underline"
                      tabIndex={isOpen ? 0 : -1}
                      aria-label="View all rooms"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <h3 className="font-ivy text-lg font-sevmibold text-gray-800 group-hover:text-primary transition-colors duration-200">
                          View All Rooms
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          Explore all our accommodations
                        </p>
                      </div>
                    </AnimatedLink>
                  </div>
                  
                  {/* Room Cards */}
                  {rooms.map((room) => (
                    <div key={room.title} className="w-full">
                      <AnimatedLink
                        to={room.route}
                        className="group flex flex-col h-full rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-gray-100 hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 no-underline"
                        tabIndex={isOpen ? 0 : -1}
                        aria-label={`View details for ${room.title}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <div className="relative overflow-hidden h-48">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                          <img
                            src={room.image}
                            alt={room.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute bottom-4 left-4 right-4 z-20">
                            <h3 className="font-ivy text-xl font-semibold text-white drop-shadow-lg">
                              {room.title}
                            </h3>
                          </div>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                          <p className="font-albertSans text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                            {room.title.includes('Deluxe') 
                              ? 'Spacious room with modern amenities and a stunning view of the surrounding nature.'
                              : room.title.includes('Classic')
                              ? 'Cozy and comfortable room with traditional decor and all essential facilities.'
                              : 'Luxurious accommodation with premium features and exceptional comfort.'}
                          </p>
                          <div className="flex justify-end mt-auto">
                            <button 
                              className="px-4 py-2 rounded-full border border-primary text-primary font-albertSans text-sm font-medium hover:bg-primary hover:text-white transition-all duration-200 no-underline"
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = room.route;
                              }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </AnimatedLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDropdown;
