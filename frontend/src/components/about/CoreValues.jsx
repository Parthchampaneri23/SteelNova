import {
    ShieldCheck,
    Lightbulb,
    Users,
    Award,
    Leaf,
    TrendingUp,
} from "lucide-react";

const values = [
    {
        icon: ShieldCheck,
        title: "Integrity",
        description:
            "We believe in honesty, transparency, and ethical business practices.",
    },
    {
        icon: Award,
        title: "Quality",
        description:
            "Delivering world-class industrial products with uncompromising quality.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Continuously improving our technology, products, and engineering solutions.",
    },
    {
        icon: Users,
        title: "Customer Focus",
        description:
            "Building long-term partnerships through trust and exceptional service.",
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description:
            "Promoting environmentally responsible manufacturing practices.",
    },
    {
        icon: TrendingUp,
        title: "Growth",
        description:
            "Driving continuous improvement for our company, employees, and customers.",
    },
];

const CoreValues = () => {
    return (
        <section className="bg-slate-50 py-14">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Core Values
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Principles That Drive Us
                    </h2>

                    <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
                        Our values define how we work, innovate, and build lasting
                        relationships with customers around the world.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {values.map((value) => {
                        const Icon = value.icon;

                        return (
                            <div
                                key={value.title}
                                className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
                            >

                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6">

                                    <Icon size={32} />

                                </div>

                                <h3 className="mt-6 text-2xl font-bold">
                                    {value.title}
                                </h3>

                                <p className="mt-4 leading-8 text-slate-600">
                                    {value.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default CoreValues;