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
        {post.thumbnail && (
          <div className={`${featured ? 'mb-4' : 'mb-3'}`}>
            <UI.ImagePlaceholder 
              text="Imagen" 
              size={featured ? 'large' : 'small'}
            />
          </div>
        )}
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
            <UI.ImagePlaceholder 
              text="Imagen" 
              size="medium"
            />
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
            <UI.ImagePlaceholder 
              text="Imagen destacada" 
              size="hero"
            />
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
            <UI.ImagePlaceholder 
              text="Imagen" 
              size="large"
            />
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
