const ProjectHero = () => {
    return (
        <section
            className="relative h-[280px] flex items-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/projects/projects-hero.png')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/70"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-5">
                <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white sm:px-4 sm:py-1.5 sm:text-xs">
                    Our Projects
                </span>

                <h1 className="mt-2 max-w-3xl text-xl font-bold leading-snug text-white sm:mt-3 sm:text-4xl lg:text-5xl">
                    Engineering Excellence <br className="hidden sm:block" />
                    Delivered Worldwide
                </h1>

                <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-200 sm:mt-3 sm:text-base sm:leading-7">
                    Explore some of our successful industrial projects across
                    Oil & Gas, Chemical Processing, and Water Treatment industries.
                </p>
            </div>
        </section>
    );
};

export default ProjectHero;