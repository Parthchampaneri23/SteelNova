import {
    BadgeCheck,
    ShieldCheck,
    Medal,
    FileCheck,
    CheckCircle,
    Award,
} from "lucide-react";

const certifications = [
    {
        icon: BadgeCheck,
        title: "ISO 9001",
        description: "Certified Quality Management System",
    },
    {
        icon: ShieldCheck,
        title: "International Standards",
        description: "Products manufactured to global specifications",
    },
    {
        icon: Medal,
        title: "Premium Quality",
        description: "Strict quality control at every production stage",
    },
    {
        icon: FileCheck,
        title: "Quality Testing",
        description: "Comprehensive inspection before dispatch",
    },
    {
        icon: CheckCircle,
        title: "Reliable Performance",
        description: "Trusted by industries across multiple sectors",
    },
    {
        icon: Award,
        title: "Customer Satisfaction",
        description: "Committed to excellence and long-term partnerships",
    },
];

const Certifications = () => {
    return (
        <section className="bg-slate-50 py-14">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Certifications & Quality
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Committed To Global Quality Standards
                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600">
                        Every product undergoes rigorous quality checks to ensure
                        reliability, safety, and long-lasting performance.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {certifications.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >

                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">

                                    <Icon size={30} />

                                </div>

                                <h3 className="mt-6 text-2xl font-bold">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {item.description}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default Certifications;