"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useResponsive } from "../_hooks/ResponsiveContext";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

export default function TopBar() {
    const deviceContext = useResponsive();
    const pathname = usePathname();
    const onContactPage = pathname === "/contact";
    const showBackground = deviceContext.scrollY > 0 || onContactPage;

    return (
        <div
            className={`z-10 top-bar fixed flex items-center justify-between bg-white w-full transition-all duration-500 ${
                showBackground
                    ? "bg-opacity-90 h-16 sm:h-24"
                    : "bg-opacity-0 h-20 sm:h-32"
            }`}
        >
            <Link
                className={`fixed transition-all duration-500 ${
                    onContactPage ? "ml-3 md:ml-20" : "-ml-12 md:-ml-32"
                }`}
                href="/"
                aria-label="Go back"
            >
                <BiArrowBack className="text-xl sm:text-2xl mt-0.5" />
            </Link>

            <p
                className={`text-2xl sm:text-4xl transition-all duration-500 ${
                    onContactPage ? "ml-12 md:ml-40" : "ml-4 md:ml-24"
                }`}
            >
                Ilonka de Vos
            </p>
            <div
                className={`relative aspect-[2835/1063] max-w-[175px] sm:mr-10 transition-all duration-500 ${
                    showBackground
                        ? "w-4/12 md:max-w-[185px]"
                        : "w-5/12 md:max-w-[200px]"
                }`}
            >
                <Image src="/AVIG.png" alt="AVIG" fill priority />
            </div>
        </div>
    );
}
