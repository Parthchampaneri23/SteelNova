import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const InfrastructureCTA = () => {
    return (
        <section className="py-16">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="rounded-[40px] bg-gradient-to-r from-blue-700 to-blue-500 px-10 py-20 text-center text-white shadow-2xl">

                    <h2 className="text-5xl font-bold">
                        Ready To Build Your Next Project?
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                        Partner with SteelNova Industries for precision engineering,
                        custom manufacturing and world-class industrial solutions.
                    </p>

                    <div className="mt-10 flex justify-center gap-5 flex-wrap">

                        <Link
                            to="/contact#quote-form"
                            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
                        >
                            Request Quote
                            <ArrowRight size={20} />
                        </Link>

                        <Link
                            to="/products"
                            className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-700"
                        >
                            Explore Products
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default InfrastructureCTA;