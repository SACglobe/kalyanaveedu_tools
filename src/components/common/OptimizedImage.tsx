'use client';

import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
    src: string;
    width?: number;
    height?: number;
    alt: string;
    priority?: boolean;
    className?: string;
}

/**
 * OptimizedImage Component
 * 
 * A wrapper around Next.js Image component that automatically handles:
 * 1. Unsplash image optimization parameters (auto=format, fit=crop, q=80)
 * 2. Standardized responsive sizes
 * 3. Consistent styling and loading behavior
 */
export default function OptimizedImage({
    src,
    width,
    height,
    alt,
    priority = false,
    className = '',
    ...props
}: OptimizedImageProps) {
    // Check if the source is an Unsplash URL
    const isUnsplash = src.includes('images.unsplash.com');

    // Build the optimized Unsplash URL if applicable
    let optimizedSrc = src;
    if (isUnsplash) {
        const url = new URL(src);
        // Ensure standard optimization parameters
        url.searchParams.set('auto', 'format');
        url.searchParams.set('fit', 'crop');
        url.searchParams.set('q', '80');
        
        // If width/height are provided and not already in URL, add them
        if (width && !url.searchParams.has('w')) {
            url.searchParams.set('w', width.toString());
        }
        if (height && !url.searchParams.has('h')) {
            url.searchParams.set('h', height.toString());
        }
        
        optimizedSrc = url.toString();
    }

    return (
        <Image
            src={optimizedSrc}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={className}
            unoptimized={isUnsplash}
            // Standard responsive sizes: mobile 100vw, tablet 50vw, desktop 33vw
            // This helps the browser pick the right size before the CSS loads
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            {...props}
        />
    );
}
