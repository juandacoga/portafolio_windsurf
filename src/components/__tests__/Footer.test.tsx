import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('renders copyright text correctly', () => {
    render(<Footer />);
    
    const copyright = screen.getByText('© 2024 Portafolio. Todos los derechos reservados.');
    expect(copyright).toBeInTheDocument();
  });

  it('renders social media links correctly', () => {
    render(<Footer />);
    
    expect(screen.getByText('Twitter/X')).toBeInTheDocument();
    expect(screen.getByText('TikTok')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('has correct href attributes for social links', () => {
    render(<Footer />);
    
    expect(screen.getByText('Twitter/X').closest('a')).toHaveAttribute('href', 'https://twitter.com');
    expect(screen.getByText('TikTok').closest('a')).toHaveAttribute('href', 'https://tiktok.com');
    expect(screen.getByText('LinkedIn').closest('a')).toHaveAttribute('href', 'https://linkedin.com');
    expect(screen.getByText('GitHub').closest('a')).toHaveAttribute('href', 'https://github.com');
  });

  it('opens social links in new tabs', () => {
    render(<Footer />);
    
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('applies correct CSS classes to social links', () => {
    render(<Footer />);
    
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveClass('text-gray-500', 'hover:text-gray-900', 'text-sm', 'font-medium', 'transition-colors');
    });
  });

  it('applies correct footer styling', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('bg-gray-50', 'border-t', 'border-gray-200');
  });

  it('applies correct container styling', () => {
    render(<Footer />);
    
    const container = screen.getByRole('contentinfo').firstChild;
    expect(container).toHaveClass('max-w-6xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'py-12');
  });

  it('has correct flex layout for footer content', () => {
    render(<Footer />);
    
    const container = screen.getByRole('contentinfo').firstChild?.firstChild;
    expect(container).toHaveClass('flex', 'flex-col', 'md:flex-row', 'justify-between', 'items-center');
  });

  it('copyright section has correct margin', () => {
    render(<Footer />);
    
    const copyrightSection = screen.getByText('© 2024 Portafolio. Todos los derechos reservados.').parentElement;
    expect(copyrightSection).toHaveClass('mb-6', 'md:mb-0');
  });

  it('social links section has correct spacing', () => {
    render(<Footer />);
    
    const socialSection = screen.getByText('Twitter/X').parentElement;
    expect(socialSection).toHaveClass('flex', 'space-x-8');
  });

  it('copyright text has correct styling', () => {
    render(<Footer />);
    
    const copyright = screen.getByText('© 2024 Portafolio. Todos los derechos reservados.');
    expect(copyright).toHaveClass('text-sm', 'text-gray-600');
  });

  it('footer has semantic role', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('all links are accessible', () => {
    render(<Footer />);
    
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4); // 4 social links
  });

  it('social links are properly grouped', () => {
    render(<Footer />);
    
    const socialSection = screen.getByText('Twitter/X').parentElement;
    expect(socialSection).toHaveClass('flex', 'space-x-8');
  });

  it('responsive layout works correctly', () => {
    render(<Footer />);
    
    const container = screen.getByRole('contentinfo').firstChild?.firstChild;
    expect(container).toHaveClass('flex-col', 'md:flex-row');
  });
});
