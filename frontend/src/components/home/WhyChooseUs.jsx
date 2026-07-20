import { features } from "../../data/features";
import FeatureCard from "./FeatureCard";

const WhyChooseUs = () => {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">

                    <span className="font-semibold uppercase tracking-[0.3em] text-blue-600">
                        Why Choose SteelNova
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        Delivering Engineering Excellence
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                        Combining innovation, precision engineering, and customer-focused
                        manufacturing to deliver industrial solutions you can rely on.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            feature={feature}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;