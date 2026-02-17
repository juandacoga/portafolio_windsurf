import React from 'react';
import Container from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'gray-light' | 'gradient';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  as?: 'section' | 'div' | 'main';
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ 
    children, 
    padding = 'lg',
    background = 'white',
    containerSize = 'lg',
    as: Component = 'section',
    className = '', 
    ...props 
  }, ref) => {
    const getPaddingClasses = () => {
      switch (padding) {
        case 'none':
          return '';
        case 'sm':
          return 'py-8';
        case 'md':
          return 'py-12';
        case 'lg':
          return 'py-16';
        case 'xl':
          return 'py-20';
        default:
          return 'py-16';
      }
    };

    const getBackgroundClasses = () => {
      switch (background) {
        case 'white':
          return 'bg-white';
        case 'gray':
          return 'bg-gray-50';
        case 'gray-light':
          return 'bg-gray-100';
        case 'gradient':
          return 'bg-linear-to-br from-gray-50 to-white';
        default:
          return 'bg-white';
      }
    };

    const baseClasses = `${getPaddingClasses()} ${getBackgroundClasses()}`;
    const classes = `${baseClasses} ${className}`;

    return (
      <Component
        className={classes}
        ref={ref}
        {...props}
      >
        <Container size={containerSize}>
          {children}
        </Container>
      </Component>
    );
});

Section.displayName = 'Section';

export default Section;
