import { Eye, Target } from "lucide-react";

const VisionMission = () => {
    return (
        <section className="bg-white py-16">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Our Purpose
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Vision & Mission
                    </h2>

                    <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
                        Guided by innovation, quality, and customer satisfaction,
                        our vision and mission drive every project we deliver.
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Vision */}

                    <div className="group rounded-3xl bg-slate-50 p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                        <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">

                            <Eye size={38} />

                        </div>

                        <h3 className="mt-8 text-3xl font-bold">
                            Our Vision
                        </h3>

                        <p className="mt-6 leading-8 text-slate-600">
                            To become a globally recognized industrial engineering
                            company by delivering innovative, sustainable, and
                            world-class manufacturing solutions that empower
                            industries and contribute to long-term growth.
                        </p>

                    </div>

                    {/* Mission */}

                    <div className="group rounded-3xl bg-slate-50 p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                        <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">

                            <Target size={38} />

                        </div>

                        <h3 className="mt-8 text-3xl font-bold">
                            Our Mission
                        </h3>

                        <p className="mt-6 leading-8 text-slate-600">
                            To provide high-quality industrial equipment,
                            precision engineering, and reliable manufacturing
                            services while building lasting relationships through
                            innovation, integrity, and customer-focused solutions.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default VisionMission;