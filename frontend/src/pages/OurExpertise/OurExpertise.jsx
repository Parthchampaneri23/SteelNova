import React from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Factory,
    Building2,
    BriefcaseBusiness,
    CheckCircle2,
    Settings,
    ShieldCheck,
    Wrench,
    Users,
} from "lucide-react";

const expertiseData = [
    {
        title: "Industries",
        subtitle: "Industries We Serve",
        description:
            "Reliable industrial equipment and engineered solutions designed to meet the demanding requirements of diverse industrial sectors.",
        image: "/industries/industries-hero.png",
        link: "/industries",
        icon: Factory,
    },
    {
        title: "Infrastructure",
        subtitle: "Manufacturing Infrastructure",
        description:
            "Modern manufacturing infrastructure, advanced machinery and quality-focused facilities supporting reliable industrial solutions.",
        image: "/infrastructure/infrastructure-hero.png",
        link: "/infrastructure",
        icon: Building2,
    },
    {
        title: "Projects",
        subtitle: "Our Project Experience",
        description:
            "Proven project execution across industrial applications with a focus on quality, reliability and successful delivery.",
        image: "/projects/projects-hero.png",
        link: "/projects",
        icon: BriefcaseBusiness,
    },
];

const capabilities = [
    {
        title: "Engineering Excellence",
        description:
            "Engineering-driven solutions designed around application requirements and operational performance.",
        icon: Settings,
    },
    {
        title: "Quality Manufacturing",
        description:
            "Controlled manufacturing processes focused on precision, consistency and dependable results.",
        icon: ShieldCheck,
    },
    {
        title: "Custom Fabrication",
        description:
            "Fabrication capabilities supporting customized industrial equipment and project-specific requirements.",
        icon: Wrench,
    },
    {
        title: "Industry Expertise",
        description:
            "Practical experience across multiple industrial sectors and demanding operating environments.",
        icon: Users,
    },
];

const OurExpertise = () => {
    return (
        <main className="bg-white">

            {/* =====================================================
                HERO / BANNER
            ===================================================== */}
            <section
                className="relative h-[40vh] flex items-center bg-cover bg-center text-white"
                style={{
                    backgroundImage:
                        "url('/our-expertise/our-expertise.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-slate-950/65" />

                {/* Content */}
                <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-5">

                    <div className="max-w-3xl text-left">

                        <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white sm:px-4 sm:py-1.5 sm:text-xs">
                            Our Expertise
                        </span>

                        <h1 className="mt-2 max-w-3xl text-2xl font-extrabold leading-snug text-white sm:mt-3 sm:text-4xl md:text-5xl">
                            Engineering Excellence
                            <br />
                            Across Industries
                        </h1>

                        <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-200 sm:mt-3 sm:text-base sm:leading-7 md:text-lg">
                            Delivering reliable engineering solutions through industry
                            expertise, advanced infrastructure and proven project
                            capabilities.
                        </p>
                    </div>
                </div>
            </section>


            {/* =====================================================
                CORE EXPERTISE
            ===================================================== */}
            <section className="bg-slate-50 py-12 lg:py-14">
                <div className="mx-auto max-w-7xl px-4 lg:px-6">

                    <div className="mx-auto mb-14 max-w-3xl text-center">

                        <span className="font-semibold uppercase tracking-[0.3em] text-blue-600">
                            What We Do
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                            Our Core Expertise
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Explore our industrial capabilities, manufacturing
                            infrastructure and project experience.
                        </p>

                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">

                        {expertiseData.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                >
                                    <div className="relative overflow-hidden">

                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

                                        <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                                            <Icon size={23} />
                                        </div>

                                    </div>

                                    <div className="p-7">

                                        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                            {item.subtitle}
                                        </span>

                                        <h3 className="mt-2 text-2xl font-bold text-slate-900">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 leading-7 text-slate-600">
                                            {item.description}
                                        </p>

                                        <Link
                                            to={item.link}
                                            className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-800"
                                        >
                                            Explore {item.title}
                                            <ArrowRight size={18} />
                                        </Link>

                                    </div>
                                </article>
                            );
                        })}

                    </div>
                </div>
            </section>


            {/* =====================================================
                ENGINEERING & MANUFACTURING
            ===================================================== */}
            <section className="bg-white py-14 lg:py-12">
                <div className="mx-auto max-w-7xl px-4 lg:px-6">

                    <div className="grid items-center gap-12 lg:grid-cols-2">

                        <div>

                            <span className="font-semibold uppercase tracking-[0.3em] text-blue-600">
                                Engineering & Manufacturing
                            </span>

                            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                                Built Around
                                <span className="block text-blue-600">
                                    Quality & Reliability
                                </span>
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                SteelNova combines engineering knowledge,
                                manufacturing capabilities and practical
                                industrial experience to deliver solutions
                                designed for demanding operating environments.
                            </p>

                            <p className="mt-4 leading-7 text-slate-600">
                                Our integrated approach enables us to support
                                customers from initial requirements and
                                engineering through manufacturing, fabrication
                                and project execution.
                            </p>

                            <Link
                                to="/about"
                                className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700"
                            >
                                Learn More About SteelNova
                                <ArrowRight size={18} />
                            </Link>

                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">

                            {[
                                "Engineering Expertise",
                                "Quality Manufacturing",
                                "Reliable Solutions",
                                "Industry Experience",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-blue-200 hover:bg-blue-50"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                                        <CheckCircle2
                                            className="text-blue-600"
                                            size={21}
                                        />
                                    </div>

                                    <span className="font-semibold text-slate-800">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                CAPABILITIES
            ===================================================== */}
            <section className="bg-slate-50 py-14 lg:py-12">
                <div className="mx-auto max-w-7xl px-4 lg:px-6">

                    <div className="mx-auto mb-14 max-w-3xl text-center">

                        <span className="font-semibold uppercase tracking-[0.3em] text-blue-600">
                            Our Capabilities
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                            What Sets Us Apart
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            A combination of engineering expertise, modern
                            manufacturing and industry-focused execution.
                        </p>

                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                        {capabilities.map((capability) => {
                            const Icon = capability.icon;

                            return (
                                <div
                                    key={capability.title}
                                    className="rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                                        {capability.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {capability.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>


            {/* =====================================================
                CTA
            ===================================================== */}
            <section className="relative overflow-hidden bg-blue-600 py-20">

                <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-800/20 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-5xl px-4 text-center lg:px-6">

                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
                        Let's Work Together
                    </span>

                    <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Have an Industrial Requirement?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                        Talk to our team about your application, equipment or
                        project requirements and discover the right solution
                        for your needs.
                    </p>

                    <Link
                        to="/contact#quote-form"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-3.5 font-bold text-blue-600 shadow-lg transition-all hover:bg-slate-100"
                    >
                        Request A Quote
                        <ArrowRight size={19} />
                    </Link>

                </div>
            </section>

        </main>
    );
};

export default OurExpertise;