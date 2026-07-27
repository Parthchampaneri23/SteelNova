const CareerHero = () => {
    return (
        <section
            className="relative h-[70vh] bg-cover bg-center"
            style={{
                backgroundImage: "url('/career/careers-hero.png')",
            }}
        >
            <div className="absolute inset-0 bg-slate-900/65"></div>

            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="max-w-4xl px-6 text-center text-white">

                    <span className="inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold uppercase tracking-wider">
                        Careers
                    </span>

                    <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
                        Build Your Future
                        <br />
                        With SteelNova
                    </h1>

                    <p className="mt-8 text-xl leading-9 text-slate-200">
                        Join a team of passionate engineers, innovators and
                        industry professionals dedicated to building world-class
                        industrial solutions.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <a
                            href="#positions"
                            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
                        >
                            View Open Positions
                        </a>

                        <a
                            href="#apply"
                            className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
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