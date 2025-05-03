// --- File: components/Button.tsx (Final Fix) ---
import React from 'react';
import Link from 'next/link';

// Helper function to combine class names
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

// Define Button Props (Removed asChild)
// Use intersection type for props to include common attributes + button/anchor specifics
type ButtonBaseProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  href?: string; // For link buttons
};

// Combine base props with standard button or anchor attributes, excluding conflicting ones if needed
type ButtonProps = ButtonBaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>, 'type'> & {
    type?: 'button' | 'submit' | 'reset'; // Override type for button specifically
};


// Define the type for the forwarded ref more broadly
type Ref = HTMLButtonElement | HTMLAnchorElement;

const Button = React.forwardRef<Ref, ButtonProps>(
  ({
    children,
    variant = 'primary',
    size = 'default',
    className = '',
    href,
    // Destructure button-specific props that might conflict with anchor props
    onClick,
    type = 'button', // Default to 'button' if not specified
    // Capture the rest of the props which might be common or anchor-specific
    ...props
   }, ref) => {

    const baseStyle = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white whitespace-nowrap";

    const variants = {
        primary: `bg-red-600 text-white hover:bg-red-700/90`,
        secondary: `bg-gray-700 text-white hover:bg-gray-800/90`,
        outline: `border border-red-500 bg-transparent hover:bg-red-100/50 text-red-600`,
        ghost: `hover:bg-red-100/50 hover:text-red-700 text-red-600`,
        link: `text-red-600 underline-offset-4 hover:underline`,
    };

    const sizes = {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
    };

    const combinedClassName = cn(baseStyle, variants[variant], sizes[size], className);

    // Handle internal links
    if (href && href.startsWith('/')) {
      return (
        <Link href={href} passHref legacyBehavior>
            {/* Spread only props valid for <a>, excluding onClick if it came from ButtonHTMLAttributes */}
            <a ref={ref as React.Ref<HTMLAnchorElement>} className={combinedClassName} {...props}>
              {children}
            </a>
        </Link>
      );
    }

    // Render 'a' tag for external links
    if (href) {
        return (
            // Spread only props valid for <a>
            <a
              ref={ref as React.Ref<HTMLAnchorElement>}
              href={href}
              className={combinedClassName}
              target={props.target || '_blank'}
              rel={props.rel || 'noopener noreferrer'}
              {...props} // Spread remaining props (should be valid for <a>)
            >
              {children}
            </a>
        );
    }

    // Render standard button
    return (
      <button
        type={type} // Use the explicitly passed or default 'button' type
        className={combinedClassName}
        ref={ref as React.Ref<HTMLButtonElement>}
        onClick={onClick} // Use the onClick specific to button
        {...props} // Spread remaining props (should be valid for <button>)
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
