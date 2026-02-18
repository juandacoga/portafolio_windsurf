'use client';

import Header from './Header';
import Footer from './Footer';
import BlogPostCard from './BlogPostCard';
import BlogLoading from './BlogLoading';
import { useLoadingState } from '../hooks/useLoadingState';
import { getBlogPosts } from '../lib/api';
import { useEffect, useState } from 'react';
import { BlogPost } from '../lib/api';

export default function BlogWrapper() {
  const loading = useLoadingState(300);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const blogPosts = await getBlogPosts();
        setPosts(blogPosts);
      } catch (err) {
        setError('No se pudieron cargar los posts');
      }
    };

    if (!loading) {
      loadPosts();
    }
  }, [loading]);

  if (loading) {
    return <BlogLoading />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-red-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Reintentar
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const featuredPost = posts.find(post => post.featured);
  const otherPosts = posts.filter(post => !post.featured);

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
