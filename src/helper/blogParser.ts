import fm from "front-matter";
import { marked } from "marked";

// Define the shape of blog frontmatter
interface BlogFrontMatterAttributes {
  title: string;
  description: string;
  author: string;
  date: string;
  featuredImage?: string;
  tags?: string[];
  published: boolean;
}

// Define the blog post type
export interface BlogPost {
  title: string;
  description: string;
  author: string;
  date: string;
  featuredImage?: string;
  tags?: string[];
  published: boolean;
  content: string;
  slug: string;
}

export function parseBlogMarkdown(raw: string, slug: string): BlogPost {
  const { attributes, body } = fm<BlogFrontMatterAttributes>(raw);

  return {
    title: attributes.title || 'Untitled',
    description: attributes.description || '',
    author: attributes.author || 'Anonymous',
    date: attributes.date || new Date().toISOString(),
    featuredImage: attributes.featuredImage,
    tags: attributes.tags || [],
    published: attributes.published !== undefined ? attributes.published : true,
    content: marked(body.trim()) as string,
    slug: slug,
  };
}
