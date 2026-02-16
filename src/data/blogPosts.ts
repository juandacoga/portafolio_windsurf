export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  featured: boolean;
  thumbnail?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Cómo construir un portafolio con Next.js',
    summary: 'Aprende a crear un portafolio profesional utilizando Next.js, TypeScript y Tailwind CSS desde cero.',
    content: 'Contenido completo del post sobre Next.js...',
    featured: true,
    thumbnail: '/images/blog-nextjs.jpg'
  },
  {
    id: '2',
    title: 'Mejores prácticas de TypeScript',
    summary: 'Descubre las mejores prácticas y patrones para escribir código TypeScript limpio y mantenible.',
    content: 'Contenido completo del post sobre TypeScript...',
    featured: false,
    thumbnail: '/images/blog-typescript.jpg'
  },
  {
    id: '3',
    title: 'Optimización de rendimiento en React',
    summary: 'Técnicas avanzadas para optimizar el rendimiento de tus aplicaciones React.',
    content: 'Contenido completo del post sobre optimización...',
    featured: false,
    thumbnail: '/images/blog-react.jpg'
  },
  {
    id: '4',
    title: 'Diseño responsivo con Tailwind CSS',
    summary: 'Guía completa para crear diseños responsivos y modernos utilizando Tailwind CSS.',
    content: 'Contenido completo del post sobre Tailwind...',
    featured: false,
    thumbnail: '/images/blog-tailwind.jpg'
  }
];
