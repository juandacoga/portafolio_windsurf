import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function BlogNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="grow flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-6xl font-bold text-gray-400">404</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Post no encontrado
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            El post del blog que estás buscando no existe o ha sido eliminado.
          </p>
          
          <div className="space-x-4">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Ver todos los posts
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
