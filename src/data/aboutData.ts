export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Talk {
  id: string;
  title: string;
  summary: string;
  thumbnail: string;
  event: string;
  date: string;
  videoUrl?: string;
  slidesUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'API RESTful con Laravel',
    description: 'API completa con autenticación JWT, roles de usuario, y documentación automática con Swagger.',
    image: '/images/project-laravel-api.jpg',
    tech: ['PHP', 'Laravel', 'MySQL', 'JWT'],
    demoUrl: 'https://api.example.com',
    githubUrl: 'https://github.com/example/laravel-api'
  },
  {
    id: '2',
    title: 'Sistema de Gestión de Inventarios',
    description: 'Sistema ERP con módulos de inventario, facturación y reportes usando Laravel y Vue.js.',
    image: '/images/project-erp.jpg',
    tech: ['PHP', 'Laravel', 'Vue.js', 'PostgreSQL'],
    demoUrl: 'https://erp.example.com',
    githubUrl: 'https://github.com/example/erp'
  },
  {
    id: '3',
    title: 'Microservicios con Python',
    description: 'Arquitectura de microservicios con FastAPI, RabbitMQ y Docker para procesamiento de datos.',
    image: '/images/project-microservices.jpg',
    tech: ['Python', 'FastAPI', 'RabbitMQ', 'Docker'],
    demoUrl: 'https://microservices.example.com',
    githubUrl: 'https://github.com/example/microservices'
  },
  {
    id: '4',
    title: 'API de Streaming con Node.js',
    description: 'API WebSocket para streaming de datos en tiempo real con Redis y Socket.io.',
    image: '/images/project-streaming.jpg',
    tech: ['Node.js', 'Express', 'Redis', 'Socket.io'],
    demoUrl: 'https://streaming.example.com',
    githubUrl: 'https://github.com/example/streaming'
  }
];

export const talks: Talk[] = [
  {
    id: '1',
    title: 'Arquitectura de Microservicios con Laravel',
    summary: 'Explorando patrones modernos de arquitectura de microservicios usando Laravel, Lumen y contenedores Docker.',
    thumbnail: '/images/talk-laravel.jpg',
    event: 'LaravelConf 2024',
    date: '15 de marzo, 2024',
    videoUrl: 'https://youtube.com/watch?v=example1',
    slidesUrl: 'https://slides.example.com/laravel-microservices'
  },
  {
    id: '2',
    title: 'Optimización de Base de Datos con Python',
    summary: 'Cómo optimizar consultas SQL, implementar caching y mejorar rendimiento de APIs con Python y FastAPI.',
    thumbnail: '/images/talk-python.jpg',
    event: 'Python Summit 2024',
    date: '22 de febrero, 2024',
    videoUrl: 'https://youtube.com/watch?v=example2',
    slidesUrl: 'https://slides.example.com/python-optimization'
  }
];
