import { ArrowRight } from "lucide-react";
import { industries } from "../../data/industryData";

const IndustryGrid = () => {
    return (
        <section className="bg-slate-50 py-14">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Our Expertise
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Industries We Serve
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
                        Delivering reliable industrial equipment and engineering
                        solutions across multiple industries with uncompromising
                        quality and performance.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {industries.map((industry) => (

                        <div
                            key={industry.id}
                            className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            <div className="overflow-hidden">

                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                            </div>

                            <div className="p-7">

                                <h3 className="text-2xl font-bold text-slate-900">
                                    {industry.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {industry.description}
                                </p>

                                <a
                                    href={`#${industry.title
                                        .toLowerCase()
                                        .replace(/[^a-z0-9]+/g, "-")}`}
                                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 hover:gap-3 hover:text-blue-700"
                                >
                                    Learn More
                                    <ArrowRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default IndustryGrid;