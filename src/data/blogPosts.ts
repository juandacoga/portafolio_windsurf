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
    title: 'Cómo construir un portafolio con Next.js',
    summary: 'Aprende a crear un portafolio profesional utilizando Next.js, TypeScript y Tailwind CSS desde cero.',
    content: `En este tutorial completo, te guiaré paso a paso en la creación de un portafolio web moderno y profesional. Aprenderás a configurar un proyecto Next.js 16 con App Router, implementar routing dinámico para tus proyectos, y optimizar el rendimiento con las mejores prácticas. Cubriremos desde la configuración inicial hasta el despliegue en producción, incluyendo animaciones, SEO optimizado y diseño responsivo.

A lo largo de este artículo, exploraremos conceptos fundamentales y técnicas avanzadas que te permitirán llevar tus habilidades al siguiente nivel. Cada sección está diseñada para proporcionar valor práctico que puedas aplicar inmediatamente en tus proyectos.

## Conceptos Clave

Es importante entender los principios básicos antes de aventurarse en implementaciones complejas. La base sólida te permitirá tomar mejores decisiones arquitectónicas y evitar errores comunes que muchos desarrolladores enfrentan.

### Mejores Prácticas

La industria del desarrollo web evoluciona constantemente, y mantenerse actualizado con las mejores prácticas es esencial para construir aplicaciones robustas y mantenibles. Estas prácticas no solo mejoran la calidad del código, sino que también facilitan la colaboración en equipo.

## Implementación Práctica

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
    title: 'Mejores prácticas de TypeScript',
    summary: 'Descubre las mejores prácticas y patrones para escribir código TypeScript limpio y mantenible.',
    content: `TypeScript ha revolucionado el desarrollo JavaScript al tipar nuestro código y prevenir errores en tiempo de compilación. En este artículo, exploraremos las mejores prácticas para estructurar tus tipos, utilizar interfaces vs types apropiadamente, implementar genéricos eficientemente, y mantener un código escalable. Aprenderás patrones avanzados como tipos condicionales, mapped types, y cómo configurar tsconfig.json para máxima productividad.

A lo largo de este artículo, exploraremos conceptos fundamentales y técnicas avanzadas que te permitirán llevar tus habilidades al siguiente nivel. Cada sección está diseñada para proporcionar valor práctico que puedas aplicar inmediatamente en tus proyectos.

## Conceptos Clave

Es importante entender los principios básicos antes de aventurarse en implementaciones complejas. La base sólida te permitirá tomar mejores decisiones arquitectónicas y evitar errores comunes que muchos desarrolladores enfrentan.

### Mejores Prácticas

La industria del desarrollo web evoluciona constantemente, y mantenerse actualizado con las mejores prácticas es esencial para construir aplicaciones robustas y mantenibles. Estas prácticas no solo mejoran la calidad del código, sino que también facilitan la colaboración en equipo.

## Implementación Práctica

La teoría es importante, pero la práctica es lo que realmente consolida el conocimiento. A continuación, veremos ejemplos concretos y casos de uso que te ayudarán a entender cómo aplicar estos conceptos en situaciones reales.

### Ejemplos de Código

Los ejemplos prácticos demuestran cómo implementar correctamente los patrones que hemos discutido. Cada línea de código tiene un propósito específico y contribuye a la solución general del problema.

## Conclusión

Dominar estas técnicas te convertirá en un desarrollador más competente y valioso. Recuerda que el aprendizaje es un proceso continuo, y cada proyecto es una oportunidad para mejorar y expandir tus habilidades.`,
    featured: false,
    thumbnail: '/images/blog-typescript.jpg',
    author: 'Juan Developer',
    date: '10 de febrero, 2024'
  },
  {
    id: '3',
    title: 'Optimización de rendimiento en React',
    summary: 'Técnicas avanzadas para optimizar el rendimiento de tus aplicaciones React.',
    content: `El rendimiento es crucial en aplicaciones React modernas. Exploraremos técnicas como memoización con React.memo y useMemo, virtual scrolling para listas grandes, lazy loading de componentes, code splitting estratégico, y cómo identificar cuellos de botella con React DevTools. También cubriremos patrones de renderizado, state management optimizado, y cómo medir el impacto real de tus optimizaciones.

