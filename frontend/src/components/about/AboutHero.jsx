const AboutHero = () => {
    return (
        <section
            className="relative h-[40vh] flex items-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/about/hero-1.png')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/70"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-5">
                <span className="inline-block rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                    About SteelNova
                </span>

                <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
                    Engineering Excellence <br />
                    Built To Last
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200 md:text-lg md:leading-7">
                    SteelNova delivers innovative industrial solutions through
                    precision engineering, advanced manufacturing, and a
                    commitment to quality that industries worldwide trust.
                </p>
            </div>
        </section>
    );
};

export default AboutHero;