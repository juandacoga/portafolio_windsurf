import React from 'react';

export interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  size?: 'small' | 'medium' | 'large' | 'hero' | 'profile' | 'talk';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

const ImagePlaceholder = React.forwardRef<HTMLDivElement, ImagePlaceholderProps>(
  ({ 
    text = 'Imagen', 
    size = 'medium', 
    rounded = 'lg',
    className = '', 
    ...props 
  }, ref) => {
    const getSizeClasses = () => {
      switch (size) {
        case 'small':
          return 'w-16 h-16';
        case 'medium':
          return 'w-20 h-20';
        case 'large':
          return 'w-full h-48';
        case 'hero':
          return 'w-full h-64 lg:h-80';
        case 'profile':
          return 'w-full h-80';
        case 'talk':
          return 'w-full md:w-32 h-24';
        default:
          return 'w-20 h-20';
      }
    };

    const getRoundedClasses = () => {
      switch (rounded) {
        case 'none':
          return 'rounded-none';
        case 'sm':
          return 'rounded-sm';
        case 'md':
          return 'rounded-md';
        case 'lg':
          return 'rounded-lg';
        case 'full':
          return 'rounded-full';
        default:
          return 'rounded-lg';
      }
    };

    const getTextSizeClasses = () => {
      switch (size) {
        case 'small':
          return 'text-xs';
        case 'medium':
          return 'text-sm';
        case 'large':
        case 'hero':
          return 'text-base';
        case 'profile':
          return 'text-lg';
        case 'talk':
          return 'text-xs';
        default:
          return 'text-sm';
      }
    };

    const baseClasses = 'bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center';
    const classes = `${baseClasses} ${getSizeClasses()} ${getRoundedClasses()} ${className}`;

    return (
      <div
        className={classes}
        ref={ref}
        {...props}
      >
        <span className={`text-gray-600 ${getTextSizeClasses()} font-medium`}>
          {text}
        </span>
      </div>
    );
});

ImagePlaceholder.displayName = 'ImagePlaceholder';

export default ImagePlaceholder;
