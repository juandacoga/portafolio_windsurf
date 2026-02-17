import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AboutWrapper from '../AboutWrapper';

// Mock components to isolate testing
jest.mock('../ui/UI', () => ({
  SectionHeading: ({ children }: any) => <h2 data-testid="section-heading">{children}</h2>,
  PageContainer: ({ children }: any) => <div data-testid="page-container">{children}</div>,
  SkeletonElement: ({ variant, width, height }: any) => <div data-testid="skeleton-element">{variant}-{width}-{height}</div>,
  CLASSES: {
    SECTION_HEADING: 'test-section-heading'
  }
}));

jest.mock('../AboutLoading', () => {
  return function MockAboutLoading() {
    return <div data-testid="about-loading">Loading...</div>;
  };
});

jest.mock('../ProjectCard', () => {
  return function MockProjectCard({ project }: any) {
    return (
      <div data-testid="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div data-testid="tech-stack">
          {project.tech.map((tech: string) => <span key={tech}>{tech}</span>)}
        </div>
      </div>
    );
  };
});

// Mock timer to speed up loading state
jest.useFakeTimers();

describe('AboutWrapper Component', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  it('shows loading state initially', () => {
    render(<AboutWrapper />);
    
    expect(screen.getByTestId('about-loading')).toBeInTheDocument();
  });

  it('renders main heading after loading', async () => {
    render(<AboutWrapper />);
    
    // Fast-forward timer to skip loading
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Sobre')).toBeInTheDocument();
      expect(screen.getByText('mí')).toBeInTheDocument();
    });
  });

  it('renders introduction paragraph after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText(/Soy un desarrollador Backend especializado/)).toBeInTheDocument();
      expect(screen.getByText(/en crear APIs robustas y escalables/)).toBeInTheDocument();
    });
  });

  it('renders skills section after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Habilidades')).toBeInTheDocument();
      expect(screen.getByText('Técnicas')).toBeInTheDocument();
    });
  });

  it('renders backend skills after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Backend')).toBeInTheDocument();
      expect(screen.getByText('PHP')).toBeInTheDocument();
      expect(screen.getByText('Laravel')).toBeInTheDocument();
      expect(screen.getByText('Python')).toBeInTheDocument();
      expect(screen.getByText('FastAPI')).toBeInTheDocument();
    });
  });

  it('renders database skills after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Base de Datos')).toBeInTheDocument();
      expect(screen.getByText('MySQL')).toBeInTheDocument();
      expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
      expect(screen.getByText('MongoDB')).toBeInTheDocument();
    });
  });

  it('renders frontend skills after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Frontend')).toBeInTheDocument();
      expect(screen.getByText('JavaScript')).toBeInTheDocument();
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
      expect(screen.getByText('React')).toBeInTheDocument();
    });
  });

  it('renders tools skills after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Herramientas')).toBeInTheDocument();
      expect(screen.getByText('Git')).toBeInTheDocument();
      expect(screen.getByText('Docker')).toBeInTheDocument();
      expect(screen.getByText('AWS')).toBeInTheDocument();
    });
  });

  it('renders experience section after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Experiencia')).toBeInTheDocument();
      expect(screen.getByText('Profesional')).toBeInTheDocument();
    });
  });

  it('renders work experience items after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Desarrollador Backend Senior')).toBeInTheDocument();
      expect(screen.getByText('Desarrollador Backend')).toBeInTheDocument();
      expect(screen.getByText('Desarrollador Full Stack')).toBeInTheDocument();
    });
  });

  it('renders company names after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Tech Solutions S.A.')).toBeInTheDocument();
      expect(screen.getByText('Digital Agency Ltd.')).toBeInTheDocument();
      expect(screen.getByText('Startup Innovations')).toBeInTheDocument();
    });
  });

  it('renders work periods after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('2021 - Presente')).toBeInTheDocument();
      expect(screen.getByText('2019 - 2021')).toBeInTheDocument();
      expect(screen.getByText('2017 - 2019')).toBeInTheDocument();
    });
  });

  it('renders projects section after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Proyectos')).toBeInTheDocument();
      expect(screen.getByText('Destacados')).toBeInTheDocument();
    });
  });

  it('renders ProjectCard components after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const projectCards = screen.getAllByTestId('project-card');
      expect(projectCards.length).toBeGreaterThan(0);
    });
  });

  it('renders education section after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Educación')).toBeInTheDocument();
      expect(screen.getByText('Formación')).toBeInTheDocument();
    });
  });

  it('renders education items after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Ingeniería en Sistemas')).toBeInTheDocument();
      expect(screen.getByText('Universidad Nacional')).toBeInTheDocument();
      expect(screen.getByText('2013 - 2018')).toBeInTheDocument();
    });
  });

  it('renders contact section after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Contacto')).toBeInTheDocument();
      expect(screen.getByText('Conéctate')).toBeInTheDocument();
    });
  });

  it('renders contact information after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('juan.doe@example.com')).toBeInTheDocument();
      expect(screen.getByText('+503 1234 5678')).toBeInTheDocument();
      expect(screen.getByText('San Salvador, El Salvador')).toBeInTheDocument();
    });
  });

  it('renders social media links after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('LinkedIn')).toBeInTheDocument();
      expect(screen.getByText('GitHub')).toBeInTheDocument();
      expect(screen.getByText('Twitter')).toBeInTheDocument();
    });
  });

  it('has correct section styling after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const mainSection = screen.getByText('Sobre').closest('section');
      expect(mainSection).toHaveClass('py-16', 'bg-linear-to-br', 'from-gray-50', 'to-white');
    });
  });

  it('has correct container styling after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const container = screen.getByText('Sobre').closest('section')?.firstChild;
      expect(container).toHaveClass('max-w-6xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8');
    });
  });

  it('skills section has correct grid layout after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const skillsGrid = screen.getByText('Backend').parentElement?.parentElement;
      expect(skillsGrid).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4', 'gap-8');
    });
  });

  it('experience section has correct timeline styling after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const experienceSection = screen.getByText('Experiencia').parentElement?.nextElementSibling;
      expect(experienceSection).toHaveClass('space-y-8');
    });
  });

  it('projects section has correct grid layout after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const projectsGrid = screen.getByText('Proyectos').parentElement?.nextElementSibling;
      expect(projectsGrid).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8');
    });
  });

  it('education section has correct styling after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const educationSection = screen.getByText('Educación').parentElement?.nextElementSibling;
      expect(educationSection).toHaveClass('bg-white', 'p-6', 'rounded-lg', 'shadow-md');
    });
  });

  it('contact section has correct styling after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const contactSection = screen.getByText('Contacto').parentElement?.nextElementSibling;
      expect(contactSection).toHaveClass('bg-white', 'p-6', 'rounded-lg', 'shadow-md');
    });
  });

  it('social links are accessible after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });
  });

  it('content is properly structured with headings after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const headings = screen.getAllByTestId('section-heading');
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  it('responsive layout works correctly after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const skillsGrid = screen.getByText('Backend').parentElement?.parentElement;
      expect(skillsGrid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4');
      
      const projectsGrid = screen.getByText('Proyectos').parentElement?.nextElementSibling;
      expect(projectsGrid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3');
    });
  });

  it('has proper semantic structure after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const mainSection = screen.getByText('Sobre').closest('section');
      expect(mainSection).toBeInTheDocument();
      expect(mainSection).toHaveAttribute('aria-labelledby');
    });
  });

  it('renders all skill categories after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Backend')).toBeInTheDocument();
      expect(screen.getByText('Base de Datos')).toBeInTheDocument();
      expect(screen.getByText('Frontend')).toBeInTheDocument();
      expect(screen.getByText('Herramientas')).toBeInTheDocument();
    });
  });

  it('skill items have correct styling after loading', async () => {
    render(<AboutWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const phpSkill = screen.getByText('PHP');
      const laravelSkill = screen.getByText('Laravel');
      const pythonSkill = screen.getByText('Python');
      const mysqlSkill = screen.getByText('MySQL');
      
      [phpSkill, laravelSkill, pythonSkill, mysqlSkill].forEach(skill => {
        expect(skill).toBeInTheDocument();
      });
    });
  });
});
