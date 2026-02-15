import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Portfolio | Web Developer & CS Student",
  description: "A high-performance personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
};

import Sidebar from "@/components/Navbar"; // Note: It's actually Navbar, but let's stick to imports
import GSAPCursor from "@/components/GSAPCursor";
import SparkleTrail from "@/components/SparkleTrail";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} font-sans antialiased selection:bg-accent selection:text-white cursor-none`}>
        <GSAPCursor />
        <SparkleTrail />
        {children}
      </body>
    </html>
  );
}
