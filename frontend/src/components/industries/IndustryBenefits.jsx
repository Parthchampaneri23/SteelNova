import {
    BadgeCheck,
    Cog,
    Globe2,
    ShieldCheck,
} from "lucide-react";

const benefits = [
    {
        icon: Cog,
        title: "Engineering Expertise",
        description:
            "Advanced engineering solutions designed for demanding industrial applications.",
    },
    {
        icon: ShieldCheck,
        title: "Certified Quality",
        description:
            "Manufactured under strict quality standards with reliable performance.",
    },
    {
        icon: BadgeCheck,
        title: "Custom Manufacturing",
        description:
            "Tailor-made fabrication and equipment built to customer specifications.",
    },
    {
        icon: Globe2,
        title: "Global Delivery",
        description:
            "Serving industries across India and international markets with timely delivery.",
    },
];

const IndustryBenefits = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Why SteelNova
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        Why Industries Trust Us
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {benefits.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="rounded-3xl border bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
                            >

                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                    <Icon size={30} className="text-blue-600" />
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

export default IndustryBenefits;