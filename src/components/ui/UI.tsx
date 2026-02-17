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

export const PageContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
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

PageContainer.displayName = 'PageContainer';

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

// Content Components
export const ImagePlaceholder = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { rounded?: 'sm' | 'md' | 'lg' | 'none' | 'full' | '2xl'; }>(
  ({ children, rounded = 'lg', className = '', ...props }, ref) => {
    const roundedClasses = {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      none: '',
      full: 'rounded-full',
      '2xl': 'rounded-2xl'
    };

    return (
      <div
        ref={ref}
        className={`bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center ${roundedClasses[rounded]} ${className}`}
        {...props}
      >
        {children || <span className="text-gray-600 text-sm font-medium">Imagen</span>}
      </div>
    );
  }
);

ImagePlaceholder.displayName = 'ImagePlaceholder';

// Heading Components
export const SectionHeading = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
}>(
  ({ children, as: Tag = 'h2', size = 'lg', centered = true, className = '', ...props }, ref) => {
    const sizeClasses = {
      sm: 'text-2xl',
      md: 'text-3xl',
      lg: 'text-3xl md:text-4xl',
      xl: 'text-4xl md:text-5xl'
    };

    return (
      <Tag
        ref={ref}
        className={`font-bold text-gray-900 mb-12 ${sizeClasses[size]} ${centered ? 'text-center' : ''} ${className}`}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

SectionHeading.displayName = 'SectionHeading';

// Skeleton Components
export const SkeletonElement = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string;
  height?: string;
}>(
  ({ children, variant = 'rectangular', width = 'w-full', height = 'h-4', className = '', ...props }, ref) => {
    const variantClasses = {
      text: 'rounded',
      circular: 'rounded-full',
      rectangular: 'rounded-lg'
    };

    return (
      <div
        ref={ref}
        className={`bg-gray-200 animate-pulse ${variantClasses[variant]} ${width} ${height} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SkeletonElement.displayName = 'SkeletonElement';

// Button Components
export const LinkButton = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}>(
  ({ children, variant = 'primary', size = 'md', className = '', href, ...props }, ref) => {
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
  }
);

LinkButton.displayName = 'LinkButton';

export const DisabledButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg';
}>(
  ({ children, size = 'sm', className = '', ...props }, ref) => {
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base'
    };

    return (
      <button
        ref={ref}
        disabled
        className={`flex-1 text-center ${sizeClasses[size]} bg-gray-300 text-gray-500 font-medium rounded cursor-not-allowed transition-colors duration-200 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

DisabledButton.displayName = 'DisabledButton';

// Icon Components
export const ArrowIcon = ({ className = '', ...props }: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    {...props}
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
  SECTION_GRAY: 'py-16 bg-gray-50',
  CARD_BASE: 'bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200',
  BUTTON_DISABLED: 'flex-1 text-center px-3 py-1.5 bg-gray-300 text-gray-500 text-xs font-medium rounded cursor-not-allowed',
  SKELETON_BASE: 'bg-gray-200 animate-pulse',
  HEADING_SECTION: 'text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center'
} as const;

// Consolidated UI object
export const UI = {
  Container,
  PageContainer,
  PageLayout,
  ImagePlaceholder,
  SectionHeading,
  SkeletonElement,
  LinkButton,
  DisabledButton,
  ArrowIcon,
  CLASSES
};
