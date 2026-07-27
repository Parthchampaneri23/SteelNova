import {
    FaIndustry,
    FaUsers,
    FaGlobeAsia,
    FaAward,
} from "react-icons/fa";

const stats = [
    {
        icon: FaIndustry,
        value: "150+",
        label: "Projects Completed",
    },
    {
        icon: FaUsers,
        value: "600+",
        label: "Industrial Clients",
    },
    {
        icon: FaGlobeAsia,
        value: "25+",
        label: "Countries Served",
    },
    {
        icon: FaAward,
        value: "20+",
        label: "Years Experience",
    },
];

const InfrastructureStats = () => {
    return (
        <section className="bg-slate-900 py-16">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {stats.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="group rounded-3xl border border-slate-800 bg-slate-800 p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl"
                            >

                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/10 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-blue-600">

                                    <Icon
                                        size={38}
                                        className="text-blue-500 transition-all duration-500 group-hover:text-white"
                                    />

                                </div>

                                <h3 className="mt-6 text-5xl font-bold text-white transition duration-300 group-hover:text-blue-400">
                                    {item.value}
                                </h3>

                                <p className="mt-4 text-slate-300">
                                    {item.label}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default InfrastructureStats;