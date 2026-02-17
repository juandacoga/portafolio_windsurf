import React from 'react';

export interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>(
  ({ children, className = '', ...props }, ref) => {
    const baseClasses = 'min-h-screen flex flex-col';
    const classes = `${baseClasses} ${className}`;

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

PageLayout.displayName = 'PageLayout';

export default PageLayout;
