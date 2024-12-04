import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";

export default function Faq() {
    return (
        <div className="flex flex-col py-20 md:py-0 md:h-[60vh] md:flex-row md:justify-around items-center bg-gradient-to-tr from from-30% from-background to-primary">
            <h2 className="text-3xl md:text-5xl text-center">
                Antwoord op uw vragen.
            </h2>
            <Accordion
                className="w-11/12 h-3/5 md:w-1/2 pt-24 md:pt-0"
                type="single"
                collapsible
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        Wat is een homeopathisch arts?
                    </AccordionTrigger>
                    <AccordionContent>
                        Een homeopathisch arts combineert reguliere medische
                        kennis met de principes van klassieke homeopathie. Deze
                        arts behandelt patiënten holistisch, waarbij zowel
                        lichamelijke als emotionele klachten worden meegenomen.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        Met welke klachten kan ik terecht?
                    </AccordionTrigger>
                    <AccordionContent>
                        Een homeopathisch arts combineert reguliere medische
                        kennis met de principes van klassieke homeopathie. Deze
                        arts behandelt patiënten holistisch, waarbij zowel
                        lichamelijke als emotionele klachten worden meegenomen.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        Worden er medicijnen gebruikt?
                    </AccordionTrigger>
                    <AccordionContent>
                        Een homeopathisch arts combineert reguliere medische
                        kennis met de principes van klassieke homeopathie. Deze
                        arts behandelt patiënten holistisch, waarbij zowel
                        lichamelijke als emotionele klachten worden meegenomen.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Wat is coaching?</AccordionTrigger>
                    <AccordionContent>
                        Een homeopathisch arts combineert reguliere medische
                        kennis met de principes van klassieke homeopathie. Deze
                        arts behandelt patiënten holistisch, waarbij zowel
                        lichamelijke als emotionele klachten worden meegenomen.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Wat zijn de tarieven?</AccordionTrigger>
                    <AccordionContent>
                        Een homeopathisch arts combineert reguliere medische
                        kennis met de principes van klassieke homeopathie. Deze
                        arts behandelt patiënten holistisch, waarbij zowel
                        lichamelijke als emotionele klachten worden meegenomen.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
