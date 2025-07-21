import type { Metadata } from "next";
import { DM_Sans, Poppins } from 'next/font/google';
import "@/app/globals.scss";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ipinfo from "../components/Ipinfo";
import Marquee from "../components/Marquee";

const roboto = DM_Sans({
    weight: ['400','500','600','700','800'],
    subsets: ['latin'],
  });
const poppins = Poppins({
    weight: ['400','500','600','700','800'],
    subsets: ['latin'],
  });

export const metadata: Metadata = {
  title: "Mathias Appelmans mathiasappelmans.be",
  description: "Mathias Appelmans Web developer React PHP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
        <body className={roboto.className}>
          <div className="2xl:py-10 pt-9 ease-in duration-300">
            <div className="px-4 m-auto xl:max-w-[1240px] 2xl:max-w-[1320px]">
                <Navbar/>
                <Ipinfo/>
                <Marquee play={true} pauseOnHover={true} />
            </div>
          </div>
            <div className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-16 xl:px-16 2xl:px-80 bg-transparent overflow-hidden">
                {children}
            </div>            
          <Footer/>
        </body>
        </html>
  );
}