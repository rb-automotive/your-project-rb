// --- File: tailwind.config.ts ---
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Scan files in pages and components directories
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        // Assumes fonts are loaded via _document.js or globals.css link
        sans: ['Inter', 'sans-serif'],
        slab: ['"Roboto Slab"', 'serif'],
      },
      colors: {
         // Use direct Tailwind color names
         red: {
           100: '#fee2e2',
           500: '#ef4444',
           600: '#dc2626',
           700: '#b91c1c',
         },
         gray: { // Example gray palette from Tailwind
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
            950: '#030712',
         }
       },
    },
  },
  plugins: [],
};
export default config;
