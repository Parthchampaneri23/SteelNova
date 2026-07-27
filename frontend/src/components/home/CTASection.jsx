import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import ctaImage from "../../assets/images/cta/cta-factory.png";

const CTASection = () => {
    return (
        <section className="py-14 bg-slate-50">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="grid lg:grid-cols-2 gap-16 items-center rounded-[40px] overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 shadow-2xl">

                    {/* Left */}

                    <div className="p-12 lg:p-16 text-white">

                        <span className="uppercase tracking-[0.3em] text-blue-200 font-semibold">
                            Let's Work Together
                        </span>

                        <h2 className="text-5xl font-bold mt-5 leading-tight">
                            Ready To Build Your Next Industrial Project?
                        </h2>

                        <p className="mt-8 text-lg text-blue-100 leading-8">
                            Partner with SteelNova Industries for innovative
                            engineering, precision manufacturing, and reliable
                            industrial solutions tailored to your business needs.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-5">

                            <Link
                                to="/contact#quote-form"
                                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                Request a Quote
                            </Link>

                            <Link
                                to="/products"
                                className="border border-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-white hover:text-blue-700"
                            >
                                Explore Products
                                <ArrowRight size={18} />
                            </Link>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="overflow-hidden h-full">

                        <img
                            src={ctaImage}
                            alt="Industrial Factory"
                            className="w-full h-full object-cover transition duration-700 hover:scale-110"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CTASection;