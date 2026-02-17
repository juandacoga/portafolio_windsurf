import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImagePlaceholder from '../ui/ImagePlaceholder';

describe('ImagePlaceholder Component', () => {
  it('renders with default props', () => {
    render(<ImagePlaceholder />);
    
    const placeholder = screen.getByText('Imagen');
    expect(placeholder).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(<ImagePlaceholder text="Custom Content" />);
    
    const customContent = screen.getByText('Custom Content');
    expect(customContent).toBeInTheDocument();
  });

  it('applies default rounded classes', () => {
    render(<ImagePlaceholder />);
    
    const placeholder = screen.getByText('Imagen').parentElement;
    expect(placeholder).toHaveClass('rounded-lg');
  });

  it('applies sm rounded variant', () => {
    render(<ImagePlaceholder rounded="sm" />);
    
    const placeholder = screen.getByText('Imagen').parentElement;
    expect(placeholder).toHaveClass('rounded-sm');
  });

  it('applies md rounded variant', () => {
    render(<ImagePlaceholder rounded="md" />);
    
    const placeholder = screen.getByText('Imagen').parentElement;
    expect(placeholder).toHaveClass('rounded-md');
  });

  it('applies lg rounded variant', () => {
    render(<ImagePlaceholder rounded="lg" />);
    
    const placeholder = screen.getByText('Imagen').parentElement;
    expect(placeholder).toHaveClass('rounded-lg');
  });

  it('applies none rounded variant', () => {
    render(<ImagePlaceholder rounded="none" />);
    
    const placeholder = screen.getByText('Imagen').parentElement;
    expect(placeholder).toHaveClass('rounded-none');
  });

  it('applies full rounded variant', () => {
    render(<ImagePlaceholder rounded="full" />);
    
    const placeholder = screen.getByText('Imagen').parentElement;
    expect(placeholder).toHaveClass('rounded-full');
  });

  it('applies custom className', () => {
    render(<ImagePlaceholder className="custom-class" />);
    
    const placeholder = screen.getByText('Imagen').parentElement;
    expect(placeholder).toHaveClass('custom-class');
  });

  it('applies gradient background', () => {
    render(<ImagePlaceholder />);
    
    const placeholder = screen.getByText('Imagen').parentElement;
    expect(placeholder).toHaveClass('bg-linear-to-br', 'from-blue-100', 'to-purple-100');
  });

  it('centers content', () => {
    render(<ImagePlaceholder />);
    
    const placeholder = screen.getByText('Imagen').parentElement;
    expect(placeholder).toHaveClass('flex', 'items-center', 'justify-center');
  });

  it('applies small size', () => {
    render(<ImagePlaceholder size="small" />);
    
    const placeholder = screen.getByText('Imagen').parentElement;
    expect(placeholder).toHaveClass('w-16', 'h-16');
  });

  it('applies medium size', () => {
    render(<ImagePlaceholder size="medium" />);
    
    const placeholder = screen.getByText('Imagen').parentElement;
    expect(placeholder).toHaveClass('w-20', 'h-20');
  });

  it('applies large size', () => {
    render(<ImagePlaceholder size="large" />);
    
    const placeholder = screen.getByText('Imagen').parentElement;
    expect(placeholder).toHaveClass('w-full', 'h-48');
  });

  it('applies hero size', () => {
    render(<ImagePlaceholder size="hero" />);
    
    const placeholder = screen.getByText('Imagen').parentElement;
    expect(placeholder).toHaveClass('w-full', 'h-64', 'lg:h-80');
  });

  it('applies profile size', () => {
    render(<ImagePlaceholder size="profile" />);
    
    const placeholder = screen.getByText('Imagen').parentElement;
    expect(placeholder).toHaveClass('w-full', 'h-80');
  });

  it('applies talk size', () => {
    render(<ImagePlaceholder size="talk" />);
    
    const placeholder = screen.getByText('Imagen').parentElement;
    expect(placeholder).toHaveClass('w-full', 'md:w-32', 'h-24');
  });

  it('applies correct text size for small', () => {
    render(<ImagePlaceholder size="small" />);
    
    const text = screen.getByText('Imagen');
    expect(text).toHaveClass('text-xs');
  });

  it('applies correct text size for medium', () => {
    render(<ImagePlaceholder size="medium" />);
    
    const text = screen.getByText('Imagen');
    expect(text).toHaveClass('text-sm');
  });

  it('applies correct text size for large', () => {
    render(<ImagePlaceholder size="large" />);
    
    const text = screen.getByText('Imagen');
    expect(text).toHaveClass('text-base');
  });

  it('applies correct text size for profile', () => {
    render(<ImagePlaceholder size="profile" />);
    
    const text = screen.getByText('Imagen');
    expect(text).toHaveClass('text-lg');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    
    render(<ImagePlaceholder ref={ref} />);
    
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('spreads additional props', () => {
    render(<ImagePlaceholder data-testid="custom-placeholder" />);
    
    const placeholder = screen.getByTestId('custom-placeholder');
    expect(placeholder).toBeInTheDocument();
  });
});
