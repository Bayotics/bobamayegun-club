
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {  Poppins } from "next/font/google";
import type { Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next';


export const metadata: Metadata = {
  title: "Egbe bobamayegun",
  description: "Bobamayegun okunrin akile Ijebu 74-76",
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: -1
}
const inter = Poppins ({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900' ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
        <body>
            <header className="text-white text-center">
              <Header />
            </header>
            {children} <Analytics />
            <footer className="bg-black text-white pt-6"><Footer /></footer>
        </body>
    </html>
  );
}
