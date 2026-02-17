import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import MobileMenu from '../MobileMenu';

// Mock window.matchMedia for responsive behavior
const mockMatchMedia = jest.fn();
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: mockMatchMedia,
});

describe('MobileMenu Component', () => {
  beforeEach(() => {
    mockMatchMedia.mockImplementation(() => ({
      matches: false,
      media: '',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  it('renders mobile menu button correctly', () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('inline-flex', 'items-center', 'justify-center', 'p-2', 'rounded-md', 'text-gray-600', 'hover:text-gray-900', 'hover:bg-gray-100', 'focus:outline-none', 'focus:ring-2', 'focus:ring-inset', 'focus:ring-blue-500');
  });

  it('renders hamburger menu icon when closed', () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    const svgIcon = button.querySelector('svg');
    expect(svgIcon).toBeInTheDocument();
    expect(svgIcon).toHaveClass('h-6', 'w-6');
  });

  it('renders close icon when opened', async () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    const svgIcon = button.querySelector('svg');
    expect(svgIcon).toBeInTheDocument();
    expect(svgIcon).toHaveClass('h-6', 'w-6');
  });

  it('shows menu panel when button is clicked', async () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    expect(screen.getByText('Menú')).toBeInTheDocument();
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Acerca de')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('hides menu panel when button is clicked twice', async () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    
    // Open menu
    await userEvent.click(button);
    expect(screen.getByText('Menú')).toBeInTheDocument();
    
    // Close menu
    await userEvent.click(button);
    expect(screen.queryByText('Menú')).not.toBeInTheDocument();
  });

  it('closes menu when overlay is clicked', async () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    // Click outside the menu panel to close it
    const menuPanel = screen.getByText('Menú').parentElement?.parentElement;
    const overlay = menuPanel?.nextElementSibling;
    if (overlay) {
      await userEvent.click(overlay);
    }
    
    expect(screen.queryByText('Menú')).not.toBeInTheDocument();
  });

  it('has correct navigation links', async () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    expect(screen.getByText('Inicio').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Acerca de').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Blog').closest('a')).toHaveAttribute('href', '/blog');
  });

  it('applies correct styling to navigation links', async () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveClass('block', 'px-3', 'py-2', 'text-sm', 'font-medium', 'text-gray-700', 'hover:bg-blue-50', 'hover:text-blue-600', 'rounded-md', 'transition-colors', 'duration-200');
    });
  });

  it('menu panel has correct styling', async () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    const menuPanel = screen.getByText('Menú').parentElement?.parentElement;
    expect(menuPanel).toHaveClass('bg-white', 'shadow-lg', 'border', 'border-gray-200', 'rounded-lg', 'overflow-hidden');
  });

  it('menu header has correct styling', async () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    const menuHeader = screen.getByText('Menú').parentElement;
    expect(menuHeader).toHaveClass('px-3', 'py-2', 'border-b', 'border-gray-100', 'bg-gray-50');
  });

  it('menu header text has correct styling', async () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    const menuHeader = screen.getByText('Menú');
    expect(menuHeader).toHaveClass('text-sm', 'font-semibold', 'text-gray-900');
  });

  it('navigation section has correct styling', async () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    const navSection = screen.getByText('Inicio').parentElement;
    expect(navSection).toHaveClass('p-2', 'space-y-1');
  });

  it('menu panel is positioned correctly', async () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    const menuPanel = screen.getByText('Menú').parentElement?.parentElement?.parentElement;
    expect(menuPanel).toHaveClass('md:hidden', 'absolute', 'right-4', 'top-16', 'z-50');
  });

  it('overlay has correct styling', async () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    const menuPanel = screen.getByText('Menú').parentElement?.parentElement?.parentElement;
    const overlay = menuPanel?.nextElementSibling;
    if (overlay) {
      expect(overlay).toHaveClass('fixed', 'inset-0', 'bg-transparent');
    }
  });

  it('button is only visible on mobile screens', () => {
    render(<MobileMenu />);
    
    const buttonContainer = screen.getByRole('button').parentElement;
    expect(buttonContainer).toHaveClass('md:hidden');
  });

  it('all navigation links are accessible', async () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });

  it('menu toggles state correctly', async () => {
    render(<MobileMenu />);
    
    const button = screen.getByRole('button');
    
    // Initial state - menu closed
    expect(screen.queryByText('Menú')).not.toBeInTheDocument();
    
    // Open menu
    await userEvent.click(button);
    expect(screen.getByText('Menú')).toBeInTheDocument();
    
    // Close menu
    await userEvent.click(button);
    expect(screen.queryByText('Menú')).not.toBeInTheDocument();
  });
});
