import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost, parseBlogMarkdown } from '../../helper/blogParser';
import { Header } from '../Home/components/Header';

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
        } else {
          setBlogPost(post);
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
        setError('Blog post not found');
      } finally {
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading blog post...</div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900">
            {error || 'Blog post not found'}
          </h1>
          <Link
            to="/blog"
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      {blogPost.featuredImage && (
        <div className="relative bg-gray-900 h-96">
          <img
            src={blogPost.featuredImage}
            alt={blogPost.title}
            className="object-cover w-full h-full opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
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
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            {blogPost.title}
          </h1>

          <div className="flex items-center mb-4 text-gray-600">
            <time dateTime={blogPost.date} className="text-sm">
              {new Date(blogPost.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="mx-2">•</span>
            <span className="text-sm">By {blogPost.author}</span>
          </div>

          {blogPost.description && (
            <p className="mb-6 text-xl leading-relaxed text-gray-600">
              {blogPost.description}
            </p>
          )}

          {blogPost.tags && blogPost.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </article>

        {/* Back to Blog */}
        <div className="pt-8 mt-12 border-t border-gray-200">
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
          >
            <svg
              className="w-4 h-4 mr-2"
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
            Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
