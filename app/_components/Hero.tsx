import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="flex flex-col items-center justify-evenly h-[120vh] bg-gradient-to-br from-background to-primary pt-24">
                <h1 className="text-3xl text-center">
                    Homeopathisch
                    <br /> Arts & Coach
                </h1>
                <div className="relative aspect-square w-10/12">
                    <Image
                        className="rounded-hero"
                        src="/ilonka.jpg"
                        alt="Ilonka"
                        fill
                    />
                </div>
                <p className="w-4/5 text-center">
                    Als homeopathisch arts ben ik lid van de artsenvereniging
                    voor integrale geneeskunde (AVIG) en daaronder valt de
                    vakgroep homeopathisch artsen Nederland (VHAN). Dat betekent
                    dat ik de klassieke homeopathie uitoefen en dat ik ook
                    regulier opgeleid arts ben.
                </p>
            </div>
            <hr className="h-1 my-0 bg-slate-900" />
        </>
    );
}
