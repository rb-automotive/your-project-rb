    // --- File: tailwind.config.ts ---
    import type { Config } from "tailwindcss";

    const config: Config = {
      content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
            sans: ['var(--font-inter)', 'sans-serif'],
            slab: ['var(--font-roboto-slab)', 'serif'],
          },
          // --- THIS SECTION IS IMPORTANT ---
          colors: {
            border: "hsl(var(--border))", // Correct syntax
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
              DEFAULT: "hsl(var(--primary))", // Correct syntax
              foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
              DEFAULT: "hsl(var(--secondary))", // Correct syntax
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
          // --- END OF IMPORTANT SECTION ---
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
    