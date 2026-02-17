import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Header from '../Header';

// Mock MobileMenu component
jest.mock('../MobileMenu', () => {
  return function MockMobileMenu() {
    return <div data-testid="mobile-menu">Mobile Menu</div>;
  };
});

describe('Header Component', () => {
  it('renders portfolio brand correctly', () => {
    render(<Header />);
    
    const brandLink = screen.getByText('Portafolio');
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveAttribute('href', '/');
  });

  it('renders navigation links correctly', () => {
    render(<Header />);
    
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Acerca de')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('has correct href attributes for navigation links', () => {
    render(<Header />);
    
    expect(screen.getByText('Inicio').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Acerca de').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Blog').closest('a')).toHaveAttribute('href', '/blog');
  });

  it('applies correct CSS classes to navigation links', () => {
    render(<Header />);
    
    const inicioLink = screen.getByText('Inicio').closest('a');
    const acercaLink = screen.getByText('Acerca de').closest('a');
    const blogLink = screen.getByText('Blog').closest('a');
    
    [inicioLink, acercaLink, blogLink].forEach(link => {
      expect(link).toHaveClass('text-gray-600', 'hover:text-gray-900', 'px-3', 'py-2', 'text-sm', 'font-medium', 'transition-colors', 'duration-200');
    });
  });

  it('renders mobile menu component', () => {
    render(<Header />);
    
    const mobileMenu = screen.getByTestId('mobile-menu');
    expect(mobileMenu).toBeInTheDocument();
  });

  it('hides desktop menu on small screens', () => {
    render(<Header />);
    
    const desktopMenu = screen.getByText('Inicio').closest('div')?.parentElement;
    expect(desktopMenu).toHaveClass('hidden', 'md:block');
  });

  it('shows mobile menu on small screens', () => {
    render(<Header />);
    
    const mobileMenuContainer = screen.getByTestId('mobile-menu').parentElement;
    expect(mobileMenuContainer).toHaveClass('md:hidden');
  });

  it('applies correct header styling', () => {
    render(<Header />);
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('sticky', 'top-0', 'z-40', 'backdrop-blur-lg', 'bg-white/90', 'border-b', 'border-gray-200');
  });

  it('applies correct nav container styling', () => {
    render(<Header />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('max-w-6xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8');
  });

  it('has correct flex layout for header content', () => {
    render(<Header />);
    
    const headerContent = screen.getByText('Portafolio').parentElement?.parentElement;
    expect(headerContent).toHaveClass('flex', 'justify-between', 'items-center', 'h-16');
  });

  it('brand link has hover effect', () => {
    render(<Header />);
    
    const brandLink = screen.getByText('Portafolio');
    expect(brandLink).toHaveClass('text-xl', 'font-bold', 'text-gray-900', 'hover:text-blue-600', 'transition-colors', 'duration-200');
  });

  it('brand is in shrink-0 container', () => {
    render(<Header />);
    
    const brandContainer = screen.getByText('Portafolio').parentElement;
    expect(brandContainer).toHaveClass('shrink-0');
  });

  it('navigation links are properly grouped', () => {
    render(<Header />);
    
    const navGroup = screen.getByText('Inicio').closest('div');
    expect(navGroup).toHaveClass('ml-10', 'flex', 'items-baseline', 'space-x-8');
  });

  it('header has semantic role', () => {
    render(<Header />);
    
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('nav has semantic role', () => {
    render(<Header />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('all links are accessible', () => {
    render(<Header />);
    
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4); // Brand + 3 nav links
  });
});
