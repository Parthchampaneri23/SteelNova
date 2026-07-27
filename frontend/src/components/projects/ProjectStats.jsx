import {
    FaIndustry,
    FaProjectDiagram,
    FaUsers,
    FaGlobeAsia,
} from "react-icons/fa";

const stats = [
    {
        icon: FaProjectDiagram,
        value: "150+",
        label: "Projects Delivered",
    },
    {
        icon: FaUsers,
        value: "600+",
        label: "Satisfied Clients",
    },
    {
        icon: FaIndustry,
        value: "8+",
        label: "Industries Served",
    },
    {
        icon: FaGlobeAsia,
        value: "25+",
        label: "Countries Served",
    },
];

const ProjectStats = () => {
    return (
        <section className="bg-slate-900 py-14">

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
                                        size={36}
                                        className="text-blue-500 transition-all duration-500 group-hover:text-white"
                                    />

                                </div>

                                <h3 className="mt-6 text-5xl font-bold text-white">
                                    {item.value}
                                </h3>

                                <p className="mt-3 text-slate-300">
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

export default ProjectStats;