"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { BsSend, BsSendArrowUp, BsSendCheck } from "react-icons/bs";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
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
        <div className="flex pt-32 flex-col md:h-screen md:flex-row gap-10 md:gap-24 pb-16 md:px-36 items-center justify-around bg-gradient-to-br from-30% from-background to-primary">
            <div className="flex flex-col gap-10 md:gap-20 w-11/12 md:w-1/2 items-center">
                <h2 className="text-3xl md:text-5xl text-center">Contact.</h2>
                <p className="text-center">
                    U kunt met mij in contact komen door het contact formulier
                    in te vullen. Ik ben tevens telefonsich bereikbaar op
                    werkdagen tussen 9:00 en 17:00.
                </p>
                <a
                    className="w-fit p-3 text-2xl font-medium"
                    href="tel:+31629052041"
                >
                    +31 6 29 05 20 41
                </a>
            </div>
            <hr
                className={`h-0.5 my-8 w-3/4 rounded-full bg-slate-600 md:hidden`}
            />
            <form
                onSubmit={handleSubmit}
                className="w-11/12 md:w-1/2 flex flex-col gap-5 md:gap-7"
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
                    className="left-0 right-0 mx-auto w-1/2 bg-gray-100 py-2 mt-6 md:mt-0 sm:py-3 px-4 sm:px-8 rounded-full"
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
