"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutgoingMail } from "react-icons/md";
import { useResponsive } from "../_hooks/ResponsiveContext";
import { usePathname } from "next/navigation";

export default function ContactBanner() {
    const pathName = usePathname();
    const deviceContext = useResponsive();

    return (
        <Link
            href="/contact"
            className={`fixed right-4 md:right-6 bottom-4 md:bottom-6 flex items-center gap-2 md:gap-6 bg-slate-100 pr-3.5 md:pr-6 pl-0.5 py-0.5 rounded-3xl md:rounded-full hover:bg-slate-200 transition-all duration-500 ${
                deviceContext.scrollY > 0 &&
                !deviceContext.docBottomReached &&
                pathName !== "/contact"
                    ? "mr-0"
                    : "-mr-44 md:-mr-64"
            }`}
        >
            <div className="relative aspect-square w-12 md:w-24">
                <Image
                    className="rounded-3xl md:rounded-full"
                    src="/ilonka.jpg"
                    alt="Ilonka"
                    fill
                    priority
                />
            </div>
            <div className="flex flex-col md:gap-1 items-center">
                <p className="font-medium md:text-xl text-slate-900">Contact</p>
                <MdOutgoingMail className="text-slate-900 text-sm md:text-xl" />
            </div>
        </Link>
    );
}
