// --- File: components/Button.tsx ---
import React from 'react';
import Link from 'next/link'; // Import Next.js Link

// Define Button Props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  href?: string; // For link buttons
  asChild?: boolean; // For wrapping custom components with Link styles
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, onClick, variant = 'primary', size = 'default', className = '', href, type = 'button', asChild = false, ...props }, ref) => {
    const BRAND_COLOR = 'red'; // Define brand color centrally if possible
    // Base styles using Tailwind classes - relies on globals.css and tailwind.config.js
    const baseStyle = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background whitespace-nowrap";

    // Define styles for different variants
    // These classes use the CSS variables defined in styles/globals.css
    // and configured in tailwind.config.js
    const variants = {
        primary: `bg-primary text-primary-foreground hover:bg-primary/90`, // Uses --primary variables
        secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/90`, // Uses --secondary variables
        outline: `border border-primary bg-transparent hover:bg-accent hover:text-accent-foreground text-primary`,
        ghost: `hover:bg-accent hover:text-accent-foreground text-primary`,
        link: `text-primary underline-offset-4 hover:underline`,
    };

    // Define styles for different sizes
    const sizes = {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
    };

    const combinedClassName = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

    // If href is provided for internal navigation, use Next.js Link
    if (href && href.startsWith('/')) {
      // Use legacyBehavior={asChild} to pass props down correctly if wrapping another component
      return (
        <Link href={href} passHref legacyBehavior={asChild}>
          {asChild ? (
            React.cloneElement(children as React.ReactElement, {
              className: combinedClassName,
              ref: ref as React.Ref<HTMLAnchorElement | HTMLButtonElement>, // Specific ref type
              ...props,
            })
          ) : (
            <a ref={ref as React.Ref<HTMLAnchorElement>} className={combinedClassName} {...props}>
              {children}
            </a>
          )}
        </Link>
      );
    }

    // If href is external, use a regular anchor tag
    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }

    // Otherwise, render a standard button
    return (
      <button
        type={type}
        className={combinedClassName}
        ref={ref as React.Ref<HTMLButtonElement>}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button"; // Add display name for DevTools

export default Button;
