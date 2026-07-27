import { CheckCircle2 } from "lucide-react";

const QualityControl = () => {

    const points = [
        "ISO Certified Manufacturing",
        "Raw Material Inspection",
        "Pressure & Performance Testing",
        "Dimensional Accuracy Checks",
        "Final Quality Assurance",
    ];

    return (
        <section className="py-14 bg-white">

            <div className="max-w-7xl mx-auto px-4 lg:px-5 grid lg:grid-cols-2 gap-16 items-center">

                <img
                    src="/infrastructure/quality-control.png"
                    alt="Quality Control"
                    className="rounded-3xl shadow-xl transition duration-500 hover:scale-105"
                />

                <div>

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Quality Assurance
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        Quality At Every Stage
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Every product undergoes strict quality inspection and testing
                        before reaching our customers.
                    </p>

                    <div className="mt-8 space-y-4">

                        {points.map((point, index) => (

                            <div key={index} className="flex items-center gap-3">

                                <CheckCircle2 className="text-blue-600" />

                                <span>{point}</span>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default QualityControl;