import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Do you provide custom fabrication solutions?",
        answer:
            "Yes. We design and manufacture customized industrial equipment based on your technical requirements, drawings, and industry standards.",
    },
    {
        question: "Do you export internationally?",
        answer:
            "Absolutely. SteelNova serves clients across multiple countries and provides complete export documentation and logistics support.",
    },
    {
        question: "Can I request a quotation?",
        answer:
            "Yes. Fill out the contact form with your project details and our engineering team will respond within 24 hours.",
    },
    {
        question: "Which industries do you serve?",
        answer:
            "We serve Oil & Gas, Chemical Processing, Water Treatment, Power Plants, Food Processing, Mining, and many other industrial sectors.",
    },
];

const FAQ = () => {
    const [active, setActive] = useState(0);

    const toggleFAQ = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="bg-slate-50 py-14">

            <div className="max-w-5xl mx-auto px-6">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Frequently Asked Questions
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Everything You Need To Know
                    </h2>

                    <p className="mt-5 text-lg text-slate-600">
                        Find answers to the most common questions about our
                        products, manufacturing capabilities, and services.
                    </p>

                </div>

                <div className="space-y-6">

                    {faqs.map((faq, index) => {

                        const isOpen = active === index;

                        return (

                            <div
                                key={index}
                                className={`overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isOpen
                                    ? "border-blue-600 bg-white shadow-xl"
                                    : "border-slate-200 bg-white"
                                    }`}
                            >

                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full items-center justify-between px-8 py-7 text-left"
                                >

                                    <h3
                                        className={`text-xl font-semibold transition ${isOpen
                                            ? "text-blue-600"
                                            : "text-slate-900"
                                            }`}
                                    >
                                        {faq.question}
                                    </h3>

                                    <div
                                        className={`flex h-11 w-11 items-center justify-center rounded-full transition ${isOpen
                                            ? "bg-blue-600 text-white"
                                            : "bg-slate-100 text-slate-700"
                                            }`}
                                    >
                                        {isOpen ? (
                                            <Minus size={20} />
                                        ) : (
                                            <Plus size={20} />
                                        )}
                                    </div>

                                </button>

                                <div
                                    className={`grid transition-all duration-500 ${isOpen
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">

                                        <p className="px-8 pb-8 leading-8 text-slate-600">
                                            {faq.answer}
                                        </p>

                                    </div>
                                </div>

                            </div>

                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default FAQ;