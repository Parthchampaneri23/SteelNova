const ResourcesHero = () => {
    return (
        <section
            className="relative h-[45vh] flex items-center justify-center text-white"
            style={{
                backgroundImage: "url('/resources/resources-hero.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-slate-900/70"></div>

            <div className="relative z-10 max-w-4xl px-6 text-center">

                <span className="inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold uppercase tracking-wider">
                    Resources
                </span>

                <h1 className="mt-6 text-5xl md:text-6xl font-bold">
                    Knowledge, Documentation & Certifications
                </h1>

                <p className="mt-8 text-lg text-slate-200 leading-8">
                    Access technical resources, product catalogues, certifications,
                    engineering insights and industrial documentation.
                </p>

            </div>
        </section>
    );
};

export default ResourcesHero;