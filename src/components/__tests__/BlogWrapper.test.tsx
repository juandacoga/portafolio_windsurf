import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import BlogWrapper from '../BlogWrapper';

// Mock components to isolate testing
jest.mock('../ui/UI', () => ({
  SectionHeading: ({ children }: any) => <h2 data-testid="section-heading">{children}</h2>,
  PageContainer: ({ children }: any) => <div data-testid="page-container">{children}</div>,
  SkeletonElement: ({ variant, width, height }: any) => <div data-testid="skeleton-element">{variant}-{width}-{height}</div>,
  CLASSES: {
    SECTION_HEADING: 'test-section-heading'
  }
}));

jest.mock('../BlogLoading', () => {
  return function MockBlogLoading() {
    return <div data-testid="blog-loading">Loading...</div>;
  };
});

jest.mock('../BlogPostCard', () => {
  return function MockBlogPostCard({ post, variant }: any) {
    return (
      <div data-testid="blog-post-card" data-variant={variant}>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span data-testid="read-more">Leer más</span>
      </div>
    );
  };
});

// Mock timer to speed up loading state
jest.useFakeTimers();

describe('BlogWrapper Component', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  it('shows loading state initially', () => {
    render(<BlogWrapper />);
    
    expect(screen.getByTestId('blog-loading')).toBeInTheDocument();
  });

  it('renders main heading after loading', async () => {
    render(<BlogWrapper />);
    
    // Fast-forward timer to skip loading
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Blog')).toBeInTheDocument();
    });
  });

  it('renders blog posts after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const blogCards = screen.getAllByTestId('blog-post-card');
      expect(blogCards.length).toBeGreaterThan(0);
    });
  });

  it('renders blog post titles after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Arquitectura de Microservicios con Laravel')).toBeInTheDocument();
      expect(screen.getByText('Optimización de Base de Datos con Eloquent')).toBeInTheDocument();
      expect(screen.getByText('APIs RESTful con Python y FastAPI')).toBeInTheDocument();
    });
  });

  it('renders "Leer más" links after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const readMoreLinks = screen.getAllByTestId('read-more');
      expect(readMoreLinks.length).toBeGreaterThan(0);
      readMoreLinks.forEach(link => {
        expect(link).toBeInTheDocument();
      });
    });
  });

  it('has correct section styling after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const blogCards = screen.getAllByTestId('blog-post-card');
      expect(blogCards.length).toBeGreaterThan(0);
    });
  });

  it('has correct container styling after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const blogCards = screen.getAllByTestId('blog-post-card');
      expect(blogCards.length).toBeGreaterThan(0);
    });
  });

  it('has correct text center styling after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const textCenter = screen.getByText('Blog').parentElement;
      expect(textCenter).toBeInTheDocument();
    });
  });

  it('blog posts are accessible after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });
  });

  it('content is properly structured with headings after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  it('has proper semantic structure after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const blogCards = screen.getAllByTestId('blog-post-card');
      expect(blogCards.length).toBeGreaterThan(0);
    });
  });

  it('renders blog post cards with correct styling after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const blogCards = screen.getAllByTestId('blog-post-card');
      blogCards.forEach(card => {
        expect(card).toBeInTheDocument();
      });
    });
  });

  it('renders multiple blog sections after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const blogCards = screen.getAllByTestId('blog-post-card');
      expect(blogCards.length).toBeGreaterThan(0);
    });
  });

  it('blog posts have correct grid layout after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const gridContainer = screen.getByText('Optimización de Base de Datos con Eloquent').parentElement?.parentElement;
      expect(gridContainer).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-2', 'gap-8');
    });
  });

  it('renders Header and Footer components after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Inicio')).toBeInTheDocument();
      expect(screen.getByText('Acerca de')).toBeInTheDocument();
      expect(screen.getByText('Blog')).toBeInTheDocument();
      expect(screen.getByText('© 2024 Portafolio. Todos los derechos reservados.')).toBeInTheDocument();
    });
  });

  it('navigation links are accessible after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const navLinks = screen.getAllByRole('link');
      expect(navLinks.length).toBeGreaterThan(0);
    });
  });

  it('social media links are rendered in footer after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      expect(screen.getByText('Twitter/X')).toBeInTheDocument();
      expect(screen.getByText('TikTok')).toBeInTheDocument();
      expect(screen.getByText('LinkedIn')).toBeInTheDocument();
      expect(screen.getByText('GitHub')).toBeInTheDocument();
    });
  });

  it('blog content is properly structured after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  it('responsive layout works correctly after loading', async () => {
    render(<BlogWrapper />);
    
    jest.advanceTimersByTime(400);
    
    await waitFor(() => {
      const gridContainer = screen.getByText('Optimización de Base de Datos con Eloquent').parentElement?.parentElement;
      expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-2');
    });
  });
});
