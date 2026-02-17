import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import HomepageContent from '../HomepageContent';

// Mock components to isolate testing
jest.mock('../BlogPostCard', () => {
  return function MockBlogPostCard({ post, featured, variant }: any) {
    return (
      <div data-testid="blog-post-card" data-featured={featured} data-variant={variant}>
        <h3>{post.title}</h3>
        <p>{post.summary}</p>
        <span data-testid="read-more">Leer más</span>
      </div>
    );
  };
});

jest.mock('../ui/UI', () => ({
  SectionHeading: ({ children }: any) => <h2 data-testid="section-heading">{children}</h2>,
  CLASSES: {
    SECTION_HEADING: 'test-section-heading'
  }
}));

describe('HomepageContent Component', () => {
  it('renders About Me section correctly', () => {
    render(<HomepageContent />);
    
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('mí')).toBeInTheDocument();
  });

  it('renders Blog section correctly', () => {
    render(<HomepageContent />);
    
    expect(screen.getByText('Mi')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('renders About Me section with correct structure', () => {
    render(<HomepageContent />);
    
    const aboutSection = screen.getByText('Sobre').closest('section');
    expect(aboutSection).toBeInTheDocument();
    expect(aboutSection).toHaveClass('py-16', 'bg-linear-to-br', 'from-gray-50', 'to-white');
  });

  it('renders Blog section with correct structure', () => {
    render(<HomepageContent />);
    
    const blogSection = screen.getByText('Blog').closest('section');
    expect(blogSection).toBeInTheDocument();
    expect(blogSection).toHaveClass('py-16', 'bg-white');
  });

  it('renders profile image placeholder', () => {
    render(<HomepageContent />);
    
    expect(screen.getByText('Foto de perfil')).toBeInTheDocument();
  });

  it('profile image has correct styling', () => {
    render(<HomepageContent />);
    
    const profileImage = screen.getByText('Foto de perfil').parentElement;
    expect(profileImage).toHaveClass('w-full', 'h-80', 'bg-linear-to-br', 'from-blue-100', 'to-purple-100', 'rounded-2xl', 'flex', 'items-center', 'justify-center', 'shadow-lg');
  });

  it('renders JD badge on profile image', () => {
    render(<HomepageContent />);
    
    const badge = screen.getByText('JD');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('absolute', '-bottom-4', '-right-4', 'w-24', 'h-24', 'bg-blue-600', 'rounded-full', 'flex', 'items-center', 'justify-center', 'text-white', 'font-bold', 'text-xl', 'shadow-lg');
  });

  it('renders About Me content correctly', () => {
    render(<HomepageContent />);
    
    expect(screen.getByText(/Soy un desarrollador Backend especializado/)).toBeInTheDocument();
    expect(screen.getByText(/PHP, Laravel y conocimientos en Python/)).toBeInTheDocument();
    expect(screen.getByText(/construir arquitecturas de servidor eficientes y seguras/)).toBeInTheDocument();
  });

  it('renders "Ver más" link in About Me section', () => {
    render(<HomepageContent />);
    
    const link = screen.getByText('Ver más');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/about');
  });

  it('renders Blog section description', () => {
    render(<HomepageContent />);
    
    expect(screen.getByText(/Comparto mis experiencias, aprendizajes y mejores prácticas/)).toBeInTheDocument();
    expect(screen.getByText(/desarrollo Backend, arquitectura de software y optimización de APIs/)).toBeInTheDocument();
  });

  it('renders BlogPostCard components', () => {
    render(<HomepageContent />);
    
    const blogCards = screen.getAllByTestId('blog-post-card');
    expect(blogCards.length).toBeGreaterThan(0);
  });

  it('renders featured blog post correctly', () => {
    render(<HomepageContent />);
    
    const featuredCard = screen.getAllByTestId('blog-post-card').find(
      card => card.getAttribute('data-featured') === 'true'
    );
    expect(featuredCard).toBeInTheDocument();
  });

  it('renders other blog posts correctly', () => {
    render(<HomepageContent />);
    
    const regularCards = screen.getAllByTestId('blog-post-card').filter(
      card => card.getAttribute('data-featured') === 'false'
    );
    expect(regularCards.length).toBeGreaterThan(0);
  });

  it('Blog section has correct container styling', () => {
    render(<HomepageContent />);
    
    const blogContainer = screen.getByText('Mi').closest('section')?.firstChild;
    expect(blogContainer).toHaveClass('max-w-6xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8');
  });

  it('Blog section has correct text center styling', () => {
    render(<HomepageContent />);
    
    const textCenter = screen.getByText('Mi').parentElement;
    expect(textCenter).toHaveClass('text-center', 'mb-16');
  });

  it('Blog section grid layout is correct', () => {
    render(<HomepageContent />);
    
    const blogGrid = screen.getByText('Mi').parentElement?.nextElementSibling as HTMLElement;
    expect(blogGrid).toHaveClass('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-12');
  });

  it('About Me section has correct container styling', () => {
    render(<HomepageContent />);
    
    const aboutContainer = screen.getByText('Sobre').closest('section')?.firstChild;
    expect(aboutContainer).toHaveClass('max-w-6xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8');
  });

  it('About Me section has correct grid layout', () => {
    render(<HomepageContent />);
    
    const aboutGrid = screen.getByText('Sobre').closest('section')?.firstChild?.firstChild as HTMLElement;
    expect(aboutGrid).toHaveClass('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-16', 'items-center');
  });

  it('renders "Últimos posts" heading', () => {
    render(<HomepageContent />);
    
    expect(screen.getByText('Últimos posts')).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<HomepageContent />);
    
    // Check for sections using semantic HTML5 elements
    const aboutSection = screen.getByText('Sobre').closest('section');
    const blogSection = screen.getByText('Blog').closest('section');
    
    expect(aboutSection).toBeInTheDocument();
    expect(blogSection).toBeInTheDocument();
  });

  it('links are accessible', () => {
    render(<HomepageContent />);
    
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('content is properly structured with paragraphs', () => {
    render(<HomepageContent />);
    
    const paragraphs = screen.getAllByText(/Soy un desarrollador|Mi enfoque se centra|Disfruto trabajando/);
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  it('gradient backgrounds are applied correctly', () => {
    render(<HomepageContent />);
    
    const aboutSection = screen.getByText('Sobre').closest('section');
    expect(aboutSection).toHaveClass('bg-linear-to-br', 'from-gray-50', 'to-white');
    
    const profileImage = screen.getByText('Foto de perfil').parentElement;
    expect(profileImage).toHaveClass('bg-linear-to-br', 'from-blue-100', 'to-purple-100');
  });

  it('responsive layout works correctly', () => {
    render(<HomepageContent />);
    
    const aboutGrid = screen.getByText('Sobre').closest('section')?.firstChild?.firstChild as HTMLElement;
    expect(aboutGrid).toHaveClass('grid-cols-1', 'lg:grid-cols-2');
    
    const blogGrid = screen.getByText('Mi').parentElement?.nextElementSibling as HTMLElement;
    expect(blogGrid).toHaveClass('grid-cols-1', 'lg:grid-cols-2');
  });
});
