// src/components/Home/components/AboutSession.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contentfulClient } from "../../../lib/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";

interface AboutSectionFields {
  preTitle?: string; // Short text
  title?: Document; // Rich text
  content?: Document; // Rich text
}

const AboutSession: React.FC = () => {
  const navigate = useNavigate();

  const [preTitle, setPreTitle] = useState<string | null>(null);
  const [title, setTitle] = useState<Document | null>(null);
  const [content, setContent] = useState<Document | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        if (!contentfulClient) {
          setIsLoading(false);
          return;
        }

        // Treat the response as unknown/any to avoid the EntrySkeletonType generic constraint.
        const response: unknown = await contentfulClient.getEntries({
          content_type: "aboutSection",
          limit: 1,
        });

        // Narrow safely:
        const items = (response as any)?.items;
        if (!Array.isArray(items) || items.length === 0) {
          setIsLoading(false);
          return;
        }

        // Grab fields with a local cast — only this small piece is typed as AboutSectionFields.
        const fields = (items[0]?.fields ?? {}) as AboutSectionFields;

        setPreTitle(fields.preTitle ?? null);
        setTitle(fields.title ?? null);
        setContent(fields.content ?? null);
      } catch (err) {
        console.error("[AboutSession] Contentful error:", err);
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

        <div className="flex flex-col gap-6 flex-1 text-secondary font-albertSans sm:text-xl space-y-4 relative">
          {content && (
            <div className="leading-relaxed px-2 sm:px-0 py-2">
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  showMore ? "max-h-[9999px]" : "max-h-[360px]"
                }`}
              >
                {documentToReactComponents(content)}
              </div>

              <button
                type="button"
                className="mt-4 underline text-primary font-albertSans"
                onClick={() => setShowMore((p) => !p)}
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
