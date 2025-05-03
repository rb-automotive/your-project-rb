    // --- File: tailwind.config.ts ---
    /** @type {import('tailwindcss').Config} */

    // If using TypeScript, add: import type { Config } from "tailwindcss";
    // const config: Config = { ... }

    module.exports = { // Or export default config; if using TS
      content: [
        // Correct paths for Pages Router structure
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        // Remove "./src/app/..." if it exists
      ],
      theme: {
        container: {
          center: true,
          padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
          },
           screens: {
             sm: '640px',
             md: '768px',
             lg: '1024px',
             xl: '1280px',
           },
        },
        extend: {
          // Define fonts (assuming they are loaded elsewhere)
          fontFamily: {
             inter: ['Inter', 'sans-serif'],
             'roboto-slab': ['"Roboto Slab"', 'serif'],
          },
          // Add direct color definitions if needed
          colors: {
             red: { // Keep brand color for direct use
               100: '#fee2e2',
               500: '#ef4444',
               600: '#dc2626',
               700: '#b91c1c',
             },
           },
        },
      },
      plugins: [],
    };