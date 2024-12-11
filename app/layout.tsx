"use client";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { ResponsiveProvider } from "./_hooks/ResponsiveContext";
import TopBar from "./_components/TopBar";
import ContactBanner from "./_components/ContactBanner";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${playfair.className} antialiased`}>
                <ResponsiveProvider>
                    <TopBar />
                    {children}
                    <ContactBanner />
                </ResponsiveProvider>
            </body>
        </html>
    );
}
