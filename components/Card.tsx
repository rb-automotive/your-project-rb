// --- File: components/Card.tsx ---
import React from 'react';

// Helper function to combine class names (optional, but useful)
// You could install clsx: npm install clsx
// import clsx from 'clsx';
// const cn = (...inputs) => clsx(inputs);
// Or a simple version:
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

// --- Base Card Components (Inspired by shadcn/ui) ---

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Uses Tailwind classes relying on variables in styles/globals.css
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement, // Use h3 semantically
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    // Uses font-slab defined in tailwind.config.js
    className={cn(
      "text-lg font-semibold leading-none tracking-tight font-slab",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    // Uses text-muted-foreground color from globals.css via tailwind.config.js
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0", className)} // No top padding for content following header
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)} // No top padding for footer following content
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// --- Enhanced Service Card Component (Uses Base Card Components) ---

// Import necessary components from the same directory
import ImageWithFallback from './ImageWithFallback';
import Button from './Button';
// Import specific icon component needed
import { IconCheck } from './Icons'; // Assuming Icons.tsx is in the same components folder

// Define props for the enhanced service card
interface ServiceCardEnhancedProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  listItems?: string[];
  buttonText?: string;
  buttonLink?: string; // Can be internal ('/path') or external ('http://...')
  className?: string;
}

const ServiceCardEnhanced = ({
  imgSrc,
  imgAlt,
  title,
  description,
  listItems = [],
  buttonText,
  buttonLink,
  className = ''
}: ServiceCardEnhancedProps) => {
  const BRAND_COLOR = 'red'; // Define brand color

  return (
    <Card className={cn("flex flex-col h-full overflow-hidden", className)}> {/* Ensure card takes full height */}
         {/* Image container with fixed height */}
         <div className="overflow-hidden h-48 flex-shrink-0 relative">
             <ImageWithFallback
                src={imgSrc}
                alt={imgAlt}
                className="absolute inset-0 w-full h-full object-cover" // Use absolute positioning to fill container
                fallbackText={imgAlt || title}
                width={600} height={320} // Aspect ratio hint for placeholder
             />
         </div>
        {/* Content Area */}
        <div className="flex flex-col flex-grow p-6"> {/* Combined Header and Content padding */}
            <CardTitle className="mb-2">{title}</CardTitle> {/* Use CardTitle */}
            <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p> {/* Use standard p tag */}

            {/* List Items */}
            {listItems.length > 0 && (
                <ul className="list-none pl-0 space-y-1.5 text-sm text-gray-700 mb-4">
                    {listItems.map((item, index) => (
                        <li key={index} className="flex items-start">
                            {/* Use IconCheck component */}
                            <IconCheck className={`text-${BRAND_COLOR}-500 mr-2 mt-1 flex-shrink-0 h-4 w-4`} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            )}

            {/* Footer/Button Area */}
             {buttonText && buttonLink && (
                <div className="mt-auto pt-4"> {/* Pushes button to bottom */}
                     {/* Use Button component */}
                     <Button href={buttonLink} variant="secondary" size="sm">
                         {buttonText}
                     </Button>
                </div>
             )}
        </div>
    </Card>
  );
};

// Export all components defined in this file
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, ServiceCardEnhanced };
