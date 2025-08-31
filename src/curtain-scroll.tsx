import React, { useEffect, useState, useCallback, useRef, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Create a context to share the navigation function
export const NavigationContext = createContext<{ navigate: (to: string) => void }>({
  navigate: () => {},
});

const CurtainTransition = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [nextPath, setNextPath] = useState("");
  const isInitialMount = useRef(true);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle initial mount
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    if (nextPath && !isAnimating) {
      // Navigate after animation completes
      navigate(nextPath);
      setNextPath("");
    }
  }, [isAnimating, nextPath, navigate]);

  // Handle navigation with animation
  const handleNavigation = useCallback((path: string) => {
    if (isMobile) {
      navigate(path);
      return;
    }
    
    setNextPath(path);
    setIsAnimating(true);
    
    // Auto-hide the curtain after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isMobile, navigate]);

  if (isMobile) return <>{children}</>;

  return (
    <NavigationContext.Provider value={{ navigate: handleNavigation }}>
      <AnimatePresence mode="wait">
        {isAnimating && (
          <motion.div
            key="curtain"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.5,
              ease: [0.65, 0, 0.35, 1],
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#ffffff",
              zIndex: 9999,
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
      {children}
    </NavigationContext.Provider>
  );
};

// Custom hook to use the navigation
export const useAnimatedNavigate = () => {
  const { navigate } = useContext(NavigationContext);
  return navigate;
};

// Export the AnimatedLink component
export const AnimatedLink = ({ to, children, className = '', ...props }: { to: string; children: React.ReactNode; className?: string; [key: string]: any }) => {
  const navigate = useAnimatedNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      // Add a small delay to ensure the animation is visible
      requestAnimationFrame(() => {
        navigate(to);
      });
    }
  };

  return (
    <a 
      href={to} 
      onClick={handleClick} 
      className={`cursor-pointer ${className}`} 
      {...props}
      onKeyDown={(e) => {
        // Add keyboard accessibility
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e as any);
        }
      }}
      role="link"
      tabIndex={0}
    >
      {children}
    </a>
  );
};

export default CurtainTransition;
