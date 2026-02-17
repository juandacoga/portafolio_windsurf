import BlogWrapper from '../../components/BlogWrapper';
import { generateMetadata } from '../metadata';

export const metadata = generateMetadata({
  title: 'Blog',
  description: 'Artículos sobre desarrollo web, React, Next.js, TypeScript y mejores prácticas. Comparto mi experiencia y aprendizajes.',
  path: '/blog',
});

export default function Blog() {
  return <BlogWrapper />;
}
