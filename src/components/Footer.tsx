// --- File: src/components/Footer.tsx ---
import React from 'react';
// Removed unused import: import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    // *** Add your ABN here ***
    const ABN = "[Your ABN Here - Optional but Recommended]";

    return (
        <footer className="bg-gray-900 text-gray-400 py-8 border-t border-border/10">
            <div className="container mx-auto px-4 text-center text-sm">
                {/* Optional: Quick Links */}
                {/* <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 text-gray-300">
                    // Use Link component here if uncommenting
                    // <Link href="/services" legacyBehavior><a className="hover:text-white">Services</a></Link>
                </div> */}

                {/* Copyright and ABN */}
                <p>&copy; {currentYear} RB Automotive Mobile Mechanics. All rights reserved.</p>
                {ABN && <p className="text-xs mt-1 opacity-75">{ABN}</p>}

                {/* Optional: Website credit */}
                {/* <p className="text-xs mt-3 opacity-50">Website by [Your Name/Company]</p> */}
            </div>
        </footer>
    );
};
export default Footer;
