// --- File: components/Footer.tsx ---
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    // *** Add your ABN here ***
    const ABN = "[Your ABN Here - Optional but Recommended]";

    return (
        <footer className="bg-gray-800 text-gray-400 py-8 border-t border-gray-700"> {/* Standard Tailwind */}
            <div className="container mx-auto px-4 text-center text-sm">
                <p>&copy; {currentYear} RB Automotive Mobile Mechanics. All rights reserved.</p>
                {ABN && <p className="text-xs mt-1 opacity-75">{ABN}</p>}
            </div>
        </footer>
    );
};
export default Footer;
