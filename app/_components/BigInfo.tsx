import Image from "next/image";

export default function BigInfo() {
    return (
        <div className="flex flex-col md:flex-row gap-20 py-28 md:pb-60 md:pt-44 items-center justify-around bg-gradient-to-br from-30% from-background to-primary">
            <div className="flex md:w-1/2 gap-20 md:gap-10 items-center flex-col md:flex-col md:order-2">
                <h2 className="text-3xl md:text-5xl text-center">
                    BIG Geregistreerd Arts.
                </h2>
                <p className="w-4/5 md:w-full text-center">
                    BIG geregistreerd arts: dit betekent dat ik bevoegd ben
                    volgens de wet BIG (Beroepen in de Individuele
                    Gezondheidszorg) om mijn beroep als arts uit te oefenen.
                </p>
            </div>
            <div className="relative w-3/4 md:w-1/4 aspect-[2835/1063] md:order-1">
                <Image src="/AVIG.png" alt="AVIG" fill priority />
            </div>
        </div>
    );
}
