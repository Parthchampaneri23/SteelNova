const timeline = [
    {
        year: "2007",
        title: "Company Founded",
        description:
            "SteelNova began its journey with a vision to deliver reliable industrial engineering solutions.",
    },
    {
        year: "2012",
        title: "Manufacturing Expansion",
        description:
            "Expanded production capacity with advanced machinery and skilled engineering teams.",
    },
    {
        year: "2018",
        title: "Global Exports",
        description:
            "Successfully entered international markets, supplying industries across multiple countries.",
    },
    {
        year: "2022",
        title: "Quality Excellence",
        description:
            "Strengthened quality management systems to meet international industrial standards.",
    },
    {
        year: "2026",
        title: "Trusted Worldwide",
        description:
            "Serving hundreds of clients with precision-engineered industrial products worldwide.",
    },
];

const OurStory = () => {
    return (
        <section className="bg-slate-50 py-16">

            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Our Journey
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        The SteelNova Story
                    </h2>

                    <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
                        Every milestone reflects our commitment to innovation,
                        quality, and long-term customer partnerships.
                    </p>

                </div>

                <div className="relative">

                    {/* Vertical Line */}

                    <div className="absolute left-5 top-0 h-full w-1 bg-blue-200"></div>

                    <div className="space-y-12">

                        {timeline.map((item) => (

                            <div
                                key={item.year}
                                className="relative flex gap-8"
                            >

                                {/* Dot */}

                                <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow-lg">
                                    ✓
                                </div>

                                {/* Card */}

                                <div className="flex-1 rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                                    <span className="text-blue-600 font-bold text-lg">
                                        {item.year}
                                    </span>

                                    <h3 className="mt-2 text-2xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-slate-600 leading-8">
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default OurStory;