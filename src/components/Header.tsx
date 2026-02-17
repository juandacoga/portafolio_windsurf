'use client';

import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-white/90 border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                Portafolio
              </Link>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Inicio
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Acerca de
                </Link>
                <Link 
                  href="/blog" 
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Blog
                </Link>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
