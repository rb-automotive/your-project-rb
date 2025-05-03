// --- File: components/Header.tsx ---
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Use next/image

// *** Ensure this path is correct relative to the 'public' folder ***
const LOGO_URL = "/images/RB AUTO LOGO 1.png";

const Header = () => {
    return (
        // Simplified styling using standard Tailwind
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6 mx-auto">
                {/* Logo */}
                <Link href="/" legacyBehavior>
                    <a className="mr-6 flex items-center space-x-2" aria-label="RB Automotive Homepage">
                        {/* Use next/image */}
                        <Image
                            src={LOGO_URL}
                            alt="RB Automotive Logo"
                            width={100} // Provide width
                            height={32} // Provide height
                            className="h-8 w-auto"
                            priority // Load logo eagerly
                         />
                        <span className="hidden font-bold sm:inline-block text-lg font-slab text-red-700">
                            RB Automotive
                        </span>
                    </a>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link href="/services" legacyBehavior><a className="text-gray-600 transition-colors hover:text-gray-900">Services</a></Link>
                    <Link href="/contact" legacyBehavior><a className="text-gray-600 transition-colors hover:text-gray-900">Contact</a></Link>
                    {/* Add other links later */}
                </nav>

                {/* Mobile Nav Trigger */}
                 <button className="md:hidden p-2 -mr-2" aria-label="Toggle Menu">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                 </button>
            </div>
        </header>
    );
};
export default Header;
