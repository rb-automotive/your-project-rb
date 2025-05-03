// --- File: components/ImageWithFallback.tsx ---
"use client"; // Mark as a Client Component because it uses Hooks

import React, { useState, useEffect } from 'react';

// Define the props the component accepts
interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  // src and alt are required img attributes
  src: string;
  alt: string;
  // Optional props for customization
  fallbackText?: string; // Text for the placeholder image
  width?: number; // Optional width hint for placeholder generation
  height?: number; // Optional height hint for placeholder generation
  className?: string; // Allow passing custom classes
}

const ImageWithFallback = ({
  src,
  alt,
  fallbackText = "Image", // Default placeholder text
  width = 600, // Default placeholder width
  height = 400, // Default placeholder height
  className = '',
  ...props // Pass down any other standard img attributes (like style, etc.)
}: ImageWithFallbackProps) => {
    // State to hold the current image source (original or fallback)
    const [imgSrc, setImgSrc] = useState(src);
    // Generate the placeholder URL using placehold.co
    const placeholderUrl = `https://placehold.co/${width}x${height}/e0e0e0/a0a0a0?text=${fallbackText.replace(/\s+/g, '+')}`;

    // Effect to reset the image source if the `src` prop changes
    useEffect(() => {
        setImgSrc(src);
    }, [src]); // Re-run effect only if the src prop changes

    // Function to handle image loading errors
    const handleError = () => {
        // Check if the current source is already the placeholder to prevent infinite loops
        if (imgSrc !== placeholderUrl) {
            console.warn(`Image failed to load: ${src}. Using placeholder.`);
            setImgSrc(placeholderUrl); // Set the source to the placeholder URL
        }
    };

    // Render the standard HTML <img> element
    return (
        <img
            src={imgSrc} // Use the state variable for the source
            alt={alt}
            className={className} // Apply any passed classes
            loading="lazy" // Enable native browser lazy loading
            onError={handleError} // Call handleError function if the image fails to load
            {...props} // Pass down any other img attributes (like style, width/height if set directly)
        />
    );
};

// Export the component for use in other files
export default ImageWithFallback;

