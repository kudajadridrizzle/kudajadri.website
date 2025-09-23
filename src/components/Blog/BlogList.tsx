import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, parseBlogMarkdown } from '../../helper/blogParser';
import { Header } from '../Home/components/Header';
import Footer from '../Home/components/Footer';
import { Helmet } from 'react-helmet-async';
import usePageMeta, { PageType } from '../../hooks/usePageMeta';

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://www.kudajadridrizzle.com";

// ✅ Canonical: strip query params & hash
const cleanPath =
  typeof window !== "undefined"
    ? window.location.pathname
    : "/blog";

const CANONICAL_URL = `${SITE_URL}${cleanPath}`;
const BLOG_HERO_IMAGE = `${SITE_URL}/blogHero.jpg`;

const BlogList: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { meta, loading: metaLoading } = usePageMeta('blog' as PageType);

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
            const fullSlug = path.split('/').pop()?.replace('.md', '') || '';
            const slug = fullSlug.replace(/^\d{4}-\d{2}-\d{2}-/, '');
            const post = parseBlogMarkdown(content as string, slug);

            if (post.published && post.metaTitle && post.metaDescription) {
              posts.push(post);
            } else {
              console.warn(
                `Blog post ${slug} skipped: missing required fields or not published`
              );
            }
          } catch (error) {
            console.error(`Error parsing blog post ${path}:`, error);
          }
        }

        // Sort posts by date (newest first)
        posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  // Fallback metadata
  const pageTitle = meta?.title || 'Kudajadri Drizzle Blog - Latest Travel Tips & Stories from Wayanad';
  const pageDescription = meta?.description || 'Explore our blog for the latest travel guides, local insights, and stories from Wayanad. Discover hidden gems, travel tips, and experiences from Kudajadri Drizzle.';

  if (loading || metaLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={BLOG_HERO_IMAGE} />
        <meta property="og:site_name" content="Kudajadri Drizzle" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={BLOG_HERO_IMAGE} />
        <meta name="twitter:site" content="@kudajadrihomestay" />
        
        <link rel="canonical" href={CANONICAL_URL} />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            'headline': pageTitle,
            'description': pageDescription,
            'url': CANONICAL_URL,
            'image': BLOG_HERO_IMAGE,
            'publisher': {
              '@type': 'Organization',
              'name': 'Kudajadri Drizzle',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://kudajadridrizzle.com/logo.png'
              }
            },
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': CANONICAL_URL
            },
            'inLanguage': 'en-US'
          })}
        </script>
      </Helmet>

      <Header type="black" />
      <div className="min-h-screen bg-white">
        <div className="sm:px-[12%] sm:py-32 px-4 py-14 large:px-[18%]">
          <h1 className="text-[32px] sm:text-[44px] font-ivy mb-8 text-center">
            Wayanad Travel Blog
          </h1>
          <p className="text-secondary font-albertSans text-lg mb-12 text-center">
            Explore Wayanad with our <strong>Wayanad Travel Blog</strong>, featuring travel tips, itineraries, and local insights. Discover the best accommodations, including homestays and heritage cottages, and learn about sightseeing, nature walks, and adventure activities. Perfect for families, couples, and solo travelers, the blog helps plan a memorable and enjoyable Wayanad trip.
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
                        loading="lazy"
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
    </div>
  );
};

export default BlogList;
