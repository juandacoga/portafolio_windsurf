import Link from 'next/link';
import { BlogPost } from '../data/blogPosts';
import { UI } from './ui';

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
  variant?: 'homepage' | 'homepage-horizontal' | 'blogpage';
}

export default function BlogPostCard({ post, featured = false, variant = 'blogpage' }: BlogPostCardProps) {
  // Homepage variant (similar to old BlogCard)
  if (variant === 'homepage') {
    return (
      <div className={`${featured ? 'bg-white p-6 rounded-lg shadow-md' : 'bg-white p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200'}`}>
        <div className={`${featured ? 'mb-4' : 'mb-3'}`}>
          <div className="w-full h-48 bg-linear-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-600 text-sm font-medium">Imagen</span>
            </div>
          </div>
        </div>
        <h3 className={`${featured ? 'text-2xl' : 'text-lg'} font-semibold text-gray-900 mb-2`}>
          {post.title}
        </h3>
        <p className={`${featured ? 'text-base' : 'text-sm'} text-gray-600 mb-4`}>
          {post.summary}
        </p>
        <UI.LinkButton 
          href={`/blog/${post.id}`}
          variant="secondary"
          size="sm"
        >
          {featured ? 'Leer más' : 'Leer'}
        </UI.LinkButton>
      </div>
    );
  }

  // Homepage horizontal variant (imagen al lado del texto)
  if (variant === 'homepage-horizontal') {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
        <div className="flex gap-4">
          {/* Imagen a la izquierda */}
          <div className="shrink-0">
            <div className="w-24 h-24 bg-linear-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-600 text-xs font-medium">Imagen</span>
              </div>
            </div>
          </div>
          
          {/* Contenido a la derecha */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {post.summary}
            </p>
            <UI.LinkButton 
              href={`/blog/${post.id}`}
              variant="secondary"
              size="sm"
            >
              Leer
            </UI.LinkButton>
          </div>
        </div>
      </div>
    );
  }

  // Blog page variant (original BlogPostCard)
  return (
    <div className={`${featured ? 'bg-white' : 'bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200'}`}>
      {featured ? (
        // Hero destacado - dos columnas
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-full h-64 bg-linear-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-600 text-lg font-medium">Imagen destacada</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                Destacado
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed line-clamp-3">
              {post.summary}
            </p>
            <UI.LinkButton 
              href={`/blog/${post.id}`}
              variant="secondary"
            >
              Leer más
            </UI.LinkButton>
          </div>
        </div>
      ) : (
        // Tarjeta normal para la grilla
        <div>
          <div className="mb-4">
            <div className="w-full h-48 bg-linear-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm font-medium">Imagen</span>
              </div>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {post.summary}
          </p>
          <UI.LinkButton 
            href={`/blog/${post.id}`}
            variant="secondary"
            size="sm"
          >
            Leer
          </UI.LinkButton>
        </div>
      )}
    </div>
  );
}
