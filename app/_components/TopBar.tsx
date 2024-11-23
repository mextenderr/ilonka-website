"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TopBar() {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackground(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`z-10 top-bar fixed flex items-center justify-between bg-white w-full transition-all duration-500 ${
                showBackground
                    ? "bg-opacity-90 h-16 sm:h-24"
                    : "bg-opacity-0 h-20 sm:h-32"
            }`}
        >
            <p className="text-2xl sm:text-4xl ml-4 sm:pl-24">Ilonka de Vos</p>
            <div
                className={`relative aspect-[2835/1063] max-w-[175px] sm:mr-10 transition-all duration-500 ${
                    showBackground
                        ? "w-4/12 md:max-w-[185px]"
                        : "w-5/12 md:max-w-[200px]"
                }`}
            >
                <Image src="/AVIG.png" alt="AVIG" fill />
            </div>
        </div>
    );
}
