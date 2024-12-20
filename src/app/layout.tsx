
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {  Raleway } from "next/font/google";
import type { Viewport } from 'next'


export const metadata: Metadata = {
  title: "Egbe bobamayegun",
  description: "Bobamayegun okunrin akile Ijebu",
};
export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
  userScalable: true
}
// const inter = Poppins ({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['100', '200', '300', '400', ]
// })
const raleway = Raleway ({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', ]
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.className}>
        <body>
            <header className="text-white text-center">
              <Header />
            </header>
            {children}
            <footer className="bg-black text-white pt-6"><Footer /></footer>
        </body>
    </html>
  );
}
