// --- File: tailwind.config.ts ---
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Scan files in pages and components directories (NOT src/)
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
        sans: ['Inter', 'sans-serif'], // Use direct font name
        slab: ['"Roboto Slab"', 'serif'], // Use direct font name
      },
      // Define colors using CSS variables (ensure these are in styles/globals.css)
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
         // Keep direct red definition for convenience
         red: {
           100: '#fee2e2',
           500: '#ef4444',
           600: '#dc2626',
           700: '#b91c1c',
         },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
