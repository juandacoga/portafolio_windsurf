import { render, screen } from '@testing-library/react';
import BlogPostCard from '../BlogPostCard';
import { blogPosts } from '../../data/blogPosts';

// Mock data for testing
const mockPost = blogPosts[0];

describe('BlogPostCard Component', () => {
  it('renders homepage variant correctly', () => {
    render(<BlogPostCard post={mockPost} variant="homepage" />);
    
    const card = screen.getByText(mockPost.title);
    expect(card).toBeInTheDocument();
  });

  it('renders homepage-horizontal variant correctly', () => {
    render(<BlogPostCard post={mockPost} variant="homepage-horizontal" />);
    
    const card = screen.getByText(mockPost.title);
    expect(card).toBeInTheDocument();
  });

  it('renders blogpage variant correctly', () => {
    render(<BlogPostCard post={mockPost} variant="blogpage" />);
    
    const card = screen.getByText(mockPost.title);
    expect(card).toBeInTheDocument();
  });

  it('displays image placeholder', () => {
    render(<BlogPostCard post={mockPost} variant="homepage" />);
    
    const image = screen.getByText('Imagen');
    expect(image).toBeInTheDocument();
  });

  it('has correct link href', () => {
    render(<BlogPostCard post={mockPost} variant="homepage" />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/blog/${mockPost.id}`);
  });

  it('applies featured styles when featured is true', () => {
    render(<BlogPostCard post={mockPost} featured={true} variant="homepage" />);
    
    const card = screen.getByText(mockPost.title).closest('div');
    expect(card).toHaveClass('shadow-md');
  });

  it('applies hover effects', () => {
    render(<BlogPostCard post={mockPost} variant="homepage-horizontal" />);
    
    const card = screen.getByText(mockPost.title).closest('div');
    expect(card).toHaveClass('hover:shadow-lg');
  });
});
