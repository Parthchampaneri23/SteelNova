import { ArrowRight } from "lucide-react";

const ContactCTA = () => {
    return (
        <section className="bg-blue-600 py-16">

            <div className="max-w-5xl mx-auto px-6 text-center text-white">

                <h2 className="text-5xl font-bold">
                    Ready To Start Your Next Industrial Project?
                </h2>

                <p className="mt-6 text-lg leading-8 text-blue-100">
                    Contact our engineering team today to discuss your
                    requirements and receive a customized industrial solution.
                </p>

                <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105">

                    Request A Quote

                    <ArrowRight size={20} />

                </button>

            </div>

        </section>
    );
};

export default ContactCTA;