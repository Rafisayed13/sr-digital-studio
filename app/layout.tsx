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
  title: "SR Digital Studio | Web Design & Marketing UAE",
  description: "Expert freelance web design, video editing, and digital marketing for UAE businesses.",
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