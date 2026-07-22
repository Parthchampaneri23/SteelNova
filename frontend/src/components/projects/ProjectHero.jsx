const ProjectHero = () => {
    return (
        <section
            className="relative flex h-[70vh] items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/projects/projects-hero.png')",
            }}
        >
            <div className="absolute inset-0 bg-slate-900/70"></div>

            <div className="relative z-10 max-w-4xl px-6 text-center text-white">

                <span className="rounded-full border border-blue-400 px-5 py-2 text-sm uppercase tracking-[0.3em]">
                    Our Projects
                </span>

                <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">
                    Engineering Excellence <br />
                    Delivered Worldwide
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                    Explore some of our successful industrial projects across
                    Oil & Gas, Chemical Processing, and Water Treatment industries.
                </p>

            </div>
        </section>
    );
};

export default ProjectHero;