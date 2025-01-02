"use client";
import Image from "next/image";
import { useResponsive } from "../_hooks/ResponsiveContext";

export default function Hero() {
    const { isDesktop } = useResponsive();

    if (isDesktop) {
        return (
            <div className="flex items-center justify-evenly h-screen bg-gradient-to-br from-30% from-background to-primary pt-24">
                <div className="relative aspect-square w-10/12 max-w-96">
                    <Image
                        className="rounded-hero"
                        src="/ilonka.jpg"
                        alt="Ilonka"
                        fill
                        priority
                    />
                </div>
                <div className="flex flex-col w-2/5 gap-14">
                    <h1 className="text-5xl text-center">
                        Homeopathisch
                        <br /> Arts & Coach
                    </h1>
                    <p className="text-center text-lg">
                        Als homeopathisch arts ben ik lid van de
                        artsenvereniging voor integrale geneeskunde (AVIG) en
                        daaronder valt de vakgroep homeopathisch artsen
                        Nederland (VHAN).
                        <br />
                        <br />
                        Oorspronkelijk ben ik opgeleid als regulier arts en
                        vervolgens heb ik de opleiding tot homeopathisch arts
                        gedaan. In mijn werk als homeopathisch arts beoefen ik
                        de klassieke homeopathie. Mijn achtergrond als arts
                        betekent dat ik het totale medische plaatje daarbij
                        meeneem in mijn advies.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-evenly gap-14 bg-gradient-to-br from-30% from-background to-primary pt-32 pb-8">
            <h1 className="text-3xl text-center">
                Homeopathisch
                <br /> Arts & Coach
            </h1>
            <div className="relative aspect-square w-9/12 max-w-96">
                <Image
                    className="rounded-hero"
                    src="/ilonka.jpg"
                    alt="Ilonka"
                    fill
                    priority
                />
            </div>
            <p className="w-4/5 text-center">
                Als homeopathisch arts ben ik lid van de artsenvereniging voor
                integrale geneeskunde (AVIG) en daaronder valt de vakgroep
                homeopathisch artsen Nederland (VHAN).
                <br />
                <br />
                Oorspronkelijk ben ik opgeleid als regulier arts en vervolgens
                heb ik de opleiding tot homeopathisch arts gedaan. In mijn werk
                als homeopathisch arts beoefen ik de klassieke homeopathie. Mijn
                achtergrond als arts betekent dat ik het totale medische plaatje
                daarbij meeneem in mijn advies.
            </p>
        </div>
    );
}
