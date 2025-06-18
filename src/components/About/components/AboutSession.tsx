import imageOne from "../../../assets/imageOne.jpg";
import aboutLegacyImage from "../../../assets/aboutLegacyImage.jpg";
import { parseMarkdown } from "../../../helper/mdPareser";
import HomeStay from '../../../File/HomeStay.md?raw';
import Legacy from '../../../File/Legacy.md?raw';
import IdealForAll from '../../../File/IdealForAll.md?raw';
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

const AboutSession = () => {

  const {  heading, content } =  parseMarkdown(HomeStay)
  const { heading: legacyHeading, content: legacyContent } = parseMarkdown(Legacy);
  const { heading: idealForAllHeading, content: idealForAllContent } = parseMarkdown(IdealForAll);

  return (
    <div className="sm:px-[6%] sm:py-32 large:px-[18%] px-4 py-14">
      <div className="flex flex-col gap-12">
        <div className="flex gap-4 sm:flex-row flex-col">
          <span className="block sm:w-1/2 text-[#000] font-ivy sm:text-[44px] text-[32px]">
            {heading}
          </span>
          <p className="sm:w-1/2 text-secondary font-albertSans sm:text-xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </p>
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
          <p className="text-secondary sm:text-xl font-albertSans">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{legacyContent}</ReactMarkdown>
          </p>
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
        <p className="text-secondary text-xl font-albertSans flex-1">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{idealForAllContent}</ReactMarkdown>
        </p>
      </div>
    </div>
  );
};

export default AboutSession;
