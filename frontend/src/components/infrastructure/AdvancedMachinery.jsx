import {
    Cpu,
    Factory,
    Hammer,
    Wrench,
} from "lucide-react";

const machines = [
    {
        icon: Cpu,
        title: "CNC Machines",
        description: "High-precision CNC machining for complex industrial components.",
    },
    {
        icon: Factory,
        title: "Heavy Fabrication",
        description: "Advanced fabrication units for large-scale industrial equipment.",
    },
    {
        icon: Hammer,
        title: "Precision Welding",
        description: "Certified welding processes ensuring strength and durability.",
    },
    {
        icon: Wrench,
        title: "Testing Equipment",
        description: "Comprehensive inspection and testing before product delivery.",
    },
];

const AdvancedMachinery = () => {
    return (
        <section className="bg-slate-50 py-14">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Technology
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        Advanced Machinery
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {machines.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >

                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                    <Icon className="text-blue-600" size={30} />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-slate-600 leading-7">
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

export default AdvancedMachinery;