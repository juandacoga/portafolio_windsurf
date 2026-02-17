import React from 'react';
import Link from 'next/link';

// Layout Components
export const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

Container.displayName = 'Container';

export const PageLayout = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`min-h-screen flex flex-col ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

PageLayout.displayName = 'PageLayout';

// Element Components
export const ImagePlaceholder = React.forwardRef<HTMLDivElement, {
  text?: string;
  size?: 'small' | 'medium' | 'large' | 'hero' | 'profile' | 'talk';
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>>(
  ({ text = 'Imagen', size = 'medium', className = '', ...props }, ref) => {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-20 h-20',
    large: 'w-full h-48',
    hero: 'w-full h-64 lg:h-80',
    profile: 'w-full h-80',
    talk: 'w-full md:w-32 h-24'
  };

  return (
    <div
      ref={ref}
      className={`${sizeClasses[size]} bg-linear-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center ${className}`}
      {...props}
    >
      <span className="text-gray-600 text-sm font-medium">{text}</span>
    </div>
  );
});

ImagePlaceholder.displayName = 'ImagePlaceholder';

export const LinkButton = React.forwardRef<HTMLAnchorElement, {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ href, children, variant = 'secondary', size = 'md', className = '', ...props }, ref) => {
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <Link
      ref={ref}
      href={href as any}
      className={`inline-flex items-center font-medium rounded-lg transition-colors duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
      <ArrowIcon className="ml-1" />
    </Link>
  );
});

LinkButton.displayName = 'LinkButton';

export const ArrowIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={`w-4 h-4 fill-none stroke-current ${className}`}
    viewBox="0 0 24 24"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 5l7 7-7 7" />
  </svg>
);

// Utility Classes
export const CLASSES = {
  CENTERED: 'flex items-center justify-center',
  BUTTON: 'inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200',
  GRADIENT: 'bg-linear-to-br from-blue-100 to-purple-100',
  SECTION: 'py-16 bg-white',
  SECTION_GRAY: 'py-16 bg-gray-50'
} as const;

// Consolidated UI object
export const UI = {
  Container,
  PageLayout,
  ImagePlaceholder,
  LinkButton,
  ArrowIcon,
  CLASSES
};
