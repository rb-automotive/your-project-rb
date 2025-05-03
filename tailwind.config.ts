// --- File: tailwind.config.js (or .ts) ---
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
      // Keep font definitions (assuming fonts are loaded in _document.js or globals.css)
      fontFamily: {
        // If using CSS variables:
        // sans: ['var(--font-inter)', 'sans-serif'],
        // slab: ['var(--font-roboto-slab)', 'serif'],
        // If loading fonts directly:
         inter: ['Inter', 'sans-serif'],
         'roboto-slab': ['"Roboto Slab"', 'serif'],
      },
      // Keep color definitions (using direct names or CSS variables if defined in globals.css)
      colors: {
        // Option 1: Using CSS Variables (if defined in globals.css)
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // ... other variable colors ...

        // Option 2: Using direct Tailwind names + your brand color
        red: {
           100: '#fee2e2',
           500: '#ef4444',
           600: '#dc2626',
           700: '#b91c1c',
         },
      },
      borderRadius: {
        // Option 1: Using CSS Variable
        // lg: "var(--radius)",
        // md: "calc(var(--radius) - 2px)",
        // sm: "calc(var(--radius) - 4px)",
        // Option 2: Using Tailwind defaults (usually sufficient)
      },
    },
  },
  plugins: [],
};
