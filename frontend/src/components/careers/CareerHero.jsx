const CareerHero = () => {
    return (
        <section
            className="relative min-h-[380px] py-12 flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/career/careers-hero.png')",
            }}
        >
            <div className="absolute inset-0 bg-slate-900/65"></div>

            <div className="relative z-10 flex items-center justify-center">
                <div className="max-w-4xl px-6 text-center text-white">

                    <span className="inline-block rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                        Careers
                    </span>

                    <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
                        Build Your Future With SteelNova
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg leading-7 text-slate-200">
                        Join a team of passionate engineers, innovators and
                        industry professionals dedicated to building world-class
                        industrial solutions.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-4">

                        <a
                            href="#positions"
                            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-700"
                        >
                            View Open Positions
                        </a>

                        <a
                            href="#apply"
                            className="rounded-xl border border-white px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-slate-900"
                        >
                            Apply Now
                        </a>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default CareerHero;