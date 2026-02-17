import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { createMockProject } from '../../test-utils';
import ProjectCard from '../ProjectCard';

describe('ProjectCard Component', () => {
  const mockProject = createMockProject();

  it('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
    expect(screen.getByText(mockProject.tech[0])).toBeInTheDocument();
  });

  it('displays placeholder text when no image', () => {
    render(<ProjectCard project={mockProject} />);
    
    const placeholder = screen.getByText('Proyecto');
    expect(placeholder).toBeInTheDocument();
  });

  it('shows demo button when demoUrl is provided', () => {
    render(<ProjectCard project={mockProject} />);
    
    const demoButton = screen.getByText('Demo');
    expect(demoButton).toBeInTheDocument();
    expect(demoButton.closest('a')).toHaveAttribute('href', mockProject.demoUrl);
  });

  it('shows disabled demo button when no demoUrl', () => {
    const projectWithoutDemo = { ...mockProject, demoUrl: undefined };
    render(<ProjectCard project={projectWithoutDemo} />);
    
    const disabledButton = screen.getByText('Demo');
    expect(disabledButton).toBeDisabled();
  });

  it('shows github button when githubUrl is provided', () => {
    render(<ProjectCard project={mockProject} />);
    
    const githubButton = screen.getByText('GitHub');
    expect(githubButton).toBeInTheDocument();
    expect(githubButton.closest('a')).toHaveAttribute('href', mockProject.githubUrl);
  });

  it('shows disabled github button when no githubUrl', () => {
    const projectWithoutGithub = { ...mockProject, githubUrl: undefined };
    render(<ProjectCard project={projectWithoutGithub} />);
    
    const disabledButton = screen.getByText('GitHub');
    expect(disabledButton).toBeDisabled();
  });

  it('displays tech stack badges', () => {
    render(<ProjectCard project={mockProject} />);
    
    mockProject.tech.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('limits tech stack display to 2 items', () => {
    const projectWithManyTech = {
      ...mockProject,
      tech: ['React', 'TypeScript', 'Node.js', 'MongoDB']
    };
    render(<ProjectCard project={projectWithManyTech} />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.queryByText('Node.js')).not.toBeInTheDocument();
    expect(screen.queryByText('MongoDB')).not.toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    render(<ProjectCard project={mockProject} />);
    
    const card = screen.getByText(mockProject.title).closest('div')?.parentElement;
    expect(card).toHaveClass('group', 'h-full', 'flex', 'flex-col');
  });

  it('shows "Ver Demo" text on hover when demoUrl exists', () => {
    render(<ProjectCard project={mockProject} />);
    
    const hoverText = screen.getByText('Ver Demo');
    expect(hoverText).toBeInTheDocument();
  });

  it('opens demo link in new tab', () => {
    render(<ProjectCard project={mockProject} />);
    
    const demoLink = screen.getByText('Demo').closest('a');
    expect(demoLink).toHaveAttribute('target', '_blank');
    expect(demoLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('opens github link in new tab', () => {
    render(<ProjectCard project={mockProject} />);
    
    const githubLink = screen.getByText('GitHub').closest('a');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has correct aspect ratio for image area', () => {
    render(<ProjectCard project={mockProject} />);
    
    const imageArea = screen.getByText('Proyecto').closest('div')?.parentElement;
    expect(imageArea).toHaveClass('aspect-video');
  });

  it('applies gradient background to placeholder', () => {
    render(<ProjectCard project={mockProject} />);
    
    const placeholder = screen.getByText('Proyecto').closest('div')?.parentElement;
    expect(placeholder).toHaveClass('bg-linear-to-br', 'from-blue-100', 'to-purple-100');
  });

  it('truncates title with line-clamp', () => {
    const longTitleProject = {
      ...mockProject,
      title: 'This is a very long project title that should be truncated with line clamp'
    };
    render(<ProjectCard project={longTitleProject} />);
    
    const title = screen.getByText(longTitleProject.title);
    expect(title).toHaveClass('line-clamp-2');
  });

  it('truncates description with line-clamp', () => {
    const longDescProject = {
      ...mockProject,
      description: 'This is a very long description that should be truncated with line clamp to ensure consistent card heights across all projects in the grid layout.'
    };
    render(<ProjectCard project={longDescProject} />);
    
    const description = screen.getByText(longDescProject.description);
    expect(description).toHaveClass('line-clamp-3');
  });
});
