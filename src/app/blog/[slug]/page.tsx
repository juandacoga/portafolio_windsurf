'use client';

import Link from 'next/link';
import { useEffect, useState, use } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { getBlogPost, getBlogPosts } from '../../../lib/api';
import { BlogPost } from '../../../lib/api';

export default function SingleBlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const foundPost = await getBlogPost(resolvedParams.slug);
        setPost(foundPost);
      } catch (err) {
        setError('No se pudo cargar el post');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [resolvedParams.slug]);

  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadRelatedPosts = async () => {
      try {
        const allPosts = await getBlogPosts();
        const related = allPosts.filter(p => p.id !== resolvedParams.slug).slice(0, 4);
        setRelatedPosts(related);
      } catch (err) {
        console.error('Error loading related posts:', err);
      }
    };

    if (post) {
      loadRelatedPosts();
    }
  }, [post, resolvedParams.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="grow flex items-center justify-center">
          <p className="text-xl text-gray-700">Cargando...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-gray-700 mb-4">{error || 'Post no encontrado'}</p>
            <Link href="/blog" className="ml-4 text-blue-600 hover:text-blue-800">
              Volver al blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="grow">
        {/* Hero Image */}
        <section className="w-full h-64 md:h-96 bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          <span className="text-gray-600 text-xl md:text-2xl font-medium">Imagen del Post</span>
        </section>

        {/* Post Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 text-sm">
              <span>Publicado el {post.date}</span>
              <span className="hidden sm:inline">•</span>
              <span>Por {post.author}</span>
            </div>
          </div>

          <div className="text-gray-700 leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph: string, index: number) => {
              // Headers H2
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              // Headers H3
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              // Párrafos normales
              return (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Publicaciones relacionadas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-600 text-xs font-medium">Img</span>
                      </div>
                    </div>
                    <div className="grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedPost.summary}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-xs">{relatedPost.date}</span>
                        <Link 
                          href={`/blog/${relatedPost.id}`}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
                        >
                          Leer
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
