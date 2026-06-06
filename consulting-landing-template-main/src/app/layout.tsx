import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { StorageScript } from "@/components/storage-script";

import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Visual Identity Lab",
  description: "AI-driven identity discovery and visual positioning MVP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} font-sans text-ink`}>
        <StorageScript />
        {children}
      </body>
    </html>
  );
}
