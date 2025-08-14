import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost, parseBlogMarkdown } from '../../helper/blogParser';
import { Header } from '../Home/components/Header';
import { Helmet } from 'react-helmet-async';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogPost = async () => {
      if (!slug) {
        setError('No blog post specified');
        setLoading(false);
        return;
      }

      try {
        // Try to import the specific markdown file
        const content = await import(`../../blog/${slug}.md?raw`);
        const post = parseBlogMarkdown(content.default, slug);

        if (!post.published) {
          setError('Blog post not found or not published');
        } else if (!post.metaTitle || !post.metaDescription) {
          setError('Blog post is missing required SEO fields');
        } else {
          setBlogPost(post);
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
        if (error instanceof Error && error.message.includes('required SEO fields')) {
          setError('Blog post is missing required SEO fields. Please contact the administrator.');
        } else {
          setError('Blog post not found');
        }
      } finally {
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-albertSans">Loading blog post...</div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 font-albertSans">
            {error || 'Blog post not found'}
          </h1>
          <Link
            to="/blog"
            className="font-medium text-primary hover:text-primary-dark font-albertSans"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blogPost.metaTitle || blogPost.title}</title>
        <meta
          name="description"
          content={blogPost.metaDescription || blogPost.description}
        />
        <meta name="author" content={blogPost.author} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={blogPost.metaTitle || blogPost.title} />
        <meta
          property="og:description"
          content={blogPost.metaDescription || blogPost.description}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        {blogPost.featuredImage && (
          <meta property="og:image" content={blogPost.featuredImage} />
        )}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogPost.metaTitle || blogPost.title} />
        <meta
          name="twitter:description"
          content={blogPost.metaDescription || blogPost.description}
        />
        {blogPost.featuredImage && (
          <meta name="twitter:image" content={blogPost.featuredImage} />
        )}
        
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        {blogPost.featuredImage && (
          <div className="relative h-[400px] w-full">
            <img
              src={blogPost.featuredImage}
              alt={blogPost.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        )}

        {/* Content */}
        <div className="sm:px-[12%] px-4 py-12 large:px-[18%] bg-white">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center font-medium text-primary hover:text-primary-dark font-albertSans"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="mb-4 text-3xl sm:text-4xl font-ivy text-gray-900">
              {blogPost.title}
            </h1>

            <div className="flex items-center mb-6 text-secondary font-albertSans">
              <time dateTime={blogPost.date}>
                {new Date(blogPost.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="mx-2">•</span>
              <span>By {blogPost.author}</span>
            </div>

            {blogPost.description && (
              <p className="mb-6 text-lg leading-relaxed text-secondary font-albertSans">
                {blogPost.description}
              </p>
            )}

            {blogPost.tags && blogPost.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {blogPost.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm text-blue-800 bg-blue-50 rounded-full font-albertSans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none font-albertSans text-secondary">
            <div
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </article>

          {/* Back to Blog */}
          <div className="pt-8 mt-12 border-t border-gray-100">
            <Link
              to="/blog"
              className="inline-flex items-center font-medium text-primary hover:text-primary-dark font-albertSans"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
