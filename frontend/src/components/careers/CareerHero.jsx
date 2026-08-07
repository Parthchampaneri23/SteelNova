const CareerHero = () => {
    return (
        <section
            className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/career/careers-hero.png')",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-900/70"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl px-6 text-center text-white">

                <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider sm:px-4 sm:py-1.5 sm:text-xs">
                    Careers
                </span>

                <h1 className="mt-2 text-2xl font-extrabold leading-snug sm:mt-4 sm:text-4xl md:text-5xl">
                    Build Your Future With SteelNova
                </h1>

                <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-200 sm:mt-4 sm:text-base sm:leading-7 md:text-lg">
                    Join a team of passionate engineers, innovators and
                    industry professionals dedicated to building world-class
                    industrial solutions.
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-3 sm:mt-6 sm:gap-4">

                    <a
                        href="#positions"
                        className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold transition hover:bg-blue-700 sm:px-6 sm:py-3 sm:text-sm"
                    >
                        View Open Positions
                    </a>

                    <a
                        href="#apply"
                        className="rounded-xl border border-white px-4 py-2 text-xs font-semibold transition hover:bg-white hover:text-slate-900 sm:px-6 sm:py-3 sm:text-sm"
                    >
                        Apply Now
                    </a>

                </div>

            </div>
        </section>
    );
};

export default CareerHero;