import imageOne from "../../../assets/imageOne.jpg";
import aboutLegacyImage from "../../../assets/aboutLegacyImage.jpg";
import { parseMarkdown } from "../../../helper/mdPareser";
import HomeStay from '../../../File/HomeStay.md?raw';
import Legacy from '../../../File/Legacy.md?raw';
import IdealForAll from '../../../File/IdealForAll.md?raw';
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

const AboutSession = () => {

  const {  heading, content } =  parseMarkdown(HomeStay)
  const { heading: legacyHeading, content: legacyContent } = parseMarkdown(Legacy);
  const { heading: idealForAllHeading, content: idealForAllContent } = parseMarkdown(IdealForAll);

  const [expanded, setExpanded] = useState(false)
  const [expandedOne, setExpandedOne] = useState(false)
  const [expandedTwo, setExpandedTwo] = useState(false)
  const maxChars = 400

  const isLong = content.length > maxChars
  const preview = isLong ? content.slice(0, maxChars) + "..." : content

  const isLongOne = legacyContent.length > maxChars
  const previewOne = isLongOne ? legacyContent.slice(0, maxChars) + "..." : legacyContent

  const isLongTwo = idealForAllContent.length > maxChars
  const previewTwo = isLongTwo ? idealForAllContent.slice(0, maxChars) + "..." : idealForAllContent

  return (
    <div className="sm:px-[6%] sm:py-32 large:px-[18%] px-4 py-14">
      <div className="flex flex-col gap-12">
        <div className="flex gap-4 sm:flex-row flex-col">
          <span className="block sm:w-1/2 text-[#000] font-ivy sm:text-[44px] text-[32px]">
            {heading}
          </span>
          <div className="sm:w-1/2 text-secondary font-albertSans sm:text-xl">
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
          </div>
        </div>
        <div className="h-[450px]">
          <img
            src={imageOne}
            alt=""
            className="object-cover size-full rounded-[32px]"
          />
        </div>
      </div>
      <div className="flex gap-4 sm:py-32 py-14 flex-col sm:flex-row">
        <h1 className="text-[#000] sm:text-[44px] text-[32px] font-ivy font-normal flex-1">
          {legacyHeading}
        </h1>
        <div className="flex flex-col gap-8 flex-1">
          <div className="text-secondary sm:text-xl font-albertSans">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {expandedOne || !isLongOne ? legacyContent : previewOne}
           </ReactMarkdown>
           {isLongOne && (
              <button
                 onClick={() => setExpandedOne(!expandedOne)}
                 className="mt-2 block text-sm text-primary hover:underline focus:outline-none"
              >
               {expandedOne ? "Read less" : "Read more"}
              </button>
         )}
          </div>
          <div className="h-[415px]">
            <img
              src={aboutLegacyImage}
              alt=""
              className="size-full object-cover rounded-[32px]"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 flex-col sm:flex-row">
        <h1 className="text-[#000] sm:text-[44px] text-[32px] font-ivy font-normal flex-1">
          {idealForAllHeading}
        </h1>
        <div className="text-secondary text-xl font-albertSans flex-1">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {expandedTwo || !isLongTwo ? idealForAllContent : previewTwo}
       </ReactMarkdown>
       {isLongTwo && (
          <button
             onClick={() => setExpandedTwo(!expandedTwo)}
             className="mt-2 block text-sm text-primary hover:underline focus:outline-none"
          >
           {expandedTwo ? "Read less" : "Read more"}
          </button>
        )}
        </div>
      </div>
    </div>
  );
};

export default AboutSession;
