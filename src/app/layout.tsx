// --- File: src/app/layout.tsx ---
import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";

// Import shared layout components using RELATIVE paths
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Configure fonts (remains the same)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});
const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-roboto-slab",
  display: 'swap',
});

// Define base metadata (remains the same)
export const metadata: Metadata = {
  title: {
    default: "RB Automotive | 24/7 Mobile Mechanic Perth",
    template: "%s | RB Automotive Perth",
  },
  description: "RB Automotive: Perth's trusted 24/7 mobile mechanic. Expert car service, repairs, diagnostics, brakes & more at your location. Book online or call now!",
};

// RootLayout component (remains the same)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${roboto_slab.variable}`}>
      <body className="flex flex-col min-h-screen bg-background text-foreground font-inter antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}