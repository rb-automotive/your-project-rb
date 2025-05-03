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

    const baseStyle = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white whitespace-nowrap"; // Adjusted ring color/offset

    // Define styles for different variants using standard Tailwind classes
    const variants = {
        primary: `bg-red-600 text-white hover:bg-red-700/90`,
        secondary: `bg-gray-700 text-white hover:bg-gray-800/90`,
        outline: `border border-red-500 bg-transparent hover:bg-red-100/50 text-red-600`,
        ghost: `hover:bg-red-100/50 hover:text-red-700 text-red-600`,
        link: `text-red-600 underline-offset-4 hover:underline`,
    };

    // Define styles for different sizes
    const sizes = {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
    };

    const combinedClassName = cn(baseStyle, variants[variant], sizes[size], className);

    // Determine the component type: 'a' if href, otherwise 'button'
    const Comp = asChild ? 'span' : (href ? 'a' : 'button'); // Use span as wrapper if asChild

    // Handle internal links with Next.js Link
    if (href && href.startsWith('/')) {
      return (
        <Link href={href} passHref legacyBehavior={asChild}>
          {/* If asChild, render the child directly, assuming it accepts props */}
          {asChild ? (
             React.isValidElement(children) ? React.cloneElement(children, { ref, className: cn(children.props.className, combinedClassName), ...props }) : null
          ) : (
            <a ref={ref as React.Ref<HTMLAnchorElement>} className={combinedClassName} {...props}>
              {children}
            </a>
          )}
        </Link>
      );
    }

    // Handle external links or regular buttons
    if (asChild) {
        // If asChild is true but it's not an internal link, render the child directly
        // It's up to the child component to handle the props correctly
         return React.isValidElement(children) ? React.cloneElement(children, { ref, className: cn(children.props.className, combinedClassName), ...props }) : null;
    }

    // Render 'a' tag for external links
    if (href) {
        return (
            <a
              ref={ref as React.Ref<HTMLAnchorElement>}
              href={href}
              className={combinedClassName}
              // Add target blank for external links unless specified otherwise
              target={props.target || '_blank'}
              rel={props.rel || 'noopener noreferrer'}
              {...props}
            >
              {children}
            </a>
        );
    }

    // Render standard button
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
