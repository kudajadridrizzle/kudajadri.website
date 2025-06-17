import fm from "front-matter";

// Define the shape of your frontmatter
interface FrontMatterAttributes {
  heading: string;
}

// Define the return type
export interface ParsedMarkdown {
  heading: string;
  content: string;
}

export function parseMarkdown(raw: string): ParsedMarkdown {
  const { attributes, body } = fm<FrontMatterAttributes>(raw);

  return {
    heading: attributes.heading,
    content: body.trim(),
  };
}
