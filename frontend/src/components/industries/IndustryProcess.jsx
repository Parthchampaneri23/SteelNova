import {
    ClipboardList,
    PencilRuler,
    Factory,
    ShieldCheck,
    Truck,
} from "lucide-react";

const steps = [
    {
        icon: ClipboardList,
        title: "Consultation",
    },
    {
        icon: PencilRuler,
        title: "Engineering",
    },
    {
        icon: Factory,
        title: "Manufacturing",
    },
    {
        icon: ShieldCheck,
        title: "Quality Inspection",
    },
    {
        icon: Truck,
        title: "Delivery",
    },
];

const IndustryProcess = () => {
    return (
        <section className="bg-slate-50 py-16">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Our Process
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        From Concept To Delivery
                    </h2>

                </div>

                <div className="grid gap-8 md:grid-cols-5">

                    {steps.map((step, index) => {

                        const Icon = step.icon;

                        return (

                            <div
                                key={index}
                                className="text-center"
                            >

                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition hover:scale-110">
                                    <Icon size={34} />
                                </div>

                                <h3 className="mt-6 text-xl font-bold">
                                    {step.title}
                                </h3>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default IndustryProcess;