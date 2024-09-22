import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import type { Viewport } from 'next'

import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container-lg mt-4">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
