import { CheckCircle2 } from "lucide-react";

const features = [
    "Advanced Manufacturing Technology",
    "ISO Certified Quality Standards",
    "Experienced Engineering Team",
    "Global Export Network",
];

const CompanyOverview = () => {
    return (
        <section className="bg-white py-16">

            <div className="max-w-7xl mx-auto px-4 lg:px-5 grid lg:grid-cols-2 gap-16 items-center">

                {/* Image */}

                <div className="overflow-hidden rounded-3xl shadow-2xl">

                    <img
                        src="/about/about-company.png"
                        alt="SteelNova"
                        className="h-full w-full object-cover hover:scale-105 transition duration-500"
                    />

                </div>

                {/* Content */}

                <div>

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Company Overview
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Building Industrial Excellence For The Future
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        SteelNova is a trusted industrial manufacturer delivering
                        innovative engineering solutions, precision fabrication,
                        and world-class industrial equipment for customers across
                        multiple industries worldwide.
                    </p>

                    <div className="mt-10 space-y-5">

                        {features.map((item) => (

                            <div
                                key={item}
                                className="flex items-center gap-4"
                            >

                                <CheckCircle2
                                    size={24}
                                    className="text-blue-600"
                                />

                                <span className="text-lg text-slate-700">
                                    {item}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CompanyOverview;