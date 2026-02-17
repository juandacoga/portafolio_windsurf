import AboutWrapper from '../../components/AboutWrapper';
import { generateMetadata } from '../metadata';

export const metadata = generateMetadata({
  title: 'Acerca de',
  description: 'Conoce más sobre mí como desarrollador web. Mi experiencia, habilidades y proyectos realizados con tecnologías modernas.',
  path: '/about',
});

export default function About() {
  return <AboutWrapper />;
}
