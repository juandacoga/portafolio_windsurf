'use client';

import Header from './Header';
import Footer from './Footer';
import BlogPostCard from './BlogPostCard';
import BlogLoading from './BlogLoading';
import { useLoadingState } from '../hooks/useLoadingState';
import { blogPosts } from '../data/blogPosts';

export default function BlogWrapper() {
  const loading = useLoadingState(300);

  if (loading) {
    return <BlogLoading />;
  }

  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="grow">
        {/* Hero destacado */}
        <section className="py-16 bg-linear-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {featuredPost && (
              <div className="mb-8">
                <BlogPostCard post={featuredPost} featured={true} />
              </div>
            )}
          </div>
        </section>

        {/* Grid de posts */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {otherPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} featured={false} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
