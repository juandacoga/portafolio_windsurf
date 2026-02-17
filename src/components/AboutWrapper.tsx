'use client';

import Header from './Header';
import Footer from './Footer';
import AboutLoading from './AboutLoading';
import { useLoadingState } from '../hooks/useLoadingState';
import Link from 'next/link';
import { projects, talks } from '../data/aboutData';

export default function AboutWrapper() {
  const loading = useLoadingState(400);

  if (loading) {
    return <AboutLoading />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="grow">
        {/* About Me Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left - Profile Image */}
                <div className="order-2 lg:order-1">
                  <div className="w-full max-w-sm mx-auto lg:mx-0">
                    <div className="w-full h-80 bg-linear-to-br from-blue-100 to-purple-100 rounded-2xl shadow-lg flex items-center justify-center">
                      <span className="text-gray-600 text-lg font-medium">Foto de perfil</span>
                    </div>
                  </div>
                </div>

                {/* Right - About Content */}
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Sobre mí
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                    <p>
                      Soy un desarrollador Backend especializado en crear APIs robustas y sistemas escalables. 
                      Con amplia experiencia en PHP, Laravel y conocimientos en Python, 
                      me especializo en diseñar arquitecturas de servidor eficientes y seguras.
                    </p>
                    <p>
                      Mi enfoque se centra en escribir código limpio, mantenible y seguir las mejores 
                      prácticas de diseño de software. Me encanta optimizar rendimiento de bases de datos, 
                      implementar patrones de diseño y construir sistemas que escalen con el crecimiento del negocio.
                    </p>
                    <p>
                      Cuando no estoy programando, disfruto compartir conocimiento a través de mi blog sobre arquitectura de software, 
                      participar en comunidades de desarrolladores Backend y explorar nuevas tecnologías 
                      que están moldeando el futuro del desarrollo de APIs y microservicios.
                    </p>
                  </div>
                  <Link
                    href="mailto:juan@example.com"
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    Contactar
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Proyectos
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="aspect-video bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-medium">Imagen del proyecto</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 2).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Talks Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Charlas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {talks.map((talk) => (
                <div key={talk.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
                  <div className="flex flex-col md:flex-row gap-4 h-full">
                    {/* Thumbnail */}
                    <div className="shrink-0">
                      <div className="w-full md:w-32 h-24 bg-linear-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-600 text-xs font-medium">Charla</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="grow flex flex-col min-h-0">
                      <div className="flex-1 min-h-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {talk.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {talk.summary}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-auto pt-3">
                        <div className="text-xs text-gray-500">
                          <span>{talk.event}</span>
                          <span className="mx-2">•</span>
                          <span>{talk.date}</span>
                        </div>
                        <a
                          href={talk.videoUrl || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200 whitespace-nowrap"
                        >
                          Ver charla
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
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
