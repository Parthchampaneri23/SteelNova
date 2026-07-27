import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const IndustryCTA = () => {
    return (
        <section className="py-14">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-700 to-blue-500 px-10 py-20 text-center text-white shadow-2xl">

                    <h2 className="text-5xl font-bold">
                        Ready To Power Your Industry?
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                        Partner with SteelNova Industries for reliable industrial
                        equipment, custom fabrication, and engineering excellence.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

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

export default IndustryCTA;