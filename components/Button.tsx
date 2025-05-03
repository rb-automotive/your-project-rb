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
    // const BRAND_COLOR = 'red'; // *** REMOVED THIS LINE ***
    const baseStyle = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background whitespace-nowrap";

    // Define styles for different variants using standard Tailwind classes or direct definitions
    // Adjust these classes if you are not using the CSS variable setup from globals.css
    const variants = {
        primary: `bg-red-600 text-white hover:bg-red-700/90`, // Direct Tailwind color
        secondary: `bg-gray-700 text-white hover:bg-gray-800/90`, // Direct Tailwind color
        outline: `border border-red-500 bg-transparent hover:bg-red-100/50 text-red-600`, // Direct Tailwind color
        ghost: `hover:bg-red-100/50 hover:text-red-700 text-red-600`, // Direct Tailwind color
        link: `text-red-600 underline-offset-4 hover:underline`, // Direct Tailwind color
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
      return (
        <Link href={href} passHref legacyBehavior={asChild}>
          {asChild ? (
            React.cloneElement(children as React.ReactElement, {
              className: combinedClassName,
              ref: ref as React.Ref<HTMLAnchorElement | HTMLButtonElement>,
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
