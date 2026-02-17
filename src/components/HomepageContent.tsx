'use client';

import BlogPostCard from './BlogPostCard';
import { blogPosts } from '../data/blogPosts';
import Link from 'next/link';

export default function HomepageContent() {
  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  return (
    <>
      {/* About Me Section */}
      <section className="py-16 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full h-80 bg-linear-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-gray-600 text-lg font-medium">Foto de perfil</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  JD
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sobre <span className="text-gradient">mí</span>
              </h2>
              <div className="space-y-6 text-gray-600 mb-8 leading-relaxed">
                <p className="text-lg">
                  Soy un desarrollador Backend especializado en crear APIs robustas y escalables. 
                  Con experiencia en PHP, Laravel y conocimientos en Python, 
                  me especializo en construir arquitecturas de servidor eficientes y seguras.
                </p>
                <p className="text-lg">
                  Mi enfoque se centra en escribir código limpio, mantenible y seguir las mejores 
                  prácticas de diseño de software. Disfruto trabajando en proyectos desafiantes que me 
                  permiten optimizar rendimiento y diseñar sistemas escalables.
                </p>
              </div>
              <Link 
                href="/about"
                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Ver más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mi <span className="text-gradient">Blog</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comparto mis experiencias, aprendizajes y mejores prácticas sobre desarrollo Backend, arquitectura de software y optimización de APIs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Featured Post */}
            <div className="lg:col-span-1">
              {featuredPost && (
                <BlogPostCard post={featuredPost} featured={true} variant="homepage" />
              )}
            </div>
            
            {/* Other Posts */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Últimos posts</h3>
              <div className="space-y-6">
                {otherPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} featured={false} variant="homepage-horizontal" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
