// --- File: tailwind.config.ts ---
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Scan files in pages and components directories
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: { // Optional: Center container by default and set padding
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
        sans: ['Inter', 'sans-serif'], // Default sans-serif
        slab: ['"Roboto Slab"', 'serif'], // Font for headings
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
export default config;