A lo largo de este artículo, exploraremos conceptos fundamentales y técnicas avanzadas que te permitirán llevar tus habilidades al siguiente nivel. Cada sección está diseñada para proporcionar valor práctico que puedas aplicar inmediatamente en tus proyectos.

## Conceptos Clave

Es importante entender los principios básicos antes de aventurarse en implementaciones complejas. La base sólida te permitirá tomar mejores decisiones arquitectónicas y evitar errores comunes que muchos desarrolladores enfrentan.

### Mejores Prácticas

La industria del desarrollo web evoluciona constantemente, y mantenerse actualizado con las mejores prácticas es esencial para construir aplicaciones robustas y mantenibles. Estas prácticas no solo mejoran la calidad del código, sino que también facilitan la colaboración en equipo.

## Implementación Práctica

La teoría es importante, pero la práctica es lo que realmente consolida el conocimiento. A continuación, veremos ejemplos concretos y casos de uso que te ayudarán a entender cómo aplicar estos conceptos en situaciones reales.

### Ejemplos de Código

Los ejemplos prácticos demuestran cómo implementar correctamente los patrones que hemos discutido. Cada línea de código tiene un propósito específico y contribuye a la solución general del problema.

## Conclusión

Dominar estas técnicas te convertirá en un desarrollador más competente y valioso. Recuerda que el aprendizaje es un proceso continuo, y cada proyecto es una oportunidad para mejorar y expandir tus habilidades.`,
    featured: false,
    thumbnail: '/images/blog-react.jpg',
    author: 'Juan Developer',
    date: '5 de febrero, 2024'
  },
  {
    id: '4',
    title: 'Diseño responsivo con Tailwind CSS',
    summary: 'Guía completa para crear diseños responsivos y modernos utilizando Tailwind CSS.',
    content: `Tailwind CSS ha cambiado la forma en que abordamos el diseño web. En esta guía completa, aprenderás a dominar el sistema de grid responsivo, implementar diseños mobile-first, utilizar utilidades de spacing y typography efectivamente, y crear componentes reutilizables. Cubriremos técnicas avanzadas como custom configurations, dark mode implementation, y cómo integrar Tailwind con frameworks modernos manteniendo código limpio y mantenible.

A lo largo de este artículo, exploraremos conceptos fundamentales y técnicas avanzadas que te permitirán llevar tus habilidades al siguiente nivel. Cada sección está diseñada para proporcionar valor práctico que puedas aplicar inmediatamente en tus proyectos.

## Conceptos Clave

Es importante entender los principios básicos antes de aventurarse en implementaciones complejas. La base sólida te permitirá tomar mejores decisiones arquitectónicas y evitar errores comunes que muchos desarrolladores enfrentan.

### Mejores Prácticas

La industria del desarrollo web evoluciona constantemente, y mantenerse actualizado con las mejores prácticas es esencial para construir aplicaciones robustas y mantenibles. Estas prácticas no solo mejoran la calidad del código, sino que también facilitan la colaboración en equipo.

## Implementación Práctica

La teoría es importante, pero la práctica es lo que realmente consolida el conocimiento. A continuación, veremos ejemplos concretos y casos de uso que te ayudarán a entender cómo aplicar estos conceptos en situaciones reales.

### Ejemplos de Código

Los ejemplos prácticos demuestran cómo implementar correctamente los patrones que hemos discutido. Cada línea de código tiene un propósito específico y contribuye a la solución general del problema.

## Conclusión

Dominar estas técnicas te convertirá en un desarrollador más competente y valioso. Recuerda que el aprendizaje es un proceso continuo, y cada proyecto es una oportunidad para mejorar y expandir tus habilidades.`,
    featured: false,
    thumbnail: '/images/blog-tailwind.jpg',
    author: 'Juan Developer',
    date: '1 de febrero, 2024'
  }
];
