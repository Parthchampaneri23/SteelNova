import { industries } from "../../data/industries";
import IndustryCard from "./IndustryCard";

const IndustriesSection = () => {
    return (
        <section className="bg-white py-14">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">

                    <span className="font-semibold uppercase tracking-[0.3em] text-blue-600">
                        Industries We Serve
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        Trusted Across Multiple Industrial Sectors
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                        SteelNova delivers dependable engineering solutions for diverse
                        industries with quality, innovation and precision.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {industries.map((industry) => (
                        <IndustryCard
                            key={industry.id}
                            industry={industry}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
};

export default IndustriesSection;