"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const HeroSession = () => {
  const fullText =
    "Explore the beauty of Kudajadri Drizzle Homestay through our photos and video gallery. Each image captures the serene surroundings, lush greenery, and charming architecture of our property. From cozy heritage rooms to relaxing common areas, the gallery showcases every corner of this Wayanad homestay. Watch our videos to get a real feel of the ambiance, activities, and experiences awaiting you. See guests enjoying the swimming pool, nature walks, and recreational games, giving you a glimpse of a memorable stay. Our gallery is designed to help you visualize your stay and plan your visit to one of the best Wayanad homestays.";

  const words = fullText.split(" ");
  const shortText = words.slice(0, 40).join(" ") + "...";

  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full h-[vh] flex justify-center items-center px-4 sm:px-12">
      <div className="flex flex-col items-center text-center max-w-5xl gap-6">
        {/* Small Label */}
        <span className="uppercase font-albertSans text-base tracking-wider text-[#000]">
          Gallery
        </span>

        {/* Heading */}
        <h1 className="font-staylista text-[32px] sm:text-[72px] leading-tight">
          Photo & Video Gallery of Kudajadri Drizzle Homestay
        </h1>

        {/* Animated Description */}
        <motion.div
          layout
          className="overflow-hidden"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={expanded ? "full" : "short"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-[#6E6E6E] font-albertSans text-base sm:text-xl leading-relaxed"
            >
              {expanded ? fullText : shortText}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#000] font-semibold underline underline-offset-4 hover:text-gray-700 transition"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
};
