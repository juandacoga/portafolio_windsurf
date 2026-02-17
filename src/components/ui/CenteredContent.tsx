import React from 'react';

export interface CenteredContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  gap?: 'none' | 'sm' | 'md' | 'lg';
}

const CenteredContent = React.forwardRef<HTMLDivElement, CenteredContentProps>(
  ({ 
    children, 
    direction = 'horizontal',
    gap = 'none',
    className = '', 
    ...props 
  }, ref) => {
    const getDirectionClasses = () => {
      switch (direction) {
        case 'horizontal':
          return 'flex items-center';
        case 'vertical':
          return 'flex flex-col items-center justify-center';
        default:
          return 'flex items-center';
      }
    };

    const getGapClasses = () => {
      switch (gap) {
        case 'none':
          return '';
        case 'sm':
          return 'gap-2';
        case 'md':
          return 'gap-4';
        case 'lg':
          return 'gap-6';
        default:
          return '';
      }
    };

    const baseClasses = 'justify-center';
    const classes = `${baseClasses} ${getDirectionClasses()} ${getGapClasses()} ${className}`;

    return (
      <div
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
});

CenteredContent.displayName = 'CenteredContent';

export default CenteredContent;
