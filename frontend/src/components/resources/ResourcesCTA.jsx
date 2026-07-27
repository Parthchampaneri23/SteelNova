import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ResourcesCTA = () => {
    return (
        <section className="bg-slate-900 py-14">

            <div className="max-w-5xl mx-auto px-6 text-center text-white">

                <span className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
                    Need More Information?
                </span>

                <h2 className="mt-6 text-5xl font-bold">
                    Looking For Technical Documentation?
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                    Our engineering team is ready to provide product
                    catalogues, technical specifications and customized
                    industrial solutions for your business.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-6">

                    <button className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105">
                        Download Catalogue
                    </button>

                    <Link
                        to="/contact#quote-form"
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-blue-700"
                    >
                        Contact Our Team
                        <ArrowRight size={18} />
                    </Link>

                </div>

            </div>

        </section>
    );
};

export default ResourcesCTA;