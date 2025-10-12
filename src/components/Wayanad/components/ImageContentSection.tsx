import React from "react";

interface ImageContentSectionProps {
  image: string;
  imageAlt?: string;
  title: string;
  paragraph: string;
  reverse?: boolean; // zig-zag layout
}

export const ImageContentSection: React.FC<ImageContentSectionProps> = ({
  image,
  imageAlt = "Image",
  title,
  paragraph,
  reverse = false,
}) => {
  return (
    <div className="sm:px-[6%] px-4">
      <div
        className={`flex flex-col lg:flex-row gap-8 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-[#000] font-ivy sm:text-[44px] text-[32px]">
            {title}
          </h2>
          <p className="text-secondary sm:text-xl font-albertSans">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};
