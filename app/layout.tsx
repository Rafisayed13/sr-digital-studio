import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // metadataBase ensures images and links work correctly when shared on WhatsApp/LinkedIn
  metadataBase: new URL('https://sr-digital-studio.vercel.app'),
  title: "Web Design & Digital Marketing Agency in Dubai | SR Digital Studio",
  description: "Looking for a freelance web developer in Dubai? SR Digital Studio builds high-converting business websites, manages Google Ads, and provides local SEO for UAE businesses.",
  keywords: ["Web Design Dubai", "Freelance Web Developer UAE", "Digital Marketing Agency Dubai", "Local SEO UAE"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        {/* This Navbar will now appear at the top of EVERY page */}
        <Navbar />
        
        {/* The 'children' is where your page content (like page.tsx) loads */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* This Footer will now appear at the bottom of EVERY page */}
        <Footer />
      </body>
    </html>
  );
}