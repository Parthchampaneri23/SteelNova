const AboutHero = () => {
    return (
        <section className="relative flex h-[70vh] items-center justify-center overflow-hidden bg-slate-900">

            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="../../../src/assets/images/hero/hero-1.png"
                    alt="SteelNova"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">

                <span className="rounded-full border border-blue-400/50 bg-blue-500/20 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em]">
                    About SteelNova
                </span>

                <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
                    Engineering Excellence <br />
                    Built To Last
                </h1>

                <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-200 leading-9">
                    SteelNova delivers innovative industrial solutions through
                    precision engineering, advanced manufacturing, and a commitment
                    to quality that industries worldwide trust.
                </p>

            </div>

        </section>
    );
};

export default AboutHero;