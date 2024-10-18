import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";


export const metadata: Metadata = {
  title: "Egbe bobamayegun",
  description: "Bobamayegun okunrin akile Ijebu",
};

const poppins = Poppins ({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <header className="text-white text-center py-1 border">
          <Header />
        </header>
        {children}
        <footer className="bg-black text-white py-6 text-center"><Footer /></footer>
      </body>
    </html>
  );
}
