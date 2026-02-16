import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';
import Link from 'next/link';

export default function Home() {
  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* About Me Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image placeholder */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-lg">
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
                    Soy un desarrollador apasionado por crear experiencias web modernas y funcionales. 
                    Con experiencia en tecnologías frontend como React, Next.js y TypeScript, 
                    me especializo en construir aplicaciones escalables y optimizadas.
                  </p>
                  <p className="text-lg">
                    Mi enfoque se centra en escribir código limpio, mantenible y seguir las mejores 
                    prácticas de la industria. Disfruto trabajando en proyectos desafiantes que me 
                    permiten aprender y crecer profesionalmente.
                  </p>
                </div>
                <Link 
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
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
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Mi <span className="text-gradient">Blog</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comparto mis experiencias, aprendizajes y mejores prácticas sobre desarrollo web.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Featured Post */}
              <div className="lg:col-span-1">
                {featuredPost && (
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-6">
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                        <span className="text-gray-600 font-medium">Imagen destacada</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        Destacado
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.summary}
                    </p>
                    <Link 
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                    >
                      Leer más
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Other Posts */}
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Últimos posts</h3>
                <div className="space-y-6">
                  {otherPosts.map((post) => (
                    <div key={post.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200">
                      <div className="flex gap-4">
                        <div className="shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 text-xs font-medium">Img</span>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {post.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
