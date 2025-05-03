// --- File: components/Header.tsx ---
import React from 'react';
import Link from 'next/link';
// Assuming ImageWithFallback is in the same components folder
import ImageWithFallback from './ImageWithFallback';

// *** REPLACE WITH YOUR ACTUAL LOGO URL (e.g., /images/your-logo.png) ***
const LOGO_URL = "/images/RB AUTO LOGO 1.png"; // Make sure this file exists in public/images/
const BRAND_COLOR = 'red'; // Match Tailwind config

const Header = () => {

    return (
        // Uses Tailwind classes relying on variables in styles/globals.css
        <header className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" legacyBehavior>
                    <a className="mr-6 flex items-center space-x-2" aria-label="RB Automotive Homepage">
                        {/* Use ImageWithFallback for the logo */}
                        <ImageWithFallback
                            src={LOGO_URL}
                            alt="RB Automotive Logo"
                            className="h-8 w-auto" // Adjust size as needed
                            fallbackText="RB"
                            width={100} height={32} // Provide intrinsic size hints
                         />
                        {/* Text part of the logo */}
                        <span className={`hidden font-bold sm:inline-block text-lg font-slab text-${BRAND_COLOR}-700`}> {/* Use font-slab */}
                            RB Automotive
                        </span>
                    </a>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    {/* Use Next.js Link for internal navigation */}
                    <Link href="/services" legacyBehavior><a className="transition-colors hover:text-foreground/80 text-foreground/60">Services</a></Link>
                    <Link href="/why-us" legacyBehavior><a className="transition-colors hover:text-foreground/80 text-foreground/60">Why Us</a></Link>
                    <Link href="/contact" legacyBehavior><a className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a></Link>
                    <Link href="/reviews" legacyBehavior><a className="transition-colors hover:text-foreground/80 text-foreground/60">Reviews</a></Link>
                    <Link href="/faq" legacyBehavior><a className="transition-colors hover:text-foreground/80 text-foreground/60">FAQ</a></Link>
                </nav>

                {/* Mobile Nav Trigger (Implement drawer/modal separately if needed) */}
                 <button className="md:hidden p-2 -mr-2" aria-label="Toggle Menu">
                     {/* Hamburger Icon SVG */}
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                 </button>
            </div>
        </header>
    );
};
export default Header;
