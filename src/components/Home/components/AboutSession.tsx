import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contentfulClient } from "../../../lib/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";

interface AboutSectionFields {
  preTitle?: string;   // Short text
  title?: Document;    // Rich text
  content?: Document;  // Rich text
}

const AboutSession: React.FC = () => {
  const navigate = useNavigate();

  const [preTitle, setPreTitle] = useState<string | null>(null);
  const [title, setTitle] = useState<Document | null>(null);
  const [content, setContent] = useState<Document | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // simple read-more state
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        if (!contentfulClient) {
          setIsLoading(false);
          return;
        }

        const entries = await contentfulClient.getEntries<AboutSectionFields>({
          content_type: "aboutSection",
          limit: 1,
        });

        if (!entries.items.length) {
          setIsLoading(false);
          return;
        }

        const fields = entries.items[0].fields;

        setPreTitle(fields.preTitle ?? null);
        setTitle(fields.title ?? null);
        setContent(fields.content ?? null);
      } catch (e) {
        console.error("[AboutSession] Contentful error:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutContent();
  }, []);

  if (isLoading) {
    return (
      <section className="sm:py-32 sm:px-[12%] px-4 py-14 large:px-[18%]">
        <p className="text-secondary font-albertSans">Loading content...</p>
      </section>
    );
  }

  if (!preTitle && !title && !content) {
    return (
      <section className="sm:py-32 sm:px-[12%] px-4 py-14 large:px-[18%]">
        <p className="text-secondary font-albertSans">
          No About content configured in CMS.
        </p>
      </section>
    );
  }

  return (
    <section className="sm:py-32 sm:px-[12%] px-4 py-14 large:px-[18%]">
      <div className="flex flex-col sm:flex-row gap-10">
        {/* LEFT – sticky pre-title & title */}
        <div className="flex-1 sm:sticky sm:top-24 h-fit">
          {preTitle && (
            <p className="text-primary font-albertSans sm:text-base tracking-[1.6px] uppercase mobile:text-sm">
              {preTitle}
            </p>
          )}

          {title && (
            <h1 className="sm:text-[44px] text-[32px] font-ivy text-primary mt-4 leading-tight">
              {documentToReactComponents(title)}
            </h1>
          )}
        </div>

        {/* RIGHT – main content */}
        <div className="flex flex-col gap-6 flex-1 text-secondary font-albertSans sm:text-xl space-y-4 relative">
          {content && (
            <div className="leading-relaxed px-2 sm:px-0 py-2">
              {/* Collapsible area */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  showMore ? "max-h-[9999px]" : "max-h-[360px]"
                }`}
              >
                {documentToReactComponents(content)}
              </div>

              {/* Always show Read More / Read Less when content exists */}
              <button
                type="button"
                className="mt-4 underline text-primary font-albertSans"
                onClick={() => setShowMore((prev) => !prev)}
              >
                {showMore ? "Read Less" : "Read More"}
              </button>
            </div>
          )}

          <div>
            <button
              type="button"
              className="px-6 py-3 rounded-full bg-primary text-white font-albertSans"
              onClick={() => navigate("/about-us")}
            >
              Explore Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSession;
