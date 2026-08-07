const ProjectHero = () => {
    return (
        <section
            className="relative h-[280px] flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/projects/projects-hero.png')",
            }}
        >
            <div className="absolute inset-0 bg-slate-900/70"></div>

            <div className="relative z-10 max-w-4xl px-6 pt-6 sm:pt-8 text-center text-white">

                <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-[10px] sm:px-5 sm:py-2 sm:text-sm font-semibold uppercase tracking-wider">
                    Our Projects
                </span>

                <h1 className="mt-2 sm:mt-4 text-xl sm:text-4xl lg:text-6xl font-bold leading-snug sm:leading-tight">
                    Engineering Excellence <br className="hidden sm:block" />
                    Delivered Worldwide
                </h1>

                <p className="mx-auto mt-2 sm:mt-3 max-w-3xl text-xs sm:text-base leading-5 sm:leading-7 text-slate-200 hidden sm:block">
                    Explore some of our successful industrial projects across
                    Oil & Gas, Chemical Processing, and Water Treatment industries.
                </p>

            </div>
        </section>
    );
};

export default ProjectHero;