import Link from 'next/link';
import { BlogPost } from '../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <div className={`${featured ? 'bg-white p-6 rounded-lg shadow-md' : 'mb-4'}`}>
      {post.thumbnail && (
        <div className={`${featured ? 'mb-4' : 'mb-2'}`}>
          <div className={`${featured ? 'w-full h-48' : 'w-16 h-16'} bg-gray-200 rounded-lg flex items-center justify-center`}>
            <span className="text-gray-500 text-sm">Imagen</span>
          </div>
        </div>
      )}
      <h3 className={`${featured ? 'text-2xl' : 'text-lg'} font-semibold text-gray-900 mb-2`}>
        {post.title}
      </h3>
      <p className={`${featured ? 'text-base' : 'text-sm'} text-gray-600 mb-4`}>
        {post.summary}
      </p>
      <Link 
        href={`/blog/${post.id}`}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
      >
        Leer más
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
