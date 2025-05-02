    // --- File: src/components/ImageWithFallback.tsx ---
    import React, { useState, useEffect } from 'react';

    interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
      src: string;
      alt: string;
      fallbackText?: string;
      width?: number; // Optional width hint for placeholder
      height?: number; // Optional height hint for placeholder
      className?: string;
    }

    const ImageWithFallback = ({
      src,
      alt,
      fallbackText = "Image",
      width = 600, // Default placeholder width
      height = 400, // Default placeholder height
      className = '',
      ...props
    }: ImageWithFallbackProps) => {
        const [imgSrc, setImgSrc] = useState(src);
        // Define placeholder URL generation
        const placeholderUrl = `https://placehold.co/${width}x${height}/e0e0e0/a0a0a0?text=${fallbackText.replace(/\s+/g, '+')}`;

        useEffect(() => {
            setImgSrc(src); // Reset src if the prop changes (e.g., in dynamic components)
        }, [src]);

        const handleError = () => {
            // Prevent infinite loop if the placeholder itself fails to load
            if (imgSrc !== placeholderUrl) {
                console.warn(`Image failed to load: ${src}. Using placeholder.`);
                setImgSrc(placeholderUrl);
            }
        };

        return (
            <img
                src={imgSrc}
                alt={alt}
                className={className}
                loading="lazy" // Add lazy loading by default
                onError={handleError}
                {...props} // Pass down any other img attributes like width, height if needed directly
            />
        );
    };
    export default ImageWithFallback;
    