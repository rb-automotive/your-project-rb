// --- File: components/Button.tsx ---
import React from 'react';
import Link from 'next/link'; // Import Next.js Link

// Helper function to combine class names (optional, but useful)
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

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

    // If asChild is true, clone the child and merge props
    if (asChild) {
        // Ensure children is a single valid React element
        if (React.isValidElement(children)) {
            // Clone the child element, merging the combined class name and other props
            // Pass the ref to the cloned element
            return React.cloneElement(children, {
                ref: ref, // Pass the ref down
                className: cn(children.props.className, combinedClassName), // Merge classes
                ...props // Spread remaining props
            });
        }
        // If children is not a valid element when asChild is true, return null or throw an error
        console.error("Button component expects a single React element as a child when asChild is true.");
        return null;
    }

    // Handle internal links with Next.js Link (when asChild is false)
    if (href && href.startsWith('/')) {
      return (
        <Link href={href} passHref legacyBehavior>
            <a ref={ref as React.Ref<HTMLAnchorElement>} className={combinedClassName} {...props}>
              {children}
            </a>
        </Link>
      );
    }

    // Render 'a' tag for external links (when asChild is false)
    if (href) {
        return (
            <a
              ref={ref as React.Ref<HTMLAnchorElement>}
              href={href}
              className={combinedClassName}
              target={props.target || '_blank'}
              rel={props.rel || 'noopener noreferrer'}
              {...props}
            >
              {children}
            </a>
        );
    }

    // Render standard button (when asChild is false and no href)
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

Button.displayName = "Button";
export default Button;
