// --- File: components/ImageWithFallback.tsx (Simplified - No Hooks) ---
import React from 'react';

// Basic props for a standard image
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

// This is now a simple Server Component
const ImageWithFallback = ({
  src,
  alt,
  className = '',
  ...props
}: ImageProps) => {

    // Simple error handling using onerror attribute in JSX
    const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        console.warn(`Image failed to load: ${src}. Hiding element or applying placeholder style.`);
        // Option 1: Hide the image (or apply a placeholder class)
        // event.currentTarget.style.display = 'none';
        // Option 2: Set to a transparent pixel (less ideal)
        // event.currentTarget.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        // Option 3: Set to a generic placeholder URL (if you have one)
        const placeholderUrl = `https://placehold.co/${props.width || 300}x${props.height || 200}/e0e0e0/a0a0a0?text=Error`;
        event.currentTarget.src = placeholderUrl;
    };

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading="lazy"
            onError={handleError} // Basic browser error handling
            {...props}
        />
    );
};

export default ImageWithFallback;
