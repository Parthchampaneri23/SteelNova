import {
    HeartHandshake,
    GraduationCap,
    BriefcaseBusiness,
    TrendingUp,
    ShieldCheck,
    Wallet,
} from "lucide-react";

const benefits = [
    {
        icon: <Wallet size={36} />,
        title: "Competitive Salary",
        description:
            "Industry-leading compensation packages with performance-based incentives.",
    },
    {
        icon: <HeartHandshake size={36} />,
        title: "Health & Wellness",
        description:
            "Comprehensive medical benefits and employee wellness initiatives.",
    },
    {
        icon: <GraduationCap size={36} />,
        title: "Learning & Development",
        description:
            "Continuous technical training, certifications and skill development.",
    },
    {
        icon: <TrendingUp size={36} />,
        title: "Career Growth",
        description:
            "Clear career progression with opportunities to lead innovative projects.",
    },
    {
        icon: <BriefcaseBusiness size={36} />,
        title: "Modern Workplace",
        description:
            "Work with advanced manufacturing technologies in a collaborative environment.",
    },
    {
        icon: <ShieldCheck size={36} />,
        title: "Job Security",
        description:
            "Long-term career opportunities with a trusted industrial organization.",
    },
];

const Benefits = () => {
    return (
        <section className="bg-slate-50 py-14">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Employee Benefits
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Why You'll Love Working Here
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
                        We invest in our people by providing a supportive work
                        environment, excellent benefits and opportunities to
                        grow professionally.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {benefits.map((benefit, index) => (

                        <div
                            key={index}
                            className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            <div className="inline-flex rounded-2xl bg-blue-100 p-4 text-blue-600">
                                {benefit.icon}
                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                {benefit.title}
                            </h3>

                            <p className="mt-4 leading-7 text-slate-600">
                                {benefit.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Benefits;