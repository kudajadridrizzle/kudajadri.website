import { useState } from 'react';
import Room from '../../../File/Room.md?raw';
import { parseMarkdown } from '../../../helper/mdPareser';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const RoomSession = () => {

  const { heading, content } = parseMarkdown(Room);
  const [expanded, setExpanded] = useState(false)
  const maxChars = 400

  const isLong = content.length > maxChars
  const preview = isLong ? content.slice(0, maxChars) + "..." : content
  return (
    <div className="sm:px-[12%] sm:py-32 bg-[#FFF] px-4 mobile:pt-14 mobile:pb-6 large:px-[18%]">
      <div className="sm:py-12 flex flex-col sm:flex-row justify-center">
        <h1 className="flex-1 sm:text-[44px] text-[32px] font-ivy">
          {heading}
        </h1>
        <div className="sm:w-[466px] sm:text-xl font-albertSans text-secondary">
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
    </div>
  );
};

export default RoomSession;
