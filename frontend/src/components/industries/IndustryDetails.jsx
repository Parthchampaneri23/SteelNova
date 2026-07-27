import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { industries } from "../../data/industryData";

const IndustryDetails = () => {
    return (
        <section className="bg-white py-14">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                {industries.map((industry, index) => (

                    <div
                        key={industry.id}
                        id={industry.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                        className={`grid lg:grid-cols-2 gap-12 items-center mb-32 scroll-mt-28 ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                            }`}
                    >

                        <img
                            src={industry.image}
                            alt={industry.title}
                            className="rounded-3xl shadow-xl transition duration-500 hover:scale-105"
                        />

                        <div>

                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                                Industry
                            </span>

                            <h2 className="mt-6 text-5xl font-bold">
                                {industry.title}
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                {industry.description}
                            </p>

                            <div className="mt-8 space-y-4">

                                {industry.products.map((item, i) => (

                                    <div
                                        key={i}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2
                                            className="text-blue-600"
                                            size={20}
                                        />

                                        <span>{item}</span>

                                    </div>

                                ))}

                            </div>

                            <Link
                                to="/contact#quote-form"
                                className="mt-10 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Request Quote

                                <ArrowRight size={18} />

                            </Link>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default IndustryDetails;