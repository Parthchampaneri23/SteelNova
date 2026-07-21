import {
    Globe2,
    Building2,
    Users,
    Factory,
} from "lucide-react";

import worldMap from "/about/world-map.png";

const stats = [
    {
        icon: Globe2,
        number: "25+",
        title: "Countries Served",
    },
    {
        icon: Building2,
        number: "1500+",
        title: "Projects Delivered",
    },
    {
        icon: Users,
        number: "600+",
        title: "Happy Clients",
    },
    {
        icon: Factory,
        number: "18+",
        title: "Years Experience",
    },
];

const GlobalPresence = () => {
    return (
        <section className="bg-white py-16">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Global Presence
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Delivering Engineering Excellence Worldwide
                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600">
                        SteelNova serves industries across the globe with
                        precision manufacturing, engineering excellence,
                        and reliable industrial solutions.
                    </p>

                </div>

                {/* World Map */}

                <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-8 px-6 shadow-2xl">

                    <img
                        src={worldMap}
                        alt="Global Presence"
                        className="mx-auto w-full max-w-3xl object-contain transition duration-500 hover:scale-105"
                    />

                </div>

                {/* Statistics */}

                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {stats.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="group rounded-3xl bg-slate-50 p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >

                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">

                                    <Icon size={30} />

                                </div>

                                <h3 className="mt-6 text-4xl font-bold text-blue-600">
                                    {item.number}
                                </h3>

                                <p className="mt-3 text-slate-600">
                                    {item.title}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default GlobalPresence;