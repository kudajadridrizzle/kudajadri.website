import { useEffect, useState } from "react";
import favicon from "../../../assets/Favicon000.svg"; // adjust path if needed

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  const fadeDuration = 700; // ms
  const totalDuration = 4000; // ms (entire preloader time)

  useEffect(() => {
    // Fade in logo
    const fadeInTimer = setTimeout(() => {
      setShowLogo(true);
    }, 100);

    // Start fade out slightly before totalDuration
    const fadeOutTimer = setTimeout(() => {
      setShowLogo(false);
    }, totalDuration - fadeDuration);

    // Remove preloader exactly at totalDuration
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, totalDuration);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <img
        src={favicon}
        alt="App Logo"
        className={`w-16 h-16 md:w-32 md:h-32 object-contain transform transition-all duration-700 ${
          showLogo ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </div>
  );
};

export default Preloader;
