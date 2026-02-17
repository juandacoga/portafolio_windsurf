import React from 'react';

export interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {
  direction?: 'right' | 'left' | 'up' | 'down';
  size?: 'sm' | 'md' | 'lg';
}

const ArrowIcon = React.forwardRef<SVGSVGElement, ArrowIconProps>(
  ({ 
    direction = 'right', 
    size = 'md',
    className = '', 
    ...props 
  }, ref) => {
    const getSizeClasses = () => {
      switch (size) {
        case 'sm':
          return 'w-3 h-3';
        case 'md':
          return 'w-4 h-4';
        case 'lg':
          return 'w-5 h-5';
        default:
          return 'w-4 h-4';
      }
    };

    const getPath = () => {
      switch (direction) {
        case 'right':
          return 'M9 5l7 7-7 7';
        case 'left':
          return 'M15 19l-7-7 7-7';
        case 'up':
          return 'M19 9l-7 7-7-7';
        case 'down':
          return 'M5 15l7-7 7 7';
        default:
          return 'M9 5l7 7-7 7';
      }
    };

    const baseClasses = 'fill-none stroke-current';
    const classes = `${baseClasses} ${getSizeClasses()} ${className}`;

    return (
      <svg
        className={classes}
        ref={ref}
        viewBox="0 0 24 24"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d={getPath()} />
      </svg>
    );
});

ArrowIcon.displayName = 'ArrowIcon';

export default ArrowIcon;
