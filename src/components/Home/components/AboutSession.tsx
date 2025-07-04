import { useNavigate } from "react-router-dom";
import About from "../../../File/About.md?raw";
import { parseMarkdown } from "../../../helper/mdPareser"; // Ensure this parses frontmatter
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const AboutSession = () => {
  const navigate = useNavigate();

  const { heading, content } = parseMarkdown(About);

  return (
    <div className="sm:py-32 sm:px-[12%] px-4 py-14 large:px-[18%]">
      <div className="flex flex-col sm:flex-row">
        <p className="flex-1 text-primary font-albertSans sm:text-base tracking-[1.6px] uppercase mobile:text-sm">
          About us
        </p>
        <div className="flex flex-col gap-6 flex-1">
          <h1 className="sm:text-[44px] text-[32px] font-ivy text-primary">
            {heading}
          </h1>
          <div className="text-secondary font-albertSans sm:text-xl prose prose-p:my-0 prose-a:text-blue-600 prose-strong:font-semibold">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
          <div>
            <button
              className="px-6 py-3 rounded-full bg-primary text-[#FFF] font-albertSans"
              onClick={() => navigate("/about")}
            >
              Explore Our Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSession;
