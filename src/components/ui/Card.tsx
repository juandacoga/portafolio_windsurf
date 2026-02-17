import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className = '', 
    variant = 'default', 
    padding = 'md', 
    hover = true,
    children, 
    ...props 
  }, ref) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined':
        return 'border border-gray-200 bg-white';
      case 'elevated':
        return 'bg-white shadow-lg';
      default:
        return 'bg-white shadow-sm';
    }
  };

  const getPaddingClasses = () => {
    switch (padding) {
      case 'none':
        return '';
      case 'sm':
        return 'p-4';
      case 'md':
        return 'p-6';
      case 'lg':
        return 'p-8';
      default:
        return 'p-6';
    }
  };

  const baseClasses = 'rounded-lg transition-all duration-200';
  const hoverClasses = hover ? 'hover:shadow-md hover:border-gray-300' : '';
  
  const classes = `${baseClasses} ${getVariantClasses()} ${getPaddingClasses()} ${hoverClasses} ${className}`;

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

Card.displayName = 'Card';

export default Card;
