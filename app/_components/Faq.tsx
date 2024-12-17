import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";

export default function Faq() {
    return (
        <div className="flex flex-col pt-20 pb-14 md:py-0 md:h-[80vh] md:flex-row md:justify-around items-center bg-gradient-to-tr from from-30% from-background to-primary">
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
                        Een homeopathisch arts behandelt met behulp van
                        homeopathisch bewerkte middelen op natuurlijke basis
                        waarbij het totale functioneren als mens belangrijk is.
                        Deze homeopathische middelen worden gebruikt als
                        aanvulling op de reguliere medicijnen van huisarts of
                        specialist.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        Met welke klachten kan ik terecht?
                    </AccordionTrigger>
                    <AccordionContent>
                        Vooral chronische klachten komen in aanmerking,
                        lichamelijk en/of geestelijk. Vaak zijn dit ook klachten
                        die onvoldoende reageren op reguliere medicatie. Dit
                        geldt voor kinderen én volwassenen.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        Hoe kom ik aan de homeopathische middelen?
                    </AccordionTrigger>
                    <AccordionContent>
                        De homeopathische middelen die worden voorgeschreven
                        zijn enkelvoudige middelen en zijn anders dan de
                        middelen die vrij verkrijgbaar zijn in de drogist. De
                        middelen die zijn voorgeschreven worden door een
                        speciale apotheek opgestuurd en kunnen door de
                        brievenbus.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Wat is coaching?</AccordionTrigger>
                    <AccordionContent>
                        Coaching is een vorm van persoonlijke begeleiding. Vaak
                        wordt gestart met homeopathische behandeling en wordt
                        dit gevolgd door coaching waarbij doel is om mensen weer
                        in balans te krijgen in het dagelijks leven.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Wat zijn de tarieven?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4">
                        <div className="grid grid-cols-5 gap-y-4">
                            <div className="col-span-3">Homeopathisch</div>
                            <div className="col-span-1">70,00 euro</div>

                            <div className="col-span-3">
                                Telefonisch vervolg-consult
                            </div>
                            <div className="col-span-1">35,00 euro</div>

                            <div className="col-span-3">
                                Kort tussentijds contact
                            </div>
                            <div className="col-span-1">20,00 euro</div>
                        </div>
                        <p className="italic">
                            Als arts ben ik niet BTW-plichtig
                        </p>
                        <p>
                            In het algemeen wordt een deel van de kosten vergoed
                            door de zorgverzekeraars. Bij annulering binnen 24
                            uur voor de afspraak zullen kosten in rekening
                            worden gebracht.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
