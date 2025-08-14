import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, parseBlogMarkdown } from '../../helper/blogParser';
import { Header } from '../Home/components/Header';
import Footer from '../Home/components/Footer';
import { Helmet } from 'react-helmet-async';

const BlogList: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const blogModules = import.meta.glob('/src/blog/*.md', {
          query: '?raw',
          import: 'default',
        });

        const posts: BlogPost[] = [];

        for (const path in blogModules) {
          try {
            const content = await blogModules[path]();
            const slug = path.split('/').pop()?.replace('.md', '') || '';
            const post = parseBlogMarkdown(content as string, slug);
            
            // Only include posts that are published and have required SEO fields
            if (post.published && post.metaTitle && post.metaDescription) {
              posts.push(post);
            } else {
              console.warn(`Blog post ${slug} skipped: missing required fields or not published`);
            }
          } catch (error) {
            console.error(`Error parsing blog post ${path}:`, error);
            // Continue loading other posts even if one fails
          }
        }

        posts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-albertSans">Loading blog posts...</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Wayanad Travel Blog: Latest News, Tourism Updates, & Insights</title>
        <meta
          name="description"
          content="Stay updated with the Wayanad Travel Blog. Get the latest news, tourism updates, local insights, travel tips, and experiences to help you plan your perfect trip."
        />
        <meta
          name="keywords"
          content="wayanad blog, wayanad travel blog, kudajadri blog, wayanad tourism updates, travel tips, local insights"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kudajadri Homestay" />
        <meta
          property="og:title"
          content="Wayanad Travel Blog: Latest News, Tourism Updates, & Insights"
        />
        <meta
          property="og:description"
          content="Stay updated with the Wayanad Travel Blog. Get the latest news, tourism updates, local insights, travel tips, and experiences to help you plan your perfect trip."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Kudajadri Homestay" />
        <meta
          property="og:image"
          content={`${window.location.origin}/aboutHero.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Wayanad Travel Blog: Latest News, Tourism Updates, & Insights"
        />
        <meta
          name="twitter:description"
          content="Stay updated with the Wayanad Travel Blog. Get the latest news, tourism updates, local insights, travel tips, and experiences to help you plan your perfect trip."
        />
        <meta
          name="twitter:image"
          content={`${window.location.origin}/aboutHero.jpg`}
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Header />
      <div className="min-h-screen bg-white">
        <div className="sm:px-[12%] sm:py-32 px-4 py-14 large:px-[18%]">
          <h1 className="text-[32px] sm:text-[44px] font-ivy mb-8">Blog</h1>
          <p className="text-secondary font-albertSans text-lg mb-12">
            Discover stories, insights, and updates from Kudajadri
          </p>

          {blogPosts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-lg text-secondary font-albertSans">
                No blog posts available yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100"
                >
                  {post.featuredImage && (
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="object-cover w-full h-48"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center mb-3 text-sm text-gray-500 font-albertSans">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                    </div>

                    <h2 className="mb-3 text-xl font-semibold text-gray-900 font-albertSans">
                      {post.title}
                    </h2>

                    <p className="mb-4 text-secondary font-albertSans line-clamp-3">
                      {post.description}
                    </p>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag: string) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs text-blue-800 bg-blue-50 rounded-full font-albertSans"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center font-medium text-primary hover:text-primary-dark font-albertSans"
                    >
                      Read more
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogList;
