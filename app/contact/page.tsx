"use client";
import { Phone } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { BsSend, BsSendArrowUp, BsSendCheck } from "react-icons/bs";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
        onderwerp: "Algemene Vragen",
        message: "",
    });

    function handleProductChange(e: ChangeEvent<HTMLSelectElement>) {
        handleChange(e);
    }

    function handleChange(
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then(() => {
                setCompleted(true);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div className="flex pt-32 flex-col xl:h-screen xl:flex-row gap-10 xl:gap-24 pb-16 xl:px-36 items-center justify-around bg-gradient-to-br from-30% from-background to-primary">
            <div className="flex flex-col gap-10 xl:gap-20 w-11/12 max-w-[600px] xl:max-w-none xl:w-1/2 items-center">
                <h2 className="text-3xl xl:text-5xl text-center">Contact.</h2>
                <p className="text-center">
                    Voor het maken van afspraken ben ik telefonisch bereikbaar
                    van maandag t/m vrijdag van 9.00 tot 17.00 op onderstaand
                    telefoonnummer
                </p>
                <a
                    className="flex items-center gap-4 w-fit p-3 text-2xl font-medium italic"
                    href="tel:+31623195686"
                >
                    <Phone />
                    <p className="pb-1.5">06-23 19 56 86</p>
                </a>
                <hr
                    className={`h-0.5 my-8 w-3/4 rounded-full bg-slate-600 xl:hidden`}
                />
                <p className="text-center">
                    Laat u liever een bericht achter? Doe dit dan geheel
                    vrijblijvend via het contact formulier. Dan neem ik zo
                    spoedig mogelijk contact met u op!
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                className="w-11/12 xl:w-1/2 flex flex-col gap-5 xl:gap-7 max-w-[600px] xl:max-w-none"
            >
                <div>
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Naam:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2"
                        required
                        disabled={completed || error}
                        onInvalid={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.setCustomValidity("Vul hier uw naam in.");
                        }}
                        onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.setCustomValidity("");
                        }}
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        E-mail:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2"
                        required
                        disabled={completed || error}
                        onInvalid={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.setCustomValidity(
                                "Vul hier uw email adres in."
                            );
                        }}
                        onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.setCustomValidity("");
                        }}
                    />
                </div>

                <div>
                    <label
                        htmlFor="tel"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Telefoonnumer:
                    </label>
                    <input
                        type="tel"
                        id="tel"
                        name="tel"
                        value={formData.tel}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2"
                        required
                        disabled={completed || error}
                        onInvalid={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.setCustomValidity(
                                "Vul hier uw telefoonnummer in."
                            );
                        }}
                        onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.setCustomValidity("");
                        }}
                    />
                </div>

                <div>
                    <label
                        htmlFor="onderwerp"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Waar kan ik u mee helpen?
                    </label>
                    <select
                        id="onderwerp"
                        name="onderwerp"
                        value={formData.onderwerp}
                        onChange={handleProductChange}
                        className={`w-full border bg-white rounded-md p-2 hover:opacity-90 transition-all duration-200 cursor-pointer`}
                        required
                        disabled={completed || error}
                    >
                        <option value="Algemene Vragen">Algemene Vragen</option>
                        <option value="Homeopathie">Homeopathie</option>
                        <option value="Coaching">Coaching</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Bericht:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full border rounded-md p-2"
                        required
                        disabled={completed || error}
                        onInvalid={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.setCustomValidity("Vul hier jouw wens in.");
                        }}
                        onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.setCustomValidity("");
                        }}
                    />
                </div>

                <button
                    type="submit"
                    className="left-0 right-0 mx-auto w-1/2 bg-gray-100 py-2 mt-6 xl:mt-0 sm:py-3 px-4 sm:px-8 rounded-full"
                    disabled={completed || loading || error}
                >
                    {completed ? (
                        <div className="flex justify-center gap-5 items-center">
                            Verzonden! <BsSendCheck />
                        </div>
                    ) : loading ? (
                        <div className="flex justify-center gap-5 items-center">
                            Verzenden... <BsSendArrowUp />
                        </div>
                    ) : (
                        <div className="flex justify-center gap-5 items-center">
                            Verzenden <BsSend />
                        </div>
                    )}
                </button>

                {completed && (
                    <p className="text-center mt-4">
                        {`Bedankt ${formData.name}! Ik heb je bericht ontvangen en zal zo snel als mogelijk contact met je opnemen.`}
                    </p>
                )}

                {error && (
                    <p className="text-center mt-4 text-red-700">
                        {`Oeps! Er ging iets mis bij het verzenden. Probeer het later nog eens. Sorry voor het ongemak.`}
                    </p>
                )}
            </form>
        </div>
    );
}
