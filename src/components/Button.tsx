// --- File: src/components/Button.tsx ---
import React from 'react';
import Link from 'next/link';

// Define Button Props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  href?: string;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, onClick, variant = 'primary', size = 'default', className = '', href, type = 'button', asChild = false, ...props }, ref) => {
    const BRAND_COLOR = 'red';
    const baseStyle = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background whitespace-nowrap";

    const variants = {
        primary: `bg-${BRAND_COLOR}-600 text-white hover:bg-${BRAND_COLOR}-700/90`,
        secondary: `bg-gray-700 text-white hover:bg-gray-800/90`,
        outline: `border border-${BRAND_COLOR}-500 bg-transparent hover:bg-${BRAND_COLOR}-100/50 text-${BRAND_COLOR}-600`,
        ghost: `hover:bg-${BRAND_COLOR}-100/50 hover:text-${BRAND_COLOR}-700 text-${BRAND_COLOR}-600`,
        link: `text-${BRAND_COLOR}-600 underline-offset-4 hover:underline`,
    };

    const sizes = {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
    };

    const combinedClassName = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href && href.startsWith('/')) {
      return (
        <Link href={href} passHref legacyBehavior={asChild}>
          {asChild ? (
            React.cloneElement(children as React.ReactElement, {
              className: combinedClassName,
              // *** FIX HERE: Use more specific ref type ***
              ref: ref as React.Ref<HTMLAnchorElement | HTMLButtonElement>,
              ...props,
            })
          ) : (
            // *** FIX HERE: Use more specific ref type ***
            <a ref={ref as React.Ref<HTMLAnchorElement>} className={combinedClassName} {...props}>
              {children}
            </a>
          )}
        </Link>
      );
    }

    if (href) {
      return (
        // *** FIX HERE: Use more specific ref type ***
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

