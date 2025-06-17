// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation } from "react-router-dom";

const CurtainTransition = () => {
    // const location = useLocation();
    // const [showCurtain, setShowCurtain] = useState(true);
    // const [yPosition, setYPosition] = useState("100%");
    // const [isMobile, setIsMobile] = useState(false); // State to detect if the screen is mobile

    // Mobile screen detection
    // useEffect(() => {
    //     const checkMobile = () => {
    //         setIsMobile(window.innerWidth < 768); // Check if width is less than 768px (mobile)
    //     };

    //     checkMobile(); // Initial check
    //     window.addEventListener("resize", checkMobile); // Recheck on resize

    //     return () => {
    //         window.removeEventListener("resize", checkMobile); // Cleanup on unmount
    //     };
    // }, []);

    // useEffect(() => {
    //     if (isMobile) return; // Skip curtain animation on mobile

    //     setShowCurtain(true);
    //     setYPosition("0%"); // Step 1: Curtain rises to full screen

    //     const holdTimer = setTimeout(() => {
    //         setYPosition("-100%"); // Step 3: Continue going up (exit)
    //     }, 1000); // Step 2: Hold at full screen for 1 second

    //     const doneTimer = setTimeout(() => {
    //         setShowCurtain(false); // Hide curtain after animation is done
    //     }, 1600); // Total time = 1s hold + 0.6s exit

    //     return () => {
    //         clearTimeout(holdTimer);
    //         clearTimeout(doneTimer);
    //     };
    // }, [location.pathname, isMobile]); // Run effect when the path or isMobile changes

    return (
        // <AnimatePresence>
        //     {/* Only show the curtain animation if not on mobile */}
        //     {showCurtain && !isMobile && (
        //         <motion.div
        //             key="curtain"
        //             initial={{ y: "100%" }}
        //             animate={{ y: yPosition }}
        //             transition={{ duration: 0.6, ease: "easeInOut" }}
        //             style={{
        //                 position: "fixed",
        //                 top: 0,
        //                 left: 0,
        //                 right: 0,
        //                 bottom: 0,
        //                 backgroundColor: "#fff", // Black curtain (adjust color if needed)
        //                 zIndex: 9999,
        //                 pointerEvents: "none",
        //             }}
        //         />
        //     )}
        // </AnimatePresence>
        <div></div>
    );
};

export default CurtainTransition;
