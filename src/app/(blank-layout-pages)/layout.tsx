import type { Metadata } from "next";
import { DM_Sans, Poppins } from 'next/font/google';
import "@/app/globals.scss";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Ipinfo from "@/app/components/Ipinfo";
import Marquee from "@/app/components/Marquee";
import Sidebar from "@/app/components/Sidebar";

const roboto = DM_Sans({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
});
const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800'],
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
                <Ipinfo />
                <Sidebar />
                <div className="flex min-h-screen">
                    <main className="wrapper flex-grow">{children}</main>
                </div>
                <Footer />
            </body>
        </html>
    );
}