import {
    Users,
    GraduationCap,
    Rocket,
    Briefcase,
} from "lucide-react";

const features = [
    {
        icon: <Users size={32} />,
        title: "Collaborative Culture",
        desc: "Work with experienced engineers and industry professionals.",
    },
    {
        icon: <GraduationCap size={32} />,
        title: "Continuous Learning",
        desc: "Regular technical training and career development programs.",
    },
    {
        icon: <Rocket size={32} />,
        title: "Career Growth",
        desc: "Clear growth opportunities across multiple engineering domains.",
    },
    {
        icon: <Briefcase size={32} />,
        title: "Modern Workplace",
        desc: "Advanced manufacturing facilities with latest technology.",
    },
];

const WhyJoin = () => {
    return (
        <section className="py-14 bg-white">

            <div className="max-w-7xl mx-auto px-4 lg:px-5 grid lg:grid-cols-2 gap-16 items-center">

                <img
                    src="/career/join-team.jpg"
                    alt="Join Team"
                    className="rounded-3xl shadow-xl"
                />

                <div>

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Why SteelNova
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        Grow With Innovation
                    </h2>

                    <p className="mt-6 text-lg text-slate-600 leading-8">
                        At SteelNova, we believe our people are our greatest
                        strength. We encourage innovation, teamwork and
                        professional excellence.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-10">

                        {features.map((item, index) => (

                            <div
                                key={index}
                                className="rounded-2xl bg-slate-50 p-6 shadow hover:shadow-lg transition"
                            >
                                <div className="text-blue-600">
                                    {item.icon}
                                </div>

                                <h3 className="mt-4 font-bold text-xl">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-slate-600">
                                    {item.desc}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default WhyJoin;