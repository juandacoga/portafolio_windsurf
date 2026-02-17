export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  featured: boolean;
  thumbnail?: string;
  author: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Arquitectura de Microservicios con Laravel',
    summary: 'Descubre cómo diseñar y implementar arquitecturas de microservicios escalables usando Laravel, Lumen y contenedores Docker.',
    content: `En este artículo completo, te guiaré paso a paso en la creación de arquitecturas de microservicios robustas utilizando el ecosistema Laravel. Aprenderás a diseñar APIs RESTful, implementar comunicación entre servicios con RabbitMQ, y orquestar microservicios con Kubernetes. Cubriremos desde la monolítica inicial hasta la arquitectura distribuida completa, incluyendo patrones de comunicación, resiliencia y escalabilidad horizontal.

A lo largo de este artículo, exploraremos conceptos fundamentales de arquitectura de software y técnicas avanzadas que te permitirán llevar tus habilidades de Backend al siguiente nivel. Cada sección está diseñada para proporcionar valor práctico que puedas aplicar inmediatamente en tus proyectos empresariales.

## Conceptos Clave

Es importante entender los principios fundamentales de arquitectura de software antes de aventurarse en sistemas distribuidos. La base sólida te permitirá tomar mejores decisiones arquitectónicas y evitar errores comunes que muchos desarrolladores Backend enfrentan.

### Patrones de Diseño

Los patrones de diseño son soluciones probadas a problemas comunes en el desarrollo de software. En el contexto de Backend, estos patrones son especialmente importantes para construir sistemas que puedan evolucionar y mantenerse a lo largo del tiempo.

## Implementación Práctica

La teoría es importante, pero la práctica es lo que realmente consolida el conocimiento. A continuación, veremos ejemplos concretos y casos de uso que te ayudarán a entender cómo aplicar estos conceptos en situaciones reales.

### Ejemplos de Código

Los ejemplos prácticos demuestran cómo implementar correctamente los patrones que hemos discutido. Cada línea de código tiene un propósito específico y contribuye a la solución general del problema.

## Conclusión

Dominar estas técnicas te convertirá en un desarrollador Backend más competente y valioso. Recuerda que el aprendizaje es un proceso continuo, y cada proyecto es una oportunidad para mejorar y expandir tus habilidades.,

La teoría es importante, pero la práctica es lo que realmente consolida el conocimiento. A continuación, veremos ejemplos concretos y casos de uso que te ayudarán a entender cómo aplicar estos conceptos en situaciones reales.

### Ejemplos de Código

Los ejemplos prácticos demuestran cómo implementar correctamente los patrones que hemos discutido. Cada línea de código tiene un propósito específico y contribuye a la solución general del problema.

## Conclusión

Dominar estas técnicas te convertirá en un desarrollador más competente y valioso. Recuerda que el aprendizaje es un proceso continuo, y cada proyecto es una oportunidad para mejorar y expandir tus habilidades.`,
    featured: true,
    thumbnail: '/images/blog-nextjs.jpg',
    author: 'Juan Developer',
    date: '15 de febrero, 2024'
  },
  {
    id: '2',
    title: 'Optimización de Base de Datos con Eloquent',
    summary: 'Aprende a optimizar consultas, implementar caching y mejorar el rendimiento de tus bases de datos con Laravel Eloquent.',
    content: `El rendimiento de la base de datos es crucial en aplicaciones Laravel. En este artículo, exploraremos técnicas avanzadas de optimización con Eloquent ORM: eager loading vs lazy loading, query caching, índices eficientes, y cómo analizar consultas con Laravel Debugbar. Aprenderás patrones para N+1 problems, implementar scopes reutilizables, y optimizar relaciones para máxima performance.

A lo largo de este artículo, exploraremos conceptos fundamentales de optimización de bases de datos y técnicas avanzadas que te permitirán llevar tus habilidades de Backend al siguiente nivel. Cada sección está diseñada para proporcionar valor práctico que puedas aplicar inmediatamente en tus proyectos empresariales.

## Conceptos Clave

Es importante entender los principios fundamentales de optimización de bases de datos antes de aventurarse en implementaciones complejas. La base sólida te permitirá tomar mejores decisiones arquitectónicas y evitar errores comunes que muchos desarrolladores Backend enfrentan.

### Patrones de Optimización

Los patrones de optimización son soluciones probadas a problemas comunes de rendimiento. En el contexto de Backend, estos patrones son especialmente importantes para construir sistemas que puedan manejar grandes volúmenes de datos.

## Implementación Práctica

La teoría es importante, pero la práctica es lo que realmente consolida el conocimiento. A continuación, veremos ejemplos concretos y casos de uso que te ayudarán a entender cómo aplicar estos conceptos en situaciones reales.

### Ejemplos de Código

Los ejemplos prácticos demuestran cómo implementar correctamente los patrones que hemos discutido. Cada línea de código tiene un propósito específico y contribuye a la solución general del problema.

## Conclusión

Dominar estas técnicas te convertirá en un desarrollador Backend más competente y valioso. Recuerda que el aprendizaje es un proceso continuo, y cada proyecto es una oportunidad para mejorar y expandir tus habilidades.`,
    featured: false,
    thumbnail: '/images/blog-laravel.jpg',
    author: 'Juan Developer',
    date: '10 de febrero, 2024'
  },
  {
    id: '3',
    title: 'APIs RESTful con Python y FastAPI',
    summary: 'Construye APIs RESTful robustas y escalables utilizando Python, FastAPI y SQLAlchemy.',
    content: `FastAPI ha revolucionado el desarrollo de APIs en Python con su rendimiento excepcional y tipado automático. En este artículo, exploraremos cómo construir APIs RESTful completas: autenticación JWT, validación de datos con Pydantic, inyección de dependencias, testing automatizado, y despliegue con Docker. Aprenderás patrones de diseño de APIs, manejo de errores, documentación automática, y cómo integrar con bases de datos SQL y NoSQL.

A lo largo de este artículo, exploraremos conceptos fundamentales de desarrollo de APIs y técnicas avanzadas que te permitirán llevar tus habilidades de Backend al siguiente nivel. Cada sección está diseñada para proporcionar valor práctico que puedas aplicar inmediatamente en tus proyectos empresariales.

## Conceptos Clave

Es importante entender los principios fundamentales de diseño de APIs antes de aventurarse en implementaciones complejas. La base sólida te permitirá tomar mejores decisiones arquitectónicas y evitar errores comunes que muchos desarrolladores Backend enfrentan.

### Patrones de API

Los patrones de diseño de APIs son soluciones probadas a problemas comunes en el desarrollo de servicios. En el contexto de Backend, estos patrones son especialmente importantes para construir APIs que puedan evolucionar y mantenerse a lo largo del tiempo.

## Implementación Práctica

La teoría es importante, pero la práctica es lo que realmente consolida el conocimiento. A continuación, veremos ejemplos concretos y casos de uso que te ayudarán a entender cómo aplicar estos conceptos en situaciones reales.

### Ejemplos de Código

Los ejemplos prácticos demuestran cómo implementar correctamente los patrones que hemos discutido. Cada línea de código tiene un propósito específico y contribuye a la solución general del problema.

## Conclusión

Dominar estas técnicas te convertirá en un desarrollador Backend más competente y valioso. Recuerda que el aprendizaje es un proceso continuo, y cada proyecto es una oportunidad para mejorar y expandir tus habilidades.`,
    featured: false,
    thumbnail: '/images/blog-python.jpg',
    author: 'Juan Developer',
    date: '8 de febrero, 2024'
  },
  {
    id: '4',
    title: 'Testing en Backend con PHPUnit',
    summary: 'Implementa pruebas automatizadas robustas para tus aplicaciones Laravel usando PHPUnit y mejores prácticas.',
    content: `El testing es fundamental para construir aplicaciones Backend confiables. En este artículo, exploraremos cómo implementar testing completo con PHPUnit: unit tests, integration tests, feature tests, y database testing. Aprenderás patrones de testabilidad, mocking de dependencias, factories para datos de prueba, y cómo configurar pipelines de CI/CD para testing automático.

A lo largo de este artículo, exploraremos conceptos fundamentales de testing y técnicas avanzadas que te permitirán llevar tus habilidades de Backend al siguiente nivel. Cada sección está diseñada para proporcionar valor práctico que puedas aplicar inmediatamente en tus proyectos empresariales.

## Conceptos Clave

Es importante entender los principios fundamentales de testing antes de aventurarse en implementaciones complejas. La base sólida te permitirá tomar mejores decisiones arquitectónicas y evitar errores comunes que muchos desarrolladores Backend enfrentan.

### Patrones de Testing

Los patrones de testing son soluciones probadas a problemas comunes en el desarrollo de software. En el contexto de Backend, estos patrones son especialmente importantes para construir sistemas que puedan evolucionar y mantenerse a lo largo del tiempo.

## Implementación Práctica

La teoría es importante, pero la práctica es lo que realmente consolida el conocimiento. A continuación, veremos ejemplos concretos y casos de uso que te ayudarán a entender cómo aplicar estos conceptos en situaciones reales.

### Ejemplos de Código

Los ejemplos prácticos demuestran cómo implementar correctamente los patrones que hemos discutido. Cada línea de código tiene un propósito específico y contribuye a la solución general del problema.

## Conclusión

Dominar estas técnicas te convertirá en un desarrollador Backend más competente y valioso. Recuerda que el aprendizaje es un proceso continuo, y cada proyecto es una oportunidad para mejorar y expandir tus habilidades.`,
    featured: false,
    thumbnail: '/images/blog-testing.jpg',
    author: 'Juan Developer',
    date: '5 de febrero, 2024'
  }
];
