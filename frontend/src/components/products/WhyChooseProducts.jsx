import {
    ShieldCheck,
    BadgeCheck,
    Factory,
    Truck,
} from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Premium Quality",
        description:
            "Every product undergoes strict quality inspections to meet international standards.",
    },
    {
        icon: BadgeCheck,
        title: "Certified Manufacturing",
        description:
            "Manufactured using ISO-certified processes for superior reliability and performance.",
    },
    {
        icon: Factory,
        title: "Advanced Engineering",
        description:
            "Modern manufacturing facilities equipped with advanced machinery and skilled engineers.",
    },
    {
        icon: Truck,
        title: "Worldwide Delivery",
        description:
            "Efficient logistics network delivering products safely across domestic and international markets.",
    },
];

const WhyChooseProducts = () => {
    return (
        <section className="bg-white py-14">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Why Choose Us
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Engineered For Performance
                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600">
                        We combine innovation, quality and engineering excellence
                        to deliver industrial products trusted worldwide.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="rounded-3xl bg-slate-50 p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                                    <Icon size={32} />
                                </div>

                                <h3 className="text-2xl font-bold">
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

export default WhyChooseProducts;