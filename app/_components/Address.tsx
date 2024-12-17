"use client";
import { FaHome } from "react-icons/fa";
import { BsMailbox2 } from "react-icons/bs";
import { ReactNode } from "react";
import { Phone } from "lucide-react";

export default function Address() {
    return (
        <div className="flex flex-col md:flex-row gap-20 py-24 md:py-32 items-center justify-around bg-secondary">
            <div className="flex flex-col items-center gap-20 w-full md:w-1/4">
                <h2 className="text-3xl md:text-5xl text-center">Contact.</h2>
                <a
                    className="flex items-center gap-4 w-fit p-3 text-2xl font-medium italic"
                    href="tel:+31623195686"
                >
                    <Phone />
                    <p className="pb-1.5">06-23 19 56 86</p>
                </a>
                <p className="w-4/5 md:w-full text-center">
                    Neem telefonsich contact op om een afspraak te plannen.
                    Stuurt u liever een bericht? Dan kan dit ook via het contact
                    formulier!
                </p>
            </div>
            <div className="flex flex-col w-11/12 md:w-1/2 gap-16">
                <iframe
                    className="w-full h-60 md:h-96"
                    src={`https://www.google.com/maps/embed/v1/place?q=ilonka%20de%20vos&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`}
                    loading="lazy"
                />
                <div className="flex flex-col items-center gap-10 justify-evenly md:flex-row">
                    <AddressCard
                        icon={<FaHome className="text-2xl" />}
                        title="Bezoekadres"
                        street="Guldeland 25"
                        zipcode="2291 VG Wateringen"
                    />
                    <AddressCard
                        icon={<BsMailbox2 className="text-2xl" />}
                        title="Postadres"
                        street="Verhoevenstraat 5"
                        zipcode="2291 RN Wateringen"
                    />
                </div>
            </div>
        </div>
    );
}

interface AddressCardProps {
    icon: ReactNode;
    title: string;
    street: string;
    zipcode: string;
}

function AddressCard({ icon, title, street, zipcode }: AddressCardProps) {
    return (
        <div className="flex w-3/4 md:w-2/5 flex-col gap-3 border border-slate-400 py-3 px-5 rounded-2xl shadow">
            <div className="flex items-center gap-5 font-semibold">
                {icon}
                <h3>{title}</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm">
                <p>{street}</p>
                <p>{zipcode}</p>
            </div>
        </div>
    );
}
