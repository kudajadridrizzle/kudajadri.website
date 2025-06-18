import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// import all your images
import imageOne from "../../../assets/imageOne.jpg";
import imageTwo from "../../../assets/imageTwo.jpg";
import imageThree from "../../../assets/imageThree.jpg";
import heritage1 from "../../../assets/heritage1.jpg";
import heritage2 from "../../../assets/heritage2.jpg";
import heritage3 from "../../../assets/heritage3.jpg";
import nature1 from "../../../assets/nature1.jpg";
import nature2 from "../../../assets/nature2.jpg";
import nature3 from "../../../assets/nature3.jpg";
import room1 from "../../../assets/room1.jpeg";
import room2 from "../../../assets/room2.jpeg";
import room3 from "../../../assets/room3.jpeg";
import { parseMarkdown } from "../../../helper/mdPareser";
import Gallery from '../../../File/Gallery.md?raw';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const navItems = [
  { id: 1, label: "All" },
  { id: 2, label: "Heritage & Architecture" },
  { id: 3, label: "Nature & Serenity" },
  { id: 4, label: "Rooms & Interiors" },
];

const galleryImages: Record<number, string[]> = {
  1: [imageOne, imageTwo, imageThree],
  2: [heritage1, heritage2, heritage3],
  3: [nature1, nature2, nature3],
  4: [room1, room2, room3],
};

const OurGallery = () => {
  const [navItem, setNavItem] = useState<number>(1);
  const [currentImages, setCurrentImages] = useState(galleryImages[1]);
  const {heading,content} = parseMarkdown(Gallery)

  const [expanded, setExpanded] = useState(false)
  const maxChars = 400

  const isLong = content.length > maxChars
  const preview = isLong ? content.slice(0, maxChars) + "..." : content

  useEffect(() => {
    setCurrentImages(galleryImages[navItem]);
  }, [navItem]);

  return (
    <div className="sm:py-32 sm:px-[12%] flex flex-col gap-[66px] mobile:px-4 mobile:py-14 large:px-[18%]">
      <div className="flex flex-col sm:flex-row">
        <h1 className="flex-1 text-primary font-ivy sm:text-[44px] mobile:text-[32px]">
          {heading}
        </h1>
        <p className="flex-1 text-secondary sm:text-xl font-albertSans">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {expanded || !isLong ? content : preview}
         </ReactMarkdown>
         {isLong && (
            <button
               onClick={() => setExpanded(!expanded)}
               className="mt-2 block text-sm text-primary hover:underline focus:outline-none"
            >
             {expanded ? "Read less" : "Read more"}
            </button>
        )}
        </p>
      </div>

      <div className="flex justify-center sm:flex mobile:hidden">
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            className={`px-3.5 py-2 cursor-pointer transition-colors font-albertSans ${navItem === id
              ? "border-b border-primary text-primary"
              : "text-secondary"
              }`}
            onClick={() => setNavItem(id)}
          >
            {label}
          </a>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={navItem}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex flex-col gap-2"
        >
          <div className="h-[536px] mobile:hidden sm:block">
            <img
              src={currentImages[0]}
              alt=""
              className="object-cover size-full rounded-[16px]"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:h-[342px]">
            <img
              src={currentImages[1]}
              alt=""
              className="h-full rounded-[16px] flex-1 object-cover"
            />
            <img
              src={currentImages[2]}
              alt=""
              className="h-full rounded-[16px] flex-1 object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default OurGallery;
