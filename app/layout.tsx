import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { ResponsiveProvider } from "./_hooks/ResponsiveContext";
import TopBar from "./_components/TopBar";
import ContactBanner from "./_components/ContactBanner";
import { Metadata } from "next";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://homeopathie-wateringen.nl"),
    title: "Homeopathisch Arts & Coach | Ilonka de Vos",
    description:
        "Welkom bij Ilonka, homeopathisch arts en coach. Klassieke homeopathie gecombineerd met een medische achtergrond voor persoonlijk en deskundig advies.",
    keywords: [
        "homeopathie Wateringen",
        "homeopathisch arts",
        "klassieke homeopathie",
        "homeopathie Nederland",
        "integrale geneeskunde",
        "homeopathie arts coach",
        "homeopathisch arts Ilonka",
        "medische homeopathie",
        "homeopathie consult",
        "homeopathisch arts met medische achtergrond",
        "klassieke homeopathie behandeling",
        "consult bij een homeopathisch arts",
        "homeopathie voor stress en vermoeidheid",
        "homeopathie voor fysieke en mentale klachten",
        "integrale geneeskunde specialist",
        "natuurlijke geneeswijze bij gezondheidsklachten",
        "artsenvereniging voor integrale geneeskunde (AVIG)",
        "homeopathisch arts Nederland VHAN",
        "persoonlijke homeopathische coaching",
        "homeopathisch arts Wateringen",
        "homeopathie consult in Wateringen",
        "klassieke homeopathie praktijk Wateringen",
        "homeopathie en integrale geneeskunde in Wateringen",
        "homeopathisch arts Westland",
        "homeopathie consult in Westland",
        "klassieke homeopathie praktijk Westland",
        "homeopathie en integrale geneeskunde in Westland",
        "natuurlijke oplossingen voor stress",
        "holistische benadering van gezondheid",
        "medische coaching voor klachten",
        "homeopathie bij chronische klachten",
        "behandeling zonder bijwerkingen",
    ],
};

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
