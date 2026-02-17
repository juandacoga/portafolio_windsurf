import Link from 'next/link';
import { BlogPost } from '../data/blogPosts';

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  return (
    <div className={`${featured ? 'bg-white' : 'bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200'}`}>
      {featured ? (
        // Hero destacado - dos columnas
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-gray-600 font-medium">Imagen destacada</span>
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
            <Link 
              href={`/blog/${post.id}`}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Leer más
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      ) : (
        // Tarjeta normal para la grilla
        <div>
          <div className="mb-4">
            <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">Imagen</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {post.summary}
          </p>
          <Link 
            href={`/blog/${post.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
          >
            Leer
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
