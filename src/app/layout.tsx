import type { Metadata } from "next";
import { DM_Sans, Poppins } from 'next/font/google';
import "./globals.scss";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from "./components/Navbar";
import Image from "next/image";
import Footer from "./components/Footer";

const roboto = DM_Sans({
    weight: ['400','500','600','700','800'],
    subsets: ['latin'],
  });
const poppins = Poppins({
    weight: ['400','500','600','700','800'],
    subsets: ['latin'],
  });

export const metadata: Metadata = {
  title: "DotDev Creative Web Development",
  description: "Dotdev Web Devlopment Agency App built with Next.js 15 and Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
        <body className={roboto.className}>
          <div className="2xl:py-12 py-9 ease-in duration-300">
            <div className="px-4 m-auto xl:max-w-[1140px] 2xl:max-w-[1320px]">
                <Navbar/>
            </div>
          </div>
            <div className="min-h-screen bg-gray-50 px-4 sm:px-8 md:px-16 lg:px-16 xl:px-16 2xl:px-80 bg-transparent overflow-hidden">
                {children}
            </div>            
          <Footer/>
        </body>
        </html>
  );
}