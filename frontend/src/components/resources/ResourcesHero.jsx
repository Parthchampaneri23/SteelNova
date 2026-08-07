const ResourcesHero = () => {
    return (
        <section
            className="relative h-[40vh] flex items-center justify-center bg-cover bg-center text-white"
            style={{
                backgroundImage: "url('/resources/resources-hero.png')",
            }}
        >

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-900/70"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl px-6 text-center">

                <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider sm:px-4 sm:py-1.5 sm:text-xs">
                    Resources
                </span>

                <h1 className="mt-2 text-2xl font-extrabold leading-snug sm:mt-4 sm:text-4xl md:text-5xl">
                    Knowledge, Documentation & Certifications
                </h1>

                <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-200 sm:mt-4 sm:text-base sm:leading-7 md:text-lg">
                    Access technical resources, product catalogues, certifications,
                    engineering insights and industrial documentation.
                </p>

            </div>

        </section>
    );
};

export default ResourcesHero;