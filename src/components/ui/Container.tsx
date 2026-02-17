import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className = '', size = 'lg', ...props }, ref) => {
    const getSizeClasses = () => {
      switch (size) {
        case 'sm':
          return 'max-w-2xl';
        case 'md':
          return 'max-w-4xl';
        case 'lg':
          return 'max-w-6xl';
        case 'xl':
          return 'max-w-7xl';
        case 'full':
          return 'max-w-full';
        default:
          return 'max-w-6xl';
      }
    };

    const baseClasses = 'mx-auto px-4 sm:px-6 lg:px-8';
    const classes = `${baseClasses} ${getSizeClasses()} ${className}`;

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

Container.displayName = 'Container';

export default Container;
