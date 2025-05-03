// --- File: components/Button.tsx ---
import React from 'react';
import Link from 'next/link';

// Helper function to combine class names
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

// Define Button Props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  href?: string;
  asChild?: boolean;
}

// Define the type for the forwarded ref more broadly
type Ref = HTMLButtonElement | HTMLAnchorElement;

const Button = React.forwardRef<Ref, ButtonProps>(
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
      if (React.isValidElement(children)) {
        // Define the props to merge more carefully
        const childProps: React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<any> } = {
            ...props, // Spread other props passed to Button first
            // Only spread child's props if they exist and are an object
            ...(children.props && typeof children.props === 'object' ? children.props : {}),
            ref: ref, // Pass the ref
            className: cn(children.props?.className, combinedClassName), // Safely merge classes
        };
        return React.cloneElement(children, childProps);
      }
      console.error("Button 'asChild' prop requires a single valid React element child.");
      return null;
    }

    // Handle internal links (when asChild is false)
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
