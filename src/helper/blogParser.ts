import fm from 'front-matter';
import { marked } from 'marked';

// Define the shape of blog frontmatter
interface BlogFrontMatterAttributes {
  title: string;
  description: string;
  slug?: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
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
  metaTitle: string;
  metaDescription: string;
  author: string;
  date: string;
  featuredImage?: string;
  tags?: string[];
  published: boolean;
  content: string;
  slug: string;
}

// Simple slugify helper
function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function parseBlogMarkdown(raw: string, slug: string): BlogPost {
  const { attributes, body } = fm<BlogFrontMatterAttributes>(raw);

  // Validate required SEO fields
  if (!attributes.seo?.metaTitle || !attributes.seo?.metaDescription) {
    throw new Error(`Blog post ${slug} is missing required SEO fields. Both metaTitle and metaDescription are required.`);
  }

  // Determine final slug: frontmatter.slug > provided slug > slugified title
  const finalSlug = attributes.slug && attributes.slug.trim().length > 0
    ? slugify(attributes.slug)
    : (slug && slug.length > 0 ? slug : slugify(attributes.title || ''));

  return {
    title: attributes.title || 'Untitled',
    description: attributes.description || '',
    metaTitle: attributes.seo.metaTitle,
    metaDescription: attributes.seo.metaDescription,
    author: attributes.author || 'Anonymous',
    date: attributes.date || new Date().toISOString(),
    featuredImage: attributes.featuredImage,
    tags: attributes.tags || [],
    published: attributes.published !== undefined ? attributes.published : true,
    content: marked(body.trim()) as string,
    slug: finalSlug,
  };
}
