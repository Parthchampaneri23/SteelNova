import { processSteps } from "../../data/process";
import ProcessCard from "./ProcessCard";

const ManufacturingProcess = () => {
    return (
        <section className="bg-slate-50 py-14">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-20">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Manufacturing Process
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Precision At Every Stage
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
                        Every product is engineered through a streamlined manufacturing
                        process that ensures accuracy, efficiency and uncompromising quality.
                    </p>

                </div>

                <div className="relative">

                    {/* Blue Line */}

                    <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-slate-200">

                        <div className="h-full w-full bg-blue-600 rounded-full"></div>

                    </div>

                    <div className="grid gap-16 lg:grid-cols-4 relative">

                        {processSteps.map((step) => (
                            <ProcessCard
                                key={step.id}
                                step={step}
                            />
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ManufacturingProcess;