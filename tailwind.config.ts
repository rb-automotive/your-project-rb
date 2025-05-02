// --- File: tailwind.config.ts ---
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Ensure Tailwind scans your components and app directory
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: { // Optional: Center container by default and set padding
      center: true,
      padding: {
        DEFAULT: '1rem', // Default padding
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
       screens: { // Optional: Define screen breakpoints if needed
         sm: '640px',
         md: '768px',
         lg: '1024px',
         xl: '1280px',
       },
    },
    extend: {
      // Define fonts using CSS variables set by next/font in layout.tsx
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Set Inter as default sans-serif
        slab: ['var(--font-roboto-slab)', 'serif'], // Set Roboto Slab for headings etc.
      },
      // Define colors using CSS variables set in globals.css
      colors: {
        border: "hsl(var(--border))", // Correct syntax using CSS variable
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", // Correct syntax using CSS variable
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))", // Correct syntax using CSS variable
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Correct syntax using CSS variable
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // You can still add direct color definitions if needed
        // Example: Keep the direct red definition for easier class usage like 'bg-red-600'
         red: {
           100: '#fee2e2',
           // ... other shades if needed
           500: '#ef4444',
           600: '#dc2626', // Used as BRAND_COLOR in components
           700: '#b91c1c',
           // ...
         },
      },
      // Define border radius using the CSS variable
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Add keyframes for animations if needed later
      // keyframes: { ... },
      // animation: { ... },
    },
  },
  plugins: [
      // Add any Tailwind plugins here if needed, e.g., require('@tailwindcss/forms')
  ],
};
export default config;
