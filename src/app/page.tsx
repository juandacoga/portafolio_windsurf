import HomepageWrapper from '../components/HomepageWrapper';
import { generateMetadata } from './metadata';

export const metadata = generateMetadata({
  title: 'Inicio',
  description: 'Desarrollador web especializado en React, Next.js y TypeScript. Descubre mis proyectos y experiencia.',
  path: '/',
});

export default function Home() {
  return <HomepageWrapper />;
}
