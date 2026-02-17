'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel - pequeño y compacto */}
      {isOpen && (
        <div className="md:hidden absolute right-4 top-16 z-50">
          {/* Panel pequeño */}
          <div className="bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden">
            {/* Header del menú - sin botón X */}
            <div className="px-3 py-2 border-b border-gray-100 bg-gray-50">
              <span className="text-sm font-semibold text-gray-900">Menú</span>
            </div>
            
            {/* Navegación compacta */}
            <nav className="p-2 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200"
                onClick={toggleMenu}
              >
                Acerca de
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200"
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </nav>
          </div>
          
          {/* Overlay para cerrar al hacer clic fuera */}
          <div 
            className="fixed inset-0 bg-transparent" 
            onClick={toggleMenu}
          />
        </div>
      )}
    </>
  );
}
