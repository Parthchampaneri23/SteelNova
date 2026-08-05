import {
    Cpu,
    Cog,
    SearchCheck,
    PackageCheck,
} from "lucide-react";

const steps = [
    {
        icon: Cpu,
        title: "Advanced Technology",
        description:
            "Modern CNC machines and automated manufacturing systems ensure precision production.",
    },
    {
        icon: Cog,
        title: "Precision Engineering",
        description:
            "Experienced engineers design and manufacture products that meet global industrial standards.",
    },
    {
        icon: SearchCheck,
        title: "Quality Inspection",
        description:
            "Every product undergoes rigorous quality testing before dispatch.",
    },
    {
        icon: PackageCheck,
        title: "Packaging & Delivery",
        description:
            "Secure packaging and timely worldwide delivery ensure complete customer satisfaction.",
    },
];

const ManufacturingExcellence = () => {
    return (
        <section className="py-14 bg-white">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Manufacturing Excellence
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Precision At Every Stage
                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600">
                        From engineering design to final delivery,
                        every stage follows strict quality standards
                        using modern manufacturing technologies.
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-stretch">

                    {/* Image */}

                    <div className="overflow-hidden rounded-3xl shadow-2xl min-h-[400px]">

                        <img
                            src="/about/cta-factory.png"
                            alt="Manufacturing"
                            className="h-full w-full object-cover transition duration-700 hover:scale-105"
                        />

                    </div>

                    {/* Steps */}

                    <div className="grid sm:grid-cols-2 gap-6">

                        {steps.map((step, index) => {

                            const Icon = step.icon;

                            return (

                                <div
                                    key={step.title}
                                    className="group flex flex-col justify-between rounded-3xl bg-slate-50 p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                                >

                                    <div>
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white mb-4">

                                            <Icon size={24} />

                                        </div>

                                        <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">
                                            STEP 0{index + 1}
                                        </span>

                                        <h3 className="mt-2 text-xl font-bold text-slate-900">
                                            {step.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            {step.description}
                                        </p>
                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ManufacturingExcellence;